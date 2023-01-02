<template>

  <section class="country-gif pt-5 pb-5">
    <div class="container pt-5 pb-md-5">
      <div class="row justify-content-evenly align-items-center">
        <div class="col-lg-6 position-relative text-lg-center">
          <img src="/image/news/26623-map-navigation.gif" alt="Eksen Gif" class=" m-lg-auto">
        </div>
        <div class="col-lg-5 py-3 py-lg-0 paragraph-margin2 text-center text-lg-start">

          <div class="globals-title">
            <span class="text-uppercase fs-6 sub-title">ülkeler</span>
            <h1 class="fs-3 text-capitalize pt-1 pb-4 fw-semibold ">Dünyanın Dört Bir Yanına <span class="text-muted">En Hızlı</span>
              Savkiyatı Yapıyoruz</h1>
            <p class="fs-09">Yüksek sorumluluk anlayışıyla çalışan ekibimiz hem yüklerinizin en hızlı şekilde teslim
              edilmesi, hem de karayolu nakliye sürecindeki oluşabilecek olumsuzluklara karşı mücadele vermektedir.</p>
          </div>
          <div class="d-flex justify-content-center justify-content-lg-start align-items-center py-2">
            <a href="" class="news-2-link fw-500 text-decoration-underline text-dark text-uppercase"
               data-bs-toggle="modal" data-bs-target="#tanitimVideo">
              tanıtım videosu
            </a>
            <!-- <router-link to="/news" class=""></router-link> -->
          </div>

        </div>
      </div>
    </div>
  </section>


  <!-- Modal Solutions -->
  <div class="modal fade" id="tanitimVideo" tabindex="-1" style="z-index: 20000;">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content py-3 bg-transparent border-0">
        <a href="" class="bi bi-x-circle position-absolute fs-1" data-bs-dismiss="modal"
           style="z-index: 5; right:10px;"></a>
        <div class="modal-body p-0 border-0 bg-transparent">
          <div class="modal-video-inner bg-transparent p-0">
            <video src="/image/video/12.m4v" class="mw-100" loop controls></video>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>


<style lang="scss" scope>
.globals-title {
  span.sub-title {
    color: #3175f3;
    text-transform: uppercase !important;
    font-weight: 600;
  }
}

</style>