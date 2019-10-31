<template>
    <div class="admin-wrap">
        <el-container :style="{height: '100%'}">
            <el-aside width="250px">
                <app-aside

                />
            </el-aside>
            <el-main>
                <nuxt/>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import appAside from '@/components/admin/aside'
export default {
    components: {
        appAside
    }
}
</script>

<style lang="scss" scoped>
    .admin-wrap {
        height: 100vh;
        width: 100%;
    }
</style>