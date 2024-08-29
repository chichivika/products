Ext.define('products.view.table.TableModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.table',

    data: {
        columns:
            [
                { text: 'ID', dataIndex: 'id'},
                {
                    text: 'Name', dataIndex: 'name', flex: 2,
                    listeners: {
                        click: 'onCellClick'
                    }
                },
                { text: 'Description', dataIndex: 'description', flex: 3,},
                { text: 'Price', dataIndex: 'price', flex: 1, xtype: 'numbercolumn' },
                {
                    text: 'Number', dataIndex: 'number', flex: 1,
                    renderer: 'renderNumberCell'
                }
            ]
    }
});