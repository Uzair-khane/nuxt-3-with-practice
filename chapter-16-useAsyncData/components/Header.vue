<script setup>
// Fetch data from an API using useAsyncData
const {data:posts,pending,error}=await useAsyncData('posts',()=>{
 return $fetch("https://jsonplaceholder.typicode.com/posts" );
  
})

</script>

<template>
<h1>Posts Api data</h1>
<h1 v-if="pending">Loding data....</h1>
<h1 v-else-if="error">error occure</h1>
<div v-else>
  <div v-for="post in posts">
    <h1>{{ post.id }}</h1>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</div>
</template>