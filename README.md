# 59976notepad

## Overview

The idea is to create an easy to use note taking application that can be accessed via the web. Users should be able to maintain their own notes, update/edit/delete them as well as use tag features and have the ability to sort through their notes by tag. 


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

(___TODO__: A description of your application's data and their relationships to each other_)

The application will store user, items, and orders.

- Users can have many orders.
- Orders can have many items.

(___TODO__: Sample resources_)

An Example `User`:

```javascript
{
  id: 5,
  firstName: "Mary",
  lastName: "Jane"
}
```

An Example `Item`:

```javascript
{
  id: 3,
  name: "Lamp",
  price: "$19.99"
}
```

An Example `Order`:

```javascript
{
  id: 1,
  user_id: 5,// a reference to a User object
}
```

An Example `OrderItems`:

```javascript
{
  item_id: 3,
  order_id: 1 // References an Order object
}
```

## Site map

(___TODO__: Draw out a site map that shows how pages are related to each other_)

Here's an [example](https://www.kauligmedia.com/media/1589/sitemap-01.jpg). Mostly looking for the names of pages and where they flow to.

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

(___TODO__: List any tutorials or material referenced that you've based your code off of_)

## Authors
Moshe Oppenheim
