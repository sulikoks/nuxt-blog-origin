<template>
    <nav>
        <el-row class="nav__row">
            <el-col class="nav__col" :xs="24" :sm="18" :md="16" :lg="14">
                <nuxt-link class="logo" to="/">
                    <h1>Sulo SSR Blog</h1>
                </nuxt-link>
                <nuxt-link class="btn" to="/login">
                    <el-button v-if="!isAuth">
                        <h4>Вход</h4>
                    </el-button>
                </nuxt-link>
                <div class="nav__isAuth" v-if="isAuth">
                    <nuxt-link class="btn" to="/">
                        <el-button>
                            <h4>Кабинет</h4>
                        </el-button>
                    </nuxt-link>
                    <nuxt-link class="btn" to="/">
                        <el-button>
                            <h4>Выйти</h4>
                        </el-button>
                    </nuxt-link>
                </div>
            </el-col>
        </el-row>
    </nav>
</template>

<script>
export default {
    data: () => ({
        isAuth: false
    })
}
</script>

<style lang="scss" scoped>
    nav {
        border-bottom: 1px solid #e6e6e6;
    }
    .nav__row {
        display: flex;
        justify-content: center;
    }
    .nav__col {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
    }
    .nav__isAuth {
        display: flex;
    }
    .logo {
        display: block;
        color: black;
        text-decoration: none;
        .btn {
            margin-left: 1em;   
        }
    }
</style>