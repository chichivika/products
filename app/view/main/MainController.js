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
    onFilterKeyPress: function (field, eventData) {
        if (eventData.event.code !== 'Enter') return;

        let name = field.name;
        let filtersData = this._getData().filters;
        let value = filtersData[name].value;

        let view = this.getView();
        let mainView = view.up('main');
        let grid = mainView.down('table');
        let store = grid.getStore();

        switch (name) {
            case 'id':
                this._configIdFilter(value, store);
                break
            case 'name':
                this._configNameFilter(value, store);
                break;
        }
    },
    _configIdFilter(value, store) {
        store.removeFilter('id');
        if(value.length === 0) return;

        let filter = Ext.create('Ext.util.Filter', {
            filterFn:  item => {
                let data = item.data;
                return String(data.id) === value;
            },
            id: 'id'
        });
        store.addFilter(filter);
    },
    _configNameFilter(value, store) {
        store.removeFilter('name');
        if(value.length === 0) return;

        let filter = Ext.create('Ext.util.Filter', {
            property: 'name',
            value,
            operator: 'like',
            id: 'name'
        });
        store.addFilter(filter);
    },
    _addNewTab: function () {
        let panel = this.getView();
        panel.add([{
            title: 'products',
            items: [{
                xtype: 'filters'
            },
            {
                xtype: 'table'
            }]
        }]);
        panel.setActiveItem(++this._itemsNum);
    },
    _getData: function () {
        let model = this.getViewModel();
        return model.data;
    },
});
