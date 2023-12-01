//스크롤 부드럽게
const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)





//Text split
const split = new SplitType('.split', {
  types: 'chars',
});

//preloader
$('.count').each(function () {
  var $this = $(this),
    countTo = 100;
  $({
    countNum: $this.text()
  }).animate({
    countNum: countTo
  }, {
    duration: 2000,
    easing: 'linear',
    step: function () {
      $this.text(Math.floor(this.countNum));
    },
    complete: function () {
      $this.text(this.countNum);
    }
  });
});

const loaderTl = gsap.timeline({});
loaderTl.to('.preloader', {
  scale: 30,
  rotate: -90,
  duration: 1.5,
  opacity: 0,
  display: 'none',
  delay: 2,
  ease: "power1.inOut"
})

//gnb 
gsap.from('.header .inner .logo a .char', {
  transform: 'translate(0, 120%) scale(0.7, 2.3)',
  opacity: 0,
  willChange: 'opacity, trnasform',
  stagger: 0.05,
  delay: 1,
}, 'a')
gsap.from('.header .inner .btn_start .char', {
  transform: 'translate(0, 120%) scale(0.7, 2.3)',
  opacity: 0,
  willChange: 'opacity, trnasform',
  stagger: 0.05,
  delay: 1,
}, 'a+=0.2')
gsap.from('.header .inner .btn_allMenu .char', {
  transform: 'translate(0, 120%) scale(0.7, 2.3)',
  opacity: 0,
  willChange: 'opacity, trnasform',
  stagger: 0.05,
  delay: 1,
}, 'a+=0.4')
gsap.from('.header .inner .contact_wrap a .char', {
  transform: 'translate(0, 120%) scale(0.7, 2.3)',
  opacity: 0,
  willChange: 'opacity, trnasform',
  stagger: 0.05,
  delay: 1,
}, 'a+=0.6')
gsap.from('.header .inner .contact_wrap .ico', {
  opacity: 0,
  delay: 1,
}, 'a+=1.2')

//Main
let mm = gsap.matchMedia();
mm.add("(min-width: 901px)", () => {
  const mainTl = gsap.timeline({})

  mainTl.from('.sc_main .main .inner .main_overtitle span', 1, {
    transform: 'translate(0, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'opacity, trnasform',
    marginLeft: 0,
    stagger: 0.05,
    delay: 4.5,
  })
  mainTl.to('.sc_main .main .inner .main_overtitle span:nth-child(2)', 1, {
    marginLeft: '7.5vw'
  }, 'a')
  mainTl.to('.sc_main .main .inner .main_overtitle span:nth-child(3)', 1, {
    marginLeft: '11.5vw'
  }, 'a')
  mainTl.to('.sc_main .main .inner .main_overtitle span:nth-child(4)', 1, {
    marginLeft: '16.6vw'
  }, 'a')
  mainTl.to('.sc_main .main .inner .main_overtitle span:nth-child(5)', 1, {
    marginLeft: '37.09vw'
  }, 'a')
  mainTl.from('.sc_main .main .main_cols .main_head .main_head_top .char', {
    transform: 'translate(0, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'opacity, trnasform',
    stagger: 0.05,
  }, 'a')
  mainTl.from('.sc_main .main .main_cols .main_head .main_head_mid .char', {
    transform: 'translate(0, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'opacity, trnasform',
    stagger: 0.05,
  }, 'a+=0.1')
  mainTl.from('.sc_main .main .main_cols .main_head .main_head_btm .char', {
    transform: 'translate(0, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'opacity, trnasform',
    stagger: 0.05,
  }, 'a+=0.2')
  mainTl.from('.sc_main .main .inner .main_cols .main_txt .char', {
    transform: 'translate(0, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'opacity, trnasform',
    stagger: 0.05,
  }, 'a+=0.6')
  mainTl.from('.sc_main .main .main_title_wrap .main_title span', 1, {
    transform: 'translate(0, 1170px)',
    opacity: 0,
    willChange: 'trnasform',
    stagger: {
      each: 0.05,
      from: 'center',
    },
  })

  //About
  aboutTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sc_about",
      start: "0% 60%",
      end: "20% 70%",
      scrub: 0,
      // markers: true,
    },
  })
  aboutTl.from('.sc_about .inner .about_top .headline .char', 2.5, {
    transformOrigin: '50% 0%',
    transform: ' translate(0%, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'opacity, trasnfrom',
    stagger: {
      each: 0.03,
      amount: 1,
    },
    ease: "back.inOut(2)",
  }, 'a')
  aboutTl.from('.sc_about .inner .about_top .section_txt .char', {
    transformOrigin: '50% 0%',
    transform: ' translate(0%, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'opacity, trasnfrom',
    stagger: {
      each: 0.05,
      amount: 1,
    },
  }, 'a')


  let imgFlag = false;

  aboutTl3 = gsap.timeline({
    paused: true,
    onUpdate: self => {
      if (!imgFlag) {
        imgFlag = true;
      }
    },
    onComplete: function () {
      setTimeout(() => {
        imgFlag = false;
      }, 300);
    }
  });
  
  aboutTl3.to('.sc_about .about_txt img', { yPercent: 5 });
  aboutTl3.to('.sc_about .about_txt img', { yPercent: 0 });
  


  ScrollTrigger.create({
    trigger: ".sc_about",
    start: "0% 0%",
    end: "100% 100%",
    onUpdate: self => {
      if (self.direction > 0) {
        if (!imgFlag) {
          aboutTl3.restart();
        }
      } 
    }
  })


  aboutTl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sc_about",
      start: "0% 0%",
      end: "30% 0%",
      scrub: 1,
      markers:true,

    },
  });
  
  aboutTl2.from('.sc_about .about_container .about_txt .about_txt_inner .char', {
    transformOrigin: '50% 0%',
    transform: ' translate(0%, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'opacity, transform',
    stagger: {
      each: 0.03,
      amount: 1,
    },
  })
})



