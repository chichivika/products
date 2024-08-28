Ext.define('products.view.productWindow.ProductWindow', {
    extend: 'Ext.window.Window',
    xtype: 'productWindow',
    reference: 'productWindow',

    requires: ['products.view.productWindow.ProductWindowModel'],

    viewModel: 'productWindow',

    modal: true,
    bodyPadding: 50,
    closable: false,
    bind: {
        title: '{title}'
    },
    constructor(config) {
        this.items = [
            {
                xtype: 'productCard',
                product: config.product
            }
        ];
        this.buttons = [
            {
                text: 'Cancel',
                listeners: {
                    click: ()=>{
                        config.onAction('close');
                    }
                }
            },
            {
                text: 'Save',
                listeners: {
                    click: ()=>{
                        config.onAction('save');
                    }
                }
            }
        ],

        this.callParent(config);
        return this;
    },
});
