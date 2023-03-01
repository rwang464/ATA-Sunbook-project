<template>
  <div>
    <div class="total-container1">

      <div class="title_part row align-center p-30 space-between">
        <div class="col-0 go-home filter-drop-shadow" @click="sunbookLink()" style="cursor: pointer;">
          <i class="fa-solid fa-plane"></i> 返回日光记主站
        </div>

        <div class="col-0 row align-center filter-drop-shadow">
          <img src="../static/Sunbook_colour-01.png" height="45"/>
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

      <div class="search-bar-wrapper">

        <div class="search-bar">
          <!-- <div class="search-box"> -->
          <div class="row mt-10 ml-10">
            <div class="col-0">
              <!-- 点击功能1-activities -->
              <div
                class="switch-tab"
              
              
              >
                <img src="/activities_icon.png" />
                <span> Activities </span>
              </div>
            </div>
            <div class="col-0 ml-10">
              <!-- 点击功能2-stays -->
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
              <el-autocomplete class="w-p-100" placeholder="请输入目的地" 
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
              <!-- <el-input class="w-p-100" placeholder="日期" /> -->
              <el-date-picker
                style="width: 100%"
                v-model="dateValue"
                size="large"
                placeholder="选择日期时间"
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

      </div>

      <div class="productpart_container row">

        <div class="left_part row">

            <div class="filter-word">Filters</div>

            <div class="price_part">
              <div class="price-selector">
                <span class="price-selector-word">Price</span>
                <el-slider
                  class="price-selector-slide"
                  @change="
                    selectDestination(1);
                    currentPage = 1;
                  "
                  v-model="value"
                  range
                  show-stops
                  :step="100"
                  :max="maxValue"
                >
                </el-slider>
              </div>
            </div>

            <div class="rating_part">

              <div class="rate-selector">
                <span class="rate-word">Rating</span>
            
                <el-button
                  class="clear-button"
                  
                  v-if="isSelectedRate"
                  @click="
                    clearRatingSelection();
                    currentPage = 1;
                  "
                  type="text">
                  Clear
              </el-button>

                <div class="button-container">

                    <button class="button1" 
                      @click="
                      selectDestination(1);
                      currentPage = 1;
                      isSelectedRate = true;">
                      all
                    </button>
                    <button class="button1" 
                      @click="
                      selectDestination(1);
                      currentPage = 1;
                      isSelectedRate = true;">
                      1+
                    </button>
                    <button class="button1" 
                      @click="
                      selectDestination(1);
                      currentPage = 1;
                      isSelectedRate = true;">
                      2+
                    </button>
                    <button class="button1" 
                      @click="
                      selectDestination(1);
                      currentPage = 1;
                      isSelectedRate = true;">
                      3+
                    </button>
                    <button class="button1" 
                      @lick="
                      selectDestination(1);
                      currentPage = 1;
                      isSelectedRate = true;">
                      4+
                    </button>
                    

                          <!-- <el-radio
                          v-model="radio1"
                          label="1"
                          size="mini"
                          border
                          @change="
                              selectDestination(1);
                              currentPage = 1;
                              isSelectedRate = true;">
                          all
                          </el-radio>

                          <el-radio
                          v-model="radio1"
                          label="2"
                          size="mini"
                          border
                          @change="
                              selectDestination(1);
                              currentPage = 1;
                              isSelectedRate = true;
                          ">1+
                          </el-radio>

                          <el-radio
                          v-model="radio1"
                          label="3"
                          size="mini"
                          border
                          @change="
                              selectDestination(1);
                              currentPage = 1;
                              isSelectedRate = true;
                          "
                          style=""
                          >2+
                          </el-radio>

                          <el-radio
                          v-model="radio1"
                          label="4"
                          size="mini"
                          border
                          @change="
                              selectDestination(1);
                              currentPage = 1;
                              isSelectedRate = true;
                          "
                          style=""
                          >3+
                          </el-radio>

                          <el-radio
                          v-model="radio1"
                          label="5"
                          size="mini"
                          border
                          @change="
                              selectDestination(1);
                              currentPage = 1;
                              isSelectedRate = true;
                          "
                          style=""
                          >4+
                          </el-radio> -->
                      
                </div>

              </div>

            </div>

            <div class="special_part">
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
            </div>

            <div class="categories_part">
              <div class="categories-wrapper">
                <span class="categories-word">Categories </span>
                <el-button
                  class="clear-button"
                  v-if="isSelectedCateg"
                  @click="
                    clearCateSelection();
                    currentPage = 1;
                  "
                  type="text">Clear
                </el-button>

                <div class="radio-item-categorie">
                  <el-radio class="radio_label"
                    v-model="radio2"
                    label="Art & Culture"
                    @change="
                      selectDestination(1);
                      currentPage = 1;
                      isSelectedCateg = true;
                    "
                 
                  >
                  </el-radio
                  ><br />
                  <el-radio
                    v-model="radio2"
                    label="Classes & Workshops"
                    @change="
                      selectDestination(1);
                      currentPage = 1;
                      isSelectedCateg = true;
                    "
                  
                  >
                  </el-radio
                  ><br />
                  <el-radio
                    v-model="radio2"
                    label="Food & Drink"
                    @change="
                      selectDestination(1);
                      currentPage = 1;
                      isSelectedCateg = true;
                    "
                
                  >
                  </el-radio
                  ><br />
                  <el-radio
                    v-model="radio2"
                    label="Outdoor Activities"
                    @change="
                      selectDestination(1);
                      currentPage = 1;
                      isSelectedCateg = true;
                    "
                 
                  >
                  </el-radio
                  ><br />
                  <el-radio
                    v-model="radio2"
                    label="Seasonal & Special Occasions"
                    @change="
                      selectDestination(1);
                      currentPage = 1;
                      isSelectedCateg = true;
                    "
                    
                  >
                  </el-radio
                  ><br />
                  <el-radio
                    v-model="radio2"
                    label="Tickets & Passes"
                    @change="
                      selectDestination(1);
                      currentPage = 1;
                      isSelectedCateg = true;
                    "
                    
                  >
                  </el-radio
                  ><br />
                  <el-radio
                    v-model="radio2"
                    label="Tours, Sightseeing & Cruises"
                    @change="
                      selectDestination(1);
                      currentPage = 1;
                      isSelectedCateg = true;
                    "
                    
                  >
                  </el-radio
                  ><br />
                  <el-radio
                    v-if="isShowAll"
                    v-model="radio2"
                    label="Travel & Transportation Services"
                    @change="
                      selectDestination(1);
                      currentPage = 1;
                      isSelectedCateg = true;
                    "
                    
                  >
                  </el-radio
                  ><br />
                  <el-radio
                    v-if="isShowAll"
                    v-model="radio2"
                    label="Unique Experiences"
                    @change="
                      selectDestination(1);
                      currentPage = 1;
                      isSelectedCateg = true;
                    "
                    
                  >
                  </el-radio>
                </div>

                <div @click="isShowAll = !isShowAll" class="more-show">
                  {{ isShowAll ? "Less" : "More" }}
                </div>
              </div>
            </div>

            <div class="duration_part">

              <div class="duration-wrapper">

                <span class="duration-word">Duration</span>

                <el-checkbox-group v-model="checkedDurations">
                  <div v-for="duration in durationOptions" :key="duration">
                    <el-checkbox
                      :label="duration"
                      style="margin-top: 5px"
                      @change="
                        selectDestination(1);
                        currentPage = 1;
                      "
                    >
                    </el-checkbox>
                  </div>
                </el-checkbox-group>

              </div>

            </div>

        </div>

        <div class="right_part row">

          <div class="right_title_part row">
            <div class="message-wrapper">

              <div class="message-word">
                Show {{ this.productsPerPage }} of
                <span>{{ this.totalCount }} places</span>
              </div>

              <div class="sort-wrapper">

                <div class="sort-by">Sort by</div>

                
                <el-select
                  size="mini"
                  class="recommend-button"
                  v-model="sortBy"
                  @change="sortData"
                >
                  <el-option
                    v-for="item in sortOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    class="recommend-option"
                  >
                  </el-option>
                </el-select>

              </div>

            </div>
          </div>



          <div class="right_product_part">
            <productPart />
          </div>
          
          <div class="page_part">
            <div class="page-wrapper">
              <el-pagination
              class="pagination-product"
              background
              layout="prev, pager, next"
              :page-size="7"
              :total="totalPages * 7"
              :current-page="currentPage"
              @current-change="setCurrentPage"
            >
              </el-pagination>
            </div>
          </div>

        </div>

      </div>

      <footerPart />

    </div>

    <div  class="mini-bottom">

      <el-button class="mini-bottom-click" type="primary" @click="showDialog"><i class="fa-solid fa-bars"></i></el-button>
      
      <el-dialog :visible.sync="dialogVisible">

              <div class="price_part">
                <div class="price-selector">
                  <span class="price-selector-word">Price</span>
                  <el-slider
                    class="price-selector-slide"
                    @change="
                      selectDestination(1);
                      currentPage = 1;
                    "
                    v-model="value"
                    range
                    show-stops
                    :step="100"
                    :max="maxValue"
                  >
                  </el-slider>
                </div>
              </div>

              <div class="rating_part">

                <div class="rate-selector">
                  <span class="rate-word">Rating</span>
              
                  <el-button
                    class="clear-button"
                    
                    v-if="isSelectedRate"
                    @click="
                      clearRatingSelection();
                      currentPage = 1;
                    "
                    type="text">
                    Clear
                </el-button>

                  <div class="button-container">

                      <button class="button1" 
                        @click="
                        selectDestination(1);
                        currentPage = 1;
                        isSelectedRate = true;">
                        all
                      </button>
                      <button class="button1" 
                        @click="
                        selectDestination(1);
                        currentPage = 1;
                        isSelectedRate = true;">
                        1+
                      </button>
                      <button class="button1" 
                        @click="
                        selectDestination(1);
                        currentPage = 1;
                        isSelectedRate = true;">
                        2+
                      </button>
                      <button class="button1" 
                        @click="
                        selectDestination(1);
                        currentPage = 1;
                        isSelectedRate = true;">
                        3+
                      </button>
                      <button class="button1" 
                        @lick="
                        selectDestination(1);
                        currentPage = 1;
                        isSelectedRate = true;">
                        4+
                      </button>
                      

                            <!-- <el-radio
                            v-model="radio1"
                            label="1"
                            size="mini"
                            border
                            @change="
                                selectDestination(1);
                                currentPage = 1;
                                isSelectedRate = true;">
                            all
                            </el-radio>

                            <el-radio
                            v-model="radio1"
                            label="2"
                            size="mini"
                            border
                            @change="
                                selectDestination(1);
                                currentPage = 1;
                                isSelectedRate = true;
                            ">1+
                            </el-radio>

                            <el-radio
                            v-model="radio1"
                            label="3"
                            size="mini"
                            border
                            @change="
                                selectDestination(1);
                                currentPage = 1;
                                isSelectedRate = true;
                            "
                            style=""
                            >2+
                            </el-radio>

                            <el-radio
                            v-model="radio1"
                            label="4"
                            size="mini"
                            border
                            @change="
                                selectDestination(1);
                                currentPage = 1;
                                isSelectedRate = true;
                            "
                            style=""
                            >3+
                            </el-radio>

                            <el-radio
                            v-model="radio1"
                            label="5"
                            size="mini"
                            border
                            @change="
                                selectDestination(1);
                                currentPage = 1;
                                isSelectedRate = true;
                            "
                            style=""
                            >4+
                            </el-radio> -->
                        
                  </div>

                </div>

              </div>

              <div class="special_part">
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
              </div>

              <div class="categories_part">
                <div class="categories-wrapper">
                  <span class="categories-word">Categories </span>
                  <el-button
                    class="clear-button"
                    v-if="isSelectedCateg"
                    @click="
                      clearCateSelection();
                      currentPage = 1;
                    "
                    type="text">Clear
                  </el-button>

                  <div class="radio-item-categorie">
                    <el-radio class="radio_label"
                      v-model="radio2"
                      label="Art & Culture"
                      @change="
                        selectDestination(1);
                        currentPage = 1;
                        isSelectedCateg = true;
                      "
                  
                    >
                    </el-radio
                    ><br />
                    <el-radio
                      v-model="radio2"
                      label="Classes & Workshops"
                      @change="
                        selectDestination(1);
                        currentPage = 1;
                        isSelectedCateg = true;
                      "
                    
                    >
                    </el-radio
                    ><br />
                    <el-radio
                      v-model="radio2"
                      label="Food & Drink"
                      @change="
                        selectDestination(1);
                        currentPage = 1;
                        isSelectedCateg = true;
                      "
                  
                    >
                    </el-radio
                    ><br />
                    <el-radio
                      v-model="radio2"
                      label="Outdoor Activities"
                      @change="
                        selectDestination(1);
                        currentPage = 1;
                        isSelectedCateg = true;
                      "
                  
                    >
                    </el-radio
                    ><br />
                    <el-radio
                      v-model="radio2"
                      label="Seasonal & Special Occasions"
                      @change="
                        selectDestination(1);
                        currentPage = 1;
                        isSelectedCateg = true;
                      "
                      
                    >
                    </el-radio
                    ><br />
                    <el-radio
                      v-model="radio2"
                      label="Tickets & Passes"
                      @change="
                        selectDestination(1);
                        currentPage = 1;
                        isSelectedCateg = true;
                      "
                      
                    >
                    </el-radio
                    ><br />
                    <el-radio
                      v-model="radio2"
                      label="Tours, Sightseeing & Cruises"
                      @change="
                        selectDestination(1);
                        currentPage = 1;
                        isSelectedCateg = true;
                      "
                      
                    >
                    </el-radio
                    ><br />
                    <el-radio
                      v-if="isShowAll"
                      v-model="radio2"
                      label="Travel & Transportation Services"
                      @change="
                        selectDestination(1);
                        currentPage = 1;
                        isSelectedCateg = true;
                      "
                      
                    >
                    </el-radio
                    ><br />
                    <el-radio
                      v-if="isShowAll"
                      v-model="radio2"
                      label="Unique Experiences"
                      @change="
                        selectDestination(1);
                        currentPage = 1;
                        isSelectedCateg = true;
                      "
                      
                    >
                    </el-radio>
                  </div>

                  <div @click="isShowAll = !isShowAll" class="more-show">
                    {{ isShowAll ? "Less" : "More" }}
                  </div>
                </div>
              </div>

              <div class="duration_part">

                <div class="duration-wrapper">

                  <span class="duration-word">Duration</span>

                  <el-checkbox-group v-model="checkedDurations">
                    <div v-for="duration in durationOptions" :key="duration">
                      <el-checkbox
                        :label="duration"
                        style="margin-top: 5px"
                        @change="
                          selectDestination(1);
                          currentPage = 1;
                        "
                      >
                      </el-checkbox>
                    </div>
                  </el-checkbox-group>

                </div>

              </div>

      </el-dialog>

    </div>

  </div>
