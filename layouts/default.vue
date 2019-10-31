<template>
  <el-container>
    <el-header>
      <app-navigation />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer />
  </el-container>
</template>

<script>
import appNavigation from '@/components/main/navigation'

export default {
  components: {
    appNavigation
  }
}
</script>

<style>
</style>
