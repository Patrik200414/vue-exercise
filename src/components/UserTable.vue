<template>
    <table class="table">
        <thead>
            <th>Email: </th>
            <th>Password: </th>
            <th>Token: </th>
        </thead>
        <tbody>
            <TableRow :userData="userData"></TableRow>
        </tbody>
    </table>
</template>

<script>
import TableRow from './dashboard/TableRow.vue';

export default{
    name: 'UserTable',
    props: {
        userData: {
            type: Object,
            required: true
        }
    },
    components: {
        TableRow: TableRow,
    }
}
</script>