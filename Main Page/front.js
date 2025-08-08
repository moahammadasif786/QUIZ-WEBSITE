alert("press on piano for make it intresting");


function start () {

  let splash = document.getElementById("splash");
 
 
  splash.addEventListener("transitionend", () => {
    document.getElementById("bgm").play();
    splash.remove();
  });
 
  
  splash.classList.add("hide");
}