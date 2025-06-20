<script setup>
onPrehydrate(()=>{
  console.log("its work");
  
})
</script>
<template>
  <div>
  <h1>hi {{ onPrehydrate }}</h1>
  </div>
</template>
