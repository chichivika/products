Ext.define('products.view.filters.FiltersModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.filters',

    data: {
        id: {
            label: 'ID',
            value: ''
        },
        name: {
            label: 'Name',
            value: ''
        }
    }
});