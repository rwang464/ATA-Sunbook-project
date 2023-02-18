<template>
  <div>

    <div class="search-bar">
      
        <!-- <div class="search-box"> -->
                <el-menu
                :default-active="activeIndex"
                class="navmenu"
                mode="horizontal"
                @select="handleSelect">

                    <el-menu-item index="1">
                        <div class="menu">
                        <img src="../static/activities_icon.png" />
                        <span> &nbsp; Activities </span>
                        </div>
                    </el-menu-item>

                    <el-menu-item index="2" disabled>
                        <div class="menu">
                        <img src="../static/stay_icon.png" />
                        <span style="margin-top: 0.5rem"> &nbsp; Stays </span>
                        </div>
                    </el-menu-item>

                </el-menu>
      <!-- </div> -->

      <div class="textbox">
        <el-row :gutter="150">
            <el-col :lg="8" :sm="12" :xs="12">
                <el-autocomplete
                class="textbox1"
                v-model="searchInput"
                :fetch-suggestions="querySearch"
                placeholder="请输入目的地"
                :trigger-on-focus="false"
                @select="selectDestFunction"
                ></el-autocomplete>
            </el-col>

            <el-col :lg="8" :sm="12" :xs="12">
                <el-date-picker
                v-model="dateValue"
                type="date"
                class="textbox2"
                placeholder="请输入日期"
                ></el-date-picker>
            </el-col>

            <el-col :lg="8" :sm="12" :xs="12">
                <el-autocomplete
                class="textbox3"
                v-model="searchcategories"
                :fetch-suggestions="querySearchCate"
                placeholder="请输入种类"
                :trigger-on-focus="false"
                @select="selectFunction"
                ></el-autocomplete>
            </el-col>
          </el-row>
      </div>

      <div class="search-button">
        <!-- <el-button
          type="primary"
          class="my_button"
          @click="selectDestination(currentPage)"
        >
          <i class="search_icon" style="height: 20px; vertical-align: middle">
            <img src="../static/button_icon.png" />
          </i>
          Show Activities</el-button
        > -->
      </div>
    </div>

  </div>
</template>
<style>

/* Search Bar */
.search-bar{
    position: relative;
    display: grid;
    width: 80%;
    height: 300px;
    top: 3rem;
    margin: 0 auto;
    /* border-radius: 1rem; */
    background: #995858;
    box-shadow: 0vw 0.28vw 1.11vw rgba(141, 211, 187, 0.15);
    border-radius: 0.56vw;

}
@media (max-width: 768px) {
    .search-bar {
      margin-left: 20%;
      width: 90%;
      height: auto;
    }
  }

/* .search-box{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0vw;
    gap: 2.22vw;
    width: 16.32vw;
    height: 3.33vw;
    flex: none;
    order: 0;
    flex-grow: 0;
    background-color: #112211;
}
@media (max-width: 768px) {
    .search-box {
      width: 80%;
      height: auto;
    }
  } */

.textbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #52ce71;
  width: 100%;
}

.textbox1, .textbox2, .textbox3 {
  flex: 1;
  width: 250px;
  margin: 0 100px;
}
@media (min-width: 768px) and (max-width: 1440px) {
  .textbox1, .textbox2, .textbox3 {
    width: 100%;
    margin: 0 50px;
  }
}
@media (max-width: 768px) {
  .textbox1, .textbox2, .textbox3 {
    width: 70%;
    margin: 0 20px;
  }
}
@media (max-width: 576px) {
  .textbox1, .textbox2, .textbox3 {
    margin: 0 10px;
    width: 70%;
  }
}

.textbox1 .el-input__inner{
    border-color:#79747E;
 }
 .textbox2 .el-input__inner{
    border-color:#79747E;
 }
 .textbox3 .el-input__inner{
    border-color:#79747E;
 }

.search-button{
   margin-top: -5%;
   display: flex;
   flex-direction: row;
   justify-content: flex-end;
   align-items: center;
   padding: 0%;
   width: 90%;
   height: 0% ;
   flex: none;
   order: 2;
   align-self: stretch;
   flex-grow: 0;
   background-color: rgb(53, 35, 151);
   z-index: 2;
}

.menu{
    display: flex;
    align-items: center;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600px;
    font-size: 16px;
    line-height: 2rem;
    margin-top: 10px;
    margin-left: 2px;
    background-color: chocolate;
    height:2rem;
}
@media (max-width: 768px) {
    .menu {
      font-size: 14px;
    }
  }
.el-menu-item.is-active {
    border-bottom-color: #8DD3BB !important;
}

.my_button{
   background-color:#8DD3BB;
   color:#112211;
   /* border-color: #8DD3BB; */
   border: none;
}
.my_button:focus,.my_button:hover{
   background-color:#8DD3BB;
   /* border-color: #8DD3BB; */
   color:#112211 ;
   outline: none !important;
}
.my_button:active{
   background-color:#578978;
   color:#112211;
   /* border-color: #578978; */
}
.navmenu{
display: flex;
flex-direction: row;
top:14vw;
margin-left: 2vw;
}
</style>
<script>
import { useDestinationStore } from "../store/test";
import { useTagStore } from "../store/tag";
import axios from "axios";
import callEvent from "../store/callEvent";
export default {
  data() {
    return {
      activeIndex: "1",
      searchInput: "",
      dateValue: "",
      searchcategories: "",
      destinations: [],
      tags: [],
      selectedDestination: "",
      currency: "CAD",
      products: [],
      currentPage: 1,
    };
  },
  // mounted(){
  //     callEvent.$on('change-page', (currentPage) => {
  //         this.setCurrentPage(currentPage)
  //     })
  //     callEvent.$on('updateValue', (value) => {
  //         this.value = value
  //         console.log("value:" +this.value)
  //         this.selectDestination(this.currentPage)
  //     })

  // },
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
    goNextPage() {
      this.$router.push({ path: "/search" });
    },
    selectDestination(currentPage) {
      if (!this.selectedDestination) return;
      this.$router.push({ path: "/search" });
      console.log(this.selectedDestination);
      this.selectedDestination = this.selectedDestination;

      try {
        const params = {
          filtering: {
            destination: this.selectedDestination,
          },
          currency: this.currency,
          pagination: {
            start: (currentPage - 1) * 7 + 1,
            count: 7,
          },
        };

        // console.log(params.filtering.destination)
        // console.log(params.currency)
        axios.post("/api/products/search", params).then((response) => {
          let data = {
            products: response.data.products,
            totalCount: response.data.totalCount,
            selectedDestination: this.selectedDestination,
          };
          callEvent.$emit("send-data", data);
        });
      } catch (error) {
        console.log(error);
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
