const HTTPInterface = {
    SERVER_URL: 'https://pontiac-vert.herokuapp.com/api',
  
    async GET(endpoint) {
      const response = await fetch(`${this.SERVER_URL}/${endpoint}`);
      return response.json();
    },

    async IP(){
      const response = await fetch("https://api.ipify.org/?format=json");
      return response.json();
    },
  
    async POST(endpoint, data) {
      const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json',
        },
      });
      return response.status;
    },
  
    async DELETE(endpoint) {
      const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
        method: 'DELETE',
      });
      return response.status;
    },
  
    async PATCH(endpoint) {
      const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
        method: 'PATCH',
      });
      return response.status;
    },
  };
  
  class HTTPService {
    constructor() {
      this.consultations = [];
      this.chapters = [];
      this.consultationsBaseURL = 'consultations';
      this.chaptersBaseUrl = 'chapters';
    }
    /**
     * Fait une requête GET pour recevoir IP du client
     * @returns
     */
    async getIp() {
      try {
        return await HTTPInterface.IP();
      } catch {
        return "0.0.0.0.15";
      }

    }
  
    /**
     * Fait une requête GET à /api/consultations pour obtenir toutes les recettes
     * @returns
     */
    async fetchAllConsultations() {
      try {
        return await HTTPInterface.GET(`${this.consultationsBaseURL}`);
      } catch (error) {
        return this.consultations;
      }
    }

    /**
     * Fait une requête GET à /api/chapters pour obtenir toutes les recettes
     * @returns
     */
     async fetchAllChapters() {
      try {
        return await HTTPInterface.GET(`${this.chaptersBaseUrl}`);
      } catch (error) {
        return this.chapters;
      }
    }
  
    /**
     * Récupère une recette à travers son paramètre id
     * @param {*} id : le id qui correspond à la recette qu'on cherche
     * @returns la recette correspondante
     */
    async getConsultationByID(id) {
      return HTTPInterface.GET(`${this.consultationsBaseURL}/${id}`);
    }

    /**
     * Récupère une recette à travers son paramètre id
     * @param {*} id : le id qui correspond à la recette qu'on cherche
     * @returns la recette correspondante
     */
     async getChapterByID(id) {
      return HTTPInterface.GET(`${this.chaptersBaseUrl}/${id}`);
    }

  
    /**
     * Envoie la nouvelle recette au serveur pour la stocker dans la liste des recettes
     * @param {*} recette
     */
    async addNewConsultation(newConsultation) {
      try {
        await HTTPInterface.POST(`${this.consultationsBaseURL}`, newConsultation);
      } catch (error) {
        console.log('An error occured while POSTING new Consultation', error);
      }
    }

    /**
     * Envoie la nouvelle recette au serveur pour la stocker dans la liste des recettes
     * @param {*} recette
     */
     async addNewChapter(newChapter) {
      try {
        await HTTPInterface.POST(`${this.chaptersBaseUrl}`, newChapter);
      } catch (error) {
        console.log('An error occured while POSTING new Consultation', error);
      }
    }

    /**
   * Fait une requête vers /recettes/category/:category
   * Filtre les recettes en fonction d'une catégorie et retourne le résultat
   * Si category est undefined ou null, toutes les recettes sont retournées
   * @param {string} category categorie de recette pour le filtre
   * @returns les recettes de la catégorie de recheche
   */
    async getChaptersByCategory(category) {
      if (!category) {
        return this.fetchAllChapters();
    }

    try {
      return await HTTPInterface.GET(`${this.chaptersBaseUrl}/category/${category}`);
    } catch (error) {
      return this.chapters;
    }
  }
  
    /**
     * Fait une requête DELETE pour supprimer une recette identifiée par son id
     * @param {*} id: recette à supprimer
     */
    async deleteChapter(id) {
      try {
        await HTTPInterface.DELETE(`${this.chaptersBaseUrl}/${id}`);
      } catch (error) {
        console.log('An error occured while DELETING Consultation', error);
      }
    }
 
    /**
     * Fait une requête PATCH pour réinitialiser la liste des recettes
     */
    async resetConsultations() {
      try {
        await HTTPInterface.PATCH(`${this.consultationsBaseURL}/admin/reset`);
      } catch (error) {
        console.log('An error has occured while reseting recipes', error);
      }
    }

    /**
     * Fait une requête PATCH pour réinitialiser la liste des recettes
     */
     async resetChapters() {
      try {
        await HTTPInterface.PATCH(`${this.chaptersBaseUrl}/admin/reset`);
      } catch (error) {
        console.log('An error has occured while reseting recipes', error);
      }
    }
  }
  
  const httpService = new HTTPService();
  export default httpService;