// .fromTo('.sc_about .about_container .about_txt img', {
  // transform: 'translate(0%, 0%)',
// }, {
//   transform: 'translate(0%, 40%)',
// })


// aboutTl3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".sc_about",
//     start: "0% 0%",
//     end: "100% 100%",
//     ease: "back.inOut(2)",
//     markers: true
//   },
// })
// aboutTl3.fromTo('.sc_about .about_container .about_txt img', {
//   transform: 'translate(0%, 0%)',
// }, {
//   transform: 'translate(0%, 40%)',
// })

//Service
serviceTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc_service",
    start: "0% 50%",
    end: "100% 100%",
    scrub: 0,
    // markers: true,
  },
})
serviceTl.to('.sc_service .service_head', {
  transform: 'translateY(-100%)'
}, 'a')
serviceTl.to('.sc_service .service_body', {
  transform: 'translateY(-20%)'
}, 'a')
serviceTl.to('.sc_service .service_body .labels_inner', {
  xPercent: -25,
  willChange: 'transform'
}, 'a')

//Start
startTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc_start",
    start: "0% 0%",
    end: "100% 130%",
    scrub: 0,
    // markers: true,
  },
})
startTl.from('.sc_start .start_inner .start_btn', 1, {
  transform: 'translate(-50%, -50%) scale(5,5)'
}, 'a')

var headerHeight = $('.sc_service').offset().top;
$(window).scroll(function () {
  var window = $(this).scrollTop();
  if (headerHeight <= window) {
    $('.link_start').addClass('show');
  } else {
    $('.link_start').removeClass('show');
  }
})

