<template>
  <nav class="filter-nav">
        <button 
        @click="updateFilter('all')"
        :class="{ active : current === 'all'}"
        >View all
        </button>
        <button 
        @click="updateFilter('completed')"
        :class="{ active : current === 'completed'}"
        >Completed
        </button>
        <button 
        @click="updateFilter('ongoing')"
        :class="{ active : current === 'ongoing'}"
        >onGoing
        </button>
  </nav>
</template>

<script scoped>
export default {
    props : [ 'current' ],
methods : {
    updateFilter(by){
      
        this.$emit('filterChange' , by)
    }
}
}
</script>

<style >
 .filter-nav button{
    background: none;
    border: none;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
    color: rgb(136, 130, 130);
 }
.active{
     
    color: rgb(8, 8, 8)!important;
 }
 .filter-nav button:hover{
    
    color: rgb(73, 75, 73);
 }


</style>