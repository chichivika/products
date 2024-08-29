Ext.define('products.view.table.TableController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.table',

    onResize (){
        let view = this.getView();
        let cnt = view.up();
        let fullHeight = cnt.getHeight();
        let items = cnt.getRefItems();
        items.forEach(item=>{
            if(item.xtype === 'table') return;
            fullHeight -= item.getHeight();
        });

        fullHeight -= 20;
        fullHeight > 0 ? fullHeight : 0;
        view.setHeight(fullHeight);
    },
    renderNumberCell(value, item) {
        if (value === 0 && item) {
            item.tdStyle += 'background-color: #ffa3a3';
        }
        return value;
    },
    onCellClick(){
        let itemData = arguments[5].data;
        let index = arguments[2];
        let window = Ext.create({
            xtype: 'productWindow',
            product: itemData,
            onAction: action =>{
                switch(action){
                    case 'close':
                        window.close();
                        break;
                    case 'save':
                        this._save(window,index);
                        window.close();
                        break;
                }
            }
        });
        window.show();
        this._window = window;
    },
    _save(window, index){
        let card = window.down('productCard');
        let newItem = card.getViewModel().data.product;

        let grid = this.getView();
        let store = grid.getStore();
        var record = store.getAt(index);
        record.set('number', newItem.number);
        record.set('price', newItem.price);
        store.reload();
    }
});
