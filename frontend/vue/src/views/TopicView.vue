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
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    />
  </header>
  <main>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/src/img/thumb.png" width="80rem" height="80rem" />
        </a>
      </div>
    </nav>
    <div class="container">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="Topic" style="font-size: 1.5rem">首頁</a>
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
  font-size: 2.5rem;
}
.card-text {
  font-size: 1.5rem;
}
</style>
