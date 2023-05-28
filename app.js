const calori=document.querySelector(".calori");
const current=document.querySelector(".current");
const taken=document.querySelector(".taken");

const targetChanger = document.querySelectorAll(".targetx");
const changeFrom = document.querySelector(".target");
let newCal;

getTime();
getCalori();


calori.addEventListener("click",settingTargetCal);

if (!localStorage.getItem("target")) {
    localStorage.setItem("target","2000");
}

function settingTargetCal(e) {
    if (taken.value) {
        x=parseInt(current.textContent)-parseInt(taken.value);
        current.innerHTML=x;
        localStorage.setItem("targetCal",JSON.stringify(x));
    }

    e.preventDefault();
}

function getTime() {
    const today = new Date().getDay();
    let dietTime=localStorage.getItem("time");
        if(parseInt(today)!=dietTime){
            localStorage.setItem("time",JSON.stringify(today));
            localStorage.setItem("targetCal",JSON.stringify(localStorage.getItem("target")));
        }
}

function getCalori() {
    y=localStorage.getItem("target");
    current.innerHTML=y;
}

function setNewCalori() {
    x=parseInt(current.textContent)-parseInt(taken.value);
    current.innerHTML=x;
}

function changeTarget() {
    changeFrom.classList="newCalori";
    const changeTo=`
            <label for="newCal" id="new-label">
                <input type="number" name="newCal" id="newCal" min="0" max="9000"">
                <button type="submit" class="customSubmit">That's it</button>
        </label>
    `;
    changeFrom.innerHTML=changeTo;
    const setBtn=document.querySelector(".customSubmit");
    setBtn.addEventListener("click",setTarget);
}
function setTarget() {
    newCalInput= document.querySelector("#newCal");
    if (newCalInput.value>0) {
        localStorage.setItem("target",newCalInput.value);
        current.innerHTML= newCalInput.value;
    }
    changeFrom.classList="target";
    const changeTo=`
    <label for="reset-target" id="target-label" class="targetx">
        <i id="reset-target" class="fa-solid fa-bullseye fa-2xl targetx"></i>
        New Target
    </label>
    `;
    changeFrom.innerHTML=changeTo;

    const targetChanger = document.querySelectorAll(".targetx");
    targetChanger.forEach(element => {
        element.addEventListener("click",changeTarget);
    });
}


targetChanger.forEach(element => {
    element.addEventListener("click",changeTarget);
});