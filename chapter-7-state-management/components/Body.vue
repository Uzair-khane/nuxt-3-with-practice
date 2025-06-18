<script setup>
const reward = useReward();
</script>
<template>
  <div>
    <h1 v-bind:class="helo">This is component</h1>
    <h3>{{ reward }}</h3>
  </div>
</template>