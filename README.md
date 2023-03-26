Chitter Challenge
=================

## Introduction

This MERN (Mongoose, Express, React, Node.js) project creates a simple mock of a Twitter-like social media platform. Our working title was "Chitter", but I've taken the liberty of calling mine "Witter", so that people can share their "Wit".

It provides the following functionality:
* User registration (email, user name, user handle, password)
* User login using email and password
* Users can add a "Wit" when they are logged in. This will attach their userId to the Wit.
* The homepage displays all of the available Wits in reverse chronological order.
* User passwords are encrypted using bcrypt and JWT.

The project borrows features from the Todos app provided for reference by Digital Futures. It is tested using Chai, Mocha and Jest.

There are lots of features that could be added, here are a few that would be important, both for my learning and better functionality:
* Some of the user interface doesn't flow as well as it could. Verifying logins and postings and redirecting accordingly would be a good addition.
* Replying to another user. This is an interesting feature to add because of the way is can reuse the functionality of other components, and create a chain of connections between the Wits. That conversation can get very complicated, very quickly, if replies to replies are also allowed, because of the branching threads that would be created. From a database point of view it isn't complicated though, since a reply can only be attached to one Wit.

## Resources

This project made extensive use of the Simple Login, Todo App and JWT examples given by Digital Futures. I also used many online resources to help me to understand new concepts. The Net Ninja youTube channel was a great help, and this post on [JWT Authentication](https://www.freecodecamp.org/news/how-to-build-a-fullstack-authentication-system-with-react-express-mongodb-heroku-and-netlify/) from freecodecamp.org provided a great walkthrough to add hashed passwords to my app.

## How to run the program

The easiest way is to use the Netlify version, which will run automatically. 

You can also clone the repository and run the app on your own machine. You will need to install the following:
Backend:

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
