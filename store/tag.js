import axios from "axios";
import { defineStore } from "pinia";

 export const useTagStore = defineStore('tag', {
    state: () => ({ 
        tags: []
    //    destinationName:[],
    }),
    getters: {     

        },
    actions: {
        async getTags() {
            try {
                const tag = await axios.get('/api/products/tags/');   
                this.tags=tag.data.tags
                console.log(this.tags)
                console.log("success tag")
               
            }catch(error){
                console.log(error)
            }
        },
       
    },
    
  })