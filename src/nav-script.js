alert('hello');

(function( window, undefined ){

	//CODE FOR SLIDER
	$(".mobile-nav").hide();	

	//DROP DOWN ON ClICK 
	$(function(){
		$(".icon").on( "click", function(e){   
	      	$(".mobile-nav").fadeToggle(400);
	      	e.preventDefault();
		});
	});

	$(window).on( 'scroll', function(){
		  if ($(window).scrollTop() >= 50) {
		    $(".buttons").addClass('is-active');
		  } else {
		  	$(".buttons").removeClass('is-active');
		  }
	});
})( window, undefined );

/* js file */
//javascript self executing anonymous function
(function( window, undefined ){

	//jquery ready function
	$( function(){

		////////////////////////////////////////
		//Time/////////////////////////////////
		$( '.countdown' ).downCount({
			date : '05/11/2016 06:00:00',
			offset : +10
		} );

		////////////////////////////////////////
		//Text Resizer/////////////////////////
		$("#countdown").fitText( 1.0 );

		////////////////////////////////////////
		//window resize/////////////////////////
		var win    = $( window );
		var header = $( ".main_header" );

		var resize = function(){

			header.css( { "height" : win.height() + "px"});
		};

	    win.on( "resize load", function( e ){

	    	resize();
		});
		

		////////////////////////////////////////
		//Fade In//////////////////////////////
		var visibleStuff = $( ".visible" );
		var win = $( window );
		var offset;
		var top;
		var height;

		visibleStuff.removeClass( "visible");

		win.on( "scroll", function( e ){

			top = win.scrollTop();
			height = win.height() / 1.4;

			visibleStuff.each( function( i, o ){

				var $o = $( o );

				offset = $o.offset().top;

				if ( top >= offset - height && $o.hasClass( "visible" ) === false ){

			       	$o.addClass( "visible" );
			    }
			});
		});
	});
})( window, undefined );


(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

/**
 * downCount: Simple Countdown clock with offset
 * Author: Sonny T. <hi@sonnyt.com>, sonnyt.com
 */

(function ($) {

    $.fn.downCount = function (options, callback) {
        var settings = $.extend({
                date: null,
                offset: null
            }, options);

        // Throw error if date is not set
        if (!settings.date) {
            $.error('Date is not defined.');
        }

        // Throw error if date is set incorectly
        if (!Date.parse(settings.date)) {
            $.error('Incorrect date format, it should look like this, 12/24/2012 12:00:00.');
        }

        // Save container
        var container = this;

        /**
         * Change client's local date to match offset timezone
         * @return {Object} Fixed Date object.
         */
        var currentDate = function () {
            // get client's current date
            var date = new Date();

            // turn date to utc
            var utc = date.getTime() + (date.getTimezoneOffset() * 60000);

            // set new Date object
            var new_date = new Date(utc + (3600000*settings.offset))

            return new_date;
        };

        /**
         * Main downCount function that calculates everything
         */
        function countdown () {
            var target_date = new Date(settings.date), // set target date
                current_date = currentDate(); // get fixed current date

            // difference of dates
            var difference = target_date - current_date;

            // if difference is negative than it's pass the target date
            if (difference < 0) {
                // stop timer
                clearInterval(interval);

                if (callback && typeof callback === 'function') callback();

                return;
            }

            // basic math variables
            var _second = 1000,
                _minute = _second * 60,
                _hour = _minute * 60,
                _day = _hour * 24;

            // calculate dates
            var days = Math.floor(difference / _day),
                hours = Math.floor((difference % _day) / _hour),
                minutes = Math.floor((difference % _hour) / _minute),
                seconds = Math.floor((difference % _minute) / _second);

                // fix dates so that it will show two digets
                days = (String(days).length >= 2) ? days : '0' + days;
                hours = (String(hours).length >= 2) ? hours : '0' + hours;
                minutes = (String(minutes).length >= 2) ? minutes : '0' + minutes;
                seconds = (String(seconds).length >= 2) ? seconds : '0' + seconds;

            // based on the date change the refrence wording
            // var ref_days = (days === 1) ? 'day' : 'days',
            //     ref_hours = (hours === 1) ? 'hour' : 'hours',
            //     ref_minutes = (minutes === 1) ? 'minute' : 'minutes',
            //     ref_seconds = (seconds === 1) ? 'second' : 'seconds';

            // set to DOM
            container.find('.days').text(days);
            container.find('.hours').text(hours);
            container.find('.minutes').text(minutes);
            container.find('.seconds').text(seconds);

            // container.find('.days_ref').text(ref_days);
            // container.find('.hours_ref').text(ref_hours);
            // container.find('.minutes_ref').text(ref_minutes);
            // container.find('.seconds_ref').text(ref_seconds);
        };
        
        // start
        var interval = setInterval(countdown, 1000);
    };

})(jQuery);
