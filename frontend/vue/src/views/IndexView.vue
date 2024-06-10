<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

onMounted(() => {
  // const token = ref("");
  // token.value = useRoute().query.token;
  // console.log(token.value);
});
</script>

<template>
  <header>
    <css />
  </header>
  <main>
    <div class="container" style="position: relative">
      <div class="row justify-content-center">
        <div class="card">
          <div class="content">
            <a
              href="https://hkbu.jp.auth0.com/authorize?response_type=code&client_id=dxiOZbTWeGFhW4ScsQrV6rpR1IWO8VJw&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback"
            >
              <button
                type="button"
                class="btn btn-primary btn-lg"
                style="font-size: 3vh; width: 20vh"
              >
                登入</button
              ><br /><br />
            </a>
            <a href="register">
              <button
                type="button"
                class="btn btn-success"
                style="font-size: 3vh; width: 20vh"
              >
                注冊</button
              ><br />
            </a>
          </div>
          <!--content end -->
        </div>
        <!--main end -->
      </div>
    </div>
  </main>
</template>
<style scoped>
.card {
  margin-top: 25vh;
  background-color: rgb(244, 244, 244);
  width: 43vh;
  height: 42vh;
  border-radius: 25px;
  text-align: center;
  padding-top: 110px;
}
</style>
