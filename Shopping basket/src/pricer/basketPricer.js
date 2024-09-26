class BasketPricer{
    constructor(basket,catalogue,offerMain){
        // validate parameters
        if (!basket || typeof basket.getItems != "function"){
            throw new Error("Invalid basket object")
        }

        if(!catalogue || typeof catalogue.getPrice != "function"){
            throw new Error("Invalid catalogue Object")
        }

        if(!offerMain || typeof offerMain.calculateDiscount !== "function"){
            throw new Error("Invalid offer")
        }

        this.basket = basket
        this.catalogue = catalogue
        this.offerMain = offerMain
    }

    calculateSubtotal(){
        let subtotal = 0
        
        const items = this.basket.getItems()

        for(const itemName in items){
            const quantity = items[itemName];
            const price = this.catalogue.getPrice(itemName)
            if(price <0){
                throw new Error("Invalid price")
            }
            
            subtotal += quantity * price
        }

        return subtotal
    }

    applyOffers(){
        // returns total discount
        return this.offerMain.calculateDiscount(this.basket,this.catalogue)
    }

    calculateTotal(){
        const subtotal = this.calculateSubtotal();
        const discount = this.applyOffers();
        // validates if discount is a positive integer
        if(discount < 0){
            throw new Error("Discount must be a positive integer");
            
        }

        const total = subtotal - discount

        return {
            subtotal:Math.round(subtotal*100) / 100,
            discount: Math.round(discount*100) / 100,
            total: Math.round(total*100) / 100,
        }
    }

    
}


module.exports = BasketPricer
