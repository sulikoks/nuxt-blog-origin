<template>
    <div class="posts">
        <h1>Посты на сайте</h1>
        <el-table
            :data="posts"
            style="width: 100%"
        >
            <el-table-column 
                prop="title"
                label="Название"
            />
            <el-table-column label="Дата" width="200">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date.toLocaleString() }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Прос" width="60">
                <template slot-scope="scope">
                    <i class="el-icon-view"></i>
                    <span>{{ scope.row.views }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Комм" width="60">
                 <template slot-scope="scope">
                    <i class="el-icon-message"></i>
                    <span>{{ scope.row.comments.length }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="Действия"
                width="150"
            >
            <template slot-scope="scope">
                <el-tooltip class="item" effect="dark" content="Редактировать пост" placement="top">
                    <el-button
                        icon="el-icon-edit"
                        circle
                        @click="open(scope.row._id)"
                    />
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="Удалить пост" placement="top">
                    <el-button
                        icon="el-icon-delete"
                        type="danger"
                        circle
                        @click="remove(scope.row._id)"
                    />
                </el-tooltip>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    middleware: ['adminAuth'],
    async asyncData({store}) {
        const posts = await store.dispatch('post/fetchAdmin')
        return {posts}
    },
    methods: {
        open(id) {
            this.$router.push(`/admin/post/${id}`)
        },
        remove(id) {
            this.$confirm('Выходите удалить пост. Продолжить?', 'Внимание', {
                confirmButtonText: 'ОК',
                cancelButtonText: 'Отмена',
                type: 'warning'
                }).then(async () => {
                    await this.$store.dispatch('post/remove', id)
                    this.posts = this.posts.filter(p => p._id !== id)
                    this.$message.success('Удаленние завершенно')
                }).catch(() => {
                    this.$message.info('Удаление отменено')
                })
            
        }
    }
}
</script>