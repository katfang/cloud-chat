$(document).ready(function() {

  /*
  * Create a Firebase Reference
  */

  var messagesRef = new Firebase('https://cloud-chat-demo.firebaseio.com/');


  /*
  * Register DOM elements
  *
  * We register DOM elements so we can
  * use them over and over efficiently.
  * These vars are prefixed with $ to indicate
  * they are registered with jQuery.
  */

  var $newMessage = $('#new-message');
  var $username = $('#username');
  var $messages = $('#messages');


  /*
  * Load messages from Firebase
  *
  * This method is called when the existing
  * messages are first received and when new
  * message are added to Firebase.
  */

  messagesRef.limitToLast(10).on('child_added', function (snapshot) {
    //GET DATA
    var data = snapshot.val();
    var username = data.name || "anonymous";
    var message = data.text;

    //CREATE ELEMENTS MESSAGE & SANITIZE TEXT
    var messageElement = $("<li>");
    var nameElement = $("<strong class='example-chat-username'></strong>");
    nameElement.text(username);
    messageElement.text(message).prepend(nameElement);

    //ADD MESSAGE TO LIST
    $messages.append(messageElement);

    //SCROLL TO BOTTOM OF CHAT BOX
    $messages[0].scrollTop = $messages[0].scrollHeight;
  });


  /*
  * Listen for user input
  *
  * This method listens for each keypress
  * on the message input field and saves
  * the data to Firebase when content is submitted.
  */

  $newMessage.keypress(function (e) {
    // GET FIELD VALUES
    var username = $username.val();
    var message = $newMessage.val().trim();

    // SAVE MESSAGE WHEN 'ENTER' IS PRESSED
    if (e.keyCode == 13 && message.length) {
      messagesRef.push({name:username, text:message});
      $newMessage.val('');
    }
  });


  /*
  * Create root ref for authentication
  * 
  * You could reuse messagesRef for this.
  * Here, we're creating a new Firebase reference, but calling it rootRef instead.
  * References are lightweight and you can create lots of them. 
  */

  var rootRef = new Firebase("https://live-cloud-chat.firebaseio.com");


  /*
  * Listen for when the authentication changes.
  *
  * This is called whenever a user logs in or out. 
  * authData === null if the user is logged out.
  * Otherwise, it has useful user data. 
  * https://www.firebase.com/docs/web/guide/user-auth.html
  */

  rootRef.onAuth(function(authData) {
    if (authData !== null) {
      // USER IS LOGGED IN, GET DISPLAY NAME FROM DATA
      var displayName = authData[authData.provider].displayName || authData[authData.provider].username; 
    
      // SHOW DISPLAY NAME
      $username.val(displayName);
      
      // HIDE LOGIN BUTTONS, SHOW LOGOUT BUTTON 
      $("#login").addClass("hidden");
      $("#logout").removeClass("hidden");
    } else {
      // USER IS LOGGED OUT, REMOVE DISPLAY NAME
      $username.val('');
      
      // SHOW LOGIN BUTTONS, HIDE LOGOUT BUTTON 
      $("#login").removeClass("hidden");
      $("#logout").addClass("hidden");
    }
  });
  
  
  /*
  * Register DOM elements for authentication
  *
  * We register DOM elements so we can
  * use them over and over efficiently.
  * These vars are prefixed with $ to indicate
  * they are registered with jQuery.
  */

  var $facebookLogin = $('#facebook-login');
  var $githubLogin = $('#github-login');
  var $twitterLogin = $('#twitter-login');
  var $logoutButton = $('#logout-button');
  

  /*
  * Helper login method
  *
  * Given a provider, this method will use Firebase to login with that provider.
  * Errors will be printed to the console.
  */

  var login = function(provider) {
    rootRef.authWithOAuthRedirect(provider, function(error, authData) {
      if (error) {
        console.log("Login failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });
  };
  

  /*
  * Register click events
  *
  * This will log users in when they click one of the provider login buttons.
  * And log users out when they click the logout button. 
  */ 

  $facebookLogin.click(function() { login("facebook"); });
  $githubLogin.click(function() { login("github"); });
  $twitterLogin.click(function() { login("twitter"); });
  $logoutButton.click(function() { rootRef.unauth(); });
});
