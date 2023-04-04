const calori=document.querySelector(".calori");
const current=document.querySelector(".current");

getTime();
getCalori();


calori.addEventListener("click",(e)=>{
    const taken=document.querySelector(".taken");
    if (taken.value) {
        x=parseInt(current.textContent)-parseInt(taken.value);
        current.innerHTML=x;
        localStorage.setItem("targetCal",JSON.stringify(x));
    }

    e.preventDefault;
});

function getTime() {
    const today = new Date().getDay();
    let dietTime=localStorage.getItem("time");
        if(parseInt(today)!=dietTime){
            localStorage.setItem("time",JSON.stringify(today))
            localStorage.setItem("targetCal",JSON.stringify(1600))
        }
}

function getCalori() {
    y=localStorage.getItem("targetCal");
    current.innerHTML=y;
}


{/*  */}