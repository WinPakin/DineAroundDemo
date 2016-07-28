/*------------


View

------------*/


// Elements
// Additional elemets in on load function

// On side Nav
var introNav = document.getElementById('introNav');
var popChefNav = document.getElementById('popChefNav');
var friNav = document.getElementById('friNav');
var satNav = document.getElementById('satNav');
var sunNav = document.getElementById('sunNav');
var pastMealNav = document.getElementById('pastMealNav');
var aboutUsNav = document.getElementById('aboutUsNav');
//On top Nav
var attendNav = document.getElementById('attendNav');
var becomeNav = document.getElementById('becomeNav');
var statusNav = document.getElementById('statusNav');
var yourEventNav = document.getElementById('yourEventNav');
var postEventNav = document.getElementById('postEventNav');
// upload Chef App 
var uploadAppForm = document.getElementById('uploadAppForm');
var uploadFile = document.getElementById('uploadFile');


// onclick functions [[ navbar --> section]]
var introFunction = function() {
    // Displays content
    // side nav
    introSection.style.display = 'block';
    popChefSection.style.display = 'none';
    friSection.style.display = 'none';
    satSection.style.display = 'none';
    sunSection.style.display = 'none';
    pastMealSection.style.display = 'none';
    aboutUsSection.style.display = 'none';
    // Top nav
    attendSection.style.display = 'none';
    becomeSection.style.display = 'none';
    yourEventSection.style.display = 'none';
    postEventSection.style.display = 'none';

    // adds active class
    // side Nav
    introNav.classList.add('active');
    popChefNav.classList.remove('active');
    friNav.classList.remove('active');
    satNav.classList.remove('active');
    sunNav.classList.remove('active');
    pastMealNav.classList.remove('active');
    aboutUsNav.classList.remove('active');
    // top Nav
    attendNav.classList.remove('active');
    becomeNav.classList.remove('active');
    yourEventNav.classList.remove('active');
    postEventNav.classList.remove('active');
  };

  var popChefFunction = function() {
    // Displays content
    // side nav
    introSection.style.display = 'none';
    popChefSection.style.display = 'block';
    friSection.style.display = 'none';
    satSection.style.display = 'none';
    sunSection.style.display = 'none';
    pastMealSection.style.display = 'none';
    aboutUsSection.style.display = 'none';
    // top nav
    attendSection.style.display = 'none';
    becomeSection.style.display = 'none';
    yourEventSection.style.display = 'none';
    postEventSection.style.display = 'none';
    // adds active class
    // side nav
    introNav.classList.remove('active');
    popChefNav.classList.add('active');
    friNav.classList.remove('active');
    satNav.classList.remove('active');
    sunNav.classList.remove('active');
    pastMealNav.classList.remove('active');
    aboutUsNav.classList.remove('active');
    // top nav
    attendNav.classList.remove('active');
    becomeNav.classList.remove('active');
    yourEventNav.classList.remove('active');
    postEventNav.classList.remove('active');
  };
var friFunction = function() {
    // Displays content
    // side nav
    introSection.style.display = 'none';
    popChefSection.style.display = 'none';
    friSection.style.display = 'block';
    satSection.style.display = 'none';
    sunSection.style.display = 'none';
    pastMealSection.style.display = 'none';
    aboutUsSection.style.display = 'none';
    // top nav
    attendSection.style.display = 'none';
    becomeSection.style.display = 'none';
    yourEventSection.style.display = 'none';
    postEventSection.style.display = 'none';
    // adds active class
    // side nav
    introNav.classList.remove('active');
    popChefNav.classList.remove('active');
    friNav.classList.add('active');
    satNav.classList.remove('active');
    sunNav.classList.remove('active');
    pastMealNav.classList.remove('active');
    aboutUsNav.classList.remove('active');
    // top nav
    attendNav.classList.remove('active');
    becomeNav.classList.remove('active');
    yourEventNav.classList.remove('active');
    postEventNav.classList.remove('active');
  };

