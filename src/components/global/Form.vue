<template>

  <div class="about-form shadow bg-white">
    <div class="about-form-top">
      <h2 class="text-uppercase bg-dark text-white fw-bold p-3">bize yazın</h2>
    </div>
    <div class="about-form-center p-3">
      <strong>İletişim Formu</strong>
      <p class="py-3">Size ulaşabilmek ve irtibata geçebilmek için <br>
        lütfen aşağıdaki formu doldurun.</p>
    </div>
    <div class="about-form-bottom px-3 py-2">
      <form action="">
        <div class="row">
          <div class="col-md-6 pb-2">
            <input type="text" class="form-control" placeholder="Ad Soyad">
          </div>
          <div class="col-md-6 pb-2">
            <input type="tel" class="form-control" placeholder="Telefon Numarası">
          </div>
          <div class="col-md-6 pb-2">
            <input type="email" class="form-control" placeholder="E-Mail">
          </div>
          <div class="col-md-6 pb-2">
            <input type="text" class="form-control" :placeholder="subjectAndCv">
          </div>
          <div class="col-12">
            <textarea name="" id="" cols="2" rows="2" placeholder="Mesajınız" class="form-control"></textarea>
          </div>
        </div>
        <div class="col-12">
          <div class="d-flex flex-wrap flex-lg-nowrap justify-content-between align-items-center pt-3 pb-4">
            <input type="file" class="form-control border-0">
        <a href="#!" class='btn btn-main mt-3'>Gönder</a>


          </div>
        </div>
      </form>
      <!-- <div class="text-end">
      </div> -->

    </div>
  </div>

</template>

<script>
export default {
  name: "Form",
  props: {
    subjectAndCv: {
      type:String,
      default: "Konu",
},
  }
}
</script>

<style scoped>

</style>