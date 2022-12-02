<template>

    <section class="home-services py-5" id="home-services">
        <div class="container py-md-5">
            <div class="globals-title text-center pt-5 pb-3">
                <span class="text-uppercase fs-6">neler yaparız?</span>
                <h1 class="fs-1 text-capitalize pt-1 fw-semibold ">Hizmetlerimiz</h1>
                <p class="fs-09 pb-4 pt-2"> 
                    İster işi kazanmak için bir bütçe teklifine ihtiyacınız olsun, <br> ister yarın
                    sevkiyata hazır olun, amacımız, ihtiyacınız olan fiyatı hızla aldığınızdan emin olmaktır.' </p>
            </div>
            <div class="row justify-content-center justify-content-lg-between align-items-center position-relative services-item-hero pb-5"
                style="z-index: 555;">

                <div class="col-6 col-lg-3 py-md-3 text-center hero-item" v-for="(item, index) in heroData" :key="index">
                    <!-- <router-link to="/services"> -->
                        <div class="hero-item-image position-relative">
                            <img :src="item.image" alt="Services Item" class="w-100" />
                        </div>
                        <div class="text-capitalize fw-bold mt-3 hero-item-description">
                            <h3 class="fw-500 fs-6">{{ item.title }} <br> {{ item.subtitle }} </h3>
                        </div>
                    <!-- </router-link> -->
                </div>

            </div>




        </div>
    </section>


</template>


<script>

import Title from '@/components/global/Title.vue'

export default {
    components: { Title },
    data() {
        return {
            heroData: [
                {
                    title: 'Karayolu',
                    subtitle: 'taşımacılığı',
                    image: '/image/home/services/karayolu.png',
                },
                {
                    title: 'Gümrükleme',
                    subtitle: 'hizmeti',
                    image: '/image/home/services/gumrukleme.png',
                },
                {
                    title: 'Depolama',
                    subtitle: 'hizmeti',
                    image: '/image/home/services/depolama.png',
                },
                {
                    title: 'Minivan',
                    subtitle: 'taşımacılık',
                    image: '/image/home/services/minivan.png',
                },
            ],
        }
    }
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