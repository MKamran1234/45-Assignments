"use strict";
function makeSandwich(...items) {
    console.log("\nMaking a sandwich with the following items:");
    items.forEach(singleItem => console.log("-" + singleItem));
    console.log("\n Now Enjoy Sandwich!");
}
makeSandwich("Bread", "chicken", "Cheese", "Lettuce");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "tomato", "Lettuce", "Egg", "Mayo", "Cheese");
