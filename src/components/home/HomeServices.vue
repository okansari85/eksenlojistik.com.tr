<template>

    <section class="home-services py-5" id="home-services">
        <div class="container py-md-5">
            <div class="globals-title text-center pt-5 pb-3">
                <span class="text-uppercase fs-6">{{ $t('home.ne-yapariz') }}</span>
                <h1 class="fs-1 text-capitalize pt-1 fw-semibold ">{{ $t('home.hizmetlerimiz') }}</h1>
                <p v-html="$t('home.hizmetler1')"></p>
            </div>
            <div class="row justify-content-center justify-content-lg-between align-items-center position-relative services-item-hero pb-5"
                style="z-index: 555;">

                <router-link to="/hizmetler" class="col-6 col-lg-3 py-md-3 text-center hero-item">
                    <div class="hero-item-image position-relative">
                        <img src="/image/home/services/karayolu.png" alt="Services Item" class="w-100" />
                    </div>
                    <div class="text-capitalize fw-bold mt-3 hero-item-description">
                        <h3 class="fw-500 fs-6" v-html="$t('home.karayolu-tas')"></h3>
                    </div>
                </router-link>

                <router-link to="/hizmetler" class="col-6 col-lg-3 py-md-3 text-center hero-item">
                    <div class="hero-item-image position-relative">
                        <img src="/image/home/services/gumrukleme.png" alt="Services Item" class="w-100" />
                    </div>
                    <div class="text-capitalize fw-bold mt-3 hero-item-description">
                        <h3 class="fw-500 fs-6" v-html="$t('home.gumrukleme')"></h3>
                    </div>
                </router-link>
                <router-link to="/hizmetler" class="col-6 col-lg-3 py-md-3 text-center hero-item">
                    <div class="hero-item-image position-relative">
                        <img src="/image/home/services/depolama.png" alt="Services Item" class="w-100" />
                    </div>
                    <div class="text-capitalize fw-bold mt-3 hero-item-description">
                        <h3 class="fw-500 fs-6" v-html="$t('home.depolama')"></h3>
                    </div>
                </router-link>
                <router-link to="/hizmetler" class="col-6 col-lg-3 py-md-3 text-center hero-item">
                    <div class="hero-item-image position-relative">
                        <img src="/image/home/services/minivan.png" alt="Services Item" class="w-100" />
                    </div>
                    <div class="text-capitalize fw-bold mt-3 hero-item-description">
                        <h3 class="fw-500 fs-6" v-html="$t('home.minivan')"></h3>
                    </div>
                </router-link>
            </div>
        </div>
    </section>


</template>


<script>

import Title from '@/components/global/Title.vue'

export default {
    components: { Title },
}

</script>


<style lang="scss" scope>
.hero-item {
    transition: all .3s ease;
    overflow: hidden;
    cursor: pointer;
    &-description {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        background-color: white;
        position: relative;
        top: -70px;
        padding: 15px;
        width: 250px;
        max-width: 100%;
        margin: 0 auto;
        &:hover {
            h3 {
                color: #3175f3;
            }
        }
    }
}

.hero-item-image {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: all .3s ease;

    img {
        transition: all .3s ease;
        width: 100%;
        overflow: hidden;
        max-width: 100%;
        object-fit: cover;
    }

    &:hover {
        transition: all .3s ease;
        max-width: 100%;
        width: 100%;
        overflow: hidden;

        img {
            transform: scale(1.3);
        }
    }
}


.globals-title {
  span {
    color: #3175f3;
    text-transform: uppercase!important;
    font-weight: 600;
  }
}
</style>