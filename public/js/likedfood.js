'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

	// name listener
	$('.remove-btn').click(remove);
}

function remove(e) {

	e.preventDefault();

  $(this).closest(".food").hide();

}
