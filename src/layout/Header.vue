<template>
    <header class="bg-white shadow fixed-top">
      <div class="container-fluid px-5 ">
        <nav class="navbar navbar-expand-lg d-none d-lg-flex">
          <router-link to="/" class="navbar-brand">
            <img src="../assets/image/global/eksen_logo.png" alt="">
          </router-link>
          <div class="collapse navbar-collapse justify-content-center pe-5" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page">Anasayfa</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/services" class="nav-link">Servisler</router-link>
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

          </ul>
        </div>
        </nav>
        <!--   Mobile Menu     -->
        <div class="d-lg-none">
          <div class="d-flex justify-content-between align-items-center">
            <a href="" class="navbar-brand">
              <img src="../assets/image/global/eksen_logo.png" alt="">
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
                    <router-link to="/" aria-current="page">Anasayfa</router-link>
                  </li>
                  <li>
                    <router-link to="/services">Servisler</router-link>
                  </li>
                  <li>
                    <router-link to="/about">Hakkımızda</router-link>
                  </li>
                  <li>
                    <router-link to="/news">Haberler</router-link>
                  </li>
                  <li>
                    <router-link to="/ik">IK</router-link>
                  </li>
                  <li>
                    <router-link to="/contact">İletişim</router-link>
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

