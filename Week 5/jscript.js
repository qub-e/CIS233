var chipDiv, objFact, objPic;

objPic = document.getElementById('shibuya');

function setCity(id){


    //Headache recieved here apparently the value of an option doesn't pass as an 
    //int in the parameter of a function
    id = parseInt(id);

    for(let i = 1; i <= 5; i++){
        let obj = document.getElementById(`city${i}`);
        obj.style.display = 'none';
    }

    objPic.style.border ='none';

    switch(id){
        case 1: city = "Guadalajara"; 
        document.getElementById('city1').style.display = 'inline'; 
        document.getElementById('logo').src = "images/jalosLogo.png";
        objPic = document.getElementById('jalos1');
        break;
        case 2: city = "Mesa"; 
        document.getElementById('city2').style.display = 'inline';
        document.getElementById('logo').src = "images/mesaLogo.png";
        objPic = document.getElementById('mesa');
        break;
        case 3: city = "San Diego"; 
        document.getElementById('city3').style.display = 'inline';
        document.getElementById('logo').src = "images/sandiegoLogo.png";
        objPic = document.getElementById('cali');
        break;
        case 4: city = "Waterford"; 
        document.getElementById('city4').style.display = 'inline';
        document.getElementById('logo').src = "images/waterfordLogo.png";
        objPic = document.getElementById('waterford');
        break;
        default: city = "Shibuya";
         document.getElementById('city5').style.display = 'inline';
         document.getElementById('logo').src = "images/shibuyaLogo.png";
         objPic = document.getElementById('shibuya');
        break;
    }

    objPic.style.border = '5px white solid';
    getWeatherData();
}