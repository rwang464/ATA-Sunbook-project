<template>
    <div>
        <div class="search-bar" style="margin-top:200px">
        <div>
    
  </div>
                <div class="search-box">
                    <!-- 导航栏 -->
                <el-menu :default-active="activeIndex" class="navmenu" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1" >
                    <div class="menu">
                        <img src="../static/activities_icon.png">
                        <span>
                           &nbsp; Activities
                        </span>
                    </div>
                    
                </el-menu-item>
                <el-menu-item index="2" disabled>
                    <div class="menu">
    
                        <img src="../static/stay_icon.png" style="margin-top: 0.5rem;">
                        <span style="margin-top: 0.5rem;">
                            &nbsp;  Stays
                        </span>
                    </div>
                   
                </el-menu-item>
                </el-menu>
                </div>

            
                <div class="textbox">
                    <el-autocomplete
                        class="textbox1"
                        v-model="searchInput"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入目的地"
                        :trigger-on-focus="false"
                        @select="selectDestFunction"
                        ></el-autocomplete>
           
                       
                <el-date-picker v-model="dateValue" type="date" class="textbox2" placeholder="请输入日期"></el-date-picker>
                <el-autocomplete
                        class="textbox3"
                        v-model="searchcategories"
                        :fetch-suggestions="querySearchCate"
                        placeholder="请输入种类"
                        :trigger-on-focus="false"
                        @select="selectTagsFunction"
                        ></el-autocomplete>
                
                </div>  
                <div class="search-button">
                    <el-button type="primary" class="my_button" @click="selectDestination(currentPage)">
                        <i class="search_icon" style="height: 20px;vertical-align: middle">
                            <img
                            src="../static/button_icon.png"
                           >
                        </i>
                        Show Activities</el-button>
                        <!-- <img
                            src="../static/button_icon.png"
                            
                        /> -->
                </div>
     </div>
    <div class="product-search-wrapper">
        <div class="product-selection-wrapper">
            <div class="filter-word">
                Filters
            </div>
                <div class="price-selector">
                    <span class="price-selector-word">Price</span>
                    <el-slider
                    class="price-selector-slide"
                    @change="selectDestination(1);currentPage=1"
                    v-model="value"
                    range
                    show-stops 
                    :step="100"
                    :max="maxValue">
                    </el-slider>
                </div>
            <div class="rate-selector">
                <span class="rate-word">Rating </span>
               
                <el-button class="clear-button" style="top:206px;left:90px;" v-if="isSelectedRate" @click="clearRatingSelection();currentPage=1" type="text">Clear</el-button>
               
                <div class="rating-botton">
                <el-radio v-model="radio1" label="1" size="mini"  border @change="selectDestination(1);currentPage=1;isSelectedRate=true" style="margin-right:2px;width:55px">0+</el-radio>
                <el-radio v-model="radio1" label="2"  size="mini" border @change="selectDestination(1);currentPage=1;isSelectedRate=true" style="margin-right:2px;width:55px">1+</el-radio>
                <el-radio v-model="radio1" label="3"  size="mini" border @change="selectDestination(1);currentPage=1;isSelectedRate=true" style="margin-right:2px;width:55px">2+</el-radio>
                <el-radio v-model="radio1" label="4"  size="mini" border @change="selectDestination(1);currentPage=1;isSelectedRate=true" style="margin-right:2px;width:55px" >3+</el-radio>
                <el-radio v-model="radio1" label="5"  size="mini" border @change="selectDestination(1);currentPage=1;isSelectedRate=true" style="margin-right:2px;width:55px" >4+</el-radio>
            </div>
        </div>
            <div class="specials-wrapper">
                <span class="special-word">Specials</span>
                <el-checkbox-group v-model="checkFlags">
                <div class="checkbox-item-specials">
                    <el-checkbox label="Free Cancellation"></el-checkbox>
                </div>
                <div class="checkbox-item-specials">
                    <el-checkbox label="Likely to Sell Out"></el-checkbox>
                </div>
                <div class="checkbox-item-specials">
                    <el-checkbox label="Skip The Line"></el-checkbox>
                </div>
                <div class="checkbox-item-specials">
                    <el-checkbox label="Special Offer"></el-checkbox>
                </div>
                <div class="checkbox-item-specials">
                    <el-checkbox label="Private Tour"></el-checkbox>
                </div>
                <div class="checkbox-item-specials">
                    <el-checkbox label="New Tours"></el-checkbox>
                </div>
                </el-checkbox-group>
            </div>
            <div class="categories-wrapper">
                <span class="categories-word">Categories
                </span>
                <el-button class="clear-button" v-if="isSelectedCateg" @click="clearCateSelection();currentPage=1" type="text">Clear</el-button>
            <el-radio-group v-model="radio2" @change="isSelectedCateg=true">
                <div class="radio-item-categories" v-for="item in categories" v-if="isShowAll || categories.indexOf(item) < 7">
                <el-radio :label="item.value" size="medium">{{item.label}}</el-radio>
                </div>
                </el-radio-group>
                <div @click="isShowAll = !isShowAll" class="more-show">
                {{isShowAll ? 'Less' : 'More'}}
                </div>
            </div>
            <div class="duration-wrapper">
                <span class="duration-word">Duration</span>
                <el-checkbox-group v-model="checkedDurations">
                <div v-for="duration in durationOptions" :key="duration">
                    <el-checkbox :label="duration" style="margin-top: 15px;" @change="selectDestination(1);currentPage=1;">
                    </el-checkbox>
                </div>
            </el-checkbox-group>
            </div>
           
     
        </div>
        <div class="product-wrapper">
        <div class="message-wrapper">
            <div class="message-word">
                show 4 of <span>{{this.totalCount}} places</span>
            </div>
            <div class="sort-wrapper">
                <div class="sort-by">Sort by</div>
                <el-select size="mini" class="sort-button"  v-model="sortBy" @change="sortData">
                    <el-option
                    v-for="item in sortOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    class="recommend-option">

                </el-option>
                </el-select>
            </div>
        </div>
        <div class="product-info">
            <el-col :span="5" v-for="(product, index) in products" :key="index">
                <el-card shadow="hover"  class="product-card-wrapper" @click.native="clickFunction()">   
             <div class="product-image-wrapper">
                    <!-- <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-360x240/06/71/14/2a.jpg" class="product-image"> -->
                    <img v-if="product.images[0]" :src="product.images[0].variants[8].url" :alt="product.images[0].caption"  class="product-image">
                </div>
            <div class="product-text-wrapper">
                <div class="product-text-word">
                    <div class="product-title-word">
                       
                        {{ product.title }}
                    
                        <!-- Niagara Falls Day and Evening Tour With Boat Cruise & Dinner (optional) -->
                    </div>
                    <div class="product-description">

                        {{  displayDescription(product.description) }}
                        <span v-if="isLimited" @click="toDetailPage"> </span>
                    
                        </div>
                        <div class="product-duration-wrapper">
                            <div class="product-durations">
                    <i class="fa-solid fa-mug-saucer"></i>
                            <div class="duration-word1"> 

                                {{product.duration ? displayDuration(product.duration) : "N/A"}}
                            </div>
                            </div>
                            <div class="product-rating">
                            <div style="border: 1px solid #8DD3BB ; padding: 2px;border-radius: 3px 3px;">
                                <span class="product-rate-word" >
                                        &nbsp;  {{ product && product.reviews ? formatNumber(product.reviews.combinedAverageRating) : "0" }} &nbsp; </span> 
                            </div>
                            <div class="rating-word1">
                                Very Good <span style="font-weight: 200;">{{product.reviews ? product.reviews.totalReviews : ""}} reviews</span>
                            </div>
                            
                            </div>
                    </div>
                </div>
                <div class="product-price-wrapper">
                    <div class="product-price-word">
                        <p class="price-word1">starting from</p>
                        <p class="price-word2">${{formatPrice(product.pricing.summary.fromPrice)}}/adult</p>
                        <p class="price-word3">excl. tax</p>
                    </div>
                </div>
                </div>
            <div class="product-button-wrapper">
                <el-button type="success" class="view-price-button" @click="goToInfoPage()">View Place</el-button>
            </div>
               
                
            
              </el-card>
           </el-col>
        </div>
        <!-- Pagination -->
        <div class="page-wrapper">
            <el-pagination class="pagination-product"
                background
                layout="prev, pager, next"
                :page-size="7"
                :total="totalPages*7"
                :current-page="currentPage"
                @current-change="setCurrentPage">
             </el-pagination>
        </div>
     
   

        </div>
