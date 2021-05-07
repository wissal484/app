function update(){
    var date = new Date()
    var setTime = document.getElementById("set_time")
    setTime.innerHTML= date.getHours() + ":"+ date.getMinutes() +":"+ date.getSeconds();
    var setDate= document.getElementById("set_date")
    setDate.innerHTML= date.getDate() +"-"+ parseInt( date.getMonth()+1) + "-" + date.getFullYear();
}
setInterval(update,100);
onload= update()

function getColor(){
    var getcolor= document.getElementById("set_color").value
    localStorage.setItem("color",getcolor );
    document.getElementById("time").style.background = localStorage.getItem("color")
    document.getElementById("body").style.background = localStorage.getItem("color")

}
 function setColor(){
 // document.getElementById("set_color").value = localStorage.getItem("color")


 document.getElementById("time").style.background = localStorage.getItem("color")
 document.getElementById("body").style.background = localStorage.getItem("color")

}
 setInterval(setColor ,100)