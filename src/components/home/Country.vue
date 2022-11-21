<template>

  <section class="country">
    <div class="container-fluid gx-0 overflow-hidden">
      <div class="d-md-flex py-5">
        <div class="col-md-6 country-item active">
          <div class="overlay"></div>
          <div class="position-relative">
            <img src="/image/home/romania.png" alt="Romania" class="w-100 country-item-img">
            <div class="position-absolute top-50 start-50 translate-middle text-white text-center country-item-absolute">
              <img src="/image/home/romania_png.png" alt="Romania" class="country-item-img2">
              <h3 class="text-uppercase fw-bold py-md-4 display-5">Romania</h3>
              <p class="text-white fs-08">
                Latilokum Sokak Fidan Apt.No.7 D.1 Şişli <br />
                Romanya - Bükreş
              </p>
              <a href="tel:902122112223" class="text-white">
                +90 212 211 22 23
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 country-item active">
          <div class="overlay"></div>
          <div class="position-relative">
            <img src="/image/home/turkey.png" alt="Turkey" class="w-100 country-item-img">
            <div class="position-absolute top-50 start-50 translate-middle text-white text-center country-item-absolute">
              <img src="/image/home/turkey_png.png" alt="Turkey" class="country-item-img2">
              <h3 class="text-uppercase fw-bold py-md-4 display-5">
                Turkey
              </h3>
              <p class="text-white fs-08">
                Latilokum Sokak Fidan Apt.No.7 D.1 Şişli <br />
                Turkey - Istanbul
              </p>
              <a href="tel:902122112223" class="text-white">
                +90 212 211 22 23
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "Country"
}
</script>

<style scoped lang="scss">

section.country {
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    background-color: rgba(10, 37, 64, 0.55);
    transition: all .3s ease;
    height: 100%;
    width: 100%;
    z-index: 2;
  }
  .country-item {
    position: relative;
    transition: all .3s ease;
    cursor: pointer;
    &-img {
      transition: all .3s ease;
      max-height: 700px;
      position: relative;
    }
    &-absolute {
      display: none;
      transition: all .3s ease;
      z-index: 2;
    }
    &:hover, &.active {
      .country-item-absolute {
        display: block;
        z-index: 99;
      }
      .overlay {
        display: block;
      }
    }
    &-img2 {
      width: 600px;
      max-height: 250px;
      object-fit: cover;
    }
  }
}

</style>