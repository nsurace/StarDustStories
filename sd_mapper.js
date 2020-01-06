"use strict"
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Nick
   Date: 1/6/2020  

*/
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();

document.getElementById("timeStamp").innerHTML = timeStr;

//Get the hour of the current time
var thisHour = thisTime.getHours();

//Get the month as a number
var thisMonth = thisTime.getMonth();

//Determine which map to use
var mapNum = (thisMonth * 2 + thisHour) % 24;

//Showing the image for the sky
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

//
document.getElementById("planisphere").insertAdjacentHTML('afterBegin', imgStr);
















