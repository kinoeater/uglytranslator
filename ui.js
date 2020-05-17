class UI {

    constructor() {
         this.lang1=document.getElementById("textarea1");
         this.lang2=document.getElementById("textarea2");
    }

    displayResult(result) {
        this.lang2.value=result;         
    }

    settLanguagePictures(newFirstLanguage,newSecondLanguage) {
const langPictures = document.getElementById("row1");

langPictures.innerHTML = "";
langPictures.innerHTML = ` 
<div class="card"><img src="img/${newFirstLanguage}.jpg" ></div>
<div class="card"><img src="img/${newSecondLanguage}.jpg" ></div>
`     
    }
   

    // <div class="card"><img src="img/tr.jpg" ></div>
    // <div class="card"><img src="img/de.jpg" ></div>

}
