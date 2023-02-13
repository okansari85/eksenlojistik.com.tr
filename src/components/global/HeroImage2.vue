<template>

    <section class="services-banner">
        <img :src="img" alt="IK Banner">
        <div class="services-banner-content">
            <div class="container">
                <div class="row">
                    <span class="text-uppercase">{{  $t('services.eksen-logistic') }}</span>
                    <h1 class="display-6 fw-semibold text-white"> {{ $t('hr.insan-kaynaklari')  }}</h1>
                </div>
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


