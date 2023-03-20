const product = [
    {
        "name" : "Apple"
    },
    {
        "name" : "Pinapple"
    },
    {
        "name" : "Orange"
    },
    {
        "name" : "Graps"
    },
    {
        "name" : "Strawberry"
    },
    {
        "name" : "Abocado"
    },
]

let productItem = "A"

product.map((item) => { 
    if (item.name.includes(productItem)) {
        return document.write(`<h1>${item.name}</h1>`)
    }
})