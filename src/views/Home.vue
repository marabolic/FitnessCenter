<template>
  <div class="home">
    <WhyUs msg="Welcome to Your Vue.js App"/>
    <TopRated msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import WhyUs from '@/components/homepage/WhyUs.vue'
import TopRated from '@/components/homepage/TopRated.vue'

export default {
  name: 'Home',
  components: {
    WhyUs,
    TopRated
  },
  created(){
  }
}
</script>
