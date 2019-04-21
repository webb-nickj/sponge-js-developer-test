/*
 =====================================================

   _____                                _    _ _  __
  / ____|                              | |  | | |/ /
 | (___  _ __   ___  _ __   __ _  ___  | |  | | ' /
  \___ \| '_ \ / _ \| '_ \ / _` |/ _ \ | |  | |  <
  ____) | |_) | (_) | | | | (_| |  __/ | |__| | . \
 |_____/| .__/ \___/|_| |_|\__, |\___|  \____/|_|\_\
        | |                 __/ |
        |_|                |___/

=====================================================
 SPONGE UK DEVELOPER TEST
 Page-specific JS
=====================================================
*/

jQuery(
		function( $ ) {
			/**
			 * A new instance of the content parser using the content JSON file
			 */
			var resContent = new Content( 'app/data/content.json' );


			/**
			 * Populate content area
			 */
			/*var populateContentArea = function( contentId , templateId , dataKey ){

				var templateStr , template ,  htmlStr , targetEle , dataObj;

				//check parameters are valid
				if( contentId === undefined || typeof contentId !== 'string' || contentId === '' ) return;
				if( templateId === undefined || typeof templateId !== 'string' || templateId === '' ) return;
				if( dataKey === undefined || typeof dataKey !== 'string' || dataKey === '' ) return;
				
				templateStr = $( '#' + templateId ).html();
				//no template found
				if( templateStr === '' ) return;

				targetEle = $( '#' + contentId );
				//no target element found
				if( targetEle.length === 0 ) return;

				dataObj = resContent.getItem( dataKey );
				//no data object found
				if( dataObj === undefined ) return;


				//try compiling the Handlebars template 
				try{
					template = Handlebars.compile( templateStr );
				}catch(e){
					console.warn( "Failed to compile template: #" + templateId );
					return;
				}


				//try executng the Handlebars template with the given data set
				try{
					htmlStr = template( dataObj );
				}catch( e ){
					console.warn( "Failed to execute template: #" + templateId );
					return;					
				}

				targetEle.html( htmlStr );

			}*/


			/**
			 * Register a Handlebars helper for the difficulty stars
			 */
			Handlebars.registerHelper( 'difficulty',
					function( intStars ) {
						var strHTMLStarsOut = '';

						for( var intStar = 0; intStar < intStars; intStar++ ) {
							strHTMLStarsOut += '<i class="fa fa-star"></i>';
						}

						for( var intBlankStar = intStars; intBlankStar < 5; intBlankStar++ ) {
							strHTMLStarsOut += '<i class="fa fa-star-o"></i>';
						}

						return strHTMLStarsOut;
					}
			);

			/**
			 * When the content file is ready, actually populate the content
			 */
			resContent.onReady(
					function() {

						//populate content areas
						/*populateContentArea( 'header' , 'header-template' , 'header' );
						populateContentArea( 'tasks' , 'task-template' , 'tasks' );
						populateContentArea( 'content' , 'content-template' , 'content' );
						populateContentArea( 'documentation' , 'documentation-template' , 'documentation' );
						populateContentArea( 'about-me' , 'about-me-template' , 'about-me' );
						*/

						//configure tabs
						new tabs( document.getElementById( 'about-me' ) );

					}
			);
		}
);