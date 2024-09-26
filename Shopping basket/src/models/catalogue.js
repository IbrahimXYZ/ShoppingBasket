class Catalogue{
    constructor(){
        // initializing array to hold offers
        this.items = {}
    }

    addItem(itemName,itemPrice){
        // validating item name and price
        if (typeof itemName !== "string" || itemName.trim() === ""){
            throw new Error("Item name must be a non-empty string")
        }

        if (typeof itemPrice !== "number" || itemPrice <= 0){
            throw new Error("Item price must be a positive number")
        }
        // validating if item already exists in the catalogue
        if(this.items.hasOwnProperty(itemName)){
            throw new Error("Item already exists")
        }

        this.items[itemName] = itemPrice
    }

    removeItem(itemName){
        if(this.items[itemName]){
            delete this.items[itemName];
        }else{
            throw new Error("Product not found")
        }
    }

    getPrice(itemName){
        if(this.items.hasOwnProperty(itemName)){
            return this.items[itemName];
        }else{
            throw new Error("Item not found")
        }
    }

    inStock(itemName){
        return this.items.hasOwnProperty(itemName)
    }

    getItems(){
        // returns a copy of all items in the catalogue
        return {
            ...this.items
        }
    }
}


module.exports= Catalogue
