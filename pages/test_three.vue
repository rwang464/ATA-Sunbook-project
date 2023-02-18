<template>
    <div>
        <input type="text" v-model="searchInput"  @input="searchDestination" placeholder="Search city...">
        <button @click="searchDestination">
            search
        </button>
        <!-- {{ getTags() }}
    <div v-if="getTags">
        <div v-for="tag in tags" :key="tag.id">
            {{ tag.tagId}}
            {{ tag.parentTagIds }}
        </div>

    </div> -->
  
    <!-- <pre>{{ getTagsAndGroup()}}</pre> -->

        <ul>
            <li v-for="destination in filteredDestinations" :key="destination.destinationId" @click="selectDestination(destination.destinationId)">
                {{ destination.destinationName }}
            </li>
        </ul>
        <div v-if="selectedDestination">
            <p>Selected Destination: {{ selectedDestination }}</p>
            <!-- <p>Selected Currency:{{ selectedCurrency }}</p> -->
            
                <div v-for="product in products" :key="product.id">
                    {{ product.title }}

                    
                    <br>

                    <!-- {{ (product.reviews && product.reviews.combinedAverageRating) || 'N/A' }} -->
                   <!-- {{ product.duration}} -->
                    <!-- {{ product.tags }} -->
              
                   
                    <img v-if="product.images[0]" :src="product.images[0].variants[0].url" :alt="product.images[0].caption">
                </div>
                <!-- {{ productTags() }} -->
                
            
                <p> Total Count: {{ totalCount }}</p>
                
                <!-- price selector -->
                <div>
                    Price
                </div>
                <div class="block">
                    <el-slider
                    v-model="value"
                   @change="getPageData(1);currentPage=1"
                    range
                    show-stops 
                    :step="100"
                    :max="maxValue">
                    </el-slider>
                </div>

               

                <!-- end -->
                <!-- rate selector -->

                <div>
                    <div>Rating</div>
                    <el-button v-if="isSelected" @click="clearSelection();currentPage=1" type="text">Clear</el-button>
                    <br>
                <el-radio v-model="radio1" label="1" size="medium"  border @change="getPageData(1);currentPage=1; isSelected=true" >0+</el-radio>
                <el-radio v-model="radio1" label="2"  size="medium" border @change="getPageData(1);currentPage=1; isSelected=true" >1+</el-radio>
                <el-radio v-model="radio1" label="3"  size="medium" border @change="getPageData(1);currentPage=1; isSelected=true">2+</el-radio>
                <el-radio v-model="radio1" label="4"  size="medium" border @change="getPageData(1);currentPage=1; isSelected=true" >3+</el-radio>
                <el-radio v-model="radio1" label="5"  size="medium" border @change="getPageData(1);currentPage=1; isSelected=true" >4+</el-radio>
            </div>
            <br>
          <!-- end -->

          <!-- Duration -->
          <div>Duration</div>
          
            <el-checkbox-group v-model="checkedDurations">
                
                    <el-checkbox v-for="duration in durationOptions" :label="duration" :key="duration" @change="getPageData(1);currentPage=1">
                    </el-checkbox>
           
            </el-checkbox-group>

         <br>
         <!-- end -->


        <!-- 页码 -->
        <el-pagination
            background
            layout="prev, pager, next"
            pager-count:5
            :total="totalPages*10"
            :current-page="currentPage"
            @current-change="setCurrentPage">
            </el-pagination>
        </div>
     </div>
    
</template>
<script>
import { useDestinationStore } from '../store/test'
import axios from 'axios'
import Pagination from 'vue-pagination-2'

