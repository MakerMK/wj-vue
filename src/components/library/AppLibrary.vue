<template>
    <div>
      <NavMenu></NavMenu>
      <Tips></Tips>
    </div>
</template>

<script>
    import NavMenu from '../common/NavMenu'
    import Tips from '../common/Tips'
    export default {
        name: 'AppLibrary',
      components: {Tips, NavMenu}
    }
</script>

<style scoped>

</style>
