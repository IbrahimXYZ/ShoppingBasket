const Catalogue = require("./models/catalogue")
const Basket = require("./models/basket")
const OfferMain = require("./offers/OfferMain")
const BasketPricer = require("./pricer/basketPricer")
const {BuyXGetYFree, PercentageDiscount } = require("./offers/offers")

// intitalizing and adding items to catalogue
const catalogue = new Catalogue();
catalogue.addItem("eggs", 1.50)
catalogue.addItem("milk" , 1.20)

//intializing and adding items to basket
const basket = new Basket();
basket.addItem("eggs",3)
basket.addItem("milk",1)

//applying offers to which items
const offerMain = new OfferMain();
offerMain.addOffer(new BuyXGetYFree("eggs",2,1));
offerMain.addOffer(new PercentageDiscount("milk",10))

//running basketpricer to calculate different costs
const basketPricer = new BasketPricer(basket,catalogue,offerMain)

const pricing = basketPricer.calculateTotal();

console.log('Subtotal:', pricing.subtotal, '\nDiscount:', pricing.discount, '\nTotal:', pricing.total);