var satFunction = function() {
    // Displays content
    // side nav
    introSection.style.display = 'none';
    popChefSection.style.display = 'none';
    friSection.style.display = 'none';
    satSection.style.display = 'block';
    sunSection.style.display = 'none';
    pastMealSection.style.display = 'none';
    aboutUsSection.style.display = 'none';
    // top nav
    attendSection.style.display = 'none';
    becomeSection.style.display = 'none';
    yourEventSection.style.display = 'none';
    postEventSection.style.display = 'none';
    // adds active class
    // side nav
    introNav.classList.remove('active');
    popChefNav.classList.remove('active');
    friNav.classList.remove('active');
    satNav.classList.add('active');
    sunNav.classList.remove('active');
    pastMealNav.classList.remove('active');
    aboutUsNav.classList.remove('active');
    // top nav
    attendNav.classList.remove('active');
    becomeNav.classList.remove('active');
    yourEventNav.classList.remove('active');
    postEventNav.classList.remove('active');
  };
  var sunFunction = function() {
    // Displays content
    // side Nav
    introSection.style.display = 'none';
    popChefSection.style.display = 'none';
    friSection.style.display = 'none';
    satSection.style.display = 'none';
    sunSection.style.display = 'block';
    pastMealSection.style.display = 'none';
    aboutUsSection.style.display = 'none';
    // top Nav
    attendSection.style.display = 'none';
    becomeSection.style.display = 'none';
    yourEventSection.style.display = 'none';
    postEventSection.style.display = 'none';
    // adds active class
    // side Nav
    introNav.classList.remove('active');
    popChefNav.classList.remove('active');
    friNav.classList.remove('active');
    satNav.classList.remove('active');
    sunNav.classList.add('active');
    pastMealNav.classList.remove('active');
    aboutUsNav.classList.remove('active');
    // top Nav
    attendNav.classList.remove('active');
    becomeNav.classList.remove('active');
    yourEventNav.classList.remove('active');
    postEventNav.classList.remove('active');
  };
var attendFunction = function() {
    // Displays content
    // side nav
    introSection.style.display = 'none';
    popChefSection.style.display = 'none';
    friSection.style.display = 'none';
    satSection.style.display = 'none';
    sunSection.style.display = 'none';
    pastMealSection.style.display = 'none';
    aboutUsSection.style.display = 'none';
    // top nav
    attendSection.style.display = 'block';
    becomeSection.style.display = 'none';
    yourEventSection.style.display = 'none';
    postEventSection.style.display = 'none';
    // adds active class
    // side nav
    introNav.classList.remove('active');
    popChefNav.classList.remove('active');
    friNav.classList.remove('active');
    satNav.classList.remove('active');
    sunNav.classList.remove('active');
    pastMealNav.classList.remove('active');
    aboutUsNav.classList.remove('active');
    // top nav
    attendNav.classList.add('active');
    becomeNav.classList.remove('active');
    yourEventNav.classList.remove('active');
    postEventNav.classList.remove('active');
  };

  var becomeFunction = function() {
    // Displays content
    // side nav
    introSection.style.display = 'none';
    popChefSection.style.display = 'none';
    friSection.style.display = 'none';
    satSection.style.display = 'none';
    sunSection.style.display = 'none';
    pastMealSection.style.display = 'none';
    aboutUsSection.style.display = 'none';
    // top nav
    attendSection.style.display = 'none';
    becomeSection.style.display = 'block';
    yourEventSection.style.display = 'none';
    postEventSection.style.display = 'none';
    // adds active class
    // side nav
    introNav.classList.remove('active');
    popChefNav.classList.remove('active');
    friNav.classList.remove('active');
    satNav.classList.remove('active');
    sunNav.classList.remove('active');
    pastMealNav.classList.remove('active');
    aboutUsNav.classList.remove('active');
    // top nav
    attendNav.classList.remove('active');
    becomeNav.classList.add('active');
    yourEventNav.classList.remove('active');
    postEventNav.classList.remove('active');
  };

  var pastMealFunction = function() {
    // Displays content
    // side nav
    introSection.style.display = 'none';
    popChefSection.style.display = 'none';
    friSection.style.display = 'none';
    satSection.style.display = 'none';
    sunSection.style.display = 'none';
    pastMealSection.style.display = 'block';
    aboutUsSection.style.display = 'none';
    // top nav
    attendSection.style.display = 'none';
    becomeSection.style.display = 'none';
    yourEventSection.style.display = 'none';
    postEventSection.style.display = 'none';
    // adds active class
    // side nav
    introNav.classList.remove('active');
    popChefNav.classList.remove('active');
    friNav.classList.remove('active');
    satNav.classList.remove('active');
    sunNav.classList.remove('active');
    pastMealNav.classList.add('active');
    aboutUsNav.classList.remove('active');
    // top nav
    attendNav.classList.remove('active');
    becomeNav.classList.remove('active');
    yourEventNav.classList.remove('active');
    postEventNav.classList.remove('active');
  };

