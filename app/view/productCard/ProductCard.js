Ext.define('products.view.productCard.ProductCard', {
    extend: 'Ext.form.Panel',
    xtype: 'productCard',
    reference: 'productCard',

    requires: [
    ],

    constructor(config){
        this.viewModel = config.model;

        this.callParent(config);
        return this;
    },
    items: [
        {
            xtype: 'textfield',
            name: 'id',
            readOnly: true,
            bind: {
                fieldLabel: '{items.id.label}',
                value: '{product.id}'
            }
        },
        {
            xtype: 'textfield',
            name: 'name',
            readOnly: true,
            bind: {
                fieldLabel: '{items.name.label}',
                value: '{product.name}'
            }
        },
        {
            xtype: 'numberfield',
            name: 'price',
            minValue: 0,
            bind: {
                fieldLabel: '{items.price.label}',
                value: '{product.price}'
            }
        },
        {
            xtype: 'numberfield',
            name: 'number',
            minValue: 0,
            stepValue: 1,
            bind: {
                fieldLabel: '{items.number.label}',
                value: '{product.number}'
            }
        }
    ]
});
