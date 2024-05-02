var istatus = document.querySelector("h5");
var btn = document.querySelector("#add");
var flag= 0;


btn.addEventListener("click",function(){
    if(flag==0){
        istatus.innerHTML="Friend";
        istatus.style.color="green";
        btn.innerHTML="RemoveFriend";
        flag=1
    }
        else{
            istatus.innerHTML="Stranger";
            istatus.style.color="red";
            btn.innerHTML="addFriend";
            flag=0;
        }
    
    
})


