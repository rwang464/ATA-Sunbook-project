<template>
<div class="productInfoDetail-wrapper">
    <div class="product-path">
        <span class="product-path-word1">Search Results</span>
        <span class="product-path-figure"> ></span>
        <span class="product-path-word2">Toronto 14 mins helicopter tour</span>
    </div>
    <div class="product-detail-title-wrapper">
        <div class="product-detail-title-part">
            <div class="product-detail-title-word">
                <span class="detail-title">Niagara Falls Platinum Tour from Toronto with Attraction, Lunch and Winery Stop</span>
                <span class="detail-rate">
                <el-rate
                    v-model="rateValue"
                    disabled
                    text-color="#ff9900"
                    score-template="{value}">
                 </el-rate>
                </span>
            </div>
            <div class="title-rate-word">
            <div style="border: 1px solid #8DD3BB ; padding: 1px;border-radius: 3px 3px; width:33px;height: 25px;" >
                <span class="product-rate-word" >
                    &nbsp; 4.2  
                </span>
                
            </div>
            <span class="rating-word1" style="margin-left:40px;margin-top:-30px">
                371 reviews
            </span>
        </div>
        </div>
        <div class="product-detail-price-part">
            <div class="product-price-word">
                <p class="price-word2" style="margin-top:1px;line-height: 39px;">$240/adult</p>
            </div>
        </div>
        <div class="product-detail-check-button">
            <el-button type="primary" class="my_button">
               <span class="check-button-word">Check Availability</span> 
            </el-button>
        </div>
    </div>
    <div class="product-photo-wrapper">
        <div class="product-image-detail-main-container">
        <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/e8/5f/be.jpg" class="product-image-detail-main">
        </div>
        <div class="product-image-detail-small-container">
        <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-400x400/06/e8/5f/be.jpg" class="product-image-detail-small">
        <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-400x400/06/e8/5f/be.jpg" class="product-image-detail-small-outside"> 
        <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-400x400/06/e8/5f/be.jpg" class="product-image-detail-small">
        <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-400x400/06/e8/5f/be.jpg" class="product-image-detail-small-outside-below">
        </div>
    </div>
    <div class="product-duration-ticket-info-wrapper">
        <div class="product-duration-info">
            <i class="fa-solid fa-clock" style="color:#8DD3BB;margin-top:16px;margin-left:10px;width: 26px;
            height: 26px;">
            </i>
           <span class="product-duration-info-word">9 to 10 hours (approx.)</span> 
        </div>
        <div class="product-ticket-info">
            <i class="fa-solid fa-mobile" style="color:#8DD3BB;margin-top:16px;width: 30px;height: 30px;"></i>
            <span class="product-duration-info-word" style="left:25px;">Mobile ticket</span>
        </div>
        <div class="product-language-info">
            <i class="fa-solid fa-language" style="color:#8DD3BB;margin-top:17px;width: 34px;height: 34px;" ></i>
            <span class="product-duration-info-word" style="left:30px">Offered in: English </span>
        </div>
    </div>
    <div class="product-overview-wrapper">
        <div class="product-overview-part">
            <div class="product-overview-title-word">
                Overview
            </div>
            <div class="product-overview-body-word">
                Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel, which also served as Foreign Affairs Palace 120 years ago and is hosting its guests by assuming this hospitality mission. With its 452 luxurious rooms and suites, 8500 m2 SPA and fitness area, 18 meeting rooms including 4 dividable ones and 3 terraces with Bosphorus view, Istanbuls largest terrace with Bosphorus view (4500 m2) and latest technology infrastructure, CVK Park Bosphorus Hotel Istanbul is destined to be the popular attraction point of the city. Room and suite categories at various sizes with city and Bosphorus view, as well as 68 separate luxury suites, are offered to its special guests as a wide variety of selection.
            </div>
        </div>
        <div class="product-overview-rate">
            <div class="product-overview-rate-word">
                <span class="product-overview-rate-word-title">
                    4.2
                </span >
                <span class="product-overview-rate-word-body">
                    <span class="body-word1">Very good</span>
                    <span class="body-word2">371 reviews</span>
                </span>
            </div>
        </div>

    </div>
    <div class="product-select-date-and-travellers-wrapper">
        <div class="product-select-data-and-travellers-search-bar">
            <el-menu :default-active="activeIndex" class="navmenu" mode="horizontal" style="margin-left:2px;margin-top:-35px" >
                <el-menu-item index="1" >
                    <div class="menu" style="margin-top:8%">
                       Select Date and Travellers
                        
                    </div>
                    
                </el-menu-item>
            </el-menu>
            <div class="textbox">
                <el-autocomplete
                    class="textbox1" style="margin-left:-24px; margin:-2px;width:240px;"
                    v-model="searchInput"
                    placeholder="Adult Number"
                    :trigger-on-focus="false"
                    @select="selectAdultFunction"
                    ></el-autocomplete>
                
                    <el-autocomplete
                    class="textbox1"  style="margin-left:-24px; margin:-2px;width:240px;"
                    v-model="searchInput"
                    placeholder="Child Number"
                    :trigger-on-focus="false"
                    @select="selectAdultFunction"
                    ></el-autocomplete>

                    <el-autocomplete
                    class="textbox1" style="margin-left:-24px; margin:-2px;width:240px;"
                    v-model="searchInput"
                    placeholder="Senior Number"
                    :trigger-on-focus="false"
                    @select="selectAdultFunction"
                    ></el-autocomplete>

                    <el-date-picker v-model="dateValue" type="date" class="textbox2" 
                    style="margin-left:-24px; margin:-2px;width:240px;"
                    placeholder="请输入日期"></el-date-picker>



            </div>
            <div class="search-button" style="margin-left:115px;">
                    <el-button type="primary" class="my_button">
                        <i class="search_icon" style="height: 20px;vertical-align: middle">
                            <img
                            src="../static/button_icon.png"
                           >
                        </i>
                        Check Availability</el-button>
                       
                </div>

        </div>
    </div>
    <!-- here will be the space for availiability seat after searching  -->
    <!-- here is the end -->
    <div class="product-include-info-wrapper">
        <div class="product-include-info-title-word">
            What’s included?
        </div>
        <div class="product-include-info-container">
            <div class="product-include-info">
                <div class="product-include-row" style="margin:0 0 5px;">
                <i class="fa-solid fa-check" style="color:#8DD3BB;width: 20px;height: 20px;margin-top: 2px;">
                </i>
                <div class="product-include-word">
                Hornblower Cruise (when operating if not operating Journey Behind the Falls is offered)
                </div>
                </div>
                <div class="product-include-row" style="margin:0 0 5px;">
                <i class="fa-solid fa-check" style="color:#8DD3BB;width: 20px;height: 20px;margin-top: 5px;">
                </i>
                <div class="product-include-word">
                Hornblower Cruise (when operating if not operating Journey Behind the Falls is offered)
                </div>
                </div>
                <div class="product-include-row" style="margin:0 0 5px;">
                <i class="fa-solid fa-check" style="color:#8DD3BB;width: 20px;height: 20px;margin-top: 5px;">
                </i>
                <div class="product-include-word">
                    Transportation With Luxury Tour Bus
                </div>
                </div>
            </div>
            <div class="product-not-include-info">
                <div class="product-not-include-row" style="margin:0 0 5px;">
                    <i class="fa-solid fa-xmark" style="color:#8DD3BB;width: 20px;height: 20px;margin-top: 2px;"></i>
                    <div class="product-not-include-word">
                        Hornblower Cruise (when operating if not operating Journey Behind the Falls is offered)
                    </div>
                </div>
                <div class="product-not-include-row" style="margin:0 0 5px;">
                    <i class="fa-solid fa-xmark" style="color:#8DD3BB;width: 20px;height: 20px;margin-top: 2px;"></i>
                    <div class="product-not-include-word">
                        Hornblower Cruise (when operating if not operating Journey Behind the Falls is offered)
                    </div>
                </div>
                <div class="product-not-include-row" style="margin:0 0 5px;">
                    <i class="fa-solid fa-xmark" style="color:#8DD3BB;width: 20px;height: 20px;margin-top: 2px;"></i>
                    <div class="product-not-include-word">
                        Transportation With Luxury Tour Bus
                    </div>
                </div>
            </div>
        </div>
        <div @click="isShowAll = !isShowAll" class="more-show" style="margin-top:-40px;margin-left:2px;">
                {{isShowAll ? 'Less' : 'More'}}
        </div>
    </div>
    <div class="product-pickup-info-wrapper">
        <div class="product-pickup-info-container">
            <div class="product-pick-up-info-container-title">
                Meet and Pickup
            </div>
            <div class="product-pick-up-info-meeting">
            <div class="product-pick-up-info-meeting-title">
                Meeting Points
            </div>
            <div class="product-pick-up-info-meeting-word">
                Select a meeting point
            </div>
            

            </div>
            <div class="textbox" style="width:380px;">
                    <el-autocomplete
                        class="textbox1"
                        style="margin-top:145px;margin-left:-10px"
                        v-model="searchInput"
                        :fetch-suggestions="querySearch"
                        placeholder="Type to search"
                        :trigger-on-focus="false"
                        
                        ></el-autocomplete>

            </div>
            <div class="product-pick-up-start-info">

            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
      return {
        rateValue:4,
        activeIndex:'1',
        dateValue:'',
        isShowAll: false,
        searchInput:'',
      }
    },
    methods:{
        selectAdultFunction() {
            
        },
        querySearch() {
            
        }
    }
  }

