<template>

  <section class='cost px-3 px-xl-5 py-lg-5' style="background-image: url('../image/home/albana.png'); background-size: cover; min-height: 900px">
    <!--    <img src="/image/home/albana.png" alt="" class="position-absolute top-0 end-0 w-100" style="z-index: -1;">-->
    <div class="container-fluid p-xl-5">
      <div class="row justify-content-between align-items-center py-5">
        <div class="col-12 order-2 order-lg-1 cost-form-wrapper text-center pt-5">
          <div class="section-title">
            <span class="text-uppercase fs-4 fw-500" style="color: #ba7d1e;">ortalama</span>
            <h1 class='display-4 text-uppercase fw-bold pb-4'>maaliyet hesapla</h1>
            <p>
              Yükü göndermek istediğin yer,  teslim edeceğin yeri ve ortalama ağırlığını seç ortalama maaliyetini kısa sürede hesaplayıp sana dönüş yapalım.
            </p>
          </div>
          <form action="">
            <div class="row justify-content-between">
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-lg-6">
                    <select name="finishcountry" id="" class='form-select startCountry'>
                      <option value="1" selected>Başlangıç Ülkesi</option>
                      <option value="2">Türkiye</option>
                      <option value="3">Rusya</option>
                      <option value="4">Ukranya</option>
                      <option value="5">Fransa</option>
                      <option value="6">İspanya</option>
                      <option value="7">İsveç</option>
                      <option value="8">Norveç</option>
                      <option value="9">Almanya</option>
                      <option value="10">Romanya</option>
                    </select>
                  </div>
                  <div class="col-lg-6">
                    <select name="startcountry" id="" class='form-select finishCountry'>
                      <option value="1" selected>Bitiş Ülkesi</option>
                      <option value="2">Türkiye</option>
                      <option value="3">Rusya</option>
                      <option value="4">Ukranya</option>
                      <option value="5">Fransa</option>
                      <option value="6">İspanya</option>
                      <option value="7">İsveç</option>
                      <option value="8">Norveç</option>
                      <option value="9">Almanya</option>
                      <option value="10">Romanya</option>
                    </select>
                  </div>
                  <div class="col-lg-6">
                    <input type="number" class='form-control' placeholder='ort. ağırlık' />
                  </div>
                  <div class='col-lg-6'>
                    <input type="date" class='form-control' placeholder='tarih seç' />
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-lg-12">
                    <input type="text" class='form-control' placeholder='email adresi' />
                  </div>
                  <div class="col-lg-12">
                    <input type="tel" class='form-control' placeholder='telefon numarası' />
                  </div>
                </div>
              </div>
            </div>


          </form>
          <a href="#!" class='btn btn-main mt-5'>hesapla</a>
        </div>
        <div class="col-lg-7 col-xl-8 order-1 order-lg-2 d-none">
          <div>
            <img
                src="/image/home/cost_maps_new.png"
                usemap="#usa" style="max-width: 100%;"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "Cost"
}
</script>

<style scoped>

.cost-form-wrapper {
  width: 850px;
  margin: 0 auto;
}

input, select {
  background: transparent;
}
/*section.cost {*/
/*  background-image: url("/image/home/albana.png");*/
/*}*/

</style>