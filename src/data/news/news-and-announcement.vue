<template>
<div class="row justify-content-between">
  <news-item/>
  <news-item
  :img="('/image/services/about-sub-page-hero1.png')"/>
  <news-item/>
  <news-item/>
  <news-item/>
  <news-item/>
  <news-item/>
</div>

</template>

<script>
import NewsItem from "@/data/news/news-item";
export default {
  name: "news-and-announcement",
  components: {NewsItem}
}
</script>

<style scoped>

</style>