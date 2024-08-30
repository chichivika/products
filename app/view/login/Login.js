Ext.define('products.view.login.Login', {
    extend: 'Ext.container.Container',
    xtype: 'login',

    requires: [
        'Ext.plugin.Viewport',
        'products.view.login.LoginController',
        'products.view.login.LoginModel',

        'Ext.form.Panel'
    ],

    controller: 'login',
    viewModel: 'login',
    plugins: 'viewport',

    bodyPadding: 10,
    layout: 'center',
    items: [
        {
            xtype: 'form',
            reference: 'form',
            bodyPadding: 50,
            width: 550,
            title: {
                bind: {
                    text: '{title}'
                }
            },
            items: [{
                xtype: 'textfield',
                name: 'login',
                allowBlank: false,
                msgTarget: 'side',
                bind: {
                    fieldLabel: '{login.label}',
                    value: '{login.value}'
                }
            }, {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                fieldLabel: 'Password',
                allowBlank: false,
                msgTarget: 'side',
                bind: {
                    fieldLabel: '{password.label}',
                    value: '{password.value}'
                }
            }
            ],
            buttons: [{
                bind:{
                    text: '{buttons.enter}'
                },
                formBind: true,
                listeners: {
                    click: 'onEnter'
                }
            }]
        }
    ]
});
