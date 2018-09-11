         
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD44-5xziGOFu8ItvupicDBYzg863Vx3hQ",
    authDomain: "art-bidding.firebaseapp.com",
    databaseURL: "https://art-bidding.firebaseio.com",
    projectId: "art-bidding",
    storageBucket: "art-bidding.appspot.com",
    messagingSenderId: "501306330125"
  };
  firebase.initializeApp(config);

  var database = firebase.database();


  $('#upload_widget_opener').cloudinary_upload_widget(
    { cloud_name: 'dujbxdubf', upload_preset: 'zwrhaeyd', 
      cropping: 'server', folder: 'user_photos' },
    function(error, result) { console.log(error, result) });

$("#current-bid").on("click", function(event){
  event.preventDefault();

  var bidPrice = $("#bid-input").val().trim();

  var newBid = {
    bid:bidPrice
  };

  database.ref().push(newBid);

  console.log(newBid.bidPrice);

  $("#bid-input").val("");

});

database.ref().on("child_added", function(childSnapshot){
  console.log(childSnapshot.val());

  var bidPrice = childSnapshot.val().bid;

  console.log(bidPrice);

  var newRow = $("<tr>").append(
      $("<td>").text(bidPrice),
    );

    $('#bid-table > tbody').append(newRow);

    //Calculating the times of the Flying Cars

    var cFrequency = 5;

    //Time is 12:00 AM
    var firstTime = "12:00";

    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);
    
});
