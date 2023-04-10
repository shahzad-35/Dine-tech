<template>
    <div class="nav-bar">

        <router-link to="/">Home</router-link>
        <router-link to="/add-resturant">Add Resturant</router-link>
        <router-link :class="{ hideButton: !isLogin }" @click="logout" to="#">Logout</router-link>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            isLogin: false
        }
    },
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: 'Login' })
        }
    },
    mounted() {
        const auth = localStorage.getItem('auth');
        if (auth) {
            this.isLogin = true;
        }

    }
}
</script>
<style>
.nav-bar {
    background-color: rgb(0, 0, 0);
    overflow: hidden;
}

.nav-bar a {
    float: left;
    text-align: center;
    font-size: 18px;
    text-decoration: none;
    color: rgb(255, 255, 255);
    padding: 10px 14px;
    margin-right: 6px;
}

.nav-bar a:hover {
    background-color: rgb(236, 231, 225);
}

.hideButton {
    display: none;
}
</style>