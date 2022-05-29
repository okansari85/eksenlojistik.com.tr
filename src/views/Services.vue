<template>

  <Nav/>
  <main class="services">
    <section class="pt-5 mt-5">
      <div>
        <b-tabs content-class="mt-3" align="center">
          <b-tab title="First" active><p>I'm the first tab</p></b-tab>
          <b-tab title="Second"><p>I'm the second tab</p></b-tab>
          <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
        </b-tabs>
      </div>
    </section>
  </main>

</template>

<script>
// @ is an alias to /src

import Nav from '@/layout/Nav.vue'

export default {
  name: 'Services',
  components: { Nav }
}
</script>

<style scoped lang="sass">



</style>