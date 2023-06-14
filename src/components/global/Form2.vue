<template>
  <div class="about-form shadow bg-white">
    <div class="about-form-top">
      <h2 class="text-uppercase bg-dark text-white fw-bold p-3">{{ $t('hr.bize-yazin') }}</h2>
    </div>
    <div class="about-form-bottom p-3">
      <form action="/api/concat">
        <div class="row">
          <div class="col-md-6 pb-3">
            <input type="text" class="form-control" :placeholder="$t('hr.form-adsoyad')" v-model="form.name">
          </div>
          <div class="col-md-6 pb-3">
            <input type="tel" class="form-control" :placeholder="$t('hr.form-telefon')" v-model="form.phone">
          </div>
          <div class="col-md-6 pb-3">
            <input type="email" class="form-control" :placeholder="$t('footer.e-mail-adress')" v-model="form.email">
          </div>
          <div class="col-md-6 pb-3">
            <input type="text" class="form-control" :placeholder="$t('hr.form-konu')" v-model="form.subject">
          </div>
          <div class="col-12">
            <textarea name="" id="" cols="3" rows="3" :placeholder="$t('hr.form-mesaj')" class="form-control" v-model="form.message"></textarea>
          </div>
        </div>
        <div class="col-12">
          <div class="d-flex justify-content-between align-items-center pt-4 pb-4">
            <input type="file" class="form-control border-0 w-100" ref="fileCv" @change="onFileChange" placeholder="CV Yükle" accept=".pdf, .doc, .docx, .zip, .rar">
            <span @click="SubmitForm" class='btn btn-main d-inline-block'>{{ $t('footer.gonder') }}</span>
          </div>
        </div>
        <input type="reset" ref="reset_button" class="d-none">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Form2",
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
        fileCV: "",
      },
    };
  },
  methods: {
    SubmitForm() {
      let formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("phone_number", this.form.phone);
      formData.append("email", this.form.email);
      formData.append("subject", this.form.subject);
      formData.append("message", this.form.message);
      formData.append("file", this.$refs.fileCv.files[0]);
      axios
        .post("/api/contact", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
          if(response.data.succeeded === true) {
            this.$refs.reset_button.click();
            this.$swal({
              title: "Başarılı!",
              text: response.data.message,
              icon: "success",
              confirmButtonText: "Tamam",
            });
          } else {
            this.$swal({
              title: "Hata!",
              text: response.data.message,
              icon: "error",
              confirmButtonText: "Tamam",
            });
          }
        })
        .catch(() => {
          this.$swal({
            title: "Hata!",
            text: "Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
            icon: "error",
            confirmButtonText: "Tamam",
          });
        });
    },
  },
};
</script>

<style scoped>

</style>