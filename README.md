# Search and Read

## Table of Contents

* [Instructions](#instructions)
* [Dependencies](#dependencies)
* [Contributing](#contributing)

## Instructions

A simple app to search for a keyword, which gives an image and a list of articles

To get started,

* visit [this](https://aman-kumar-rai.github.io/search-and-read/) link and play around with the application
* or open [the GitHub repo](https://github.com/aman-kumar-rai/search-and-read/) and clone or fork the project, and then 

  * execute ```npm install``` to install all the dependencies
  * execute ```npm start``` to start a local dev server which will open up the app in your default web browser

## Dependencies

### JS

The project is built using react, so dependencies include
* react
* react-dom
* prop-types

### CSS
* The projects is built using vanilla CSS, so there are no CSS dependencies

### APIS
* [Unsplash api](https://unsplash.com/developers) - to get the images
* [Newyork Times api](https://developer.nytimes.com/) - to get the articles

## Contributing

This projects is functional, but there are bugs to fix and improvements to make
### Bugs

* The loading component is common for image and articles. So, if the image is loaded first, the 'no-article found' message is displayed instead of loading component
* On starting the app, the image and articles are same as they should be when no image/article is found for a search

These bugs are not that major, but removing these should improve the user experience

### Improvements

* Loading multiple images and adding an image slider
* Giving the user an option to load more articles
* Allowing the user to click on uploader name to redirect to the unsplash account of that user
* Using lifecycle methods to improve performance by stopping render() when not needed

I would push the changes for these soon. Feel free to contribute and use the app the way you want
