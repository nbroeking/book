---
layout: layout.hbs
---

# Data Models

The data model for this project would require 4 pieces.
* Users
* Chatrooms
* Chats
* Currently Typing

To ackomplish this We could create a data model along the lines of: 

* Users -
  * key - Name
  * key - ImageURL
  * key - username
  
* Chatrooms -
  * key - chatroom
    * chat - 
      * key - chattext
      * key2 - chattext
    * inprogress -
      * key - text
      
      
# Revision

To make these constraints we can do two things. One ensure that the overall body tag fits on the screen. And two any subcontent we can either make a pop up or scrollable. For this project I made the chatrooms and the chats scrollable so the user can scroll through as much info as they need. This also ensures that everything can fit on an ipad. 