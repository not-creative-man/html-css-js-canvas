function rand(){
    let re = /\d/;
    let num = document.querySelector('#imageTag').alt.match(re);
    //alert(num);
    let n = Math.floor(Math.random() * 3);
    while(n == num) {
        n = Math.floor(Math.random() * 3);
        console.log(n);
    }
    return n;
}

function getImage(num = 1, input){
    let image = document.getElementById("imageTag");
    if(!showed){
        image.style.visibility = 'visible';
        image.style.position = 'relative';
        image.style.margin = '20px';
        showed = true;
        input.value = 'Change img!!';
    }
    else{
        image.src=`${num}.png`;
        image.alt=`Картинка ${num}`;
    }
}


let change = document.querySelector("#change-button");
let showed = false;