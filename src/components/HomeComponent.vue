<template>
    <HeaderComponent />
    <h1>
        Hello From Home page
    </h1>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';

export default {
    name: 'HomeComponent',
    components: {
        HeaderComponent
    },
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