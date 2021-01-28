$(function () {
    DevExpress.localization.locale("ru");
    var gj = $("#gridJobs").dxDataGrid({
        dataSource: {
            store: DevExpress.data.AspNet.createStore({
                key: "Title",
                loadUrl: "/LoadJobs",
                insertUrl: "/InsertJob",
                updateUrl: "/UpdateJob",
                deleteUrl: "/DeleteJob",
                onBeforeSend: function (method, ajaxOptions) {
                    ajaxOptions.xhrFields = { withCredentials: true, };

                    if(method != "load"){ 
                    var b = JSON.parse(ajaxOptions.data.values);
                    b.ObjectJson = JSON.stringify(b.ObjectJson);
                    ajaxOptions.data.values = JSON.stringify(b);
                    }
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
                width: 700,
                height: 525,
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
                        dataField: "ObjectJson.To",
                        editorType: "dxTagBox",
                        editorOptions: {
                            items: ["azenshpis@gmail.com", "selyutinvi@gmail.com"],
                            acceptCustomValue: true,
                            //onCustomItemCreating: function (args) {
                            //    return false;
                            //}
                        }
                    },
                    "ObjectJson.Subject",
                    {
                        dataField: "ObjectJson.Body",
                        editorType: "dxTextArea",
                        editorOptions: {
                            height: 100
                        }
                    }]
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
                        name: 'changePassword',
                        hint: 'Пауза'
                    }]
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
                validationRules: [{
                    type: "required",
                    message: "Тема сообщения должна быть заполнена."
                }]
            },
            {
                dataField: "ObjectJson.To",
                caption: "Получатели",
                validationRules: [{
                    type: "required",
                    message: "Получатели должны быть заполнены."
                },
                {
                    type: "email",
                    message: "Введите корректный email."
                }],
                visible: false
            },
            {
                dataField: "ObjectJson.Subject",
                caption: "Тема сообщения",
                validationRules: [{
                    type: "required",
                    message: "Тема сообщения должна быть заполнена."
                }],
                visible: false
            },
            {
                dataField: "ObjectJson.Body",
                caption: "Текст сообщения",
                validationRules: [{
                    type: "required",
                    message: "Сообщение должно быть заполнено."
                }],
                visible: false
            }
        ],

        showBorders: true
    });

    function descriptCron(data) {
        $.ajax({
            url: "/qwer/" + data,
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

});