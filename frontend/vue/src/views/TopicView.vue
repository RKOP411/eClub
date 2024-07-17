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
            <!-- Sm_Navbar -->
            <div class="dropdown dropdown-sm">
              <a
                class="dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-solid fa-bars"></i>
              </a>

              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">首頁</a></li>
                <li><a class="dropdown-item" href="#">最近讀過</a></li>
                <li><a class="dropdown-item" href="#">熱門話題</a></li>
                <li><a class="dropdown-item" href="">精選</a></li>
              </ul>
            </div>
            <!-- End Sm_Navbar -->
            <a class="navbar-brand" href="#">
              <img src="/src/img/thumb.png" width="80rem" height="80rem" />
            </a>
          </div>
        </div>
        <nav class="navbar bg-light">
          <div class="container-fluid">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="搜尋"
                aria-label="Search"
              />
            </form>
          </div>
        </nav>
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
      <div class="row">
        <!-- Breadcrumb -->
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"></li>
            <!-- <li class="breadcrumb-item active" aria-current="page">Library</li> -->
          </ol>
        </nav>
        <!-- End Breadcrumb -->
        <!-- Lg_nav -->
        <div class="col-2 dropdown-lg">
          <div class="d-flex align-items-start">
            <div
              class="nav flex-column nav-pills me-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                class="nav-link active"
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                首頁
              </button>
              <button
                class="nav-link"
                id="v-pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                最近讀過
              </button>
              <button
                class="nav-link"
                id="v-pills-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-messages"
                type="button"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                熱門話題
              </button>
              <button
                class="nav-link"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                精選
              </button>
            </div>
          </div>
        </div>
        <!-- End Lg_nav -->

        <!-- Card -->
        <div class="col-3">
          <div class="card" style="width: 50em">
            <div class="card-body">
              <h5 class="card-title">Title</h5>
              <p class="card-text" style="color: #808080">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <img src="/src/img/ran1.avif" class="card-img" />
              <font-awesome-icon :icon="['fas', 'heart']" />
            </div>
          </div>
        </div>

        <!-- End Card -->
        <SwipeBottomNavigation
          :options="options"
          v-model="selected"
          swiper-color="var(--white)"
          background-color="var(--blue)"
          icon-color="#000000"
        />
      </div>
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

.dropdown-lg {
  display: block;
}

.dropdown-sm {
  display: none;
}

@media (max-width: 1500px) and (max-height: 1500px) {
  .dropdown-lg {
    display: none;
  }

  .dropdown-sm {
    display: inline;
  }
}
</style>
