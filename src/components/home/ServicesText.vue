<template>
    <div class="d-flex flex-wrap justify-content-evenly align-items-center pt-5">

        <router-link to="/services" class="services-btn">Karayolu <br> Taşımacılığı</router-link>
        <router-link to="/services" class="services-btn">Gümrükleme</router-link>
        <router-link to="/services" class="services-btn">Komple & Parsiyel <br> Taşımacılığı</router-link>
        <router-link to="/services" class="services-btn">Depolama <br> Hizmeti</router-link>
        <router-link to="/services" class="services-btn">Minivan <br> Taşımacılık</router-link>
        <router-link to="/services" class="services-btn">Rulo Sac <br> Taşımacılığı</router-link>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    
 .services-btn{
  color: #222;
  position: relative;
  text-transform: uppercase;
  letter-spacing: .2em;
  -webkit-transition: all .4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all .4s cubic-bezier(0.645, 0.045, 0.355, 1);
  font-size: 0.875em;
  width: 250px;
  text-align: center;
  padding: 10px 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
   line-height: 1.15;
   -ms-text-size-adjust: 100%;
   -webkit-text-size-adjust: 100%;
   margin: 10px 0;
  &:hover {
    letter-spacing: 0;
    color: white;
    &::after {
        height: 100%;
    }
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0;
    background: #1d5699;
    z-index: -1;
    -webkit-transition: all .4s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all .4s cubic-bezier(0.645, 0.045, 0.355, 1);

  }
}



</style>