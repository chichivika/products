Ext.define('products.view.filters.FiltersController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.filters',

    onFilterKeyPress: function (field, eventData) {
        if (eventData.event.code !== 'Enter') return;

        let name = field.name;
        let data = this._getData();
        let value = data[name].value;

        let store = this._getGridStore();

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
    _getData: function () {
        let model = this.getViewModel();
        return model.data;
    },
    _getGridStore(){
        let view = this.getView();
        let tableCnt = view.up('tableCnt');
        let grid = tableCnt.down('table');
        return grid.getStore();
    }
});
