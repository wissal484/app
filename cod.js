let text=document.getElementById("text")
let result=document.getElementById("result")
let select=document.getElementById("select")


text.addEventListener("input",()=>{
    make_result();
});
select.addEventListener("change",()=>{
    make_result();
});
function make_result(){
    if(select.value=="decode"){
        result.value= atob(text.value);

    }else{
        result.value= btoa(text.value);
    }
}
