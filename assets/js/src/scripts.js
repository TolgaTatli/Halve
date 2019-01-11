// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// FitVids options
$(function() {
  $(".content").fitVids();
});

// Projects Menu
$('.projects-menu-icon').click(function() {
  $('html').toggleClass('no-scroll');
  $(this).toggleClass('active');
  $('.overlay').toggleClass('show');
});
  
// All others
$(document).ready(function() {
	$('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open. 
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });
});
     <script type="text/javascript">
    /* 鼠标点击特效 */
    var a_idx = 0;
    jQuery(document).ready(function($) {
        $("body").click(function(e) {
    var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");
    var $i = $("<span/>").text(a[a_idx]);
            a_idx = (a_idx + 1) % a.length;
    var x = e.pageX,
            y = e.pageY;
            $i.css({
    "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
    "top": y - 20,
    "left": x,
    "position": "absolute",
    "font-weight": "bold",
    "color": "#ff6651"
            });
            $("body").append($i);
            $i.animate({
    "top": y - 180,
    "opacity": 0
            },
            1500,
    function() {
                $i.remove();
            });
        });
    });
    </script>
