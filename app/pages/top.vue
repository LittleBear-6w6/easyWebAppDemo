<template>
    <section class="container top-page">
        <el-card>
            <div slot="header" class="clearfix">
                <span>管理情報</span>
            </div>
                <el-table
                    :data="showInfo"
                    style="width: 100%"
                    class="table"
                >
                <el-table-column
                    prop="name"
                    label="名前">
                </el-table-column>
                <el-table-column
                    prop="director"
                    label="役職">
                </el-table-column>
                <el-table-column
                    prop="remarks"
                    label="備考">
                </el-table-column>
            </el-table>
        </el-card>
    </section>
</template>

<script>
export default {
    computed:{
        showInfo(){
            return[
                {
                    id: '001',
                    name: 'テスト　太郎',
                    director: '管理者',
                    remarks: 'テストデータ1'
                },
                {
                    id: '002',
                    name: 'テスト　次郎',
                    director: '一般職',
                    remarks: 'テストデータ2'
                },
            ]
        }
    }
}
</script>

<style scoped>
.posts-page .el-table__row{
    cursor: pointer;
}
</style>