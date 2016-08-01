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
    if (user) {
      startDatabaseQueries();
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
  //creates Distinct IDs, pray to God id1 doesn't equal id2
  var id1 = String(Math.floor((Math.random() * 100000) + 1));
  var id2 = String(Math.floor((Math.random() * 100000) + 1));

  var html='<div class="col-xs-6 col-sm-3 placeholder">' +
            '<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class=" imageHolder img-responsive" alt="Generic placeholder thumbnail">'+
            '<h4 class="titleHolder">title</h4>' +
                           ' <!--  Button 2 --> ' +
              '<!-- Button trigger modal -->' +
             ' <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#'+id1+'">' +
              '  Info ' + 
              '</button>' +
              '<!-- Modal -->' +
              '<div class="modal fade" id="'+id1+'" tabindex="-1" role="dialog" aria-labelledby="'+id2+'">' +
                '<div class="modal-dialog" role="document">'+
                  '<div class="modal-content">'+
                    '<div class="modal-header">'+
                      '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                      '<h4 class="titleHolder modal-title" id="'+id2+'">title</h4>'+
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
  postElement.getElementsByClassName('maxSeatHolder')[0].innerText = maxSeat;
  return postElement;
}

  function createPostElementBig(postId, title, description, day, dateTime, location, maxSeat, image){
  var uid = firebase.auth().currentUser.uid; 
    //creates Distinct IDs, pray to God id1 doesn't equal id2
  var id1 = String(Math.floor((Math.random() * 100000) + 1));
  var id2 = String(Math.floor((Math.random() * 100000) + 1));
  var id3 = String(Math.floor((Math.random() * 100000) + 1));
  var id4 = String(Math.floor((Math.random() * 100000) + 1));
  var popNum = String(Math.floor((Math.random() * 100000) + 1));
    $(function () {
    
  $('[data-toggle="'+popNum+'"]').popover()
})      
  var html='<div>'+
          '<div class="col-md-8">'+
            '<div class="thumbnail">'+
              '<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="300" height="200" alt="Generic placeholder thumbnail">'+
              '<div class="caption">'+
                '<h3 class="titleHolder">titleHolder</h3>'+
                '<h4 align="left">Description:</h4>'+
                '<p class="descriptionHolder"> descriptionHolder</p>'+
                '<h4 align="left">Day:</h4>'+
                '<p class="dayHolder">dayHolder </p>'+
                '<h4 align="left">Time:</h4>'+
                '<p class="dateTimeHolder"> dateTimeHolder</p>'+
                '<h4 align="left">Location:</h4>'+
                '<p class="locationHolder"> locationHolder</p>'+
                '<h4 align="left">Maximum Occupancy:</h4>'+
                '<p class="maxSeatHolder">maxSeatHolder</p>'+

                '<!--  Button 1 -->'+
                '<button type="button" class="btn btn-primary btn-lg" data-toggle="'+popNum+'" title="Facebook Names" data-placement="left" data-content="Win Bear, John Hanks, Job Jones">People Going</button>'+

              ' <!--  Button 2 --> ' +
              '<!-- Button trigger modal -->' +
             ' <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#'+id1+'">' +
              '  Going ' + 
              '</button>' +
              '<!-- Modal -->' +
              '<div class="modal fade" id="'+id1+'" tabindex="-1" role="dialog" aria-labelledby="'+id2+'">' +
                '<div class="modal-dialog" role="document">'+
                  '<div class="modal-content">'+
                    '<div class="modal-header">'+
                      '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                      '<h4 class="titleHolder modal-title" id="'+id2+'">title</h4>'+
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

              '<!--  Buttons 3 -->'+
              '<button class="btn btn-primary btn-lg" type="button" data-toggle="collapse" data-target="#'+id3+'" aria-expanded="false" aria-controls="collapseExample">'+
                  'Comments'+
                '</button>'+

                '<div class="collapse" id="'+id3+'">'+
                  '<!-- spacer -->'+
                  '<p></p>'+
                  '<div class="comments-container">'+
                    '<form class="addCommentForm commentLooks" action="#">'+
                      '<div class="input-group">'+
                        '<span class="input-group-addon" id="'+id4+'">'+
                          '<span class="glyphicon glyphicon-user" aria-hidden="true"></span>'+
                          'Win Bear'+
                        '</span>'+
                        '<input type="text" class="commentInput form-control" aria-describedby="'+id4+'" placeholder="comment...">'+
                      '</div>'+
                    '</form>'+
                    '<!-- spacer -->'+
                    '<p></p>'+
                '</div>'+
              '<!-- spacer -->'+
              '<p></p>'+
'<!-- Comment container [Caption] -->'+
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
  postElement.getElementsByClassName('maxSeatHolder')[0].innerText = maxSeat;

  postElement.getElementsByClassName('descriptionHolder')[1].innerText = description;
  postElement.getElementsByClassName('dayHolder')[1].innerText = day;
  postElement.getElementsByClassName('dateTimeHolder')[1].innerText = dateTime;
  postElement.getElementsByClassName('locationHolder')[1].innerText = location;
  postElement.getElementsByClassName('maxSeatHolder')[1].innerText = maxSeat;
  // comments
  var addCommentForm = postElement.getElementsByClassName('addCommentForm')[0];
  var commentInput = postElement.getElementsByClassName('commentInput')[0];
  // Create new comment.
  addCommentForm.onsubmit = function(e) {
    e.preventDefault();
    createNewComment(postId, firebase.auth().currentUser.displayName, uid, commentInput.value);
    commentInput.value = '';
    //commentInput.parentElement.MaterialTextfield.boundUpdateClassesHandler();
  };

  // Listen for comments.
  // [START child_event_listener_recycler]
  var commentsRef = firebase.database().ref('post-comments/' + postId);
  commentsRef.on('child_added', function(data) {
    addCommentElement(postElement, data.key, data.val().text, data.val().author);
  });
    commentsRef.on('child_changed', function(data) {
    setCommentValues(postElement, data.key, data.val().text, data.val().author);
  });

  commentsRef.on('child_removed', function(data) {
    deleteComment(postElement, data.key);
  });
  // [END child_event_listener_recycler]
  return postElement;
      
  }

