# Coding Tasks

## Task one

Write a JS function to truncate the long string values to 5 symbols/characters, other symbols/characters should be replaced with three dots (Example: "ADKDKSSSJSDJSD" → "ADKDK..."). Place a copy icon near the value, by clicking it should copy the value to a clipboard.

## Task Two

Refactoring task: this piece of JavaScript code performs a specific task, but it's not written optimally or efficiently and might contain an error. Your task is to refactor the code to improve its readability, maintainability, and possibly performance.

```
    function calculateTotalPrice(products) {
    const total = 0; for (let i = 0; i < products.length; i++) {
      if (products[i].price) {
      total += products[i].price;
      }
    }
    return total;
    }

```

## Task three

Create a React component called "Route". It should take orderItem as a prop, and display route information: departure and arrival station names, date and time of the departure.

When a user hovers over the route name on the first line - they should see a tooltip with the full name of the route.
