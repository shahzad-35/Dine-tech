<template>
    <HeaderComponent />
    <h1 id="header">Add Resturant</h1>
    <form class="add" action="post">
        <input type="text" v-model="name" placeholder="Enter Name" name="name">
        <input type="text" v-model="address" placeholder="Enter Address" name="address">
        <input type="text" v-model="contact" placeholder="Enter Contact No" name="contact">
        <button type="button" @click="addResturant">Add New Resturant</button>
    </form>
</template>

<script>
import axios from 'axios';
import HeaderComponent from './HeaderComponent.vue';

export default {
    name: 'AddResturant',
    data() {
        return {
            name: '',
            address: '',
            contact: ''
        }
    },
    components: {
        HeaderComponent
    },
    methods: {
        async addResturant() {
            const result = await axios.post('http://localhost:3000/resturants', {
                name: this.name,
                address: this.address,
                contact: this.contact
            });
            if (result.status == 201) {
                this.$router.push({ name: 'Home' })
            }
        }
    }
}
</script>
<style>
.add {
    display: block;
    width: 23%;
    margin: 25px auto 30px auto;
    border-radius: 11px;
    padding: 45px 0px 49px 0px;
    background-color: #bfbfc5;
    height: 40%;
}

.add input {
    width: 78%;
    height: 47px;
    margin: 18px auto 30px auto;
    border-radius: 8px;
    padding: 0px 0px 0px 7px;
}

.add button {
    background-color: rgb(0, 0, 0);
    border-radius: 15px;
    height: 44px;
    width: 43%;
    color: white;
}

#header {
    margin-top: 50px;
}
</style>