/**
 * Writes a new comment for the given post.
 */
function createNewComment(postId, username, uid, text) {
  firebase.database().ref('post-comments/' + postId).push({
    text: text,
    author: username,
    uid: uid
  });
}

/**
 * Creates a comment element and adds it to the given postElement.
 */
function addCommentElement(postElement, id, text, author) {
  var comment = document.createElement('div');
  comment.classList.add('comment-' + id);
  comment.classList.add('panel');
  comment.classList.add('panel-primary');
  comment.innerHTML = '<div class="username panel-heading" align="left"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> Win Bear</div>'+
                        '<div class="panel-body">'+
                          '<p align="left" class="comment">Looks very nice</p>'+
                        '</div>';
  comment.getElementsByClassName('comment')[0].innerText = text;
  comment.getElementsByClassName('username')[0].innerText = author || 'Anonymous';
                   

  var commentsContainer = postElement.getElementsByClassName('comments-container')[0];
  commentsContainer.appendChild(comment);
}
/**
 * Sets the comment's values in the given postElement.
 */
function setCommentValues(postElement, id, text, author) {
  var comment = postElement.getElementsByClassName('comment-' + id)[0];
  comment.getElementsByClassName('comment')[0].innerText = text;
  comment.getElementsByClassName('username')[0].innerText = author;
}

/**
 * Deletes the comment of the given ID in the given postElement.
 */
function deleteComment(postElement, id) {
  var comment = postElement.getElementsByClassName('comment-' + id)[0];
  comment.parentElement.removeChild(comment);
}




function writeNewPost(username, uid, title, description, day, dateTime, location, maxSeat) {
  // A post entry.
  var postData = {
    username: username,
    uid: uid,
    title: title,
    description: description,
    day: day,
    dateTime: dateTime, 
    location: location, 
    maxseat: maxSeat,
    going: 0,
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('history').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/history/' + newPostKey] = postData;
  updates['/attendance/' + uid + '/' + newPostKey] = postData;
  updates['/yourEvent/' + uid + '/' + newPostKey] = postData;
  if(day =="friday"){
    updates['/friday/' + newPostKey] = postData;
  }
  if(day =="saturday"){
    updates['/saturday/' + newPostKey] = postData;
  }
  if(day =="sunday"){
    updates['/sunday/' + newPostKey] = postData;
  }

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
 var fridaySection = document.getElementById('friSection');
 var saturdaySection = document.getElementById('satSection');
 var sundaySection = document.getElementById('sunSection');


function startDatabaseQueries() {
  var myUserId = firebase.auth().currentUser.uid;
  var historyRef = firebase.database().ref('history').limitToLast(100);
  var yourEventRef = firebase.database().ref('yourEvent/' + myUserId);
  var fridayRef = firebase.database().ref('friday').limitToLast(100);
  var saturdayRef = firebase.database().ref('saturday').limitToLast(100);
  var sundayRef = firebase.database().ref('sunday').limitToLast(100);

  var fetchPostSmall = function(postsRef, sectionElement) {
    postsRef.on('child_added', function(data) {
      var author = data.val().author || 'Anonymous';

      var containerElement = sectionElement.getElementsByClassName('contentContainer')[0];
      containerElement.insertBefore(
          createPostElementSmall(data.val().title, data.val().description, data.val().day, data.val().dateTime, data.val().location, data.val().maxseat, data.val().image),
          containerElement.firstChild);

       // createPostElementSmall(title, description, day, dateTime, location, maxSeat, image)
    });
  };

  var fetchPostBig = function(postsRef, sectionElement) {
  postsRef.on('child_added', function(data) {
    
    var author = data.val().author || 'Anonymous';
    var containerElement = sectionElement.getElementsByClassName('contentContainer')[0];
    containerElement.insertBefore(
        createPostElementBig(data.key,data.val().title, data.val().description, data.val().day, data.val().dateTime, data.val().location, data.val().maxseat, data.val().image),
        containerElement.firstChild);

     
  });
  };


  fetchPostSmall(historyRef, historySection);
  fetchPostSmall(yourEventRef, yourEventSection);
  fetchPostBig(fridayRef,fridaySection);
  fetchPostBig(saturdayRef,saturdaySection);
  fetchPostBig(sundayRef,sundaySection);
}


