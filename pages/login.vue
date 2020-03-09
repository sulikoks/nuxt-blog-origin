<template>
    <div class="login">
        <el-form
            :model="controls"
            :rules="rules"
            ref="form"
            @submit.native.prevent="onSubmit"
        >
            <h1 class="text-center">Вход</h1>
            <el-form-item label="Логин" prop="login">
                <el-input v-model.trim="controls.login"/>
            </el-form-item>
            <el-form-item label="Пароль" prop="password">
                <el-input type="password" v-model.trim="controls.password"/>
            </el-form-item>
            <el-form-item class="form__footer">
                <el-button
                    type="primary"
                    native-type="submit"
                    round
                    :loading="loading"
                >
                    Войти
                </el-button>
                <nuxt-link to="/">
                    <el-button round>Отмена</el-button>
                </nuxt-link>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    layout: 'empty',
    data: () => ({
        loading: false,
        controls: {
            login: '',
            password: ''
        },
        rules: {
            login: [
                { required: true, message: 'Введите логин', trigger: 'blur' }
            ],
            password: [
                { required: true, message: 'Введите пароль', trigger: 'blur' },
                { min: 6, message: 'Пароль должен быть больше 6', trigger: 'blur' }
            ]
        }
    }),
    mounted() { // Запустакается только на клиенте И только после програзки ДОМ
        const message = this.$route.query.msg
        switch (message) {
            case 'admin':
                this.$message.warning('Требуются права администратора')
                break
            case 'logout':
                this.$message.info('Вы вышли из системы')
                break
        }
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate(async valid => {
                if (valid) {
                    try {
                        this.loading = true
                        const formData = {
                            login: this.controls.login,
                            password: this.controls.password
                        }
                        await this.$store.dispatch('auth/login', formData)
                        const access = this.$store.getters['auth/isAuth']
                        if (access) {
                            this.$message.success('Вы вошли')
                            this.$router.push('/admin')
                        } else {
                           this.$message.error('Вы пидар')
                           this.$router.push('/')
                        }
                    } catch (e) {
                        throw Error(e)
                    } finally {
                        this.loading = false
                    }
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
h1 {
    margin-top: 1rem;
}
.form__footer {
    display: flex;
    justify-content: space-between;
}
</style>