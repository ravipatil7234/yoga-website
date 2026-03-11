function login(){
window.location.href="questions.html";
}

function register(){
alert("Account Created Successfully");
window.location.href="login.html";
}

function saveGoal(){

let goal=document.getElementById("goal").value;

localStorage.setItem("goal",goal);

window.location.href="plan.html";
}

if(document.getElementById("result")){

let goal=localStorage.getItem("goal");

let text="";

if(goal=="weight"){
text="Recommended Yoga: Surya Namaskar, Plank Pose";
}

else if(goal=="stress"){
text="Recommended Yoga: Pranayama, Meditation";
}

else if(goal=="flexibility"){
text="Recommended Yoga: Trikonasana, Tadasana";
}

else{
text="Recommended Yoga: Bhujangasana, Cat Cow Pose";
}

document.getElementById("result").innerHTML=text;

}