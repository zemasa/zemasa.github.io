$(".button").hover(function() { 
	$(this).stop().animate({ backgroundColor: "#014069"}, 200); 
	},function() { 
	$(this).stop().animate({ backgroundColor: "#0396d4" }, 200); 
});
$(".contact-form input.submit").hover(function() { 
	$(this).stop().animate({ backgroundColor: "#014069"}, 200); 
	},function() { 
	$(this).stop().animate({ backgroundColor: "#0396d4" }, 200); 
});


$(function() {
	$(".prev")
	.find("span")
	.hide()
	.end()
	.hover(function() {
		$(this).find("span").stop(true, true).fadeIn();
	}, function() {
		$(this).find("span").stop(true, true).fadeOut();
	});
});
$(function() {
	$(".next")
	.find("span")
	.hide()
	.end()
	.hover(function() {
		$(this).find("span").stop(true, true).fadeIn();
	}, function() {
		$(this).find("span").stop(true, true).fadeOut();
	});
});

$(function() {
	$("a.link")
	.find("span")
	.hide()
	.end()
	.hover(function() {
		$(this).find("span").stop(true, true).fadeIn();
	}, function() {
		$(this).find("span").stop(true, true).fadeOut();
	});
});

$(function() {
	$(".vimeo")
	.find("span")
	.hide()
	.end()
	.hover(function() {
		$(this).find("span").stop(true, true).fadeIn();
	}, function() {
		$(this).find("span").stop(true, true).fadeOut();
	});
});
$(function() {
	$(".googleplus")
	.find("span")
	.hide()
	.end()
	.hover(function() {
		$(this).find("span").stop(true, true).fadeIn();
	}, function() {
		$(this).find("span").stop(true, true).fadeOut();
	});
});
$(function() {
	$(".facebook")
	.find("span")
	.hide()
	.end()
	.hover(function() {
		$(this).find("span").stop(true, true).fadeIn();
	}, function() {
		$(this).find("span").stop(true, true).fadeOut();
	});
});
$(function() {
	$(".twitter")
	.find("span")
	.hide()
	.end()
	.hover(function() {
		$(this).find("span").stop(true, true).fadeIn();
	}, function() {
		$(this).find("span").stop(true, true).fadeOut();
	});
});
$(function() {
	$(".linkedin")
	.find("span")
	.hide()
	.end()
	.hover(function() {
		$(this).find("span").stop(true, true).fadeIn();
	}, function() {
		$(this).find("span").stop(true, true).fadeOut();
	});
});
	

$('[placeholder]').focus(function() {
  var input = $(this);
  if (input.val() == input.attr('placeholder')) {
    if (this.originalType) {
      this.type = this.originalType;
      delete this.originalType;
    }
    input.val('');
    input.removeClass('placeholder');
  }
}).blur(function() {
  var input = $(this);
  if (input.val() == '') {
    if (this.type == 'password') {
      this.originalType = this.type;
      this.type = 'text';
    }
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
  }
}).blur();




$(document).ready(function(){

// resetting
	if($(window).width() >= 1024){
		$('#slide-2 h1,#slide-2 .title,#slide-2 h2').css('opacity',0)
		$('#service-container.service-1,#service-container.service-2,#service-container.service-3').css('opacity',0).css({'left' : -($('#service-container.service-1,#service-container.service-2,#service-container.service-3').offset().left + 350)})
		
		$('#slide-3 h1,#slide-3 .title,#slide-3 h2').css('opacity',0)
		$('#case-study-container.case-study-1,#case-study-container.case-study-2,#case-study-container.case-study-3').css('opacity',0).css({'top' : -($('#case-study-container.case-study-1,#case-study-container.case-study-2,#case-study-container.case-study-3').offset().top + -2500)})
		
		$('#slide-4 h1,#slide-4 .title,#slide-4 h2').css('opacity',0)
		$('#team-photos li.t1,#team-photos li.t2,#team-photos li.t3,#team-photos li.t4,#team-photos li.t5,#team-photos li.t6,#team-photos li.t7,#team-photos li.t8,#team-photos li.t9,#team-photos li.t10,#team-photos li.t11').css('opacity',0)
		$('#certification-container.award,#certification-container.iso').css('opacity',0).css({'left' : -($('#certification-container.award,#certification-container.iso').offset().left + 350)})
	}
})
$(window).scroll(function(){
	var top = $(window).scrollTop();
	
	
	if($(window).width() < 1024) return;
	
	$('article').each(function(){
		var t = $(this),
			id = t.attr('id');
		
		if(t.hasClass('opened')) return; 
		
		if(top >= t.offset().top - ($(window).height()/3)*2 && top < t.offset().top + t.height()){
			t.addClass('opened');
			
			switch(id){
				case 'slide-2':
					$('#slide-2 h1').animate({'opacity':1})
					$('#slide-2 .title').animate({'opacity':1})
					$('#slide-2 h2').delay(200).animate({'opacity':1})
					$('#service-container.service-1').animate({'opacity':1,'left' : 0},500)
					$('#service-container.service-2').delay(400).animate({'opacity':1,'left' : 0},500)
					$('#service-container.service-3').delay(800).animate({'opacity':1,'left' : 0},500)
				break;
				case 'slide-3':
					$('#slide-3 h1').animate({'opacity':1})
					$('#slide-3 .title').animate({'opacity':1})
					$('#slide-3 h2').delay(200).animate({'opacity':1})
					$('#case-study-container.case-study-1').animate({'opacity':1,'top' : 0},500)
					$('#case-study-container.case-study-2').delay(800).animate({'opacity':1,'top' : 0},500)
					$('#case-study-container.case-study-3').delay(1600).animate({'opacity':1,'top' : 0},500)
				break;				
				case 'slide-4':
					$('#slide-4 h1').animate({'opacity':1})
					$('#slide-4 .title').animate({'opacity':1})
					$('#slide-4 h2').delay(200).animate({'opacity':1})
					
					$('#team-photos li.t1').delay(300).animate({'opacity':1})
					$('#team-photos li.t2').delay(350).animate({'opacity':1})
					$('#team-photos li.t3').delay(400).animate({'opacity':1})
					$('#team-photos li.t4').delay(450).animate({'opacity':1})
					$('#team-photos li.t5').delay(500).animate({'opacity':1})
					$('#team-photos li.t6').delay(550).animate({'opacity':1})
					$('#team-photos li.t7').delay(600).animate({'opacity':1})
					$('#team-photos li.t8').delay(650).animate({'opacity':1})
					$('#team-photos li.t9').delay(700).animate({'opacity':1})
					$('#team-photos li.t10').delay(750).animate({'opacity':1})
					$('#team-photos li.t11').delay(800).animate({'opacity':1})

					$('#certification-container.award').delay(1000).animate({'opacity':1,'left' : 0},500)
					$('#certification-container.iso').delay(1400).animate({'opacity':1,'left' : 0},500)
				break;
			}
			
		}
		
	})
})