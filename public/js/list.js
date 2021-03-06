'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	// name listener
	$(".list-item .dislike").click(function(e) {
    $(this).closest(".list-item").hide();
  });

  $(".list-item .like").click(like);
}

/* Global variables */
var likes;
var food = null;
var foodName = null;
var imageURL = null;

function like(e) {

	// Prevent following the link
  e.preventDefault();

	// Google Analytics event
  gtag("send", "event", "like", "click");

	// increment likes
	likes = parseInt($(".like-counter").text());
  $(".like-counter").text(++likes);
	console.log("likes = " + likes);

  foodName = $(this).closest("span#name").text();
  imageURL = $(this).closest(".food-background").css("background-image");
	imageURL = imageURL.slice(imageURL.indexOf("images")-1,imageURL.length-2);
	imageURL = ".." + imageURL;
	console.log("imageURL is " + imageURL);

  food = {
		"name" : foodName,
		"imageURL" : imageURL
	};

	// POST
	$.post("likeFood", {likedFood: food}, postCallback);

	function postCallback(res) {
		console.log("pushed " + res.name + " to profile");
	};

  // hide
  $(this).closest(".list-item").hide();
}
