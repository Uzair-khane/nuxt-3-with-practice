<script setup>
definePageMeta({
  middleware : function(context){
    console.log("this is middleware ");
    console.log(context);
    
    
  },
});
</script>
<template>
  <div>
   
  </div>
</template>
