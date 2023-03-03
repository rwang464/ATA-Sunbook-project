<template>
  <div>

    <div class="Wrapper">
      <div class="wrapper-bg"></div>

      <div class="row align-center color-white p-30 space-between">
        <div class="col-0 go-home filter-drop-shadow" @click="sunbookLink()">
          <i class="fa-solid fa-plane"></i> 返回日光记主站
        </div>

        <div class="col-0 row align-center filter-drop-shadow">
          <img src="../static/Sunbook_colour-02.png" height="40" />
          <!-- <img src="../static/sunbook_text.png" class="ml-10" /> -->
        </div>

        <div class="col-0 currency">
          <el-dropdown @command="handleCommand">
            <el-button type="primary" class="currency-change">
              <div class="row align-center">
                <img :src="selectedFlag" width="16px" />

                <div class="currency-show ml-5">
                  {{ selectedCurrency }}
                </div>
              </div>
            </el-button>

            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="item in currencies"
                :key="item.value"
                :command="item.value"
                >{{ item.label }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>

      <div class="text-center wrapper-center">
        <div class="word_order filter-drop-shadow">快来预订！</div>
        <div class="word_vacation m-tb-20 filter-drop-shadow">
          解锁你的阳光海滩度假活动
        </div>
        <div class="word_surfing filter-drop-shadow">
          冲浪，浮潜，水上摩托，市内一日游...
        </div>
      </div>

    </div>

    <div class="search-bar-wrapper">
      <searchBar />
    </div>



    <div class="recommendation-wrapper">
      <div class="menu_title1 row align-center p-rl-20">
        <div class="word-title fs-20 fs-bold col-1">全球热门目的地</div>
      </div>

      <citycards />
    </div>



      
    <div class="row activity-wrapper mb-40 mt-40">
      
     
          <div class="img_container1 row">
              
              <div class="content">
                    
                    <div class="activity-word1">加拿大优选活动</div>
                    <div class="activity-word2 mt-10">多伦多直升机，班夫骑马，温哥华观鲸...</div>

                    <button class="search_icon mt-15">
                      <a href="/search/">
                      <img src="../static/button_icon.png"/>
                      Show Activities
                      </a>
                    </button>
                    
              </div>

          </div>

        
      
            <div class="img_container2 row">
              
              <div class="content">
                    
                    <div class="activity-word1">阳光海滩度假活动</div>
                    <div class="activity-word2 mt-10">冲浪，浮潜，水上摩托...</div>

                    <button class="search_icon mt-15">
                      <a href="/search/">
                      <img src="../static/button_icon.png"/>
                      Show Activities
                      </a>
                    </button>
                    
              </div>

            </div>

    </div>




    <div class="bot-wrapper">

        <div class="reason-word">
          为什么在Sunbook预订？
        </div>


        <div class="image_container">
              <div class="image_container1 p-rl-20">
                <div class="image_container-bg"></div>

                <div class="reason-text-title">
                  Ultimate flexibility
                </div>

                <div class="reason-text-word">
                  You are in control, with free cancellation and payment options to satisfy any plan or budget.
                </div>
              </div>    

              <div class="image_container2 p-rl-20">
                <div class="image_container-bg"></div>
                <div class="reason-text-title">
                  Memorable experiences
                </div>

                <div class="reason-text-word">
                  Browse and book tours and activities so incredible, you’ll want to tell your friends.
                </div>

              </div>

              <div class="image_container3 p-rl-20">

                <div class="reason-text-title">
                  Award-winning support
                </div>

                <div class="reason-text-word">
                  New price? New plan? No problem. We’re here to help, 24/7, in Chinese or English
                </div>
                <div class="image_container-bg"></div>

              </div>
          
        </div>
      
    </div>  
    
    <footerPart />

  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
}
.currency,
.go-home {
  width: 140px;
  color:white; 
  cursor: pointer; 
  pointer-events: auto;
}
.Wrapper {
  width: 100%;
  height: 600px;
  background-image: url("../static/topper.png");
  position: relative;
  border-radius: 24px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
}
.wrapper-bg {
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 24px;
}
.wrapper-center {
  margin-top: 8rem;
}
.img-logo {
  display: flex;
  /* background-color: #112211; */
  position: absolute;
  top: 10px;
}
.img-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.filter-drop-shadow {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.word_order {
  font-family: "Alibaba PuHuiTi";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  text-align: center;
  color: #ffffff;
}
.word_vacation {
  font-family: "Alibaba PuHuiTi";
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
}
.word_surfing {
  font-family: "Alibaba PuHuiTi";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;
}
.stay_icon {
  width: 2rem;
  margin-top: 10rem;
}
.return-sunbook {
  color: white;
  background-color: bisque;
  width: 100%;
  white-space: nowrap;
}
.sunbook-logo {
  position: absolute;
  margin-top: -25px;
  margin-left: 140px;
}
.currency-change {
  background-color: white;
  color: black;
  width: 100px;
  height: 40px;

  border-color: white;
  /* margin-left: 500px; */
}
.currency-change:focus,
.currency-change:hover {
  background-color: #c6cbc9;
  color: black;
  border-color: #c6cbc9;
}
.currency-show {
  align-items: center;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  bottom: 8px;
  right: 40px;
}
.recommendation-wrapper {
  width: 80%;
  margin: 0 auto;
}
.activity-wrapper {
  width: 80%;
  height: 560px;
  margin: 100px auto;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 20px;
}
@media (max-width: 780px) {
  .activity-wrapper {
    align-items: center;
    width: 100%;
    height: 1020px;
    display: flex;
    flex-direction: column;
  }
  .img_container1,.img_container2{
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
  }
}

.activity-wrapper1{
  width: 100%;
  height: 600px;
  margin: 120px auto;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-around;
}
.search_icon{
  display: flex;
  border-radius: 5px;
  padding: 13px 10px;
  background-color: aquamarine;
  border: unset;
}
.img_container1{
  flex-direction: row;
  align-items: end;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('static/selected_activity.png');
  width: 48%;
  height: 100%;
  border-radius: 24px;
}
.img_container2{
  flex-direction: row;
  align-items: end;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('static/selected_activity2.png');
  width: 48%;
  height: 100%;
  border-radius: 24px;
}
.word-title-more {
  border: 1px solid #8dd3bb;
  border-radius: 8px;
  padding: 5px 20px;
}
.search-bar-wrapper {
  margin-bottom: -3rem;
}
.content{
  flex-direction: column;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
}
.activity-word1 {
  width: 100%;
  font-family: "Alibaba PuHuiTi";
  font-style: normal;
  font-weight: 700;
  font-size: 2.78vw;
  line-height: 55px;
  text-align: center;
  color: #ffffff;
}
.activity-word2 {
  width: 100%;
  font-family: "Alibaba PuHuiTi";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
}
.bot-wrapper{
  margin: 0 auto;
  width: 100%;
  height: 100%;
}
.reason-word {
  margin: 0 auto;
  width: 80%;
  height: 40px;
  font-family: "Alibaba PuHuiTi";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
}
.image_container{
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px auto;
  display: flex;
  padding-left: 40px;
  padding-right: 40px;
  width: 85%;
  height: 600px;
}
@media (max-width: 1150px) {
.image_container{
  height: 1100px;
}
}
@media (max-width: 500px) {
.image_container{
  align-items: center;
  height: 1900px;
  flex-direction: column;
}
}
.image_container1, .image_container2, .image_container3{
  display: flex;
  border-radius: 10px;
  background-color: rgb(246, 246, 246);
  background-position: center bottom 30px;
  background-size: 90% 40%;
  background-repeat: no-repeat;
  position: relative;
  align-items: start;
  width: 25%;
  height: 420px;
  margin: 20px;
  padding: 20px;
  flex-direction: column;
  box-shadow: 0px 4px 16px rgba(141, 211, 187, 0.15);
  /* z-index: 10; */
}
.image_container-bg{
  position: absolute;
  /* border:1px solid; */
  width: 100%;
  height: 100%;
  background-color: #c6cbc9;
  z-index: -1;
  border-radius: 10px;
}

@media (max-width: 1150px) {
  .image_container1, .image_container2, .image_container3 {
    width: 35%;
  }
}
@media (max-width: 710px) {
  .image_container1, .image_container2, .image_container3 {
    width: 30%;
  }
}
.image_container1{
  background-image: url('static/card1.png');
}
.image_container2{
  background-image: url('static/card2.png');
}
.image_container3{
  background-image: url('static/card3.png');
}
.reason-text-title {
  width: 90%;
  height: 20%;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #112211;
}
.reason-text-word {
  width: 90%;
  height: 10%;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #112211;
  opacity: 0.5;
}
.reason-choose-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  position: absolute;
  width: 1358px;
  height: 600px;
  left: 80px;
  top: 1730px;
}
</style>


