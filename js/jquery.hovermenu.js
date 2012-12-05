(function ($) {

  $.fn.hoverMenu = function () {

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
            , link = child.siblings( 'a' )
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
