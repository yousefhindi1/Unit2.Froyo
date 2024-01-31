const userInput = prompt("Enter your froyo flavors, separated by commas");

const flavorsArray = userInput.split(',');

const flavorCounts = {};

flavorsArray.forEach(flavor => {
    if (flavorCounts[flavor]) {
        flavorCounts[flavor]++;
    } else {
        flavorCounts[flavor] = 1;
    }
});

console.table(flavorCounts);
