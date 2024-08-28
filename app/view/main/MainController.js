Ext.define('products.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    init: function () {
        this.callParent();
        this._itemsNum = 0;
    },
    onExit: function () {
        localStorage.setItem("authorized", false);
        this.getView().destroy();
        Ext.create({ xtype: 'login' });
    },
    onAddProducts: function () {
        this._addNewTab();
    },
    renderNumberCell(value, item) {
        if (value === 0) {
            item.tdStyle += 'background-color: #ffa3a3';
        }
        return value;
    },
    _addNewTab: function () {
        let panel = this.getView();

        panel.add([{
            xtype: `tableCnt`
        }]);
        panel.setActiveItem(++this._itemsNum);
    },
    _getData: function () {
        let model = this.getViewModel();
        return model.data;
    },
});
