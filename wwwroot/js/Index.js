$(function () {
    DevExpress.localization.locale("ru");
    $("#homeButton").dxButton({
        icon: "fas fa-home" // Font Awesome 5
    });
    $("#gridJobs").dxDataGrid({
        dataSource: DevExpress.data.AspNet.createStore({
            key: "ID",
            loadUrl: "/LoadJobs",
            insertUrl: "/InsertJob",
            updateUrl: "/UpdateJob",
            deleteUrl: "/DeleteJob",
            onBeforeSend: function (method, ajaxOptions) {
                ajaxOptions.xhrFields = { withCredentials: true };
            },
            
        }),
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
                items: ["Title", "Cron",
                        {
                            dataField: "Message.To",
                            //editorType: "dxTagBox",
                            //editorOptions: {
                            //    items: ["azenshpis@gmail.com", "selyutinvi@gmail.com"],
                            //    acceptCustomValue: true
                            //}
                        },
                        "Message.Subject",
                        {
                        dataField: "Message.Body",
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
        columns: [
            {
                type: "buttons",
                buttons: ["edit", "delete",
                    {
                        name: 'changePassword',
                        hint: 'Установить пароль',
                        icon: "homeButton"
                    }]
            },
            {
                dataField: "Title",
                caption:"Идентификатор",
                validationRules: [{
                    type: "required",
                    message: "Идентификатор должен быть заполнен."
                }],
            },
            {
                dataField: "Cron",
                caption: "Расписание(в Cron)",
                validationRules: [{
                    type: "required",
                    message: "Частота должна быть заполнена."
                }],
                visible: false
            },
            {
                dataField: "CronDesc",
                caption: "Расписание",
                validationRules: [{
                    type: "required",
                    message: "Расписание должно быть заполнено."
                }]
            },
            {
                dataField: "Message.To",
                caption: "Получатели",
                validationRules: [{
                    type: "required",
                    message: "Получатели должны быть заполнены."
                }],
            },
            {
                dataField: "Message.Subject",
                caption: "Тема сообщения",
                validationRules: [{
                    type: "required",
                    message: "Тема сообщения должна быть заполнена."
                }],
                visible: false
            },
            {
                dataField: "Message.Body",
                caption: "Текст сообщения",
                validationRules: [{
                    type: "required",
                    message: "Сообщение должно быть заполнено."
                }],
                visible: false
            },
            {
                dataField: "Next",
                caption: "Время следующего исполнения"
            }
        ],
        showBorders: true
    });
});