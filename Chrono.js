let $time = document.querySelector('.timer');
let $start = document.querySelector('.start');
let $split = document.querySelector('.split');
let $reset = document.querySelector('.reset');
let $stop =document.querySelector('.stop');
let $secs = document.querySelector('#secondes');
let $milli = document.querySelector('#milliSecondes');
let $min = document.querySelector('#minutes');
let $body =document.querySelector('.body');

let millisecondes = 0;
let secondes = 0;
let minutes = 0;

let interval;

$start.addEventListener('click',function(){
    interval = setInterval( function(){
        millisecondes ++;

        $milli.innerHTML = millisecondes;

        if(millisecondes==9){
            // console.log('ça marche')
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

    $start.setAttribute('disabled', '');
    $reset.setAttribute('disabled', '')
    $stop.removeAttribute('disabled');
    $split.removeAttribute('disabled')

    $start.classList.add('active');
    $stop.classList.remove('active');
    $split.classList.remove('active');
})

$stop.addEventListener('click', function(){
    clearInterval(interval);
    $stop.setAttribute('disabled', '');
    $start.removeAttribute('disabled');
    $reset.removeAttribute('disabled');
    $split.setAttribute('disabled','')

    $stop.classList.add('active');
    $start.classList.remove('active');
    $split.classList.add('active');
    $reset.classList.remove('active');

});

$reset.addEventListener('click', function(){
    millisecondes = 0;
    $milli.innerHTML= '0' + millisecondes;

    secondes = 0;
    $secs.innerHTML= '0' + secondes;

    minutes =0 ;
    $min.innerHTML= '0' + minutes;

    $reset.classList.add('active');   
    $split.classList.remove('active');   
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