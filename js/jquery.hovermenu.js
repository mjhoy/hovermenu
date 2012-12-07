(function ($) {

  var defaultOptions = {
    // *topLinkSelector*
    // This corresponds to the parent link of a nested menu;
    // if the parent is not a link it may be something like
    // "span.nolink", etc.
    topLinkSelector : 'a'
  };

  $.fn.hoverMenu = function (opts) {

    var options = $.extend( defaultOptions, opts || {} );

    var hideNested = function (nested) {
      nested.removeClass( 'revealed' );
      nested.parents( 'li.expanded' ).removeClass( 'child-revealed' );
    };

    var showNested = function (nested) {
      nested.addClass( 'revealed' );
      nested.parents( 'li.expanded' ).addClass( 'child-revealed' );
    };

    return this.each( function () {

      $(this).addClass('hoverMenu').
              find('ul').each( function () {

        var top = $( this )
          , nested = $( 'ul', top );

        $( nested ).each( function () {
          var child = $( this )
            , link = child.siblings( options.topLinkSelector )
            , n = 0
            , tid = 0
            , check = function () { 
                if ( tid ) clearTimeout( tid ); 
                setTimeout(function () {
                  if (n < 1) { 
                    n = 0; 
                    hideNested( child );
                  }
                  tid = 0;
                }, 500);
              };

          link.mouseover( function (e) {
            hideNested( nested );
            showNested( child );
            n++;
          });

          link.mouseout( function (e) { n--; check(); });
          child.mouseover( function (e) { n++; });
          child.mouseout( function (e) { n--; check(); });
        });
      });
    });
  };
})(jQuery);
