var config = {
  apiKey: "AIzaSyCVtrj9jB44_VqXfkCwsExE9e_H_V4Gv4M",
  authDomain: "flying-car-bbcab.firebaseapp.com",
  databaseURL: "https://flying-car-bbcab.firebaseio.com",
  projectId: "flying-car-bbcab",
  storageBucket: "",
  messagingSenderId: "214791519023"
};

firebase.initializeApp(config);

var database = firebase.database();


$("#add-car-button").on("click", function(event){
  event.preventDefault();



  var carName = $("#carName-input").val().trim();
  var carDestination = $("#destination-input").val().trim();
  var carFreq = $("#frequency-input").val().trim();

var newCarTime = {
    name: carName,
    destination: carDestination,
    frequency: carFreq,

};

database.ref().push(newCarTime);


  alert("Bid Recieved");

  $("#carName-input").val("");
  $("#destination-input").val("");
  $("#frequency-input").val("");
  $("#arrival-input").val("");

});

database.ref().on("child_added", function(childSnapshot){


    var carName = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var freq = childSnapshot.val().frequency;

 

    var newRow = $("<tr>").append(
        $("<td>").text(carName),
        $("<td>").text(destination),
        $("<td>").text(freq),
      );



    $('#car-table > tbody').append(newRow);

    
    var cFrequency = 5;

    //Time is 12:00 AM
    var firstTime = "12:00";

    
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");


    var currentTime = moment();
  
    
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    

    // Time apart (remainder)
    var cRemainder = diffTime % cFrequency;
   

     // Minute Until Train
     var carAway = cFrequency - cRemainder;
    
    
});

    
