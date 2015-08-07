var moviesDictionary = {};
var genreSelection = '';

function fetchData() {
	
	//empty the cards container 
  $('#cards-container').html('');

  //grab the usr's genre selection
  var query = genreSelection;
  // console.log(query);

	var rawTemplate = $('#my-Movies-template').html();
	// console.log(rawTemplate);


	$.get('https://moviecards.firebaseio.com/movies.json', function(movies) {
		console.log(genreSelection);
		for (var i = 0; i < movies.length; i++) {
  		// console.log(movies[i]);
  		var currentMovie = movies[i];
  		// console.log(currentMovie);
  		var genre = currentMovie.genre;
  		// console.log(genre);

  		if (genre.includes(query) == true || genreSelection == 'All') {
      var stampedTemplate = Mustache.render(rawTemplate, currentMovie);
      $('#cards-container').append(stampedTemplate);
      } 
  	};

  	buildDictionary(movies);
  	bindEventListeners();

  });
}

function bindEventListeners() {
	//whenever a card is clicked, show the lightbox
	// console.log($('.card'));
	$('.card').click(function(e) {
		console.log(e);
		// e.target is the <div> that got clicked. The ID of that div holds a key
    // we can use to "look up" movie info in our moviesDictionary. Tricky.
		var targetId = e.target.id;
		console.log(targetId);
		var info = moviesDictionary[targetId];
		// console.log(info);
		// info.cast = info.cast.join(', ');
		var rawTemplate = $('#my-lightbox-template').html();
		// console.log(rawTemplate);
		var stampedTemplate = Mustache.render(rawTemplate, info);
		console.log(stampedTemplate);
		$('#cards-lightbox').html(stampedTemplate);
		$('#cards-lightbox').fadeIn();
		$('#mask').fadeIn();
	})

	$('#mask').click(function(){
		$('#cards-lightbox').fadeOut();
		$('#mask').fadeOut();
	})
}

function buildDictionary(movies) {
	for (var i = 0; i < movies.length; i++) {
		var currentMovie = movies[i];
		moviesDictionary[currentMovie.id] = currentMovie;
	}
  // console.log(moviesDictionary);
}

function filterDictionaryByGenre(filter) {
	var moviesFilteredDictionary = []
	for (var i = 0; i < movies.length; i++) { 

		if (moviesDictionary[i].genre === filter) {
			// moviesFilteredDictionary[???] = moviesDictionary[prop]; 
			//how do i append stuff to an array
		} 
	}

	return moviesFilteredDictionary;
	
}

// fetchData();

function init() {
  $('#float-right').click(function(e) {
    // console.log(e.target.innerText);
    genreSelection = e.target.innerText;
    // console.log(genreSelection);
    //they click a genre button
    if (e.target.innerText == 'Comedy') {
      fetchData();
    } else if (e.target.innerText == 'Drama') {
      fetchData();
    } else if (e.target.innerText == 'Action') {
      fetchData();
    } else if (e.target.innerText == 'Family') {
      fetchData();
    } else if (e.target.innerText == 'All') {
      fetchData();
    } 
  });
}

init();
fetchData();
