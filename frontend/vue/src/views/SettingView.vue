<script>
import { SwipeBottomNavigation } from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";
export default {
  components: { SwipeBottomNavigation },
  data: () => ({
    selected: 1,
    options: [
      { id: 1, icon: "fa-solid fa-house", title: "首頁", path: "/Topic" },
      { id: 2, icon: "fas fa-comments", title: "私訊", path: "/PrivateMessage" },
      { id: 3, icon: "fas fa-bell", title: "好友列表", path: "/FriendList" },
      { id: 4, icon: "fa-solid fa-gear", title: "設定", path: "/Setting" },
    ],
  }),
};
</script>

<template>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    />
    <title>設定</title>
  </head>
  <main>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <a class="navbar-brand" href="#">
              <img src="/src/img/thumb.png" width="80rem" height="80rem" />
            </a>
          </div>
        </div>
        <div class="col-20">
          <button
            type="button"
            class="btn btn-outline-primary btn-lg"
            style="margin-right: 2rem; width: 6rem"
          >
            登出
          </button>
        </div>
      </div>
    </nav>
    <!-- End Navbar -->
    <br />
    <br />
    <br />
    <div class="container text-center">
      <img
        src="/src/img/ran2.avif"
        width="420rem"
        height="390rem"
        style="border-radius: 50%"
      />
      <br />
      <br />
      <!-- <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action"> 姓名 </a>
        <a h  ref="#" class="list-group-item list-group-item-action">電話號碼</a>
        <a href="#" class="list-group-item list-group-item-action">A third link item</a>
        <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
      </div> -->
      <div class="list-group">
        <a
          href="#"
          class="list-group-item d-flex justify-content-between align-items-start"
        >
          <div class="col-1 icon">
            <i class="fa-solid fa-user"></i>
          </div>
          <div class="col-12">
            <div class="ms-2 me-auto">
              <div class="fw-bold">姓名</div>
              湯姆·里德爾
            </div>
          </div>
        </a>
        <a
          href="#"
          class="list-group-item d-flex justify-content-between align-items-start"
        >
          <div class="col-1 icon">
            <i class="fa-solid fa-phone"></i>
          </div>
          <div class="col-12">
            <div class="ms-2 me-auto">
              <div class="fw-bold">電話號碼</div>
              5484-1234
            </div>
          </div>
        </a>
        <a
          href="#"
          class="list-group-item d-flex justify-content-between align-items-start"
        >
          <div class="col-1 icon">
            <i class="fa-solid fa-circle-info"></i>
          </div>
          <div class="col-12">
            <div class="ms-2 me-auto">
              <div class="fw-bold">關於我</div>
              Content of me
            </div>
          </div>
        </a>
      </div>
    </div>
  </main>
  <SwipeBottomNavigation
    :options="options"
    v-model="selected"
    swiper-color="#FFFFFF"
    background-color="#C2D5F5"
    icon-color="#000000"
  />
</template>

<script></script>

<style scoped>
.list-group {
  font-size: 2rem;
}
.ms-2 {
  margin: 10px;
  text-align: left;
}
.icon {
  margin-top: 40px;
  font-size: 50px;
}
</style>
