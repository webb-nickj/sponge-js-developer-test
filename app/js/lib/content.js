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
 JSON parser and event handler
 =====================================================
*/

(function( window, $ ) {
			var ContentInstance = function( strDataLocation ) {
				var objContent = {},
						arrOnReady = [],
						blReady = false;


        /**
         * Get the JSON file
         */
        var loadData = function(){

          $.getJSON( strDataLocation, onDataLoaded );
        }


        /**
         * Once data is loaded store global reference and 
         * attempt to render content
         */
        var onDataLoaded = function( objResponse ){

          objContent = objResponse;

          //iterate over keys in the data Object and attempt
          //to render into the content
          $.each( objContent , populateContentArea );

          //finally call any registered 
          triggerOnReady();
        }


        /**
         * For each data key, attempt to find a corresponding 
         * target content area and Handlebars template and render
         * out data using these.  
         */
        var populateContentArea = function( dataKey , dataObj ){

          var templateStr , template ,  htmlStr , targetEle;

          //no data, so nothing else to do
          if( dataObj === undefined ) return;

          contentId = '#' + dataKey
          templateId = '#' + dataKey + '-template';

          templateStr = $( templateId ).html();
          //no template found
          if( templateStr === '' ){ 
            console.warn( "Failed to find template: #" + templateId );
            return;
          }

          targetEle = $( contentId );
          //no target element found
          if( targetEle.length === 0 ){ 
            console.warn( "Failed to find content area: #" + contentId );
            return;
          }

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

        };


        /**
         * Execute all the ready functions once loaded
         */
        var triggerOnReady = function(){

          $.each( arrOnReady,
              function( intIndex, funDoOnReady ) {
                funDoOnReady.call();
              }
          );

        };
        


				/**
				 * Register a function to execute once loaded
				 */
				this.onReady = function( funDoOnReady ) {
					if( blReady ) {
						funDoOnReady.call();
					} else {
						arrOnReady.push( funDoOnReady );
					}
				};


				/**
				 * Get an item from the content data
				 */
				this.getItem = function( intItem ) {
					return objContent[intItem];
				};



        loadData(); //call loadData to get started
				return this;
			};

			/**
			 * Add the ContentInstance method to the global scope
			 */
			window.Content = ContentInstance;

		})( window, jQuery );

/*
      ,'``.._   ,'``.
     :,--._:)\,:,._,.:       All Glory to
     :`--,''   :`...';\      the HYPNOTOAD!
      `,'       `---'  `.
      /                 :
     /                   \
   ,'                     :\.___,-.
  `...,---'``````-..._    |:       \
    (                 )   ;:    )   \  _,-.
     `.              (   //          `'    \
      :               `.//  )      )     , ;
    ,-|`.            _,'/       )    ) ,' ,'
   (  :`.`-..____..=:.-':     .     _,' ,'
    `,'\ ``--....-)='    `._,  \  ,') _ '``._
 _.-/ _ `.       (_)      /     )' ; / \ \`-.'
`--(   `-:`.     `' ___..'  _,-'   |/   `.)
    `-. `.`.``-----``--,  .'
      |/`.\`'        ,',');
          `         (/  (/
 */
