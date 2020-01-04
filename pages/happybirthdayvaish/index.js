/*SHADOW*/
var shadow = $('#shadow');
var shadowTween = TweenMax.fromTo(shadow, .5,{scale : 1.1},
  {
    scale : .9, 
    transformOrigin : "center",
    ease: Power1.easeOut,
    yoyo : true,
    repeat : -1
  });
/*OSCILLATION*/
var oscillation = $(".oscillation"); 
var oscillationTl = new TimelineMax({repeat:-1});
oscillationTl.to(oscillation, .5, {rotation:-7, top : -15, transformOrigin: "center",ease: Power1.easeOut})
             .to(oscillation, .5, {rotation:0, top : 0, transformOrigin: "center",ease: Power1.easeIn})
             .to(oscillation, .5, {rotation:7, top : -15, transformOrigin: "center",ease: Power1.easeOut})
             .to(oscillation, .5, {rotation:0, top : 0, transformOrigin: "center",ease: Power1.easeIn});
/*STARS*/
var stars = $(".stars"); 
var starsTl = new TimelineMax({repeat:-1, repeatDelay:1/2});
starsTl.staggerFromTo(stars, 1/2, {rotation:0, scale:0, transformOrigin: "center",ease: Power1.easeOut},{rotation:480, scale:1, transformOrigin: "center",ease: Power1.easeOut,onComplete:starsBackTL,onCompleteParams:["{self}"]},1);
function starsBackTL(el) {
  TweenMax.to(el.target, 1/2, {rotation:780, scale:0,ease: Power1.easeOut})
}

/*YELLOW CIRCLES*/
var circlesYellow = $(".circles--yellow"); 
var circlesYellowTl = new TimelineMax({repeat:-1, repeatDelay : .5})
 .set(circlesYellow, {scale : 0, transformOrigin: "center",ease: Power1.easeInOut})
 .to(circlesYellow, .25,{scale : 1, transformOrigin: "center",ease: Power1.easeInOut})
 .to(circlesYellow, .25, {scale : 0, transformOrigin: "center",ease: Power1.easeInOut})
 .to(circlesYellow, .25,{scale : 1, transformOrigin: "center",ease: Power1.easeInOut})
 .to(circlesYellow, .25, {scale : 0, transformOrigin: "center",ease: Power1.easeInOut})
 .to(circlesYellow, .25,{scale : 1, transformOrigin: "center",ease: Power1.easeInOut})
 .to(circlesYellow, .25, {scale : 0, transformOrigin: "center",ease: Power1.easeInOut});

/*PURPLE CIRCLES TOP*/
var circlePurple = $(".circle--purple__top"); 
var circlePurpleTM = new TweenMax.to(circlePurple, 1/3,{scale : 0, transformOrigin: "center",ease: Power1.easeInOut, yoyo:true, repeat:-1});

/*PURPLE CIRCLES BOTTOM*/
var circlePurpleBot = $(".circle--purple__bottom"); 
var circlePurpleBotTL = new TimelineMax({repeat:-1,repeatDelay:2/3, delay:2/3})
.set(circlePurpleBot, {scale : 0, transformOrigin: "center",ease: Power1.easeInOut})
.to(circlePurpleBot, 1/3,{scale : 1, transformOrigin: "center",ease: Power1.easeInOut})
.to(circlePurpleBot, 1/3,{scale : 0, transformOrigin: "center",ease: Power1.easeInOut})
.to(circlePurpleBot, 1/3,{scale : 1, transformOrigin: "center",ease: Power1.easeInOut})
.to(circlePurpleBot, 1/3,{scale : 0, transformOrigin: "center",ease: Power1.easeInOut});

/*PUPIL*/
var pupil = $(".pupil"); 
var pupilTL = new TimelineMax({repeat:-1, yoyo: true})
.set(pupil, {y:-1, transformOrigin: "center",ease: Power1.easeOut})
.to(pupil, .5,{y: 4, transformOrigin: "center",ease: Power1.easeOut});

/*TENTACLES*/
var tentacles = $(".tentacles");
var tentaclesTL = new TimelineMax({repeat : -1, repeatDelay: 1/3})
.staggerFromTo(tentacles, 1/3, {y:-5, transformOrigin: "center",ease: Power1.easeOut},{y:-25, transformOrigin: "center",ease: Power1.easeIn,onComplete:tentaclesBackTL,onCompleteParams:["{self}"]},1/3);
function tentaclesBackTL(el) {
  TweenMax.to(el.target, 1/3, {y:-5,ease: Power1.easeOut})
}

/*PLATE*/
var plate = $("#plate"); 
var plateTM = new TweenMax.to(plate, 1/3,{y : -7, transformOrigin: "center",ease: Power1.easeOut, yoyo:true, repeat:-1});
/*PLATE*/
var cake = $("#cake"); 
var cakeTM = new TweenMax.to(cake, 1/3,{y : -15, transformOrigin: "center",ease: Power1.easeOut, yoyo:true, repeat:-1});
/*candle*/
var candle = $("#candle"); 
var candleTM = new TweenMax.to(candle, 1/3,{y : -25, transformOrigin: "center",ease: Power1.easeOut, yoyo:true, repeat:-1});
/*flame*/
var flame = $("#flame"); 
var flameTM = new TweenMax.to(flame, 1/3,{y : -25, rotation: -60, transformOrigin: "5 10",ease: Power1.easeOut, yoyo:true, repeat:-1});
/*flame*/
var balloon = $("#balloon--group"); 
var balloonTM = new TweenMax.to(balloon, 1/3,{y : -20, transformOrigin: "5 10",ease: Power1.easeOut, yoyo:true, repeat:-1});
/*tentacleCurvedLeft*/
var tentacleCurvedLeft = $(".curved"); 
var tentacleCurvedLeftTM = new TweenMax.staggerFromTo(tentacleCurvedLeft, 1/3,{strokeDasharray:390, strokeDashoffset:200,ease: Power1.easeIn},{strokeDasharray:390, strokeDashoffset:285,ease: Power1.easeOut, yoyo:true, repeat:-1}, 1/3);