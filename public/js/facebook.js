function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
         FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response) {
  console.log(response);
  //var profileHTML = '<img class="profile-pic" src="' + response.picture.data.url + '">' + '<h1>Hi,' + response.name '!</h1>';

  $(".login-area").hide();
  $("#name").html("<h1>Hi, " + response.name + "!</h1><p>Welcome to Foodie</p>");
  $("#image").attr("src", response.picture.data.url);
  $("#continue").html("<a href='/'><button>Continue</button></a>");
}