class Color{
         constructor(){
            this.color1=document.getElementById("color1");
            this.color1.addEventListener("click",()=>{
                this.selectcolor("color1");
            });
            this.color2=document.getElementById("color2");
            this.color2.addEventListener("click",()=>{
                this.selectcolor("color2");
            });
            this.color3=document.getElementById("color3");
            this.color3.addEventListener("click",()=>{
                this.selectcolor("color3");
            });
            this.color4=document.getElementById("color4");
            this.color4.addEventListener("click",()=>{
                this.selectcolor("color4");
            });

            if (localStorage.getItem("COLOR")==null) {
                document.body.style.background="linear-gradient(to right,black,#343a40,#6c757d,#a4b3c1)"

            }
            this. selectcolor(localStorage.getItem("COLOR"));

         } 
         selectcolor(color){
            if (color=="color1") {
                document.body.style.background="linear-gradient(to right,#ff9966,#ff5e62,#6f9081)"
                document.getElementById("tt").style.color="black"
                document.getElementById("title_audio").style.color="black"
            }
            else if (color=="color2") {
                document.body.style.background="linear-gradient(to right,black,#343a40,#6c757d,#a4b3c1)"
                document.getElementById("tt").style.color="coral"
                document.getElementById("title_audio").style.color="coral"
            }
            else if (color=="color3") {
                document.body.style.background="linear-gradient(to right,var(--dark), var(--teal), #8df3d5,coral)"
                document.getElementById("tt").style.color="black"
                document.getElementById("title_audio").style.color="black"
            }
            else if (color=="color4") {
                document.body.style.background="linear-gradient(to right, black, #ffffff, #ea4343)"
                document.getElementById("tt").style.color="black"
                document.getElementById("title_audio").style.color="black"
            }
            localStorage.setItem("COLOR",color)



         }


}
onload= new Color();