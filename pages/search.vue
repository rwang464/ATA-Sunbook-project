<template>
<div>
    <div>
    <titlePart />
      <productPart />
       <footerPart />


    </div>
   <div>
   <!-- <img src="../static/Paris.png"> -->
   </div>
    
</div>


</template>

<script>

import titlePart from '../components/titlePart.vue';
import footerPart from '../components/footerPart.vue';
import searchBar from '../components/searchBar.vue';
import productPart from '../components/productPart.vue';

export default {
  components: {
    productPart,
    titlePart,
    footerPart,
    searchBar,
    
  },
  data(){
    return{
      products: []
    }
  },
 
  
}
</script>

<style>

</style>