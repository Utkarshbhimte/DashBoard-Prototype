    var currentModule = "";

$(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

    clickNewFeed();

  });

function clickNewFeed(){

		$( "li" ).removeClass('active');
		$(	"#news-tab" ).addClass('active');

		if(currentModule!="newsfeed"){

			if(currentModule==""){
				$( "#canvas" ).load( "newsfeed_module.html" ).addClass("animated fadeInLeft")
			}else{

			$( " #canvas " ).removeClass("fadeInLeft").addClass( "fadeOutRight" );
		console.log("clickNewFeed");

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

			if(currentModule!="softwares"){

			$( " #canvas " ).removeClass("fadeInLeft").addClass( "fadeOutRight" );
		console.log("clickNewFeed");

		setTimeout(function(){		  
			$( "#canvas" ).load( "softwares.html" );
			$( "#canvas" ).removeClass(" fadeOutRight hide").addClass("fadeInLeft");
			currentModule = "softwares";
		
		}, 500);	
    	}

		

}
