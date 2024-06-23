<script setup></script>

<template>
  <header>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></header>
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
          <li class="breadcrumb-item"><a href="Topic" style="font-size: 1.5rem;">首頁</a></li>
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

      <nav aria-label="Page navigation">
        <ul class="pagination pagination-lg justify-content-center">
          <li class="page-item disabled">
            <a class="page-link">上一頁</a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">下一頁</a>
          </li>
        </ul>
      </nav>
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
