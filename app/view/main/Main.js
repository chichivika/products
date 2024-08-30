Ext.define('products.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    reference: 'main',

    requires: [
        'Ext.plugin.Viewport',
        'products.view.main.MainController',
        'products.view.main.MainModel',
        'products.view.main.TableCnt'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    ui: 'navigation',

    header: {
        layout: {
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
                bind:{
                    text: '{buttons.add.text}',
                    iconCls: '{buttons.add.iconCls}',
                },
                iconAlign: 'right',
                padding: 10,
                style: {
                    borderColor: 'white'
                },
                listeners: {
                    click: 'onAddProducts'
                }
            },
            {
                xtype: 'button',
                bind:{
                    text: '{buttons.exit.text}',
                    iconCls: '{buttons.exit.iconCls}',
                },
                iconAlign: 'right',
                padding: 10,
                style: {
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
        {
            xtype: 'tableCnt'
        }
    ]
});
