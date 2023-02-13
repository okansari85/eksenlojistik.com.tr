<template>
    <header class="fixed-top header2 header-inactive">
      <div class="container-fluid px-md-5">
        <nav class="navbar navbar-expand-lg d-none d-lg-flex">
          <router-link to="/" class="navbar-brand">
            <img src="/image/global/eksen2-01.svg" alt="Eksen Logo" style="width: 260px;">
          </router-link>
          <div class="collapse navbar-collapse justify-content-end pe-5" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link">{{ $t('menu.anasayfa') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/hakkimizda" class="nav-link">{{ $t('menu.kurumsal') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/hizmetler" class="nav-link">{{ $t('menu.hizmetler') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/haberler" class="nav-link">{{ $t('menu.haberler') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/ik" class="nav-link">{{ $t('menu.ik') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/iletisim" class="nav-link">{{ $t('menu.iletisim') }}</router-link>
              </li>
              <li class="nav-item ps-xl-4">
                <a href="#" class="text-white nav-link" @click.prevent="toggleLanguage">{{  selectedLanguage === 'tr' ? 'TR' : 'EN'  }}</a>
              </li>
              <li class="dot"></li>
            </ul>
          </div>
        </nav>
        <!--   Mobile Menu     -->
        <div class="d-lg-none">
          <div class="d-flex justify-content-between align-items-center">
            <a href="" class="navbar-brand">
              <img src="/image/global/eksen_logo.png" alt="Eksen Logo Mobile" style="width: 200px">
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
                    <router-link to="/" aria-current="page" class="mobile-nav-item">{{ $t('menu.anasayfa') }}</router-link>
                  </li>
                  <li>
                    <router-link to="/hizmetler" class="mobile-nav-item services-menu-item">{{ $t('menu.hizmetler') }}</router-link>
                  </li>
                  <li>
                    <router-link to="/hakkimizda" class="mobile-nav-item">{{ $t('menu.kurumsal') }}</router-link>
                  </li>
                  <li>
                    <router-link to="/haberler" class="mobile-nav-item">{{ $t('menu.haberler') }}</router-link>
                  </li>
                  <li>
                    <router-link to="/ik" class="mobile-nav-item">{{ $t('menu.ik') }}</router-link>
                  </li>
                  <li>
                    <router-link to="/iletisim" class="mobile-nav-item">{{ $t('menu.iletisim') }}</router-link>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="text-white nav-link" @click.prevent="toggleLanguage">{{  selectedLanguage === 'tr' ? 'TR' : 'EN'  }}</a>
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
    mounted() {
        $(".mobile-nav-item").click(function () {
            $(".toggle-btn__cross").click();
        });
        $("#navbarNavDropdown .nav-item .nav-link").click(function (e) {
            $("#navbarNavDropdown .nav-item .nav-link").not(this).removeClass("active");
            $(this).addClass("active");
    
        });
    // i18n add localstroge
    if (localStorage.getItem("lang") === "en") {
      this.selectedLanguage = "en";
    } else {
      this.selectedLanguage = "tr";
    }
    this.$i18n.locale = this.selectedLanguage;
    // i18n add localstroge
    },

  data() {
    return {
      selectedLanguage: 'tr',
    };
  },
  methods: {
    toggleLanguage() {
      this.selectedLanguage = this.selectedLanguage === 'en' ? 'tr' : 'en';
      this.$i18n.locale = this.selectedLanguage;
      localStorage.setItem("lang", this.selectedLanguage);
    },
  },

  created() {
    this.$i18n.locale = this.selectedLanguage;
  },

  watch: {
    selectedLanguage(newLanguage) {
      this.$i18n.locale = newLanguage;
    },
  },

  }
  
  </script>
  
  
  <style scoped lang="scss">
  header {
    z-index: 99999;
  }
  
  .nav-link {
    font-weight: 500;
    font-size: 14px;
  }
  
  </style>
  
  
  