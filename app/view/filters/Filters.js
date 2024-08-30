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

    padding: '20 0',
    layout: {
        type: 'hbox',
        align: 'middle'
    },
    cls: 'app-filters',
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
            margin: '0 30',
            listeners: {
                specialkey: 'onFilterKeyPress'
            }
        }, {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Name',
            labelAlign: 'top',
            width: 250,
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
