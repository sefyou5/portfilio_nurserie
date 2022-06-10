let nb1;
let nb2;
let tentatives;
let choix="oui";

while (choix=="oui"){
    nb1 = prompt("donner un nombre 1");
    tentatives=10;
    let victoire="D";
    while (tentatives>0 && victoire!="V"){
        nb2 = prompt("donner un nombre 2");
        if (nb1==nb2){
            alert("bravo");
            victoire="V";
        }

        else if (nb2>nb1){
            tentatives=tentatives-1;
            alert("c'est -");
        }
            else {
            alert("c'est +");
        }
    }
    if (tentatives==0){
        alert("vous avez perdu, le chiffre a deviner etait" +nb1);
    }
    choix= prompt("voulez vous recommencer?");
}
