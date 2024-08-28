Ext.define('products.view.productCard.ProductCardController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.productCard',

    init: function () {
    },
    _getData: function () {
        let model = this.getViewModel();
        return model.data;
    }
});
