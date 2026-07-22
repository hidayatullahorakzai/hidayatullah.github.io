// =================================
// TYPING EFFECT
// =================================


const typingTexts = [

    "BS Computer Science Student",

    "AI Enthusiast",

    "Python Developer",

    "Future AI Engineer"

];


let textIndex = 0;

let charIndex = 0;



function typingEffect(){


    let typingElement = document.getElementById("typing");


    if(!typingElement) return;



    if(charIndex < typingTexts[textIndex].length){


        typingElement.innerHTML += 
        typingTexts[textIndex].charAt(charIndex);


        charIndex++;


        setTimeout(typingEffect,100);


    }

    else{


        setTimeout(()=>{


            typingElement.innerHTML="";


            charIndex=0;


            textIndex++;


            if(textIndex >= typingTexts.length){

                textIndex=0;

            }


            typingEffect();



        },1000);



    }



}





// =================================
// PAGE LOAD FUNCTIONS
// =================================


window.onload=function(){


    typingEffect();



};









// =================================
// SCROLL REVEAL ANIMATION
// =================================



const sections=document.querySelectorAll(".section");



window.addEventListener("scroll",()=>{


    sections.forEach(section=>{


        let position =
        section.getBoundingClientRect().top;



        if(position < window.innerHeight - 100){


            section.classList.add("show");


        }



    });



});









// =================================
// DARK MODE
// =================================



function toggleDarkMode(){


    document.body.classList.toggle("dark-mode");



    let button =
    document.querySelector(".dark-toggle");



    if(document.body.classList.contains("dark-mode")){


        button.innerHTML="☀️";


    }

    else{


        button.innerHTML="🌙";


    }



}









// =================================
// CONTACT FORM TO WHATSAPP
// =================================



let form=document.getElementById("contactForm");



if(form){



form.addEventListener("submit",function(e){



e.preventDefault();




let name=
document.getElementById("name").value.trim();



let email=
document.getElementById("email").value.trim();



let message=
document.getElementById("message").value.trim();





if(name==="" || email==="" || message===""){


document.getElementById("formMessage").innerHTML=
"Please fill all fields!";


document.getElementById("formMessage").style.color="red";


return;


}





let phoneNumber="923328072178";





let whatsappMessage =

"New Portfolio Message\n\n"+

"Name: "+name+

"\nEmail: "+email+

"\nMessage: "+message;





let whatsappURL =

"https://wa.me/"+phoneNumber+

"?text="+encodeURIComponent(whatsappMessage);





window.open(
whatsappURL,
"_blank"
);





document.getElementById("formMessage").innerHTML=
"Opening WhatsApp...";


document.getElementById("formMessage").style.color="green";



form.reset();



});



}









// =================================
// BACK TO TOP BUTTON
// =================================



let topBtn=document.getElementById("topBtn");



window.addEventListener("scroll",()=>{



if(window.scrollY > 300){


topBtn.style.display="block";


}

else{


topBtn.style.display="none";


}



});






topBtn.onclick=function(){



window.scrollTo({


top:0,


behavior:"smooth"



});


};
