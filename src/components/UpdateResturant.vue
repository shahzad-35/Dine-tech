<template>
    <h1>Update Resturant</h1>
    <form class="add" action="post">
        <input type="text" v-model="name" placeholder="Enter Name" name="name">
        <input type="text" v-model="address" placeholder="Enter Address" name="address">
        <input type="text" v-model="contact" placeholder="Enter Contact No" name="contact">
        <button type="button" @click="update">Update</button>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: 'UpdateResturant',
    data() {
        return {
            name: '',
            address: '',
            contact: ''
        }
    },
    methods: {
        async update() {
            const result = await axios.put("http://localhost:3000/resturants/" + this.$route.params.id,
                {
                    name: this.name,
                    address: this.address,
                    contact: this.contact
                });
            if (result.status == 200) {
                this.$router.push({ name: 'Home' })
            }
        }
    },
    async mounted() {
        const result = await axios.get(
            "http://localhost:3000/resturants/" + this.$route.params.id
        );
        if (result.status == 200) {
            this.name = result.data.name;
            this.address = result.data.address;
            this.contact = result.data.contact;
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