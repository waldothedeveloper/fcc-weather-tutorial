# fcc-weather-tutorial
First of all, here's the link to check it out [here](https://codepen.io/w86compositor/full/WJoJpq/).

Hi fellow developers, today I want to share with you all the fun I had building the freecodecamp-weather-app. This was a fun challenge for me because it allowed me to play a bit with APIs and play with some JSON data which I love to do. The requirements where those:

User Story: I can see the weather in my current location.
User Story: I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.
User Story: I can push a button to toggle between Fahrenheit and Celsius.

In order to get the location in the browser you need to use something called the HTML5 Geolocation. This interface represents an object that is capable of programmatically obtain the position of a device, basically you will ask the user for permission to obtain the latitude and longitude of their location and use that to make the GET request to the Open-Weather API. All this comes from the Navigator Object (or interface) that has a bunch of read-only properties (or methods) like the navigator.geolocation, and the Geolocation Object has also 3 methods:

Geolocation.getCurrentPosition()
Geolocation.watchPosition()
Geolocation.clearWatch()
We are interested is the number 1: Geolocation.getCurrentPosition();

We are creating above a function called getLocation that will check if the navigator.geolocation object is supported by the browser ( if it's true) then, it will use the function showPosition as a parameter to display the latitude and longitude. If you're pretty curious you can check the Geolocation API Specification at:

https://www.w3.org/TR/geolocation-API/#api_description


or check the MDN Web Docs at:

https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition


As we see, we are making the GET request inside the success function, I am assigning the latitude and longitude to variables, then putting that into a string on the variable askLoc and making the GET request with that string. I am parsing the returning JSON data from the fcc weather api and putting into the variable resp, then console.log that to see the JSON, this is the data you should see ( with your location not mine) :


Now you can use that data to show the weather, for the purpose of simple demonstration I will not include the different CSS animations that I used depending on the weather but I will show you the 3 user stories that this challenge is requesting: to show the location, the weather description, an image or icon depending on the weather, and a button to toggle between Celsius and Fahrenheit. I will be using Bootstrap 4 which will help us to display a fantastic card with all this information. We will put the javascript file in a js folder and keep the html outside. No CSS folder this time ( yay Bootstrap!).

I included the jQuery $(document).ready() to execute everything after the html has loaded.
I included also the 'use strict' mode. This is generally a good practice.
The temperature is returned in Celsius by default with fractional digits. I used Math.trunc() to remove those and leave only the decimal integers.
4. To convert from celsius to fahrenheit it's just math my friend: ℉=(℃*1.8)+32. If you want to learn more check: 
5. Check the event listener to switch the toggle button between Celsius and Fahrenheit. 

I hope you enjoyed this short and simple tutorial. If you would like to see the clone the project and run it locally get it here in my github: 
