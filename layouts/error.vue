<template>
    <div class="error">
        <div class="error-content">
            <h1 class="error-title">Ошибка 404</h1>
            <small>Такой страницы не существует =(</small>
            <nuxt-link class="error-link" to="/"> Вернуться на главную</nuxt-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.error {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
}
.error-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 4rem;
}
.error-title {
    color: rgb(219, 81, 99);
    margin-bottom: 0;

}
.error-link {
    margin-top: 1rem;
}
</style>