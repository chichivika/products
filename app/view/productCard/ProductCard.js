Ext.define('products.view.productCard.ProductCard', {
    extend: 'Ext.form.Panel',
    xtype: 'productCard',
    reference: 'productCard',

    requires: [
    ],
    bodyPadding: 50,
    constructor(config){
        this.viewModel = config.model;
        this.buttons = config.buttons;

        this.callParent(config);
        return this;
    },
    items: [
        {
            xtype: 'displayfield',
            name: 'id',
            bind: {
                fieldLabel: '{items.id.label}',
                value: '{product.id}'
            }
        },
        {
            xtype: 'displayfield',
            name: 'name',
            bind: {
                fieldLabel: '{items.name.label}',
                value: '{product.name}'
            }
        },
        {
            xtype: 'numberfield',
            name: 'price',
            minValue: 0,
            step: 100,
            allowBlank: false,
            allowNegative: false,
            bind: {
                fieldLabel: '{items.price.label}',
                value: '{product.price}'
            }
        },
        {
            xtype: 'numberfield',
            name: 'number',
            minValue: 0,
            step: 1,
            allowBlank: false,
            allowDecimals: false,
            allowNegative: false,
            bind: {
                fieldLabel: '{items.number.label}',
                value: '{product.number}'
            }
        }
    ]
});
