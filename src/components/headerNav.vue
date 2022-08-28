<template>
<!-- Set bckgrnd of header Div to black. Add a flexbox container. Use  justify-between
to set space between the two divs that hold the logo and links. Use items-center to
center links and logo on the y axis -->

<div class="bg-black flex justify-between items-center sticky">

  <!-- Left Side logo placed in a div  -->
<div class="text-white text-lg p-4 mx-6">
    <!-- StoneTigerDigital -->
     <RouterLink to="/frontPage" class="text-white p-4">StoneTigerDigital</RouterLink>
</div>


<div class="mx-6">
<!-- This is the right side navigation placed in a div -->

        <RouterLink to="/frontPage" class="text-white p-4">Home</RouterLink>
        <!-- <RouterLink to="/AboutView1" class="text-white p-4">Services</RouterLink> -->
        <RouterLink to="/videoshow" class="text-white p-4">Project Videos </RouterLink>
        <RouterLink to="/" class="text-white p-4">Contact Us</RouterLink>
</div>

<!-- end background div -->
</div>

<!-- -------------------------------------- -->

<!-- This is the hero image -->
<!-- <div class="w-full">
  <img src="@/assets/tiger.jpg"/>
</div> -->


</template>
    
<script setup>

</script>

<style scoped>

</style>