//Featured
mm.add("(min-width: 901px", () => {

  hori = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc_featured',
      start: "3% 0%",
      end: "100% 100%",
      scrub: 0,
      invalidateOnRefresh: true, 
      onUpdate:function(){

      }
    },
    defaults:{
      ease: "none",
    }

  })
  hori.to('.featured_body_inner', {
    xPercent: -100,
    x: function () {
      return window.innerWidth;
    },
  },'a')


  hori2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc_featured',
      start: "3% 0%",
      end: "100% 100%",
      scrub: 0,
    },
    defaults:{
      ease: "none",
    }
  })
  hori2.to(".sc_featured", { backgroundColor: "#0000F4", ease: "none" })
  hori2.to(".sc_featured", { backgroundColor: "#4FA778", ease: "none" })
  hori2.to(".sc_featured", { backgroundColor: "#E03122", ease: "none" })
  hori2.to(".sc_featured", { backgroundColor: "#050505", ease: "none" })



  // gsap.to('.sc_featured', {
  //   ease: "none",
  //   backgroundColor: "rgb(255 0 0)",
  //   scrollTrigger: {
  //     trigger: '[data-color="1"]',
  //     containerAnimation: hori,
  //     start: "0% 0%",
  //     end: "100% 100%",
  //     scrub: 0,
  //     // markers:true,
  //   }
  // });

  // gsap.to('.sc_featured', {
  //   ease: "none",
  //   backgroundColor: "rgb(0 255 162)",
  //   scrollTrigger: {
  //     trigger: '[data-color="2"]',
  //     containerAnimation: hori,
  //     start: "0% 50%",
  //     end: "100% 100%",
  //     scrub: 0,
  //     markers:true,
  //   }
  // });


  
  
  // .to(".sc_featured", {
  //   duration: 1,
  //   backgroundColor: "#0000F4",
  //   ease: "none"
  // }, 0)
  // .to(".sc_featured", {
  //   duration: 1,
  //   backgroundColor: "#4FA778",
  //   ease: "none"
  // }, 1)
  // .to(".sc_featured", {
  //   duration: 1,
  //   backgroundColor: "#E03122",
  //   ease: "none"
  // }, 2)
  // .to(".sc_featured", {
  //   duration: 1,
  //   backgroundColor: "#050505",
  //   ease: "none"
  // }, 3)
})

//Fragments
fragmentTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc_fragments .inner",
    start: "0% 50%",
    end: "90% 100%",
    scrub: 1,
    //markers: true,
  },
})
fragmentTl.from('.sc_fragments .fragments_top .st1 .char:nth-child(3)', 1, {
  transform: 'translate(0, 24vh)',
  willChange: 'transform',
  stagger: 0.1,
}, 'a')
fragmentTl.from('.sc_fragments .fragments_top .st1 .char:nth-child(4)', 1, {
  transform: 'translate(0, 46vh)',
  willChange: 'transform',
  stagger: 0.1,
}, 'a')


fragmentTl.from('.sc_fragments .fragments_top .st2 .char:nth-child(3)', 1, {
  transform: 'translate(0, 34vh)',
  willChange: 'transform',
  stagger: 0.1,
}, 'a')
fragmentTl.from('.sc_fragments .fragments_top .st2 .char:nth-child(4)', 1, {
  transform: 'translate(0, 34vh)',
  willChange: 'transform',
  stagger: 0.1,
}, 'a')
fragmentTl.from('.sc_fragments .fragments_top .st2 .char:nth-child(5)', 1, {
  transform: 'translate(0, 24vh)',
  willChange: 'transform',
  stagger: 0.1,
}, 'a')
fragmentTl.from('.sc_fragments .fragments_top .st2 .char:nth-child(6)', 1, {
  transform: 'translate(0, 46vh)',
  willChange: 'transform',
  stagger: 0.1,
}, 'a')
fragmentTl.from('.sc_fragments .fragments_top .st2 .char:nth-child(7)', 1, {
  transform: 'translate(0, 58vh)',
  willChange: 'transform',
  stagger: 0.1,
}, 'a')


