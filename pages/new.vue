<template>
    <div>
        <!-- <div v-for="tag in tag.tags" :value="tag.tagId">
           
            {{ tag.allNamesByLocale.en }}
       
          
            
      </div> -->
      <input type="text" v-model="searchInput"  @input="searchTags" placeholder="Search Tag...">
        <button @click="searchTags">
            search
        </button>
      <ul>
        <li v-for ="tag in filteredTags" :key="tag.tagId" @click="selectTags(tag.tagId)">
            {{ tag.allNamesByLocale.en }}
            {{ tag.allNamesByLocale.zh }}

        </li>
      </ul>
      
    </div>
  </template>
  <script>
  import { useTagStore } from '../store/tag'
  
  export default {
      setup() {
          const tag = useTagStore()
          return {
                tag,
                ...tag.tags,
                ...tag.allNamesByLocale,
              
          }      
      },
      
      data() {
        
        return{
            tags:[],
            searchInput:'',
          
        }
      },
      
      methods:{
        async searchTags(){
            await this.tag.getTags()
            this.tags=this.tag.tags
            
        }
      },
      computed:{
        filteredTags(){
            return this.tags.filter(tag=>{
                return tag.allNamesByLocale.en.toLowerCase().includes(this.searchInput.toLowerCase())
            })
        }
      }

  }
  </script>