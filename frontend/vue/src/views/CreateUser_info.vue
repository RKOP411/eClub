<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const user = ref({
  username: "",
  userInfo: "",
  PhoneNum: "",
  Photo: "",
});

onMounted(() => {
  if (localStorage.getItem("user_info") != null) {
    user.value.username = localStorage.getItem("user_info");
  }
});
const SetUserName = async function () {
  user.value.username = document.getElementById("username").value;
  localStorage.setItem("user_info", user.value.username);
  router.push("createUser_photo");
};
</script>

<template>
  <header>
    <css />
  </header>
  <main>
    <div class="container">
      <div class="row justify-content-center">
        <div class="card">
          <div class="content">
            <input class="form-control" type="text" v-model="user.username" id="username" placeholder="輸入您的用戶名"
              required="required" />
            <br /><br />
            <button @click="SetUserName" class="btn btn-primary btn-lg" style="font-size: 3vh; width: 20vh">
              確定
            </button>
          </div>
        </div>
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
  padding-top: 130px;
}

input.form-control {
  text-align: center;
}
</style>
