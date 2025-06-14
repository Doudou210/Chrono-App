//Chronomètre

let $time = document.querySelector('.timer');
let $start = document.querySelector('.start');
let $split = document.querySelector('.split');
let $reset = document.querySelector('.reset');
let $stop =document.querySelector('.stop');
let $secs = document.querySelector('#secondes');
let $milli = document.querySelector('#milliSecondes');
let $min = document.querySelector('#minutes');
let $body =document.querySelector('.body');
let $result =document.getElementById('#resultTable');

let millisecondes = 0;
let secondes = 0;
let minutes = 0;
let interval;

$start.addEventListener('click',function(){
    interval = setInterval( function(){
        millisecondes ++;

        $milli.innerHTML = millisecondes;

        if(millisecondes==9){
            secondes ++;
            $secs.innerHTML = secondes;
            millisecondes = 0;
        }

        if(secondes<10){
            $secs.innerHTML = '0' +secondes;     
        }else if(secondes>59){
            minutes++;
            $min.innerHTML = minutes;
            secondes=0;
        }
        else{

        }

        if(minutes<10){
            $min.innerHTML = '0' +minutes;     
        }

        if(minutes>59){
            minutes = 0;
            $min.innerHTML = minutes;
        }
        
    },100);

    // Pour desactiver certains button

    $start.setAttribute('disabled', '');
    $reset.setAttribute('disabled', '')
    $stop.removeAttribute('disabled');
    $split.removeAttribute('disabled')

    //Ajouter une class au button
    $start.classList.add('active');
    $stop.classList.remove('active');
    $split.classList.remove('active');
    $reset.classList.add('active');
})

$stop.addEventListener('click', function(){
    clearInterval(interval);
    
    // Pour desactiver certains button
    
    $stop.setAttribute('disabled', '');
    $start.removeAttribute('disabled');
    $reset.removeAttribute('disabled');
    $split.setAttribute('disabled','')
    
    //Ajouter et rétirer une class au button

    $stop.classList.add('active');
    $start.classList.remove('active');
    $split.classList.add('active');
    $reset.classList.remove('active');
    
});

$reset.addEventListener('click', function(){
    minutes =0 ;
    $min.innerHTML= '0' + minutes;

    secondes = 0;
    $secs.innerHTML= '0' + secondes;
    
    millisecondes = 0;
    $milli.innerHTML= '0' + millisecondes;
    
    //Ajouter et rétirer une class au button

    $reset.classList.add('active');   
    $split.classList.add('active');   
    $start.classList.remove('active');

    // Pour desactiver certains button
    $reset.setAttribute('disabled', '');
    $stop.setAttribute('disabled', '');
    $start.removeAttribute('disabled');
    $split.setAttribute('disabled', '');
    $body.innerHTML='';
})

$split.addEventListener('click', function(){
    $body.innerHTML+= `<p>${minutes}: ${secondes}. ${millisecondes}</p>`
})

//Afficher les selections du buttons

let $affBtn = document.querySelectorAll('.afficheur button');
let $content = document.querySelectorAll('.contents .content');


for(let i=0; i<$affBtn.length; i++){
    
    $affBtn[i].addEventListener('click',()=>{
        let $active = document.querySelector('.afficheur button.is-active');
        let $activeContent = document.querySelector('.contents .content.is-actived');
        
        $active.classList.toggle('is-active');
        $activeContent.classList.toggle('is-actived');
        console.log(i);
        
        $content[i].classList.toggle('is-actived');
        $affBtn[i].classList.add('is-active');

    })
}
////////////////////////////////////////////////////////////

//Alarme



////////////////////////////////////////////////////////////

// Minueur



////////////////////////////////////////////////////////////

//Horloge

$timer = document.querySelector('time');
var update = ()=>{

    var date = new Date();

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if (h<10)
    {
        h= '0' + h;
    }

    if (m <10)
    {
        m= '0' + m;
    }
    
    if(s < 10)
    {
        s= '0' + s;
    }

    var time = h + ':' + m + ':' + s;
    
    $timer.innerText = time;
};

update();
setInterval(update, 1000);
