const popupModal = document.querySelector(".popup");
const popupOverlay = document.querySelector(".pop-overlay");
const game = document.querySelector(".game");
const main_message_container = document.querySelector(".main-message-container")
const fullscreen = document.querySelector(".fullscreen-overlay");
//loader functions

const loader = document.querySelector(".loader-container");
const container = document.querySelector(".game");
// عند بدء تحميل الوسائط
container.addEventListener("loadstart", function () {
  container.style.display = "none";
  loader.style.display = "block"; // عرض المؤشر
});

// عند تحميل البيانات الفعلية
container.addEventListener("loadeddata", function () {
  container.style.display = "block";
  loader.style.display = "none"; // عرض المؤشر
});

// يمكنك أيضًا إضافة حدث للتحقق من حالة التحميل إذا كنت تريد
container.addEventListener("error", function () {
  loader.style.display = "none"; // إخفاء المؤشر في حال وجود خطأ
  alert("Error loading video");
});

//===========SOUND PLAY

function soundPlay(el) {
  const audio = new Audio(el);
  audio.play();
}

const data = [
  {
    main_title: "../media/images/whiteImg/title1.svg",
    sub_title: "../media/images/sub-title3.svg",
    main_img: "../media/images/img5.png",
    fullImg: "../media/images/fullimg/img5-s.png",
    dragCardsData: [
      {
        sound: "sounds/1.mp3",
        imgbg: "../media/images/puzzle1.png",
        imgsm: "images/4/puzzle1.png",
        data: "f",
        spanImg: "../media/images/whiteImg/1.svg",
      },
      {
        sound: "sounds/4.mp3",
        imgsm: "../media/images/whiteImg/puzzle1.png",
        imgbg: "media/images/puzzle1.png",
        data: "f",
        spanImg: "../media/images/whiteImg/4.svg",
      },
      {
        sound: "sounds/5.mp3",
        imgsm: "media/images/puzzle1.png",
        imgbg: "media/images/puzzle1.png",
        data: "t",
        spanImg: "../media/images/whiteImg/0.svg",
        soundSrc: "../media/audios/5.mp3",
      },
    ],
  },
  {
    main_title: "../media/images/whiteImg/title1.svg",
    sub_title: "../media/images/sub-title2.svg",
    main_img: "../media/images/img3.png",
    fullImg: "../media/images/fullimg/img3-s.png",
    dragCardsData: [
      {
        sound: "sounds/1.mp3",
        imgbg: "../media/images/puzzle3.png",
        imgsm: "images/4/puzzle1.png",
        data: "t",
        spanImg: "../media/images/whiteImg/3.svg",
        soundSrc: "../media/audios/3.mp3",
      },
      {
        sound: "sounds/4.mp3",
        imgbg: "../media/images/puzzle3.png",
        imgsm: "images/4/puzzle1.png",
        data: "f",
        spanImg: "../media/images/whiteImg/1.svg",
      },
      {
        sound: "sounds/5.mp3",
        imgbg: "../media/images/puzzle3.png",
        imgsm: "images/4/puzzle1.png",
        data: "f",
        spanImg: "../media/images/whiteImg/0.svg",
      },
    ],
  },
  {
    main_title: "../media/images/whiteImg/title1.svg",
    sub_title: "../media/images/sub-title2.svg",
    main_img: "../media/images/img4.png",
    fullImg: "../media/images/fullimg/img4-s.png",
    dragCardsData: [
      {
        sound: "sounds/1.mp3",
        imgbg: "../media/images/puzzle2.png",
        imgsm: "images/4/puzzle1.png",
        data: "t",
        spanImg: "../media/images/whiteImg/4.svg",
        soundSrc: "../media/audios/4.mp3",
      },
      {
        sound: "sounds/5.mp3",
        imgbg: "../media/images/puzzle2.png",
        imgsm: "images/4/puzzle1.png",
        data: "f",
        spanImg: "../media/images/whiteImg/0.svg",
      },
      {
        sound: "sounds/4.mp3",
        imgbg: "../media/images/puzzle2.png",
        imgsm: "images/4/puzzle1.png",
        data: "f",
        spanImg: "../media/images/whiteImg/1.svg",
      },
    ],
  },
  {
    main_title: "../media/images/title.svg",
    sub_title: "../media/images/sub-title1.svg",
    main_img: "../media/images/img1.png",
    fullImg: "../media/images/fullimg/img1-s.png",
    dragCardsData: [
      {
        sound: "sounds/4.mp3",
        imgbg: "../media/images/puzzle4.png",
        imgsm: "images/4/puzzle1.png",
        data: "f",
        spanImg: "../media/images/1.svg",
      },
      {
        sound: "sounds/5.mp3",
        imgbg: "../media/images/puzzle4.png",
        imgsm: "images/4/puzzle1.png",
        data: "t",
        spanImg: "../media/images/3.svg",
        soundSrc: "../media/audios/1.mp3",
      },
      {
        sound: "sounds/1.mp3",
        imgbg: "../media/images/puzzle4.png",
        imgsm: "images/4/puzzle1.png",
        data: "f",
        spanImg: "../media/images/2.svg",
      },
    ],
  },
  {
    main_title: "../media/images/title.svg",
    sub_title: "../media/images/sub-title1.svg",
    main_img: "../media/images/img1.png",
    fullImg: "../media/images/fullimg/img2-s.png",
    dragCardsData: [
      {
        sound: "sounds/1.mp3",
        imgbg: "../media/images/puzzle5.png",
        imgsm: "images/4/puzzle1.png",
        data: "t",
        spanImg: "../media/images/0.svg",
        soundSrc: "../media/audios/2.mp3",
      },
      {
        sound: "sounds/5.mp3",
        imgbg: "../media/images/puzzle5.png",
        imgsm: "images/4/puzzle1.png",
        data: "f",
        spanImg: "../media/images/3.svg",
      },
      {
        sound: "sounds/4.mp3",
        imgbg: "../media/images/puzzle5.png",
        imgsm: "images/4/puzzle1.png",
        data: "f",
        spanImg: "../media/images/1.svg",
      },
    ],
  },
];

 let arr = Object.keys(data);


