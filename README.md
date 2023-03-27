Chitter Challenge
=================

## Introduction

This MERN (Mongoose, Express, React, Node.js) project creates a simple mock of a Twitter-like social media platform. 

Our working title was "Chitter", but I've taken the liberty of calling mine "Witter", so that people can share their "Wit".

It provides the following functionality:
* User registration (email, user name, user handle, password)
* User login using email and password
* Users can add a "Wit" when they are logged in. This will attach their userId to the Wit.
* The homepage displays all of the available Wits in reverse chronological order.
* User passwords are encrypted using bcrypt and JWT.
* express-validator has been used to check and sanitise the data sent through POST requests.

The project borrows features from the Todos app provided for reference by Digital Futures. It is tested using Chai, Mocha and Jest.

There are lots of features that could be added, here are a few that would be important, both for my learning and better functionality:
* The flow of the user interface feels fairly natural now, but this was an aspect I struggled to get right. I tried to ensure that alert messages arrive at the right times, and with the right information, and I think I have mostly achieved this.
* Replying to another user. This is an interesting feature to add because of the way is can reuse the functionality of other components, and create a chain of connections between the Wits. That conversation can get very complicated, very quickly, if replies to replies are also allowed, because of the branching threads that would be created. From a database point of view it isn't complicated though, since a reply can only be attached to one Wit.

## Domain Modelling

#### Front End

| Route | Element | Components
|-----|-----|----- 
| '/' | Home | User (conditional on login), allWits 
| '/login' | Login | Login
| '/register | Register | Register
| '/addWit' | AddWit | User, AddWit

#### External requests

| Component | URL | Request
|-----|-----|-----
| Login | http://localhost:4000/login | POST
| Register | http://localhost:4000/register | POST
| AddWit | http://localhost:4000/addWit | POST
| AllWits | http://localhost:4000/ | GET

#### Back end

| Route | Type | Body
|-----|-----|-----
| /login | POST | user: email, password
| /register | POST | user: email, password, handle, name
| /addWit | POST | wit: text
| /allWits | GET | wit[]: postedBy, dateCreated, text



## Testing

The code has been tested, although there is always room for improvement! The tests can be run using the command line by navigating to the frontend and backend folders respectively. Tests are run using Jest, Mocha and Chai.

Front end tests: `npm test`

Back end tests: `npm run test-win` or `npm test`

## Resources

This project made extensive use of the Simple Login, Todo App and JWT examples given by Digital Futures. I also used many online resources to help me to understand new concepts. The Net Ninja youTube channel was a great help, and this post on [JWT Authentication](https://www.freecodecamp.org/news/how-to-build-a-fullstack-authentication-system-with-react-express-mongodb-heroku-and-netlify/) from freecodecamp.org provided a great walkthrough to add hashed passwords to my app.

## How to run the program

I have tried to create an online version using Netlify and Render, but have been defeated for now.

To run the program as it is needs you to open 2 terminals, one in the frontend folder and one in the backend.

Back end: `npm run start-win` or `npm start` depending on whether you are on Windows or Mac.

Front end: `npm start` This will open automatically in your web browser.

The app uses an online database at MongoDB Atlas, so there's no need to set up anything else. It uses separate databases for development and testing.

You can register yourself if you'd like to post, but be aware that while passwords are encrypted, emails are sent as plaintext. If you'd prefer to use an existing user you can use the following details: Email: `docbrown@21gigawatts.com`, Password: `greatscott!`

## Reflections

Despite the limited functionality of this app at present, the process of development was much more complex than on previous challenges. I found it hard to stay focussed on achieving small increments towards each user story, and despite making a thorough plan for the structure of my program it was tricky to stick to it. I found testing some parts of a program difficult and need to learn more about this. I also need to take more time over making components work in the way I want them to from the start. In this case a lack of experience or confidence led to me moving on from some tasks once the basic functionality worked, because I struggled to implement slightly different flows to the UI, and it was difficult to estimate the time it might take to improve them. This stored up a problem for later when different parts of the code function in slightly different ways, and altering the functionality at this stage becomes fraught with minor problems. I feel like if I started the project from the beginning I would have a better idea of hwo this would work in the future, but it will also be a useful exercise to clean up my existing code without creating new problems.


### Standard Acceptance Criteria
```
As a trainee software engineer
So that I can let people know what I am doing  
I want to post a message (peep) to chitter

As a trainee
So that I can see what others are saying  
I want to see all peeps in reverse chronological order

As a trainee
So that I can better appreciate the context of a peep
I want to see the time at which it was made

As a trainee
So that I can post messages on Chitter as me
I want to sign up for Chitter

As a trainee
So that only I can post messages on Chitter as me
I want to log in to Chitter

As a trainee
So that I can avoid others posting messages on Chitter as me
I want to log out of Chitter
```

Additional requirements:
------

* You don't have to be logged in to see the peeps.
* Trainee software engineers sign up to chitter with their email, password, name and a username (e.g. ewithers@digitalfutures.com, password123, Edward Withers, dearshrewdwit).
* The username and email are unique.
* Peeps (posts to chitter) have the name of the trainee and their user handle.
* Your README should indicate the technologies used, and give instructions on how to install and run the tests.

### Extended Acceptance Criteria

```
As a trainee
So that I can stay constantly tapped in to the shouty box of Chitter
I want to receive an email if I am tagged in a Peep

As a trainee
In order to start a conversation as a DFA trainee Software Engineer
I want to reply to a peep from another trainee.
```
