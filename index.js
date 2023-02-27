saveEl = document.getElementById("save-el")
welcomeEl = document.getElementById("welcome-el")
countEl = document.getElementById("count-el")
let count = 0

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
function increment(){
    count=count+1
    countEl.textContent = count;
}

// 1. Create a SAVE button. Set the id to "save-btn" and call the save() function when it's clicked
// 2. Create a function, save()
// 1. Grab the save-el paragrah and store it in a variable called saveEl
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// 3. Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph
function save(){
    
    saveEl.textContent += count + " - "
    count = 0
    countEl.textContent = count;
    console.log(count);
}

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "
// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

let name1 = "Rahul Tiwari"
let message = "Welcome back, "
welcomeEl.innerText = message + name1