var aboutUsFunction = function() {
    // Displays content
    // side nav
    introSection.style.display = 'none';
    popChefSection.style.display = 'none';
    friSection.style.display = 'none';
    satSection.style.display = 'none';
    sunSection.style.display = 'none';
    pastMealSection.style.display = 'none';
    aboutUsSection.style.display = 'block';
    // top nav
    attendSection.style.display = 'none';
    becomeSection.style.display = 'none';
    yourEventSection.style.display = 'none';
    postEventSection.style.display = 'none';
    // adds active class
    // side nav
    introNav.classList.remove('active');
    popChefNav.classList.remove('active');
    friNav.classList.remove('active');
    satNav.classList.remove('active');
    sunNav.classList.remove('active');
    pastMealNav.classList.remove('active');
    aboutUsNav.classList.add('active');
    // top nav
    attendNav.classList.remove('active');
    becomeNav.classList.remove('active');
    yourEventNav.classList.remove('active');
    postEventNav.classList.remove('active');
  };

var yourEventFunction = function() {
  // Displays content
  // side nav
  introSection.style.display = 'none';
  popChefSection.style.display = 'none';
  friSection.style.display = 'none';
  satSection.style.display = 'none';
  sunSection.style.display = 'none';
  pastMealSection.style.display = 'none';
  aboutUsSection.style.display = 'none';
  // top nav
  attendSection.style.display = 'none';
  becomeSection.style.display = 'none';
  yourEventSection.style.display = 'block';
  postEventSection.style.display = 'none';
  // adds active class
  // side nav
  introNav.classList.remove('active');
  popChefNav.classList.remove('active');
  friNav.classList.remove('active');
  satNav.classList.remove('active');
  sunNav.classList.remove('active');
  pastMealNav.classList.remove('active');
  aboutUsNav.classList.remove('active');
  // top nav
  attendNav.classList.remove('active');
  becomeNav.classList.remove('active');
  yourEventNav.classList.add('active');
  postEventNav.classList.remove('active');
};

var postEventFunction = function() {
  // Displays content
  // side nav
  console.log("printed");
  introSection.style.display = 'none';
  popChefSection.style.display = 'none';
  friSection.style.display = 'none';
  satSection.style.display = 'none';
  sunSection.style.display = 'none';
  pastMealSection.style.display = 'none';
  aboutUsSection.style.display = 'none';
  // top nav
  attendSection.style.display = 'none';
  becomeSection.style.display = 'none';
  yourEventSection.style.display = 'none';
  postEventSection.style.display = 'block';
  // adds active class
  // side nav
  introNav.classList.remove('active');
  popChefNav.classList.remove('active');
  friNav.classList.remove('active');
  satNav.classList.remove('active');
  sunNav.classList.remove('active');
  pastMealNav.classList.remove('active');
  aboutUsNav.classList.remove('active');
  // top nav
  attendNav.classList.remove('active');
  becomeNav.classList.remove('active');
  yourEventNav.classList.remove('active');
  postEventNav.classList.add('active');
};

/*-----------------


Controller


--------------------*/


  var uploadFormFucntion = function(e) {
    // upload file on click
    e.preventDefault();
    uploadFucntion(uploadFile);


    uploadFile.value = null;    

  }
var uploadFucntion = function(evt){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      //must be logged in to submit
      var storageRef = firebase.storage().ref();
     // evt.stopPropagation();
     // evt.preventDefault();
      var file = evt.files[0];

      var metadata = {
        'contentType': file.type
      };

      // Push to child path.
      var uploadTask = storageRef.child('applications/' + file.name).put(file, metadata);
            // Listen for errors and completion of the upload.
      // [START oncomplete]
      uploadTask.on('state_changed', null, function(error) {
        // [START onfailure]
        console.error('Upload failed:', error);
        // [END onfailure]
      }, function() {

        // [START_EXCLUDE]
        alert("Congratulations, your application is complete!")
        //document.getElementById('linkbox').innerHTML = '<a href="' +  url + '">Click For File</a>';
        // [END_EXCLUDE]
      });
      // [END oncomplete]
    }
      else{
        //if haven't logged in
        alert("Please log in first");
      }
    });
}

window.addEventListener('load', function() {
  // need
  $(function () {
  $('[data-toggle="popover"]').popover()
})
  // on-click navigation side
  introNav.onclick = introFunction;
  popChefNav.onclick = popChefFunction;
  friNav.onclick = friFunction;
  satNav.onclick = satFunction;
  sunNav.onclick = sunFunction;
  pastMealNav.onclick = pastMealFunction;
  aboutUsNav.onclick = aboutUsFunction;
// top
  attendNav.onclick = attendFunction;
  becomeNav.onclick = becomeFunction;
  yourEventNav.onclick = yourEventFunction;
  postEventNav.onclick = postEventFunction;
  // on-click upload app
  uploadAppForm.onsubmit = uploadFormFucntion; 


  firebase.auth().onAuthStateChanged(function(user) {
    // if(user)
    startDatabaseQueries();
    if (user) {
      attendNav.style.display = "block";
      becomeNav.style.display = "block";
      yourEventNav.style.display = "none";
      postEventNav.style.display = "none";

      var name = user.displayName;
      var message = "Log Out, "+ name;
      statusNav.innerHTML = message;
      statusNav.addEventListener("click", signOut);
      statusNav.removeEventListener("click", signInFacebook);
      
      firebase.database().ref('users/').on('value', function(snapshot) {
        var uidArray = Object.keys(snapshot.val());
        // if new user
        //uidExist is also an array
        var uidIndex = uidArray.indexOf(user.uid);
        // check if exists
        if(uidIndex == -1){
          writeUserData(user.uid, user.displayName, user.email, user.photoURL);
        }
        /* At this point uid cannot be undefined
        because the function will be called again on value change
        */
        //if chef
        var userId = user.uid;
        var isChef = snapshot.val().userId;
        var isChef = snapshot.val()[userId].isChef;
       if(isChef == true){
        becomeNav.style.display = "none";
        yourEventNav.style.display = "block";
        postEventNav.style.display = "block";        
      }        
      });
    } else {
      // No user is signed in.
      attendNav.style.display = "none";
      becomeNav.style.display = "none";
      yourEventNav.style.display = "none";
      postEventNav.style.display = "none";

      statusNav.innerHTML = "Log In";
      statusNav.addEventListener("click", signInFacebook);
      statusNav.removeEventListener("click", signOut);
    }
    }); 
  // checks for upload
 //document.getElementById('upload').addEventListener('change', uploadApp);



});

function signInFacebook(){
  // Used in onload
  //assume user Not signed in
       // [START createprovider]
      var provider = new firebase.auth.FacebookAuthProvider();
      // [END createprovider]
      // [START addscopes]
      provider.addScope('user_birthday');
      // [END addscopes]
      // [START signin]
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        window.location.assign("index.html");
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // [START_EXCLUDE]
        if (errorCode === 'auth/account-exists-with-different-credential') {
          alert('You have already signed up with a different auth provider for that email.');
          // If you are using multiple auth providers on your app you should handle linking
          // the user's accounts here.
        } else {
          console.error(error);
        }
        // [END_EXCLUDE]
      });
      // [END signin]
}

function signOut(){
  //assume signed in
        // [START signout]
      firebase.auth().signOut();
      // [END signout]
}

// Become a chef functions
function downloadApp(){
  var storageRef = firebase.storage().ref();
  var form = storageRef.child('applications/DAChefApp.docx');
  form.getDownloadURL().then(function(url) {
  window.open(url); 
  });
}

// check if signed up as chef
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

