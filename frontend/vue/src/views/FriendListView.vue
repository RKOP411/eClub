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
    <title>好友列表</title>
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

    <div class="container">
      <div class="list-group">
        <a
          href="#"
          class="list-group-item d-flex justify-content-between align-items-start"
        >
          <div class="col-1 icon">
            <i class="fa-solid fa-user"></i>
          </div>
          <div class="col-12">
            <div class="ms-2 me-auto FriendList_TxT">
              <div class="fw-bold">湯姆</div>
              Text
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


<style scoped>
.icon {
  margin-top: 20px;
  font-size: 4rem;
}
.FriendList_TxT{
  margin-top: 20px;
  padding-left: 2rem;
  font-size: 1.5rem;

}
</style>
