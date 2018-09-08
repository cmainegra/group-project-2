         
console.log("hello");  

  $('#upload_widget_opener').cloudinary_upload_widget(
    { cloud_name: 'dujbxdubf', upload_preset: 'zwrhaeyd', 
      cropping: 'server', folder: 'user_photos' },
    function(error, result) { console.log(error, result) });

var img_url = $("#web-url").val().trim();