fragmentTl.from('.sc_fragments .fragments_top .st3 .char:nth-child(1)', 1, {
  transform: 'translate(0, 77vh)',
  willChange: 'transform',
  stagger: 0.1,
}, 'a')
fragmentTl.from('.sc_fragments .fragments_top .st3 .char:nth-child(2)', 1, {
  transform: 'translate(0, 77vh)',
  willChange: 'transform',
  stagger: 0.1,
}, 'a')
fragmentTl.from('.sc_fragments .fragments_top .st3 .char:nth-child(3)', 1, {
  transform: 'translate(0, 77vh)',
  willChange: 'transform',
  stagger: 0.1,
}, 'a')
fragmentTl.from('.sc_fragments .fragments_top .st3 .char:nth-child(4)', 1, {
  transform: 'translate(0, 40vh)',
  willChange: 'transform',
  stagger: 0.1,
}, 'a')
fragmentTl.from('.sc_fragments .fragments_top .st3 .char:nth-child(5)', 1, {
  transform: 'translate(0, 50vh)',
  willChange: 'transform',
  stagger: 0.1,
}, 'a')
fragmentTl.from('.sc_fragments .fragments_top .st3 .char:nth-child(6)', 1, {
  transform: 'translate(0, 57vh)',
  willChange: 'transform',
  stagger: 0.1,
}, 'a')
fragmentTl.from('.sc_fragments .fragments_top .st3 .char:nth-child(7)', 1, {
  transform: 'translate(0, 57vh)',
  willChange: 'transform',
  stagger: 0.1,
}, 'a')

fragmentTl.from('.sc_fragments .fragments_top .box .date .char:nth-child(1)', 1, {
  transform: 'translate(0, 59vh)',
  willChange: 'transform',
  stagger: 0.1,
}, 'a')
fragmentTl.from('.sc_fragments .fragments_top .box .date .char:nth-child(2)', 1, {
  transform: 'translate(0, 59vh)',
  willChange: 'transform',
  stagger: 0.1,
}, 'a')
fragmentTl.from('.sc_fragments .fragments_top .box .date .char:nth-child(3)', 1, {
  transform: 'translate(0, 69vh)',
  willChange: 'transform',
  stagger: 0.1,
}, 'a')
fragmentTl.from('.sc_fragments .fragments_top .box .date .char:nth-child(4)', 1, {
  transform: 'translate(0, 69vh)',
  willChange: 'transform',
  stagger: 0.1,
}, 'a')

fragmentTl.from('.sc_fragments .fragments_top .box .date .char:nth-child(5)', 1, {
  transform: 'translate(0, 75vh)',
  willChange: 'transform',
  stagger: 0.1,
}, 'a')
fragmentTl.from('.sc_fragments .fragments_top .box .date .char:nth-child(6)', 1, {
  transform: 'translate(0, 75vh)',
  willChange: 'transform',
  stagger: 0.1,
}, 'a')
fragmentTl.from('.sc_fragments .fragments_top .box .date .char:nth-child(7)', 1, {
  transform: 'translate(0, 75vh)',
  willChange: 'transform',
  stagger: 0.1,
}, 'a')

fragmentTl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc_fragments .inner",
    start: "0% 50%",
    end: "100% 100%",
    scrub: 1,
    //markers: true,
  },
})
fragmentTl2.from('.sc_fragments .fragments_title_wrap .fragments_title .char', 1, {
  transform: 'translate(0, 1170px)',
  opacity: 0,
  willChange: 'transform, opacity',
  stagger: {
    each: 0.05,
    from: 'center',
  },
})

fragmentTl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc_fragments .inner .item_wrap",
    start: "0% 100%",
    end: "100% 100%",
    scrub: 1,
    //markers: true,
  },
})

const fragmentsTl3 = gsap.timeline({
  repeat: -1
})
fragmentsTl3.to('.sc_fragments .coment .coment_bg', 1, {
  backgroundColor: '#855CFE'
}).to('.sc_fragments .coment .coment_bg', 1, {
  backgroundColor: '#4FA778'
}).to('.sc_fragments .coment .coment_bg', 1, {
  backgroundColor: '#E03122'
}).to('.sc_fragments .coment .coment_bg', 1, {
  backgroundColor: '#0000F4'
}).to('.sc_fragments .coment .coment_bg', 1, {
  backgroundColor: '#855CFE'
})

fragmentTl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc_fragments",
    start: "80% 0%",
    end: "100% 100%",
    scrub: 0,
    //markers: true,
  },
})
fragmentTl4.to('.sc_fragments', {
  background: '#fff'
})

