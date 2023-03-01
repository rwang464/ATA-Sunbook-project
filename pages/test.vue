<template>
 <div>
  
    <button @click="findProduct()">
        click
    </button>
    <!-- <div v-for="total in totals" :key="total.id">
        {{ total.destinationName }}
    </div> -->
    
    <el-autocomplete class="w-p-100" placeholder="请输入目的地" 
        v-model="searchInput" :fetch-suggestions="showName" 
        :trigger-on-focus="false"
        @select="selectDestFunction">
        
      </el-autocomplete>

    <div v-for="product in products" :key="product.id">
        {{  product.title}}
        <br>
        {{ product.productCode }}

    </div>
 </div>
</template>

<script>
import axios from 'axios';
import {useDestinationStore} from '../store/test'
export default {
    data () {
        return {
            totals:'',
            searchInput:'',
            selectedDestination:"",
            selectedDestinationName:"",
            products:'',
            currency:'CAD'
            
        }
    },
    setup(){
        const data = useDestinationStore()
        return{
            data,
        }
    },
    computed:{
        filterDestination(){
            return this.totals.filter(total=>{
                if (total && total.destinationName) {
                return total.destinationName.toLowerCase().includes(this.searchInput.toLowerCase())
                }
            })
        }
    },
    created(){
        
    },
    methods:{
        // async aaaaa(){
        //     try{
        //         const response=await axios.get('/api/v1/taxonomy/destinations');
        //         this.destinations=response.data.data
        //         console.log(this.destinations)
        //     }catch(error){
        //         console.log(error)
        //     }
        // },
        async getData(){
           await this.data.getDestinations()
           this.totals=this.data.destinations
            //console.log(this.totals)
        },
    
        showName(inputName,aa){
            this.searchInput=inputName
            this.getData().then(()=>{
                const result=this.filterDestination.map((total)=>{
                    return {value:total.destinationName, id:total.destinationId}
                })
                aa(result)
            })
        },
        selectDestFunction(item){
            this.selectedDestination = item.id
            this.selectedDestinationName=item.value
            console.log(this.selectedDestination)
        },
        async findProduct(){
            console.log(this.selectedDestination)

            try{
                const params={
                    filtering:{
                        destination: this.selectedDestination,
                    },
                    currency:this.currency,
                }
                const response=await axios.post('/api/products/search', params)
                this.products=response.data.products
                console.log(this.products)
            }catch(error){
                console.log(error)
            }
        }
    }
}
</script>
