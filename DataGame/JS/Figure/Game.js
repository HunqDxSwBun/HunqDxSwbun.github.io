var HunqD = document.getElementById('HunqD');
var SwBun = document.getElementById('SwBun');

var YHunqD = 80;
var XHunqD = 50;
function RandomAction() {
    var RandomAction = Math.floor(Math.random() * 2) + 1
    if (RandomAction == 1) {
        Action2();
    }
    if (RandomAction == 2) {
        ClickHunqD();
    }

}

function Action1() {
    HunqD.style.left = 160 + 'px';
    HunqD.style.bottom = 80 + 'px';
    HunqD.style.transition = '2s';

    FigureAvatar.src = AvatarHunqD;
    FigureName.innerHTML = 'Mạnh Hùng';
    FigureChat.innerHTML = 'Vợ ơi có khách ghé thăm.';

    setTimeout(ChatOn, 2500)
    setTimeout(ChatOff, 5500)

    setTimeout(() => {
        setTimeout(ChatOn, 2000)
        SwBun.style.left = 85 + 'px';
        SwBun.style.bottom = 80 + 'px';
        SwBun.style.transition = '2s';

        FigureAvatar.src = AvatarSwBun;
        FigureName.innerHTML = 'Thy Thy';
        FigureChat.innerHTML = 'Em đây em đây. ';
        setTimeout(ChatOff, 5000);
        setTimeout(RandomAction, 10000);
    }, 5500);

}

function Action2() {
    ChatOn();
    FigureAvatar.src = AvatarHunqD;
    FigureName.innerHTML = 'Mạnh Hùng';
    FigureChat.innerHTML = 'Anh đi ra ngoài chút... <br> <br>Tí anh về liền.';
    setTimeout(ChatOff, 2500)
    setTimeout(() => {
        HunqD.style.left = -120 + 'px';
        HunqD.style.bottom = 100 + 'px';
        HunqD.style.transition = '2s';

        SwBun.style.left = 125 + 'px';
        SwBun.style.transition = '2s';

    }, 2500);

    setTimeout(() => {
        ChatOn();
        FigureAvatar.src = AvatarSwBun;
        FigureName.innerHTML = 'Thy Thy';
        FigureChat.innerHTML = 'Sao đi đâu lâu thế không biết. ';
    }, 12000);

    setTimeout(() => {
        FigureChat.innerHTML = 'Trời đã gần sáng rồi, Mà nỗi nhớ anh vẫn còn ngổn ngang...';
        FigureSoundLink.src = './DataGame/Sounds/Music/SaoAnhChuaVe.mp3';
        LoadSound();
        OnRainEffect();
    }, 15000);


    setTimeout(() => {
        OffSound();
        OffRainEffect();
        SwBun.style.left = 85 + 'px';
        SwBun.style.bottom = 80 + 'px';

        HunqD.style.left = 160 + 'px';
        HunqD.style.bottom = 80 + 'px';

 
        setTimeout(() => {
            ChatOn();
        FigureAvatar.src = AvatarHunqD;
        FigureName.innerHTML = 'Mạnh Hùng';
        FigureChat.innerHTML = 'U là trời, mới đi có xíu mà đã vậy rồi.';
        setTimeout(ChatOff, 3000)
        }, 2000);
        
    }, 90000);
}