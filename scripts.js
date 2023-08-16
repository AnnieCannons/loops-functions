/********************** Exercise 1 ***********************/

// Create an array called favoriteFood and add 6 items to the array.


// Create a function called printFoods that passes the argument of lists through it.


// Within the function, create a for loop that writes to the document “My number [ ] favorite food is [ ]” for each item in the array.



// Call the function with the favoriteFood array.





/********************** Exercise 2 ***********************/

// Create a funciton called calculateAverage that takes in an array of numbers as an argument. The function should calculate the average of the numbers and return the value. 




// Your code here




const examScores = [85, 92, 78, 90, 88];
const averageScore = calculateAverage(examScores);
console.log("Average score:", averageScore.toFixed(2));




/********************** Exercise 3 ***********************/


// Create a funciton called findMax that takes in an array of numbers as an argument. The function should calculate the highest number and return the value. 




// Your code here




const values = [32, 15, 78, 51, 92];
const maxValue = findMax(values);
console.log("Maximum value:", maxValue);






/********************** Exercise 4 ***********************/

// Create a funciton called findMax that takes in 1) an array of strings and 2) a target string as arguments. The function should calculate the number of times that the target string appears.




// Your code here





const letters = ['a', 'b', 'c', 'a', 'b', 'a'];
const occurrenceCount = countOccurrences(letters, 'a');
console.log("Occurrences of 'a':", occurrenceCount);





/********************** Exercise 5 ***********************/

// Review this code

function filterGradesByPassing(grades) {
    const passingGrades = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 60) {
            passingGrades.push(grades[i]);
        }
    }
    return passingGrades;
}

const studentGrades = [85, 92, 48, 75, 68, 90, 56, 72, 82];


// Call this function so that it passes in the studentGrades as an argument. Store the value in a variable. 






/********************** Exercise 6 ***********************/

// Review this code

function generateSalesSummaryReport(salesData) {
    let totalSales = 0;
    let highestSale = 0;
    let lowestSale = Infinity;

    for (let i = 0; i < salesData.length; i++) {
        const saleAmount = salesData[i];
        totalSales += saleAmount;

        if (saleAmount > highestSale) {
            highestSale = saleAmount;
        }

        if (saleAmount < lowestSale) {
            lowestSale = saleAmount;
        }
    }

    const averageSale = totalSales / salesData.length;

    return {
        totalSales,
        averageSale,
        highestSale,
        lowestSale
    };
}

const dailySales = [1200, 1500, 900, 1800, 1350, 1600];
const salesSummary = generateSalesSummaryReport(dailySales);

// What is the data type of the value being return from the function?

// Log the following to the console: 
// Total Sales
// Average Sale
// Highest Sale
// Lowest Sale


// Create a new array of sales values.
// Call the function generateSalesSummaryReport with the new array. 