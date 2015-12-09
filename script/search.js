$(document).ready(function(){
	$("button").click(function(){
		var film = $('#films').find(":selected").text();
		var title = $('#films').find(":selected").val();
		var year = film.split('  ')[0];

		jQuery.ajax({
			type: 'GET',
			data: {t: title, y: year},
			url: 'http://www.omdbapi.com/',
			dataType: 'json',
		}).success(function (result) {
			$("div#result").html("");
			$("div#result").append("<div>Title: " + result.Title + "</div>");
			$("div#result").append("<div>Year: " + result.Year + "</div>");
			$("div#result").append("<div>Rated: " + result.Rated + "</div>");
			$("div#result").append("<div>Released: " + result.Released + "</div>");
			$("div#result").append("<div>Runtime: " + result.Runtime + "</div>");
			$("div#result").append("<div>Genre: " + result.Genre + "</div>");
			$("div#result").append("<div>Director: " + result.Director + "</div>");
			$("div#result").append("<div>Writer: " + result.Writer + "</div>");
			$("div#result").append("<div>Actors: " + result.Actors + "</div>");
			$("div#result").append("<div>Plot: " + result.Plot + "</div>");
			$("div#result").append("<div>Language: " + result.Language + "</div>");
			$("div#result").append("<div>Country: " + result.Country + "</div>");
			$("div#result").append("<div>Awards: " + result.Awards + "</div>");
			$("div#result").append("<div>imdb Rating: " + result.imdbRating + "</div>");
		});
    });
});