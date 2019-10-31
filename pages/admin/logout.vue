<template>
    <div class="logout">
        <h1>This is Logout Pages, Clear Data</h1>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    middleware: ['adminAuth'],
    beforeCreate() {
        this.$store.dispatch('auth/logout')
        this.$router.push('/login?msg=logout')
    }
}
</script>