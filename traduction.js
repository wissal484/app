let ar = document.getElementById("ar")
let en = document.getElementById("en")
let title = document.getElementById("title")
let text1= document.getElementById("text1")
let about= document.getElementById("about")
let text2= document.getElementById("text2")
let contact= document.getElementById("contact")



ar.onclick = ()=>{
    setlang("arabic")
    localStorage.setItem("lang","arabic")
};
en.onclick = ()=>{
    setlang("english")
    localStorage.setItem("lang","english")

};
onload = ()=>{
    setlang(localStorage.getItem("lang"))
};
function setlang(getlang) {
    if(getlang==="arabic"){
        title.innerHTML="وصال ";
        text1.innerHTML="مرحبا بكم في موفعي";
        about.innerHTML=" عنا";
        text2.innerHTML="أنا أحب البيتزا";
        contact.innerHTML="اتصل بنا";
    }
     else if(getlang==="english"){
        title.innerHTML="wissal";
        text1.innerHTML=" welcom to my website";
        about.innerHTML="About US";
        text2.innerHTML="I love pizza";
        contact.innerHTML="Contact US";

     }
 };