<template>
  <div>
    <main>
      <Hero/>
      <Map/>
      <Solutions />
      <Cost  />
      <SlideWays  />
      <Safely  />
      <Team  />
      <NewsHome  />
      <Numbers />
      <Country  />
      <div id="custom-cookie-wrapper" class="cookie-wrapper position-fixed bottom-0 shadow bg-white w-100 d-none" style="z-index: 999999">
      <div class="cookie-container py-3">
          <div class="cookie-content d-flex flex-wrap px-3 justify-content-evenly align-items-center text-center text-lg-start">
              
                  <p class="m-0 py-2 fs-08">
                    Yasal düzenlemelere uygun çerezler kullanıyoruz. Detaylı bilgi için Çerez (Cookie) Aydınlatma Metnimizi inceleyebilir, çerez izinlerinizi Çerez Ayarları üzerinden güncelleyebilirsiniz.
                  </p>
              <div class="cookie-buttons py-2">
                  <button id="btn-cookie-accept" class="cookie-button-accept btn py-2 fw-semibold rounded-0 fs-08 text-white" style="width: 170px; max-width:100%; background-color: #ba7d1e;">Kabul Et</button>
              </div>
          </div>
        </div>
      </div>

    </main>
  </div>

</template>

<script>
// @ is an alias to /src

import Hero from "@/components/home/Hero";
import Map from "@/components/home/Map";
import Solutions from "@/components/home/Solutions";
import Cost from "@/components/home/Cost";
import SlideWays from "@/components/home/SlideWays";
import Safely from "@/components/home/Safely";
import Team from "@/components/home/Team";
import Numbers from "@/components/home/Numbers";
import Country from "@/components/home/Country";
import NewsHome from "@/views/NewsHome";




export default {
  name: 'Index',
  components: {NewsHome, SlideWays, Hero, Solutions, Map, Cost, Safely, Team, Country, Numbers },
}
</script>

