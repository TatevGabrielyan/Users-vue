<template>
  <div id="app" class="container-fluid">

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    
  </div>
</template>

<script>
export default {

}
</script>

<style type="text/css">

@import url('https://fonts.googleapis.com/css2?family=Montserrat');
*{
    font-family: 'Montserrat';
}
</style>