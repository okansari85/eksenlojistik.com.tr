<template>
  <footer class="footer-area px-lg-5 position-relative overflow-hidden">
    <div class="position-absolute top-0 end-0 overflow-hidden">
      <!-- <img src="image/global/ff2.png" class="opacity-50" alt="" style="z-index:1;"> -->
      <img src="image/global/ff.png" class="opacity-50" alt="" style="z-index:1;">
    </div>
      <div class="container-fluid px-3 px-lg-5 position-relative" style="z-index:99">
        <div class="footer-top-wrap py-5">
            <div class="row justify-content-between py-4">
                <div class="col-xl-3 col-lg-4 col-sm-6 pt-3 pt-lg-0">
                    <div class="footer-widget">
                        <div class="footer-contact-info">
                            <h6 class="number m-0 pb-2"> <i class="bi bi-telephone-fill pe-1"></i> +90 212 212 28 49</h6>
                            <h6 class="email m-0 pb-3"><i class="bi bi-envelope-fill pe-2"></i>info@eksenlojistik.com.tr</h6>
                            <p>Büyükdere Cad. Fulya Mah. Lale İş Mrkz. <br> No.62 K.2 D.15 <br>Mecidiyeköy - Şişli  </p>
                            <ul class="footer-social list-wrap d-flex gap-3">
                                <li><a href="#"><i class="bi bi-instagram"></i></a></li>
                                <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                                <li><a href="#"><i class="bi bi-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-6 col-sm-4 column-2 pt-3 pt-lg-0">
                    <div class="footer-widget">
                        <h4 class="fw-title">{{ $t('footer.linkler') }}</h4>
                        <ul class="footer-link">
                            <li><router-link to="/hizmetler">{{ $t('menu.hizmetler') }}</router-link></li>
                            <li><router-link to="/kurumsal">{{ $t('menu.kurumsal') }}</router-link></li>
                            <li><router-link to="/haberler">{{ $t('menu.haberler') }}</router-link></li>
                            <li><router-link to="/ik">{{ $t('menu.ik') }}</router-link></li>
                            <li><router-link to="/iletisim">{{ $t('menu.iletisim') }}</router-link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-6 col-sm-4 column-3 pt-3 pt-lg-0">
                    <div class="footer-widget">
                        <h4 class="fw-title">KVKK</h4>
                        <ul class="footer-link">
                          <li><a href="" data-bs-toggle="modal" data-bs-target="#modal-sartlar">{{ $t('footer.sartlar-kosullar') }}</a></li>
                          <li><a href="" data-bs-toggle="modal" data-bs-target="#modal-yasal-uyari">{{ $t('footer.yasal-uyari') }}</a></li>
                          <li><a href="" data-bs-toggle="modal" data-bs-target="#modal-veri-gizliligi">{{ $t('footer.veri-gizliligi') }}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-4 pt-4 pt-md-0">
                  <label For="" class="d-block text-white">{{ $t('footer.bultene-kayit-ol') }}</label>
                  <div class="input-group mb-3 mt-2 text-white">
                    <input type="text" class="form-control text-white bg-transparent shadow-none border border-light border-2" :placeholder="$t('footer.e-mail-adress')">
                    <button class="btn btn-outline-secondary bg-dark text-white border border-2 border-start-0" type="submit" id="button-addon2">{{ $t('footer.gonder') }}</button>
                  </div>
                  <span class="fs-08 py-3 d-block">{{ $t('footer.footer-sartlar') }}</span>
                </div>
            </div>
        </div>
      </div>
  </footer>




  <!--  Modal  -->

<!-- Şartlar ve Koşullar -->
<div class="modal fade" id="modal-sartlar" tabindex="-1" aria-modal="true" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{ $t('modal.sartlar-ve-kosullar-baslik')}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div id="content" class="container" style="margin-top:0;min-height:0px" v-html="$t('modal.sartlar-ve-kosullar')"></div>
            </div>
        </div>
    </div>
</div>

<!-- Yasal Uyarı -->
<div class="modal fade" id="modal-yasal-uyari" tabindex="-1" aria-modal="true" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{ $t('modal.yasal-uyari-baslik') }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="container" v-html="$t('modal.yasal-uyari')"></div>

            </div>
        </div>
    </div>
</div>

<!-- Gizlilik Politikası -->
<div class="modal fade" id="modal-veri-gizliligi" tabindex="-1" aria-modal="true" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{ $t('modal.veri-gizliligi-baslik') }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div id="content" class="container" style="margin-top:0;min-height:0px" v-html="$t('modal.veri-gizliligi')"></div>
            </div>
        </div>
    </div>
</div>


</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="scss">

footer {
  // background-color: #1d5699;
  background-color: #7a7d77;
  li, a, p, span {
    color: rgb(206, 206, 206);
  }
  h4, h6 {
    color: white;
  }

  input {
    &::placeholder {
    color: white!important;
  }
  }


}

.modal-dialog-scrollable .modal-content {
    height: 650px;
}
.modal {
    z-index: 9999999;
}

</style>