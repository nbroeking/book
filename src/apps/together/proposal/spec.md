---
layout: layout.hbs
---

# Specification

# Data

Our app uses the following structure for the database backend:

The data model for this project would require 4 pieces.
* Users
* Chatrooms
* Chats
* Attachments

* Users -
  * key - ID
  * key - Name
  * key - ImageURL
  * key - UserName
  * key - CurrentlyTyping
  * key - IsBlocked 
  * key - IsAdmin

* Chatrooms -
  * key - ID
  * key - Chatroom
    * chats -
      * key - ID 
      * key - Text
      * key - Score
      * key - UserName
      * Attachment -
        * key - ID 
        * key - ContentType
        * key - URL


# Actions

The major actions of our app are:
* Login
* Create a chatroom
* Join a chatroom
* Post a chat
* Upvote/Downvote a chat
* Ban User

## Action: Login

(TODO: cases)

## Action: Create a chatroom

(TODO: cases)

## Action: Join a chatroom

(TODO: cases)

## Action: Post a chat 'good'

``` javascript
// given
chatroom.chats is
{
  '-cadsace': {... UserName: 'Bob' , Text: 'hi guys'},
  '-cadsacf': {... UserName: 'Jeff', Text: 'how are you?'},
}
// and
user.username is Matt

// when
post_a_message(Text = 'good', UserName = 'Matt')

// then
foo.bar.messages should be
{
  '-cadsace': {... UserName: 'Bob' , Text: 'hi guys'},
  '-cadsacf': {... UserName: 'Jeff', Text: 'how are you?'},
  '-cadsacf': {... UserName: 'Matt', Text: 'good'},
}
```

## Action: Upvote/Downvote a chat

(TODO: cases)

## Action: Ban User

(TODO: cases)





(remove the example below before submission)

## Action: Post A Message (Example)

### case: post a message 'd'

``` javascript
// given
foo.bar.messages is
{
  '-cadsace': 'a',
  '-cadsacf': 'b',
  '-cadsacg': 'c'
}

// when
post_a_message(text = 'd')

// then
foo.bar.messages should be
{
  '-cadsace': 'a',
  '-cadsacf': 'b',
  '-cadsacg': 'c',
  '-cadsach': 'd',
}
```

### case: delete a message

``` javascript
// given
foo.bar.messages is
{
  '-cadsace': 'a',
  '-cadsacf': 'b',
  '-cadsacg': 'c'
}

// when
delete_a_message(id = '-cadsacg')

// then
foo.bar.messages should be
{
  '-cadsace': 'a',
  '-cadsacf': 'b'
}
```
