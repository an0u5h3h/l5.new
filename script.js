let show = () => {
    let name = document.getElementById("name").value;
    document.getElementById("message1").innerHTML="Wish you a very Happy New Year to "+name;
    document.getElementById("message2").src="./images/2023.gif";
    document.getElementById("message3").innerHTML="New year, new hopes and newer beginnings- all of us ardently wait for the clock to strike 12 and usher in the new year. It's such a celebratory, positive time which keeps everyone in good spirits!";
    }
document.getElementById("button1").addEventListener("click", show);