<template>
  <div>
    <div class="city-wrapper">
      <el-row :gutter="80">
        <el-col
          :xs="24"
          :sm="12"
          :lg="8"
          v-for="(city, index) in cities"
          :key="index"
        >
        
          <el-card shadow="always" class="city-card-body" style="cursor: pointer;"
          @click.native="getId(city.id)" >
            <!-- 一般官网用这个，有利于搜索引擎记忆 -->
            
            <!-- <a :href="`/search?destionId=${city.name}&field1=${index}`"> -->
              <!-- 不用宣传，没有搜索引擎用这个 -->
              <div class="row align-center">
                <div class="city-card-image">
                  <img class="w-110 h-110" :src="city.img" />
                </div>

                <div class="ml-30">
                  <div class="city-body-name">
                {{ city.name }} 
                  </div>

                    <div class="city-body-services mt-10">
                      {{ city.services }}
                    </div>
                </div>
              </div>
            <!-- </a> -->
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style>
a{
  text-decoration: none;
}
.city-wrapper {
  left: 0vw;
  position: relative;
  display: grid;
  padding: 10px 20px 10px 20px;
  margin-top: 40px;
}
@media (max-width: 768px) {
  .container {
    margin-left: 5%;
    margin-right: 5%;
  }
}

@media (max-width: 480px) {
  .container {
    margin-left: 2%;
    margin-right: 2%;
  }
}

.city-card-body {
  height: auto;
  width: 100%;
  margin-bottom: 40px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}

.city-body-name {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 20px;
  color: #112211;
  opacity: 0.7;
}
.city-body-services {
  display: flex;
  flex-direction: row;
  width: 100%;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
}

.city-name {
  position: relative;
  left: 40%;
  width: 100%;
  font-size: 24px;
}

.city-services {
  position: relative;
  left: 40%;
  font-size: 24px;
}
</style>

<script>

export default {
  data() {
    return {
      cities: [
        {
          name: "Istanbul, Turkey",
          id: "585",
          img: "/turkey.png",
          services: "Flights ‧ Hotels ‧ Resorts",
        },
        {
          name: "Sydney, Australia",
          id: "357",
          img: "/australia.png",
          services: "Flights ‧ Hotels ‧ Resorts",
        },
        {
          name: "Baku, Azerbaijan",
          id: "22974",
          img: "/azerbaijan.png",
          services: "Flights ‧ Hotels ‧ Resorts",
        },
        {
          name: "Malé, Maldives",
          id: "4673",
          img: "/maldives.png",
          services: "Flights ‧ Hotels ‧ Resorts",
        },
        {
          name: "Paris, France",
          id: "479",
          img: "/paris.png",
          services: "Flights ‧ Hotels ‧ Resorts",
        },
        {
          name: "New York, US",
          id: "687",
          img: "/us.png",
          services: "Flights ‧ Hotels ‧ Resorts",
        },
        {
          name: "London, UK",
          id: "737",
          img: "/uk.png",
          services: "Flights ‧ Hotels ‧ Resorts",
        },
        {
          name: "Tokyo, Japan",
          id: "334",
          img: "/japan.png",
          services: "Flights ‧ Hotels ‧ Resorts",
        },
        {
          name: "Dubai, UAE",
          id: "828",
          img: "/uae.png",
          services: "Flights ‧ Hotels ‧ Resorts",
        },
      ],
    };
  },

  methods: {
  // goToPage(){
  //   this.$router.push({path:'/test'})
  // }
  getId(cityId){
    
     window.open(`/search?destinationId=${cityId}`)
     
  },
    // handleCityCardClick(city) {
    //   console.log("city---", city);
    //   // this.$router.push(`/city/${city.name}`)
    //   this.$router.push(`/city/review?name=${city.name}`);
    // },
  },
};
</script>
