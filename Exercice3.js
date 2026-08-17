const transactions = [
    { id: "PROD-101", category: "Electronics", price: 299.99, quantity: 2 },
    { id: "PROD-102", category: "Books", price: 15.50, quantity: 5 },
    { id: "PROD-101", category: "Electronics", price: 299.99, quantity: 1 },
    { id: "PROD-103", category: "Fashion", price: 49.90, quantity: 4 },
    { id: "PROD-102", category: "Books", price: 15.50, quantity: 3 }
];

function aggregateSales(transactions) {
    const totalRevenue = transactions.reduce((total, transaction) => {
        return total + transaction.price * transaction.quantity;
    }, 0);

    const salesByCategory = transactions.reduce((resultat, transaction) => {
        const categorie = transaction.category;
        const montant = transaction.price * transaction.quantity;
        if (resultat[categorie] === undefined) {
            resultat[categorie] = 0;
        }
        resultat[categorie] += montant;

        return resultat;
    }, {});

    const quantitiesByProduct = transactions.reduce((resultat, transaction) => {
        const produit = transaction.id;

        if (resultat[produit] === undefined) {
            resultat[produit] = 0;
        }

        resultat[produit] += transaction.quantity;

        return resultat;
    }, {});

    let topProduct = 0;
    let maximumQuantity = 0;

    Object.keys(quantitiesByProduct).forEach(produit => {
        if (quantitiesByProduct[produit] > maximumQuantity) {
            maximumQuantity = quantitiesByProduct[produit];
            topProduct = produit;
        }
    });

    return {
        totalRevenue,
        salesByCategory,
        topProduct
    };
}

console.log(aggregateSales(transactions));