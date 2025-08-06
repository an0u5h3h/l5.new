let show=()=>{
    let name=document.getElementById("name").value;
    let mess1=document.getElementById("message1").innerHTML="Wishing you a very Happy New Year to "+name;
    document.getElementById("message2").src="./assets/2026.gif";
    document.getElementById("message3").innerHTML="As the New Year unfolds reflecting on all the wonderful memories created together in the past year is a good way to start. Each experience we shared so far serves as a reminder of how grateful one is to have you in their life. May this upcoming year be filled with even more laughter that echoes, adventures that excite, and moments that become cherished forever. Wishing you boundless happiness, renewed energy for all your endeavors, and the strength to turn your dreams into beautiful realities. Its exciting to see what amazing things this year has in store for you, and to continue this incredible journey by your side. Wishing you a Happy New Year, filled with love, joy, and endless possibilities -- Anousheh"
}

document.getElementById("b1").addEventListener("click", show);