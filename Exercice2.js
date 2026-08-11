// Exercice 2 : Analyse de Fréquence & Détecteur d’Anagrammes

// anagrammes: contiennent exactement les mêmes lettres avec le même nombre d’apparitions.
// "adnane" et "denana" // true

function areAnagrams(str1, str2) {
    const txt1 = str1.toLowerCase().replace(/[^a-z]/g, "");
    const txt2 = str2.toLowerCase().replace(/[^a-z]/g, "");
    
    if(txt1.length !== txt2.length){
        return false;
    }
    
    
    const nbrApparitions = {};
    
    for(const lettre of txt1){
        if(nbrApparitions[lettre] === undefined){
            nbrApparitions[lettre] = 1;
        }else{
            nbrApparitions[lettre]++;
        }
    }
    
    for(const lettre of txt2){
        if(nbrApparitions[lettre] === undefined){
            return false;
        }
        if(nbrApparitions[lettre] === 0){
            return false;
        }
        nbrApparitions[lettre]--;
    }
    return true;
}


console.log(areAnagrams("adnane", "denana"));
console.log(areAnagrams("bonjour", "bonsoir"));
console.log(areAnagrams("Harry Potter!", "harrypotter"));

