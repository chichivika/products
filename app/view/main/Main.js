Ext.define('products.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    reference: 'main',

    requires: [
        'Ext.plugin.Viewport',
        'products.view.main.MainController',
        'products.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    ui: 'navigation',

    header: {
        layout:{
            type: 'hbox'
        },
        title: {
            bind: {
                text: '{title}'
            }
        },
        items: [
            {
                xtype: 'button',
                text: 'products',
                iconCls: 'x-fa fa-plus-circle',
                iconAlign: 'right',
                padding: 10,
                style:{
                    borderColor: 'white'
                },
                listeners: {
                    click: 'onAddProducts'
                }
            },
            {
                xtype: 'button',
                text: 'Exit',
                iconCls: 'x-fa fa-home',
                iconAlign: 'right',
                padding: 10,
                style:{
                    margin: '0px 30px',
                    borderColor: 'white'
                },
                listeners: {
                    click: 'onExit'
                }
            }
        ]
    },
    activeItem: 0,
    items: [
        {title: 'products',
            items:[
                {
                    xtype: 'filters'
                },
                {
                    xtype: 'table'
                }
            ]
        }
    ]
});
