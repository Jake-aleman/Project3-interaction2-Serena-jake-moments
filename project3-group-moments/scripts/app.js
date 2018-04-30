$(document).ready(function() {
  $(".cup").draggable({
    axis: 'y'
  });

  $('.goal').droppable({

    drop: function(event, ui) {
      $('.bottom').addClass('active');
    }

  });
  var clickCount = 0;

  $('.hurry').click(function(){

  	clickCount++;

    if (clickCount == 1) {
  	  $('.box1').show();
  	} else if (clickCount == 2) {
  	  $('.box2').show();
  	}

    if (clickCount == 3) {
  	  $('.box3').show();
  	} else if (clickCount == 4) {
  	  $('.box4').show();
  	}



  });
});
