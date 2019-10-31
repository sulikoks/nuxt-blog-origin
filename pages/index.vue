<template>
  <section>
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="18" :md="16" :lg="14">
        <app-post 
          v-for="post in 2"
          :key="post"
         />
      </el-col>
    </el-row>
  </section>
</template>

<script>
import appPost from '@/components/main/post.vue'
export default {
  head: {
    title: 'Главная'
  },
  components: {
    appPost
  }
}
</script>

<style>
</style>
