<template>

  <DevOnly>
  <DebugToolbar />
  <template #fallback>
    <span></span> <!-- this will be shown in production -->
  </template>
</DevOnly>
</template>