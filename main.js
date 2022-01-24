let boxNumber = parseInt(prompt("Quanti elementi vuoi visualizzare?"));

if (isNaN(boxNumber)) {
    alert("Il valore inserito non è valido, inserire un numero!");
} else {
    for (i = 1; i <=boxNumber; i++) {
        document.getElementById("container").innerHTML +=  `<div id="box">` + i + `</div>`;
    
    }

    }

