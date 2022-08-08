<template>
  <div class="about-form shadow bg-white">
    <div class="about-form-top">
      <h2 class="text-uppercase bg-dark text-white fw-bold p-3">bize yazın</h2>
    </div>
    <div class="about-form-bottom p-3">
      <form action="">
        <div class="row">
          <div class="col-md-6 pb-3">
            <input type="text" class="form-control" placeholder="Ad Soyad">
          </div>
          <div class="col-md-6 pb-3">
            <input type="tel" class="form-control" placeholder="Telefon Numarası">
          </div>
          <div class="col-md-6 pb-3">
            <input type="email" class="form-control" placeholder="E-Mail">
          </div>
          <div class="col-md-6 pb-3">
            <input type="text" class="form-control" :placeholder="subjectAndCv">
          </div>
          <div class="col-12">
            <textarea name="" id="" cols="5" rows="5" placeholder="Mesajınız" class="form-control"></textarea>
          </div>
        </div>
        <div class="col-12">
          <input type="file" class="form-control border-0">
        </div>
      </form>
      <div class="text-end">
        <a href="#!" class='btn btn-main'>Gönder</a>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Form2"
}
</script>

<style scoped>

</style>