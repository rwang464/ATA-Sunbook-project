<template>
  <div class="right_product_part">
      <div class="product-wrapper">
        <div class="product-card-wrapper">
          <el-col :span="80" v-for="(product, index) in products" :key="index">
            <el-card shadow="always" class="card_body" @click.native="clickFunction()">

              <div class="left_img">
                <div class="product-image-wrapper">
                  <img v-if="product.images[0]" 
                  :src="product.images[0].variants[8].url" 
                  :alt="product.images[0].caption"
                  class="product-image"/>
                </div>
              </div>
              
              <div class="right_part1">

                <div class="right_top row">

                <div class="right_text">

                    <div class="product-title-word">
                      {{ product.title }}
                    </div>

                    <div class="product-description">
                      {{ displayDescription(product.description) }}
                      <span v-if="isLimited" @click="toDetailPage"> </span>
                    </div>

                    <div class="product-durations row">
                        <i class="fa-solid fa-mug-saucer" style="margin-right: 5px;"></i>
                        <div class="duration-word1">
                        {{product.duration? displayDuration(product.duration): "N/A"}}
                        </div>
                    </div>

                    <div class="product-rating">

                        <div class="product-rating-box">
                            <span class="product-rate-word">
                                &nbsp;
                                {{
                                product && product.reviews
                                    ? formatNumber(
                                        product.reviews.combinedAverageRating
                                    )
                                    : "0"
                                }}
                                &nbsp;
                            </span>
                        </div>

                        <div class="ratingword_container row">
                        <div class="rating-word1">

                        {{  product.reviews &&
                            product.reviews.combinedAverageRating >= 4 &&
                            product.reviews.combinedAverageRating <= 5
                            ? "Very Good"
                            : product.reviews &&
                                product.reviews.combinedAverageRating >= 3 &&
                                product.reviews &&
                                product.reviews.combinedAverageRating < 4
                            ? "Good"
                            : product.reviews &&
                                product.reviews.combinedAverageRating >= 0 &&
                                product.reviews &&
                                product.reviews.combinedAverageRating < 3
                            ? "Normal"
                            : "Normal"}}

                        </div>    
                        <div class="rating-word2">
                            {{
                            product.reviews ? product.reviews.totalReviews : ""
                            }}
                            reviews
                        </div>

                       
                      </div>
                    </div>


                  </div>

                  <div class="right_price">
                    <div class="product-price-wrapper">
                        <div class="product-price-word">
                            <div class="price-word1">starting from</div>
                            <div class="price-word2">
                            ${{
                                formatPrice(product.pricing.summary.fromPrice)
                            }}/adult
                            </div>
                            <div class="price-word3">excl. tax</div>
                        </div>
                    </div>
                  </div>

                </div>

                <div class="bottom_button">
                  <div class="product-button-wrapper">
                    <el-button
                      type="success"
                      class="view-price-button"
                      @click="() => goToInfoPage(product)"
                    >
                      <span class="view-price-button-word">View Place</span>
                    </el-button>
                  </div>
                </div>

              </div>

            </el-card>
          </el-col>

        </div>
        
        
      </div>
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
      sortBy: "recommended",
      sortOptions: [
        { value: "recommended", label: "Recommended" },
        { value: "price", label: " Price" },
        { value: "duration", label: "Duration" },
      ],
      // description:'Experience Toronto from the sky on a helicopter tour over the city! As you soar through the air, look down on the skyscrapers, CN Tower, the waterfront, Fort York and other city sights. This 7-minute ride follows a route of nearly 9 miles (15 km) and includes one souvenir photo. Five departure times are available.',
      isLimited: false,
      isBackground: true,
      value: [0, 2000],
      maxValue: 2000,
      radio1: "",
      isSelectedRate: false,
      isSelectedCateg: false,
      checkFlags: [],
      radio2: [],
      isShowAll: false,
      checkedDurations: [],
      durationOptions: [
        "Up to 1 hour",
        "1 to 4 hours",
        "4 hours to 1 day",
        "1 to 3 days",
      ],
      products: [],
      totalCount: "",
      currentPage: 1,
      activeIndex: "1",
      searchInput: "",
      dateValue: new Date(),
      searchcategories: "",
      destinations: [],
      tags: [],
      selectedDestination: "",
      currency: "CAD",
      selectedTags: "",
      productCode: "",
      itemsPerPag: 7,
      attraction: "",
      selectedDestinationName: "",
      pickOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        },
      },
      destinationId: "",
    };
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

  mounted() {
    if (this.$route.query.destinationId) {
      this.selectedDestination = this.$route.query.destinationId;
      this.selectDestination(this.currentPage);
    }
    callEvent.$on("send-data", (data) => {
      this.products = data.products;
      this.totalCount = data.totalCount;
      this.selectedDestination = data.selectedDestination;
      this.currency = data.currency;
      this.selectedDestinationName = data.selectedDestinationName;
      this.searchInput = this.selectedDestinationName;
    }),
      callEvent.$on("send-turkey", (turkeyData) => {
        console.log("product", turkeyData.products);
        console.log("destination", turkeyData.selectedDestination);
        this.products = turkeyData.products;
        this.totalCount = turkeyData.totalCount;
        this.selectedDestination = turkeyData.selectedDestination;
      }),
      callEvent.$on("send-currency", (currency) => {
        this.currency = currency;
        console.log("currency" + this.currency);
      });
    if (sessionStorage.getItem("products")) {
      this.products = JSON.parse(sessionStorage.getItem("products"));
    }
    if (sessionStorage.getItem("totalCount")) {
      this.totalCount = JSON.parse(sessionStorage.getItem("totalCount"));
    }
    if (sessionStorage.getItem("selectedDestination")) {
      this.selectedDestination = JSON.parse(
        sessionStorage.getItem("selectedDestination")
      );
    }
  },
  created() {},
  computed: {
    totalPages() {
      return Math.ceil(this.totalCount / 7);
    },
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
    productsPerPage() {
      if (this.currentPage === this.totalPages) {
        return this.totalCount % 7;
      } else {
        return 7;
      }
    },
  },
  //   beforeDestroy () {
  //     callEvent.$off('send-data', products)
  //   },

  methods: {
    sortData(sortType) {
      switch (this.sortBy) {
        case "price":
          // sort products by price
          this.products.sort((a, b) => {
            return a.price - b.price;
          });
          console.log("price here");

          break;
        case "duration":
          // sort products by duration
          break;
      }
    },
    selectDestination(currentPage) {
      this.$router.push({ path: "/search" });
      console.log(this.selectedDestination);
      this.selectedDestination = this.selectedDestination;

      try {
        const params = {
          filtering: {
            destination: this.selectedDestination,

            lowestPrice: this.value[0],
            highestPrice: this.value[1],
            durationInMinutes: {
              from: "",
              to: "",
            },
            flags: [],
            tags: [],
            rating: {
              from: "",
              to: "",
            },
            startDate: this.dateValue,
          },

          currency: this.currency,
          pagination: {
            start: (currentPage - 1) * 7 + 1,
            count: 7,
          },
        };

        if (this.radio1 === "1") {
          params.filtering.rating.from = 0;
          params.filtering.rating.to = 1;
        } else if (this.radio1 === "2") {
          params.filtering.rating.from = 0;
          params.filtering.rating.to = 2;
        } else if (this.radio1 === "3") {
          params.filtering.rating.from = 0;
          params.filtering.rating.to = 3;
        } else if (this.radio1 === "4") {
          params.filtering.rating.from = 0;
          params.filtering.rating.to = 4;
        } else if (this.radio1 === "5") {
          params.filtering.rating.from = 0;
          params.filtering.rating.to = 5;
        }
        if (this.checkedDurations.includes("Up to 1 hour")) {
          params.filtering.durationInMinutes.from = 0;
          params.filtering.durationInMinutes.to = 60;
        } else if (this.checkedDurations.includes("1 to 4 hours")) {
          params.filtering.durationInMinutes.from = 60;
          params.filtering.durationInMinutes.to = 240;
        } else if (this.checkedDurations.includes("4 hours to 1 day")) {
          params.filtering.durationInMinutes.from = 240;
          params.filtering.durationInMinutes.to = 1440;
        } else if (this.checkedDurations.includes("1 to 3 days")) {
          params.filtering.durationInMinutes.from = 1440;
          params.filtering.durationInMinutes.to = 4320;
        }
        if (this.checkFlags.includes("Free Cancellation")) {
          params.filtering.flags.push("FREE_CANCELLATION");
        }
        if (this.checkFlags.includes("Likely to Sell Out")) {
          params.filtering.flags.push("LIKELY_TO_SELL_OUT");
        }
        if (this.checkFlags.includes("Skip The Line")) {
          params.filtering.flags.push("SKIP_THE_LINE");
        }
        if (this.checkFlags.includes("Special Offer")) {
          params.filtering.flags.push("SPECIAL_OFFER");
        }
        if (this.checkFlags.includes("Private Tour")) {
          params.filtering.flags.push("PRIVATE_TOUR");
        }
        if (this.checkFlags.includes("New Tours")) {
          params.filtering.flags.push("NEW_ON_VIATOR");
        }
        if (this.radio2 === "Art & Culture") {
          params.filtering.tags = [21910];
        } else if (this.radio2 === "Classes & Workshops") {
          params.filtering.tags = [21915];
        } else if (this.radio2 === "Food & Drink") {
          params.filtering.tags = [21911];
        } else if (this.radio2 === "Outdoor Activities") {
          params.filtering.tags = [21909];
        } else if (this.radio2 === "Seasonal & Special Occasions") {
          params.filtering.tags = [21916];
        } else if (this.radio2 === "Tickets & Passes") {
          params.filtering.tags = [21912];
        } else if (this.radio2 === "Tours, Sightseeing & Cruises") {
          params.filtering.tags = [21913];
        } else if (this.radio2 === "Travel & Transportation Services") {
          params.filtering.tags = [21914];
        } else if (this.radio2 === "Unique Experiences") {
          params.filtering.tags = [21074];
        }

        axios.post("/api/products/search", params).then((response) => {
          //    let data_product={
          //        products: response.data.products,
          //    totalCount: response.data.totalCount,
          //    }
          //    callEvent.$emit('send-productCode', data_product)

          this.products = response.data.products;
          this.totalCount = response.data.totalCount;
          //    this.destinationName=response.data.products.destinationName
          //    console.log(params.filtering.flags)
          //     console.log(params.filtering.tags)
          sessionStorage.setItem("products", JSON.stringify(this.products));
          sessionStorage.setItem("totalCount", JSON.stringify(this.totalCount));
          sessionStorage.setItem(
            "selectedDestination",
            JSON.stringify(this.selectedDestination)
          );

          // console.log(params.filtering.startDate)
        });
      } catch (error) {
        console.log(error);
      }
    },
    selectAttraction() {
      try {
        const params = {
          destId: 684,
          topX: "1-100",
          sortOrder: "RECOMMENDED",
        };
        axios.post("/api/v1/taxonomy/attractions", params).then((response) => {
          this.attraction = response.data;
          console.log(this.attraction);
        });
      } catch (error) {
        console.log(error);
      }
    },
    toDetailPage() {
      this.$router.push({ path: "/search" });
    },
    clickFunction() {
      console.log("click me");
    },
    goToInfoPage(product) {
      // this.$router.push({path: '/infoDetail'})
      // this.$router.push({
      //     path: '/infoDetail',
      //     query: {
      //     productCode: product.productCode
      //     }
      // })
      // window.open(`/infoDetail?productCode=${product.productCode}`, '_blank');
      window.open(`${product.productUrl}`, "_blank");
    },
    displayDescription(description) {
      let desc = description;
      let rows = desc.split("\n");
      if (desc.length > 200) {
        desc = desc.slice(0, 200) + "...more";
        this.isLimited = true;
      }
      // console.log(desc)
      return desc;
    },
    displayDuration(duration) {
      let display = "";
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
      } else if (
        duration.variableDurationFromMinutes &&
        duration.variableDurationToMinutes
      ) {
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
      } else {
        return "N/A";
      }
      return display;
    },

    formatNumber(number) {
      if (number === "N/A") {
        return number;
      }
      return Number(number).toFixed(1);
    },
    formatPrice(number) {
      return Number(number).toFixed(0);
    },
    clearRatingSelection() {
      this.radio1 = null;
      this.isSelectedRate = false;
      this.selectDestination(this.currentPage);
    },
    clearCateSelection() {
      this.radio2 = null;
      this.isSelectedCateg = false;
      this.selectDestination(this.currentPage);
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
          return { value: tag.allNamesByLocale.en, id: tag.tagId };
        });
        cate(results);
      });
    },
    selectDestFunction(item) {
      this.selectedDestination = item.id;
      this.selectedDestinationName = item.value;
      // sessionStorage.setItem('selectedDestinationName', this.selectedDestinationName);
      // console.log(this.selectedDestination)
    },
    goNextPage() {
      this.$router.push({ path: "/search" });
    },

    setCurrentPage(page) {
      this.currentPage = page;
      this.selectDestination(this.currentPage);
    },
    selectTagsFunction(item) {
      this.selectedTags = item.id;
      console.log(this.selectedTags);
    },
    handleSelect() {},
  },
};
</script>

