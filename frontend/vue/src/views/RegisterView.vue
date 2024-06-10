<script setup>
function send_sms() {
  //alert("簡訊已傳送");
}
</script>

<template>
  <header>
    <css />
  </header>
  <main>
    <div class="container" style="position: relative">
      <div class="main">
        <div class="content">
          <b class="title"> 註冊 </b><br />
          <p style="padding: 5px">輸入您的電話號碼以注冊您的帳戶</p>
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
                      @click="send_sms"
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
                <!--checkbox -->
                <div class="form-check" style="">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkbox"
                  />
                  <label class="form-check-label" id="terms" for="flexCheckDefault">
                    本人已閱讀及同意遵守上述<a href="#">條款及細則</a>
                  </label>
                </div>
                <br />
                <!--checkbox end -->
                <!--btn -->
                <a href="/">
                  <button
                    type="button"
                    class="btn btn-secondary btn-lg"
                    style="font-size: 3vh; width: 20vh"
                  >
                    返回</button
                  ><br /><br />
                </a>
                <a href="createUser_info">
                  <button
                    type="button"
                    class="btn btn-success"
                    style="font-size: 3vh; width: 20vh"
                  >
                    注冊</button
                  ><br /><br />
                </a>
                <!--btn end -->
              </div>
            </div>
          </div>
        </div>
        <!--content end -->
      </div>
      <!--main end -->
    </div>
  </main>
</template>
<!-- <script>
window.onload = function () {
    let timer = document.getElementById("send_sms");
    let number = 40;
    timer.innerHTML = "傳送簡訊";
    timer.onclick = function () {
        /* var interval = setInterval(function () {
             number--;
             timer.innerHTML = number + "秒後重新傳送";
             if (number == 0) {
                 clearInterval(interval);
                 timer.innerHTML = "重新傳送";
                 number = 40;
             }
         }, 1000);*/
        alert("簡訊已傳送");
    }
}

</script> -->

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

.form-check {
  position: relative;
  left: 20px;
}

#checkbox {
  width: 3vh;
  height: 3vh;
}
</style>
