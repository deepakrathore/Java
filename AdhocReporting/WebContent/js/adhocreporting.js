$(document).ready(function() {
	$('#rptCtx1').typeahead({
	    name: 'countries',
	    //prefetch: '../data/countries.json',
	    local: ['timtrueman', 'JakeHarding', 'vskarich'],
	    limit: 10
	  });
});