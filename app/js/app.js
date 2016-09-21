$(document).ready(function(){
  getBoots();
  nameListener();
});


// $(element).on('click', function () { /* do stuff */ });

// SO CLOSE!!
var nameListener = function() {
  $('.boots-placeholder').on('click', 'a', function(event) {
    event.preventDefault()
    var id = parseInt(this.id);
    getBadges(id);
  })
}

var getBoots = function() {
  var request = $.ajax({
    url: 'http://localhost:3000/boots',
    type: 'GET',
    crossDomain : true
  });
  request.done(function(response) {
    renderHandlebarsBoots(response);
  });
  request.fail(function(response) {
  });
}

var getBadges = function(id) {
  console.log("in getBadges")
  console.log(id)
  var request = $.ajax({
    url: 'http://localhost:3000/boots/' + id,
    type: 'GET'
  });
  request.done(function(response) {
    renderHandlebarsBadges(response);
    console.log(response)
    console.log("handlebars.js")
  });
  request.fail(function(response) {
    console.log("AJAX failure.")
    console.log("getBadges")
  });
}

var renderHandlebarsBoots = function(bootObjects) {
  console.log("renderHandlebarsBoots working")
  console.log(bootObjects)
  // Grab the template script
  var theTemplateScript = $("#boots-template").html();
  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);
  // Define our data object
  var boots = []
  for (var i = 0; i < bootObjects.length; i++){
    var bootObjectsInTransit = {
      "id": bootObjects[i].id,
      "name": bootObjects[i].name
    };
    boots.push(bootObjectsInTransit);
    console.log(bootObjectsInTransit.name)
  };
  console.log(boots)
  var wrapper = {objects: boots};
  console.log(wrapper)
//   // Pass our data to the template
var theCompiledHtml = theTemplate(wrapper);
//   // Add the compiled html to the page
$('.boots-placeholder').html(theCompiledHtml);
  console.log(theCompiledHtml)
nameListener();
};



// var renderHandlebarsBadges = function() {
//   $(function(bootObjects) {
//     console.log("renderHandlebarsBadges working")
//   // Grab the template script
//   var theTemplateScript = $("#badges-template").html();
//   // Compile the template
//   var theTemplate = Handlebars.compile(theTemplateScript);
//   // Define our data object
//   var badges = []
//   var bootObjectsInTransit =
//   {
//     boots: [
//     {id: "1", name: "Seba", badges: [ { badge_name: "Most Chilean", vote_count: "30", person_id: "1"},] } ,
//     {id: "2", name: "Max", badges: [ { badge_name: "Most Likely to Sound an Airhorn", vote_count: "34", person_id: "2"},] } ,
//     {id: "3", name: "Hunter", badges: [ { badge_name: "Most Sardonic", vote_count: "4", person_id: "3"}, ] }
//     ]
//   };
//   // Pass our data to the template
//   var theCompiledHtml = theTemplate(bootObjectsInTransit);
//   // Add the compiled html to the page
//   $('.boots-placeholder').html(theCompiledHtml);
// });
// }


