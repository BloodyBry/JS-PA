// Exercice 2 : Analyse de Fréquence & Détecteur d’Anagrammes

// anagrammes: contiennent exactement les mêmes lettres avec le même nombre d’apparitions.
// "adnane" et "enaden" // true

function areAnagrams(str1, str2) {
    str1 = str1.toLowerCase().replace(/[^a-z]/g, "");
    // replace(/[^a-z]/g, "");   Supprime tout ce qui n'est pas une lettre de a à z
    str2 = str2.toLowerCase().replace(/[^a-z]/g, "");


    if (str1.length !== str2.length) {
        return false;
    }
}

