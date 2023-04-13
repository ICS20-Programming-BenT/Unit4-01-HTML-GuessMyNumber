// Copyright (c) 2023 Ben Thomson. All rights reserved.
//
// Created by: Ben Thomson
// Created on: 04/13/2023
// This file contains the JS functions for index.html

// This function allows the user to guess a number between 1 and 6 and compares it to a generated number. 
function guessGiven() {
  const MIN = 1; 
  const MAX = 6; 
  
  let correctNumber = Math.floor((Math.random() * MAX) + MIN);
  let guessedNumber = document.getElementById("user-guess").value;

 // IF/THEN statement: if correctNumber is equal to guessedNumber
 if (correctNumber == guessedNumber) {
   document.getElementById("results").innerHTML = "Congratulations! The number you guessed is correct!";
 }

  // IF/THEN statement: if correctNumber is not equal to guessedNumber
if (correctNumber != guessedNumber) {
   document.getElementById("results").innerHTML = "Sorry, you guessed the wrong number. The correct number was " + correctNumber + ". Try again!";
 }
}