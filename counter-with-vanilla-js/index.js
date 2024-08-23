let count=0;

const countHeader=document.getElementById("count");
const adbtn=document.getElementById("add");
const subtn=document.getElementById("sub");

countHeader.innerText=count;

adbtn.addEventListener("click",()=>{
    if(count < 10){
        count++;
        countHeader.innerText=count;
    }
})
subtn.addEventListener("click",()=>{
    if(count > 0){
        count --;
        countHeader.innerText=count;
    }
})  
