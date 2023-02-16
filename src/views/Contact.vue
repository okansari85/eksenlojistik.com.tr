<template>
  <div>
    <main>
      <section class="contact-address position-relative">
        <img src="/image/news/road.jpg" alt="" class="w-100 position-absolute contact-address-banner top-0 start-0 d-none d-lg-block" 
        style="z-index:-1; height: 650px; object-fit: cover; filter: brightness(40%);">
        <div class="container main-footer">
          <div class="row">
            <div class="col-12">
              <h2 class="text-white pb-5">{{ $t('ofislerimiz') }}</h2>
            </div>
            <div class="col-md-6 col-lg-4 office">
              <h3 class="col-md-10">{{ $t('contact-global') }}</h3>
              <p v-html="$t('contact-address1')"></p>
              <p>Tel: +90 212 267 07 21<br>
                info@eksenlojistik.com.tr</p>
              <a class="maps-btn" href="https://goo.gl/maps/kZnxnCXuX7jVFeGZ6" title="Google Maps" target="_blank"><i class="bi bi-geo-alt-fill pe-2 text-danger"></i>Google
                Maps</a>
            </div>
            <div class="col-md-6 col-lg-4 office">
              <h3>{{ $t('contact-depo') }}</h3>
                <p v-html="$t('contact-address2')"></p>
              <p>Tel: +90 212 267 07 21<br>
                info@eksenlojistik.com.tr</p>
                <a class="maps-btn" href="https://goo.gl/maps/kiS6j1yeb5HXL8Lc7" title="Google Maps" target="_blank"><i class="bi bi-geo-alt-fill pe-2 text-danger"></i>Google
                Maps</a>
            </div>
            <div class="col-md-6 col-lg-4 office">
              <h3>EKSEN LOGISTICS SRL</h3>
              <p>Lt. Av. Radu Beller Nr.25<br> Apt.4 Sector 1 <br>  Bucharest </p>
              <p>Tel: 0040 21 290 01 05<br>
                info@eksenlojistik.com.tr</p>
                <a class="maps-btn" href="https://goo.gl/maps/G7Ye7KmorZEDHNzQ8" title="Google Maps" target="_blank"><i class="bi bi-geo-alt-fill pe-2 text-danger"></i>Google
                Maps</a>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-hero py-5 mb-5">
        <div class="container global-hero-top">
          <div class="row">
            <div class="col-md-8 global-hero-img mx-auto">
              <Form2 style="z-index: 9999;" />
            </div>
          </div>
        </div>
      </section>


    </main>
  </div>

  <Socialbar/>

</template>

<script>
import HeroImage from "@/components/global/HeroImage";
import Form2 from "@/components/global/Form2";
import Socialbar from "@/components/global/Socialbar.vue";

export default {
  name: "Contact",
  components: { Form2, HeroImage, Socialbar },
  mounted() {
      window.scrollTo(0, 0)
    }
}
</script>

<style scoped lang="scss">
@media(min-width:768px) {
  .contact-hero-maps {
    padding-top: 100px;
  }
}

@media(max-width:767.98px) {
  .contact-hero-maps {
    padding-top: 20px;
  }
}


.contact-address {
  padding: 150px 0 50px 0;
  @media (max-width:991px) {
    background-color: #1a1a1a;
  }
}

.office {
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 1rem;
    color: white;
  }
  p {
    color: rgb(187, 185, 185);
    font-size: .85rem;
  }
  @media(max-width:991px) {
    margin-bottom: 50px;
    padding: 0 15px;
  }

  .maps-btn {
    color: white;
    margin-top: auto;
  }
}



</style>