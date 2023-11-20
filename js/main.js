// DOMContentLoaded, load, beforeunload, unload
/*
const windowInnerWidth = window.innerWidth
const windowInnerHeight = window.innerHeight

console.log(windowInnerWidth)
console.log(windowInnerHeight)
*/

$('html, body').css({
  overflow: 'hidden',
  height: '100%'
});


window.onload =function() {
  $(document).ready(function() {
    window.setTimeout(function () {
      $('html, body').css({  overflow: 'auto',
      height: 'auto'})
      $("#start-animation").addClass("hidden");

      window.setTimeout(function () {
        $("#start-animation").css({display: 'none'})
      },500)

    }, 0);
  })

}


//Всплывающие cards Section2

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  
  let elementsTwo =  [ 
                      document.querySelectorAll('.modes-section__card'),
                      document.querySelectorAll('.modes-section__card-two'),
                      document.querySelectorAll('.weapons-section__card-first-animation-card'),
                      document.querySelectorAll('.weapons-section__card-second-animation-card'),
                      document.querySelectorAll('.weapons-section__promising-veapon'),
                      document.querySelectorAll('.photo-section__first-photo'),
                      document.querySelectorAll('.photo-section__second-photo'),
                      document.querySelectorAll('.events-section__bottom-block'),
                      document.querySelectorAll('.events-section__form-and-anchor'),
                      document.querySelectorAll('.price-section__combo-card-first'),
                      document.querySelectorAll('.price-section__combo-card-second'),
                      document.querySelectorAll('.price-section__combo-card-third')
                    ];

  for (let elm of elementsTwo) {
    for (let point of elm){
      observer.observe(point);
    }
  }

  // NAV HEIGHT

  $(document).ready(function() {
    $(window).scroll(function() {    
      let scroll = $(window).scrollTop();
  
      if (scroll >= 200) {
        $("#header").addClass("scrolled");
      } else {
        $("#header").removeClass("scrolled");
      }
    });
  });

  // NAV LINKS

 window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY + 100;
  
    if (window.innerWidth > 768) {
      document.querySelectorAll('.section').forEach((el, i) => {
        if (el.offsetTop - document.querySelector('.header__nav').clientHeight <= scrollDistance) {
          document.querySelectorAll('.header__nav a').forEach((el) => {
            if (el.classList.contains('active-nav-a')) {
              el.classList.remove('active-nav-a');
            }
          });
      
          $('.header__nav').children()[i].classList.add('active-nav-a');
        }
      });
    }
  });


  // bookmark

 let bookmarkWidth = $(".modes-section__bookmark").css('width');
 bookmarkWidth = Number(bookmarkWidth.substring(0, bookmarkWidth.length - 2));

 if (document.documentElement.clientWidth > 1150) {
    window.addEventListener('scroll', () => {
      let scrollDistance = window.scrollY;
      $(".modes-section__bookmark").css('width', `${Math.round(bookmarkWidth  + scrollDistance/7)}`)
    })
 }


// waves
let waves = document.querySelector('#wave');
let waves2 = document.querySelector('#wave2');
let waves3 = document.querySelector('#wave3');

