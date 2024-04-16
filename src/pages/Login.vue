<template>
    <div class="column">
        <div class="p-3 justify-center d-flex justify-content-center">
            <Form :localStorageKey="localStorageKey"></Form>
        </div>
    </div>
    
</template>

<script>
import Form from '../components/login/Form.vue';

export default {
    name: 'Login',
    data(){
        return{
            localStorageKey: import.meta.env.VITE_USER,
        }
    },
    components: {
        Form: Form
    }
}
</script>