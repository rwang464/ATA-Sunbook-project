<!-- <template>
  <test/>

</template> -->
<template>
  <div>
    <form>
      <input type="text" v-model="filtering.destination" placeholder="Enter destination">
      <input type="text" v-model="tagsString" placeholder="Enter tags">
      <input type="text" v-model="currency" placeholder="Enter currency">
      <button @click.prevent="searchItems">Search</button>
    </form>
    <div v-for="product in products" :key="product.id">
      
      <p>{{ product.productCode }}</p>
      <p>{{ product.title }}</p>
      <p>{{ product.description }}</p>
      <img :src="product.images[0].variants[3].url" :alt="product.images[0].caption">
     
    </div>
    <p> Total Count: {{ totalCount }}</p>


    <nuxt-link to="/front">Go to front Page</nuxt-link>
    <nuxt-link to="/test_two">Go to test_two Page</nuxt-link>
    <nuxt-link to="/test_three">Go to test_three Page</nuxt-link>
    <nuxt-link to="/store">store Page</nuxt-link>
    <nuxt-link to="/new">new page</nuxt-link>


    
    <nuxt-child />
  </div>

</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      filtering: {
        destination: '',
        tags: [],
      },
      tagsString: '',
      currency: '',
      products: [],
      totalCount: 0
    }
  },
  methods: {
    searchItems() {
      this.filtering.tags = this.tagsString.split(',').map(Number)
      let requestBody = {
        filtering: this.filtering,
        currency: this.currency
      }
      axios.post('/api//products/search', requestBody)
      .then(response => {
        this.products = response.data.products
        this.totalCount = response.data.totalCount
      })
    }
  }
}
</script>
