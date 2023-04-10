<template>
    <HeaderComponent />
    <h1>
        Resturants
    </h1>
    <table border="1">
        <thead>
            <tr>
                <td>
                    ID
                </td>
                <td>
                    Name
                </td>
                <td>
                    Location
                </td>
                <td>
                    Contact
                </td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="resturant in resturants" :key="resturant.id">
                <td>{{ resturant.id }}</td>
                <td>{{ resturant.name }}</td>
                <td>{{ resturant.address }}</td>
                <td>{{ resturant.contact }}</td>
                <td>
                    <span>
                        <router-link :to="'/update-resturant/' + resturant.id">Update&nbsp;</router-link>
                        <button id="delete" type="button" @click="deleteResturant(resturant.id)">Delete</button>
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import axios from 'axios';

export default {
    name: 'HomeComponent',
    data() {
        return {
            resturants: []
        }
    },
    components: {
        HeaderComponent
    },
    async mounted() {
        let resturants = await axios.get('http://localhost:3000/resturants');
        const userInfo = localStorage.getItem('auth');
        if (!userInfo) {
            this.$router.push({ name: 'Login' })
        } else {
            this.$router.push({ name: 'Home' })
        }
        this.resturants = resturants.data;
    },
    methods: {
        async deleteResturant(id) {
            const result = await axios.delete("http://localhost:3000/resturants/" + id);
            if (result.status == 200) {
                this.$router.go(0);
            }
        }
    }
};
</script>

<style>
table {
    max-width: 960px;
    margin: 10px auto;
}

thead th {
    font-weight: 400;
    background: #8a97a0;
    color: #FFF;
}

#delete {
    text-decoration: underline;
    color: blue;
    margin-top: 2px;
    margin-left: 10px;
}

tr {
    background: #f4f7f8;
    border-bottom: 1px solid #FFF;
    margin-bottom: 5px;
}

th,
td {
    text-align: left;
    padding: 20px;
    font-weight: 300;
}

tfoot tr {
    background: none;
}

tfoot td {
    padding: 10px 2px;
    font-size: 0.8em;
    font-style: italic;
    color: #8a97a0;
}

span {
    display: flex;
}
</style>