Ext.define('products.view.filters.Filters', {
    extend: 'Ext.form.Panel',
    xtype: 'filters',
    reference: 'filters',

    requires: [
        'products.view.filters.FiltersController',
        'products.view.filters.FiltersModel'
    ],

    controller: 'filters',
    viewModel: 'filters',

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
            width: 200,
            labelAlign: 'top',
            bind:{
                fieldLabel: '{id.label}',
                value: '{id.value}'
            },
            style: {
                marginRight: '30px',
                boxSizing: 'border-box'
            },
            listeners: {
                specialkey: 'onFilterKeyPress'
            }
        }, {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Name',
            labelAlign: 'top',
            width: 300,
            bind:{
                fieldLabel: '{name.label}',
                value: '{name.value}'
            },
            listeners: {
                specialkey: 'onFilterKeyPress'
            }
        }
    ]
});
