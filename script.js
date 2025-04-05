const generateBtn=document.querySelector(".generate-btn");
const password=document.querySelector(".password");
const container=document.querySelector(".password-generator");
const changeThemebtn=document.querySelector(".chnge-theme");

function generatePassword()
{
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const number = "1234567890";
    const symbol = "!@#$%&?";
    
    let pass="";
    
    while (pass.length < 8) {
        pass += upperCase[Math.floor(Math.random() * upperCase.length)];
        if (pass.length < 8) pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        if (pass.length < 8) pass += number[Math.floor(Math.random() * number.length)];
        if (pass.length < 8) pass += symbol[Math.floor(Math.random() * symbol.length)];
    }
    // shuffling the generated password
    let shuffled = pass
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
    password.innerText=shuffled;
}

function changeTheme()
{
    if(container.classList.contains("light"))
        container.classList.remove("light");
    else
    container.classList.add("light");

    if(changeThemebtn.classList.contains("light-btn"))
        changeThemebtn.classList.remove("light-btn");
    else
    changeThemebtn.classList.add("light-btn")

}

generateBtn.addEventListener("click",generatePassword);
changeThemebtn.addEventListener("click",changeTheme);
generatePassword();


