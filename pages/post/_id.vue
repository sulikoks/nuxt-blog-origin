<template>
    <article class="post">
        <header class="post-header">
            <div class="post-title">
                <h1>Post title</h1>
                <nuxt-link to="/">
                    <i class="el-icon-back"/>
                </nuxt-link>
            </div>
            <div class="post-info">
                <small>
                    <i class="el-icon-time" />
                    {{ new Date().toLocaleString() }}
                </small>
                <small>
                    <i class="el-icon-view" />
                    42
                </small>
            </div>
            <div class="post-image">
                <img src="https://online-teacher.ru/image/english/gorod.jpg" alt="Привикт">
            </div>
        </header>
        <main class="post-content">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, porro totam? Id libero ratione, rerum qui eos assumenda repellat quam saepe vitae doloribus! Aliquam culpa voluptatem modi, temporibus nam similique?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, porro totam? Id libero ratione, rerum qui eos assumenda repellat quam saepe vitae doloribus! Aliquam culpa voluptatem modi, temporibus nam similique?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, porro totam? Id libero ratione, rerum qui eos assumenda repellat quam saepe vitae doloribus! Aliquam culpa voluptatem modi, temporibus nam similique?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, porro totam? Id libero ratione, rerum qui eos assumenda repellat quam saepe vitae doloribus! Aliquam culpa voluptatem modi, temporibus nam similique?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, porro totam? Id libero ratione, rerum qui eos assumenda repellat quam saepe vitae doloribus! Aliquam culpa voluptatem modi, temporibus nam similique?</p>
        </main>
        <footer>
            <!-- Form -->
            <div class="form" v-if="canAddComment">
                <app-comment-form
                    @created='createCommentHandler'
                />
            </div>
            <!-- Comments -->
            <div class="comments" v-if="true">
                <app-comment
                v-for="comment in 4"
                :key="comment"
                :comment="comment"
                />
            </div>
            <div class="text-center" v-else>Комментариев нет</div>

        </footer>
    </article>
</template>

<script>
import appComment from '@/components/main/comment.vue'
import appCommentForm from '@/components/main/commentForm.vue'
export default {
    validate({params}) {
        return Boolean(params.id)
    },
    components: {
        appComment,
        appCommentForm
    },
    data: () => ({
        canAddComment: true
    }),
    methods: {
        createCommentHandler() {
            this.canAddComment = false
        }
    }
}
</script>

<style lang="scss" scoped>
    .post {
        max-width: 600px;
        margin: 0 auto;
    }
    .post-title {
        display: flex;
        align-content: center;
        justify-content: space-between;
        margin-bottom: 1rem;
    }
    .post-info {
        display: flex;
        align-content: center;
        justify-content: space-between;
        margin-bottom: 1rem;
    }
    .post-image {
        width: 100%;
        height: auto;
        img {
            width: 100%;
        }
    }
    .post-header {
        margin-bottom: 1.5rem;
    }
    .post-content {
        margin-bottom: 2rem;
    }
</style>