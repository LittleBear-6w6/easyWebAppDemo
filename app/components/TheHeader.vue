<template>
    <el-menu mode="horizontal" :router="true">
        <el-menu-item index="1" style="pointer-events:none;">
            Easy Web App Demo
        </el-menu-item>

        <no-ssr>
            <el-menu-item index="2" style="float: right;pointer-events:none;" v-if="user">
                <span>{{user.id}}</span>
            </el-menu-item>
            <el-menu-item index="2" style="float: right;" :route="{ path: '/' }" v-else>
                <span>ログイン</span>
            </el-menu-item>
        </no-ssr>
    </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters(['user'])
    }
}
</script>