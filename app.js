/**
 * lesson-3
 *  How to Use jQuery in Your Website
 *

     $(document).ready(function () {
        console.log('hello world');
    })

 */

/**
 * lesson-4
 * jQuery Statements & the $ Sign
 *
    var a = $('#page-title');

    console.log(a);
 */

/**
 * lesson-5
 * jQuery Selectorsn
 *
     var lead_banner = $('#lead-banner p');
     console.log(lead_banner.text());

     $('h3').css({border:"3px solid blue"});

     $('.wrapper').css({border:"3px solid red"});

     $('#clients').css({border:"3px solid yellow"});
 */

/**
 * lesson-6
 * jQuery Filters
 *
     $("header nav li:first").css({border:"2px solid red"});
     $("header nav li:last").css({border:"2px solid red"});

     $("#contact ul:first").css({border:"2px solid red"});
     $("#contact ul:last").css({border:"2px solid red"});

     $("header nav li:even").css({border:"2px solid red"});
     $("header nav li:odd").css({border:"2px solid red"});

     $("section:not('#contact')").css({border:"2px solid red"});

     $("#social-nav li:lt(3)").css({border:"2px solid red"});
     $("#social-nav li:gt(2)").css({border:"2px solid red"});

     $("div[class]").css({border:"2px solid red"});

     $("img[alt]").css({border:"2px solid red"});

     $("img[alt=quote]").css({border:"2px solid red"});

 */

/**
 * lesson-7
 * Traversing the DOM with jQuery
 *
 $("#contact-methods").next().css({border:"2px solid red"});

 $("#contact-methods").prev().css({border:"2px solid red"});

 $("#contact-methods").parent().css({border:"2px solid red"});

 $("#contact-methods").parents().css({border:"2px solid red"});

 $("#contact-methods").children().css({border:"2px solid red"});

 $("#contact").find('.facebook').css({border:"2px solid red"});

 $("#social-nav").closest('#contact').css({border:"2px solid red"});
 */

/**
 * lesson-9
 * Adding Content using jQuery
 *
     var tweet = "<div>The big fight live:Ham vs Cheese!</div>"
     var text = "The big fight live:Ham vs Cheese!"

     $("#tweets div p").append(tweet);
     $("#tweets div p").prepend(tweet);
     $("#tweets div p").before(tweet);
     $("#tweets div p").after(tweet);
     $("#tweets div p").html(text);
     $("#tweets div p").text(text);
 */

/**
 * lesson-10
 * Wrap and Unwrap Elements
 *
     $("section").wrap("<div></div>");
     $("section").unwrap("<div></div>");
     $("section").wrapAll("<div></div>");

 */

/**
 * lesson-11
 * Wrap and Unwrap Elements
 *
     .empty();
     .remove();

 $("#lead-banner").empty();

 $("#lead-banner").remove();
 */

/**
 * lesson-12
 * Changing Attributes
 *

 $("#contact img").removeAttr('alt');

 $("#contact img").attr('alt');
 */

/**
 * lesson-13
 * CSS with jQuery
 *
    $("social-nav").css("top", "-200px").css("left", "100px");

     var myObject = {
        "height": "40px",
        "speed": "100px"
    }

     $("social-nav").css({
        "height": "40px",
        "speed": "100px"
    });
 */

/**
 * lesson-14
 * CSS with jQuery
 *
     $("header .wrapper").removeClass("wrapper");
     $("header .wrapper").addClass("wrapper");
     $("header .wrapper").toggleClass("wrapper");
 */

/**
 * lesson-15
 * Binding & Unbinding Events
 *
     $("#points-of-sale li").on('click', function () {
        $(this).css({'background' : 'pink'});
        $("#points-of-sale li").off('click')
    })
 */

/**
 * lesson-16
 * Event Helpers
 *
     $("#points-of-sale li").click(function () {
        console.log('hello');
     })
 */

/**
 * lesson-17
 * Document Ready vs Window Load
 *
     $(document).ready(function () {

    })

     $(function () {

    })

     $(window).load(function () {

    })
 */

/**
 * lesson-18
 * The Event Object in jQuery
 *
 *
     $("*").click(function (e) {
        console.log(e.target);
        console.log(e.type);
        e.stopPropageation(); //阻止 click 事件冒泡到父元素
        console.log("X: " + e.pageX + ", Y: " + e.pageY); //显示鼠标指针的位置：


    })

 */
