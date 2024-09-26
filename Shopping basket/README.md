# Shopping Basket

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Running the Code](#running-the-code)
- [Improvements](#improvements)


## Description
This is a shopping basket application that allows users to manage their shopping items, apply discounts, and calculate the total price of their basket. The application implements various offers like "Buy X Get Y Free" and percentage discounts.

## Installation
1. Clone the repository:
   ```bash
   git clone <https://github.com/IbrahimXYZ/ShoppingBasket>
   cd <Shopping\ basket>

## Usage

To use this project, follow these steps:

1. Ensure you have Node.js installed on your machine.
2. Create an instance of the `Catalogue`, `Basket`, `OfferMain`, and `BasketPricer` classes in `index.js`.
3. Run the `index.js` file using Node.js:
   ```bash
   node src/index.js
   ```

## Components

The application consists of the following components:

- **Basket**: Manages items in the shopping basket.
- **Catalogue**: Stores the available items and their prices.
- **OfferMain**: Manages various offers that can be applied to the basket.
- **offer**: Stores the specific offers that can be applied.
- **BuyXGetYFree**: A specific offer type that provides a discount when a certain number of items are purchased.
- **PercentageDiscount**: A specific offer type that provides a percentage discount on an item.
- **BasketPricer**: Calculates the total price of items in the basket after applying any discounts.

## Running the Code

To run the code, follow these steps:

1. Open a terminal and navigate to the project directory.
2. Use Node.js to execute the `index.js` file:
   ```bash
   node src/index.js
   ```



## Improvements

Here are a few ideas for potential improvements that could be made to the project:

- **Error Handling**: More sophisticated error handling can be added to improve user feedback.
- **Unit Testing**: Implement unit tests using a testing framework like Jest to ensure code reliability and maintainability.
- **Database Integration**: Using a database to store items and prices like MongoDB, allowing for dynamic updates.
- **Unique Discounts**: Allow more dynamic and flexible discount types, such as time-limited offers or location-based discounts.
