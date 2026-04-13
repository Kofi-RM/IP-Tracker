Project Description

This is an IP Address Tracker web application built as part of a Frontend Mentor challenge. The app allows users to enter an IP address or domain name and receive real-time geolocation information, including the location, timezone, ISP, and coordinates displayed on an interactive map.

The project uses the IPify API to fetch location data and Leaflet to render and update the map based on the returned coordinates.

Challenges

One of the biggest challenges in this project was working with asynchronous data from the API. At first, I assumed that fetch() would automatically trigger errors when something went wrong and I could catch them with try/catch, but I learned that it actually returns a successful response even when the API sends back an error message. This meant I had to manually check the returned data before updating the UI.

Another challenge was handling both IP addresses and domain names in a single input field. I initially used a quick check with isNaN and removed dots from the string to determine the input type. While this worked, it made me realize there are more reliable ways to validate input using regular expressions.

Integrating the Leaflet map was also tricky. I ran into issues where the map wouldn’t update correctly because I was trying to use latitude and longitude values before the API response had finished loading. I constantly found myself forgetting to add await on async function calls or the .json() method. This was a valuable learning experience on how async/await works and why execution order matters when dealing with external data.

The most frustrating part of the project was the layout. I struggled a lot with positioning the info card between the banner and the map. Mixing absolute positioning, flexbox, and percentage-based values caused inconsistent behavior across screen sizes. On mobile, elements would overlap or drift out of place, which forced me to rethink the layout approach and rely more on flexbox and natural document flow. In the future I would start with a mobile based design and change to desktop rather than starting at desktop and trying to design back for mobile.