console.log('hello me');
let headerImg = document.getElementsByClassName('header-img');
let asideImgs = document.getElementsByClassName('aside-img');
let headerTexts = document.querySelectorAll('.header-texts > *');
let headerP = document.querySelectorAll('.header-texts p');
let headerH1 = document.querySelectorAll('.header-texts h1');
let headerIsVisable = true;
function hideHeader(){
  headerIsVisable = false;
  
  anime({
    targets: headerImg,
    opacity: 0,
    duration: 800,
    easing: 'linear'
  })
  anime({
    targets: headerH1,
    opacity: 0,
    translateY: -100,
    duration: 1000,
    easing: 'linear'
  })
  anime({
    targets: headerP,
    opacity: 0,
    translateY: -50,
    duration: 1000,
    easing: 'linear'
  })
}
function showHeader(){
  headerIsVisable = true;
  
  anime({
    targets: headerImg,
    opacity: 1,
    duration: 800,
    delay: 200,
    easing: 'linear'
  })
  anime({
    targets: headerTexts,
    opacity: 1,
    translateY: 0,
    duration: 1000,
    easing: 'linear'
  })
}
function headerChecker(){
  console.log(document.documentElement.scrollTop);
  if(document.documentElement.scrollTop >= 1 && headerIsVisable){
    hideHeader();
  } else if(!headerIsVisable && document.documentElement.scrollTop === 0) {
    showHeader();
  }
}

addEventListener('scroll', headerChecker);