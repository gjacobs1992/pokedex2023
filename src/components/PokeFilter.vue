<template>
  <div>
    <label>Types</label>
    <select>
      <option v-for="type in typeList" v-bind:key="type.name">{{ capitalizeFirstChar(type.name) }}</option>
    </select>
  </div>
</template>

<script>
import PokeService from '../services/PokeService';
import Mixins from '../mixins/mixins';
export default {
    mixins:[
        Mixins,
    ],
    data(){
        return{
            typeList: [],
        }
    },
    props: {
        
    },
    created(){
        PokeService.getAllTypes().then((response) => {
            this.typeList = response.data.results;
        })
        .catch((error) => {
            console.log('Failed to fetch type list.', error);
        })
    }
}
</script>

<style></style>
