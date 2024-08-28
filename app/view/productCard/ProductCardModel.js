Ext.define('products.view.productCard.ProductCardModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.productCard',

    data: {
        items: {
            id: {
                label: 'ID'
            },
            name: {
                label: 'Name'
            },
            price: {
                label: 'Price'
            },
            number: {
                label: 'Number'
            }
        },
        product: null
    }
});