//Review
reviewTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc_review",
    start: "0% 50%",
    end: "50% 50%",
    scrub: 1,
    //markers: true,
  },
})
reviewTl.from('.sc_review .title_wrap .headline .char', {
  transformOrigin: '50% 0%',
  transform: ' translate(0%, 120%) scale(0.7, 2.3)',
  opacity: 0,
  willChange: 'opacity, trasnfrom',
  stagger: {
    each: 0.1,
    amount: 1,
  }
}, 'a')
reviewTl.from('.sc_review .title_wrap .num .char', {
  transformOrigin: '50% 0%',
  transform: ' translate(0%, 120%) scale(0.7, 2.3)',
  opacity: 0,
  willChange: 'opacity, trasnfrom',
  stagger: {
    each: 0.1,
    amount: 1,
  }
}, 'a')


const reviewTl2 = gsap.from('.sc_review .review_list li .review_cont .cont_wrap .char', 2, {
  transformOrigin: '0% 50%',
  transform: 'rotateY(-90deg)',
  opacity: 0,
  paused: true
})

const reviewTl3 = gsap.from('.sc_review .review_list li .review_cont .cont_wrap .client img', 1, {
  transform: 'scale(0.5)',
  opacity: 0,
  paused: true
})

$('.sc_review .review_list li .review_head button').click(function () {
  if ($(this).hasClass('on')) {
    $('.sc_review .review_list li .review_head button').removeClass('on').parent().siblings('.review_cont').stop().slideUp();
  } else {
    $('.sc_review .review_list li .review_head button').removeClass('on').parent().siblings('.review_cont').stop().slideUp();
    $(this).addClass('on').parent().siblings('.review_cont').stop().slideDown();
  }

  reviewTl2.play()
  reviewTl3.play(),

    setTimeout(() => {
      lenis.resize();
    }, 400);
});

//follow
followTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc_follow",
    start: "0% 50%",
    end: "10% 80%",
    scrub: 0,
    //markers: true,
  },
})
followTl.from('.sc_follow .section_title .char', 3, {
  transform: 'translate(0, 1170px)',
  opacity: 0,
  willChange: 'transform, opacity',
  stagger: {
    each: 0.2,
    from: "center",
    // amount: 1,
  },
  ease: "power4.out",
})

$('.social_item').each(function () {
  socialTl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "0% 100%",
      end: "100% 100%",
      // markers: true,
      scrub: 0,
    },
  })
  socialTl.from($(this).find('.sc_follow .social_item .caption .char'), {
    transformOrigin: '0% 50%',
    transform: 'translate3d(0,0,-60px) rotateY(-90deg)',
    opacity: 0,
    willChange: 'transform',
    stagger: 0.1
  }, 'a')
})

//Feedback
$('.sc_feedback .feedback_form .feedback_input .cate').click(function () {
  $(this).toggleClass('on')
})

feedbackTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc_feedback",
    start: "0% 90%",
    end: "100% 100%",
    scrub: 0,
    //markers: true,
  },
})
feedbackTl.from('.sc_feedback .section_title .char',1, {
  transform: 'translate(0, 1170px)',
  opacity: 0,
  willChange: 'transform, opacity',
  stagger: {
    amount: .2
  },
  ease: "back.inOut(2)",
}, 'a')
feedbackTl.from('.sc_feedback .feedback_form .txt .char', {
  transformOrigin: '50% 0%',
  transform: 'translate(0, 120%) scale(0.7, 2.3)',
  opacity: 0,
  willChange: 'transform, opacity',
  stagger: {
    each: 0.03,
    amount: 1,
  },
  ease: "back.inOut(2)",
}, 'a')
feedbackTl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc_feedback",
    start: "80% 100%",
    end: "100% 100%",
    scrub: 0,
    markers: true,
  },
})
feedbackTl2.to('.sc_feedback .section_title .color', {
  color: 'rgb(224,49,34)'
})

feedbackTl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc_feedback",
    start: "35% 0%",
    end: "100% 50%",
    scrub: 0,
    // markers: true,
  },
})
feedbackTl3.to('.sc_feedback', {
  opacity: 0
}, 'a')
feedbackTl3.to('body', {
  background: 'rgb(5,5,5)'
}, 'a')

