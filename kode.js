function tekst_til_kvad(){
    var tekst = document.getElementById("rdf").value;

    var linjar = tekst.split("\n");

    var kvadar = []
    for(var linje of linjar){
        var kvad = linje.trim().split(" ");
        kvadar.push({"subject": kvad[0], "predicate": kvad[1], "object": kvad[2], "graph": kvad[3]})
    }
    return kvadar
}