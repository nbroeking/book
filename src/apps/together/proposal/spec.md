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
  * key - Name
  * key - Category
    * users -
      * key - ID
      * key - UserName
      * key - IsBlocked
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

``` javascript
// given
user.current_user = 'null'

// when
user_login(UserName = 'BobbyBoy69')

// then
user.current_user should be
{
  '-cadsace': {... UserName: 'BobbyBoy69'},
}
```

## Action: Create a chatroom

``` javascript
// given
chatrooms is
{
  '-cadsace': {... Name: 'Space Dicks', Category: 'Other'},
}
// and 
user.current_user is 'true'

// when
create_chatroom(Name = 'Feel the Bern', Category: 'Politics')

// then
chatrooms should be
{
  '-cadsace': {... Name: 'Space Dicks', Category: 'Other'},
  '-cadsacf': {... Name: 'Feel the Bern', Category: 'Politics'}
}
```

## Action: Join a chatroom

``` javascript
// given
chatroom.users is
{
  '-cadsace': {... UserName: 'Bob'},
  '-cadsacf': {... UserName: 'Jeff'}
}
// and
user.username is Kieran

// when
join_chatroom(UserName = 'Kieran')

// then
chatroom.users should be
{
  '-cadsace': {... UserName: 'Bob'},
  '-cadsacf': {... UserName: 'Jeff'},
  '-cadsacg': {... UserName: 'Kieran'}
}
```

## Action: Post a chat 'good'

``` javascript
// given
chatroom.chats is
{
  '-cadsace': {... UserName: 'Bob' , Text: 'hi guys'},
  '-cadsacf': {... UserName: 'Jeff', Text: 'how are you?'}
}
// and
user.username is Matt

// when
post_a_message(Text = 'good', UserName = 'Matt')

// then
chatroom.chats should be
{
  '-cadsace': {... UserName: 'Bob' , Text: 'hi guys'},
  '-cadsacf': {... UserName: 'Jeff', Text: 'how are you?'},
  '-cadsacg': {... UserName: 'Matt', Text: 'good'}
}
```

## Action: Upvote/Downvote a chat

``` javascript
// given
chatroom.chats is
{
  '-cadsace': {... UserName: 'Bob' , Text: 'hi guys', Score: 'null'},
  '-cadsacf': {... UserName: 'Jeff', Text: 'how are you?', Score: 'null'}
}

// when
up_vote(id = '-cadsace')

// then
chatroom.chats should be
{
  '-cadsace': {... UserName: 'Bob' , Text: 'hi guys', Score: '1'},
  '-cadsacf': {... UserName: 'Jeff', Text: 'how are you?', Score: 'null'}
}
```

## Action: Ban User


``` javascript
// given
chatroom.users is
{
  '-cadsace': {... UserName: 'Bob' , IsBlocked: 'false'},
  '-cadsacf': {... UserName: 'Jeff', IsBlocked: 'false'}
}
// and
user.IsAdmin is 'true'

// when
ban_user(UserName = 'Jeff', IsBlocked = 'true')

// then
chatroom.users should be
{
  '-cadsace': {... UserName: 'Bob' , IsBlocked: 'false'},
  '-cadsacf': {... UserName: 'Jeff', IsBlocked: 'true'}
}
```





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
