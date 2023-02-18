import axios from "axios";
import { defineStore } from "pinia";

 export const useDestinationStore = defineStore('destination', {
    state: () => ({ 
       destinations:[],
    //    destinationName:[],
    }),
    getters: {
        
            destinationData: state => state.destinations.map(destinations => ({
                destinationName: destinations.destinationName
            }))
        },
    actions: {
        async getDestinations() {
            try {
                const destination = await axios.get('/api/v1/taxonomy/destinations');
                this.destinations = destination.data.data;
            
                console.log("success")
               
            }catch(error){
                console.log(error)
            }
        },
       
    },
    
  })
  