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
.img-logo-components{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 24px 32px;
        gap: 362px;
        position: absolute;
        width: 1376px;
        height: 30px;
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
    
    left: 1140px;
    top: 20px;
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
    width:100px;
    height:40px;
    border-color: white;
    margin-left: 120px;
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
    font-size: 14px;
    line-height: 19px;
    bottom:8px;
    right:23px;
}
</style>