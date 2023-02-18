<template>
    <div class="wrapper" style="overflow-x:hidden">  
        <div class="img-wrapper">
          
            <img class= "img1" src="../static/topper.png" alt="">
            <!-- <div class="img1_mask"></div> -->
            <div class="img-logo">
                <div class="return-sunbook" style="color:white">
                    <i class="fa-solid fa-plane"></i>
                    
                    返回日光记主站
                    
                </div>
                <div class="sunbook-logo">
                <img src="../static/sunbook_lego.png" >

                <img src="../static/sunbook_text.png" class="sunbook-text" style="left:40px;top:15px">

                </div>
                <div class="language-button">
                    <el-dropdown @command="handleCommand">
                        <el-button type="primary" class="currency-change">
                            <i class="flag-button" >
                                <img :src="selectedFlag"  style="height:18px;width:20px;vertical-align: middle;margin-right: 60px;">
                              
                            </i>
                            <div class="currency-show">
                            {{ selectedCurrency }}
                            </div>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="item in currencies" :key="item.value" :command="item.value">{{item.label}}</el-dropdown-item>
                            </el-dropdown-menu>
                    </el-dropdown>

                </div>
            </div>

            <div class='word_order'>
                快来预订！
            </div>
            <div class="word_vacation">
                解锁你的阳光海滩度假活动
            </div>
           <div class="word_surfing">
            冲浪，浮潜，水上摩托，市内一日游...
           </div>
        </div>

        <div class="search-bar-wrapper">
            <div>
            <searchBar 
            style="bottom:20px;"
            ></searchBar>
            </div>


            <div class="recommendation-wrapper">
                <div class="menu_title">

                    <!-- <div class="word_title" style="display: flex; margin-bottom: 20px;">
                        全球热门目的地
                    </div>
                    <div class="button_find"></div>
                    <el-button plain class="button_find_1" style="display:flex">查看更多</el-button> -->
                   
                        
                  
                    
                </div>
                
                <citycards />

            </div>
            <!-- <div class="activity-wrapper">
                <div class="activity1">
                <img src="../static/selected_activity.png" class="activity-image1">
                <div class="activity-word1">
                    加拿大优选活动
                </div>
                <div class="activity-word2">
                    多伦多直升机，班夫骑马，温哥华观鲸...
                </div>
                <div class="activity-search-box">
                    <el-button type="primary" class="my_button">
                        <i class="search_icon" style="height: 20px;
                             vertical-align: middle">
                            <img
                            src="../static/button_icon.png"
                           >
                        </i>
                        Show Activities</el-button>
                 </div>
                </div>
                <div class="activity2">
                <img src="../static/selected_activity2.png" class="activity-image2">
                <div class="activity-word1" style="margin-left:770px;top:362px">
                    阳光海滩度假活动
                </div>
                <div class="activity-word2" style="margin-left:770px;top:426px">
                    冲浪，浮潜，水上摩托...
                </div>
                <div class="activity-search-box" style="margin-left:900px;top:465px">
                    <el-button type="primary" class="my_button">
                        <i class="search_icon" style="height: 20px;
                             vertical-align: middle">
                            <img
                            src="../static/button_icon.png"
                           >
                        </i>
                        Show Activities</el-button>
                 </div>
                </div>
            </div> -->
            <div class="reason-choose-wrapper">
               
                <div class="reason-word">
                    为什么在Sunbook预订？
                </div>
               
                <div class="reason-card-wrapper">
                <div class="reason-text-box">
                    <div class="reason-text-title">
                    Ultimate flexibility
                    </div>
                    <div class="reason-text-word">
                        You’re in control, with free cancellation and payment options to satisfy any plan or budget.
                    </div>
                </div>
                <div class="card-image">
                    <img src="../static/card1.png">
                </div>
            </div>
            <div class="reason-background"></div>
        

        
            <div class="reason-card-wrapper" style="margin-left:450px">
                <div class="reason-text-box">
                    <div class="reason-text-title">
                        Memorable experiences
                    </div>
                    <div class="reason-text-word">
                        Browse and book tours and activities so incredible, you’ll want to tell your friends.
                    </div>
                    <div class="card-image" style="margin-top:40px;margin-left: 3px;">
                        
                    <img src="../static/card2.png">
                    </div>
                </div>
            </div>
            <div class="reason-background" style="margin-left:450px"></div>
            <div class="reason-card-wrapper" style="margin-left:900px">
                <div class="reason-text-box">
                    <div class="reason-text-title">
                        Award-winning support
                    </div>
                    <div class="reason-text-word">
                        New price? New plan? No problem. We’re here to help, 24/7, in Chinese or English
                    </div>
                    <div class="card-image" style="margin-top:40px;margin-left: 6px;">
                        <img src="../static/card3.png">
                    </div>
                </div>
            </div>
            <div class="reason-background" style="margin-left:900px"></div>
        
        
        </div>
        </div>
        <div class="footer-wrapper">
            <div class="subscribe-wrapper">
                <div class="footer-text-box">
                    <div class="footer-text">
                        Subscribe Newsletter
                    </div>
                    <div class="footer-text2">
                        More travel tips directly into your mailbox!
                    </div>
                    <div class="footer-text3">
                        Get inspired! Receive travel discounts, tips and behind the scenes stories.
                    </div>
                    <el-input v-model="input" class="footer-email" placeholder="Your Email Address"></el-input>
                    <el-button type="info" class="subsribe-button">Subscribe</el-button>
                </div>
                <div class="footer-image">
                    <img src="../static/footer-image.png" alt="">
                </div>
            </div>
            <div class="info-wrapper">
                <div class="media-lego">
                    <img src="../static/sunbook_lego.png" >

                    <img src="../static/sunbook_text.png" class="sunbook-text">
            
                </div>
                <div class="social-lego">
                    <i class="fa-brands fa-facebook fa-lg"></i>
                    <i class="fab fa fa-twitter fa-lg"></i>
                    <i class="fab fa-brands fa-youtube fa-lg"></i> 
                    <i class="fa-brands fa-square-instagram fa-lg"></i>
    
                   
                </div>

                <div class="colunm">
                    <p class="title-word">热门目的地</p>
                    <p class="text-word">加拿大</p>
                    <p class="text-word">坎昆</p>
                    <p class="text-word">古巴</p>
                    <p class="text-word">多米尼加</p>
                    
                </div>

                <div class="colunm" style="margin-left:-25px">
                    <p class="title-word">热门活动</p>
                    <p class="text-word">多伦多直升机</p>
                    <p class="text-word">班夫骑马</p>
                    <p class="text-word">坎昆浮潜</p>
                    <p class="text-word">哈瓦那一日游</p>
                    
                </div>


                <div class="colunm" style="margin-left:-25px">
                    <p class="title-word">热门种草推荐</p>
                    <p class="text-word">怎样预订当地活动</p>
                    <p class="text-word">当地活动推荐</p>
                    <p class="text-word">坎昆最值得一玩的活动</p>
                    <p class="text-word">牙买加当地团推荐</p>
                    
                </div>

                <div class="colunm" style="margin-left:-50px">
                    <p class="title-word">关于Sunbook日光记</p>
                    <p class="text-word">关于我们</p>
                    <p class="text-word">合作伙伴</p>
                    
                </div>
                <div class="colunm" style="margin-left:-70px">
                    <p class="title-word">联系我们</p>
                    <p class="text-word">联系方式</p>
                    <p class="text-word">商务合作</p>
                    
                </div>
            </div>
        </div>
     </div>
    
     


