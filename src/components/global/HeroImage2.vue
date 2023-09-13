<template>

    <section class="services-banner">
        <img :src="img" alt="IK Banner" style="filter:brightness(60%)"  class="position-absolute top-0 end-0 start-0 w-100 h-100">
        <div class="services-banner-content text-start h-100 pb-5 px-3 px-lg-0" style="z-index:333">
            <div class="container py-md-5 title-animation h-100 d-flex flex-column text-center align-items-center justify-content-end">
                <span class="text-uppercase">{{  $t('services.eksen-logistic') }}</span>
                <h1 class="display-5 fw-600 text-white"> {{ $t('hr.insan-kaynaklari')  }}</h1>
            </div>
        </div>
    </section>

</template>


<script>

export default {
    name: "HeroImage2",
    props: {
        img: String,
    }
}


</script>


