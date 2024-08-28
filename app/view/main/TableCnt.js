Ext.define('products.view.main.TableCnt', {
    extend: 'Ext.container.Container',
    xtype: 'tableCnt',
    reference: 'tableCnt',

    requires: [
    ],

    title: 'products',
    items: [
        {
            xtype: 'filters'
        },
        {
            xtype: 'table'
        }
    ]
});
