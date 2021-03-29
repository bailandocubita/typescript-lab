interface Mountain {
    name: string;
    height: number;
}

const mountains: Mountain[] = [ 
    {name: "Kilimanjaro",
    height: 19341,
    },

    {name: "Everest",
    height: 29029,
    },

    {name: "Denali",
    height: 20310,
    },

]

function findNameOfTallestMountain(mountainsList: Mountain[]) {
    let tallest = null;
    for (let mountain of mountainsList) {

        if (!tallest) {
            tallest = mountain;

        }
        if (mountain.height > tallest.height) {
            tallest = mountain;

        }

        
    }
    return tallest?.name;
}
let tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);

interface Product {
    name: string,
    price: number,
}

const products: Product [] = [
    {
        name: "soap",
        price: 2.99,
    },

    {
        name: "shampoo",
        price: 3.99,
    },

    {
        name: "toothpaste",
        price: 6.99,
    }
]

function calcAverageProductPrice(items: Product[]) {
    let average = null;
    for (let item of items) {
        average = (item.price + item.price) / items.length; 
    }
    return average;
}

let averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);


interface InventoryItem {
    product: Product,
    quantity: number,
}

const inventory: InventoryItem[] = [
    {
        product: {
            name: "motor",
            price: 10.00,
        },
        quantity: 10,
    },
    
    {    product: {
            name: "sensor",
            price: 12.50,
        },
        quantity: 4,
    },

    {
        product: {
            name: "LED",
            price: 1.00,
        },
        quantity: 20,
    }

]

function calcInventoryValue(inventoryItems: InventoryItem[]) {
    let total = 0;

    for (let pieces of inventoryItems) {
        total += pieces.product.price * pieces.quantity;
    }
    
    return total;
}

let inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);
