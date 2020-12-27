<template>
<div>
    <Menu mode="horizontal" :theme="theme1"   accordion style="padding-left:100px">
        <Submenu name="0">
            <template slot="title">
                数码分类
            </template>
            <MenuItem name="2-1">手机</MenuItem>
            <MenuItem name="2-2">平板电脑</MenuItem>
            <MenuItem name="2-3">游戏机</MenuItem>
            <MenuItem name="2-4">音箱</MenuItem>
            <MenuItem name="2-5">录音笔</MenuItem>
            <MenuItem name="2-6">电脑</MenuItem>
            <MenuItem name="2-7">键盘/鼠标</MenuItem>
        </Submenu>
        <MenuItem name="1">
            <router-link to="/home/homebody">首页</router-link>
        </MenuItem>
        <MenuItem name="2">
            秒杀
        </MenuItem>
        <MenuItem name="3">
            会员中心
        </MenuItem>
        <MenuItem name="4">
            全球购
        </MenuItem>
        <MenuItem name="5">
            联系客服
        </MenuItem>
    </Menu>
</div>
</template>
<script>
    export default {
        name: 'midmenu',
        data () {
            return {
                theme1: 'light'
            }
        }
    }
</script>
