<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";
//Route > read
// Router > redirect
const token = ref("");
onMounted(() => {
  console.log(useRoute().query.token);
  const route = useRoute();
  const router = useRouter();
  token.value = route.query.token || null;

  if (token.value != null) {
    router.push({
        name: "forum",
        query: {
            token: token.value
        }
    });
    
  }

  localStorage.setItem("token", token.value);

  /* if( route.query  === ''){
        useRouter.push("index");
    }else if(! route.query  === ''){
        useRouter.push("success");
    }*/
});
</script>

<template>
  <div>
    <!-- <RouterLink :to="`/index/`"> {{ token }} </RouterLink>-->
    <!--{{ token }}-->
  </div>
  <div></div>
</template>
