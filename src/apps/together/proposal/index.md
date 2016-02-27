---
layout: layout.hbs
---

# Proposal

## Team Members

* Nicolas Broeking
* Matt Bubernak
* Kieran Czerwinksi
* Andrew Krodinger

## Ideation

These ideation questions are the same as before. Your answers should represent
the integration of creative ideas from every team member.

* What is the name of your app?

Chatty Kathy

* What collaborative activity can people do together using your app?

Our app enables people to discuss different topics pubilicly. (Similar to youtube comments but without the video). 

* What is the ideal number of concurrent users (must be at least 10 but no more than 40)?

The ideal number of users is anywhere from 5 to 20. We support more users though but user expierence starts decreasing after 20. 

* What skills do people need in order to do this activity?

They need to be literate and know how to use a computer. Other than that anyone can use our app!

* Is this activity for fun or for something practical?

Both! People can chat about fun topics, serious topics, work, school, vacatation, and just about anything. 

* How can a person see what everyone else is doing?

Once the user submits their chat the text shows up for everyone else. While people are typing though it will show that they are typing so everyone knows that things are happening. There is also a side-bar with a list of all active users. 

* How can a person see the most recent result of everyone's collaborative effort?

Every chat box has a list of what is happening at the bottom. New chats are pushed in at real time so everyone is able to see that data. Comments are associated with a score that is updated live, as users upvote/downvote comments. 

* What can an admin see (i.e., God's mode)?

Admins are able to see everything that a normal person can see except they are also able to ban users from typing. This allows for moderaters to control unrully people. Admin's also see a list of all registered users, those who are online and those who are offline. 


## Contributions

For each person on the team, jot down a list of ideas credited to that person.
It's okay to credit multiple people for the same idea. The rationale of this
section of the proposal is to demonstrate that everyone on the team contributes
useful ideas.

* Nicolas Broeking
  * Allow Users to chat about random topics.
  * Allow admins to block users.
  * Show when users are typing.

* Matt Bubernak 
  * Chat submissions can be Up/Downvoted by registered users. 
  * Chats show list of users currently viewing them. 
  * Admin see's a list of all online/offline users.
  
* Kieran Czerwinski
  * Users can create their own chatrooms and invite friends.
  * Users can add embeded media content from youtube, vimeo, soundcloud, etc. to a special media section of the chat room.
  * Users can watch or listen to this media together in realtime and chat about them.

* Andrew
  * (TODO)

## Plan

A reasonable way to implement a functional prototype of your together app
is to build upon the service-matching app (i.e. uber). Discuss what additional
efforts may be required from your team to develop the together app.

* What existing components of the uber app your team can reuse?

We are able to resuse the Nav Bar as well as the login code. Most everything else is going to have to be developed from scratch though.

* What new components and features your team may need to build?

We will need to build all the framework as well as each of the components for the chat. We will need a text submission box, a chat box, a topic box, a way to create a new topic, an admin page to block users and view users, components for chat, and the firebase to store all the data. We will need to consider how to store these chat artifacts in our database as well(I.E. associating chat lines with scores with chat windows)

* What new skills your team will still need to acquire?

We will need to acquire skills to build databases that can work with a lot of settings and moving data. So far in this class we have only delt with small amounts of data. We need to figure out effecient and effective ways to interact with data. This also gives us a chance to practice what we have been learning in class to further our expertice with web apps. 

## What's Next?

This is a preliminary proposal. Next week, your team will receive feedback and
will work on building a _mockup_ of this app. The week after that, your team
will start implementing the app.
