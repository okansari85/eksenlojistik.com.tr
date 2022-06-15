<template>
  <div>
    <main>
      <section class="contact-hero" style="padding-top: 145px;">
        <div class="container global-hero-top">
          <div class="row">
            <div class="col-md-2">
              <h1>İletişim <br> <span> Bize ulaşmak için</span></h1>
            </div>
            <div class="col-md-10 global-hero-img">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24018.686126265402!2d28.75478155!3d41.1926528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab6ff0319cf7b%3A0x8445e5c3855a9ede!2zTWVya2V6LCBCw7x5w7xrZGVyZSBDZC4gTm86NjIgRDpLYXQuNSwgMzQ0MDYgxZ5pxZ9saS_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1653990597972!5m2!1str!2str"
                  width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-md-6 py-5">
              <div class="contact-first py-4">
                <strong class="fw-bold fs-5">Türkiye - İstanbul İletisim.</strong>
                <ul class="pt-4">
                  <li class="pb-2">
                    <a href="https://goo.gl/maps/j2A1NvGLQvKG1PMu5"> <i class="bi bi-geo-alt-fill"></i> Büyükdere Cad. No.62 Kat.5 Fulya Mah. Mecidiyeköy,
                      Şişli / Istanbul</a>
                  </li>
                  <li class="pb-2">
                    <a href=""> <i class="bi bi-telephone-fill"></i> +90 212 267 07 21</a>
                  </li>
                  <li class="pb-2">
                    <a href=""> <i class="bi bi-envelope-fill"></i> info@eksenlojistik.com.tr</a>
                  </li>
                </ul>
              </div>
              <div class="contact-second py-4">
                <strong class="fw-bold fs-5">Romanya - Bükreş İletisim.</strong>
                <ul class="pt-4">
                  <li class="pb-2">
                    <a href=""> <i class="bi bi-geo-alt-fill"></i> Büyükdere Cad. No.62 Kat.5 Fulya Mah. Mecidiyeköy,
                      Şişli / Istanbul</a>
                  </li>
                  <li class="pb-2">
                    <a href=""> <i class="bi bi-telephone-fill"></i> +90 212 267 07 21</a>
                  </li>
                  <li class="pb-2">
                    <a href=""> <i class="bi bi-envelope-fill"></i> info@eksenlojistik.com.tr</a>
                  </li>
                </ul>
              </div>

            </div>
            <div class="col-md-5">
              <Form id="formClass"/>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-us pt-5">
        <div class="container text-center py-5">
          <h1 class="display-3 fw-bold">Canlı Destek</h1>
          <p>Anında tıklayıp canlı destek alabilir, <br> uzmanlarımız tarafından kafanıza takılanların cevabını
            alabilirsiniz.</p>
          <div class="pt-5">
            <a href="#formClass" class="btn btn-outline-dark py-3 text-uppercase">canlı destek al</a>
          </div>
        </div>
      </section>
    </main>
  </div>


</template>

<script>
import HeroImage from "@/components/global/HeroImage";
import Form from "@/components/global/Form";

export default {
  name: "Contact",
  components: { Form, HeroImage}
}
</script>

<style scoped>

</style>