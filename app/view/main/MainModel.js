Ext.define('products.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        title: 'Products table',
        buttons: {
            exit: {
                text: 'Exit',
                iconCls: 'x-fa fa-home'
            },
            add: {
                text: 'Products',
                iconCls: 'x-fa fa-plus-circle'
            }
        }
    }
});