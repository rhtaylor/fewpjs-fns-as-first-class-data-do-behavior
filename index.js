/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */  

function displayMessage(arg){ 
  let location = document.querySelector("#greeting")
  
    location.innerText = greet(arg) 
  
} 

function greet(time){ 
     let prep = time.split(":") 
     let rough = prep.slice(0,1) 
     
     let polish = rough.join()
    
 let tTime = parseInt(polish)  
 console.log(tTime)
 
 let phrase = time
 if (tTime > 17) { 
   
 phrase = "Good Evening"; 
 } else if (tTime <= 17 && tTime >= 12) { 
   
 phrase =  "Good Afternoon";
 } else if (tTime < 12 )   {
   phrase = "Good Morning" ; 
 } else if (tTime == NaN) {
   return phrase

 } 
 
 return phrase
}