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
      <!-- Navbar -->

    <!-- End Navbar -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6">
          <div class="card">
              <a
                href="https://hkbu.jp.auth0.com/authorize?response_type=code&client_id=dxiOZbTWeGFhW4ScsQrV6rpR1IWO8VJw&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback"
              >
                <button
                  type="button"
                  class="btn btn-primary btn-lg"
                >
                  登入</button
                ><br /><br />
              </a>
              <a href="register">
                <button
                  type="button"
                  class="btn btn-success btn-lg"
                >
                  注冊</button
                ><br />
              </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.card {
  position : relative;
  margin-top: 25vh;
  background-color: rgb(244, 244, 244);
  width: 28rem;
  height: 28rem;
  border-radius: 25px;
  text-align: center;
  padding-top: 110px;
}
.btn-lg{
  font-size: 3vh;
  width: 20vh;
}
</style>
