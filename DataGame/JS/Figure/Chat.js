var Chat = document.getElementById('Chat');
var FigureAvatar = document.getElementById('FigureAvatar');
var FigureName = document.getElementById('FigureName');
var FigureChat = document.getElementById('FigureChat');
var FigureSound = document.getElementById('FigureSound');
var FigureSoundLink = document.getElementById('FigureSoundLink');
var LightEffect = document.getElementById('LightEffect');
var Effect = document.getElementById('Effect');







var AvatarHunqD = './DataGame/IMG/Figure/HunqD/AvatarHunqD.png';
var AvatarSwBun = './DataGame/IMG/Figure/SwBun/AvatarSwBun.png';

function ChatOn() {
    Chat.style.display = 'Block';
}
function ChatOff() {
    Chat.style.display = 'none';

}



function LoadSound() {
    FigureSound.load();
    OnSound();
}
function OnSound() {
    FigureSound.play();
}
function OffSound() {
    FigureSound.pause();
}

function UnMuteSound(){
    FigureSound.muted = false;;
}
function MuteSound(){
    FigureSound.muted = true;
}

function OnLightEffect() {
    LightEffect.style.display = 'Block';
    Effect.style.display = 'Block';

}
function OffLightEffect() {
    LightEffect.style.display = 'none';
    Effect.style.display = 'none';
    OffSound();
}



function VolSound() {
    var ControlSound = document.getElementById('ControlSound');
    if (ControlSound.className == 'fa-solid fa-volume-high') {
        MuteSound();
        ControlSound.className = 'fa-solid fa-volume-xmark'
    } else {
        UnMuteSound();
        ControlSound.className = 'fa-solid fa-volume-high'
    }
}



function ClickHunqD() {
    OffSound();
    ChatOn();
    OffLightEffect();

    FigureAvatar.src = AvatarHunqD;
    FigureName.innerHTML = 'Mạnh Hùng';

    var ChatHunqD = Math.floor(Math.random() * 5) + 1
    if (ChatHunqD == 1) {
        FigureChat.innerHTML = 'Em là đồ con lợn ngủ nhiều hahaa 🤣';
    }
    if (ChatHunqD == 2) {
        FigureChat.innerHTML = 'Thy bị khùng lêu lêu 😜';
    }
    if (ChatHunqD == 3) {
        FigureChat.innerHTML = 'Anh yêu em lắm đó vợ yêu ❤';
    }
    if (ChatHunqD == 4) {
        FigureChat.innerHTML = 'Biết ông Thương không ? <br> <br> Thương cho tấm thân cơ hàn... hehee';

        FigureSoundLink.src = './DataGame/Sounds/Music/ThuongChoTamThan.mp3';
        LoadSound();
        OnLightEffect();
    }
    if (ChatHunqD == 5) {
        FigureChat.innerHTML = 'Biết ông Khải không ? <br> <br> Biết... là mình thích nhao... còn chuyện xa hơn...  ♫ ♪';

        FigureSoundLink.src = './DataGame/Sounds/Music/BietLaMinhThichNhau.mp3';
        LoadSound();
        OnLightEffect();

    }

}



function ClickSwBun() {
    OffSound();
    ChatOn();
    OffLightEffect();

    FigureAvatar.src = AvatarSwBun;
    FigureName.innerHTML = 'Thy Thy';

    var ChatSwBun = Math.floor(Math.random() * 5) + 1
    if (ChatSwBun == 1) {
        FigureChat.innerHTML = 'Anh mới là đồ con lợn';
    }
    if (ChatSwBun == 2) {
        FigureChat.innerHTML = 'Hùng Khùng 😒';
    }
    if (ChatSwBun == 3) {
        FigureChat.innerHTML = 'Em cũng yêu anh nhiều lắm 🙆‍♀️';
    }
    if (ChatSwBun == 4) {
        FigureChat.innerHTML = 'Biết ông Khải không ? <br> <br> Khải lên khúc nhạc hoàng cầm buồn ngày mình biệt ly ♪ ♫';

        FigureSoundLink.src = './DataGame/Sounds/Music/KhaiLenKhucNhac.mp3';
        LoadSound();
        OnLightEffect();
    }
    if (ChatSwBun == 5) {
        FigureChat.innerHTML = 'Biết bà Vòng không ? <br> <br> Vòng xe lăn bánh,chào tạm biệt em, Tình yêu anh sẽ giữ trong tim này♪ ♫';

        FigureSoundLink.src = './DataGame/Sounds/Music/VongXeLanBanh.mp3';
        LoadSound();
        OnLightEffect();
    }


}