window.addEventListener('scroll', function () {
  let scroll = window.scrollY/15;
  let newWave = 
  `M0 
  163V69.3613C21.3733 ${67.386 + scroll} ${42.7465 + scroll} ${65.4107 + scroll} 66 64.5753C89.2535 ${63.7399 + scroll} ${114.387 + scroll} ${64.0445 + scroll} ${136 + scroll}
  63.1187C157.613 ${62.1929 + scroll} ${175.705 + scroll} ${60.0366 + scroll} ${205 + scroll}
  63.1187C234.295 ${66.2008 + scroll} ${274.794 + scroll} ${74.5214 + scroll} ${298 + scroll}
  76.8524C321.206 ${79.1834 + scroll} ${327.118 + scroll} ${75.5248 + scroll} ${352 + scroll}
  75.1877C376.882 ${74.8505 + scroll} ${420.735 + scroll} ${77.8348 + scroll} ${445 + scroll}
  78.1009C469.265 ${78.367 + scroll} ${473.943 + scroll} ${75.915 + scroll} ${494 + scroll}
  75.8119C514.057 ${75.7089 + scroll} ${549.492 + scroll} ${77.9549 + scroll} ${578 + scroll}
  75.6039C606.508 ${73.2528 + scroll} ${628.09 + scroll} ${66.3046 + scroll} ${649 + scroll}
  67.4885C669.91 ${68.6724 + scroll} ${690.147 + scroll} ${77.9883 + scroll} ${713 + scroll}
  77.6847C735.853 ${77.3811 + scroll} ${761.323 + scroll} ${67.4579 + scroll} ${786 + scroll}
  68.5289C810.677 ${69.6 + scroll} ${834.563 + scroll} ${81.6652 + scroll} ${859 + scroll}
  80.3898C883.437 ${79.1144 + scroll} ${908.427 + scroll} ${64.4984 + scroll} ${932 + scroll}
  61.0378C955.573 ${57.5773 + scroll} ${977.729 + scroll} ${65.2722 + scroll} ${998 + scroll}
  66.24C1018.27 ${67.2078 + scroll} ${1036.66 + scroll} ${61.4484 + scroll} ${1066 + scroll}
  59.7893C1095.34 ${58.1302 + scroll} ${1135.64 + scroll} ${60.5714 + scroll} ${1162 + scroll}
  65.6157C1188.36 ${70.66 + scroll} ${1200.78 + scroll} ${78.3074 + scroll} ${1219 + scroll}
  80.3898C1237.22 ${82.4723 + scroll} ${1261.25 + scroll} ${78.9897 + scroll} ${1290 + scroll}
  75.1877C1318.75 ${71.3857 + scroll} ${1352.21 + scroll} ${67.2643 + scroll} ${1378 + scroll}
  66.24C1403.79 ${65.2157 + scroll} ${1421.89 + scroll} ${67.2885 + scroll} ${3000 + scroll} 69.3613V163H0Z`

  let newWave2 = `
  M0 163V88.8755C19.1894 ${87.9427 + scroll} ${38.3789 + scroll} ${87.0099 + scroll} ${63 + scroll} 91.0992C87.6211 ${95.1885 + scroll} ${117.674 + scroll} ${104.3 + scroll} ${143 + scroll} 100.982C168.326 ${97.6651 + scroll} ${188.926 + scroll} ${81.919 + scroll} ${217 + scroll} 80.4747C245.074 ${79.0304 + scroll} ${280.624 + scroll} ${91.888 + scroll} ${301 + scroll} 91.5934C321.376 ${91.2988 + scroll} ${326.579 + scroll} ${77.852 + scroll} ${347 + scroll} 78.0039C367.421 ${78.1558 + scroll} ${403.06 + scroll} ${91.9062 + scroll} ${430 + scroll} 92.5817C456.94 ${93.2572 + scroll} ${475.182 + scroll} ${80.8576 + scroll} ${501 + scroll} 82.4514C526.818 ${84.0451 + scroll} ${560.211 + scroll} ${99.6321 + scroll} ${584 + scroll} 101.23C607.789 ${102.827 + scroll} ${621.975 + scroll} ${90.4348 + scroll} ${642 + scroll} 83.1926C662.025 ${75.9504 + scroll} ${687.891 + scroll} ${73.8581 + scroll} ${711 + scroll} 76.7685C734.109 ${79.6789 + scroll} ${754.463 + scroll} ${87.592 + scroll} ${783 + scroll} 89.6167C811.537 ${91.6415 + scroll} ${848.256 + scroll} ${87.7779 + scroll} ${877 + scroll} 84.428C905.744 ${81.0782 + scroll} ${926.511 + scroll} ${78.2421 + scroll} ${948 + scroll} 82.2043C969.489 ${86.1665 + scroll} ${991.7 + scroll} ${96.9269 + scroll} ${1011 + scroll} 96.2879C1030.3 ${95.6489 + scroll} ${1046.69 + scroll} ${83.6105 + scroll} ${1072 + scroll} 78.7451C1097.31 ${73.8798 + scroll} ${1131.54 + scroll} ${76.1876 + scroll} ${1162 + scroll} 81.9572C1192.46 ${87.7268 + scroll} ${1219.13 + scroll} ${96.9582 + scroll} ${1236 + scroll} 97.7704C1252.87 ${98.5827 + scroll} ${1259.93 + scroll} ${90.9758 + scroll} ${1284 + scroll} 86.6518C1308.07 ${82.3277 + scroll} ${1349.16 + scroll} ${81.2865 + scroll} ${1378 + scroll} 82.2043C1406.84 ${83.122 + scroll} ${1423.42 + scroll} ${85.9988 + scroll} ${3000 + scroll} 88.8755V163H0Z
  `
  let newWave3 = `
  M0 163V111.236C21.8481 ${121.381 + scroll} ${43.6962 + scroll} ${131.526 + scroll} ${65 + scroll} 127.11C86.3038 ${122.694 + scroll} ${107.063 + scroll} ${103.716 + scroll} ${131 + scroll} 96.3964C154.937 ${89.077 + scroll} ${182.05 + scroll} ${93.4161 + scroll} ${211 + scroll} 95.7062C239.95 ${97.9964 + scroll} ${270.735 + scroll} ${98.2376 + scroll} ${291 + scroll} 104.334C311.265 ${110.43 + scroll} ${321.009 + scroll} ${122.381 + scroll} ${347 + scroll} 128.49C372.991 ${134.6 + scroll} ${415.231 + scroll} ${134.869 + scroll} ${443 + scroll} 125.385C470.769 ${115.9 + scroll} ${484.069 + scroll} ${96.6626 + scroll} ${506 + scroll} 92.6003C527.931 ${88.5381 + scroll} ${558.494 + scroll} ${99.6512 + scroll} ${582 + scroll} 106.749C605.506 ${113.847 + scroll} ${621.954 + scroll} ${116.931 + scroll} ${643 + scroll} 118.138C664.046 ${119.344 + scroll} ${689.688 + scroll} ${118.675 + scroll} ${711 + scroll} 116.757C732.312 ${114.839 + scroll} ${749.294 + scroll} ${111.673 + scroll} ${778 + scroll} 105.714C806.706 ${99.7547 + scroll} ${847.137 + scroll} ${91.002 + scroll} ${874 + scroll} 95.016C900.863 ${99.03 + scroll} ${914.157 + scroll} ${115.811 + scroll} ${937 + scroll} 121.588C959.843 ${127.366 + scroll} ${992.233 + scroll} ${122.141 + scroll} ${1013 + scroll} 114.687C1033.77 ${107.232 + scroll} ${1042.91 + scroll} ${97.5477 + scroll} ${1066 + scroll} 102.953C1089.09 ${108.359 + scroll} ${1126.13 + scroll} ${128.854 + scroll} ${1157 + scroll} 130.216C1187.87 ${131.578 + scroll} ${1212.58 + scroll} ${113.806 + scroll} ${1232 + scroll} 108.82C1251.42 ${103.833 + scroll} ${1265.53 + scroll} ${111.632 + scroll} ${1287 + scroll} 116.067C1308.47 ${120.502 + scroll} ${1337.28 + scroll} ${121.574 + scroll} ${1364 + scroll} 120.208C1390.72 ${118.842 + scroll} ${1415.36 + scroll} ${115.039 + scroll} ${3000 + scroll} 111.236V163H0Z
  `

  waves.setAttribute('d', newWave)
  waves2.setAttribute('d', newWave2)
  waves3.setAttribute('d', newWave3)
})

/** Img Photo section */

function ZoomPhoto (e) {
  let img = e.target;
  img.classList.toggle("zoom");
  $('.photo-section__first-line')[0].classList.toggle("more-z-index");
}

function ZoomPhotoBottomLine (e) {
  let img = e.target;
  img.classList.toggle("zoomBottom");
  console.log(e.target)
}

/** Nav checkbox*/

function closeNav(){
  $(".checkbox")[0].checked = false;
  console.log($(".checkbox")[0])
}