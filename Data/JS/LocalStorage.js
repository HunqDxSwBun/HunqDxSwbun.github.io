function getBackup() {
    const LIST_PLAYERS_BACKUP = 'LIST_PLAYERS_BACKUP'

    let Players = [
        {
            name: 'SwBun',
            level: 1
        },
        {
            name: 'HunqDs',
            level: 0
        }
    ] ;
    
    localStorage.setItem(LIST_PLAYERS_BACKUP, JSON.stringify(Players));
    let data = JSON.parse(localStorage.getItem(LIST_PLAYERS_BACKUP));
    var Person = JSON.stringify(data[0].name) ;
   
    var AvatarPlayer = document.getElementById('AvatarPlayer');
    var NamePlayer = document.getElementById('NamePlayer');
    var LevelPlayer = document.getElementById('LevelPlayer');

    if (Person == '"SwBun"') {
        AvatarPlayer.src = "./Data/IMG/2022BTN.jpg";
        NamePlayer.innerText = "Sw Bun";
        LevelPlayer.innerText = data[0].level;
    }else {
        NamePlayer.innerText = "HunqD"
    }
}

