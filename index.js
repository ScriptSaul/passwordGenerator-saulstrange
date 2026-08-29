const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function generatePasswords() {

    let passwordLength = document.getElementById("password-length").value;

    let password1 = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password1 += characters[randomIndex];
    }

    let password2 = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password2 += characters[randomIndex];
    }
    document.getElementById("password-output1").textContent = password1;
    document.getElementById("password-output2").textContent = password2;
}

function copyToClipboard(text) {
    // Get the text inside the specified password output element //
    const passwordText = text;

    if (passwordText) {
        navigator.clipboard.writeText(passwordText)
            .then(() => alert("Text copied to clipboard!"))
            .catch(err => console.error("Failed to copy: ", err));
    }       
}