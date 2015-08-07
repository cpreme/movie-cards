
function renderArray() {
  var movie = ['1.jpg', 'George Clooney, Mark Wahlberg, Ice Cube', "The Gulf War is over, and three soldiers want to go home rich. Major Archie Gates retires in two weeks. Sergeant Troy Barlow is a new father. Chief Elgin is on a four-month paid vacation from Detroit. Saddam Hussein stole a great deal of gold from Kuwait, and these soldiers have no problem with stealing it from him. But on their way to collect their booty, they bear witness to the the disturbing results of the war effort. President Bush has encouraged Iraqi citizens to fight back against Saddam and pledged to support them, but when they rise up, they get NO American support, and they're getting slaughtered. As the soldiers realize the true situation in Iraq, they're confronted with their own humanity, and they're forced to rethink who they are and what they're doing."];
  // How would you call renderNewCard() and pass it an image, cast, and teaser
  // using the values of the "movie" array on line 3?
  renderNewCard(movie[0], movie[1], movie[2]);
}

function renderObject() {
  var movie = {
    image: '2.jpg',
    cast: 'George Clooney, Mark Wahlberg, Ice Cube',
    teaser: "The Gulf War is over, and three soldiers want to go home rich. Major Archie Gates retires in two weeks. Sergeant Troy Barlow is a new father. Chief Elgin is on a four-month paid vacation from Detroit. Saddam Hussein stole a great deal of gold from Kuwait, and these soldiers have no problem with stealing it from him. But on their way to collect their booty, they bear witness to the the disturbing results of the war effort. President Bush has encouraged Iraqi citizens to fight back against Saddam and pledged to support them, but when they rise up, they get NO American support, and they're getting slaughtered. As the soldiers realize the true situation in Iraq, they're confronted with their own humanity, and they're forced to rethink who they are and what they're doing." 
  }
  // How would you call renderNewCard() and pass it an image, cast, and teaser
  // using the values of the "movie" object on line 10?
  renderNewCard(movie.image, movie.cast, movie.teaser);
}

function renderObjectsFromArray() {
  var movies = [
    {
      image: 'insideout.jpeg',
      title: 'Inside Out',
      teaser: "Evolving from single-celled yellow organisms at the dawn of time, Minions live to serve, but find themselves working for a continual series of unsuccessful masters, from T. Rex to Napoleon. Without a master..."
    },

    {
      image: 'jurassicworld.jpeg',
      title: 'Jurassic World',
      teaser: "Located off the coast of Costa Rica, the Jurassic World luxury resort provides a habitat for an array of genetically engineered dinosaurs, including the vicious and intelligent Indominus rex... "
    },

    {
      image: 'magicmikexxl.jpeg',
      title: 'Magic Mike XXL',
      teaser: "It's been three years since Mike Lane's (Channing Tatum) retirement from stripping, but the former dancer misses the excitement and feeling of being on stage. Most of all, though..."
    }
  ];

  // How would you call renderNewCard() and pass it an image, cast, and teaser
  // using the values of the "movies" array on line 21?
  // This one isn't straightforward. You have to write a for loop to loop through the movies array.
  // Inside the loop, movies[i] references an object! Hint: Try to console.log out the
  // value of movies[i].image while you're in the loop. Then consider how you'd do the
  // same for cast and teaser, then pass these values into renderNewCard(). We'll do this
  // together in class but give it a shot!
  for (var i = 0; i < movies.length; i++) {
    // console.log(movies[i].image, movies[i].title, movies[i].teaser);
  renderNewCard(movies[i].image, movies[i].title, movies[i].teaser);
  };
}

