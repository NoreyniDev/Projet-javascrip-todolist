/* Déclarations de mes variables*/
var inp, myBtn, ele, result;

inp = document.getElementById("myinput");
myBtn = document.getElementById("mybtn");
ele = document.getElementById("todolist");

/* myBtn.addEventListener("click", function(){
        if ( inp.innerHTML == "" ) {
            result = "Veuillez renseigner un texte svp!"
        }
    }
) */
myBtn.onclick = function(){
    if ( inp.value == "" ) {
        alert("Veuillez renseigner le champ svp ")
    }
    else{
        var para = document.createElement('p');
    }
    para.innerText = inp.value;

    para.classList.add('para_style');

    ele.appendChild(para);

    inp.value = "";

    para.addEventListener('click', function(){
        para.classList.add('para_click');
    })


    para.addEventListener('click', function(){
        ele.removeChild(para);
    })  
}


