const textArea1= document.getElementById("textarea1");
const textArea2= document.getElementById("textarea2");
const lang1=document.getElementById("langulage1");
const lang2=document.getElementById("langulage2");
const translateButton = document.getElementById("cevir");
const translate = new Translate("en","de");
const ui = new UI();



eventListeners();

function eventListeners() {

    translateButton.addEventListener("click",getLanguages);
    translateButton.addEventListener("click",getLanguages);
    translateButton.addEventListener("click",translateSentence);
    lang1.onchange =  getLanguages;
    lang2.onchange =  getLanguages;  

}

 async function  translateSentence(e) {
    const language1 = textArea1.value;
     translate.setNewText(language1);
     
    console.log(typeof language1);
    console.log(language1);
    console.log(language1.length);

    if(language1.length!=0) {
        const translatedText =  await translate.translateSentence();
         ui.displayResult(translatedText);
    }
    
} 


function getLanguages() {

    const newFirstLanguage = lang1.options[lang1.selectedIndex].value;  
    const newSecondLanguage = lang2.options[lang2.selectedIndex].value;  

    translate.setFirstLanguage(newFirstLanguage);
    translate.setSecondLanguage(newSecondLanguage);
    ui.settLanguagePictures(newFirstLanguage,newSecondLanguage);

};

