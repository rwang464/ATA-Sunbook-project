<<<<<<< HEAD
<template>
  <div class="search-bar1">
    <!-- <div class="search-box"> -->
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

=======
<<<<<<< HEAD
<template>
  <div class="search-bar">
    <!-- <div class="search-box"> -->
    <div class="row mt-10 ml-10">
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

      <div class="col-1"></div>
    </div>
>>>>>>> 25e2e5e3185c36f0159755e958a4ea24baef1bb8
    <el-row :gutter="50" class="mt-0" style="width: 100%; margin: 0 auto">
      <el-col class="mt-20" :xs="24" :sm="12" :md="8" 
        >
        <el-autocomplete class="w-p-100" placeholder="??????????????????" 
        v-model="searchInput" :fetch-suggestions="querySearch" 
        :trigger-on-focus="false"
        @select="selectDestFunction">
        <template slot-scope="props">
          <i class="el-icon-location"></i>
          {{ props.item.value }}
        </template>
      </el-autocomplete>
      </el-col>
      <el-col class="mt-20" :xs="24" :sm="12" :md="8">
        <!-- <el-input class="w-p-100" placeholder="??????" /> -->
        <el-date-picker
          style="width: 100%"
          v-model="dateValue"
<<<<<<< HEAD
          @select="selectDestFunction"
          @change="checkDateChange"
=======
>>>>>>> 25e2e5e3185c36f0159755e958a4ea24baef1bb8
          size="large"
          placeholder="??????????????????"
          format="yyyy-MM-dd"
          type="date"
        >
        </el-date-picker>
      </el-col>
<<<<<<< HEAD
=======
      <!-- <div class="col-0"> -->

>>>>>>> 25e2e5e3185c36f0159755e958a4ea24baef1bb8
      <el-col class="mt-20" :xs="24" :sm="12" :md="8">
        <div class="button_container row just-center">
          <el-button class="search_icon1" @click="selectDestination(currentPage)" >
            <!-- <a :href="/search?city=${city.name}?field1=${index}&date=${city.services}">" -->
            <a class="row"  >
              <img
                src="/button_icon.png"
                style="margin-right: 5px; margin-top: 3px"
              /><div class="text11">Show Activities</div>
            </a>
            
          </el-button>
        </div>
      </el-col>
    </el-row>
    <div class="row"></div>
  </div>
</template>
<<<<<<< HEAD



