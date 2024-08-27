Ext.define('products.view.main.Table', {
    extend: 'Ext.grid.Panel',
    xtype: 'table',
    reference: 'table',

    requires: [
        'products.view.main.MainController',
        'products.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',
    scrollable: true,
    height: 400,
    style: {
        margin: '0px 30px',
        boxSizing: 'border-box'
    },
    columns: [
        { text: 'ID',  dataIndex: 'id', width: 50 },
        { text: 'Name', dataIndex: 'name', width: 200 },
        { text: 'Desc', dataIndex: 'description', width: 300 },
        { text: 'Price', dataIndex: 'price', width: 100, xtype:'numbercolumn' },
        { text: 'Number', dataIndex: 'number', width: 100 }
    ],
    store: {
        type: 'products'
    },
});
