<template>
    <div>
        <h2 class="pageWrap">Новый пост | {{control.title}}</h2>
        <el-form 
            class="pageWrap"
            :model="control" 
            :rules="rules" 
            ref="form"
        >
            <el-form-item label="Название поста" prop="title">
                <el-input v-model.trim="control.title"/>
            </el-form-item>
            <el-form-item label="Введите текст в формате .md или .html" prop="text">
                <el-input type="textarea" v-model="control.text" resize="none" rows="12"/>
            </el-form-item>
            <el-dialog
                title="Предпросмотр"
                :visible.sync="preview">
                <div :key="control.text">
                    <vue-markdown>{{control.text}}</vue-markdown>
                </div>
            </el-dialog>
            
            <div class="form__prev">
                <el-upload
                    ref="upload"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-change="handleImgChange"
                    :auto-upload="false"
                >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">Перетащите картинку или <em>нажмите</em></div>
                    <div class="el-upload__tip" slot="tip">jpg/png файлы должны быть не больше 500kb</div>
                </el-upload>
                <el-button 
                    class="btn"
                    round 
                    @click="preview = true"
                >
                    Предпросмотр    
                </el-button>
            </div>
            <el-form-item class="form__footer">
                <el-button 
                type="primary"
                round
                :loading="loading"
                @click="create()"
                >
                    Создать
                </el-button>
                
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
        preview: false,
        image: null,
        control: {
            title: '',
            text:  ''
        },
        rules: {
            title: [
                {required: true, message: 'Название не должно быть пустым', trigger: 'blur'}
            ],
            text: [
                {required: true, message: 'Текст не должен быть пустым', trigger: 'blur'}
            ]
        }
    }),
    methods: {
        create() {
            this.$refs.form.validate(async (valid) => {
                if (valid && this.image) {
                    try {
                        console.log('createPost')
                        this.loading = true
                        const formData = {
                            title: this.control.title,
                            text: this.control.text,
                            image: this.image
                        }
                        await this.$store.dispatch('post/create', formData)
                        this.control.title = ''
                        this.control.text = ''
                        this.image = null
                        this.$refs.upload.clearFiles()
                        this.loading = false
                        this.$message.success('Новый пост создан')
                    } catch (e) {
                        console.log('errorCreatePost')
                    }
                } else {
                    this.$message.warning('Заполните картинку')
                }
            });
        },
        handleImgChange(file, fileList) {
            this.image = file.raw
        }
    }
}
</script>

<style lang="scss" scoped>
    .pageWrap {
        margin-top: 1rem;
        max-width: 600px;
    }
    .form__footer {
        margin-top: 1rem;
    }
    .form__prev{
        display: flex;
        justify-content: space-between;

        .btn{
            height: 40px;
        }
    }
</style>