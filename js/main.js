const containerDom = document.getElementById('container');


for ( let i=1; i < 101; i++ ){
    containerDom.innerHTML += `<div class="box">${i}</div>`;
    let boxDom = document.querySelector('.box');
    
    
    if (i % 3 == 0){
        boxDom.innerHTML = 'fiz';
    }

    if (i % 5 == 0){
        boxDom.innerHTML = 'buzz';
    }

    if (i % 5 == 0 && i % 3 == 0){
        boxDom.innerHTML = 'fizbuzz';
    }


}