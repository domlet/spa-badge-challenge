$(document).ready(function(){
  getBoots();
  getBadges();
  console.log("js working")
});

var getBoots = function() {
  console.log("getBoots working")
  var request = $.ajax({
    url: 'http://localhost:3000/boots',
    type: 'GET'
  });
  request.done(function(response) {
    console.log(response)
    renderHandlebars(JSON.parse(response));
  });
  request.fail(function(response) {
    console.log("Sad face, AJAX failure.")
    console.log(response)
  });
}

var getBadges = function() {
  console.log("getBadges working")
  var request = $.ajax({
    url: '/boots/:id',
    type: 'GET'
  });
  request.done(function(response) {
    renderHandlebars(JSON.parse(response));
  });
  request.fail(function(response) {
    console.log("Sad face, AJAX failure.")
    console.log(response)
  });
}

var renderHandlebars = $(function(bootObjects) {
  console.log("renderHandlebars working")
  // Grab the template script
  var theTemplateScript = $("#boots-template").html();
  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);
  // Define our data object
  var boots = []
  var context =
  {
    boots: [
      {id: "1", name: "Seba", badges: [ { badge_name: "Most Chilean", vote_count: "30", person_id: "1"},] } ,
      {id: "2", name: "Max", badges: [ { badge_name: "Most Likely to Sound an Airhorn", vote_count: "34", person_id: "2"},] } ,
      {id: "3", name: "Hunter", badges: [ { badge_name: "Most Sardonic", vote_count: "4", person_id: "3"}, ] }
      ]
    };
  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);
  // Add the compiled html to the page
  $('.boots-placeholder').html(theCompiledHtml);
});



