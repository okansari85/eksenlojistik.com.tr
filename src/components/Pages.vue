<template>

    <section class="news-news banner" style="">
          <img  :src="page.image_cover ? page.image_cover : '/image/news/news-background2.jpg'"  alt="News Banner" class="position-absolute top-0 end-0 start-0 w-100 h-100" style="filter:brightness(60%)">
          <div class="services-banner-content text-start h-100 pb-5 px-3 px-lg-0" style="z-index:333">
            <div class="container py-md-5 title-animation h-100 d-flex flex-column text-center align-items-center justify-content-end">
                <span class="text-uppercase fw-semibold">{{ page.top_title }}</span>
                <h1 class="display-5 fw-600 text-white">{{ page.title }}</h1>
            </div>
          </div>
    </section>
    <section>
        <div class="container py-5">
            <div class="py-5">
                <h1>{{page.title}}</h1>
                <p v-html="page.content" class="col pt-0"></p>
            </div>
        </div>
    </section>
    </template>
<script>
/*eslint-disable*/
import { mapGetters } from 'vuex'
export default{
    name : 'Pages',
    computed: {
        ...mapGetters([
      'findPageBySlug',
    ]),
   
    slug(){
        return this.$route.params.slug;
    },
    id(){
        return this.$route.params.id;
    },
    page(){
        return this.findPageBySlug(this.id,this.slug);
    },
    
    },
    mounted() {
    window.scrollTo(0, 0);
    },
    watch:{
    $route (to, from){
      this.findPageBySlug(this.id,this.slug); 
    }
} 
   
}

</script>

    