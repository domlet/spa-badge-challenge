$(document).ready(function(){
  getBoots();
  nameListener();
  voteUp();
});

var nameListener = function() {
  $('.boots-placeholder').on('click', 'a', function(event) {
    event.preventDefault()
    $('.boots-placeholder').hide();
    var id = parseInt(this.id);
    getBadges(id);
  })
}

var homeListener = function() {
  $('#home').on('click', function(event) {
    event.preventDefault()
    $('.badges-placeholder').hide();
    $('.boots-placeholder').show();
  })
}

var voteUp = function() {
  $('.container').on('click', '.vote-up', function(event) {
    event.preventDefault()
    var badge_id = ($(this).attr('id'))
    console.log(badge_id)
    var request = $.ajax({
    url: 'http://localhost:3000/badges/' + badge_id,
    data: {'vote_type': 'up'},
    type: 'PUT',
    crossDomain : true
  });
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
  var request = $.ajax({
    url: 'http://localhost:3000/boots/' + id,
    type: 'GET'
  });
  request.done(function(response) {
    renderHandlebarsBadges(response);
    console.log(response)
  });
  request.fail(function(response) {
    console.log("AJAX failure.")
  });
}

var renderHandlebarsBoots = function(bootObjects) {
  console.log("renderHandlebarsBoots working")
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
  };
  var wrapper = {objects: boots};
//   // Pass our data to the template
var theCompiledHtml = theTemplate(wrapper);
//   // Add the compiled html to the page
$('.boots-placeholder').html(theCompiledHtml);
nameListener();
};

var renderHandlebarsBadges = function(badgeObjects) {
  console.log("renderHandlebarsBadges working")
  console.log(badgeObjects)
  // Grab the template script
  var theTemplateScript = $("#badges-template").html();
  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);
  // Define our data object
  var badges = []
  for (var i = 0; i < badgeObjects.length; i++){
    var badgeObjectsInTransit = {
      "id": badgeObjects[i].id,
      "badge_name": badgeObjects[i].badge_name,
      "vote_count": badgeObjects[i].vote_count
    };
    badges.push(badgeObjectsInTransit);
    console.log(badgeObjectsInTransit.badge_name)
    console.log(badgeObjectsInTransit.vote_count)
  };
  console.log(badges)
  var wrapper = {objects: badges};
  console.log(wrapper)
//   // Pass our data to the template
var theCompiledHtml = theTemplate(wrapper);
//   // Add the compiled html to the page
$('.badges-placeholder').html(theCompiledHtml);
  console.log(theCompiledHtml)
nameListener();
};

