function setCity(id){
    var chipDiv, objFact, objPic;

    switch(id){
        case 1: city = "Jalostotilan"; break;
        case 2: city = "Mesa"; break;
        case 3: city = "San Diego"; break;
        case 4: city = "Waterford"; break;
        default: city = "Shibuya"; break;
}

        for(var x = 1; x < 5; x++){
            chipDiv = eval(`document.getElementById('chip${x}')`);

            chipDiv.style.backgroundcolor = 'blue';

            if(x == id){
                chipDiv.style.backgroundcolor = 'red';
            }
        }
    
}