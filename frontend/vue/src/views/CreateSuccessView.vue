<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";
//Route > read
// Router > redirect
const router = useRouter();

const user = ref({
    username: "",
    userInfo: "",
    PhoneNum: "",
    Photo: "",
});

onMounted(() => {
    user.value.username = localStorage.getItem("user_info");
    user.value.Photo = localStorage.getItem("selectedPhoto");
    if (user.value != null) {
        console.log(user.value);
    }

});
</script>

<template>
    <div class="container text-center">
        <center>
            <div class="loader"></div>
        </center>
    </div>
</template>
<style scoped>
.loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    margin-top: 60%;
    margin-bottom: 50%;

}

@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
