    var currentModule = "";

$(document).ready(function(){
	$(".button-collapse").sideNav();

    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

    clickNewsFeed();

  });

function clickNewsFeed(){

		$( "li" ).removeClass('active');
		$(	"#news-tab" ).addClass('active');
		$('.button-collapse').sideNav('hide');

		if(currentModule!="newsfeed"){

			if(currentModule==""){
				$( "#canvas" ).load( "newsfeed_module.html" ).addClass("animated fadeInLeft")
			}else{

			$( " #canvas " ).removeClass("fadeInLeft").addClass( "fadeOutRight" );
		console.log("clickNewsFeed");

		setTimeout(function(){		  
			$( "#canvas" ).load( "newsfeed_module.html" );
			$( "#canvas" ).removeClass(" fadeOutRight hide").addClass("fadeInLeft");
			currentModule = "newsfeed";
		
		}, 500);	
    	}

		}
    	
    };

function clickSoftware(){
		
		$( "li" ).removeClass('active');
		$(	"#resources-tab" ).addClass('active');
		$('.button-collapse').sideNav('hide');

			if(currentModule!="softwares"){

			$( " #canvas " ).removeClass("fadeInLeft").addClass( "fadeOutRight" );
		console.log("clickNewsFeed");

		setTimeout(function(){		  
			$( "#canvas" ).load( "softwares.html" );
			$( "#canvas" ).removeClass(" fadeOutRight hide").addClass("fadeInLeft");
			currentModule = "softwares";
		
		}, 500);	
    	}

		

}
