Ext.define('products.view.main.Filters', {
    extend: 'Ext.form.Panel',
    xtype: 'filters',
    reference: 'filters',

    requires: [
        'products.view.main.MainController',
        'products.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',
    style: {
        margin: '20px 30px'
    },
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'textfield',
            name: 'id',
            fieldLabel: 'ID',
            width: 200,
            labelAlign: 'top',
            style: {
                marginRight: '30px',
                boxSizing: 'border-box'
            },
            listeners: {
                keyPress: 'onFilterKeyPress'
            }
        }, {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Name',
            labelAlign: 'top',
            width: 300,
            listeners: {
                specialkey: 'onFilterKeyPress'
            }
        }
    ]
});
