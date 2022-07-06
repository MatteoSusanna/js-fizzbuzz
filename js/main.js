const containerDom = document.getElementById('container');


for ( let i=1; i < 101; i++ ){

    
    if (i % 5 == 0 && i % 3 == 0){
        containerDom.innerHTML += `<div class="box red">Fizbaz</div>`;
    } else if (i % 5 == 0){
        containerDom.innerHTML += `<div class="box yellow">bazz</div>`;
    } else if (i % 3 == 0){
        containerDom.innerHTML += `<div class="box green">Fiz</div>`;
    }else {
        containerDom.innerHTML += `<div class="box">${i}</div>`;
    }




}