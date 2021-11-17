const database = [
    {
        users: [
            {
                name: "Kalle",
                login: 403274618461,
            },
            {
                name: "Lotta",
                login: 413274618461,
            },
            {
                name: "Pluto",
                login: 423274618461,
            },
        ],
        carts: [
            {
                403274618461: [
                    {
                        productId: 152164826489,
                        amount: 2,
                    },
                    {
                        productId: 752164826789,
                        amount: 1,
                    },
                ],
                413274618461: [
                    {
                        productId: 167164826489,
                        amount: 1,
                    },
                ],
            },
        ],
        products: [
            {
                id: 152164826489,
                name: "vegankorv",
                price: 30,
            },
            {
                id: 167164826489,
                name: "förkläde",
                price: 349,
            },
            {
                id: 752164826789,
                name: "senap",
                price: 22,
            },
        ],
    },
];
module.exports = { database };
