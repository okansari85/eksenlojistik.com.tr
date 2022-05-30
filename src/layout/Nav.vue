<template>
    <header class="bg-white shadow fixed-top">
        <nav class="navbar navbar-expand-lg">
            <a href="" class="navbar-brand ps-5">
                <img src="../assets/image/global/eksen_logo.png" alt="">
            </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Anasayfa</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/services">Servisler</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">Hakkımızda</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/news">Haberler</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/ik">IK</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">İletişim</a>
        </li>

      </ul>
    </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'Nav',
    }
</script>

