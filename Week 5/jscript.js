function setCity(id){
    var chipDiv, objFact, objPic;

    for(let i = 1; i <= 5; i++){
        let obj = document.getElementById(`city${i}`);
        obj.style.display = 'none';
    }

    alert(id);

    switch(id){
        case 1: city = "Guadalajara"; 
        document.getElementById('city1').style.display = 'inline'; 
        document.getElementById('logo').src = "images/jalosLogo.png";
        break;
        case 2: city = "Mesa"; 
        document.getElementById('city2').style.display = 'inline';
        document.getElementById('logo').src = "images/mesaLogo.png";
        break;
        case 3: city = "San Diego"; 
        document.getElementById('city3').style.display = 'inline';
        document.getElementById('logo').src = "images/sandiegoLogo.png";
        break;
        case 4: city = "Waterford"; 
        document.getElementById('city4').style.display = 'inline';
        document.getElementById('logo').src = "images/waterfordLogo.png";
        break;
        default: city = "Shibuya";
         document.getElementById('city5').style.display = 'inline';
         document.getElementById('logo').src = "images/shibuyaLogo.png";
        break;
    }
    getWeatherData();
}

