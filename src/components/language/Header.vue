<template>
    <div class="column">
        <header>
            <select class="form-select" :value="language" @change="onLanguageChange">
                <option value="en">EN</option>
                <option value="hu">HU</option>
            </select>
        </header>
    </div>
</template>

<script>
export default{
    name: 'Header',
    props: {
        language: {
            type: String,
            required: true
        },
        onLanguageChange: {
            type: Function,
            required: true
        }
    }
}
</script>