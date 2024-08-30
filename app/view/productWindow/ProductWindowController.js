Ext.define('products.view.productWindow.ProductWindowController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.productWindow',

    onSave(param) {
        let data = this._getData();

        //if there are no changes
        if (!data.areChanges) {
            Ext.Msg.alert(data.noChanges.title, data.noChanges.message);
            return;
        }

        //open confirm window
        let window = Ext.create({
            xtype: 'saveConfirmation',
            changes: this._getChanges(),
            onAction: actionId => {
                switch (actionId) {
                    case 'yes':
                        param.callback('save');
                        break;
                }
                window.destroy();
            }
        });
        window.show();
    },
    //get array of all changes in the form
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
    //configuration of changes information by field id
    _configChangeObject(product, initial, id) {
        return {
            key: id,
            label: this._getLabelById(id),
            newValue: product[id],
            oldValue: initial[id]
        };
    },
    //get label of the product field by id
    _getLabelById(id) {
        const data = this._getData();
        let items = data.items;
        return items[id].label;
    },
    //get view model data
    _getData() {
        return this.getView().getViewModel().data;
    }
});