//footer
mm.add("(min-width: 901px)", () => {
  footerTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer",
      start: "0% 80%",
      end: "100% 100%",
      scrub: 0,
      //markers: true,
    },
  })
  footerTl.from('.footer .inner .col_left .tit .char', {
    transformOrigin: '50% 0%',
    transform: 'translate(0, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'transform, opacity',
    stagger: 0.01,
    ease: "back.inOut(2)",
  }, 'a')
  footerTl.from('.footer .inner .col_left .email .char', {
    transformOrigin: '50% 0%',
    transform: 'translate(0, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'transform, opacity',
    stagger: 0.01,
    ease: "back.inOut(2)",
  }, 'a')
  footerTl.from('.footer .inner .col_right .txt_box .char', {
    transformOrigin: '50% 0%',
    transform: 'translate(0, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'transform, opacity',
    stagger: 0.01,
    ease: "back.inOut(2)",
  }, 'a')
  footerTl.from('.footer .inner .col_right .sns_list li p .char', {
    transformOrigin: '50% 0%',
    transform: 'translate(0, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'transform, opacity',
    stagger: 0.01,
    ease: "back.inOut(2)",
  }, 'a+=1')
})

//cursor
var cursor = $(".cursor");
var radius = cursor.width() / 2

var posX = 0,
  posY = 0;
var mouseX = 0,
  mouseY = 0;

$(window).on("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;

  gsap.to(cursor, 1, {
    css: {
      left: mouseX - radius,
      top: mouseY - radius
    }
  });

  gsap.to('.sc_main .main_video', {
    transform: `translate(${mouseX/10}px, ${mouseY/10}px)`
  })
  gsap.to('.all_menu .img_wrap', {
    css: {
      left: mouseX - radius,
      top: mouseY - radius,
      // opacity: 1,
      // visibility: 'visible'
    }
  })
  $('.all_menu .gnb').hover(function () {
    $('.img_wrap').addClass('show')
  }, function () {
    $('.img_wrap').removeClass('show')
  })

})

$('a, button').hover(function () {
  $('.cursor').css('transform', 'scale(5,5)')
}, function () {
  $('.cursor').css('transform', 'scale(1,1)')
})

//allmenu
const transitionTl = gsap.timeline({
  paused: true,
  onReverseComplete:function(){
    $('.all_menu').removeClass('open')
  }
})
transitionTl.to(".transition", {
  duration: 1.4,
  ease: "power2.inOut",
  scale: 2.7,
  rotate: -90,
  backgroundColor: "#000",
  zIndex: 99
}, 0).to(".transition_line", {
  translateX: "20%",
  duration: 1,
  ease: "power1.inOut",
  stagger: .04
}, 0).to(".transition_line", {
  opacity: 1,
  duration: 1,
  ease: "power1.in"
}, 0).to(".transition_line", {
  translateX: "60%",
  duration: 1,
  ease: "power1.inOut",
  stagger: .04
}, 1).to('.all_menu .transition', {
  display: 'none'
}, 'a').to('.all_menu .inner', {
  left: 0,
}, 'a').from('.all_menu .logo', {
  willChange: 'opacity, transform',
  opacity: 0,
  yPercent: 120,
  scaleY: 2.3,
  scaleX: .7,
  transformOrigin: '50% 0%'
}, 'b').from('.all_menu .btn_close', {
  willChange: 'opacity',
  opacity: 0,
  scaleY: 2,
  scaleX: 2,
}, 'b').from('.all_menu .gnb ul li a', {
  willChange: 'opacity, transform',
  opacity: 0,
  yPercent: 120,
  scaleY: 2.3,
  scaleX: .7,
  transformOrigin: '50% 0%'
}, 'b')


$('.all_menu .gnb ul li a').click(function(e){
  e.preventDefault();

  targetName = $(this).data('target');

  transitionTl.reverse();
  lenis.scrollTo(targetName);
})


$('.btn_allMenu').click(function () {
  transitionTl.play();
  $('.all_menu').addClass('open')
})
$(".btn_close").click(function () {
  transitionTl.reverse();
  // $('.all_menu').removeClass('open')
})
