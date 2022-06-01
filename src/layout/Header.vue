<template>
    <header class="bg-white shadow fixed-top">
      <div class="container-fluid px-5 ">
        <nav class="navbar navbar-expand-lg">
          <a href="" class="navbar-brand">
            <img src="../assets/image/global/eksen_logo.png" alt="">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button><div class="collapse navbar-collapse justify-content-center pe-5" id="navbarNavDropdown">
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
      </div>

    </header>
</template>

<script>
    export default {
        name: 'Nav',
    }
</script>

