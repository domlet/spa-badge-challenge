$.ready(function(){
  getBoots();
  getBadges();
});

var getBoots = function() {
  var request = $.ajax({
    url: '/boots',
    type: 'GET'
  });
  request.done(function(response) {
    renderHandlebars(JSON.parse(response));
  });
  request.fail(function(response) {
    console.log("Sad face, AJAX failure.")
  });
}

var getBadges = function() {
  var request = $.ajax({
    url: '/boots/:id',
    type: 'GET'
  });
  request.done(function(response) {
    renderHandlebars(JSON.parse(response));
  });
  request.fail(function(response) {
    console.log("Sad face, AJAX failure.")
  });
}

var renderHandlebars = $(function(bootObjects) {
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



