<template>
    <div>
      <AppHeader></AppHeader>
      <NavMenu></NavMenu>
      <Carousel></Carousel>
    </div>
</template>

<script>
  import AppHeader from '@/components/common/AppHeader'
  import NavMenu from '@/components/common/NavMenu'
  import Carousel from '@/components/common/Carousel'
  export default {
    name: 'AppIndex',
    components: {AppHeader, NavMenu, Carousel}
  }
</script>

<style scoped>

</style>
