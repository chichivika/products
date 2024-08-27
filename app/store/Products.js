Ext.define('products.store.Products', {
    extend: 'Ext.data.Store',

    alias: 'store.products',

    fields: [
        'id', 'name', 'description', 'price', 'number'
    ],
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
    data: {
        items: [
            {
                id: 1,
                name: 'Лакрица мармелад',
                description: 'Лакрица жевательный мармелад набор микс, 300 грамм',
                price: 576,
                number: 99
            },
            {
                id: 2,
                name: 'Тоннель для грызунов',
                description: 'Тоннель/туннель, труба, лабиринт для хорьков, лабиринт для крыс, грызунов, ежей, 1 метр, складной',
                price: 329,
                number: 0
            },
            {
                id: 3,
                name: 'Кукла шарнирная Варвара',
                description: 'Кукла шарнирная Варвара с одеждой и аксессуарами / Кукла Little Mania в коробке',
                price: 646,
                number: 11
            },
            {
                id: 4,
                name: 'Корм для мышей и крыс',
                description: 'Корм для мышей и крыс комплексный Padovan GRANDMIX TOPOLINE E RATTI (400 г)',
                price: 336,
                number: 53
            },
            {
                id: 5,
                name: 'Гамак-тоннель для животных',
                description: 'Гамак-тоннель для животных: крыс, белки дегу, бурундука, песчанки и др, 20*20 см.',
                price: 310,
                number: 157
            },
            {
                id: 6,
                name: 'Стереограммы',
                description: 'Магический глаз. 75 стереограмм. Тренировка и восстановление зрения',
                price: 310,
                number: 0
            },
            {
                id: 7,
                name: 'Посыпки "Сердечки красно-белые"',
                description: 'Декоративная кондитерская посыпка "Сердечки красно-белые" средние',
                price: 287,
                number: 500
            },
            {
                id: 8,
                name: 'Мед суфле набор подарочный',
                description: 'Крем мед суфле подарочный бокс в упаковке, состоящий из 2 вкусов в баночках по 250 грамм',
                price: 708,
                number: 24
            },
            {
                id: 9,
                name: 'Серьги Динозавры Дино',
                description: 'Серьги-подвески динозаврики в форме динозавра. Высота сережек 2,8-4,3 ширина 1,6-2,1.',
                price: 144,
                number: 1567
            },
            {
                id: 10,
                name: 'Подарочный набор женский "БУДЬ ВСЕГДА НА ВОЛНЕ"',
                description: 'Красивый женский подарочный набор. В состав набора входят: пенал; стакан с трубочкой для напитков; маска для сна; ароматный черный чай с барбарисом, лепестками мальвы и сафлора; зефир ассорти; драже мармеладная жемчужина со вкусом клубники; зефир со вкусом пломбира и черной смородины; драже мармеладная жемчужина со вкусом тутти-фрутти; мармелад со вкусом клубники и сливок; молочный шоколад; открытка. Набор упакован в подарочную коробочку, украшен атласными лентами.',
                price: 1200,
                number: 0
            },
            {
                id: 11,
                name: 'Серьги мишки гамми',
                description: 'Серьги бижутерия детская для девочек сережки мишки гамми',
                price: 230,
                number: 0
            },
            {
                id: 12,
                name: 'Набор серьги 12 пар "Вкусняшки"',
                description: 'Металлические цепи, серьги-кольца, украшения со стразами. Набор серьги 12 пар "Вкусняшки" тропика.',
                price: 159,
                number: 351
            },
            {
                id: 13,
                name: 'Лежанка-подстилка для грызунов',
                description: 'Лежанка-подстилка для грызунов крыс, хомяков, морских свинок ШОКОЛАД',
                price: 404,
                number: 2
            },
            {
                id: 14,
                name: 'Минеральный камень лакомство Little Shark',
                description: 'Минеральный камень лакомство Little Shark для грызунов, хомяков, крыс, шиншилл 5 шт',
                price: 264,
                number: 300
            },
            {
                id: 15,
                name: 'Оптические иллюзии',
                description: 'Оптические иллюзии. Головокружительная теория, сногсшибательная практика. Более 100 оптических чудес',
                price: 763,
                number: 443
            }
        ]
    }
});
