<template>

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
                    <a href="https://www.facebook.com/sunbook.ca">  <i class="fa-brands fa-facebook fa-lg" ></i></a>
                    <i class="fab fa fa-twitter fa-lg"></i>
                    <i class="fab fa-brands fa-youtube fa-lg"></i> 
                    <a href="https://www.instagram.com/sunbook.ca/"> <i class="fa-brands fa-square-instagram fa-lg"></i></a>
                   
    
                   
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
                    <p class="title-word">
                        关于Sunbook日光记</p>
                    <p class="text-word">
                        <a href="https://sunbook.ca/about?type=0">
                        关于我们
                        </a>
                    </p>
                    <p class="text-word">合作伙伴</p>
                    
                </div>
                <div class="colunm" style="margin-left:-70px">
                    <p class="title-word">联系我们</p>
                    <p class="text-word">联系方式</p>
                    <p class="text-word">商务合作</p>
                    
                </div>
            </div>
        </div>
</template>
<script>
export default{
    data() {
        return{
            input:''
        }
       
    }
}
</script>