shuflle(arr)

function shuflle(arr){
  let current = arr.length,
  temp,
  random;

  while(current > 0){
    random = Math.floor(Math.random() * current);
    current--;
    temp = arr[current];
    arr[current] = arr[random]
   
    arr[random] = temp
   
  }


}

console.log(arr);

let currentPage = 0,
  img_container = document.querySelector(".image-container");
let dragableItems = document.querySelectorAll(".drag-item");
let dropItem = document.querySelector(".drop-item");
const main_titleImg = document.querySelector(".main-title");
const sub_titleImg = document.querySelector(".sub-title");
let selectedItem;
let wrongAnswers = 0;
let message_icon = document.getElementById("message-icone")
let feedback = document.getElementById("feedback")
let result_percent = document.querySelector(".result-container span")

function changeImg() {


  img_container.style.backgroundImage = `url(${data[arr[currentPage]].main_img})`;

  main_titleImg.style.backgroundImage = `url(${data[arr[currentPage]].main_title})`;

  sub_titleImg.style.backgroundImage = `url(${data[arr[currentPage]].sub_title})`;

  dragableItems.forEach((item, index) => {

    item.style.backgroundImage = `url(${data[arr[currentPage]].dragCardsData[index].imgbg})`; //ok

    item.setAttribute("data", data[arr[currentPage]].dragCardsData[index].data); //ok

    item.querySelectorAll("span").forEach((span) => {
      span.style.backgroundImage = `url(${data[arr[currentPage]].dragCardsData[index].spanImg})`; //ok
    });
  });
}

changeImg();

function rateAnswer() {
  let percent = (wrongAnswers / data.length) * 100;
  console.log('The percent is: ' + percent.toFixed(2) + '%'); // تحسين عرض النسبة بشكل أكثر دقة
  let resultPercet = 100 - percent;
  // إزالة الكلاسات المضافة سابقًا لتجنب التكرار

  // تحديد الرسالة بناءً على النسبة المئوية للإجابات الخاطئة
  if (percent < 20) {
     console.log('Excellent');
     message_icon.classList.add("wellDonw-icon");
     feedback.classList.add("wellDonw");
    
  } else if (percent >= 20 && percent < 70) { // تعديل الشرط ليكون أكبر أو يساوي 20
     console.log('Good');
     message_icon.classList.add("good-icon");
     feedback.classList.add("good");
  } else {
     console.log('Try Again');
     message_icon.classList.add("tryAgain-icon");
     feedback.classList.add("tryAgain");
  }

  // عرض النتيجة في HTML
  result_percent.innerHTML = resultPercet.toFixed(0) + '%'; // عرض النسبة مع دقة عشريتين
}

