//class that manages and applies offers
class OfferMain {
    constructor(){
        //initalizes and array to hold the offers
        this.offers = []
    }

    addOffer(offer){
        if (offer && typeof offer.apply === "function"){
            this.offers.push(offer)
        }else{
            throw new Error("Invalid offer: must have an apply method")
        }
    }

    removeOffer(offerToRemove){
        // ensures the offer has an apply function
        const index = this.offers.indexOf(offerToRemove);
        if (index > -1){
            this.offers.splice(index,1)
        }else{
            throw new Error("Offer not found")
        }
    }

    calculateDiscount(basket, catalogue){
        // validates basket and catalogue objects
        if(!basket || typeof basket.getItems !== "function"){
            throw new Error("Invalid Basket Object")
        }

        if(!catalogue || typeof catalogue.getItems !== "function"){
            throw new Error("Invalid Catalogue Object")
        }
        let totalDiscount = 0;
        for(let offer of this.offers){
            if(offer && typeof offer.apply === "function"){
                const offerDiscount = offer.apply(basket,catalogue);
                // validates the discount is a positive integer
                if(typeof offerDiscount === "number" && offerDiscount >= 0){
                    totalDiscount += offerDiscount
                } else{
                    throw new Error("Invalid Discount")
                }
            }else{
                throw new Error("Offer does not have a valid apply method")
            }
        }

        return Math.round(totalDiscount * 100) / 100
    }
}

module.exports = OfferMain