=======
>>>>>>> 25e2e5e3185c36f0159755e958a4ea24baef1bb8
<script>
import { useDestinationStore } from "../store/test";
import { useTagStore } from "../store/tag";
import axios from "axios";
import callEvent from "../store/callEvent";
export default {
  data() {
    return {
      activeIndex:'1',
      searchInput:'',
      dateValue:new Date(),
      searchcategories:'',
      destinations: [],
      tags:[],
      selectedDestination:"",
<<<<<<< HEAD
      selectedDate:"",
=======
>>>>>>> 25e2e5e3185c36f0159755e958a4ea24baef1bb8
      currency:'CAD',
      products:[],
      currentPage: 1,
      selectedDestinationName:'',
      pickOptions:{
      disabledDate(time){
          return time.getTime()<Date.now()-8.64e7;
          }
      },
      
    };
  },
  mounted (){
<<<<<<< HEAD
      console.log('Initial date value:', this.dateValue)
=======
             
>>>>>>> 25e2e5e3185c36f0159755e958a4ea24baef1bb8
      callEvent.$on('send-currency',(currency)=>{
      this.currency=currency
      // console.log("currency"+ this.currency)
      })
  },
  computed: {
    filteredDestinations() {
      return this.destinations.filter((destination) => {
        return destination.destinationName
          .toLowerCase()
          .includes(this.searchInput.toLowerCase());
      });
    },
    filteredTags() {
      return this.tags.filter((tag) => {
        return tag.allNamesByLocale.en
          .toLowerCase()
          .includes(this.searchcategories.toLowerCase());
      });
    },
  },
  setup() {
    const destination = useDestinationStore();
    const tag = useTagStore();
    return {
      destination,
      ...destination.destinations,
      ...destination.defaultCurrencyCode,
      tag,
      ...tag.tags,
      ...tag.allNamesByLocale,
    };
  },
  methods: {
    init() {
      console.log("init city name", this.$route);
      const { name } = this.$route.params;
      this.cityName = name;
      const { field1, services } = this.$route.query;
      this.fields1 = field1;
      this.services = services;
      // call api
    },
    async searchDestination() {
      await this.destination.getDestinations();
      this.destinations = this.destination.destinations;
    },
    async searchTags() {
      await this.tag.getTags();
      this.tags = this.tag.tags;
    },
    querySearch(queryString, cb) {
      this.searchInput = queryString;
      this.searchDestination().then(() => {
<<<<<<< HEAD
        const results = this.destinations.filter(destination => 
        destination.destinationName.toLowerCase().startsWith(queryString.toLowerCase()))
        .slice(0,10).map((destination) => {
=======
        const results = this.filteredDestinations.map((destination) => {
>>>>>>> 25e2e5e3185c36f0159755e958a4ea24baef1bb8
          return {
            value: destination.destinationName,
            id: destination.destinationId,
          };
        });
        cb(results);
      });
    },
    querySearchCate(queryTag, cate) {
      this.searchcategories = queryTag;
      this.searchTags().then(() => {
        const results = this.filteredTags.map((tag) => {
          return { value: tag.allNamesByLocale.en };
        });
        cate(results);
      });
    },
    selectDestFunction(item) {
<<<<<<< HEAD
      if (item.id) {
        this.selectedDestination = item.id
        this.selectedDestinationName=item.value
        this.selectedDate=this.dateValue
        console.log('Selected date:', this.dateValue)
        console.log('selectDestFunction called')
        console.log(this.selectedDestinationName)
        // console.log(this.selectedDestination)
      }
    },
    async selectDestination(currentPage) {
        if (!this.selectedDestination || !this.selectedDate) 
        {
            this.$alert('Please select a destination and date', 'Missing Destination or date', {
=======
      this.selectedDestination = item.id;
      // console.log(this.selectedDestination)
    },
    selectDestFunction(item) {
        this.selectedDestination = item.id
        this.selectedDestinationName=item.value
        console.log(this.selectedDestinationName)
        // console.log(this.selectedDestination)
    },
    async selectDestination(currentPage) {
        if (!this.selectedDestination) 
        {
            this.$alert('Please select a destination', 'Missing Destination', {
>>>>>>> 25e2e5e3185c36f0159755e958a4ea24baef1bb8
            confirmButtonText: 'Confirm',
            });
            return;
        }
        this.$router.push({ path: '/search'}) 
        // console.log(this.selectedDestination)
        // console.log(this.currency)
        this.selectedDestinationName=this.selectedDestinationName
        console.log(this.selectedDestinationName)
        this.selectedDestination = this.selectedDestination
        try{  
        const params={
            filtering:{
                destination: this.selectedDestination,
<<<<<<< HEAD
                startDate: this.selectedDate
=======
                
>>>>>>> 25e2e5e3185c36f0159755e958a4ea24baef1bb8
            },
            currency:this.currency,
            pagination:{
                start:(currentPage-1)*7+1,
                count:7
            },
        }
        // console.log(params.filtering.destination)
        // console.log(params.currency)
        await axios.post('/api/products/search', params)
          .then(response=>{
            let data={
                products: response.data.products,
                totalCount: response.data.totalCount,
                selectedDestination:this.selectedDestination,
<<<<<<< HEAD
                selectedDate:this.selectedDate,
=======
>>>>>>> 25e2e5e3185c36f0159755e958a4ea24baef1bb8
                currency:this.currency,
                selectedDestinationName:this.selectedDestinationName
            }
            callEvent.$emit('send-data', data)     
          })
        } catch(error){
          console.log(error)
        } 
    },
    setCurrentPage(page) {
      this.currentPage = page;
      this.selectDestination(this.currentPage);
    },
    selectFunction() {},
    handleSelect() {},
  },
};
</script>

<style>
/* Search Bar */
<<<<<<< HEAD
.search-bar1 {
=======
.search-bar {
>>>>>>> 25e2e5e3185c36f0159755e958a4ea24baef1bb8
  position: relative;
  display: grid;
  width: 80%;
  height: 240px;
  top: -7rem;
  margin: 0 auto;
  padding: 5px 20px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(141, 211, 187, 0.15);
  border-radius: 16px;
}
@media (max-width: 769px) {
<<<<<<< HEAD
  .search-bar1 {
=======
  .search-bar {
>>>>>>> 25e2e5e3185c36f0159755e958a4ea24baef1bb8
    height: 280px;
  }
}
.switch-tab {
  height: 50px;
  line-height: 50px;
  padding: 5px 10px;
  cursor: pointer;
}
.switch-tab span {
  font-size: 20px;
  font-weight: bold;
  color: #999;
}

.switch-tab.select {
  border-bottom: 2px solid #ccc;
}

.switch-tab.select span {
  color: #112211;
}
.search_icon1 {
  display: flex;
  border-radius: 5px;
  padding: 12px 10px;
  font-weight: 540;
  line-height: 13px;
  background-color: #a0d9c5;
  border: unset;
}
.search-icon1:focus,.search_icon1:hover{
   background-color:#8DD3BB;
   /* border-color: #8DD3BB; */
   color:#112211 ;
   outline: none !important;
}
.search_icon1:active{
   background-color:#578978;
   color:#112211;
   /* border-color: #578978; */
}
.text11 {
  height: 15px;
  margin-top: 5px;
}
<<<<<<< HEAD
.search-bar1 .navmenu{
  margin-top: 20px;
  margin-left: 20px;
}
=======
/* .search-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 12px 5px;
  background-color: #8dd3bb;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 540;
  font-size: 13px;
  line-height: 13px;
  text-align: start;
  color: #000000;
  width: 130px; 
  border: unset;
} */
>>>>>>> 25e2e5e3185c36f0159755e958a4ea24baef1bb8
@media (max-width: 993px) {
  .button_container {
    justify-content: start;
  }
}
@media (max-width: 768px) {
  .button_container {
    justify-content: center;
  }
}
</style>
<<<<<<< HEAD
=======
=======
<template>
  <div class="search-bar">
    <!-- <div class="search-box"> -->
    <div class="row mt-10 ml-10">
      <div class="col-0">
        <!-- ????????????1-activities -->
        <div
          class="switch-tab"
         
        
        >
          <img src="/activities_icon.png" />
          <span> Activities </span>
        </div>
      </div>
      <div class="col-0 ml-10">
        <!-- ????????????2-stays -->
        <div
          class="switch-tab"
          :class="tabIndex === 2 ? 'select' : ''"
          disabled
        >
          <img src="/stay_icon.png" />
          <span> Stays </span>
        </div>
      </div>

      <div class="col-1"></div>
    </div>
    <el-row :gutter="50" class="mt-0">
      <el-col class="mt-20" :xs="24" :sm="12" :md="8"
        >
        <el-autocomplete class="w-p-100" placeholder="??????????????????" 
        v-model="searchInput" :fetch-suggestions="querySearch" 
        :trigger-on-focus="false"
        @select="selectDestFunction">
        <template slot-scope="props">
          <i class="el-icon-location"></i>
          {{ props.item.value }}
        </template>
      </el-autocomplete>
      </el-col>
      <el-col class="mt-20" :xs="24" :sm="12" :md="8">
        <!-- <el-input class="w-p-100" placeholder="??????" /> -->
        <el-date-picker
          style="width: 100%"
          v-model="dateValue"
          size="large"
          placeholder="??????????????????"
          format="yyyy-MM-dd"
          type="date"
        >
        </el-date-picker>
      </el-col>
      <!-- <div class="col-0"> -->

      <el-col class="mt-20" :xs="24" :sm="12" :md="8">
        <div class="button_container row just-center">
          <el-button class="search_icon1" @click="selectDestination(currentPage)" >
            <!-- <a :href="/search?city=${city.name}?field1=${index}&date=${city.services}">" -->
            <a class="row"  >
              <img
                src="/button_icon.png"
                style="margin-right: 5px; margin-top: 3px"
              /><div class="text11">Show Activities</div>
            </a>
            
          </el-button>
        </div>
      </el-col>
    </el-row>
    <div class="row"></div>
  </div>
</template>
<script>
import { useDestinationStore } from "../store/test";
import { useTagStore } from "../store/tag";
import axios from "axios";
import callEvent from "../store/callEvent";
export default {
  data() {
    return {
      activeIndex:'1',
      searchInput:'',
      dateValue:new Date(),
      searchcategories:'',
      destinations: [],
      tags:[],
      selectedDestination:"",
      currency:'CAD',
      products:[],
      currentPage: 1,
      selectedDestinationName:'',
      pickOptions:{
      disabledDate(time){
          return time.getTime()<Date.now()-8.64e7;
          }
      },
      
    };
  },
  mounted (){
             
      callEvent.$on('send-currency',(currency)=>{
      this.currency=currency
      // console.log("currency"+ this.currency)
      })
  },
  computed: {
    filteredDestinations() {
      return this.destinations.filter((destination) => {
        return destination.destinationName
          .toLowerCase()
          .includes(this.searchInput.toLowerCase());
      });
    },
    filteredTags() {
      return this.tags.filter((tag) => {
        return tag.allNamesByLocale.en
          .toLowerCase()
          .includes(this.searchcategories.toLowerCase());
      });
    },
  },
  setup() {
    const destination = useDestinationStore();
    const tag = useTagStore();
    return {
      destination,
      ...destination.destinations,
      ...destination.defaultCurrencyCode,
      tag,
      ...tag.tags,
      ...tag.allNamesByLocale,
    };
  },
  methods: {
    init() {
      console.log("init city name", this.$route);
      const { name } = this.$route.params;
      this.cityName = name;
      const { field1, services } = this.$route.query;
      this.fields1 = field1;
      this.services = services;
      // call api
    },
    async searchDestination() {
      await this.destination.getDestinations();
      this.destinations = this.destination.destinations;
    },
    async searchTags() {
      await this.tag.getTags();
      this.tags = this.tag.tags;
    },
    querySearch(queryString, cb) {
      this.searchInput = queryString;
      this.searchDestination().then(() => {
        const results = this.filteredDestinations.map((destination) => {
          return {
            value: destination.destinationName,
            id: destination.destinationId,
          };
        });
        cb(results);
      });
    },
    querySearchCate(queryTag, cate) {
      this.searchcategories = queryTag;
      this.searchTags().then(() => {
        const results = this.filteredTags.map((tag) => {
          return { value: tag.allNamesByLocale.en };
        });
        cate(results);
      });
    },
    selectDestFunction(item) {
      this.selectedDestination = item.id;
      // console.log(this.selectedDestination)
    },
    selectDestFunction(item) {
        this.selectedDestination = item.id
        this.selectedDestinationName=item.value
        console.log(this.selectedDestinationName)
        // console.log(this.selectedDestination)
    },
    async selectDestination(currentPage) {
        if (!this.selectedDestination) 
        {
            this.$alert('Please select a destination', 'Missing Destination', {
            confirmButtonText: 'Confirm',
            });
            return;
        }
        this.$router.push({ path: '/search'}) 
        // console.log(this.selectedDestination)
        // console.log(this.currency)
        this.selectedDestinationName=this.selectedDestinationName
        console.log(this.selectedDestinationName)
        this.selectedDestination = this.selectedDestination
        try{  
        const params={
            filtering:{
                destination: this.selectedDestination,
                
            },
            currency:this.currency,
            pagination:{
                start:(currentPage-1)*7+1,
                count:7
            },
        }
        // console.log(params.filtering.destination)
        // console.log(params.currency)
        await axios.post('/api/products/search', params)
          .then(response=>{
            let data={
                products: response.data.products,
                totalCount: response.data.totalCount,
                selectedDestination:this.selectedDestination,
                currency:this.currency,
                selectedDestinationName:this.selectedDestinationName
            }
            callEvent.$emit('send-data', data)     
          })
        } catch(error){
          console.log(error)
        } 
    },
    setCurrentPage(page) {
      this.currentPage = page;
      this.selectDestination(this.currentPage);
    },
    selectFunction() {},
    handleSelect() {},
  },
};
</script>

<style>
/* Search Bar */
.search-bar {
  position: relative;
  display: grid;
  width: 80%;
  height: 240px;
  top: -7rem;
  margin: 0 auto;
  padding: 5px 20px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(141, 211, 187, 0.15);
  border-radius: 16px;
}
@media (max-width: 769px) {
  .search-bar {
    height: 280px;
  }
}
.switch-tab {
  height: 50px;
  line-height: 50px;
  padding: 5px 10px;
  cursor: pointer;
}
.switch-tab span {
  font-size: 20px;
  font-weight: bold;
  color: #999;
}

.switch-tab.select {
  border-bottom: 2px solid #ccc;
}

.switch-tab.select span {
  color: #112211;
}
.search_icon1 {
  display: flex;
  border-radius: 5px;
  padding: 12px 10px;
  font-weight: 540;
  line-height: 13px;
  background-color: #a0d9c5;
  border: unset;
}
.text11 {
  height: 15px;
  margin-top: 5px;
}
/* .search-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 12px 5px;
  background-color: #8dd3bb;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 540;
  font-size: 13px;
  line-height: 13px;
  text-align: start;
  color: #000000;
  width: 130px; 
  border: unset;
} */
@media (max-width: 993px) {
  .button_container {
    justify-content: start;
  }
}
@media (max-width: 768px) {
  .button_container {
    justify-content: center;
  }
}
</style>
>>>>>>> a5891e47ae5feeca6684f057ea1cd3ec110d5caa
>>>>>>> 25e2e5e3185c36f0159755e958a4ea24baef1bb8
