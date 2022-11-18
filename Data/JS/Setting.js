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
  }