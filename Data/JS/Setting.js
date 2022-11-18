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