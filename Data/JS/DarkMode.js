
// Dark Mode 
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

// Hiệu ứng trang cài đặt
var Line = document.getElementById('Line');

const darkModeToggle = document.querySelector('#iDarkMode');

const enableDarkMode = () => {
    // 1. Add the class to the body
    document.body.classList.add('darkmode');
    // 2. Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
    document.getElementById("dark-mode-toggle").className = "fa-solid fa-moon";
    
}

const disableDarkMode = () => {
    // 1. Remove the class from the body
    document.body.classList.remove('darkmode');
    // 2. Update darkMode in localStorage 
    localStorage.setItem('darkMode', null);
    document.getElementById("dark-mode-toggle").className = "fa-solid fa-sun";
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
    enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
   
    HieuUngDarkMode();
    setTimeout(CheckDarkMode,500);
   
    function CheckDarkMode() {
        darkMode = localStorage.getItem('darkMode');

        // if it not current enabled, enable it
        if (darkMode !== 'enabled') {
            enableDarkMode();
            // if it has been enabled, turn it off  
        } else {
            disableDarkMode();
        }
    }
   
});


function HieuUngDarkMode() {
    Line.style.animation = 'Line 0.8s alternate';
    setTimeout(OffHieuUngDarkMode, 800);
    
}
function OffHieuUngDarkMode() {
    Line.style.animation = '';
}