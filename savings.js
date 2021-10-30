

document.addEventListener("DOMContentLoaded", function(){

    document.body.querySelector(".btn").addEventListener("click", function(){
         alert("Thank you for your suggestion!");
        location.reload();
         console.log("reload")
    });
});