var mountainsIveSeen = [
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
function findNameOfTallestMountain(mountains) {
    var tallest = null;
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var mountain = mountains_1[_i];
        if (!tallest) {
            tallest = mountain;
            console.log("tallest on line 27 is " + tallest.name);
        }
        if (mountain.height > tallest.height) {
            tallest = mountain;
            console.log("tallest on line 31 is " + tallest.name);
        }
    }
    return tallest === null || tallest === void 0 ? void 0 : tallest.name;
}
console.log(findNameOfTallestMountain(mountainsIveSeen));
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
var itemsInStock = [
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
function calcInventoryValue(inventory) {
    var total = 0;
    for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
        var pieces = inventory_1[_i];
        total += pieces.product.price * pieces.quantity;
        console.log(total);
    }
    return total;
}
var inventoryValue = calcInventoryValue(itemsInStock);
console.log(inventoryValue);
