# Writing Loops with Functions in JavaScript

## Loops with Functions

- Using loops in functions in JavaScript is a common practice that allows you to encapsulate a sequence of repetitive actions within a reusable function. This can help improve code organization, maintainability, and reusability. Let's explore how loops can be incorporated into functions.

 ```javascript
function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const scores = [85, 92, 78, 90, 88];
const totalScore = calculateSum(scores);
console.log("Total score:", totalScore);
 ```

- By encapsulating these repetitive tasks within functions, you can reuse the same logic with different input data, leading to cleaner and more modular code. This approach also enhances code readability and makes it easier to debug and maintain your codebase.


### Prep

1. Connect your js file to your HTML file
2. Open your code in the browser and open your console

### Activities
1. In the `js` file, complete the list of exercises. 
