Ext.define('products.view.main.TableCnt', {
    extend: 'Ext.container.Container',
    xtype: 'tableCnt',
    reference: 'tableCnt',

    requires: [
    ],

    title: 'products',
    closable: true,
    padding: '0 40',
    items: [
        {
            xtype: 'filters'
        },
        {
            xtype: 'table'
        }
    ]
});
