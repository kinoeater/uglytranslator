class Translate {

    constructor (lang1,lang2) {
        this.lang1 = lang1;
        this.lang2 =lang2;
        this.textToConvert="ama boş girdiniz";
        this.url="https://translate.yandex.net/api/v1.5/tr.json/translate";
        this.key="trnsl.1.1.20200515T075145Z.20b9b8b52929653b.e51db0622c05d3df5fac278c3ef75c282716838f";
         
    }

  
       setFirstLanguage(newFirstLanguage) {
          
          this.lang1=newFirstLanguage;
          
      }
       setSecondLanguage(newSecondLanguage) {
        
         this.lang2=newSecondLanguage;
         
    }

    setNewText(newText) {
        this.textToConvert = newText;
        
    }

    async translateSentence() {
        // POST /api/v1.5/tr/detect?hint=en,de&key=API-KEY   &lang=de-en
      // console.log(`${this.url}?key=${this.key}&text=${this.textToConvert}&lang=${this.lang1}-${this.lang2}`);

      const newText =  this.textToConvert;
      if(newText.length!=0) {

        const response = await fetch(
          `${this.url}?key=${this.key}&text=${this.textToConvert}&lang=${this.lang1}-${this.lang2}` );
        const data = await response.json();
        const result = await data.text[0];
        return result;

      }


      }

   

      

}