</div>
</div>
</template>
<script>
import { useDestinationStore } from '../store/test'
import{useTagStore} from '../store/tag'
import axios from 'axios'
import callEvent from "../store/callEvent"

export default{
 
    data() {
        return{
            sortBy: 'recommended',
            sortOptions: [
            { value: 'recommended', label: 'Recommended' },
            { value: 'price', label: ' Price' },
            { value: 'duration', label: 'Duration' }
            ],
            // description:'Experience Toronto from the sky on a helicopter tour over the city! As you soar through the air, look down on the skyscrapers, CN Tower, the waterfront, Fort York and other city sights. This 7-minute ride follows a route of nearly 9 miles (15 km) and includes one souvenir photo. Five departure times are available.',
            isLimited:false,
            isBackground:true,
            value: [0,2000],
            maxValue:2000,
            radio1:"",
            isSelectedRate:false,
            isSelectedCateg:false,
            checkFlags:[],
            radio2:"",
            isShowAll: false,
            categories: [
                {value: 3, label: 'Art & Culture'},
                {value: 6, label: 'Classes & Workshops'},
                {value: 9, label: 'Food & Drink'},
                {value: 12, label: 'Outdoor Activities'},
                {value:15, label:'Seasonal & Special Occasions'},
                {value:18, label:'Tickets & Passes'},
                {value:21, label:'Tours, Sightseeing & Cruises'},
                {value:24, label:'Travel & Transportation Services'},
                {value:27, label:'Unique Experiences'},
                ],
            checkedDurations:[],
            durationOptions: ['Up to 1 hour', '1 to 4 hours', '4 hours to 1 day', '1 to 3 days'],
            products:[],
            totalCount:"",
            currentPage:1,
            activeIndex:'1',
            searchInput:'',
            dateValue:'',
            searchcategories:'',
            destinations: [],
            tags:[],
            selectedDestination:"",
            currency:'CAD',
            selectedTags:"",
            
        }
        
    },
    setup() {
        const destination = useDestinationStore()
        const tag=useTagStore()
            return {
                destination,
                ...destination.destinations,
                ...destination.defaultCurrencyCode,
                tag,
                ...tag.tags,
                ...tag.allNamesByLocale,
        }
    }, 
    mounted () {
        callEvent.$on('send-data', (data) => {
            console.log('products',data.products)
            console.log('totalCount',data.totalCount)  
            console.log('destination',data.selectedDestination)
            this.products = data.products
            this.totalCount = data.totalCount
            this.selectedDestination=data.selectedDestination
      
})

  },
   computed:{
    totalPages() {
            return Math.ceil(this.totalCount / 7)
            
        },
        filteredDestinations() {
                return this.destinations.filter(destination => {
                return destination.destinationName.toLowerCase().includes(this.searchInput.toLowerCase())
                })
            },
        filteredTags(){
        return this.tags.filter(tag=>{
            return tag.allNamesByLocale.en.toLowerCase().includes(this.searchcategories.toLowerCase())
        })
    },
   },
//   beforeDestroy () {
//     callEvent.$off('send-data', products)
//   },


    methods:{
        sortData () {
        switch (this.sortBy) {
        case 'price':
        // sort products by price
        break
        case 'duration':
        // sort products by duration
        break
            }
        },
        selectDestination(currentPage) {
           
           this.$router.push({ path: '/search'}) 
           console.log(this.selectedDestination)
           this.selectedDestination = this.selectedDestination
            this.selectedTags=this.selectedTags
           console.log(this.selectedTags.length)
          
           
           try{
            
           const params={
               filtering:{
                   destination: this.selectedDestination,
                   
                   lowestPrice:this.value[0],
                   highestPrice:this.value[1],
                   durationInMinutes:{
                       from:"",
                       to:"",
                   },
                   flags:[],
                    tags:[],
                   rating:{
                       from:"",
                       to:""
                   },
                   startDate: this.dateValue,
               },
               
               currency:this.currency,
               pagination:{
                   start:(currentPage-1)*7+1,
                   count:7
               },
               
             
           }
           if(params.filtering.tags){
                if (this.selectedTags) {
                    console.log(this.selectedTags)
                    params.filtering.tags.push(this.selectedTags)
                }else if(!this.selected){
                    params.filtering.tags=[]
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
            if(this.checkFlags.includes('Free Cancellation')){
                params.filtering.flags.push('FREE_CANCELLATION')
            }
            if(this.checkFlags.includes('Likely to Sell Out')){
                params.filtering.flags.push('LIKELY_TO_SELL_OUT')
            }
            
           axios.post('/api/products/search', params)
            .then(response=>{
               // let data={
               //     products: response.data.products,
               //     totalCount: response.data.totalCount,
               // }
               // callEvent.$emit('send-data', data)
               this.products = response.data.products
               this.totalCount = response.data.totalCount
               console.log(params.filtering.flags)
               console.log(params.filtering.tags)
                // console.log(params.filtering.startDate)
            })
           } catch(error){
               console.log(error)
           }
       
           
       },
        toDetailPage(){
            this.$router.push({ path: '/search' })
        },
        clickFunction() {
            console.log("click me")   
        },
        goToInfoPage(){
            this.$router.push({path: '/infoDetail'})
        },
        displayDescription(description) {
            let desc = description
            let rows = desc.split('\n')
            if (desc.length > 260) {
                desc = desc.slice(0,260) + '...more'
                this.isLimited=true
            }
            // console.log(desc)
            return desc
        },
        displayDuration(duration) {
        let display = '';
        if (duration.fixedDurationInMinutes) {
            let hours = Math.floor(duration.fixedDurationInMinutes / 60);
            let mins = duration.fixedDurationInMinutes % 60;
            if (hours === 1) {
            display = `${hours} hour`;
            } else if (hours > 1) {
            display = `${hours} hours`;
            }
            if (mins > 0 && hours < 1) {
            display = `${mins} mins`;
            } else if (mins > 0 && hours >= 1) {
            display += ` ${mins} mins`;
            }
        } else if (duration.variableDurationFromMinutes && duration.variableDurationToMinutes) {
            let fromHours = Math.floor(duration.variableDurationFromMinutes / 60);
            let fromMins = duration.variableDurationFromMinutes % 60;
            let toHours = Math.floor(duration.variableDurationToMinutes / 60);
            let toMins = duration.variableDurationToMinutes % 60;
            if (fromHours === toHours) {
            display = `${fromHours} hour`;
            } else {
            display = `${fromHours} to ${toHours} hours`;
            }
            if (fromMins > 0 && toMins > 0 && (fromHours < 1 || toHours < 1)) {
            display = `${fromMins} to ${toMins} mins`;
            }
        }else{
            return 'N/A'
        }
        return display;
    },

        formatNumber(number) {
            if (number === "N/A") {
                return number;
            }
            return Number(number).toFixed(1)
        },
        formatPrice(number){
            return Number(number).toFixed(0)
        },
        clearRatingSelection(){
            this.radio1 = null;
            this.isSelectedRate = false;
            this.selectDestination(this.currentPage)
        },
        clearCateSelection(){
            this.radio2 = null;
            this.isSelectedCateg = false;
            this.selectDestination(this.currentPage)
        },
        async searchDestination() {
                await this.destination.getDestinations()
                this.destinations = this.destination.destinations
                },
        async searchTags(){
            await this.tag.getTags()
            this.tags=this.tag.tags
            
        },
        querySearch(queryString, cb) {
            this.searchInput = queryString
            this.searchDestination().then(() => {
            const results = this.filteredDestinations.map(destination => {
                return { value: destination.destinationName, id: destination.destinationId}
            })
            cb(results)
            })
        },
        querySearchCate(queryTag, cate){
            this.searchcategories=queryTag
            this.searchTags().then(()=>{
                const results=this.filteredTags.map(tag =>{
                    return {value:tag.allNamesByLocale.en, id:tag.tagId}
                })
                cate(results)
            })
           
        },
        selectDestFunction(item) {
            this.selectedDestination = item.id
            // console.log(this.selectedDestination)
        },
        goNextPage(){
            this.$router.push({ path: '/search' })
        },
        
        setCurrentPage(page){
            this.currentPage = page
            this.selectDestination(this.currentPage)
        },
        selectTagsFunction(item) {
            this.selectedTags=item.id
            console.log(this.selectedTags)
        },
        handleSelect() {
            
        },
    }
}
</script>

