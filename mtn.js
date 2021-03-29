var mountains = [
    { name: "Kilimanjaro",
        height: 19341
    },
    { name: "Everest",
        height: 29029
    },
    { name: "Denali",
        height: 20310
    },
];
function findNameOfTallestMountain(mountainsList) {
    var tallest = null;
    for (var _i = 0, mountainsList_1 = mountainsList; _i < mountainsList_1.length; _i++) {
        var mountain = mountainsList_1[_i];
        if (!tallest) {
            tallest = mountain;
        }
        if (mountain.height > tallest.height) {
            tallest = mountain;
        }
    }
    return tallest === null || tallest === void 0 ? void 0 : tallest.name;
}
var tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
var products = [
    {
        name: "soap",
        price: 2.99
    },
    {
        name: "shampoo",
        price: 3.99
    },
    {
        name: "toothpaste",
        price: 6.99
    }
];
function calcAverageProductPrice(items) {
    var average = null;
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        average = (item.price + item.price) / items.length;
    }
    return average;
}
var averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);
var inventory = [
    {
        product: {
            name: "motor",
            price: 10.00
        },
        quantity: 10
    },
    { product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1.00
        },
        quantity: 20
    }
];
function calcInventoryValue(inventoryItems) {
    var total = 0;
    for (var _i = 0, inventoryItems_1 = inventoryItems; _i < inventoryItems_1.length; _i++) {
        var pieces = inventoryItems_1[_i];
        total += pieces.product.price * pieces.quantity;
    }
    return total;
}
var inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);
