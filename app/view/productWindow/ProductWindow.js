Ext.define('products.view.productWindow.ProductWindow', {
    extend: 'Ext.window.Window',
    xtype: 'productWindow',
    reference: 'productWindow',

    requires: ['products.view.productWindow.ProductWindowController',
        'products.view.productWindow.ProductWindowModel'],

    controller: 'productWindow',

    modal: true,
    closable: false,
    bind: {
        title: '{title}'
    },
    constructor(config) {
        this.viewModel = Ext.create('products.view.productWindow.ProductWindowModel');
        this.viewModel.set('product', { ...config.product });
        this.viewModel.set('initialProduct', { ...config.product });

        this.items = [
            {
                xtype: 'productCard',
                model: this.viewModel,
                buttons: [
                    {
                        bind: {
                            text: '{buttons.cancel}',
                        },
                        listeners: {
                            click: () => {
                                config.onAction('close');
                            }
                        }
                    },
                    {
                        bind: {
                            text: '{buttons.save}',
                            // disabled: '!{areChanges}'
                        },
                        formBind: true,
                        listeners: {
                            click: () => {
                                this.controller.onSave({
                                    callback: config.onAction
                                });
                            }
                        }
                    }
                ]
            }
        ];

        this.callParent(config);
        return this;
    }
});
