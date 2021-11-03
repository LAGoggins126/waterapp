document.addEventListener("DOMContentLoaded", function(){
 document.querySelector("#sign-in").addEventListener("submit", function(event){
     let p1 = this["p1"].value;
     let p2 = this["p2"].value;

     if( p1 !== p2){
         event.preventDefault();
         document.querySelector("#sign-in").append("Passwords didn't match");
     }
 })
})