</script>

<style>
.productInfoDetail-wrapper{
 
    position: absolute;
    width: 1300px;
    height: 3500px;
    left: 73px;
    top: 160px;

    background-color:aquamarine ;
}
.product-path{
    position: absolute;
    width: 359px;
    height: 17px;
    left: 73x;

}
.product-path-word1{
   
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
}
.product-path-figure{
     width: 16px;
    height: 16px;
    opacity: 0.75;
}
.product-path-word2{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #112211;

    opacity: 0.75;
}
.product-detail-title-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px;
    gap: 303px;
    position: absolute;
    width: 1300px;
    height: 103px;
    /* left: px; */
    top: 60px;
  
}
.product-detail-title-part{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    width: 700px;
    height: 80px;
    
}
.product-detail-title-word{
    display: flex;
    justify-content: space-between;  
    width: 700px;
    height: 48px;


}
.detail-title{
    flex: 1;
    width: 341px;
    height: 29px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 23px;
    color: #112211;
}
.detail-rate{
    display: flex;
    justify-content: space-between;  
    align-items: center;
    margin-right:180px;
   
}
.title-rate-word{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 130px;
    height: 27px;

}
.product-detail-price-part{
    position: absolute;
    width: 150px;
    height: 40px;
    margin-left:810px;

}
.product-detail-check-button{
    
    position:absolute;
    width: 160px;
    height: 48px;
    margin-top: 55px;
    margin-left:795px;
 

}
.check-button-word{
    width: 124px;
    height: 17px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
}
.product-photo-wrapper{
    display: flex;
    flex-direction: row; 
    align-items: flex-start;
    padding: 0px;
    gap: 8px; 
    position: absolute;
    width: 1300px;
    height: 610px; 
    top: 200px;
    border-bottom: 1px solid rgba(17, 34, 17, 0.25);
    flex-wrap: wrap;
}
.product-image-detail-main-container{
    width: 47%;
}

