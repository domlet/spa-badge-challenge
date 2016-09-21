$(document).ready(function(){
  getBoots();
  nameListener();
  console.log("js working")
});


// $(element).on('click', function () { /* do stuff */ });

// SO CLOSE!!
var nameListener = function() {
  console.log("hi");
  $('.boots-placeholder').on('click', 'a', function(event) {
    event.preventDefault()
    var id = parseInt(this.id);
    getBadges(id);
    console.log(id);
    console.log(this)

  })
}

var getBoots = function() {
  console.log("getBoots working")
  var request = $.ajax({
    url: 'http://localhost:3000/boots',
    type: 'GET',
    crossDomain : true
  });
  request.done(function(response) {
    console.log("in getBoots")
    console.log(response)
    renderHandlebarsBoots(response);
  });
  request.fail(function(response) {
    console.log("AJAX failure.")
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
      "name": bootObjects[i].name,
      "badges": bootObjects[i].badges
    };
    boots.push(bootObjectsInTransit);
  };
  var wrapper = {objects: boots};
  var theCompiledHtml = theTemplate(wrapper);
  $('.boots-placeholder').html(theCompiledHtml);
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


