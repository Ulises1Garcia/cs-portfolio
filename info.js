//This code creates the variables that is stored with different elements
var ClashOfClans = document.getElementById("ClashOfClans");
var ClashRoyale = document.getElementById("ClashRoyale");
var BadEggs2 = document.getElementById("BadEggs2");
var Agario = document.getElementById("Agario");

var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");
var info4 = document.getElementById("info4");

//This code is a brief description of the pictures. The summary of the games will apear when clicking the photo.
ClashOfClans.addEventListener("click", function(){
    info1.innerHTML = "<li>Online game where you compete against other people.</li> <li>You train troops to attack other people's village.</li> <li>Other players are capable of attacking your village.</li> <li>The reason they attack your village is so they can take your resources.</li>";
    
});
  
                    
ClashRoyale.addEventListener("click", function(){
    info1.innerHTML = "<li>You collect troops to attack players on a 1v1 battle.</li> <li>They give you chests and inside the chests there is money and more attackers.</li> <li>The coins in the game is too buy good troops to attack.</li>";

});


BadEggs2.addEventListener("click", function(){
    info1.innerHTML = "<li>Your character is an egg and you can play against other online people.</li> <li>You start off with wepons that arn't as good but then after a while start improving them.</li> <li> You can buy other wepons with real money , these guns are really over powered.</li>";
});


Agario.addEventListener("click", function(){ 
    info1.innerHTML = "<li>Online PVP game </li> <li>Your character is a cell</li> <li>The point of the game is too gain mass to become number 1 in the lobby.</li>";
    
});
	
