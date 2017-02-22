$('body').on('click', '.search-button', event => {
  event.preventDefault();
  let searchQuery = $("#search").val();
  if (searchQuery !== "") {
    search(searchQuery);
  }
});

$('body').on('click', '.movie-select', function(event) {
  let id = $(this).data('id');
  let title = $(this).data('title');
  resetModal();
  $('#movie-title').html(title);
  $('#poster').html("<img src='assets/loading.gif'>");
  $("#movie-modal").modal('show');
  $.getJSON(`https://www.omdbapi.com/?i=${ id }&tomatoes=true`, movie => {
    createMovieModal(movie);
  });
});

$('body').on('click', '.random', event => {
  event.preventDefault();
  search(getRandomMovie());
});

function search(searchInput) {
  $("#content").html("");
  $.getJSON(`https://www.omdbapi.com/?s=${ searchInput }`, data => {
    if (data.Response === "True") {
      createContent(data);
      if (data.totalResults > 10) {
        searchMore(searchInput, 2);
      }
    } else {
      $("#content").append("<h1>No Results, Try another Search</h1>");
    }
  });
}

function searchMore(searchInput, page) {
  if (page < 10) {
    $.getJSON(`https://www.omdbapi.com/?s=${ searchInput }&page=${ page }`, data => {
      if (data.Response === "True") {
        createContent(data);
        searchMore(searchInput, page + 1);
      }
    });
  }
}

function createContent(data) {
  data.Search.forEach(movie => {
    if (movie.Poster !== "N/A") {
      $("#content").append(
        "<div class='img-wrapper col-lg-3 col-md-4 col-xs-6 thumb'>" +
          "<p class='movie-tag' data-toggle='tooltip' data-placement='top' title='" + movie.Title + "'>" + movie.Title + ` (${ movie.Year })</p>` +
          "<a class='movie-select' data-id='" + movie.imdbID + "'><img src=" + movie.Poster + " alt='' data-toggle='tooltip' data-placement='top' title='" + movie.Title + "'></a>" +
        "</div>" );
    } else {
      $("#content").append(
        "<div class='img-wrapper col-lg-3 col-md-4 col-xs-6 thumb'>" +
          "<p class='movie-tag' data-toggle='tooltip' data-placement='top' title='" + movie.Title + "'>" + movie.Title + "</p>" +
          "<a class='movie-select' data-title='" + movie.Title + "' data-id='" + movie.imdbID + "'><img src='assets/placeholder.png' alt='' data-toggle='tooltip' data-placement='top' title='" + movie.Title + "'></a>" +
        "</div>" );
    }
  });
}

function createMovieModal(movie) {
  $('#movie-title').html(movie.Title + ` (${ movie.Released })`);
  printPoster(movie);
  printRatings(movie);
  printInfo(movie);
}

function printRatings(movie) {
  if (movie.tomatoURL !== "N/A") {
    $('#ratings').html(`<h4 class='movie-header'>Ratings</h4>` +
                      `<p><a href='https://www.imdb.com/title/${ movie.imdbID }' target='_blank'>IMDB</a>: ${ movie.imdbRating } (${ movie.imdbVotes } reviews)` +
                      `<p><a href='${ movie.tomatoURL }' target='_blank'>Rotten Tomatoes</a>: ${ movie.tomatoRating } (${ movie.tomatoReviews } reviews)`);
  } else {
    $('#ratings').html(`<h4 class='movie-header'>Ratings</h4>` +
                      `<p><a href='https://www.imdb.com/title/${ movie.imdbID }' target='_blank'>IMDB</a>: ${ movie.imdbRating } (${ movie.imdbVotes } reviews)`);
  }
}

function printPoster(movie) {
  if (movie.Poster !== "N/A") {
    $('#poster').html("<a class='trailer' href='http://m.imdb.com/title/" + movie.imdbID + "/videogallery' target='_blank'><img id='info-poster' class='img-responsive' src=" + movie.Poster + " alt='' data-toggle='tooltip' data-placement='top' title='" + movie.Title + " Trailer'></a>");
  } else {
    $('#poster').html("<a class='trailer' href='http://m.imdb.com/title/" + movie.imdbID + "/videogallery' target='_blank'><img id='info-poster' class='img-responsive' src='assets/placeholder.png' alt='' data-toggle='tooltip' data-placement='top' title='" + movie.Title + " Trailer'></a>");
  }
}

function printInfo(movie) {
  $('#rated').html(`<p><b>Rated </b> ${ movie.Rated }`);
  $('#genre').html(`<p><b>${ movie.Genre }</b></p>`);
  $('#run-time').html(`<p><b>${ movie.Runtime }</b>`);
  $('#directors').html(`<h4 class='movie-header'>Directors</h4><p>${ movie.Director }</p>`);
  $('#actors').html(`<h4 class='movie-header'>Stars</h4><p>${ movie.Actors }</p>`);
  $('#plot').html(`<h4 class='movie-header'>Plot</h4>` +
                  `<p>${ movie.Plot }</p>`);
  $('#awards').html(`<h4 class='movie-header'>Awards</h4><a href='https://www.imdb.com/title/${ movie.imdbID }/awards' target='_blank'><p>${ movie.Awards }</p></a>`);
}

function resetModal() {
  $('#rated').html("");
  $('#genre').html("");
  $('#directors').html("");
  $('#actors').html("");
  $('#run-time').html("");
  $('#ratings').html("");
  $('#plot').html("");
  $('#awards').html("");
}

search(getRandomMovie());
