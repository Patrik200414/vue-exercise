<template>
    
</template>

<script>
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
            const userData = JSON.parse(localStorage.getItem('USER_TOKEN'));
            if(userData){
                this.user = userData;
            } else{
                this.$router.push('/');
            }
        }
    }
}
</script>