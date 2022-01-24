let boxNumber = parseInt(prompt("Quanti elementi vuoi visualizzare?"));

if (isNaN(boxNumber)) {
    alert("Il valore inserito non è valido, ricarica la pagina e inserisci un numero!");
} else {
    for (i = 1; i <=boxNumber; i++) {
        // document.getElementById("container").innerHTML +=  `<div id="box">` + i + `</div>`;

        //if per decidere il contenuto dei box

        if ( i % 15 == 0) {
            document.getElementById("container").innerHTML += `<div id="box" class="fizz-buzz"> FizzBuzz </div>`;
        } else if ( i % 3 == 0) {
            document.getElementById("container").innerHTML += `<div id="box" class="fizz"> Fizz </div>`;
        } else if ( i % 5 == 0) {
            document.getElementById("container").innerHTML += `<div id="box" class="buzz"> Buzz </div>`;
        } else {
            document.getElementById("container").innerHTML += `<div id="box" class="default">` + i +  `</div>`;
        }
    }
    }

