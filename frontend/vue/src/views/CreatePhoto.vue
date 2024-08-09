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

const img_arr = [
  "/src/img/ran1.avif",
  "/src/img/ran2.avif",
  "/src/img/ran3.avif",
  "/src/img/ran4.avif",
  "/src/img/ran5.avif",
  "/src/img/ran6.avif",
  "/src/img/ran7.avif",
  "/src/img/ran8.avif",
  "/src/img/ran9.avif",
  "/src/img/ran10.avif",
  "/src/img/ran11.avif",
];
const images = ref([]);

onMounted(() => {
  if (localStorage.getItem("user_info") != null) {
    user.value.username = localStorage.getItem("user_info");
    //user.value.Photo = document.getElementById("img1").value;
  }
  document.getElementById("btn_Upload").addEventListener("click", openDialog);

  function openDialog() {
    document.getElementById("fileUpload").click();
  }

  // loop images and not repeat
  for (let i = 0; i < 5; i++) {
    let randomIndex = Math.floor(Math.random() * img_arr.length);
    images.value.push(img_arr.splice(randomIndex, 1)[0]);
  }
  // images.value.push("/src/img/Custom picture.png");

  // const images = document.querySelectorAll("img");
  // let repeated = [];
  // images.forEach((img) => {
  //   let random = Math.floor(Math.random() * img_arr.length);
  //   while (repeated.includes(random)) {
  //     random = Math.floor(Math.random() * img_arr.length);
  //   }
  //   if (repeated.includes(random) == false) {
  //     repeated.push(random);
  //   }
  //   img.parentNode.childNodes[0].value = img_arr[random];
  //   img.src = img_arr[random];
  // });
});

const submit = async function (e) {
  if (user.value.Photo == "") {
    document.getElementById("alert_img").hidden = false;
    return;
  } else if (user.value.username == "") {
    document.getElementById("alert_username").hidden = false;
    return;
  } else {
    const response = await fetch("/api/createInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user.value),
    });
    //add loading spinner
    document.getElementById("loading-bar-spinner").hidden = false;
    document.getElementById("submit_bt").disabled = true;
    document.getElementById("return_bt").disabled = true;
    document.getElementById("return_href").href = "#";
    // convert the response to json
    const json = await response.json();
    console.log(json);
    router.push("/Topic");
  }
};

const ImgEffect = function (event) {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.style.border = "";
  });
  event.target.style.border = "10px solid #0D6EFD";
};

const upload = function (e) {
  // user.value.Photo = URL.createObjectURL(e.target.files[0]);
  // images.value.push(URL.createObjectURL(e.target.files[0]));
  // convert to data url
  const reader = new FileReader();
  reader.onload = function (evt) {
    // images.value.splice(images.value.length - 1, 1);
    // user.value.Photo = e.target.result;
    if(images.value.length == 6){
      images.value.splice(images.value.length - 1, 1);
    }
    images.value.push(evt.target.result);
  };
  reader.readAsDataURL(e.target.files[0]);

  // user.value.Photo = document.getElementById("fileUpload").value;
  // console.log(user.value.Photo);
  // document.getElementById("custom_img").src = user.value.Photo;
};
</script>

<template>
  <header></header>
  <main>
    <div class="container">
      <div
        class="alert alert"
        id="alert_img"
        role="alert"
        style="background-color: #f8d7da"
        hidden
      >
        請選擇一張圖片
      </div>
      <div
        class="alert alert"
        id="alert_username"
        role="alert"
        style="background-color: #f8d7da"
        hidden
      >
        請輸入用戶名
      </div>
      <div class="row justify-content-center">
        <div class="card">
          <form @submit.prevent="submit($event)">
            <div class="row justify-content-center">
              <div class="col-3" v-for="img in images" :key="img">
                <input
                  type="radio"
                  name="user_img"
                  :value="img"
                  v-model="user.Photo"
                  :id="img"
                />
                <label :for="img">
                  <img
                    :src="img"
                    class="responsive"
                    height="105"
                    width="105"
                    @click="ImgEffect($event)"
                  />
                </label>
              </div>
              <div class="col-3" v-if="images.length <= 5">
                <input
                  disabled
                  type="radio"
                  name="user_img"
                  id="/src/img/Custom picture.png"
                />
                <label :for="img">
                  <img
                  disabled  
                    src="/src/img/Custom picture.png"
                    class="responsive"
                    height="105"
                    width="105"
                  />
                </label>
              </div>
              <!-- <div class="col-3">
                <label>
                  <input type="radio" name="user_img" v-model="user.Photo" />
                  <img src="../img/Custom picture.png" id="custom_img" class="responsive" height="105" width="105"
                    @click="ImgEffect" />
                </label>
              </div> -->
            </div>

            <br />
            <input
              id="fileUpload"
              type="file"
              @change="upload($event)"
              accept="image/*"
              size = "10000"
              hidden
            />
            <input
              id="btn_Upload"
              type="button"
              class="btn btn-outline-primary"
              style="font-size: 3vh; width: 20vh"
              value="上傳圖片"
            />
            <br />
            <br />
            <a href="createUser_info" id="return_href">
              <button
                type="button"
                class="btn btn-secondary btn-lg"
                style="font-size: 3vh; width: 20vh"
                id="return_bt"
              >
                返回
              </button>
            </a>
            <br />
            <br />
            <button
              type="submit"
              class="btn btn-primary btn-lg"
              style="font-size: 3vh; width: 20vh"
              id="submit_bt"
            >
              確定
            </button>
            <div id="loading-bar-spinner" class="spinner" hidden>
              <div class="spinner-icon"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.responsive {
  max-width: 70px;
  max-height: 70px;
}

.card {
  position: relative;
  margin-top: 25vh;
  background-color: rgb(244, 244, 244);
  border-radius: 25px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 60px;
  width: 43vh;
}

input.form-control {
  width: 40vh;
  text-align: center;
  margin: 10px;
}

div.col-3 {
  margin: 10px;
}

[type="radio"] {
  visibility: hidden;
}

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 20px;
  height: 20px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  margin-top: 60%;
  margin-bottom: 50%;
}

#loading-bar-spinner.spinner {
  left: 50%;
  margin-left: -20px;
  top: 50%;
  margin-top: -20px;
  position: absolute;
  z-index: 19 !important;
  animation: loading-bar-spinner 400ms linear infinite;
}

#loading-bar-spinner.spinner .spinner-icon {
  width: 40px;
  height: 40px;
  border: solid 4px transparent;
  border-top-color: #00c8b1 !important;
  border-left-color: #00c8b1 !important;
  border-radius: 50%;
}

@keyframes loading-bar-spinner {
  0% {
    transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
