<template>


<section class="news-2 py-5">
    <div class="container py-5">
        <Title class="pt-5 pt-xl-0 text-center"
               title='Son Haberler'
               subtitle='bizden haberler'
               >
        </Title>
        <div class="news-2-wrapper">
            <div class="row justify-content-center justify-content-lg-between">
                <Content/>
            </div>
        </div>
    </div>
</section>



</template>



<script>

import Title from '@/components/global/Title';
import Content from '@/components/home/news/News-2-Content';

export default {
    components: {Title, Content},
}

</script>


