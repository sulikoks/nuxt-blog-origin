<template>
    <h1>Добро пожаловать в Админку</h1>
</template>

<script>
export default {
    layout: 'admin',
    middleware: ['adminAuth']
}
</script>

<style lang="scss" scoped>

</style>