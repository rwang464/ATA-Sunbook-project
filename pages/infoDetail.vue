<template>
<div>

    <titlePart />
    <productInfo />
    <footerPart style="top:3600px;"></footerPart>
</div>
</template>

<script>
import titlePart from '../components/titlePart.vue';
import footerPart from '../components/footerPart.vue';
import productInfo from '../components/productInfo.vue';

export default{
    components:{
        titlePart,
        footerPart,
        productInfo,
    }
}
</script>

<style>

</style>