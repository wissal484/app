
let codes= document.getElementById("codes")
let play = document.getElementById("play")
let remouve = document.getElementById("remouve")
let res = document.getElementById("res")

play.onclick = ()=>{
    res.innerHTML = codes.value 
    localStorage.setItem("Resolt",codes.value)
}
remouve.onclick =()=>{
    res.innerHTML = ""
    codes.value=""
}
onload =()=>{
    codes.value = localStorage.getItem("Resolt")
    res.innerHTML = codes.value 

}