/*Set id to all cell*/
var elements = document.getElementsByClassName('box');
for( n=0;n<81;n++)
{
    var s="cell_"+(n+1);
    elements[n].setAttribute("id",s);
}


var randomarr = [];
while(randomarr.length < 10){
    var r = Math.floor(Math.random() * 81) + 1;
    if(randomarr.indexOf(r) === -1) randomarr.push(r);
}

console.log(randomarr);



/*Fire Work*/



// function firework()
// {
    
// }



function showBomb(cellid1)
{
    for(i=0;i<10;i++)
    {
        let cell = randomarr[i];
        document.getElementById("cell_" + cell).style.backgroundImage = "url('https://img.icons8.com/emoji/48/000000/bomb-emoji.png')";
        document.getElementById("cell_" + cell).style.backgroundColor="red";
    }
    
    // firework();
}

var cnt=0;
var flag=0;
function checkBomb(cellid)
{
 flag=0;
 var str=cellid.replace("cell_","");
 for(i=0;i<randomarr.length;i++)
 {
     if(randomarr[i]==parseInt(str))
     {
         if(cnt==0)
         {
             document.getElementById("Loser").innerText="You Lose "
         }
         flag=1;
         showBomb(cellid);
     }
 }
 if(flag==0)
 {
  cnt++;
  document.getElementById(cellid).style.backgroundColor="green";
  document.getElementById("cell_"+str).disabled = true;
  document.getElementById(cellid).innerText=cnt;
 }
 else
 {
    for(i=1;i<82;i++)
    {
        document.getElementById("cell_"+i).disabled = true;
    }

 }
 document.getElementById("Total_Points").innerHTML="Total Points:"+cnt;
 if(cnt==71)
 {
    document.getElementById("win").innerText="You'r Winer"
 }

}

function resetall() {
    window.location.reload();
}




if (window.CSS && CSS.supports("color", "var(--primary)")) {
    var toggleColorMode = function toggleColorMode(e) {
      // Switch to Light Mode
      if (e.currentTarget.classList.contains("light--hidden")) {
        // Sets the custom html attribute
        document.documentElement.setAttribute("color-mode", "light"); // Sets the user's preference in local storage
  
        localStorage.setItem("color-mode", "light");
        return;
      }
      /* Switch to Dark Mode
      Sets the custom html attribute */
      document.documentElement.setAttribute("color-mode", "dark"); // Sets the user's preference in local storage
  
      localStorage.setItem("color-mode", "dark");
    }; // Get the buttons in the DOM
  
    var toggleColorButtons = document.querySelectorAll(".color-mode__btn"); // Set up event listeners
  
    toggleColorButtons.forEach(function(btn) {
      btn.addEventListener("click", toggleColorMode);
    });
  } else {
    // If the feature isn't supported, then we hide the toggle buttons
    var btnContainer = document.querySelector(".color-mode__header");
    btnContainer.style.display = "none";
  }


