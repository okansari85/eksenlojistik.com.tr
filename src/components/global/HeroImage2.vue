<template>

    <section class="services-banner">
        <img :src="img" alt="IK Banner">
        <div class="services-banner-content">
            <div class="container">
                <div class="row">
                    <span class="text-uppercase">eksen lojistik</span>
                    <h1 class="display-6 fw-semibold text-white"> {{ miniTitle }} </h1>
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
        // title: String,
        miniTitle: String,
    }
}


</script>


