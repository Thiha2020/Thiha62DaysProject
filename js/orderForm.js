//
var today = new Date();
var hourNow = today.getHours();
var orderGreeting;

if (hourNow>16){
    orderGreeting="Good evening,";
}else if(hourNow>12){
    orderGreeting="Good afternoon,";
}else if(hourNow>0){
    orderGreeting="Good Morning";
}else{
    orderGreeting="Hello,";
}

console.log("Hour="+hourNow);

//This code is now building in stage
//If you have finish building this code delete above comment
var name=" Thiha Aung";
var orderMessage=" Please check your order:";
//Concatenate the two variable above and one variable from program 1 
var orderWelcome=orderGreeting + name+"."+ orderMessage;

//Get the element that has an id of orderGreeting from orderForm page
var dpOrder= document.getElementById("orderGreeting");
dpOrder.textContent=orderWelcome;
