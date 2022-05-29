<template>
  <div>
    <Nav/>
    <main>
      <Hero/>
      <Number/>
      <Solutions/>
      <Cost/>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from '../layout/Nav.vue'
import Hero from "@/components/home/Hero";
import Number from "@/components/home/Number";
import Solutions from "@/components/home/Solutions";
import Cost from "@/components/home/Cost";

export default {
  name: 'Index',
  components: {Hero, Solutions, Number, Cost, Nav }
}
</script>