function renderObjectOfObjects() {
  var movies = {
    'threekings': {
      image: '1.jpg',
      cast: 'George Clooney, Mark Wahlberg, Ice Cube',
      teaser: "The Gulf War is over, and three soldiers want to go home rich. Major Archie Gates retires in two weeks. Sergeant Troy Barlow is a new father. Chief Elgin is on a four-month paid vacation from Detroit. Saddam Hussein stole a great deal of gold from Kuwait, and these soldiers have no problem with stealing it from him. But on their way to collect their booty, they bear witness to the the disturbing results of the war effort. President Bush has encouraged Iraqi citizens to fight back against Saddam and pledged to support them, but when they rise up, they get NO American support, and they're getting slaughtered. As the soldiers realize the true situation in Iraq, they're confronted with their own humanity, and they're forced to rethink who they are and what they're doing."      
    },

    'transformers': {
      image: '2.jpg',
      cast: 'Mark Wahlberg, Jack Reynor, Nicola Peltz',
      teaser: "Transformers: Age of Extinction begins after an epic battle left a great city torn, but with the world saved. As humanity picks up the pieces, a shadowy group reveals itself in an attempt to control the direction of history...while an ancient, powerful new menace sets Earth in its crosshairs. With help from a new cast of humans (led by Mark Wahlberg), Optimus Prime and the Autobots rise to meet their most fearsome challenge yet. In an incredible adventure, they are swept up in a war of good and evil, ultimately leading to a climactic battle across the world."
    },

    'butler': {
      image: '3.jpg',
      cast: 'Forest Whitaker, Oprah Winfrey, John Cusack',
      teaser: "The Butler tells the story of a White House butler who served eight American presidents over three decades. The film traces the dramatic changes that swept American society during this time, from the civil rights movement to Vietnam and beyond, and how those changes affected this man's life and family. Forest Whitaker stars as the butler with Robin Williams as Dwight Eisenhower, John Cusack as Richard Nixon, Alan Rickman as Ronald Reagan, James Marsden as John F. Kennedy, Liev Schreiber as Lyndon B. Johnson, and many more. Academy Award (R) nominated Lee Daniels (PRECIOUS) directs and co-wrote the script with Emmy (R)-award winning Danny Strong (GAME CHANGE)."
    },
  };

  // How would you call renderNewCard() and pass it an image, cast, and teaser
  // using the values of the "movies" object on line 52?
  // This one is also not straightforward, but it's how many APIs pass data back
  // to us so it's valuable to practice on. Note that instead of an array, this is
  // an object of objects. Remember the prez object that pointed to an inner "address"
  // object? Same idea here. However we haven't covered the "for...in" loop yet so
  // feel free to save this for when we do it together on 7/11. In the meantime, here
  // is some foreshadowing:
  for (artist in movies) {
    console.log(movies[artist].image);
    console.log(movies[artist].cast);
    console.log(movies[artist].teaser);
    console.log('');
    renderNewCard(movies[artist].image, movies[artist].cast, movies[artist].teaser)
  }
}

// API practice! Using $.get we're able to make a request out to an API. In this case
// it's my backend passing back movies data. I simply console.log the data here for
// you to explore. If you can, try your hand at digging into the object, trying to
// "reach" into the object to get at some of its values. We'll do all of this together
// again on Saturday 7/11 so don't worry if you get stuck, and Slack me (Andy) if needed.
function renderMoviesAPI() {
  $.get('https://ga-movies-lite.firebaseio.com/movies.json', function(data) {
    // console.log(data);
    for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
    renderNewCard(data[i].image, data[i].cast.join(', '), data[i].teaser);
    };
  });
}

// Teaser one, looking ahead where we hit the Flickr API and dump images to <body>.
function renderFlickrAPI() {
  $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?', {
    format: "json",
    tags: "san francisco"
  }, processFlickrData);
}

function processFlickrData(data) {
  
}


// Below are some function calls you can try.
// renderNewCard is a function I wrote, defined in cards.js. Based on these
// three arguments passed into the function, you should be able to change them
// up and see what happens when you refresh the web page.
// renderNewCard('1.jpg', 'George Clooney, Mark Wahlberg, Ice Cube', "The Gulf War is over, and three soldiers want to go home rich. Major Archie Gates retires in two weeks. Sergeant Troy Barlow is a new father. Chief Elgin is on a four-month paid vacation from Detroit. Saddam Hussein stole a great deal of gold from Kuwait, and these soldiers have no problem with stealing it from him. But on their way to collect their booty, they bear witness to the the disturbing results of the war effort. President Bush has encouraged Iraqi citizens to fight back against Saddam and pledged to support them, but when they rise up, they get NO American support, and they're getting slaughtered. As the soldiers realize the true situation in Iraq, they're confronted with their own humanity, and they're forced to rethink who they are and what they're doing.");

// renderArray();
// renderObject();
// renderObjectsFromArray();
// renderObjectOfObjects();

// renderMoviesAPI();
// renderFlickrAPI();