.product-image-detail-main{
    width: 612px;
    height: 550px;
    border-radius: 12px 0px 0px 12px;
}
.product-image-detail-small-container{
    width: 51%;
  display: flex;
  align-items: flex-start;
  gap: 8px; 
  flex-wrap: wrap;

}
.product-image-detail-small{
    width: 324px;
    height: 271px;
}
.product-image-detail-small-outside{
    width: 324px;
    height: 271px;
    border-radius: 0px 12px 0px 0px;
}
.product-image-detail-small-outside-below{
    width: 324px;
    height: 271px;
    border-radius: 0px 0px 12px 0px;
}
.product-duration-ticket-info-wrapper{
    position: absolute;
    width: 100%;
    height: 50px;
    top: 811px;
    border-bottom: 1px solid rgba(17, 34, 17, 0.25);
}
.product-duration-info{
    position: absolute;
    width: 212px;
    height: 50px;
}
.product-duration-info-word{
    position: absolute;
    width: 178px;
    height: 20px;
    left: 38px;
    top:15px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 450;
    font-size: 14px;
    line-height: 20px;
    color: #112211;
}
.product-ticket-info{
    position: absolute;
    width: 140px;
    height: 50px;
    left: 270px;
}   
.product-language-info{
    position: absolute;
    width: 184px;
    height: 50px;
    left: 470px;
}
.product-overview-wrapper{
    margin-top:900px;
    width: 100%;
    height: 420px;
    border-bottom: 1px solid rgba(17, 34, 17, 0.25);
}
.product-overview-part{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    width: 100%;
    height: 180px;

}
.product-overview-title-word{
    width: 88px;
    height: 24px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #112211;

}
.product-overview-body-word{
    width: 1232px;
    height: 120px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #112211;
    opacity: 0.75;

}
.product-overview-rate{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px 64px 16px 16px;
    gap: 10px;
    width: 100px;
    height: 145px;
    background: #8DD3BB;
    border-radius: 12px;
}
.product-overview-rate-word{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
    width: 120px;
    height: 140px;
    margin-left:8px;
    margin-top: 5px;

}
.product-overview-rate-word-title{
    width: 45px;
    height: 39px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #112211;

}
.product-overview-rate-word-body{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
    width: 86px;
    height: 55px;
    margin-top: 10px;

}
.body-word1{
    width: 86px;
    height: 20px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #112211;
}
.body-word2{
    width: 79px;
    height: 17px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #112211;
}
.product-select-date-and-travellers-wrapper{
    width: 100%;
    height: 370px;
    border-bottom: 1px solid rgba(17, 34, 17, 0.25);
}
.product-select-data-and-travellers-search-bar{
    margin-top:70px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 32px 32px;
    gap: 32px;
    isolation: isolate;
    width: 95%;
    height: 247px;
    /* background-color: burlywood; */
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(141, 211, 187, 0.15);
    border-radius: 16px;

}
.product-include-info-wrapper{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
    width: 100%;
    height: 365px;
    margin-top: 50px;
    border-bottom: 1px solid rgba(17, 34, 17, 0.25);
}
.product-include-info-title-word{
    width: 200px;
    height: 30px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #112211;
}
.product-include-info-container{
    margin-top: -24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 300px;
    width: 780px;
    height: 260px;

}
.product-include-info{
    /* display:inline-flex; */
    /* align-items: flex-start; */
    /* padding: 0px;
    gap: 24px; */
    display: block;
    align-items: flex-start;
    width: 330px;
    height: 260px;
    

}
.product-include-word{

    margin-top: -2px;
    width: 330px;
    height: 20px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #112211;
}
.product-include-row{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 330px;
    height: 80px;
    margin-top: -30px;
}
.product-not-include-info{
    position: absolute;
    margin-left: 450px;
    display: block;
    align-items: flex-start;
    width: 330px;
    height: 260px;
}
.product-not-include-row{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 330px;
    height: 80px;
    margin-top: -30px;

}
.product-not-include-word{
    margin-top: -2px;
    width: 330px;
    height: 20px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #112211;
}
.product-pickup-info-wrapper{
    width: 100%;
    height: 440px;
    background-color: aliceblue;
    border-bottom: 1px solid rgba(17, 34, 17, 0.25);
}
.product-pickup-info-container{
    position: relative;
    width: 494px;
    height: 340px;
    top:50px;
    background-color: aqua;
}
.product-pick-up-info-container-title{
    position: absolute;
    width: 180px;
    height: 24px;
    left: 0px;
    top: 0px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #112211;
    background-color: burlywood;
}
.product-pick-up-info-meeting{
    position: absolute;
    width: 185px;
    height: 50px;
    left: 0px;
    top: 56px;
    background-color: chartreuse;
}
.product-pick-up-info-meeting-title{
    position: absolute;
    width: 128px;
    height: 20px;
    left: 0px;
    top: 0px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #112211;
}
.product-pick-up-info-meeting-word{
    position: absolute;
    width: 185px;
    height: 20px;
    left: 0px;
    top: 25px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #112211;

}
.product-pick-up-start-info{
    position: absolute;
width: 85px;
height: 50px;
left: 0px;
top: 162px;
background-color: cornflowerblue;
}
</style>