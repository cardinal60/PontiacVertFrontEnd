class PopUpService {
    language;
    constructor() {
       this.language = window.navigator.languages;
      }

      popupFunc(){
        console.log("adding")
        var img = document.createElement("img");
        img.src = "http://sophiechatel.libparl.ca/wp-content/uploads/sites/171/2023/01/Pub_vert_prospeEre_jan2023.jpg";
        img.style.display = "block";
        img.style.width = "600px";
        img.style.height = "500px";
        img.style.top = "50%";
        img.style.bottom = "50%";
        img.style.left = "50%";
        img.style.zIndex = 20;
        img.style.right = "50%";
        img.style.position = "absolute";
        img.style.transform = "translate(-50%, -50%)";
        img.setAttribute("id", "cancerous-pop-up");
    
    
        document.body.appendChild(img);
    
        img.addEventListener("click", function(){
        img.style.display = "none";
        });
        return;
    }
    
    removePopUp() {
      console.log(`removing `)
      let popUp = document.getElementById("cancerous-pop-up");
      if (popUp) popUp.remove();
    }
}

const popUpService = new PopUpService();
  export default popUpService;