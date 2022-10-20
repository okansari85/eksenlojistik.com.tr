<template>
  <header class="fixed-top" style="z-index: 99999;">
    <div class="container-fluid px-md-5 ">
      <nav class="navbar navbar-expand-lg d-none d-lg-flex">
        <router-link to="/" class="navbar-brand">
          <img src="/image/global/eksen_logo.png" alt="" style="width: 250px;">
        </router-link>
        <div class="collapse navbar-collapse justify-content-end pe-5" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Anasayfa</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/services" class="nav-link">Hizmetler</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">Hakkımızda</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/news" class="nav-link">Haberler</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/ik" class="nav-link">IK</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">İletişim</router-link>
            </li>
            <li class="dot"></li>
          </ul>
        </div>
      </nav>
      <!--   Mobile Menu     -->
      <div class="d-lg-none">
        <div class="d-flex justify-content-between align-items-center">
          <a href="" class="navbar-brand">
            <img src="/image/global/eksen_logo.png" alt="" style="width: 200px">
          </a>
          <div>
            <input type='checkbox' id='toggle' style='display:none;' />
            <label class='toggle-btn toggle-btn__cross' for='toggle'>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </label>
            <nav>
              <ul>
                <li>
                  <router-link to="/" aria-current="page" class="mobile-nav-item">Anasayfa</router-link>
                </li>
                <li>
                  <router-link to="/services" class="mobile-nav-item">Hizmetler</router-link>
                </li>
                <li>
                  <router-link to="/about" class="mobile-nav-item">Hakkımızda</router-link>
                </li>
                <li>
                  <router-link to="/news" class="mobile-nav-item">Haberler</router-link>
                </li>
                <li>
                  <router-link to="/ik" class="mobile-nav-item">IK</router-link>
                </li>
                <li>
                  <router-link to="/contact" class="mobile-nav-item">İletişim</router-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>



  </header>
</template>

<script>
export default {
  name: 'Nav',
}
</script>


<style scoped>

.nav-link {
  font-weight: 500;
  font-size: 14px;
}

</style>


