//  Displaying the date & time
function getCurrentDate(){
    let dateNow = new Date();
    const monthStr = ["Jan", "Feb", "Mar", "Apr", "May","June", "July", "Aug", "Sept", "Oct","Nov","Dec"];
    const dayStr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let str =  dayStr[dateNow.getDay()] + ", " + monthStr[dateNow.getMonth()] + " " +  dateNow.getDate() + ", " + dateNow.getFullYear();
    str += "\n" + dateNow.getHours() + ":" + dateNow.getMinutes().toString().padStart(2, '0') + ":" + dateNow.getSeconds().toString().padStart(2, '0');
    document.getElementById("date").innerHTML = str;
}
//updates the function to update time every 100ms
setInterval(getCurrentDate, 100);

//part 3
//function that checks if anything is left empty 
function checkEmpty1(){
    let isFilled;
    let isEmpty1 = true;
    let isEmpty2 = true;
    let isEmpty3 = true;

    let radioButtonChecked = true; 
    //checking radiobuttons for gender
    const checkBox = document.querySelectorAll("input[type='checkbox']");
    //checking radiobuttons for cat or dog choice 
    const radiobc = document.getElementsByName("catordog");
    const arrB = Array.from(radiobc);   //array for radiobutton set 1
    //checking radiobuttons for gender
    const radiobg = document.getElementsByName("gender");
    const arrC = Array.from(radiobg);   //array for radiobutton set 2

    //checking if button pushed for any of radio button set 1
    for(let i = 0; i < arrB.length; i++){
        if(arrB[i].checked)
        {
            isEmpty1 = false;
            break;
        }
    
    }

    //checking if button pushed for any of radio button set 2
    for(let i = 0; i < arrC.length; i++){
        if(arrC[i].checked)
        {
            isEmpty2 = false;
            break;
        }
    }

    //checking if button pushed for any of checkbox
    for(let i = 0; i < checkBox.length; i++){
        if(checkBox[i].checked) 
        {
            isEmpty3 = false;
            break;
        }
    }
    
    //checking if all are filled
    isNotFilled = (isEmpty1 || isEmpty2 || isEmpty3);

    if(isNotFilled)
    {
        alert("Please make sure to fill out every category!");
    }
    
}

//part 4
//does the same but also checks the checkboxes & the email validity 
function checkEmpty2(){
    //same code from part 3 for first part of the form 
    let isEmpty1 = true;
    let isEmpty2 = true;
    let isEmpty3 = true;

    let radioButtonChecked = true; 
    //checking radiobuttons for gender
    const checkBox = document.querySelectorAll("input[type='checkbox']");
    //checking radiobuttons for cat or dog choice 
    const radiobc = document.getElementsByName("catordog");
    const arrB = Array.from(radiobc);   //array for radiobutton set 1
    //checking radiobuttons for gender
    const radiobg = document.getElementsByName("gender");
    const arrC = Array.from(radiobg);   //array for radiobutton set 2

    //checking if button pushed for any of radio button set 1
    for(let i = 0; i < arrB.length; i++){
        if(arrB[i].checked)
        {
            isEmpty1 = false;
            break;
        }
    
    }

    //checking if button pushed for any of radio button set 2
    for(let i = 0; i < arrC.length; i++){
        if(arrC[i].checked)
        {
            isEmpty2 = false;
            break;
        }
    }

    //checking if button pushed for any of checkbox
    for(let i = 0; i < checkBox.length; i++){
        if(checkBox[i].checked) 
        {
            isEmpty3 = false;
            break;
        }
    }

    //now checking the text boxes & email inputs 
    let textNotValid = false;
    let x = document.getElementById("extraInfo").value;
    let y = document.getElementById("name").value;
    let z = document.getElementById("lastname").value;
    let s = document.getElementById("email").value;


    if(!(isValidEmail(s)) || (x === "") || (y === "") || (z === "")|| (s === "")){
        textNotValid = true;
    }

    //boolean for if all are filled
    let isNotValid = (isEmpty1 || isEmpty2 || isEmpty3 || textNotValid);
    
    if(isNotValid)
    {
        alert("Please fill out the information and make sure your email format is correct!");
    }
}

function isValidEmail(email) {
    const emailRegex = /^[A-Za-z_0-9.+%-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }