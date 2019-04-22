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
'use strict';

import ContentInstance from './lib/content.js';
jQuery(function ($) {
  /**
   * A new instance of the content parser using the content JSON file
   */
  var resContent = new ContentInstance('app/data/content.json');
  /**
   * Register a Handlebars helper for the difficulty stars
   */

  Handlebars.registerHelper('difficulty', function (intStars) {
    var strHTMLStarsOut = '';

    for (var intStar = 0; intStar < intStars; intStar++) {
      strHTMLStarsOut += '<i class="fa fa-star"></i>';
    }

    for (var intBlankStar = intStars; intBlankStar < 5; intBlankStar++) {
      strHTMLStarsOut += '<i class="fa fa-star-o"></i>';
    }

    return strHTMLStarsOut;
  });
  /**
   * When the content file is ready, actually populate the content
   */

  resContent.onReady(function () {
    //configure tabs
    new tabs(document.getElementById('about-me'));
  });
});
