<template>

  <section class='cost px-3 px-lg-5'>
    <div class="container-fluid p-lg-5">
      <div class="row justify-content-between align-items-center py-5">
        <div class="col-lg-4 order-2 order-lg-1">
          <div class="section-title">
            <span class="text-uppercase text-black-50 fs-4">size özel</span>
            <h1 class='display-4 text-uppercase fw-bold py-4'>maaliyet hesapla</h1>
            <p>
              Yükü göndermek istediğin yer,  teslim edeceğin yeri ve ortalama ağırlığını seç ortalama maaliyetini kısa sürede hesaplayıp sana dönüş yapalım.
            </p>
          </div>
          <form action="">
            <div>
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
            <div>
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

            <div>
              <input type="text" class='form-control' placeholder='email adresi' />
            </div>
            <div>
              <input type="tel" class='form-control' placeholder='telefon numarası' />
            </div>
            <div class="row">
              <div class="col-md-6">
                <input type="number" class='form-control' placeholder='ort. ağırlık' />
              </div>
              <div class='col-md-6'>
                <input type="date" class='form-control' placeholder='tarih seç' />
              </div>
            </div>
          </form>
          <a href="#!" class='btn btn-main mt-5'>hesapla</a>
        </div>
        <div class="col-lg-7 order-1 order-lg-2">
<!--          <img src="../../assets/image/home/eksen_cost_maps.png" alt="" />-->
          <img
              src="https://app.image-maps.com/m/private/0/t1deudqqg8quun3iijl4ehecte_eksen_cost_maps.d6449d50.png"
              usemap="#usa"
              width="1084" height="995" orgWidth="1084" orgHeight="995"
          />
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

</style>