function createPostElementSmall(title, description, day, dateTime, location, maxSeat, image){
  var html='<div class="col-xs-6 col-sm-3 placeholder">' +
            '<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class=" imageHolder img-responsive" alt="Generic placeholder thumbnail">'+
            '<h4 class="titleHolder">title</h4>' +
                           ' <!--  Button 2 --> ' +
              '<!-- Button trigger modal -->' +
             ' <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#cheeseModal">' +
              '  Info ' + 
              '</button>' +
              '<!-- Modal -->' +
              '<div class="modal fade" id="cheeseModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                '<div class="modal-dialog" role="document">'+
                  '<div class="modal-content">'+
                    '<div class="modal-header">'+
                      '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                      '<h4 class="titleHolder modal-title" id="myModalLabel">title</h4>'+
                    '</div>'+
                    '<div class="modal-body">'+
                        '<img class="imageHolder" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="300" height="200" alt="Generic placeholder thumbnail">'+
                        '<h4 align="left">Description:</h4>'+
                        '<p class="descriptionHolder">holder</p>'+
                        '<h4 align="left">Day:</h4>'+
                        '<p class="dayHolder">holder</p>'+
                        '<h4 align="left">Time:</h4>'+
                        '<p class="dateTimeHolder">holder</p>'+
                        '<h4 align="left">Location:</h4>'+
                        '<p class="locationHolder">holder</p>'+
                        '<h4 align="left">Maximum Occupancy:</h4>'+
                        '<p class="maxSeatHolder">holder</p>'+
                    '</div>'+
                    '<div class="modal-footer">'+
                      '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
                      '<button type="button" class="btn btn-primary">Pay Now</button>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
          '</div>';
  // Create the DOM element from the HTML.
  var div = document.createElement('div');
  div.innerHTML = html;
  var postElement = div.firstChild;
  // Set values.
  postElement.getElementsByClassName('titleHolder')[0].innerText = title;
  postElement.getElementsByClassName('titleHolder')[1].innerText = title;
  //postElement.getElementsByClassName('imageHolder')[0].setAttribute("src", image);
  //postElement.getElementsByClassName('imageHolder')[1].setAttribute("src", image);
  postElement.getElementsByClassName('descriptionHolder')[0].innerText = description;
  postElement.getElementsByClassName('dayHolder')[0].innerText = day;
  postElement.getElementsByClassName('dateTimeHolder')[0].innerText = dateTime;
  postElement.getElementsByClassName('locationHolder')[0].innerText = location;
  postElement.getElementsByClassName('maxSeatHolder')[0].innerText = maxseat;

}


function writeNewPost( username, uid, title, description, day, dateTime, location, maxSeat){
  // A post entry.
  var postData = {
    username: username,
    uid: uid,
    body: body,
    title: title,
    description: description,
    day: day,
    dateTime: dateTime, 
    location: location, 
    maxseat: maxSeat,
    going: 0,
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/history/' + newPostKey] = postData;
  updates['/attendance/' + uid + '/' + newPostKey] = postData;
  updates['/yourEvent/' + uid + '/' + newPostKey] = postData;
  return firebase.database().ref().update(updates);
}




// Post Events
var postForm = document.getElementById('postForm');
var titleInput = document.getElementById('titleInput');
var descriptionInput = document.getElementById('descriptionInput');
// Day will be included using jquery
var dateTimeInput = document.getElementById('dateTimeInput');
var locationInput = document.getElementById('locationInput');
var maxSeatInput = document.getElementById('maxSeatInput');



// image will be included later
postForm.onsubmit = function(e) {
  e.preventDefault();
  //get value
  var titleValue = titleInput.value;
  var descriptionValue = descriptionInput.value;
  // jquery radio buttons
  var dayValue = $('input[name="day"]:checked').val();
  var dateTimeValue = dateTimeInput.value;
  var locationValue = locationInput.value;
  var maxSeatValue = maxSeatInput.value;
  //reset form
  postForm.reset();
  writeNewPost( firebase.auth().currentUser.displayName, firebase.auth().currentUser.uid, titleValue, descriptionValue, dayValue, dateTimeValue, locationValue, maxSeatValue).then(function() {
        yourEventNav.click();
      });
};


/**
 * Starts listening for new posts and populates posts lists.
 */
 var historySection = document.getElementById('pastMealSection');
 var yourEventSection = document.getElementById('yourEventSection');

function startDatabaseQueries() {

  var myUserId = firebase.auth().currentUser.uid;
  var historyRef = firebase.database().ref('history').limitToLast(100);
  var yourEventRef = firebase.database().ref('yourEvent/' + myUserId);

  var fetchPostsSmall = function(postsRef, sectionElement) {
    postsRef.on('child_added', function(data) {
      var author = data.val().author || 'Anonymous';
      var containerElement = sectionElement.getElementsByClassName('contentContainer')[0];
      containerElement.insertBefore(
          createPostElement(data.key, data.val().title, data.val().body, author, data.val().uid, data.val().authorPic),
          containerElement.firstChild);
    });
  };

  fetchPosts(historyRef, historySection);
  fetchPosts(yourEventRef, yourEventSection);
}