<script>
import { useDestinationStore } from "../store/test";
import searchBar from "../components/searchBar.vue";
import citycards from "../components/citycards.vue";
import footerPart from "../components/footerPart.vue";
import axios from 'axios'

export default {
  data() {
    return {
      dateValue: "",
      searchInput: "",
      categories: "",
      activeIndex: "1",
      input: "",
      destinations: [],
      selectedCurrency: "CAD",
      selectedFlag: "/Canada_flag.png",
      selectedDestination:'',
      currentPage:1,
      currency:'CAD',
      currencies: [
        { value: "CAD", label: "CAD", flag: "/Canada_flag.png" },
        {value: 'HKD', label: 'HKD',flag:'../static/Canada_flag.png'},
      ],
      newLocation:"https://sunbook.ca/",
    };
  },
  components: {
    searchBar,
    citycards,
    footerPart,
  },
  computed:{
            filteredDestinations() {
                return this.destinations.filter(destination => {
                return destination.destinationName.toLowerCase().includes(this.searchInput.toLowerCase())
                })
            },
        },
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
        querySearch(queryString, cb) {
            this.searchInput = queryString
            this.searchDestination().then(() => {
            const results = this.filteredDestinations.map(destination => {
                return { value: destination.destinationName,id:destination.destinationId }
            })
            cb(results)
            })
        },
        goNextPage() {
            this.$router.push({ path: '/search' })

        },
        handleSelect() {
            
        },
        cityClick() {
            
        },
        handleCommand(command) {
            this.selectedCurrency = command;
            this.currency = command;
            console.log(this.currency)
            callEvent.$emit('send-currency',this.currency)
            const selected = this.currencies.find(item => item.value === command);
            this.selectedFlag = selected.flag;
            },
            searchTurkey(){
            this.selectedDestination="585";
            this.selectDestination(this.currentPage);

            },
            searchSydney(){
            this.selectedDestination="357";
            this.selectDestination(this.currentPage);
            },
            searchBaku(){
            this.selectedDestination="22974";
            this.selectDestination(this.currentPage);
            },
            searchMale(){
            this.selectedDestination="4673";
            this.selectDestination(this.currentPage);
            },
            searchParis(){
            this.selectedDestination="479";
            this.selectDestination(this.currentPage);
            },
            searchNewYork(){
            this.selectedDestination="687";
            this.selectDestination(this.currentPage);
            },
            searchLondon(){
            this.selectedDestination="737";
            this.selectDestination(this.currentPage);
            },
            searchTokyo(){
            this.selectedDestination="334";
            this.selectDestination(this.currentPage);
            },
            searchDubai(){
            this.selectedDestination="828";
            this.selectDestination(this.currentPage);
            },
            seachToronto(){
            this.selectedDestination='623'
            this.selectDestination(this.currentPage);
            },
            searchActivity(){
            this.selectedDestination='631'
            this.selectDestination(this.currentPage);
            },
            selectDestination(currentPage) {
            this.$router.push({ path: '/search'}) 
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
      axios.post('/api/products/search', params)
            .then(response=>{
                let turkeyData={
                    products: response.data.products,
                    totalCount: response.data.totalCount,
                    selectedDestination:this.selectedDestination
                    
                    
                }
                console.log(response.data.products)
                console.log(turkeyData)
                callEvent.$emit('send-turkey',turkeyData)
                    
            })
            } catch(error){
                console.log(error)
            }


            },
            updateCurrency(item) {
            this.currency = item.value;
            console.log(item.value)
            // callEvent.$emit('send-currency',this.currency)
        },
        sunbookLink(){
            window.open(this.newLocation,"_blank");
        },
        

    },
    created() {
        // this.updateCurrency(currencies.value)
    }

}
</script>
html,body {
  margin: 0;
  padding: 0;
  width: 100%;
}
.wrapper {
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  background-image: url("../static/topper.png");
  background-color: #8dd3bb;
  padding: 0 5vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-logo {
  background-color: #112211;
  position: absolute;
  top: 10px;
}
.img-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}



