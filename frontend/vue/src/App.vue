<script setup>
import { onMounted } from "vue";
import { RouterView, useRouter} from "vue-router";

onMounted(() => {
  let counter = 0;
  const router = useRouter();
  if(counter < 0){
    router.push("index");
    counter++;
  }

})
</script>

<template>
  <header>

  </header>
  <main>
  </main>

  <RouterView />
</template>

<style></style>