export default {
    

    data() {
        return {
            searchInput: '',
            destinations: [],
            selectedDestination: '',
            // selectedCurrency:'',
            products: [],
            totalCount: 0,
            currency: 'USD',
            currentPage: 1,
            value:[0,1500],
            maxValue:1500,
            allProducts: [],
            radio1: '0',
            checkedDurations: [],
            durationOptions: ['Up to 1 hour', '1 to 4 hours', '4 hours to 1 day', '1 to 3 days'],
            isSelected:false,
            tags:[],
            groupedTags: {},
            tagPaths:{},
            tagParent:'',
            tagInfoId:''
           
            
            

    }
},
components: {
    pagination: Pagination
  },

computed: {

    filteredDestinations() {
        return this.destinations.filter(destination => {
            return destination.destinationName.toLowerCase().includes(this.searchInput.toLowerCase())
        })
    },
    // compute pages 
    totalPages() {
            return Math.ceil(this.totalCount / 7)
            
        },
    pages(){
        return Array.from({ length: this.totalPages }, (_, i) => i + 1)
    },
    // maxValueshow() {
    //     return Math.max(...this.allProducts.map(product => product.pricing.summary.fromPrice))
        
    // }
    
    
    // // define pages which can be visible
    // visiblePages() {
    //     if (this.totalPages <= 5) {
    //         return this.pages
    //     }
    //     if (this.currentPage < 5) {
    //         return this.pages.slice(0, 5)
    //     } else if (this.currentPage >= this.totalPages - 5) {
    //         return this.pages.slice(-5)
    //     } else {
    //         let start = this.currentPage - 2
    //         let end = this.currentPage + 2
    //         return this.pages.slice(start - 1, end)
    //     }
        
    // },

},
// import store.vue since we store the desintation into store.vue
setup() {
    const destination = useDestinationStore()
    return {
        destination,
        ...destination.destinations,
        ...destination.defaultCurrencyCode
    }
},

methods: {
    async searchDestination() {
        await this.destination.getDestinations()
        this.destinations = this.destination.destinations
    },
     selectDestination(destinationId) {
        //show destinationId
        this.selectedDestination = destinationId
        // this.selectedCurrency=defaultCurrencyCode
       
        
        try {
            let highestPrice = this.value[1];
            if (highestPrice > 500) {
                highestPrice = '10000';
            }
            const params = {
                filtering: {
                    destination: this.selectedDestination,
                    lowestPrice:this.value[0],
                    highestPrice:highestPrice,
                    rating:{
                        from:"",
                        to:""
                    },
                    durationInMinutes:{
                        from:"",
                        to:"",
                    },
                    // tags:[21972]

                },
                currency: this.currency,
                pagination:{
                    start:1,
                    count:7
                }
            }
            if (this.radio1 === "1") {
                params.filtering.rating.from = 0;
                params.filtering.rating.to = 1;
            } else if (this.radio1 === "2") {
                params.filtering.rating.from = 0;
                params.filtering.rating.to = 2;
            } else if (this.radio1==="3"){
                params.filtering.rating.from=0;
                params.filtering.rating.to=3;
            }else if (this.radio1==="4"){
                params.filtering.rating.from=0
                params.filtering.rating.to=4
            }else if (this.radio1==="5"){
                params.filtering.rating.from=0
                params.filtering.rating.to=5
            }
            if(this.checkedDurations.includes('Up to 1 hour')){
                params.filtering.durationInMinutes.from=0;
                params.filtering.durationInMinutes.to=60

            }else if(this.checkedDurations.includes('1 to 4 hours')) {
                params.filtering.durationInMinutes.from=60;
                params.filtering.durationInMinutes.to=240
            }else if (this.checkedDurations.includes('4 hours to 1 day')) {
                params.filtering.durationInMinutes.from=240;
                params.filtering.durationInMinutes.to=1440
            }else if (this.checkedDurations.includes('1 to 3 days')) {
                params.filtering.durationInMinutes.from=1440;
                params.filtering.durationInMinutes.to=4320
            }
            axios.post('/api/products/search', params)
                .then(response => {
                    this.products = response.data.products
                    this.totalCount = response.data.totalCount
                    
                    this.getPageData(1)
                })
        } catch (error) {
            console.error(error);
        }
    },
    // maxValueToShow(value) {
    // return this.highestPrice > 500 ? '500+' : this.value[1];
    // },
    clearSelection(){
        this.radio1 = null;
        this.isSelected = false;
        this.getPageData(this.currentPage)
    },
    setCurrentPage(page) {
        this.currentPage = page
        this.getPageData(this.currentPage)
      
      
    },
//    prevPage(){
//         if (this.currentPage > 1) {
//         this.currentPage--
//         this.getPageData(this.currentPage)
//         }
//    },
//    nextPage(){
//     if (this.currentPage < this.totalPages) {
//         this.currentPage++
//         this.getPageData(this.currentPage)
//         }
//    },
   getPageData(currentPage) {
    
        try {
        const params = {
        filtering: {
        destination: this.selectedDestination,
        lowestPrice:this.value[0],
        highestPrice:this.value[1],
        rating:{
                from:"",
                to:""
                    },
        durationInMinutes:{
            from:"",
            to:"",
            },
        // tags:[11928]

      },
        currency: this.currency,
        pagination: {
        start: (currentPage - 1) * 7+1,
        count: 7
        }
     }
     if (this.radio1 === "1") {
                params.filtering.rating.from = 0;
                params.filtering.rating.to = 1;
            } else if (this.radio1 === "2") {
                params.filtering.rating.from = 0;
                params.filtering.rating.to = 2;
            } else if (this.radio1==="3"){
                params.filtering.rating.from=0;
                params.filtering.rating.to=3;
            }else if (this.radio1==="4"){
                params.filtering.rating.from=0
                params.filtering.rating.to=4
            }else if (this.radio1==="5"){
                params.filtering.rating.from=0
                params.filtering.rating.to=5
            }
    if(this.checkedDurations.includes('Up to 1 hour')){
        params.filtering.durationInMinutes.from=0;
        params.filtering.durationInMinutes.to=60

        }
    else if(this.checkedDurations.includes('1 to 4 hours')) {
        params.filtering.durationInMinutes.from=60;
        params.filtering.durationInMinutes.to=240
    }else if (this.checkedDurations.includes('4 hours to 1 day')) {
        params.filtering.durationInMinutes.from=240;
        params.filtering.durationInMinutes.to=1440
    }else if (this.checkedDurations.includes('1 to 3 days')) {
        params.filtering.durationInMinutes.from=1440;
        params.filtering.durationInMinutes.to=4320
    }

        axios.post('/api/products/search', params)
        .then(response => {
        this.products = response.data.products
        this.totalCount = response.data.totalCount
        })
        } catch (error) {
        console.error(error);
        }
    },
    productTags() {
    let  groupedProducts = {};
    for (let product of this.products) {
      for (let tag of product.tags) {
        if (!groupedProducts[tag]) {
          groupedProducts[tag] = [product.title];
        } else {
          groupedProducts[tag].push(product.title);
        }
      }
    }
    // this.tagsProduct = groupedProducts;
    console.log(groupedProducts)
  },
  async getTagsAndGroup() {
  try {
    const response = await axios.get('/api/products/tags/')
    this.tags = response.data.tags;
    this.tagPaths = {};
    // for (let tag of this.tags) {
    //   this.tagPaths[tag.tagId] = this.getTagPath(this.tags, tag.tagId);
    //   console.log(this.tagPaths)
    // }
    for (let i = 0; i < this.tags.length; i++) {
        let tag = this.tags[i];
        console.log(tag.parentTagIds)
        if (!tag) {
            continue;
        }
        this.tagPaths[tag.tagId] = this.getTagPath(this.tags, tag.tagId);
        let progress = (i + 1) / this.tags.length;
        console.log(`Processing tag ${i + 1} of ${this.tags.length}: ${Math.round(progress * 100)}%`);
    }

    // console.log(this.tagPaths)
  } catch (err) {
    console.log(err);
  }
},
getTagPath(tags, tagId) {
//   console.log('tagId', tagId);
//   console.log('tags', tags);
  let path = [tagId];
  let currentTag = tags.find(tag => tag.tagId === tagId);
  if (currentTag && currentTag.parentTagIds && currentTag.parentTagIds.length) {
    while (currentTag.parentTagIds.length) {
      let parentTag = tags.find(tag => tag.tagId === currentTag.parentTagIds[0]);
    //   console.log(currentTag)
    //   console.log(parentTag)
      if (!parentTag) {
        break;
      }
      if(!currentTag.parentTagIds){
        
      }
      path.unshift(parentTag.tagId);
      currentTag = parentTag;
    }
  }
  return path;
}






},




}




    

</script>

<style>

</style>
