


function tryLaunch(){
    let launchControl = 1;
    let errorMsg = "";
    let audio = new Audio('./assets/media/launch.mp3');

    if(park == 1){
        errorMsg = "Your parking brake is on!";
        launchControl = 0;
    }
    else if(traction == 1){
        errorMsg = "Your traction control is on!";
        launchControl = 0;
    }
    else if(gasLevel == 0){
        errorMsg = "Your gas tank is empty!";
        launchControl = 0;
    }
    else if(battery == 0){
        errorMsg = "Your battery needs to be charged!";
        launchControl = 0;
    }
    else if(gearShift != 3){
        errorMsg = "Your car needs to be in sport mode!";
        launchControl = 0;
    }

    if(launchControl == 0){
        audio = new Audio('./assets/media/sputter.mp3');
        document.getElementById("launch").src = "./assets/images/lca0.PNG";
        document.getElementById("msg").innerHTML = errorMsg;
        
    }
    else{
        document.getElementById("launch").src = "./assets/images/lca1.PNG";
        document.getElementById("msg").innerHTML = "";
    }

    audio.play();
}