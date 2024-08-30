Ext.define('products.view.table.TableController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.table',

    //event listener for resize
    onResize (){
        let view = this.getView();
        //get parent container
        let cnt = view.up();
        //full height of container
        let fullHeight = cnt.getHeight();
        
        //we need to subtract heights of all other items
        let items = cnt.getRefItems();
        items.forEach(item=>{
            if(item.xtype === 'table') return;
            fullHeight -= item.getHeight();
        });

        //subtract small value just in case
        fullHeight -= 20;
        //height should not be negative
        fullHeight > 0 ? fullHeight : 0;
        //set height to table scroll container
        view.setHeight(fullHeight);
    },
    //rendering function for field "number"
    renderNumberCell(value, item) {
        if (value === 0 && item) {
            item.tdStyle += 'background-color: #ffa3a3';
        }
        return value;
    },
    //listener for cell click event
    //use only for "name" field to open info
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
    //save new information from product card to grid store
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
