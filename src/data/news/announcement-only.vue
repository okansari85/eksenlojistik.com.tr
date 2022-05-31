<template>
  <div class="row justify-content-between">
    <news-item/>
  </div>

</template>

<script>
import NewsItem from "@/data/news/news-item";
export default {
  name: "announcement-only",
  components: {NewsItem}
}
</script>

<style scoped>

</style>