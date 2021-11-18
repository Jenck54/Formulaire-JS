let monNum = document.getElementById("testNum")
let res = document.getElementById("res")
let code = document.getElementById("code")
let resCode = document.getElementById("resCode")
let nom = document.getElementById("Nom")
let resNom = document.getElementById("resNom")

monNum.addEventListener("input", ()=> {
    //verifier la valeur
    let retour = monNum.value.search(/^0[67][0-9]{8}$/)
    if (retour == -1) {
        res.innerHTML = "La valeur n'est pas bonne"
    }
    else {
        res.innerHTML = "La valeur est bonne"
    }
})

code.addEventListener("input", () => {
    let retour = code.value.search(/^[0-9]{5}$/)
    if (retour == -1) {
       resCode.innerHTML = "La valeur n'est pas bonne"
    }
    else {
       resCode.innerHTML = "La valeur est bonne"
    }
})
nom.addEventListener("input", () => {
    let retour = nom.value.search(/^[A-Z][a-z]{1,}$/)
    if (retour == -1) {
        resNom.innerHTML = "La valeur n'est pas bonne"
    }
    else {
        resNom.innerHTML = "La valeur est bonne"
    }
})