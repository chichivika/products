Ext.define('products.view.table.TableModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.table',

    data: {
        columns:
            [
                { text: 'ID', dataIndex: 'id', width: 50 },
                {
                    text: 'Name', dataIndex: 'name', width: 200,
                    listeners: {
                        click: 'onCellClick'
                    }
                },
                { text: 'Description', dataIndex: 'description', width: 300 },
                { text: 'Price', dataIndex: 'price', width: 100, xtype: 'numbercolumn' },
                {
                    text: 'Number', dataIndex: 'number', width: 100,
                    renderer: 'renderNumberCell'
                }
            ]
    }
});