<style>
.product-wrapper {
  height: 2100px;
  width: 97%;
  padding: 20px 10px;
  gap: 30px;
}
.product-card-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 40px;
  cursor: pointer;
  filter: drop-shadow(0vw 0.28vw 1.11vw rgba(17, 34, 17, 0.05));
}
.card_body{
  border-radius: 0.83vw 0.83vw 0.83vw 0.83vw;
}
.product-card-wrapper .el-card__body{
  width: 100%;
  height: 250px;
  padding: 0;
  display: flex;
  flex-direction: row;
  border-radius: 0.83vw 0vw 0vw 0.83vw;
}
/* 11111 */
.el-radio--mini.is-bordered{
    width: 15%;
}
.button-container .el-radio{
  margin-right: 5px;
}
/* @media (min-width: 1370px){
  .el-card__body{
    width: auto;
    height: auto;
  }
} */
@media (max-width: 1000px){
  .el-card__body{
    height: auto;
  }
}
.left_img{
  width: 35%;
  height: 100%;
}
/* @media (min-width: 1370px){
  .left_img{
    height: auto;
  }
} */
.product-image-wrapper {
  width: 100%;
  height: 100%;
}
.product-image {
  width: 100%;
  height: 100%;
  border-radius: 0.83vw 0vw 0vw 0.83vw;
}
.right_part1{
  width: 65%;
  height: 100%;
}
@media (min-width: 1370px){
  .right_part1{
    padding: 10px;
  }
}
.right_top{
  width:100%;
  height: 65%;
}
.right_text{
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 70%;
  height: 100%;
  margin-left: 10px;
}
.right_price{
  width: 30%;
  height: 100%;
}
.bottom_button{
  width: 100%;
  height: 35%;
}
.product-title-word {
  margin-top: 10px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2vw;
  line-height: 1.67vw;
  color: #112211;
}
@media (max-width: 1000px){
  .product-title-word{
    margin-top: 20px;
  }
}
@media (max-width: 600px){
  .product-title-word{
    line-height: 2.5vw;
    height: 50px;
  }
}
.product-description {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 0.9vw;
  line-height: 1.2vw;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.product-duration{
  margin-top: 10px;
}
/* @media (max-width: 1000px){
  .product-durations{
    margin-top: 25px;
  }
} */
@media (max-width: 600px){
  .product-durations{
    margin-top: 5px;
  }
}
/* @media (max-width: 1000px){
  .product-description{
    display: none;
  }
} */
.product-rating-box{
  height: 90%;
  border: 0.069vw  solid #8DD3BB ;
  border-radius: 5px;
  margin-right: 3px;
  margin-bottom: 2px;
}
@media (max-width: 600px){
  .product-rating-box{
    height: 50%;
    margin-right: 25px;
  }
}
.product-rate-word{
  font-family:'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 0.83vw;
  line-height: 1.04vw;
  color: #112211;
}
.product-price-wrapper{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 10px;
}
.product-price-word{
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: column;
}
@media (max-width: 1000px){
  .product-price-word{
    margin-top: 10px;
  }
}
.price-word1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 0.83vw;
  color: #112211;
  opacity: 0.75;
  margin-left: 22px;
  margin-top: 10px;
}
.price-word2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.39vw;
  text-align: right;
  color: #ff8682;
}
.price-word3 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 0.83vw;
  text-align: right;
  color: #112211;
  opacity: 0.75;
}
.duration-word1 {
  margin-top: 1px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 1.04vw;
  line-height: 1.04vw;
  color: #112211;
}
.product-rating {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ratingword_container{
  width: 80%;
  flex-direction: row;
  gap: 3px;
}
.rating-word1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #112211;
}
.rating-word2 {
  font-weight: 400;
  font-size: 9px;
  line-height: 15px;
  letter-spacing: -0.5px;
}
.product-button-wrapper{
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (min-width: 1370px){
  .product-button-wrapper {
    margin-top: 10px;
  }
}
.view-price-button {
  width: 85%;
  background-color: #8dd3bb;
  color: black;
  border-color: #8dd3bb;
}
.view-price-button:focus,
.view-price-button:hover {
  background-color: #8dd3bb;
  color: #112211;
  border-color: #8dd3bb;
}
.view-price-button:active {
  background-color: #578978;
  color: #112211;
  border-color: #578978;
}
.page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
.view-price-button-word {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 0.97vw;
  line-height: 1.18vw;
  color: #112211;
}
</style>