</template>

<script>
import { useDestinationStore } from "../store/test";
import { useTagStore } from "../store/tag";
import axios from "axios";
import callEvent from "../store/callEvent";
import productPart from "../components/productPart.vue"
import footerPart from "../components/footerPart.vue";

export default {
  components: {
    productPart,
    footerPart,
  },
  data() {
    return {
      dialogVisible: false,
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
      radio4: "",
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
      selectedFlag: "/Canada_flag.png",
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
      currencies: [
        { value: "CAD", label: "CAD", flag: "/Canada_flag.png" },
        {value: 'HKD', label: 'HKD',flag:'../static/Canada_flag.png'},
      ],
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
    showDialog() {
        this.dialogVisible = true
        },
    handleConfirm() {
        // 处理点击确定按钮后的逻辑
        this.dialogVisible = false
        },
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
    handleSelect() {

    },
    handleCommand(command) {
      this.selectedCurrency = command;
      this.currency = command;
      console.log(this.currency)
      callEvent.$emit('send-currency',this.currency)
      const selected = this.currencies.find(item => item.value === command);
      this.selectedFlag = selected.flag;
    },
    sunbookLink(){
      window.open(this.newLocation,"_blank");
    },
  },
};
</script>

<style>
.total-container1{
  display: flex;
  width: 100%;
  height: 2300px;
  align-items: end;
  justify-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
}
.title_part{
  width: 95%;
  height: 50px;
  box-shadow: 0px 4px 16px rgba(141, 211, 187, 0.15);
}
.search-bar-wrapper{
  margin-top: 150px;
  width: 100%;
  height: 200px;
}
.currency-change {
  background-color: white;
  color: black;
  width: 100px;
  height: 40px;
  border-color: white;
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
.productpart_container{
  width: 100%;
  height: 2300px;
}

/* left part */
.left_part{
  flex-direction: column;
  gap: 20px;
  width: 30%;
  height: 1100px;
  box-shadow: 0px 4px 16px rgba(141, 211, 187, 0.15);
  margin-right: 20px;
  margin-left: 20px;
}
.filter-word{
  width: 100%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 2.5vw;
  color: #112211;
  margin-left: 40px;
}
.price_part{
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
}
.price-selector{
  width: 80%;
}
.price-selector-word{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 1vw;
  color: #112211;
}
.price-selector-slide{
  width: 100%;
  height: 20px;
} 
.el-slider__runway{
  height:2px;
}
.el-slider__bar{
  background-color:black;
  height: 3px;
}
.el-slider__stop{
  height:3px;
}
.el-slider__button {
  background-color: #8DD3BB;
  border-color: #8DD3BB;
}
.rating_part{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
}
.rate-selector{
  width: 80%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  border-top: 0.069vw solid rgba(17, 34, 17, 0.25);
}
.rate-word{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 1vw;
  color: #112211;
  margin-top: 20px;
}
.clear-button{
  display: flex;
  cursor: pointer;
}
.clear-button + .button-container{
  margin-top: 0;
}
.button-container{
  width: 100%;
  height: 30px;
  display: flex;
  margin-top: 20px;
}
.button1{
  width: 40px; 
  height: 30px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  border-radius: 5px; 
  border: 1px solid #a0d9c5;
  margin-right: 20px;
  background-color: aliceblue;
  cursor: pointer;
}
@media (max-width: 1000px){
  .button1{
    margin-right: 10px;
  }
}
.special_part{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 250px;
}
.specials-wrapper{
  width: 80%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  border-top: 0.069vw solid rgba(17, 34, 17, 0.25);
}
.special-word{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 1vw; 
  color: #112211;
  margin: 20px 0;
}
.checkbox-item-specials{
  display: block;
  margin-top: 5px;
}
@media only screen and (max-width: 800px) {
    .checkbox-item-specials {
        margin-top: 5px;
    }
  }
.el-checkbox__inner{
  border-color: #112211;
}
.el-checkbox__label{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 0.97vw;
  color: #112211;
}
.categories_part{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 270px;
}
.categories-wrapper{
  width: 80%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  border-top: 0.069vw solid rgba(17, 34, 17, 0.25);
}
.categories-word{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 1vw;
  color: #112211;
  margin-top: 20px;
}
.clear-button + .radio-item-categorie{
  margin-top: 0;
}
.radio-item-categorie{
  width: 80%;
  height: 200px;
  margin-top: 20px;
}
.el-radio__label{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 0.97vw;
  color: #112211;
}
.more-show{
  cursor: pointer;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 1vw;
  color: #FF8682;
}
.duration_part{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
}
@media (min-width: 1600px) {
  .duration_part {
    margin-top: 40px; /* 大屏幕上的上边距 */
  }
}
.duration-wrapper{
  width: 80%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  border-top: 0.069vw solid rgba(17, 34, 17, 0.25);
}
.duration-word{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 1vw;
  color: #112211;
  margin: 20px 0;
}

/* right part */
.right_part{
  flex-direction: column;
  width: 61%;
  height: 2000px;
}
@media (max-width: 800px){
  .right_part{
    width: 90%;
    margin: 0 auto;
  }
}
.right_title_part{
  width: 100%;
  height: 70px;
}
.message-wrapper{
  width: 98%;
  display: flex;
  height: 30px;
  margin-top: 8px;
  padding: 5px 5px;
}
.sort-wrapper{
  display: flex;
  justify-content: end;
  margin-right: 15px;
  width: 90%;
}
.sort-by{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 1vw;
  text-align: right;
  color: #112211;
  margin-right: 10px;
  margin-top: 5px;
}
.recommend-button{
  width: 140px;
}
.sort-button input{
  border:none;
}
.recommend-option{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
  color: #112211;
}
.el-select-dropdown__item.selected {
  color: #8DD3BB;
}
.el-select .el-input__inner {
  font-weight: bold;
}
.message-word{
  width: fixed-value;
  white-space: nowrap;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 1vw;
  line-height: 1.21vw;
  margin-top: 0.57vw;
  color: #112211;
}
@media only screen and (max-width: 720px) {
.message-word {
  width: 40%;
  }
}
.message-word span{
  color:red
}
.right_product_part{
  width: 97%;
  height: 2000px;
  padding: 5px 10px;
}
.mini-bottom{
    position: fixed;
    right: 50px;
    bottom: 350px;
    width: 40px;
    border-radius: 20px;
}
.mini-bottom-click{
    border-radius: 20px;
}
@media only screen and (min-width: 800px) {
    .mini-bottom {
        display: none; 
    }
}
  @media only screen and (max-width:800px){
    .left_part{
        display:none;
    }
}
</style>