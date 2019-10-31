<template>
    <article class="post">
        <el-card
            shadow="hover"
            :body-style="{padding: 0}"
            class="post"
        >
            <header slot="header" class="post-header">
                <h3>Post title</h3>
                <small>
                    <i class="el-icon-time" />
                    {{ new Date().toLocaleString() }}
                </small>
            </header>
            <div class="post-body">
                <img src="https://online-teacher.ru/image/english/gorod.jpg" alt="heloo" class="post-img">
            </div>
            <footer class="post-footer">
                <el-button round @click.prevent="openPost">Открыть</el-button>

                <span>
                    <i class="el-icon-s-comment"/>
                    12
                </span>
            </footer>
        </el-card>
    </article>
</template>

<script>
export default {
    methods: {
        openPost() {
            const postId = 'testId'
            this.$router.push(`/post/${postId}`)
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .post {
        margin-bottom: 1.5rem;
    }
    .post-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .post-body {
        margin: 0;
    }
    .post-img {
        width: 100%;
        height: auto;
    }
    .post-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    }
</style>