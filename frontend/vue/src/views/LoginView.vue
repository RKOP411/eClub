<script setup></script>

<template>
  <header>
    <css />
  </header>
  <main>
    <div class="container" style="position: relative">
      <div class="row justify-content-center">
        <div class="main">
          <div class="content">
            <b class="title"> 登入 </b><br />
            <p style="padding: 5px">輸入您的電話號碼以登入您的帳戶</p>
            <div class="Form">
              <div class="row">
                <div class="col-12">
                  <div style="position: relative">
                    <p>
                      <input
                        type="text"
                        class="form-control-lg"
                        placeholder="輸入電話號碼"
                        id="phone_input"
                      />
                      <button
                        id="send_sms"
                        type="button"
                        class="btn btn-outline-primary"
                        style="position: absolute; top: 5px; right: 1vh"
                      >
                        傳送簡訊
                      </button>
                    </p>
                  </div>
                  <p>
                    <input type="text" class="form-control-lg" placeholder="輸入簡訊" />
                  </p>
                  <br />
                  <a
                    href="https://hkbu.jp.auth0.com/authorize?response_type=code&client_id=dxiOZbTWeGFhW4ScsQrV6rpR1IWO8VJw&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback"
                  >
                    <button
                      type="button"
                      class="btn btn-primary btn-lg"
                      style="font-size: 3vh; width: 20vh"
                    >
                      登入</button
                    ><br /><br />
                  </a>
                  <a href="/register">
                    <button
                      type="button"
                      class="btn btn-success"
                      style="font-size: 3vh; width: 20vh"
                    >
                      注冊</button
                    ><br />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!--content end -->
        </div>
        <!--main end -->
      </div>
    </div>
  </main>
</template>
<script></script>
<style scoped>
.main {
  margin-top: 8vh;
  background-color: rgb(244, 244, 244);
  width: 43vh;
  height: 82vh;
  border-radius: 25px;
  text-align: center;
}

.title {
  font-size: 5vh;
}

.row {
  padding-top: 10vh;
}

.content {
  padding-top: 80px;
}

input.form-check-input {
  width: 2vh;
  height: 2vh;
}

input.form-control-lg {
  width: 1vw;
}

#terms {
  font-size: 1.8vh;
  margin-right: 50px;
}

input.form-control-lg {
  width: 42vh;
}
</style>
