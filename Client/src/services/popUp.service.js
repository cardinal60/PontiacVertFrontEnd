class PopUpService {
    language;
    constructor() {
       this.language = window.navigator.languages;
      }

      popupFunc(){
	
        var img = document.createElement("img");
        img.src = "http://sophiechatel.libparl.ca/wp-content/uploads/sites/171/2023/01/Pub_vert_prospeEre_jan2023.jpg";
        img.style.display = "block";
        img.style.width = "70%";
        img.style.height = "70%";
        img.style.top = "50%";
        img.style.bottom = "50%";
        img.style.left = "50%";
        img.style.zIndex = 20;
        img.style.right = "50%";
        img.style.position = "absolute";
        img.style.transform = "translate(-50%, -50%)";
    
    
        document.body.appendChild(img);
    
        img.addEventListener("click", function(){
        img.style.display = "none";
        });
        return;
    } 
}

const popUpService = new PopUpService();
  export default popUpService;