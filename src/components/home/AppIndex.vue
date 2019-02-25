<template>
    <div>
      <AppHeader></AppHeader>
      <NavMenu></NavMenu>
      <Carousel></Carousel>
      <Tips></Tips>
      <!--<Card></Card>-->
      <QuickNav></QuickNav>
    </div>
</template>

<script>
  import AppHeader from '@/components/common/AppHeader'
  import NavMenu from '@/components/common/NavMenu'
  import Carousel from '@/components/common/Carousel'
  import QuickNav from '@/components/common/QuickNav'
  import Tips from '@/components/common/Tips'
//  import Card from '@/components/common/Card'
  export default {
    name: 'AppIndex',
    components: {AppHeader, NavMenu, Carousel, QuickNav, Tips}
  }
</script>

<style scoped>

</style>
