<template>
  <section class="hero-bottom-map px-3 px-lg-0 pt-5 pt-md-0 position-relative bg-custom-dark" id="numberSection">
    <div class="container">
      <div
        class="row justify-content-center justify-content-lg-between align-items-center position-relative services-item-hero"
        style="z-index: 555;">

        <div class="col-6 col-lg-3 py-3 text-center hero-item">
          <router-link to="/services/karayolu-tasimaciligi">
            <div class="hero-item-image position-relative">
              <img src="/image/home/j1.jpg" alt="Services Item" class="w-100" />
            </div>
            <div class=" text-capitalize fw-bold mt-3">
              <h3 class="fw-bold lh-1 fs-4">Karayolu</h3>
              <span>taşımacılığı</span>
            </div>
          </router-link>
        </div>

        <div class="col-6 col-lg-3 py-3 text-center hero-item">
          <router-link to="/services/gumrukleme">
            <div class="hero-item-image active">
              <img src="/image/home/h1.jpg" alt="Services Item" class="w-100" />
            </div>
            <div class="text-capitalize fw-bold mt-3">
              <h3 class="fw-bold lh-1 fs-4">gümrükleme</h3>
              <span>hizmeti</span>
            </div>
          </router-link>
        </div>

        <div class="col-6 col-lg-3 py-3 text-center hero-item">
          <router-link to="/services/depolama-hizmeti">
            <div class="hero-item-image">
              <img src="/image/home/g1.jpg" alt="Services Item" class="w-100" />
            </div>
            <div class=" text-capitalize fw-bold mt-3">
              <h3 class="fw-bold lh-1 fs-4">depolama</h3>
              <span>hizmeti</span>
            </div>
          </router-link>
        </div>
        
        <div class="col-6 col-lg-3 py-3 text-center hero-item">
          <router-link to="/services/minivan-tasimacilik">
            <div class="hero-item-image">
              <img src="/image/home/minivan_homew.jpg" alt="Services Item" class="w-100" />
            </div>
            <div class=" text-capitalize fw-bold mt-3">
              <h3 class="fw-bold lh-1 fs-4">Minivan</h3>
              <span>taşımacılık</span>
            </div>
          </router-link>

        </div>
      </div>


      <a class="wrapper-down-icon" href="#solutions">
        <div class="circle">
        </div>
        <div class="circle circle-2">
        </div>
        <div class="arrow">
          <div class="arrow_line">
          </div>
          <div class="arrow_tip-wrapper">
            <div class="arrow_tip left">
            </div>
            <div class="arrow_tip right">
            </div>
          </div>
        </div>
      </a>
    </div>
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

      <div class="row justify-content-center align-items-center py-5 content-text">
        <div class="numbers-top col-lg-7 text-center pb-5">
          <div class="title text-capitalize display-4 fw-bold pb-3">bir yılda <div class="display-3 fw-bold"><span
                class="counter"></span> Km</div> yol yaptık</div>
          <p class="">Eksen Lojistik eksiksiz, uçtan uca bir ulaşım hizmeti sağlayıcısıdır. Araç veya yük, LTL veya FTL,
            tüm sektörlerde tüm ulaşım modlarıyla dünyanın birçok noktasına lojistik hizmeti sağlıyoruz</p>

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
        // Request Animation Frame
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
        objectt.removeClass("bg-custom-dark");
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
    bottom: 0;
    left: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    // margin: auto;
    width: 900px;
    max-width: 100%;
  }

  .services-item-hero {
    top: -100px;
  }
}

.hero-item {
  transition: all .3s ease;
  overflow: hidden;

  .btn-main {
    color: white;
    font-size: .8rem;

    &:hover {
      border: 1px solid #fff;
    }
  }
  &:hover {
    h3, span {
      color: #fff!important;
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

@media(min-width:1199px) {
  .maps-svg {
    margin-top: -50px;
  }
}

@media(min-width:768px) {
  .hero-item-image {
    img {
      height: 320px;
    }
  }
}
</style>