var Chat = document.getElementById('Chat');
var FigureAvatar = document.getElementById('FigureAvatar');
var FigureName = document.getElementById('FigureName');
var FigureChat = document.getElementById('FigureChat');
var FigureSound = document.getElementById('FigureSound');
var FigureSoundLink = document.getElementById('FigureSoundLink');

var Effect = document.getElementById('Effect');
var LightEffect = document.getElementById('LightEffect');
var RainEffect = document.getElementById('RainEffect');

var imgSwBun = document.getElementById('imgSwBun');
var imgHunqD = document.getElementById('imgHunqD');








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

function OnRainEffect() {
    RainEffect.style.display = 'Block';
    Effect.style.display = 'Block';

}
function OffRainEffect() {
    RainEffect.style.display = 'none';
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
    OffRainEffect();

    FigureAvatar.src = AvatarHunqD;
    FigureName.innerHTML = 'M???nh H??ng';

    var ChatHunqD = Math.floor(Math.random() * 6) + 1
    if (ChatHunqD == 1) {
        FigureChat.innerHTML = 'Em l?? ????? con l???n ng??? nhi???u hahaa ????';
        setTimeout(ChatOff,3000);
    }
    if (ChatHunqD == 2) {
        FigureChat.innerHTML = 'Thy b??? kh??ng l??u l??u ????';
        setTimeout(ChatOff,3000);
    }
    if (ChatHunqD == 3) {
        FigureChat.innerHTML = 'Anh y??u em l???m ???? v??? y??u ???';
        setTimeout(ChatOff,3000);
    }
    if (ChatHunqD == 4) {
        FigureChat.innerHTML = 'Bi???t ??ng Th????ng kh??ng ? <br> <br> Th????ng cho t???m th??n c?? h??n... hehee';

        FigureSoundLink.src = './DataGame/Sounds/Music/ThuongChoTamThan.mp3';
        LoadSound();
        OnLightEffect();
        setTimeout(ChatOff,5000);

    }
    if (ChatHunqD == 5) {
        FigureChat.innerHTML = 'Bi???t ??ng Kh???i kh??ng ? <br> <br> Bi???t... l?? m??nh th??ch nhao... c??n chuy???n xa h??n...  ??? ???';

        FigureSoundLink.src = './DataGame/Sounds/Music/BietLaMinhThichNhau.mp3';
        LoadSound();
        OnLightEffect();
        setTimeout(ChatOff,5000);

    }
    if (ChatHunqD == 6) {
        Action2();
    }
    

}



function ClickSwBun() {
    OffSound();
    ChatOn();
    OffLightEffect();
    OffRainEffect();

    FigureAvatar.src = AvatarSwBun;
    FigureName.innerHTML = 'Thy Thy';

    var ChatSwBun = Math.floor(Math.random() * 5) + 1
    if (ChatSwBun == 1) {
        FigureChat.innerHTML = 'Anh m???i l?? ????? con l???n';
        setTimeout(ChatOff,3000);
    }
    if (ChatSwBun == 2) {
        FigureChat.innerHTML = 'H??ng ??i??n ????';
        setTimeout(ChatOff,3000);
    }
    if (ChatSwBun == 3) {
        FigureChat.innerHTML = 'Em y??u anh nhi???u l???m ?????????????';
        setTimeout(ChatOff,3000);
    }
    if (ChatSwBun == 4) {
        FigureChat.innerHTML = 'Bi???t ??ng Kh???i kh??ng ? <br> <br> Kh???i l??n kh??c nh???c ho??ng c???m bu???n ng??y m??nh bi???t ly ??? ???';

        FigureSoundLink.src = './DataGame/Sounds/Music/KhaiLenKhucNhac.mp3';
        LoadSound();
        OnLightEffect();
        setTimeout(ChatOff,5000);

    }
    if (ChatSwBun == 5) {
        FigureChat.innerHTML = 'Bi???t b?? V??ng kh??ng ? <br> <br> V??ng xe l??n b??nh,ch??o t???m bi???t em, T??nh y??u anh s??? gi??? trong tim n??y??? ???';

        FigureSoundLink.src = './DataGame/Sounds/Music/VongXeLanBanh.mp3';
        LoadSound();
        OnLightEffect();
        setTimeout(ChatOff,5000);

    }


}
