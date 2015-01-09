$(document).ready(function() {
  console.log('Document is ready.');

  /*
  * Create a Firebase Reference
  */
















































  /*
  * Register DOM elements
  *
  * We register DOM elements so we can
  * use them over and over efficiently.
  * These vars are prefixed with $ to indicate
  * they are registered with jQuery.
  */

















































  /*
  * Load messages from Firebase
  *
  * This method is called when the existing
  * messages are first received and when new
  * message are added to Firebase.
  */

















































  /*
  * Listen for user input
  *
  * This method listens for each keypress
  * on the message input field and saves
  * the data to Firebase when content is submitted.
  */

















































  /*
  * Create root ref for authentication
  *
  * You could reuse messagesRef for this.
  * Here, we're creating a new Firebase reference, but calling it rootRef instead.
  * References are lightweight and you can create lots of them.
  */

















































  /*
  * Listen for when the authentication changes.
  *
  * This is called whenever a user logs in or out.
  * authData === null if the user is logged out.
  * Otherwise, it has useful user data.
  * https://www.firebase.com/docs/web/guide/user-auth.html
  */

















































  /*
  * Register DOM elements for authentication
  *
  * We register DOM elements so we can
  * use them over and over efficiently.
  * These vars are prefixed with $ to indicate
  * they are registered with jQuery.
  */

















































  /*
  * Helper login method
  *
  * Given a provider, this method will use Firebase to login with that provider.
  * Errors will be printed to the console.
  */

















































  /*
  * Register click events
  *
  * This will log users in when they click one of the provider login buttons.
  * And log users out when they click the logout button.
  */

});
