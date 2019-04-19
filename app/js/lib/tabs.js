//======================================================
//
//  Tabs class by njw - last updated 2019-04-19
//  
//======================================================

(function( window ){


  //tabs constructor -- called passing the
  //root html element for the tabs
  var tabs = function( tabsElement ){


    var tabsTabs, tabsPanels;


    //find tab buttons and configure
    function initialize(){

      var i , tabButtons, tabButtonsLength;
      var tabButtons = tabsElement.getElementsByClassName( 'tabs-anchor' );

      //no tab button found
      if( tabButtons.length === 0 ) return false;

      tabsTabs = [];
      tabsPanels = [];

      tabButtonsLength = tabButtons.length;

      for( i = 0 ; i < tabButtonsLength ; i++ ){
        configureTabButton( tabButtons[ i ] );
      }

      //no tab / panel combinations registered
      if( tabsTabs.length === 0 ) return false;

      return true;
    }



    //check tab button has corresponding panel and setup arrays
    //and button click event
    function configureTabButton( tabsTab ){

      var tabsPanel, tabsPanelId;
      
      //find corresponding tab panel
      tabsPanelId = tabsTab.getAttribute( 'aria-controls');
      if( tabsPanelId === null || tabsPanelId === '' ) return;

      tabsPanel = document.getElementById( tabsPanelId );

      //no matching panel found
      if( tabsPanel === null ) return;

      //store reference to tab and panel and setup click event
      tabsTabs.push( tabsTab );
      tabsPanels.push( tabsPanel );
      tabsTab.onclick = onTabButtonClicked;

      onTabButtonClicked()
    }



    //on tab button clicked
    function onTabButtonClicked( evt ){

      var i , targetTab , tabsTab , tabsTabsLength , tabsPanelId , tabsPanel , tabsPanelsLength; 

      if( evt !== undefined ){
        evt.preventDefault();
      }

      if( evt === undefined ){ //if event handler was called during init, setup first tab
        targetTab = tabsTabs[ 0 ];
      }else if( !evt.target || evt.target.classList.contains( 'active' ) ){
        return;
      }else{
        targetTab = evt.target;
      }

      //iterate over tabs
      var tabsTabsLength = tabsTabs.length;
      for( i = 0; i< tabsTabsLength ; i++ ){

        tabsTab = tabsTabs[ i ];
        if( tabsTab === targetTab ){
          tabsTab.classList.add( 'active' );
          tabsTab.parentElement.classList.add( 'current' );
          tabsTab.setAttribute( 'aria-selected' , true );
        }else{
          tabsTab.classList.remove( 'active' );
          tabsTab.parentElement.classList.remove( 'current' );
          tabsTab.setAttribute( 'aria-selected' , false );
        }
      }

      //iterate over panels
      tabsPanelId = targetTab.getAttribute( 'aria-controls' );
      tabsPanelsLength = tabsPanels.length;
      for( i = 0 ; i < tabsPanelsLength ; i++ ){

        tabsPanel = tabsPanels[ i ];
        if( tabsPanel.id === tabsPanelId ){
          tabsPanel.classList.add( 'active' );
          tabsPanel.setAttribute( 'aria-expanded' , true );
        }else{
          tabsPanel.classList.remove( 'active' );
          tabsPanel.setAttribute( 'aria-expanded' , false );
        }
      } 
    }
    

    //attempt to initialize tabs object or return null
    if( !tabsElement || !tabsElement.getElementsByClassName || !initialize() ) return null;
    
  } //end of tabs constructor
  


  window.tabs = tabs; //attach tabs constructor to window

})( window );