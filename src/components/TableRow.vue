<template>
    <tr>
        <td>{{userData.email}}</td>
        <td>{{userData.password}}</td>
        <td>{{userData.token}}</td>
    </tr>
</template>

<script>
export default{
    name: 'TableRow',
    props: {
        userData: {
            type: Object,
            required: true
        }
    }
}
</script>