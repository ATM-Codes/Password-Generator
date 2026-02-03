const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


//15 character for passwords
let p1 = document.getElementById("p1text")
let p2 = document.getElementById("p2text")

function generatePassword() {
    
    p1.textContent=0;
    p2.textContent=0;
    
    for (let i = 0; i < 15; i++) {
        
        let i1 = Math.floor(Math.random() * characters.length);
        let i2 = Math.floor(Math.random() * characters.length);
        
        
        
        
        if((p1.textContent==="0" && p2.textContent==="0") && i===0) 
        {
            p1.textContent=characters[i1]
            p2.textContent=characters[i2]
        }
        else 
        {
            p1.textContent+=characters[i1];
            p2.textContent+=characters[i2];
        }
    } 
    
    if(p1.style.visibility==="hidden"){
        p1.style.visibility = "visible";
        p2.style.visibility = "visible";
        }

}