# 59976notepad

## Overview

The idea is to create an easy to use note taking application that can be accessed via the web. Users should be able to maintain their own notes, update/edit/delete them as well as use tag features and have the ability to sort through their notes by tag. 

This app will be accessible via Heroku at:
https://notepad59976.herokuapp.com/


## Getting Started

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/signup`  


## Requirements

You will need `node` and `npm` installed globally on your machine.


## Data Model

The application will store users, and notes.

- Users can have multiple notes.
- Notes can have an author (the user), a description, tags, and title.


An Example `User`:

```javascript
{
      "email" : "mark8@gmail.com",
      "uid" : "CTTZmApJhDbPJMBBaAvVuXsB0Mt1",
      "user" : "mark"
}
```

An Example `Note`:

```javascript
{
      "author" : "mark",
      "desc" : "clean the sink\nclean the fridge",
      "tags" : [ "chores" ],
      "title" : "stuff to do today in kitchen",
      "uid" : "CTTZmApJhDbPJMBBaAvVuXsB0Mt1"
}
```

## Site map

![alt text](https://github.com/mo8373/59976notepad/blob/main/Greenshot%202020-12-22%2016.27.17.png)
## User Stories or Use Cases

1. As a visitor, I can register for an account on the app.
2. As a user, I can sign in to my account.
3. As a user, I can create a plain text note.
4. As a user, I can delete a note created by me.
5. As a user, I can update a note created by me.
6. As a user, I can create tags for which I can use to tag to my notes.
7. For instance, I can create a “Chores” tag, which I can then use to tag a subset of my notes as “Chores” notes. 
8. As a user, I can search/view notes with a particular tag.

## References Used

Much research was done, here are some links with education I've learned in order to help create this.

* https://www.youtube.com/watch?v=Ke90Tje7VS0
* https://www.youtube.com/watch?v=zQyrwxMPm88
* https://www.youtube.com/watch?v=3qnrfkeguXg
* https://blog.flexiple.com/react-hooks-learn-by-building-a-notes-app/


## Authors
Moshe Oppenheim
