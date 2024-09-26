const Catalogue = require("./models/catalogue")
const Basket = require("./models/basket")
const OfferMain = require("./offers/OfferMain")
const BasketPricer = require("./pricer/basketPricer")
const {BuyXGetYFree, PercentageDiscount } = require("./offers/offers")


const catalogue = new Catalogue();
catalogue.addItem("eggs", 1.50)
catalogue.addItem("milk" , 1.20)

const basket = new Basket();
basket.addItem("eggs",3)
basket.addItem("milk",1)

const offerMain = new OfferMain();
offerMain.addOffer(new BuyXGetYFree("eggs",2,1));
offerMain.addOffer(new PercentageDiscount("milk",10))

const basketPricer = new BasketPricer(basket,catalogue,offerMain)

const pricing = basketPricer.calculateTotal();

console.log('Subtotal:', pricing.subtotal, '\nDiscount:', pricing.discount, '\nTotal:', pricing.total);