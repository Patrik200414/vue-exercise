<template>
    <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label for="emailInput">Email address: </label>
                    <input type="email" class="form-control" id="emailInput" placeholder="Enter address" required v-model="email">
                </div>
                <div class="form-group">
                    <label for="passwordInput">Password: </label>
                    <input type="password" class="form-control" id="passwordInput" placeholder="Password" required v-model="password">
                </div>
                <button class="btn btn-primary">Login</button>
            </form>
</template>

<script>
export default{
    name: 'Form',
    data(){
        return {
            email: '',
            password: ''
        }
    },
    props: {
        localStorageKey: {
            type: String,
            required: true
        }
    }, 
    methods: {
        handleSubmit(){
            const userToken = {
                email: this.email,
                password: this.password,
                token: 'SpjcYz8xQyY7w9Jz-DRU'
            }


            localStorage.setItem(this.localStorageKey, JSON.stringify(userToken));
            this.$router.push('/dashboard');
        },
    },
}
</script>