// Exercice 1 : Manipulation de Chaînes & Masquage de Données

function maskSensitiveData(input, type) {
    if(type === "email"){
        const arobasPos = input.indexOf("@");
        const nom = input.slice(0, arobasPos);
        const domaine = input.slice(arobasPos);
        
        const premierCar = nom[0];
        const dernierCar = nom[nom.length - 1];

        const etoiles = "*".repeat(nom.length - 2);

        return premierCar +etoiles + dernierCar + domaine;
    }
    
    else if(type === "phone") {
        const first = input.slice(0, 2);
        const  last = input.slice(-2);
         return first+"******"+ last;
    }
    
    else if(type === "card") {
        const last = input.slice(-4);
        
        return "************" + last;
    }
    
    else{
        throw new Error("Format non supporté");
    }
    
}

console.log(maskSensitiveData("john.doe@gmail.com", "email"));
console.log(maskSensitiveData("0611223344", "phone"));
console.log(maskSensitiveData("1111222233334444", "card"));