Ext.define('products.view.productWindow.ProductWindowController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.productWindow',

    onSave(param) {
        let data = this._getData();
        if(!data.areChanges){
            Ext.Msg.alert('No changes','There are no changes.');
            return;
        }

        let window = Ext.create({
            xtype: 'saveConfirmation',
            changes: this._getChanges(),
            onAction: actionId => {
                switch(actionId){
                    case 'yes':
                    param.callback('save');
                    break;
                }
                window.destroy();
            }
        });
        window.show();
    },
    _getChanges: function () {
        const data = this._getData();
        const product = data.product;
        const initial = data.initialProduct;
        const changes = [];
        if (product.price !== initial.price) {
            changes.push(this._configChangeObject(product, initial, 'price'));
        }
        if (product.number !== initial.number) {
            changes.push(this._configChangeObject(product, initial, 'number'));
        }
        return changes;
    },
    _configChangeObject(product, initial, id) {
        return {
            key: id,
            label: this._getLabelById(id),
            newValue: product[id],
            oldValue: initial[id]
        };
    },
    _getLabelById(id) {
        const data = this._getData();
        let items = data.items;
        return items[id].label;
    },
    _getData() {
        return this.getView().getViewModel().data;
    }
});
