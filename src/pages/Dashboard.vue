<template>
    <UserTable v-if="Object.keys(user).length" :userData="user"></UserTable>
    <button class="btn btn-primary" @click="handleLogout">Logout</button>
</template>

<script>
import UserTable from '../components/UserTable.vue';
const localStorageKey = import.meta.env.VITE_USER;

export default{
    name: 'Dashboard',
    data(){
        return{
            user: {}
        }
    },
    mounted(){
        this.getUser();
    },
    methods: {
        getUser(){
            const userData = JSON.parse(localStorage.getItem(localStorageKey));
            if(userData){
                this.user = userData;
            } else{
                this.$router.push('/');
            }
        },
        handleLogout(){
            localStorage.removeItem(localStorageKey);
            this.$router.push('/')
        }
    },
    components: {
        UserTable: UserTable
    }

}
</script>