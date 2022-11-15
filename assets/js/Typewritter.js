var quoteArray = "Web Designer!";
var textPosition = 0; 
var textPosition1 = quoteArray.length;
var speed = 500;
typewriter = () => {
  document.querySelector("#type").innerHTML = quoteArray.substring(0, textPosition) + '<span id="plink">&#10072;</span>';
if(textPosition!= quoteArray.length){
  if(textPosition++ != quoteArray.length){
    setTimeout(typewriter, speed);
  }
}
else{
  typewriter1()
}

    
}
function typewriter1(){
    document.querySelector("#type").innerHTML = quoteArray.substring(0, textPosition) + '<span id="plink">&#10072;</span>';
if(textPosition!= 0){
if(--textPosition != quoteArray.length)
  setTimeout(typewriter1, speed);
}

else{
    typewriter()
}
}
window.addEventListener("load", typewriter)

function list(){
  alert("successfully submited")
}

window.onscroll=()=> liop();
    function liop(){
        if(document.documentElement.scrollTop>80){
            document.querySelector("#navbar").classList.add("nav-sticky");
        }
        else{
            document.querySelector("#navbar").classList.remove("nav-sticky");
        }
    
    }



