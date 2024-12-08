<script setup>
import { RouterView } from "vue-router";
import Navbar from "../components/Navbar.vue"
import Modal from "@/components/Modal.vue";

</script>

<template>
 
<div class="flex" >
   
    <Modal/>
    <div  class="bg-neutral-50 w-full " >
    <Navbar />
    <main>
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </main>
    
  </div>
  </div>


</template>

<style scoped>

</style>