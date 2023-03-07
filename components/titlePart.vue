<template>

<div class="img-logo-components">
                <div class="return-sunbook-components" style="margin-left: 40px;">
                    <i class="fa-solid fa-plane"></i>
                    <span style="cursor: pointer;" @click="sunbookLink()">
                    返回日光记主站
                    </span>
                </div>
                <div class="sunbook-logo-components">
                <img src="../static/sunbook_color.png" >

                <img src="../static/sunbook-word-color.png" class="sunbook-text-components" style="left:50px;top:22px">

                </div>
                <div class="language-button-components">
                    <el-dropdown @command="handleCommand">
                        <el-button type="primary" class="currency-change-components">
                            <i class="flag-button-components" >
                                <img :src="selectedFlag"  style="height:18px;width:20px;vertical-align: middle;margin-right: 70px;">
                              
                            </i>
                            <div class="currency-show-components">
                            {{ selectedCurrency }}
                            </div>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="item in currencies" :key="item.value" :command="item.value">{{item.label}}</el-dropdown-item>
                            </el-dropdown-menu>
                    </el-dropdown>

                </div>
     </div>
</template>

<script>
export default {
        data(){
            return{
                selectedCurrency: 'CAD',
                selectedFlag:'../static/Canada_flag.png',
                currencies: [
            {value: 'CNY', label: 'CNY',flag:'../static/Canada_flag.png'},
            {value: 'CAD', label: 'CAD',flag:'../static/Canada_flag.png'},
            
        ],
         newLocation:"https://sunbook.ca/",

            }
        },
        methods:{
             handleCommand(command) {
                this.selectedCurrency = command;
                const selected = this.currencies.find(item => item.value === command);
                this.selectedFlag = selected.flag;
             },
             sunbookLink(){
                // window.location.href=this.newLocation
                window.open(this.newLocation,"_blank");
             }
        }
        }
</script>
<style>
.return-sunbook-components{
    width:13vw;
    height:1.60vw;
   
    cursor: pointer;
}
@media only screen and (max-width: 768px) {
    .return-sunbook-components {
      width: 20vw;
      height: 1.60vw;
      cursor: pointer;
      
    }
  }
  .return-sunbook{
    cursor: pointer;
  }
  .back_to_sunbook{
    width: 6.74vw;
    height: 1.32vw;
    font-family: 'Alibaba PuHuiTi';
    font-style: normal;
    font-weight: 700;
    font-size: 0.97vw;
    line-height: 1.32vw;
    

    color: #000000;
  }
  .fa-plane{
    width:1.39vw;
   
  }
.img-logo-components{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.67vw 2.22vw;
    gap: 25.14vw;
    position: absolute;
    width: 95.56vw;
    height:2.08vw;
    left: 0px;
    top: 0px;
    /* background-color: red; */
    box-shadow: 0px 0px 10px #b5b3b3;
    

}
.sunbook-logo-components{
position: absolute;
left: 45%;
right: 53.56%;
top: 10%;
bottom: 97.12%;

}
.language-button-components{

position: absolute;
width:6.94vw;
height:2.78vw;
left: 85.42vw;
top: 1.39vw;

}
.el-dropdown{
    width:6.94vw;
    height:2.78vw;
}

.sunbook-text-components{
    position: absolute;
    left: 3.5%;
    right: 0%;
    top: 10%;
    bottom: 61.45%;
}
.currency-change-components{
background-color: white;
color:black;
width:6.94vw;
height:2.78vw;
border-color: white;
margin-left: 8.33vw;
}

.currency-change-components:focus,.currency-change-components:hover{
background-color: #c6cbc9;
color:black;
border-color: white;
}
.currency-show-components{
position:absolute;
font-family: 'Open Sans';
font-style: normal;
font-weight: 800;
font-size: 0.97vw;
line-height: 1.32vw;
bottom:0.56vw;
right:1.60vw;
}
</style>