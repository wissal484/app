class Volum{
        constructor() {
            this.audiofile=document.getElementById("audio_file");
            this.audiofile.volume=50/100;

            this.volume_range= document.getElementById("volume_range");
            this.volume_range.addEventListener("change",()=>{
                this.audiofile.volume=this.volume_range.value/100;
            });
            this.vitesse_range= document.getElementById("vitesse_range")
            this.vitesse_range.playbackRate = 1.0;
            this.vitesse_range.addEventListener("change",()=>{
                this.audiofile.playbackRate= this.vitesse_range.value/100;
            });
        }
        
        }
    

onload=new Volum();

