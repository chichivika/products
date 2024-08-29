Ext.define('products.view.productWindow.ProductWindowModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.productWindow',

    data: {
        title: 'Product card',
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
        buttons:{
            cancel: 'Cancel',
            save: 'Save'
        },
        product: null,
        initialProduct: null
    },
    formulas: {
        areChanges: get => {
            if(get('product.price') !== get('initialProduct.price')){
                return false;
            }
            if(get('product.number') !== get('initialProduct.number')){
                return false;
            }
            return true;
        }
    },
});