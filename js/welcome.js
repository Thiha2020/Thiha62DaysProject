//Use code in website welcome screen
var today = new Date();//Get current date 
var hourNow = today.getHours();//Get current hour
var greeting;

if (hourNow>16){
    greeting="Good evening";
}else if(hourNow>12){
    greeting="Good Afternoon";
}else if(hourNow>0){
    greeting="Good Morning";
}else{
    greeting="Welcome";
}

console.log("Hour for greeting message= "+hourNow+"hr");
document.write('<h3>'+ greeting +'</h3>');//Add greeting message base upon current time