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
    <title>私訊</title>
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

    <nav class="navbar navbar-expand-lg top-nav">
      <a class="navbar-brand" href="/FriendList"
        ><i class="fa-solid fa-arrow-right fa-rotate-180"></i
      ></a>
      <div class="container">
        <div class="fw-bold PM_info">
          <img src="/src/img/Head_Icon.png" class="Head_Icon" />
          <b class="PM_Name">湯姆</b>
        </div>
        <!-- Dropdown -->
        <div class="dropstart">
          <a class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-ellipsis-vertical"></i
          ></a>

          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">背景顏色</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">搜尋</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">刪除好友</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">封鎖</a>
            </li>
          </ul>
        </div>
        <!-- End Dropdown -->
      </div>
    </nav>

    <div class="container">
      <div class="conversation-start">
        <div class="conversation-time">Yesterday, 4:20 PM</div>
        <div class="PM_bubble You">Hey you</div>
        <div class="PM_bubble Me">?</div>
      </div>
    </div>
  </main>
  <SwipeBottomNavigation
    :options="options"
    v-model="selected"
    swiper-color="var(--white)"
    background-color="var(--blue)"
    icon-color="#000000"
  />
</template>

<style scoped>
.top-nav {
  background-color: var(--blue) !important;
  padding-left: 2rem;
}
.Head_Icon {
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  background-color: #ffffff;
}
.PM_info {
  text-align: left;
}
.PM_Name {
  font-size: 1.5rem;
  text-align: left;
  margin-left: 1rem;
}

.conversation-start {
  margin-top: 50px;
}
.conversation-time {
  text-align: center;
  margin: 30px;
  color: var(--grey);
}
.PM_bubble {
  position: relative;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 5px;
  max-width: 30%;
  word-wrap: break-word;
  
}

.PM_bubble.You {
  background-color: var(--PM_You);
  float: left;
  align-self: flex-start;
}

.PM_bubble.You::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 10px;
  border: 10px solid;
  border-color:  transparent transparent  var(--PM_You);
}

.PM_bubble.Me {
  background-color: var(--PM_Me);
  float: right;
  align-self: flex-end;
  
}

.PM_bubble.Me::after {
  content: '';
  position: absolute;
  right: -10px;
  top: 10px;
  border: 10px solid;
  border-color:  transparent transparent  var(--PM_Me);
}

</style>
