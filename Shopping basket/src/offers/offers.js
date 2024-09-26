class BuyXGetYFree{
    constructor(itemName,x,y){
        //validation of parameters
        if(typeof itemName !== "string" || !itemName.trim()){
            throw new Error("Item name must not be an empty string")
        }
        if(!Number.isInteger(x) || x <= 0){
            throw new Error("x must be a positive integer")
        }

        if(!Number.isInteger(y) || y <= 0){
            throw new Error("y must be a positive integer")
        }


        this.itemName = itemName
        this.y = y // Number of free items
        this.x = x // Number of items needed to buy
    }

    apply(basket,catalogue){

        if(!catalogue.getPrice(this.itemName)){
            return 0
        }

        const quantity = basket.getQuantity(this.itemName);
        const freeItems = Math.floor(quantity/(this.x + this.y)) * this.y
        const pricePerItem = catalogue.getPrice(this.itemName)
        const discount = (freeItems * pricePerItem)
        return discount
    }
}

class PercentageDiscount{
    constructor(itemName,discountPercentage){
        this.itemName = itemName
        this.discountPercentage = discountPercentage
    }

    apply(basket,catalogue){
        const quantity = basket.getQuantity(this.itemName)
        const pricePeritem = catalogue.getPrice(this.itemName)
        if(pricePeritem === 0 ){
            return 0
        }
        const totalPrice = quantity * pricePeritem
        const discount = (this.discountPercentage/100) * totalPrice
        return discount
    }
}



module.exports = {
    BuyXGetYFree,
    PercentageDiscount,
}
