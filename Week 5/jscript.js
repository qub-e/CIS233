function setCity(id){
    var chipDiv, objFact, objPic;

    for(let i = 1; i <= 5; i++){
        let obj = document.getElementById(`city${i}`);
        obj.style.display = 'none';
    }

    switch(id){
        case 1: city = "Jalostotilan"; document.getElementById('city1').style.display = 'inline'; break;
        case 2: city = "Mesa"; document.getElementById('city2').style.display = 'inline';break;
        case 3: city = "San Diego"; document.getElementById('city3').style.display = 'inline';break;
        case 4: city = "Waterford"; document.getElementById('city4').style.display = 'inline';break;
        default: city = "Shibuya"; document.getElementById('city5').style.display = 'inline';break;
    }

        // for(var x = 1; x < 5; x++){
        //     chipDiv = eval(`document.getElementById('chip${x}')`);

        //     chipDiv.style.backgroundcolor = 'blue';

        //     if(x == id){
        //         chipDiv.style.backgroundcolor = 'red';
        //     }
        // }
    
}