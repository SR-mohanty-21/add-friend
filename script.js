var stetus=document.querySelector("h5")
var btn=document.querySelector("#add")
// var removefriend=document.querySelector("#remove")

var check =0;

btn.addEventListener("click",function(){
    if(check==0){
        stetus.innerHTML="Friends"
        stetus.style.color="blue"
        // console.log("hello")
        btn.innerHTML="Remove Friends"
        check=1;
    }
    else{
        stetus.innerHTML="Bad Boy"
        stetus.style.color="green"
        btn.innerHTML="Add Friends"
        check=0;
    }
   
})
// removefriend.addEventListener("click",function(){
//     stetus.innerHTML="Bad Boy"
//     stetus.style.color="red"
// })