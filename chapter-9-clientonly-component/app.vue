<template>
  <div>
    <h1>Article Title</h1>
    <p>This is a blog post...</p>

    <!-- ClientOnly ensures Comments is loaded only in the browser -->
    <ClientOnly fallback-tag="div" fallback="Loading comments...">
      <Comments />
    </ClientOnly>
  </div>
</template>