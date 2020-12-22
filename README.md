# NoteTakingAppfor59976


# 59976notepad


## Overview

(___TODO__: A brief one or two paragraph, high-level description of your project_)

The idea is to create a note taking application that will meet the following requirements:
* As a visitor, I can register for an account on the app.
* As a user, I can sign in to my account.
* As a user, I can create a plain text note.
* As a user, I can delete a note created by me.
* As a user, I can update a note created by me.
* As a user, I can create tags for which I can use to tag to my notes.
* For instance, I can create a “Chores” tag, which I can then use to tag a subset of my notes as “Chores” notes. 
* As a user, I can search/view notes with a particular tag.


## Getting Started
(___TODO__: These instructions will get you a copy of the project up and running on your local machine for development and testing purposes_)


## Requirements

(___TODO__: List out any technologies needed to run your project_)


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

(___TODO__: Write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format)_)

1. As non-registered user, I can create a new account on the site.
2. As a user, I can log in to the site.
3. As a user, I can view items for sale.
4. As a user, I can add items to a shopping cart.
5. as a user, I can remove items from a shopping cart.
6. as a user, I can purchase items in my cart.

## References Used

(___TODO__: List any tutorials or material referenced that you've based your code off of_)

## Authors

