var config = {
	autoReload : true,
	autoReloadDelay : 10000,
};
var teamCount;
var problemCount;
var problemFirstACTime;
var problemFirstACTeam;
// reload handler
function reload() {
	location.reload();
}
// from h:m to int
function gettime( s ) {
	s = s.substr( 1, s.length - 2 );
	t = s.split( ":" );
	return parseInt( t[0] ) * 60 + parseInt( t[1] );
}
$( document ).ready( function() {
	$( ".standings" ).find( ".success" ).parent().addClass( "ac" );
	teamCount = $( ".standings tr" ).length - 4;
	// init for find first AC	
	problemCount = $( ".standings" ).find( "th.problems" ).length;
	problemFirstACTime = Array(problemCount);
	problemFirstACTeam = Array(problemCount);
	for (var i = 0; i < problemCount; i++) {
		problemFirstACTime[i] = -1;
		problemFirstACTeam[i] = null;
	}
	// mark teams with equal solved problems
	$( ".standings tr" ).each(function( index ) {
		var place = parseInt($( this ).find( ".place" ).text());
		if (!isNaN(place)) {
			var solved = parseInt($( this ).find( ".solved" ).text());
			$( this ).addClass( "line" + solved%2 );	
		} else {
			$( this ).addClass( "line2" );	
		}
		// search time of ac
		$( this ).find(".problems").each(function( index ) {
			var success = $( this ).find(".success");
			if ( success.length > 0 ) {
				var successTime = gettime( success.text() )
				if (problemFirstACTime[index] == -1 || problemFirstACTime[index] > successTime) {
					problemFirstACTime[index] = successTime;
					problemFirstACTeam[index] = this;
				}
			}
			if ( $( this ).text().search( "-" ) != -1 ) {
				$( this ).addClass( "wa" );
			}
		});
	});
	// mark first ac
	for (var i = 0; i < problemCount; i++) {
		$( problemFirstACTeam[i] ).toggleClass( "ac" );
		$( problemFirstACTeam[i] ).addClass( "first-ac" );
	}
	// width from problem count
	if ( problemCount <= 7 ) {
		var standWidth = "width";
		if (problemCount <= 3)
			standWidth += "50";
		else
			standWidth += "70";
		$( ".standings" ).addClass( standWidth );
	}
	// auto reload
	if (config.autoReload) {
		setTimeout(function() {
			reload();
		}, config.autoReloadDelay);
	}
});
