function openTab(evt, TabMenuName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(TabMenuName).style.display = "block";
    evt.currentTarget.className += " active";
}


var vHideAllDiv = 0;
function HideAllDiv() {
  var DDaysLove = document.getElementById('iDivOne');
  var DMenu = document.getElementById('DMenu');

  vHideAllDiv++;

  if (vHideAllDiv == 1) {
    DMenu.style.opacity = "0" ;
  } else {
    if (vHideAllDiv == 2) {
      DDaysLove.style.opacity = "0" ;
    } else {
      vHideAllDiv = 0;
      DDaysLove.style.opacity = "1";
    DMenu.style.opacity = "" ;
    }
  }
}



var vHieuUng = document.getElementById('vHieuUng');

function FnHieuUng() {
    var OptHieuUng = document.getElementById('OptHieuUng').value;
    if (OptHieuUng == 0) {
        vHieuUng.style.display = 'none'
    }
    if (OptHieuUng == 1) {
        vHieuUng.style.display = 'block'
    }   
}


// Chọn Trang Phục
  var vIMGCouple = document.getElementById("iIMGCouple"); 
  function FnSkin() {
 
    var Skin = document.querySelector('input[name="Skin"]:checked').value;

    if (Skin == 0) {
      vIMGCouple.src =  "./Data/IMG/Skins/Skin1.png";
    }
    if (Skin == 1) {
      vIMGCouple.src = "./Data/IMG/Skins/Skin2.png";
    }
    if (Skin == 2) {
      vIMGCouple.src = "./Data/IMG/Skins/Skin3.png";
    }
    if (Skin == 3) {
      vIMGCouple.src = "./Data/IMG/Skins/Skin4.png";
    }
  }
  
  // Chọn Hình Nền

  function FnBackground() {
 
    var Background = document.querySelector('input[name="Background"]:checked').value;

    if (Background == 0) {
      document.body.style.backgroundImage =  "none";
    }
    if (Background == 1) {
      document.body.style.backgroundImage = "url(/Data/IMG/Background/BG1.jpg)";
    }
    if (Background == 2) {
      document.body.style.backgroundImage = "url(/Data/IMG/Background/BG2.jpg)";
    }
    if (Background == 3) {
      document.body.style.backgroundImage = "url(/Data/IMG/Background/BG3.jpeg)";
    }
    if (Background == 4) {
      document.body.style.backgroundImage = "url(/Data/IMG/Background/BG4.jpg)";
    }
  }

    // Chọn Nhạc Nền

    function FnMusic() {
 
      var MusicBG = document.querySelector('input[name="Music"]:checked').value;


      if (MusicBG == 0) {
        pauseAudio();
      }
      if (MusicBG == 1) {
        vMusicBG.src = "./Data/Music/8Letters.mp3";
        playAudio();
      }
      if (MusicBG == 2) {
        vMusicBG.src = "./Data/Music/MatMoc.mp3";
        playAudio();
      }
      if (MusicBG == 3) {
        vMusicBG.src = "./Data/Music/TheGioiTrongEm.mp3"
        playAudio();
      }
      if (MusicBG == 4) {
        vMusicBG.src = "./Data/Music/InsideTheLines.mp3"
        playAudio();
      }
      if (MusicBG == 5) {
        vMusicBG.src = "./Data/Music/TropicLove.mp3"
        playAudio();
      }
      if (MusicBG == 6) {
        vMusicBG.src = "./Data/Music/DuskTillDawn.mp3"
        playAudio();
      }
      
      
    }


  var vMusicBG = document.getElementById("MusicBG");

  
  function playAudio() { 
    vMusicBG.play(); 
  } 
  
  function pauseAudio() { 
    vMusicBG.pause(); 
  } 
