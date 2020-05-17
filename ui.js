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
<div class="col-sm-6"><img src="img/${newFirstLanguage}.jpg" ></div>
<div class="col-sm-6 "><img src="img/${newSecondLanguage}.jpg" ></div>

`     

        // const filmList = document.querySelector("#films"); // tbody kısmı, bunun altına listeler geliyor
        // filmList.innerHTML += `
        
        // <tr class="film-entry">
        //                                         <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        //                                         <td>${newFilm.title}</td>
        //                                         <td>${newFilm.director}</td>
        //                                         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        //                                       </tr>
        
        // `;
    }
    setSecondLanguagePicture(newSecondLanguage){}


}
