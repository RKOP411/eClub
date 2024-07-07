<script>
import { SwipeBottomNavigation } from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";
export default {
  components: { SwipeBottomNavigation },
  data: () => ({
    selected: 1,
    options: [
      { id: 1, icon: "fa-solid fa-house", title: "首頁" },
      { id: 2, icon: "fas fa-comments", title: "私訊" },
      { id: 3, icon: "fas fa-bell", title: "好友列表" },
      { id: 4, icon: "fa-solid fa-gear", title: "設定" },
    ],
  }),
};
</script>

<template>
  <header>
    <title>首頁</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    />
  </header>
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
        <div class="col-20 ">
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
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
       
          </li>
          <!-- <li class="breadcrumb-item active" aria-current="page">Library</li> -->
        </ol>
      </nav>
      <!-- End Breadcrumb -->
      <!-- Card -->
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text" style="color: #808080">
            With supporting text below as a natural lead-in to additional content.
          </p>
          <img src="/src/img/ran1.avif" class="card-img" />
          <font-awesome-icon :icon="['fas', 'heart']" />
        </div>
      </div>

      <!-- End Card -->
      <SwipeBottomNavigation
        :options="options"
        v-model="selected"
        swiper-color="#FFFFFF"
        background-color="#C2D5F5"
        icon-color="#000000"
      />
    </div>
  </main>
</template>

<style scoped>
.pagination {
  margin-top: 20px;
}
.card-img {
  width: 100%;
}
.card-title {
  font-size: 2rem;
}
.card-text {
  font-size: 1.3rem;
}
</style>
