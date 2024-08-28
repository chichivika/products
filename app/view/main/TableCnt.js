Ext.define('products.view.main.TableCnt', {
    extend: 'Ext.container.Container',
    xtype: 'tableCnt',
    reference: 'tableCnt',

    requires: [
    ],

    title: 'products',
    closable: true,
    items: [
        {
            xtype: 'filters'
        },
        {
            xtype: 'table'
        }
    ]
});
