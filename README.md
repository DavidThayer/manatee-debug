# Manatee Mania

Debugging a CRUD app with Node, Express, MongoDB, and Mongoose.


## Objectives

This lab is making sure you know how to debug a full-stack JavaScript app using Node, Express, and MongoDB.

- Fork and clone this repo
- Install dependencies: `npm install`
- Get MongoDB up and running: `mongod`
- Seed your database: `node seed.js`
- Start your server: `nodemon`

## Tasks

- Go to `localhost:3000`. Stuff should be broken - no manatees are showing up. Let's start fixing them! 

- Go to 'api/manatees' – you'll see in your Node terminal that there are some server-side issues
    - Make sure all your require paths and `module.exports` keys are correct
    - After you fix all the errors, go to 'api/manatees' to make sure it works

- Go to 'api/manatees' to see your seeded manatees 
    - You'll see that your seed did not work properly (they are missing names!)
    - Fix your code so that the manatees all get names when seeded
    - Re-seed your database after you make this fix

- Check your console for any errors - you'll see a 404
    - Make sure that the URL you're requesting from the front-end corresponds to a route in the back-end

- Once you fix the URL, you'll see another error in your console: `allManateesFromServer is not defined`
    - Look at the line # to see where this should be fixed

- You'll see another error in your console: `renderManatee is not defined`
    - Look at the line # to see where this should be fixed

- Information is still not showing up on the page! Look at your `renderManatee` function to see why it's not working
    - Make sure manatees are being appended to the correct div
    - Make sure manatee names and images are showing up as well