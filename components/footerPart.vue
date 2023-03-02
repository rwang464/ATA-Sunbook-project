<template>
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
                Get inspired! Receive travel discounts, tips and behind the scenes
                stories.
                </div>

                <div class="subscribe-bar">

                  <el-input
                  v-model="email"
                  class="footer-email"
                  placeholder="Your Email Address">
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
                    <img
                    src="../static/Sunbook_colour-01.png"
                    height="45"/>
                </div>

                <div class="left-image-container mt-10">

                        <a href="https://www.facebook.com/sunbook.ca">
                        <img src="../static/facebook.png" style="height: 20px; width: 20px"/>
                        </a>

                        <el-popover placement="top-start" trigger="hover">
                        <img src="=../static/qrcode.jpg" style="width: 30px; height: 25px;"/>
                        <img slot="reference" src="../static/wechat.png"
                            style="width: 30px; height: 25px;"
                            />
                        </el-popover>

                        <a href="https://www.xiaohongshu.com/user/profile/60b9abe40000000001007506?xhsshare=CopyLink&appuid=5ce83006000000001000a8ce&apptime=1675656356">
                        <img src="../static/xiaohongshu.png" style="height: 13px;"/>
                        </a>

                        <a href="https://www.instagram.com/sunbook.ca/">
                        <img src="../static/camera.png" style="height: 21px; width: 23px"/>
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
                              >联系方式</el-link>
                          </p>
                          <p>
                          <el-link
                              href="https://sunbook.ca/about?type=0"
                              type="info"
                              target="_blank"
                              class="text-word">商务合作</el-link>
                          </p>

        </div>

        </div>

      </div>

    </div>

</template>


<style>
.total-container{
    margin-top: 200px;
    width: 100%;
    height: 550px;
    align-items: end;
    justify-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: aquamarine;
}
@media (max-width: 1000px) {
  .total-container {
    width: 100%;
    height: 1800px;
  }
}
.social-lego{
    position:absolute; 
    top:85px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 13px;
    width: 12%;
    height: 22px;
}
.subscribe-wrapper{
   display: flex;
   height: 400px;
   justify-content: space-between;
   width: 90%;
   margin: 0 auto;
   margin-top: -10rem;
   display: flex;
   padding: 0px 24px;
   background: #CDEAE1;
   box-shadow: 0px 4px 16px rgba(17, 34, 17, 0.05);
   border-radius: 20px;
}
@media (max-width: 1001px) {
  .subscribe-wrapper {
    flex-direction: row;
    width: 80%;
    height: 700px;
  }
}
.image-container{
  display: flex;
  align-items: end;
  justify-content: end;
  width: 50%;
}
@media (max-width: 1000px) {
  .image-container {
    flex-direction: row;
    width: 50%;
    height: 650px;
  }
}
@media (max-width: 585px) {
  .image-container {
    flex-direction: row;
    width: 40%;
    height: 650px;
  }
}
.footer-image{
  margin-bottom: -5px;
  width: 390px;
  height: 310px;
}

.footer-wrapper{
   margin-top: 30px;
   display: flex;
   flex-direction: row;
   width: 70%;
   height: 86%;
}
@media (max-width: 1001px) {
  .footer-wrapper {
    flex-direction: column;
    width: 25%;
    height: auto;
  }
}
.colunm{
    margin-left: 40px;
    margin-top: 30px;
    width: 100%;
    height: 80%;
}
@media (max-width: 1002px) {
  .colunm {
    flex-direction: column;
    width: 80%;
    height: auto;
  }
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
    color: #112211;
    opacity: 0.7;
}
.total-bot-container{
    margin-top: 0px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: row;
    width: 100%;
    height: 400px;
}
@media (max-width: 1000px) {
  .total-bot-container {
    margin-top: 50px;
    flex-direction: row;
    width: 100%;
    height: 1450px;
  }
}
.info-wrapper{
   display: flex;
   margin-top: 30px;
   flex-direction: row;
   justify-content: end;
   align-content: start;
   width: 25%;
   height: 86%;
}
@media (max-width: 1000px) {
  .info-wrapper {
    flex-direction: row;
    justify-content: start;
    width: 35%;
    height: 100%;
  }
}
.left-container{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 70%;
    height: 60%;
    gap: 24px;
}
@media (max-width: 1231px) {
  .left-container {
    margin-left: 0;
    width: 70%;
    flex-grow: 1;
    align-items: start;
    justify-items: start;
  }
}
@media (max-width: 630px) {
  .left-container {
    margin-left: 0;
    width: 70%;
    flex-grow: 1;
    align-items: start;
    justify-items: start;
  }
}
@media (max-width: 1231px) {
  .media-lego {
    margin-left: 30px;
  }
}
.left-image-container{
    margin-left: 25px;
    align-items: center;
    width: 60%;
    height: 30px;
    justify-content: space-between;
}
@media (max-width: 1060px) {
  .left-image-container {
    display: flex;
    left: 40px;
    flex-direction: column;
    row-gap: 40px;
    width: 20%;
    height: 10%;
  }
}
.footer-text-box{
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding: 24px 0px;
   gap: 24px;
   width: 60%;
   height: 85%;
}
@media (max-width: 1052px) {
  .footer-text-box {
    width: 100%; /* 将宽度设置为 100% */
    height: auto; /* 让高度自适应内容 */
  }
}
.footer-text{
   display: flex;
   flex-direction: column;
   font-family: 'Gilroy';
   font-style: normal;
   font-weight: 700;
   font-size: 44px;
   line-height: 54px;
   color: #112211;
}
.footer-text2{
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
   font-family: 'Gilroy';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 19px;
   color: #112211;
   opacity: 0.7;
}
.subscribe-bar{
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
}

.footer-email{
  margin-top: 10px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   width: 75%;
   height: 50px;
   border-radius: 4px 4px 0px 0px;
}
.subsribe-button{
   width: 110px;
   margin-left: 50px;
   background-color:#000000;
   height: 42px;
   font-family: 'Gilroy';
   font-style: normal;
   font-weight: 900;
   font-size: 14px;
   line-height: 17px;
   border-radius: 8px 8px 8px 8px;
}
.subsribe-button:focus,.search-button:hover{
background-color:#000000;
}
.subsribe-button:active{
background-color: #79747E;
}

</style>


<script>
import Qs from "qs";
import axios from "axios";
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    open() {
      this.$alert(
        "We have received your email. We will contact you as soon as possible!",
        "Thank You",
        {
          confirmButtonText: "Confirm",
          //   callback: action => {
          //     this.$message({
          //       type: 'success',
          //       message: `action: ${ action }`
          //     });
          //   }
        }
      );
    },
    openfalse() {
      this.$alert(
        "You already submit before. We will contact you as soon as possible!",
        "You already Submit One",
        {
          confirmButtonText: "Confirm",
        }
      );
    },
    openfalse2() {
      this.$alert("Fail to submit. Please wait and try again later", "Sorry", {
        confirmButtonText: "Confirm",
      });
    },
    openfaleEmail() {
      this.$alert(
        "Please Enter the right email address",
        "Wrong Email Address",
        {
          confirmButtonText: "Confirm",
        }
      );
    },
    subsribe() {
      const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(this.email)) {
        this.openfaleEmail();
      } else {
        axios
          .post(
            "http://localhost:8080/PHP/sql.php",
            Qs.stringify({
              email: this.email,
            }),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          )
          .then((response) => {
            console.log(response.data);
            console.log(this.email);
            if (response.data.code === 1) {
              this.open();
            } else if (response.data.code === 0) {
              this.openfalse();
            } else {
              this.openfalse2();
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
};
</script>
