<template>

    <div class="col-md-6 col-lg-4 py-3 py-lg-0" v-for="(item, index) in newsData" :key="index">
        <div class="news2-image">
            <img :src="item.image" alt="News">
            <div class="news-2-date py-2"><span class="text-muted fs-08"> {{ item.date }}</span></div>
            <h6 class="news-2-title fw-bold"> {{ item.title }} </h6>
            <p class="news-2-description py-3 col-11 fs-09">{{ item.description }}</p>
            <router-link to="/haberler" class="news-2-link fw-500 text-decoration-underline text-dark">Devamını Oku</router-link>
        </div>

    </div>


</template>


<script>
export default {
    name: 'Content',
    data() {
        return {
            newsData: [
            {
                id: "1",
                date: "Aralık 19, 2022",
                title: "News 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ",
                image: "image/news/haber1.png"
            },
            {
                id: "2",
                date: "Aralık 19, 2022",
                title: "News 2",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ",
                image: "image/news/cekya_1.jpg"
            },
            {
                id: "3",
                date: "Aralık 19, 20232",
                title: "News 2",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ",
                image: "image/news/balkan_1.png"
            },

        ]
        }
    }
}

</script>


<style>


</style>