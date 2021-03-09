$(function () {
    var myObject; //объект задачи
    var objectType; //тип объекта задачи
    var editForm; //форма редактирования задачи

    DevExpress.localization.locale("ru");
    $("#gridJobs").dxDataGrid({
        dataSource: {
            store: DevExpress.data.AspNet.createStore({
                key: "Title",
                loadUrl: "/LoadJobs",
                insertUrl: "/InsertJob",
                updateUrl: "/UpdateJob",
                deleteUrl: "/DeleteJob",
                onBeforeSend: function (method, ajaxOptions) {
                    ajaxOptions.xhrFields = { withCredentials: true, };
                }
            }),
            reshapeOnPush: true
        },
        repaintChangesOnly: true,
        remoteOperations: true,
        editing: {  
            mode: "popup",
            useIcons: true,
            popup: {
                title: "Задача",
                showTitle: true,
                width: 700
            },

            form: { 
                colCount: 1,
                items: ["Title",
                    {
                        dataField: "Cron",
                        editorType: "dxTextBox",
                        editorOptions: {
                            onChange: function (data) {
                                var a = data.component.option('value');
                                descriptCron(a);
                            }
                        },

                    },
                    {
                        dataField: "CronDesc",
                        editorType: "dxTextBox",
                        editorOptions: {
                            disabled: true,
                            name: "descCron"
                        }

                    },
                    {
                        dataField: "ObjectType"
                    },
                    {
                        itemType: 'group',
                        caption: "Параметры задачи",
                        items: [{
                            dataField: "ObjectJson",
                            label: {
                                visible:false
                            }
                        }]

                    }],
                onInitialized: function (e) {
                    editForm = e.component;
                }
            },

            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true
        },

        export: {
            enabled: true,
            allowExportSelectedData: true
        },

        onExporting: function (e) {
            var workbook = new ExcelJS.Workbook();
            var worksheet = workbook.addWorksheet('Выгрузка');

            DevExpress.excelExporter.exportDataGrid({
                component: e.component,
                worksheet: worksheet,
                autoFilterEnabled: true
            }).then(function () {
                workbook.xlsx.writeBuffer().then(function (buffer) {
                    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Выгрузка в Excel.xlsx');
                });
            });
            e.cancel = true;
        },

        columns: [
            {
                type: "buttons",
                buttons: ["edit", "delete",
                    {
                        icon: "fas fa-pause-circle",
                        visible: function (e) {
                            return e.row.data.Status;
                        },
                        hint: "Пауза",
                        cssClass: 'dx-link',
                        onClick: function (e) {
                            jobStatus(e);
                        }
                    },
                    {
                        icon: 'video',
                        visible: function (e) {
                            return !e.row.data.Status;
                        },
                        hint: "Старт",
                        cssClass: 'dx-link',
                        onClick: function (e) {
                            jobStatus(e);
                        }
                    }
                ],

            },
            {
                dataField: "Title",
                caption: "Идентификатор",
                validationRules: [{
                    type: "required",
                    message: "Идентификатор должен быть заполнен."
                }]
            },
            {
                dataField: "Cron",
                caption: "Расписание(в Cron)",
                validationRules: [{
                    type: "required",
                    message: "Расписание должно быть заполнено."
                }],
                visible: false
            },
            {
                dataField: "CronDesc",
                caption: "Расписание"
            },
            {
                dataField: "Next",
                caption: "Время следующего исполнения"
            },
            {
                dataField: "ObjectType",
                caption: "Тип задачи",
                editCellTemplate: function (cellElement, cellInfo) {
                    $("<div />").dxSelectBox({
                        name: "Type",
                        items: [{ "name": "Сообщение", "value": "Message" }, { "name": "Тестер", "value": "Tester" }],
                        displayExpr: "name",
                        valueExpr: "value",
                        onItemClick: function (data) {
                            switch (data.itemData.value)
                            {
                                case "Message": {
                                    myObject.option("formData", {"To": "", "Subject": "", "Body": "" });
                                    var a = [
                                        {
                                            dataField: "To",
                                            label: {
                                                text:'Получатели'
                                            },
                                            editorType: "dxTagBox",
                                            editorOptions: {
                                                items: ["azenshpis@gmail.com", "selyutinvi@gmail.com"],
                                                acceptCustomValue: true                                               
                                            }
                                        },
                                        {
                                            dataField: "Subject",
                                            label: {
                                                text: 'Тема письма'
                                            }
                                        },
                                        {
                                            dataField: "Body",
                                            label: {
                                                text: 'Текст сообщения'
                                            },
                                            editorType: "dxTextArea",
                                            editorOptions: {
                                                height: 100
                                            }
                                        },
                                        {
                                            dataField: "Span",
                                            label: {
                                                text: 'Период загрузки'
                                            },
                                            editorType: "dxTextBox",
                                            editorOptions: {
                                                maskRules: {
                                                    H: char => char >= 0 && char <= 2,
                                                    h: (char, index, fullStr) => {
                                                        if (fullStr[3] == '2')
                                                            return [0, 1, 2, 3].includes(parseInt(char));
                                                        else
                                                            return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(parseInt(char));
                                                    },
                                                    M: char => char >= 0 && char <= 5,
                                                    m: char => char >= 0 && char <= 9,
                                                    D: char => char >= 0 && char <= 9,
                                                    d: char => char >= 0 && char <= 9
                                                },
                                                mask: "Dd.Hh:Mm",
                                                useMaskedValue: true
                                            }
                                        },
                                        {
                                            dataField: "Status",
                                            label: {
                                                text: 'При наличии данных'
                                            },
                                            editorType: "dxCheckBox"
                                        }
                                    ];
                                    myObject.option("items",a);
                                    break;
                                }
                                case "Tester": {
                                    var a = [
                                        {
                                            dataField: "Key",
                                            colSpan: 2
                                        }];
                                    myObject.option("items", a);
                                    myObject.option("formData", { "Key": "" });
                                    break;
                                }
                            };
                            cellInfo.setValue(data.itemData.value);
                        },
                        onInitialized: function (e) {                            
                            e.component.option("value", cellInfo.value)
                        }
                    }).appendTo(cellElement);
                },
                

            },
            {
                dataField: "Status",
            },
            {
                dataField: "ObjectJson",
                caption: "Параметры задачи",
                editCellTemplate: function (cellElement, cellInfo) {

                    $("<div />").dxForm({
                        colCount:2,
                        onInitialized: function (e) {
                            myObject = e.component;
                            if (cellInfo.value != undefined) {
                                switch (cellInfo.row.data.ObjectType) {
                                    case "Message":
                                        {

                                            var data = JSON.parse(cellInfo.value);
                                            myObject.option("formData", data);

                                            var a = [
                                                {
                                                    dataField: "To",
                                                    label: {
                                                        text: 'Получатели'
                                                    },
                                                    editorType: "dxTagBox",
                                                    editorOptions: {
                                                        items: ["azenshpis@gmail.com", "selyutinvi@gmail.com"],
                                                        acceptCustomValue: true
                                                    }
                                                },
                                                {
                                                    dataField: "Subject",
                                                    label: {
                                                        text: 'Тема письма'
                                                    }
                                                },
                                                {
                                                    dataField: "Body",
                                                    label: {
                                                        text: 'Текст сообщения'
                                                    },
                                                    editorType: "dxTextArea",
                                                    editorOptions: {
                                                        height: 100
                                                    }
                                                },
                                                {
                                                    dataField: "Span",
                                                    label: {
                                                        text: 'Период'
                                                    },
                                                    editorType: "dxTextBox",
                                                    editorOptions: {
                                                        maskRules: {
                                                            H: char => char >= 0 && char <= 2,
                                                            h: (char, index, fullStr) => {
                                                                if (fullStr[3] == '2')
                                                                    return [0, 1, 2, 3].includes(parseInt(char));
                                                                else
                                                                    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(parseInt(char));
                                                            },
                                                            M: char => char >= 0 && char <= 5,
                                                            m: char => char >= 0 && char <= 9,
                                                            D: char => char >= 0 && char <= 9,
                                                            d: char => char >= 0 && char <= 9,
                                                        },
                                                        mask: "Dd.Hh:Mm",
                                                        useMaskedValue: true,
                                                        maskInvalidMessage: "Ашибка!"
                                                    }
                                                },
                                                {
                                                    dataField: "Status",
                                                    label: {
                                                        text: 'При загрузке'
                                                    },
                                                    editorType: "dxCheckBox"
                                                }
                                            ];
                                            myObject.option("items", a);


                                            break;
                                        }
                                    case "Tester":
                                        {
                                            var data = JSON.parse(cellInfo.value);
                                            myObject.option("formData", data);

                                            var a = [{
                                                dataField: "Key",
                                                colSpan: 2
                                            }];
                                            myObject.option("items", a);

                                            break;
                                        }
                                    default:
                                        {
                                            var data = JSON.parse(cellInfo.value);
                                            $("<div />").dxForm({
                                                formData: data,
                                                onInitialized: function (e) {
                                                    myObject = e.component;
                                                }
                                            }).appendTo(cellElement)
                                            break;
                                        }

                                };
                            };
                        },
                        onFieldDataChanged: function (e) {
                            var a = JSON.stringify(myObject.option("formData"));
                            cellInfo.setValue(a);
                        },


                    }).appendTo(cellElement);
                    
                }
            }
        ],

        showBorders: true
    });

    function descriptCron(data) {
        $.ajax({
            url: "/Descriptor/" + data,
            type: 'POST',
            xhrFields: { withCredentials: true }
        }).then(function (result) {
            $('input[name="descCron"]').val(result);
        });
    }



    var connection = new signalR.HubConnectionBuilder()
        .withUrl("/first", {
            skipNegotiation: true,
            transport: signalR.HttpTransportType.WebSockets
        })
        .configureLogging(signalR.LogLevel.Information)
        .build();

    var store = $("#gridJobs").dxDataGrid("getDataSource").store();


    connection.start()
        .then(function () {
            connection.on("update", function (key, data) {
                store.push([{ type: "update", key: key, data: data }]);                
            });    
            
            connection.on("insert", function (data) {
                store.push([{ type: "insert", data: data }]);
            });

            connection.on("remove", function (key) {
                store.push([{ type: "remove", key: key }]);
            });
        });

    function jobStatus(e) {
        $.ajax({
            url: "/Pause/",
            type: 'PUT',
            data: { values: e.row.data.Status, key: e.row.key },
            xhrFields: { withCredentials: true }
        });
    }
});