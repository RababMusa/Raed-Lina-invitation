// get buttons
var btnAccept = document.querySelector(".btnAccept");
var btnReject = document.querySelector(".btnReject");
var btnsGroup = document.querySelector(".btnsGroup");
var viewInvitation = document.querySelector(".viewInvitation");
var msgReject = document.querySelector(".msgReject");

// accept invitation
btnAccept.addEventListener("click",function(){
    viewInvitation.style.display = "flex";
    viewInvitation.style.justifyContent = "center";
    viewInvitation.style.alignItems = "center";
    btnsGroup.style.display = "none";
});

// reject invitatino 
btnReject.addEventListener("click",function(){
    msgReject.style.display = "block";
    btnsGroup.style.display = "none";

});