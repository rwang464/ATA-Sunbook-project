<template>
  <div>
    <div class="city-wrapper" style="padding: 40px">
      <el-row :gutter="80" style="">
        <el-col
          :xs="24"
          :sm="12"
          :lg="8"
          v-for="(city, index) in cities"
          :key="index"
        >
          <el-card
            shadow="always"
            class="city-card"
            style1="
              height: 150px;
              width: 100%;
              background-color: bisque;
              margin-bottom: 40px;
            "
          >
            <div
              class="city-image"
              style="position: relative; width: 100px; height: 110px"
            >
              <img
                :src="city.img"
                style="
                  width: 100%;
                  height: 100%;
                  margin: 0;
                  background-color: blue;
                "
              />
            </div>

            <div class="city-name">
              {{ city.name }}
            </div>
            <div class="city-services">
              {{ city.services }}
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: [
        {
          name: "Istanbul, Turkey",
          img: "/turkey.png",
          services: "Flights, Hotels, Resorts",
        },
        {
          name: "Sydney, Australia",
          img: "/australia.png",
          services: "Flights, Hotels, Resorts",
        },
        {
          name: "Baku, Azerbaijan",
          img: "/azerbaijan.png",
          services: "Flights, Hotels, Resorts",
        },
        {
          name: "Malé, Maldives",
          img: "/maldives.png",
          services: "Flights, Hotels, Resorts",
        },
        {
          name: "Paris, France",
          img: "/paris.png",
          services: "Flights, Hotels, Resorts",
        },
        {
          name: "New York, US",
          img: "/us.png",
          services: "Flights, Hotels, Resorts",
        },
        {
          name: "London, UK",
          img: "/uk.png",
          services: "Flights, Hotels, Resorts",
        },
        {
          name: "Tokyo, Japan",
          img: "/japan.png",
          services: "Flights, Hotels, Resorts",
        },
        {
          name: "Dubai, UAE",
          img: "/uae.png",
          services: "Flights, Hotels, Resorts",
        },
      ],
    };
  },
};
</script>

<style >
.city-card {
  height: 150px;
  width: 100%;
  background-color: bisque;
  margin-bottom: 40px;
}
.city-wrapper {
  margin-top: 180px;
  width: auto;
  height: auto;
  flex: none;
  order: 1;
  flex-grow: 0;
  background-color: aqua;
}

.city-name {
  position: relative;
  left: 40%;
  width: 100%;
  margin-top: -140px;
  font-size: 24px;
}

.city-services {
  position: relative;
  left: 40%;
  margin-top: 10px;
  font-size: 24px;
}
</style>
