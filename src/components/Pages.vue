<template>

    <section class="news-news banner" style="">
          <img src="/image/news/news-background2.jpg" alt="News Banner" class="position-absolute top-0 end-0 start-0 w-100 h-100" style="filter:brightness(60%)">
          <div class="services-banner-content text-start h-100 pb-5 px-3 px-lg-0" style="z-index:333">
            <div class="container py-md-5 title-animation h-100 d-flex flex-column text-center align-items-center justify-content-end">
                <span class="text-uppercase fw-semibold">{{ $t('services.eksen-logistic') }}</span>
                <h1 class="display-5 fw-600 text-white">{{ $t('services.depolama-hizmeti') }}</h1>
            </div>
          </div>
    </section>
    
    <section>
        <div class="container py-5">
            <div class="py-5">
                <h1>Başlık</h1>
                <p>asda</p>
                <p>asdasd</p>
            </div>
        </div>
    </section>
    
    </template>
<script>
export default{
    name : 'Pages',
    created(){
        const slug = this.$route.params.slug;
        console.log(slug);
        
    },
    mounted() {
    window.scrollTo(0, 0);
  },
}

</script>

    