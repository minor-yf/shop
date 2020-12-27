<template>
<div>
    <Divider orientation="left" style="font-weight:bold;">精选好物</Divider>
    <div style="float:left;">
        <img src="@/assets/5.jpg" alt="" width="200px" height="20%"> 
    </div>
    <div style="float:left;display:flex" v-for="(item,i) in itemList" :key="i">
        <div v-if=" i%2 == 0">

            <Card class="cards">
                <div style="text-align:center"  @click="iteminfo(item.imgurl)">
                    <img :src="require('@/assets/'+item.imgurl+'.jpg')" class="images">
                    <h3>{{item.desc}}</h3>
                </div>
            </Card>

            <Card class="cards">
                <div style="text-align:center" @click="iteminfo(item.imgurl+1)"> 
                    <img :src="require('@/assets/'+(item.imgurl+1)+'.jpg')" alt="" class="images">
                    <h3>{{itemList[i+1].desc}}</h3>
                </div>
            </Card>
        </div>
        
    </div>
</div>
</template>

<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                itemList:[]
            }
        },
        methods: {
            iteminfo(nums){
                this.$router.push({path:'/home/itembody',query: {num:nums}})
            }
        },
        created(){
            axios.post('/getItem','精选好物').then(res => {
                this.itemList=res.data.data
            })
        }
    }
</script>

<style scoped>
    .cards{
    width:300px;
    height:260px;
    margin:0 5px 10px 5px;
    }
    .images{
        width:70%;
        height:30%;
    }
</style>