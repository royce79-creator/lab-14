# Inclass Demo Insructions

### Chart Js
[![](https://data.jsdelivr.com/v1/package/npm/chart.js/badge)](https://www.jsdelivr.com/package/npm/chart.js)

## Problem Domain

You have been hired by a goat fan club called GoatPick to build an app that helps users determine the cutest goat picture out of a collection of photographs.  

Since catalogs are expensive to print and distribute, and goats need only the loyalest of fans, and GoatPick is a lean startup that needs to carefully watch its expenditures, GoatPick wants to feature only the most loved goats in its catalog that are the most likely to acheive loyal fandom.

This means that GoatPick wants to do market analysis  to test their potential fan interest… before actually putting them into the catalog.

To make this market analysis maximally effective, GoatPick wants you to build an app that displays potential goat candidates to individuals in focus groups (two goats at a time, side-by-side) so you’ll need to manage the size and the aspect ratio of the images.

The app’s purpose is to have the group members choose which goat, of the two displayed images, that they would most likely be fans of, and then store, calculate, and visually display the resulting data.

To keep the goat selection process as untainted as possible, you have been instructed to not allow any results to be shown to users until there have been a total of 15 selections made.

The marketing team is not only interested in the total number of clicks, but also the number of times that an item was shown. So, you’ll also need to keep track of how many times each image is displayed.

You are also responsible for the look and feel of the app, so don’t forget a custom font, color palette, layout with semantic HTML, and so on.

### To recap:  

Your app will randomly display two of these unique pictures at a time, the user should be able to click on their favorite.  Once clicked, the images will rerender another set of random pictures.  Although it is acceptable for the pictures to be shown back to back on today's iteration of this app, the two pictures rendered may not be the same.  

after choosing your favorite goat 15 times, the voting session will conclude, the user can press a view results "button" and the app will render a list showing all of the goats names, the number of times they were viewed, and the number of clicks received.



#### What Do We Need?
- Global Variables
  - arrays
  - counter - start 0 clicks / max of 15 clicks?
  - windows into the DOM - container, img one img two, view results?
- Constructor
  - image source
  - name
  - click
  - views
  - push allGoats into array
- prototype methods???
 - shouldn't need
- Functions:
  - render two unique images to the DOM
    - generate random number(s) to get images from an array
    - assign randoms to variables, push into an array maybe(ESPECIALLY FOR MORE 2 images)
    - remember lab 3?  when we said you couldn't use a certain array method?
    - how do you know if an array inculdes something?  maybe google "array include js mdn"
    - validation to make sure the random numbers are not the same
    - once we have 2 unique images to render.  increment views for BOTH objects
  - need to rerender images - EVENT HANDLER
    - if the images are assigned by property, all we need to do for new images,  is  reassign the properties.  
    - increment counter
    - event handler can call render function again, 
    - log  what was clicked  - in other words,increment THAT objects "click" propertty
    - hit limit - stop rendering when hit 15 clicks - remove event handler
    - can add button then OR the button could exist all along
  - button NEEDS seperate event handler
    - validation on button (if it already exists) if clicks  = 15, then do the thing
    - render list of results
      - render name, number of views, and number of clicks





### Brainstormings and other ideas
