function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var ContentInstance =
/*#__PURE__*/
function () {
  function ContentInstance(strDataLocation) {
    var _this = this;

    _classCallCheck(this, ContentInstance);

    //initialise variables
    this._objContent = {};
    this._arrOnReady = [];
    this._blReady = false; //load data

    $.getJSON(strDataLocation, function (objResponse) {
      _this._onDataLoaded(objResponse);
    });
  }
  /**
   * Once data is loaded store global reference and 
   * attempt to render content
   */


  _createClass(ContentInstance, [{
    key: "_onDataLoaded",
    value: function _onDataLoaded(objResponse) {
      this._objContent = objResponse; //iterate over keys in the data Object and attempt
      //to render into the content

      $.each(this._objContent, this._populateContentArea); //finally call any registered 

      this._triggerOnReady();
    }
    /**
     * For each data key, attempt to find a corresponding 
     * target content area and Handlebars template and render
     * out data using these.  
     */

  }, {
    key: "_populateContentArea",
    value: function _populateContentArea(strDataKey, objDataItem) {
      //no data, so nothing else to do
      if (objDataItem === undefined) return;
      var fnTemplate = undefined;
      var strOutputHtml = '';
      var strContentId = '#' + strDataKey;
      var strTemplateId = '#' + strDataKey + '-template';
      var strTemplate = $(strTemplateId).html(); //no template found

      if (strTemplate === '') {
        console.warn("Failed to find template: #" + strTemplateId);
        return;
      }

      var targetEle = $(strContentId); //no target element found

      if (targetEle.length === 0) {
        console.warn("Failed to find content area: #" + strContentId);
        return;
      } //try compiling the Handlebars template 


      try {
        fnTemplate = Handlebars.compile(strTemplate);
      } catch (e) {
        console.warn("Failed to compile template: #" + strTemplateId);
        return;
      } //try executng the Handlebars template with the given data set


      try {
        strOutputHtml = fnTemplate(objDataItem);
      } catch (e) {
        console.warn("Failed to execute template: #" + strTemplateId);
        return;
      }

      targetEle.html(strOutputHtml);
    }
    /**
     * Execute all the ready functions once loaded
     */

  }, {
    key: "_triggerOnReady",
    value: function _triggerOnReady() {
      $.each(this._arrOnReady, function (intIndex, fnDoOnReady) {
        fnDoOnReady.call();
      });
    }
    /**
     * Register a function to execute once loaded
     */

  }, {
    key: "onReady",
    value: function onReady(fnDoOnReady) {
      if (this._blReady) {
        fnDoOnReady.call();
      } else {
        this._arrOnReady.push(fnDoOnReady);
      }
    }
    /**
     * Get an item from the content data
     */

  }, {
    key: "getItem",
    value: function getItem(strItemKey) {
      return this._objContent[strItemKey];
    }
  }]);

  return ContentInstance;
}();

export { ContentInstance as default };
