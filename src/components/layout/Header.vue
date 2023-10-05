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
            <li class="nav-item"  v-if="1==0">
              <router-link to="/kurumsal" class="nav-link">{{ $t('menu.kurumsal') }}</router-link>
            </li>
            <li v-for="item in menus" class="nav-item" :key="item.id" :class="item.pages.length > 0 ? 'dropdown' : ''">
              <router-link v-if="item.pages.length==0" to="/" class="nav-link">{{ item.name }}</router-link>

              <a v-if="item.pages.length>0" class="nav-link d-flex align-items-center" href="javascript:void(0)" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span>{{ item.name  }}</span>
                    <span class="ps-2"><i class="bi bi-chevron-down" style="font-size: 12px;"></i></span>
              </a>
              <div v-if="item.pages.length>0" class="dropdown-menu" aria-labelledby="navbarDropdown" >
                <router-link  v-for="page in item.pages" :key="page.id" :to="{ name: 'pages', params: {id: page.id, slug: page.slug }}" class="dropdown-item">{{ page.title }}</router-link>
              </div>
            </li>
            <li class="nav-item dropdown" v-if="1==0">
                  <a class="nav-link d-flex align-items-center" href="javascript:void(0)" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span>{{ $t('menu.hizmetler') }}</span>
                    <span class="ps-2"><i class="bi bi-chevron-down" style="font-size: 12px;"></i></span>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <router-link to="/hizmetler/karayolu-tasimaciligi" class="dropdown-item">{{ $t('menu.karayolu-tasimaciligi') }}</router-link>
                    <router-link to="/hizmetler/gumrukleme-hizmetleri" class="dropdown-item">{{ $t('menu.gumrukleme') }}</router-link>
                    <router-link to="/hizmetler/depolama-hizmetleri" class="dropdown-item">{{ $t('menu.depolama') }}</router-link>
                    <router-link to="/hizmetler/minivan-tasimaciligi" class="dropdown-item">{{ $t('menu.minivan') }}</router-link>
                  </div>
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
            <li class="nav-item d-flex align-items-center gap-3 ps-md-4">
              <a href="#" @click.prevent="changeLanguage('en')">
                <img :src="getFlag('en')" alt="English flag">
                <!-- <span class="ms-2 text-dark">{{ $t('language.english') }}</span> -->
              </a>
              <a href="#" @click.prevent="changeLanguage('tr')">
                <img :src="getFlag('tr')" alt="Turkish flag">
                <!-- <span class="ms-2 text-dark">{{ $t('language.turkish')}}</span> -->
              </a>
              <!-- <div class="dropdown">
                <button class="btn" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img :src="getFlag(selectedLanguage)" alt="Language flag">
                </button>
                <div class="dropdown-menu" aria-labelledby="languageDropdown">
                </div>
              </div> -->
            </li>
          </ul>
        
        </div>
      </nav>
      <!-- Mobile Menu  -->
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
import { mapState,mapGetters,mapActions,mapMutations } from "vuex";

export default {
  name: 'Nav',
  async created() {
  await this.getMenus().then(r=>{
    console.log("then");
  });
  },
  computed: {
        ...mapState({
            menus: (state) => state.menus,
        }),
        
  },
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
    if (localStorage.getItem("lang") === "en") {
      this.selectedLanguage = "en";
    } else {
      this.selectedLanguage = "tr";
    }
    this.$i18n.locale = this.selectedLanguage;

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
    ...mapActions({
          getMenus:'getMenus',
    }),




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
  font-weight: 400!important;
  font-size: 15px;
}

a.dropdown-item {
  font-weight: 400!important;
  font-size: 15px;
  color: #000!important;
  &:hover {
    color: #000!important;
  }
}

.item-last::before {
  background:transparent!important;
}


</style>
