<template>
    <h1>
        Hello From Home page
    </h1>
</template>

<script>
export default {
    name: 'HomeComponent',
    mounted() {
        const userInfo = localStorage.getItem('auth');
        if (!userInfo) {
            this.$router.push({ name: 'Login' })
        } else {
            this.$router.push({ name: 'Home' })
        }
    }
};
</script>