class Basket{
    constructor(){
        // empty object for prices
        this.items = {}
    }

    addItem(itemName, quantity = 1){
        //validating item name
        if(typeof itemName != "string" || itemName.trim() === ""){
            throw new Error ("Item must not be an empty string");
        }
        // validating item quantity
        if (!Number.isInteger(quantity) || quantity <= 0){
            throw new Error ("Quantity must be a positive integer");
            
        }

        if(this.items[itemName]){
            this.items[itemName] += quantity
        } else{
            this.items[itemName] = quantity
        }
    }

    removeItem(itemName,quantity = 1){

        if(typeof itemName != "string" || itemName.trim() === ""){
            throw new Error ("Item must not be an empty string");
        }

        if (!Number.isInteger(quantity) || quantity <=0){
            throw new Error ("Quantity must be a positive integer");
            
        }

        if(this.items[itemName]){
            this.items[itemName] -= quantity
            if (this.items[itemName] <=0){
                delete this.items[itemName]
            }
        } 
    }

    getItems(){
        return {
            ...this.items
        }
    }

    getQuantity(itemName){
        if(this.items[itemName]){
            return this.items[itemName]
        } else{
            return 0
        }
    }
}



module.exports = Basket
