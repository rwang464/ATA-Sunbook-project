<template>
  <div>
    <div class="total-container1">
      <div class="title_part row align-center p-30 space-between">
        <div class="col-0 go-home filter-drop-shadow" style="margin-left: 10px">
          <a
            href="https://www.sunbook.com"
            target="_blank"
            @click.prevent="sunbookLink"
          >
            <i class="fa-solid fa-plane"></i> 返回日光记主站</a
          >
        </div>

        <div class="col-0 row align-center filter-drop-shadow">
          <img src="../static/Sunbook_colour-01.png" height="45" />
        </div>

        <div class="col-0 currency">
          <el-dropdown @command="handleCommand">
            <el-button type="primary" class="currency-change">
              <div class="row align-center">
                <img :src="selectedFlag" width="16px" />

                <div class="currency-show ml-5">
                  {{ currency }}
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

      <div class="search-bar-wrapper1">
        <div class="search-bar">
          <!-- <div class="search-box"> -->
          <el-menu
            :default-active="activeIndex"
            class="navmenu"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">
              <div class="menu">
                <img src="../static/activities_icon.png" />
                <span> &nbsp; Activities </span>
              </div>
            </el-menu-item>
            <el-menu-item index="2" disabled>
              <div class="menu">
                <img src="../static/stay_icon.png" style="margin-top: 0.5rem" />
                <span style="margin-top: 0.5rem"> &nbsp; Stays </span>
              </div>
            </el-menu-item>
          </el-menu>
          <el-row :gutter="50" class="mt-0">
            <el-col class="mt-20" :xs="24" :sm="12" :md="8">
              <el-autocomplete
                class="w-p-100"
                placeholder="请输入目的地"
                v-model="searchInput"
                :fetch-suggestions="querySearch"
                :trigger-on-focus="false"
                @select="selectDestFunction"
              >
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
                <el-button
                  class="search_icon1"
                  @click="selectDestination(currentPage)"
                >
                  <!-- <a :href="/search?city=${city.name}?field1=${index}&date=${city.services}">" -->
                  <a class="row">
                    <img
                      src="/button_icon.png"
                      style="margin-right: 5px; margin-top: 3px"
                    />
                    <div class="text11">Show Activities</div>
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
                type="text"
              >
                Clear
              </el-button>

              <div class="button-container">
                <el-radio
                  v-model="radio1"
                  label="1"
                  size="mini"
                  border
                  @change="
                    selectDestination(1);
                    currentPage = 1;
                    isSelectedRate = true;
                  "
                >
                  0+
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
                  "
                  >1+
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
                </el-radio>
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
                type="text"
                >Clear
              </el-button>

              <div class="radio-item-categorie">
                <el-radio
                  class="radio_label"
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
            <div class="product-wrapper">
              <div class="product-card-wrapper">
                <el-col
                  :span="80"
                  v-for="(product, index) in products"
                  :key="index"
                >
                  <el-card
                    shadow="always"
                    class="card_body"
                    @click.native="clickFunction()"
                  >
                    <div class="left_img">
                      <div class="product-image-wrapper">
                        <img
                          v-if="product.images[0]"
                          :src="product.images[0].variants[8].url"
                          :alt="product.images[0].caption"
                          class="product-image"
                        />
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
                            <span v-if="isLimited" @click="toDetailPage">
                            </span>
                          </div>

                          <div class="product-durations row">
                            <i
                              class="fa-solid fa-mug-saucer"
                              style="margin-right: 5px"
                            ></i>
                            <div class="duration-word1">
                              {{
                                product.duration
                                  ? displayDuration(product.duration)
                                  : "N/A"
                              }}
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
                                {{
                                  product.reviews &&
                                  product.reviews.combinedAverageRating >= 4 &&
                                  product.reviews.combinedAverageRating <= 5
                                    ? "Very Good"
                                    : product.reviews &&
                                      product.reviews.combinedAverageRating >=
                                        3 &&
                                      product.reviews &&
                                      product.reviews.combinedAverageRating < 4
                                    ? "Good"
                                    : product.reviews &&
                                      product.reviews.combinedAverageRating >=
                                        0 &&
                                      product.reviews &&
                                      product.reviews.combinedAverageRating < 3
                                    ? "Normal"
                                    : "Normal"
                                }}
                              </div>
                              <div class="rating-word2">
                                {{
                                  product.reviews
                                    ? product.reviews.totalReviews
                                    : ""
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
                                  formatPrice(
                                    product.pricing.summary.fromPrice
                                  )
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
                            <span class="view-price-button-word"
                              >View Place</span
                            >
                          </el-button>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </div>
            </div>
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

      <div class="foot_part_set">
        <div class="total-container">
          <div class="subscribe-wrapper">
            <div class="footer-text-box">
              <div class="footer-text">
                <div>Subscribe</div>
                <div>Newsletter</div>
              </div>

              <div class="footer-text2">
                More travel tips directly into your mailbox!
              </div>

              <div class="footer-text3">
                Get inspired! Receive travel discounts, tips and behind the
                scenes stories.
              </div>

              <div class="subscribe-bar">
                <el-input
                  v-model="email"
                  class="footer-email"
                  placeholder="Your Email Address"
                >
                </el-input>

                <el-button type="info" class="subsribe-button">
                  Subscribe
                </el-button>
              </div>
            </div>

            <div class="image-container">
              <div class="footer-image">
                <img src="../static/footer-image.png" alt="" />
              </div>
            </div>
          </div>

          <div class="total-bot-container">
            <div class="info-wrapper">
              <div class="left-container mt-40 row ml-40">
                <div class="media-lego ml-25">
                  <img src="../static/Sunbook_colour-01.png" height="45" />
                </div>

                <div class="left-image-container mt-10">
                  <a href="https://www.facebook.com/sunbook.ca">
                    <img
                      src="../static/facebook.png"
                      style="height: 20px; width: 20px"
                    />
                  </a>

                  <el-popover placement="top-start" trigger="hover">
                    <img
                      src="=../static/qrcode.jpg"
                      style="width: 30px; height: 25px"
                    />
                    <img
                      slot="reference"
                      src="../static/wechat.png"
                      style="width: 30px; height: 25px"
                    />
                  </el-popover>

                  <a
                    href="https://www.xiaohongshu.com/user/profile/60b9abe40000000001007506?xhsshare=CopyLink&appuid=5ce83006000000001000a8ce&apptime=1675656356"
                  >
                    <img src="../static/xiaohongshu.png" style="height: 13px" />
                  </a>

                  <a href="https://www.instagram.com/sunbook.ca/">
                    <img
                      src="../static/camera.png"
                      style="height: 21px; width: 23px"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div class="footer-wrapper">
              <div class="colunm">
                <p class="title-word">热门目的地</p>

                <p>
                  <el-link
                    href="https://sunbook.ca/comparision"
                    type="info"
                    target="_blank"
                    class="text-word"
                    >加拿大</el-link
                  >
                </p>
                <p>
                  <el-link
                    href="https://sunbook.ca/manulife"
                    type="info"
                    target="_blank"
                    class="text-word"
                    >坎昆</el-link
                  >
                </p>
                <p>
                  <el-link
                    href="https://sunbook.ca/protections"
                    type="info"
                    target="_blank"
                    class="text-word"
                    >古巴</el-link
                  >
                </p>
                <p>
                  <el-link
                    href="https://www.bookmytest.ca/ata/10011028"
                    type="info"
                    target="_blank"
                    class="text-word"
                    >多米尼加</el-link
                  >
                </p>
              </div>

              <div class="colunm">
                <p class="title-word">热门活动</p>
                <p>
                  <el-link
                    href="https://sunbook.ca/question"
                    type="info"
                    target="_blank"
                    class="text-word"
                    >多伦多直升机</el-link
                  >
                </p>
                <p>
                  <el-link
                    href="https://sunbook.ca/uplift"
                    type="info"
                    target="_blank"
                    class="text-word"
                    >班夫骑马</el-link
                  >
                </p>
                <p>
                  <el-link
                    href="https://sunbook.ca/groupTravel"
                    type="info"
                    target="_blank"
                    class="text-word"
                    >坎昆浮潜</el-link
                  >
                </p>
                <p>
                  <el-link
                    href="https://sunbook.ca/about?type=0"
                    type="info"
                    target="_blank"
                    class="text-word"
                    >哈瓦那一日游</el-link
                  >
                </p>
              </div>

              <div class="colunm">
                <p class="title-word">热门种草推荐</p>
                <p>
                  <el-link
                    href="https://sunbook.ca/about?type=1"
                    type="info"
                    target="_blank"
                    class="text-word"
                    >怎样预订当地活动</el-link
                  >
                </p>
                <p>
                  <el-link
                    href="https://blog.sunbook.ca/"
                    type="info"
                    target="_blank"
                    class="text-word"
                    >当地活动推荐</el-link
                  >
                </p>
                <p>
                  <el-link
                    href="https://sunbook.ca/about?type=2"
                    type="info"
                    target="_blank"
                    class="text-word"
                    >坎昆最值得一玩的活动</el-link
                  >
                </p>
                <p>
                  <el-link
                    href="https://www.google.ca"
                    type="info"
                    target="_blank"
                    class="text-word"
                    >牙买加当地团推荐</el-link
                  >
                </p>
              </div>

              <div class="colunm">
                <p class="title-word">关于Sunbook日光记</p>
                <p>
                  <el-link
                    href="https://sunbook.ca/about?type=0"
                    type="info"
                    target="_blank"
                    class="text-word"
                    >关于我们</el-link
                  >
                </p>
                <p>
                  <el-link
                    href="https://sunbook.ca/about?type=0"
                    type="info"
                    target="_blank"
                    class="text-word"
                    >合作伙伴</el-link
                  >
                </p>
              </div>

              <div class="colunm">
                <p class="title-word">联系我们</p>
                <p>
                  <el-link
                    href="https://sunbook.ca/about?type=0"
                    type="info"
                    target="_blank"
                    class="text-word"
                    >联系方式</el-link
                  >
                </p>
                <p>
                  <el-link
                    href="https://sunbook.ca/about?type=0"
                    type="info"
                    target="_blank"
                    class="text-word"
                    >商务合作</el-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mini-bottom">
      <el-button class="mini-bottom-click" type="primary" @click="showDialog"
        ><i class="fa-solid fa-bars"></i
      ></el-button>

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
              type="text"
            >
              Clear
            </el-button>

            <div class="button-container">
              <el-radio
                v-model="radio1"
                label="1"
                size="mini"
                border
                @change="
                  selectDestination(1);
                  currentPage = 1;
                  isSelectedRate = true;
                "
              >
                0+
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
                "
                >1+
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
              </el-radio>
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
              type="text"
              >Clear
            </el-button>

            <div class="radio-item-categorie">
              <el-radio
                class="radio_label"
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

export default {
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
      radio1: "",
      email: "",
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
      selectedCurrency: "",
      selectedFlag: "/Canada_flag.png",
      currencies: [
        { value: "CAD", label: "CAD", flag: "/Canada_flag.png" },
        { value: "USD", label: "USD", flag: "Canada_flag.png" },
      ],
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
      destinationId:'',
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
    if (localStorage.getItem("products")) {
      this.products = JSON.parse(localStorage.getItem("products"));
    }
    if (localStorage.getItem("totalCount")) {
      this.totalCount = JSON.parse(localStorage.getItem("totalCount"));
    }
    if (localStorage.getItem("selectedDestination")) {
      this.selectedDestination = JSON.parse(
        localStorage.getItem("selectedDestination")
      );
    }
    
  },
  created() {
    // this.selectAttraction()
  },
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
    handleCommand(command) {
      this.selectedCurrency = command;
      this.currency = command;
      console.log(this.currency);
      callEvent.$emit("send-currency", this.currency);
      const selected = this.currencies.find((item) => item.value === command);
      this.selectedFlag = selected.flag;
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
          localStorage.setItem("products", JSON.stringify(this.products));
          localStorage.setItem("totalCount", JSON.stringify(this.totalCount));
          localStorage.setItem(
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
      // localStorage.setItem('selectedDestinationName', this.selectedDestinationName);
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
    handleCommand(command) {
      this.selectedCurrency = command;
      this.currency = command;
      console.log(this.currency);
      callEvent.$emit("send-currency", this.currency);
      const selected = this.currencies.find((item) => item.value === command);
      this.selectedFlag = selected.flag;
    },
    showDialog() {
      this.dialogVisible = true;
    },
    handleConfirm() {
      // 处理点击确定按钮后的逻辑
      this.dialogVisible = false;
    },
  },
};
</script>

<style>
.total-container1 {
  display: flex;
  width: 100%;
  height: auto;
  align-items: end;
  justify-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
}
.title_part {
  width: 98%;
  height: 50px;
  box-shadow: 0px 4px 16px rgba(141, 211, 187, 0.15);
}
.col-0 a {
  color: black;
}
.col-0 i {
  color: black;
}
.search-bar-wrapper1 {
  margin-top: 150px;
  width: 100%;
  height: 200px;
}
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
.search-bar .navmenu {
  margin-top: 20px;
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
  font-family: "Open Sans";
}
.productpart_container {
  width: 100%;
  height: auto;
}
/* left part */
.left_part {
  flex-direction: column;
  gap: 20px;
  width: 30%;
  height: 1500px;
  box-shadow: 0px 4px 16px rgba(141, 211, 187, 0.15);
  margin-right: 20px;
  margin-left: 20px;
}
.filter-word {
  width: 100%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 2.5vw;
  color: #112211;
  margin-left: 30px;
  margin-top: 50px;
}
.price_part {
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
}
.price-selector {
  width: 80%;
}
.price-selector-word {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 1vw;
  color: #112211;
}
.el-radio__label {
  padding-left: 5px;
}
.price-selector-slide {
  width: 100%;
  height: 20px;
}
.el-slider__runway {
  height: 2px;
}
.el-slider__bar {
  background-color: black;
  height: 3px;
}
.el-slider__stop {
  height: 3px;
}
.el-slider__button {
  background-color: #8dd3bb;
  border-color: #8dd3bb;
}
.rating_part {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  margin: 20px 0;
}
.rate-selector {
  width: 80%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  border-top: 0.069vw solid rgba(17, 34, 17, 0.25);
}
.rate-word {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 1vw;
  color: #112211;
  margin-top: 20px;
}
.clear-button {
  display: flex;
  cursor: pointer;
}
.clear-button + .button-container {
  margin-top: 0;
}
.button-container {
  width: 100%;
  height: 30px;
  display: flex;
  margin-top: 20px;
}
.button1 {
  width: 40px;
  height: 30px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  border-radius: 5px;
  border: 1px solid #a0d9c5;
  margin-right: 20px;
  background-color: aliceblue;
  cursor: pointer;
}
@media (max-width: 1000px) {
  .button1 {
    margin-right: 10px;
  }
}
.special_part {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 250px;
  margin: 20px 0;
}
.specials-wrapper {
  width: 80%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  border-top: 0.069vw solid rgba(17, 34, 17, 0.25);
}
.special-word {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 1vw;
  color: #112211;
  margin: 20px 0;
}
.checkbox-item-specials {
  display: block;
  margin-top: 5px;
}
@media only screen and (max-width: 800px) {
  .checkbox-item-specials {
    margin-top: 5px;
  }
}
.el-checkbox__inner {
  border-color: #112211;
}
.el-checkbox__label {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 0.97vw;
  color: #112211;
}
.categories_part {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 270px;
  margin: 20px 0;
}
.categories-wrapper {
  width: 80%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  border-top: 0.069vw solid rgba(17, 34, 17, 0.25);
}
.categories-word {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 1vw;
  color: #112211;
  margin-top: 20px;
}
.el-radio__inner {
  border-color: #112211;
}
.clear-button + .radio-item-categorie {
  margin-top: 0;
}
.radio-item-categorie {
  width: 80%;
  height: 200px;
  margin-top: 20px;
}
.el-radio__label {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 0.97vw;
  color: #112211;
}
.more-show {
  cursor: pointer;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1vw;
  color: #ff8682;
}
.duration_part {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  margin: 20px 0;
}
@media (min-width: 1600px) {
  .duration_part {
    margin-top: 40px; /* 大屏幕上的上边距 */
  }
}
.duration-wrapper {
  width: 80%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  border-top: 0.069vw solid rgba(17, 34, 17, 0.25);
}
.duration-word {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 1vw;
  color: #112211;
  margin: 20px 0;
}
/* right part */
.right_part {
  flex-direction: column;
  width: 61%;
  height: 2300px;
}
@media (max-width: 800px) {
  .right_part {
    width: 90%;
    height: auto;
    margin: 0 auto;
  }
}
.right_title_part {
  width: 100%;
  height: 70px;
  padding: 5px 10px;
}
.message-wrapper {
  width: 98%;
  display: flex;
  height: 30px;
  margin-top: 8px;
  padding: 5px 10px;
}
.sort-wrapper {
  display: flex;
  justify-content: end;
  margin-right: 15px;
  width: 90%;
}
.sort-by {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17.07px;
  text-align: right;
  color: #112211;
  margin-right: 10px;
  margin-top: 10.5px;
}
.recommend-button {
  width: 140px;
}
.el-select .el-input {
  border: none;
}
.recommend-button .el-select:hover .el-input__inner {
  border: none;
}
.recommend-button .el-input__inner:hover {
  border: none;
}
.recommend-button .el-input__inner {
  border: none;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  width: 100%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}
.el-input.is-active .el-input__inner,
.el-input__inner:focus {
  border-color: #8dd3bb;
  outline: 0;
}
.sort-button input {
  border: none;
}
.recommend-option {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17.07px;
  color: #112211;
}
.el-select-dropdown__item.selected {
  color: #8dd3bb;
}
.el-select .el-input__inner {
  font-weight: bold;
}
.message-word {
  width: auto;
  white-space: nowrap;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 1vw;
  line-height: 1.21vw;
  margin-top: 10px;
  color: #112211;
}
@media only screen and (max-width: 720px) {
  .message-word {
    width: 40%;
  }
}
.message-word span {
  color: red;
}
.right_product_part {
  width: 97%;
  height: auto;
  padding: 5px 10px;
}
.page_part {
  /* margin-top: 50px; */
  margin-bottom: 60px;
}
.page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
.mini-bottom {
  position: fixed;
  right: 50px;
  bottom: 350px;
  width: 40px;
  border-radius: 20px;
  color: #8dd3bb;
}
.mini-bottom-click {
  border-radius: 20px;
  color: #8dd3bb;
}
.mini-bottom .el-button--primary {
  color: #fff;
  background-color: #8dd3bb;
  border-color: #8dd3bb;
}
@media only screen and (min-width: 800px) {
  .mini-bottom {
    display: none;
  }
}
@media only screen and (max-width: 800px) {
  .left_part {
    display: none;
  }
}
.foot_part_set {
  width: 100%;
}
</style>
