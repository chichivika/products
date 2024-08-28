Ext.define('products.store.Product', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',    type: 'int'},
        {name: 'name',  type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'price', type: 'float'},
        {name: 'number', type: 'int'}
    ]
});
Ext.define('products.store.Products', {
    extend: 'Ext.data.Store',

    alias: 'store.products',

    model: 'products.store.Product',
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
