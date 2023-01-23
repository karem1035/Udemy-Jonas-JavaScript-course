"use strict";
/*
// assignments-js-fundamentals
// JavaScript Fundamentals – Part 1

// LECTURE: Values and Variables

// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

*/
const country = "Egypt";
const continent = "Africa";
let population = 100;

console.log(country, continent, population);

//////////////////////////////////////////////////////////////////

// LECTURE: Data Types

// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

const isIsland = false;
const language = "Arabic";

console.log(isIsland, country, continent, population, language);

// LECTURE: Basic Operators

// 1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
const halfPopulation = population / 2;

// 2. Increase the population of your country by 1 and log the result to the console
const populationPlus = population + 1;
console.log(populationPlus);

// 3. Finland has a population of 6 million. Does your country have more people than Finland?

const isMoreThanFinland = population > 6;
console.log("is egypt has more population than finaln ? ", isMoreThanFinland);
// 4. The average population of a country is 33 million people. Does your country have less people than the average country?
const isMoreThanAverage = population > 33;
console.log("is egypt has more population than Average ? ", isMoreThanAverage);

// 5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
const description = `${country} is in ${continent}, and it is ${population} million people speaks ${language}`;

console.log(description);

// LECTURE: Strings and Template Literals
// Recreate the 'description' variable from the last assignment, this time using the template literal syntax : DONE

// LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)

// 2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original

population = 130;
population = 13;

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else
  console.log(`${country}'s population is ${33 - population} below average`);
