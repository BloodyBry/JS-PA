const utilisateur = {
    nom: "Adnane",
    age: 24,

    adresse: {
        ville: "Kénitra",

        position: {
            latitude: 34,
            longitude: -6
        }
    },

    hobbies: [
        "Sport",
        "Programmation"
    ]
};

function deepFreeze(obj, frozenSet = new WeakSet()) {
    if(obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
        return obj;
    }

    if(frozenSet.has(obj)) {
        return obj;
    }

    frozenSet.add(obj);

    Object.getOwnPropertyNames(obj).forEach(propriete => {
        const valeur = obj[propriete];

        if (valeur !== null && (typeof valeur === "object" || typeof valeur === "function")){
            deepFreeze(valeur, frozenSet);
        }
    });

    Object.freeze(obj);
    return obj;
}


deepFreeze(utilisateur);

console.log(Object.isFrozen(utilisateur));
console.log(Object.isFrozen(utilisateur.adresse));

console.log(Object.isFrozen(utilisateur.adresse.position));

console.log(Object.isFrozen(utilisateur.hobbies));