.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.inner {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
}
.inner > * {
  flex: 1;
  margin: 0 5px;
}
.search-bar-wrapper {
  position: relative;
}

.recommendation-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  position: absolute;
  width: 90%;
  height: 30rem;
  left: 5rem;
  top: 20rem;
  /* background-color: #8DD3BB; */
}
.activity-wrapper {
  display: grid;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  position: absolute;
  width: 91%;
  height: 520px;
  left: 5.6%;
  top: 1365px;
  margin-top: 300px;
}



.footer-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 128px;

  position: absolute;
  width: 100%;
  height: 570px;
  left: 0px;
  top: 3060px;

  background-color: #8dd3bb;
}

.reason-choose-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  position: absolute;
  width: 1358px;
  height: 600px;
  left: 80px;
  top: 1730px;
}
.img1 {
  display: grid;
  /* float: left; */
  margin-left: 4rem;
  margin-right: 4rem;
  height: 38rem;
  width: 92%;
  z-index: 100;
  filter: brightness(70%);
  /* opacity: 0;
        filter:alpha(opacity=100) */
}

.menu_title {
  background-color: #7ccab0;
  margin-top: 200px;
  display: flex;
  justify-content: space-between;
  width: 103%;
}
.word_title {
  margin-top: 20px;
  align-items: center;
  width: 70%;
  font-family: "Alibaba PuHuiTi";
  font-style: normal;
  font-weight: 600;
  font-size: 2.29vw;
  color: rgb(0, 0, 0);
}
.button_find {
  margin: 14px 14px 14px 14px;
}
.button_find_1 {
  border-color: #8dd3bb;
}
.button_find_1:focus,
.button_find_1:hover {
  border-color: #7ccab0 !important;
  color: #122512 !important;
}
.button_find_1:active {
  background-color: #8dd3bb;
  color: #112211;
  border-color: #8dd3bb;
}
activity1 {
  display: grid;
}
activity2 {
  display: grid;
}
.activity-image1 {
  position: absolute;
  width: 43.5vw;
  height: 38.9vw;
  left: 0px;
  top: 0px;
  border-radius: 20px;
  filter: brightness(75%);
}
.activity-image2 {
  position: absolute;
  width: 43.5vw;
  height: 38.9vw;
  left: 46.46vw;
  top: 0px;
  border-radius: 20px;
}

.activity-search-box {
  position: absolute;
  top: 400px;
  margin-left: 170px;
}
.activity-search-box1 {
  position: absolute;
  top: 400px;
  margin-left: 730px;
}
.reason-card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 40px;
  position: absolute;
  width: 358px;
  height: 421px;
  left: -2px;
  top: 95px;
  background: #ffffff;
  box-shadow: 2px 4px 16px rgba(17, 34, 17, 0.1);
  border-radius: 20px;
  z-index: 2;
}
.reason-background {
  position: absolute;
  width: 415px;
  height: 465px;
  left: 10px;
  top: 118px;

  background: rgba(141, 211, 187, 0.4);
  border-radius: 20px;
}

.reason-text-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  gap: 16px;
  width: 377px;
  height: 133px;
  flex: none;
  order: 0;
  flex-grow: 0;
}


</style> -->
