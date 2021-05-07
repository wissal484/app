class Player{
    constructor(){
        var heightMain=document.getElementById("player")
        heightMain.style.height= screen.height +"px";
        if(screen.width<500){
            heightMain.style.width=screen.width + "px";
        }
        var content= document.getElementById("content")
        content.style.height= screen.height-330 +"px";
    }
}
onload= new Player
// ////////////////// new class//////////////////////////////////////////

class Audio_player{

    constructor(){
        this.audio_file=document.getElementById("audio_file")
        this.title_audio=document.getElementById("title_audio")
        this.play=document.getElementById("play")

        this.is_play;
        this.play.addEventListener("click",()=>{
            this.play_pause();
        });
        
        this.names_radio=[];
        this.names_radio[0]="mosaique fm"
        this.names_radio[1]="jawhara fm"
        this.names_radio[2]="radio quran fm"
        this.names_radio[3]="diwan fm"

        this.src_audio=[];
        this.src_audio[0]="https://radio.mosaiquefm.net/mosalive"
        this.src_audio[1]="https://streaming2.toutech.net/jawharafm"
        this.src_audio[2]="http://5.135.194.225:8000/live"
        this.src_audio[3]="https://stream6.tanitweb.com/diwanfm"
        this.server=0;


        this.setResorce();

        document.getElementById("next").addEventListener("click",()=>{
            if (this.server<this.src_audio.length-1){
                ++this.server;
                this.is_play=false
            }else{
                this.server=0
            }
            localStorage.setItem("save",this.server);
            this.setResorce();
        });


        document.getElementById("back").addEventListener("click",()=>{
            if(this.server>0){
                --this.server;
                this.is_play=false
            }else{
                this.server=this.src_audio.length-1;
            }
            localStorage.setItem("save",this.server);
            this.setResorce()
        });

    }
    setResorce(){
        if(localStorage.getItem("save")!=null){
            this.server=localStorage.getItem("save")
        }
        this.audio_file.src= this.src_audio[this.server];
        this.title_audio.innerHTML=this.names_radio[this.server];
        this.play_pause()
    }



    play_pause(){
        if(this.is_play==false){
            this.play.src="img/pause.png"
            this.audio_file.play();
            this.is_play=true;

        }else{
            this.play.src="img/play.png"
            this.audio_file.pause();
            this.is_play=false;
        }
    }
}
onload=new Audio_player()
    

