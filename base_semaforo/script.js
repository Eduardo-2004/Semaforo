const img = document.getElementById ( 'img' );
const btnLight = document.getElementById ( 'btnLight' );

let colorIndex = 0;
let intervalId = null;

const trafficLight = ( event ) => {
    
    stopAutomatic();
    
    //a partir do click, seleciona o id e encontra o elemento
    turnOn[event.target.id]();
    

}

const nextIndex = () => {

    //ternário 
    // colorIndex = colorIndex < 2 ? ++colorIndex : 0;



    if(colorIndex < 2){

        colorIndex++;

    } else {

        colorIndex = 0;

    } 

}

const changeColor = () => {

    const colors = ['turnRed','turnYellow','turnGreen']
    const color = colors[ colorIndex];
    turnOn[color]();
    nextIndex();

}


const stopAutomatic = () => {

    clearInterval( intervalId );


}



//objeto = turnOn
const turnOn = {

       'turnRed':  () => img.src = './img/red.jpg',
    'turnYellow':  () => img.src = './img/yellow.jpg',
     'turnGreen':  () => img.src = './img/green.jpg',
    
                                         //1000milissegundos
    'automatic':   () => intervalId = setInterval(changeColor, 1000 )


}

btnLight.addEventListener ( 'click', trafficLight);

