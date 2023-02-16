<template>
  <header class="fixed-top header">
    <div class="container-fluid px-xl-5">
      <nav class="navbar navbar-expand-lg d-none d-lg-flex">
        <router-link to="/" class="navbar-brand">
          <img src="/image/global/eksen-01.svg" alt="Eksen Logo" style="width: 260px;">
        </router-link>
        <div class="collapse navbar-collapse justify-content-end px-xl-5" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">{{ $t('menu.anasayfa') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/kurumsal" class="nav-link">{{ $t('menu.kurumsal') }}</router-link>
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
            <li class="nav-item">
              <div class="dropdown">
                <button class="btn" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img :src="getFlag(selectedLanguage)" alt="Language flag">
                </button>
                <div class="dropdown-menu" aria-labelledby="languageDropdown">
                  <a class="dropdown-item" href="#" @click.prevent="changeLanguage('en')">
                    <img :src="getFlag('en')" alt="English flag">
                    <span class="ms-2 text-dark">{{ $t('language.english') }}</span>
                  </a>
                  <a class="dropdown-item" href="#" @click.prevent="changeLanguage('tr')">
                    <img :src="getFlag('tr')" alt="Turkish flag">
                    <span class="ms-2 text-dark">{{ $t('language.turkish')}}</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <!--   Mobile Menu     -->
      <div class="d-lg-none">
        <div class="d-flex justify-content-between align-items-center">
          <a href="" class="navbar-brand">
            <img src="/image/global/eksen-01.svg" alt="Eksen Logo Mobile" style="width: 200px">
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
                  <router-link to="/kurumsal" class="mobile-nav-item">{{ $t('menu.kurumsal') }}</router-link>
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
                <li class="nav-item ps-4 pt-3">
                  <div class="d-flex gap-3">
                    <a class="d-flex flex-column align-items-center justify-content-center gap-2" href="#" @click.prevent="changeLanguage('en')">
                      <img :src="getFlag('en')" alt="English flag">
                      <span class="text-dark text-white fs-08">{{ $t('language.english') }}</span>
                    </a>
                    <a class="d-flex flex-column align-items-center justify-content-center gap-2" href="#" @click.prevent="changeLanguage('tr')">
                      <img :src="getFlag('tr')" alt="Turkish flag">
                      <span class="text-dark text-white fs-08">{{ $t('language.turkish')}}</span>
                    </a>
                  </div>
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
    const header = $(".header");
    $(window).scroll(function (e) {
      header.removeClass("header-inactive");
      var scrollTop = $(window).scrollTop();
      if (scrollTop > 34) {
        header.addClass("header-inactive");
        $(".header .navbar-brand img").attr("src", "/image/global/eksen2-01.svg");
      } else {
        header.removeClass("header-inactive");
        $(".header .navbar-brand img").attr("src", "/image/global/eksen-01.svg");
      }
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
      flags: {
        'en': '/image/en.png',
        'tr': '/image/tr.png'
      }
    };
  },

  methods: {
    changeLanguage(lang) {
      this.selectedLanguage = lang;
      this.$i18n.locale = this.selectedLanguage;
      localStorage.setItem("lang", this.selectedLanguage);
    },
    getFlag(lang) {
      return this.flags[lang];
    }
  }

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


.item-last::before {
  background:transparent!important;
}



</style>

