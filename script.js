
let headerImg = document.getElementsByClassName('header-img');
let asideImgs = document.getElementsByClassName('aside-img');
let headerTexts = document.querySelectorAll('.header-texts > *');
let headerP = document.querySelectorAll('.header-texts p');
let headerH1 = document.querySelectorAll('.header-texts h1');
let headerIsVisable = true;

let pathNum = document.querySelectorAll('#logo path').length;
anime({
  targets: '#logo path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 300,
  delay: (el, i) => i*200
});
anime({
  targets: headerTexts,
  delay: 200*pathNum,
  opacity: 1,
  translateY: 0,
  duration: 500,
  easing: 'linear'
})

function hideHeader(){
  headerIsVisable = false;
  anime({
    targets: '#logo path',
    strokeDashoffset: anime.setDashoffset,
    easing: 'easeInOutSine',
    duration: 1000,
  });
  anime({
    targets: headerImg,
    opacity: 0,
    duration: 400,
    easing: 'linear'
  })
  anime({
    targets: headerP,
    opacity: 0,
    translateY: -50,
    duration: 500,
    easing: 'linear'
  })
}
function showHeader(){
  headerIsVisable = true;
  
  anime({
    targets: headerImg,
    opacity: 1,
    duration: 400,
    delay: 200,
    easing: 'linear'
  })
  anime({
    targets: '#logo path',
    strokeDashoffset: 0,
    easing: 'easeInOutSine',
    duration: 300,
    delay: (el, i) => i*200
  });
  anime({
    targets: headerTexts,
    opacity: 1,
    translateY: 0,
    duration: 500,
    easing: 'linear',
    delay: 200*pathNum
  })
}
function headerChecker(){
  if(document.documentElement.scrollTop >= 1 && headerIsVisable){
    hideHeader();
  } else if(!headerIsVisable && document.documentElement.scrollTop === 0) {
    showHeader();
  }
}

addEventListener('scroll', headerChecker);



$(document).on("click","#go",function(){
  $("#go").remove();
  $(".obs").removeClass("ctb")
  .append("<img class ='myPic' src='https://www.teknikmagasinet.se/storage/ma/62a6190ec20741c1850677c0615b9aca/686abc06eb984a0ba6647d944d737008/800-1467-0-png.Png/0C52EEBA81BD329BA65C34B387DF399DA0DA2DC2/102796.png'>")
  .append("<h2 class='txt mtxt1'>Iphone 6</h2><br><h2 class='txt mtxt2'>4.7-inch Screen</h2><br><h2 class='txt mtxt3'>128GB</h2>");
  
  
  anime({
    targets: '.myPic',
    translateX: 1350,
    opacity: [0,1],
    scale: 1,
    duration: 5500,
    rotate: '3turn'
  });
  
  var tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 550,
  });
    
  tl
  .add({
    targets: '.mtxt1',
    translateX: 450,
    opacity:[0,1]
  })
  .add({
    targets: '.mtxt2',
    translateX: 450,
    opacity:[0,1]
  })
  .add({
    targets: '.mtxt3',
    translateX: 450,
    opacity:[0,1]
  });
});

  

