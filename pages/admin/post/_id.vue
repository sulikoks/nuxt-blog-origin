<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item to="/admin/posts">Посты</el-breadcrumb-item>
            <el-breadcrumb-item>{{p.title}}</el-breadcrumb-item>
        </el-breadcrumb>

        <h1 class="pageWrap">Изменить пост | {{p.title}}</h1>
        <el-form 
            class="pageWrap"
            :model="p" 
            :rules="rules" 
            ref="form"
        >
            <el-form-item label="Название поста" prop="title">
                <el-input v-model.trim="p.title"/>
            </el-form-item>
            <el-form-item label="Введите текст в формате .md или .html" prop="text">
                <el-input type="textarea" v-model="p.text" resize="none" rows="6"/>
            </el-form-item>
            <el-dialog
                title="Предпросмотр"
                :visible.sync="preview">
                <div :key="p.text">
                    <vue-markdown>{{p.text}}</vue-markdown>
                </div>
            </el-dialog>
            <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
                <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
            </el-upload>
            <el-form-item class="form__footer">
                <el-button 
                type="primary"
                round
                :loading="loading"
                @click="update()"
                >
                    Обновить
                </el-button>
                <el-button round @click="preview = true">
                    Просмотр
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    middleware: ['adminAuth'],
    validate({params}) {
        return Boolean(params.id)
    },
    data: () => ({
        loading: false,
        preview: false,
        rules: {
            title: [
                {required: true, message: 'Название не должно быть пустым', trigger: 'blur'}
            ],
            text: [
                {required: true, message: 'Текст не должен быть пустым', trigger: 'blur'}
            ]
        }
    }),
    async asyncData({store, params}) {

        const p = await store.dispatch('post/fetchAdminPostById', params.id)    
        //debugger
        //console.log('ID ===== ', post)
        return {p}
    },
    methods: {
        update() {
            this.$refs.form.validate(async valid => {
                if (valid) {
                    try {
                        console.log('update')
                        this.loading = true
                        const formData = {
                            id: this.p._id,
                            title: this.p.title,
                            text: this.p.text
                        }
                        await this.$store.dispatch('post/update', formData)
                        this.$message.success('Пост изменен')
                        this.loading = false
                    } catch (e) {
                        console.log('errorUpdate')
                        this.loading = false
                    }
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .pageWrap {
        margin-top: 2rem;
        max-width: 600px;
    }
</style>