class LanguageService {
    language;
    constructor() {
       this.language = window.navigator.languages;
      }

      findUserLanguage() {
          const preferedLanguage = this.language.find((elem) => elem === "en" || elem === "fr");
          console.log(preferedLanguage);
          if(preferedLanguage){
              return "fr";
          }

          else {
              return preferedLanguage;
          }
      }
}

const languageService = new LanguageService();
  export default languageService;