</template>

<script>
import { useDestinationStore } from '../store/test'
import searchBar from '../components/searchBar.vue';
import citycards from '../components/citycards.vue'

    export default {
        data() {
        return {
            dateValue:'',
            searchInput:'',
            categories:'',
            activeIndex:'1',
            input:'',
            destinations: [],
            selectedCurrency: 'CAD',
            selectedFlag:'../static/Canada_flag.png',
            currencies: [
        {value: 'CAD', label: 'CAD',flag:'../static/Canada_flag.png'},
        {value: 'CNY', label: 'CNY',flag:'../static/Canada_flag.png'}
      ],

        };
     },
     components:{
        searchBar,
        citycards,
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
        methods:{
            async searchDestination() {
                await this.destination.getDestinations()
                this.destinations = this.destination.destinations
                },
            querySearch(queryString, cb) {
                this.searchInput = queryString
                this.searchDestination().then(() => {
                const results = this.filteredDestinations.map(destination => {
                    return { value: destination.destinationName }
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
                const selected = this.currencies.find(item => item.value === command);
                this.selectedFlag = selected.flag;
             }
        }

    }
</script>

<style>
html, body {
        margin: 0;
        padding: 0;
        width: 100%;
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
    .search-bar-wrapper{
        position: relative;

    }
   
    .recommendation-wrapper{
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
    .activity-wrapper{
        
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;

        position: absolute;
        width: 91%;
        height: 180%;
        left: 5.6%;
        top: 365%;
        /* background-color: black; */

    }
    

    .stay_icon{
        width:2rem;
        margin-top: 10rem;
    }
    .img-logo{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 24px 32px;
        gap: 362px;
        position: absolute;
        width: 1245px;
        height: 30px;
        left: 72px;
        top: 10px;
        

    }
    .sunbook-logo{
        position: absolute;
        width: 150px;
        height: 45.87px;
        left: 560px;
        top: 10px;
    }
    .currency-change{
        background-color: white;
        color:black;
        width:100px;
        height:40px;
        border-color: white;
    }
    .currency-change:focus,.currency-change:hover{
        background-color: #c6cbc9;
        color:black;
        border-color: #c6cbc9;
    }
    .currency-show{
        position:absolute;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 800;
        font-size: 14px;
        line-height: 19px;
        bottom:8px;
        right:23px;
    }

    
    .wrapper{

        height: 200rem;
        margin: 0;
        padding:0;
        
    }
    .footer-wrapper{

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
       
        background-color: #8DD3BB;
    }
    .img-wrapper{
        width: 100%;
        height: 28rem;

    }
    .reason-choose-wrapper{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 40px;
        position: absolute;
        width: 1358px;
        height: 600px;
        left: 80px;
        top:1730px;
       
    }
    .img1{
        display:grid;
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
   

    .word_order{
        position: absolute;
        width: 100%;
        height: 5%;
        top:15%;
        font-family: 'Alibaba PuHuiTi';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 62px;
        /* identical to box height */

        text-align: center;

        /* Neutrals */

        color: #FFFFFF;


        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 0;
        }
     .word_vacation{
        position: absolute;
        width: 100%;
        height: 20%;
        top:22%;
        font-family: 'Alibaba PuHuiTi';
        font-style: normal;
        font-weight: 700;
        font-size: 43px;
        line-height: 96px;
        /* identical to box height */

        text-align: center;
        text-transform: uppercase;
        /* Neutrals */
        color: #FFFFFF;
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
        }
    .word_surfing{
            position: absolute;
            width: 100%;
            height: 15%;
            top:37%;
            font-family: 'Alibaba PuHuiTi';
            font-style: normal;
            font-weight: 700;
            font-size: 15px;
            line-height: 27px;
            text-align: center;
            /* Neutrals */
            color: #FFFFFF;
            /* Inside auto layout */
            flex: none;
            order: 1;
            flex-grow: 0;
        }

    .menu_title{
        display: flex;
        justify-content: space-between;
        width:100%;
        height:10%;
        
    }
    .word_title{
        font-family: 'Alibaba PuHuiTi';
        font-style: normal;
        font-weight: 600;
        font-size: 2.29vw;
        width:200%;
        color:black;


    }
    .button_find{
        
        margin-left: 50rem;
        margin-top: 0.2rem;
        width: 100%;
        
    }
    .button_find_1{
            
            height:90%;
            border-color: #8DD3BB;
    }
    .button_find_1:focus,.button_find_1:hover{
        
        border-color: #7ccab0 !important;
        color:#122512 !important;
    }
    .button_find_1:active{
        background-color:#8DD3BB;
        color:#112211;
        border-color: #8DD3BB;
    }
    .city-card{
        height:8rem;
        width: 130%;
    }
    .city-image{
       
        height:30%;
        display: block;
        width: 30%;
        margin-bottom: 4rem;

    }
    .city-words{
       
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 8px;
        width: 45%;
        height: 30%;

        flex: none;
        order: 1;
        flex-grow: 1;
    }
    .city-name{
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 900;
        font-size: 1.14vw;
        line-height: 20px;

        color: #112211;

        opacity: 0.7;


    }
    .city-services{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 3px;
        font-size: 0.93vw;
        width: 170%;
        height: 1%;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;

    }
    .activity-image1{
        position: absolute;
        width: 43.5vw;
        height: 38.9vw;
        left: 0px;
        top: 0px;
        border-radius: 20px;
        filter: brightness(75%);
    }
    .activity-image2{
        position: absolute;
        width: 43.5vw;
        height: 38.9vw;
        left: 46.46vw;
        top: 0px;
        border-radius: 20px;
    }
    .activity-word1{
        position:absolute;
        width: 389px;
        height: 55px;
        font-family: 'Alibaba PuHuiTi';
        font-style: normal;
        font-weight: 700;
        font-size: 2.78vw;
        line-height: 55px;
        text-align: center;
        color: #FFFFFF;
        top:360px;
        margin-left: 130px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    .activity-word2{
        position: absolute;
        width: 389px;
        height: 22px;
        font-family: 'Alibaba PuHuiTi';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        top:430px;
        margin-left: 128px;
        /* identical to box height */
        text-align: center;
        color: #FFFFFF;
        flex: none;
        order: 1;
        flex-grow: 0;
    }
    .activity-search-box{
       
        position: absolute; 
        top:470px;
        margin-left: 250px;
    }
    .reason-card-wrapper{
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
        background: #FFFFFF;
        box-shadow: 2px 4px 16px rgba(17, 34, 17, 0.1);
        border-radius: 20px;
        z-index: 2;
        
    }
    .reason-background{
        position: absolute;
        width: 415px;
        height: 465px;
        left: 10px;
        top: 118px;

        background: rgba(141, 211, 187, 0.4);
        border-radius: 20px;
    }
    .reason-word{
         width: 1232px;
        height: 36px;

        font-family: 'Alibaba PuHuiTi';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 44px;
        color: #000000; 
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
    }
    .reason-text-box{
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
    .reason-text-title{
        width: 377px;
        height: 80px;

        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #112211;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
    }
    .reason-text-word{
        width: 377px;
        height: 37px;
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #112211;
        opacity: 0.5;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
    }
    .card-image{
        position:relative;
        width: 377px;
        height: 200px;
        margin-top: 15px

    }
    .subscribe-wrapper{
        position:absolute;
        margin-bottom: 400px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        padding: 0px 24px;
        gap: 180px;
        width: 1232px;
        height: 305px;
        background: #CDEAE1;
        box-shadow: 0px 4px 16px rgba(17, 34, 17, 0.05);
        border-radius: 20px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    .info-wrapper{
        position:absolute;
        margin-bottom: 120px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 140px;
        width: 1268px;
        height: 180px;
        flex: none;
        order: 1;
        flex-grow: 0;
       
    }
   .footer-text-box{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding: 24px 0px;
        gap: 24px;
        width: 593px;
        height: 305px;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
        /* background-color: burlywood; */
   }
   .footer-text{
        width: 364px;
        height: 108px;
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 44px;
        line-height: 54px;
        color: #112211;
        flex: none;
        order: 0;
        flex-grow: 0;
   }
   .footer-text2{
        position:absolute;
        top:160px;
        width: 420px;
        height: 24px;
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: #112211;
        opacity: 0.8;
        flex: none;
        order: 0;
        flex-grow: 0;
   }
   .footer-text3{
        position:absolute;
        top:190px;
        width: 570px;
        height: 19px;
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        color: #112211;
        opacity: 0.7;
        flex: none;
        order: 1;
        flex-grow: 0;
   }
   .footer-email{
        position:absolute;
        top:238px;
        margin-left: 2px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        width: 420px;
        height: 60px;

        border-radius: 4px 4px 0px 0px;
        flex: none;
        order: 0;
        flex-grow: 1;
   }
   .subsribe-button{
        position:absolute;
        background-color:#000000;
        height: 42px;
        top:238px;
        margin-left: 442px;
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 900;
        font-size: 14px;
        line-height: 17px;


   }
   .subsribe-button:focus,.search-button:hover{
    background-color:#000000;
   }
   .subsribe-button:active{
    background-color: #79747E;
   }
   .footer-image{
    position:absolute;
    width: 400px;
    height: 310px;
    left:840px;
    margin-bottom: -5px;
    
   }
    .sunbook-text{
        position: absolute;
        left: 3.5%;
        right: 0%;
        top: 10%;
        bottom: 61.45%;
    }
    .social-lego{
        position:absolute;
        top:85px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 13px;
        width: 130px;
        height: 20px;
    }
    .colunm{
        margin-top: -15px;
        margin-left: 80px;
        
        height: 150px;
            }
    .title-word{
        
        font-family: 'Alibaba PuHuiTi';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        color: #112211;
    }
    .text-word{
        font-family: 'Alibaba PuHuiTi';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;

        /* Blackish Green */

        color: #112211;

        opacity: 0.7;

    }
   
</style>