<template>
  <section class="hero-bottom-map px-3 px-lg-0 pt-5 pt-md-0 position-relative" id="numberSection">

    <div class="container-fluid text-center pb-5 gx-0 overflow-hidden position-relative">
      <img src="/image/home/maps_.svg" alt="Map Svg" class="maps-svg">
      <div class="wrapper-down-icon2 position-absolute" style="top: -350px;">
        <div class="circle"></div>
        <div class="circle circle-2"></div>
      </div>

      <div class="wrapper-down-icon3" style="top: -700px; left: 80%;">
        <div class="circle"></div>
        <div class="circle circle-2"></div>
      </div>
      <div class="wrapper-down-icon4" style="top: -100px; left: 72%">
        <div class="circle"></div>
        <div class="circle circle-2"></div>
      </div>
      <div class="wrapper-down-icon5" style="top: -500px; left: 50%;">
        <div class="circle"></div>
        <div class="circle circle-2"></div>
      </div>

      <div class="wrapper-down-icon6" style="top: -300px; left: 60%;">
        <div class="circle"></div>
        <div class="circle circle-2"></div>
      </div>
      <div class="wrapper-down-icon7" style="top: -500px; left: 65%;">
        <div class="circle"></div>
        <div class="circle circle-2"></div>
      </div>
      <div class="wrapper-down-icon8" style="top: -100px; left: 78%;">
        <div class="circle"></div>
        <div class="circle circle-2"></div>
      </div>

      <div class="row align-items-center py-5 content-text">
        <div class="numbers-top col-lg-7 pb-5 px-3 px-lg-0">
          <div class="title text-lg-start text-capitalize display-4 pb-3 text-white">{{ $t('home.bir-yilda') }} <div class="display-4 text-white">
            <span class="counter"></span> Km</div> {{ $t('home.yol-yaptik') }}</div>
          <p class="text-lg-start text-white">{{ $t('home.yol-yaptik-p') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>



export default {
  name: "Map",
  mixins: [
    {
      methods: {
        counterAnim: function(qSelector, start = 0, end, duration = 1000) {
        const target = document.querySelector(qSelector);
        let startTimestamp = null;
        // Times Tamp
        const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        target.innerText = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
      },

    }
  ],
  
  mounted() {
    // Scroll Animation
    $(window).scroll(function () {
      var objectt = $('.hero-bottom-map');
      var obj_height = objectt.height();
      var windows_height = $(window).height();
      var obj_pos_top = objectt.position().top - (windows_height / 2);
      var obj_pos_bottom = obj_pos_top + obj_height - (windows_height / 120);
      // Scroll Window Animation  
      var scroll_top = $(window).scrollTop();
      objectt.addClass("dark-map");
      if ((scroll_top <= obj_pos_bottom)) {
        objectt.addClass("dark-map");
      } else {
        objectt.removeClass("dark-map");
      }
    });

    // Use Counter Animation
    this.counterAnim(".counter", 52000, 55000, 200000);
  },
}
</script>

<style scoped lang="scss">
@media (max-width:991.98px) {
  .content-text {
    position: relative;
  }
}

@media(min-width:992px) {
  .content-text {
    position: absolute;
    bottom: 10%;
    left: 8%;
    right: 0;
    // transform: translate(-50%, -50%);
    // margin: auto;
    width: 900px;
    max-width: 100%;
  }

  .services-item-hero {
    padding-top: 20px;
  }
}

@media(min-width:1199px) {
  .maps-svg {
    margin-top: -75px;
  }
}


</style>