rateAnswer()
function checkAnswer() {
  console.log("start check on => ", selectedItem);

  if (selectedItem.getAttribute("data") === dropItem.getAttribute("data")) {
    // التحقق إذا كان randomNum أقل من آخر عنصر
    console.log("this is less than", data.length - 1);

    img_container.style.backgroundImage = `url(${data[arr[currentPage]].fullImg})`;
    data;

    dragableItems.forEach((item, index) => {
      if (item.getAttribute("data") == "t") {
        soundPlay(`${data[arr[currentPage]].dragCardsData[index].soundSrc}`);
      }
    });

    setTimeout(() => {
      if (currentPage < data.length - 1) {
        currentPage++;
        changeImg();
      } else {
         main_message_container.style.display = 'block'
       rateAnswer()
       
        
      }

      
    }, 1400);
  } else {
    soundPlay("../media/audios/error.mp3");
    console.log("false");
    wrongAnswers+=1
    rateAnswer()

    
  }
}

interact(".drag-item").draggable({
  listeners: {
    start(event) {
      const item = event.target;
      selectedItem = item;
      // إضافة الكلاس لتكبير العنصر عند بدء السحب
      item.classList.add("dragging");
    },
    move(event) {
      const target = event.target;

      // الحصول على إحداثيات X و Y الحالية أو تعيينها إذا كانت غير موجودة
      const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
      const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

      // تحريك العنصر بناءً على إحداثيات الماوس
      target.style.transform = `translate(${x}px, ${y}px)`;

      // تخزين الإحداثيات لتتبع التحركات المستقبلية
      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
    },
    end(event) {
      const item = event.target;

      selectedItem = null;
      // إزالة الكلاس عند إنهاء السحب
      item.classList.remove("dragging");
    },
  },
});

interact(".drop-item").dropzone({
  ondrop(event) {
    const dropzone = event.target;
    console.log(dropzone);

    // تحديث موضع العنصر في منطقة الإسقاط
    const target = event.relatedTarget;
    target.style.transform = "none"; // إعادة التعيين بعد السحب
    target.setAttribute("data-x", 0);
    target.setAttribute("data-y", 0);
    checkAnswer();
  },
  ondropdeactivate(event) {
    const target = event.relatedTarget;

    // في حال لم يتم إسقاط العنصر في منطقة الإسقاط، إرجاعه إلى موقعه الأصلي
    target.style.transform = `translate(0px,0px)`;

    // إعادة تعيين الإحداثيات المخزنة
    target.setAttribute("data-x", 0);
    target.setAttribute("data-y", 0);
  },
});

//========= check screen
const checkScreen = () => {
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  const isMobile = window.innerWidth < 768 && isPortrait;
  return isMobile;
};
window.addEventListener("load", () => {
  const is_mobile = checkScreen();
  if (is_mobile) {
    popupModal.style.visibility = "visible";
    popupOverlay.style.visibility = "visible";
  } else {
    popupModal.style.visibility = "hidden";
    popupOverlay.style.visibility = "hidden";
    game.style.visibility = "visible";
  }
});
document.addEventListener("contextmenu", function (event) {
  var target = event.target;
  if (target.tagName === "IMG") {
    event.preventDefault();
  }
  return false;
});

window.addEventListener("orientationchange", function () {
  const is_mobile = checkScreen();
  if (window.orientation === 90 || window.orientation === -90) {
    if (is_mobile) {
      game.style.visibility = "visible";
      popupModal.style.visibility = "hidden";
      popupOverlay.style.visibility = "hidden";
    } else {
      popupModal.style.visibility = "visible";
      popupOverlay.style.visibility = "visible";
    }
  } else {
    popupModal.style.visibility = "visible";
    popupOverlay.style.visibility = "visible";
  }
});


function openFullscreen() {
  fullscreen.classList.add("hide");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    // Firefox
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    // Chrome, Safari, Opera
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    // IE/Edge
    elem.msRequestFullscreen();
  }
}

var elem = document.documentElement;

fullscreen.addEventListener("dblclick", openFullscreen);

window.addEventListener("load", () => {
  // إخفاء الـ Loader
  loader.style.display = "none";
});
