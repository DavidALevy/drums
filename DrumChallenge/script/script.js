const qKey = document.getElementById("qKey");

qKey.addEventListener("click", () => {
    document.getElementById("boom").pause();
    document.getElementById("boom").currentTime = 0;
    document.getElementById("boom").play();
})

const wKey = document.getElementById("wKey");

wKey.addEventListener("click", () => {
    document.getElementById("clap").pause();
    document.getElementById("clap").currentTime = 0;
    document.getElementById("clap").play();
})
const eKey = document.getElementById("eKey");

eKey.addEventListener("click", () => {
    document.getElementById("hihat").pause();
    document.getElementById("hihat").currentTime = 0;
    document.getElementById("hihat").play();
})
const rKey = document.getElementById("rKey");
rKey.addEventListener("click", () => {
    document.getElementById("kick").pause();
    document.getElementById("kick").currentTime = 0;
    document.getElementById("kick").play();
})
const tKey = document.getElementById("tKey");
tKey.addEventListener("click", () => {
    document.getElementById("openhat").pause();
    document.getElementById("openhat").currentTime = 0;
    document.getElementById("openhat").play();
})
const yKey = document.getElementById("yKey");
yKey.addEventListener("click", () => {
    document.getElementById("ride").pause();
    document.getElementById("ride").currentTime = 0;
    document.getElementById("ride").play();
})
const uKey = document.getElementById("uKey");
uKey.addEventListener("click", () => {
    document.getElementById("snare").pause();
    document.getElementById("snare").currentTime = 0;
    document.getElementById("snare").play();
})
const iKey = document.getElementById("iKey");
iKey.addEventListener("click", () => {
    document.getElementById("tink").pause();
    document.getElementById("tink").currentTime = 0;
    document.getElementById("tink").play();

})
const oKey = document.getElementById("oKey");
oKey.addEventListener("click", () => {
    document.getElementById("tom").pause();
    document.getElementById("tom").currentTime = 0;
    document.getElementById("tom").play();
})





document.addEventListener("keydown",function(event){
let a=event.which ;
switch(a) {
        case 81:     {document.getElementById("boom").pause();
                    document.getElementById("boom").currentTime = 0;
                    document.getElementById("boom").play();}
                        break;
        case 87:        {document.getElementById("clap").pause();
                    document.getElementById("clap").currentTime = 0;
                    document.getElementById("clap").play();}
                        break;
        case 69:     {document.getElementById("hihat").pause();
                    document.getElementById("hihat").currentTime = 0;
                    document.getElementById("hihat").play();}
                        break;
        case 82:    {document.getElementById("kick").pause();
                    document.getElementById("kick").currentTime = 0;
                    document.getElementById("kick").play();}
                        break; 
        case 84:    {document.getElementById("openhat").pause();
                    document.getElementById("openhat").currentTime = 0;
                    document.getElementById("openhat").play();}
                        break;
        case 89:    {document.getElementById("ride").pause();
                    document.getElementById("ride").currentTime = 0;
                    document.getElementById("ride").play();}
                        break;
        case 85:    {document.getElementById("snare").pause();
                    document.getElementById("snare").currentTime = 0;
                    document.getElementById("snare").play();}
                         break;
        case 73:    {document.getElementById("tink").pause();
                    document.getElementById("tink").currentTime = 0;
                    document.getElementById("tink").play();}
                        break;
        case 79:    {document.getElementById("tom").pause();
                    document.getElementById("tom").currentTime = 0;
                    document.getElementById("tom").play();}  
                        break;
            default:{return 0}               
}           
    })













