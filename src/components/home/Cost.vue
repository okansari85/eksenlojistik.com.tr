<template>

  <section class='cost'>
    <div class="container py-5">
      <div class="row justify-content-between py-5">
        <div class="col-lg-5">
          <div class="section-title">
            <span class="text-uppercase text-black-50 fs-4">size özel</span>
            <h1 class='display-4 text-uppercase fw-bold py-4'>maaliyet hesapla</h1>
            <p>
              Yükü göndermek istediğin yer,  teslim edeceğin yeri ve ortalama ağırlığını seç ortalama maaliyetini kısa sürede hesaplayıp sana dönüş yapalım.
            </p>
          </div>
          <form action="">
            <div>
              <select name="" id="" class='form-select'>
                <option value="1" selected>Başlangıç Ülkesi</option>
                <option value="2">One</option>
                <option value="3">Two</option>
              </select>
            </div>
            <div>
              <select name="" id="" class='form-select'>
                <option value="1" selected>Bitiş Ülkesi</option>
                <option value="2">One</option>
                <option value="3">Two</option>
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
        <div class="col-lg-6">
          <img src="../../assets/image/home/eksen_cost_map.png" alt="" />
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