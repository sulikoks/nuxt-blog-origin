<template>
    <div class="users">
        <h1>Создание нового пользователя</h1>
        <el-form 
        :model="controls" 
        :rules="rules" 
        ref="form"
        @submit.native.prevent="onSubmit"
        >
            <el-form-item label="Логин" prop="newLogin">
                <el-input v-model.trim="controls.newLogin"/>
            </el-form-item>
            <el-form-item label="Пароль" prop="newPassword">
                <el-input type="password" v-model.trim="controls.newPassword"/>
            </el-form-item>
            <el-form-item class="form__footer">
                <el-button 
                type="primary" 
                native-type="submit"
                round
                :loading="loading"
                >
                Создать
                </el-button>
                <nuxt-link to="/admin/users">
                <el-button round>Отмена</el-button>
                </nuxt-link>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    middleware: ['adminAuth'],
    data: () => ({
        loading: false,
        controls: {
            newLogin: '',
            newPassword: ''
        },
        rules: {
            newLogin: [
                {required: true, message: 'Введите логин', trigger: 'blur'}
            ],
            newPassword: [
                {required: true, message: 'Введите пароль', trigger: 'blur'},
                {min: 6, message: 'Пароль должен быть больше 6', trigger: 'blur'}
            ]
        }
    }),
    methods: {
        onSubmit() {
            this.$refs.form.validate(async (valid) => {
                if (valid) {
                    try {
                        this.loading = true
                        const formData = {
                            login: this.controls.newLogin,
                            password: this.controls.newPassword
                        }
                        //debugger
                        await this.$store.dispatch('auth/newLogin', formData)
                        this.$message.success('Пользователь создан')
                        //debugger
                        this.controls.newLogin = ''
                        this.controls.newPassword = ''
                        this.loading = false
                    } catch (e) {
                        this.loading = false
                        this.$message.error('Ну удалось создать пользователя')
                    }
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    form {
        width: 600px;
    }
</style>