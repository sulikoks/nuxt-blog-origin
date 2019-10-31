<template>
    <div class="empty">
        <el-card
            shadow="always"
            :style="{width: '500px'}"
        >
            <nuxt />
        </el-card>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .empty {
        display: flex;
        align-content: center;
        justify-content: center;
        margin-top: 5rem;
        
    }
</style>