<template>
<div>
    <Table :columns="columns" :data="data1" style="margin:0% 5%" border/>
    <div class="car">
        <Checkbox v-model="allselect" style="margin-left:10px" @on-change="getAll()"/>
        <span>全选</span>
        <a style="color:#000;margin-left:20px" @click="clearCart()">清空购物车</a>

        <button class="paytype" @click="payCart()">去结算</button>
        <span class="allchoose">已选 {{isselect}} 件商品，合计  ￥ {{sum}}元</span>

    </div>
</div>
</template>

<script>
export default {
    
    name: 'ShoppingCart',

    data () {
        return {
            allselect:false,
            columns:[
            {
                title:'选择',
                key:'choose',
                render:(h,params) =>{
                    return h('checkbox',{
                        props:{
                            value:params.row.isact
                        },
                        on:{
                            'on-change':()=>{
                                params.row.isact = !params.row.isact
                                this.getSum(params.row)
                            }
                        }
                    })
                },
                width:'100px'
            },{
                title:'商品信息',
                key:'image',
                render:(h,params) =>{
                    return h('img',{
                        attrs:{
                                src:require('@/assets/'+(params.row.url)+'.jpg'),
                                style:'width:160px;height:160px;margin:20px 0px'
                        }
                    })
                },
                width:'200px'
            },{
                title:'类型',
                key:'type',
                render:(h,params) => {
                    return h('span',{},params.row.type)
                }
            },{
                title:'颜色',
                key:'color',
                render:(h,params) => {
                    return h('span',{},params.row.color)
                }
            },{
                title:'单价',
                key:'prices',
                render:(h,params) => {
                    return h('span',{},'￥'+params.row.prices)
                }
            },{
                title:'数量',
                key:'number',
                render:(h,params) => {
                    return h('div',[
                        h('i-button',{
                            on:{
                                click:()=>{
                                    this.btnMinute(params.row.url)
                                }
                            }
                        },'-'),
                        h('i-input',{
                            props:{
                                type:'text',
                                value:params.row.number
                            },
                            attrs:{
                                style:'width:35px'
                            }
                        }),
                        h('i-button',{
                            on:{
                                click:()=>{
                                    this.btnAdd(params.row.url)
                                }
                            }
                        },'+'),                        
                    ])
                }
            },{
                title:'总价',
                key:'money',
                render:(h,params) => {
                    return h('span',{},'￥'+params.row.prices*params.row.number)
                }
            },{
                title:'操作',
                key:'operate',
                render:(h,params) => {
                    return h('a',{
                        on:{
                            click:()=>{
                                this.deleteitem(params.row)
                            }
                        }
                    },'删除')
                }
            }],
        data1:[]
        }
    },
    computed:{
        sum(){
            let sum = 0
            for (let i = 0; i < this.data1.length; i++) {
                if(this.data1[i].isact == true){
                    sum = sum + this.data1[i].prices * this.data1[i].number
                }
            }
            return sum
        },
        isselect(){
            let num = 0
            for (let i = 0; i < this.data1.length; i++) {
                if(this.data1[i].isact == true){
                    num = num + 1
                }
            }
            return num
        }
    },
    methods: {
        deleteitem(id){
            const list = JSON.parse(localStorage.getItem("cart"||"[]"))
            const newlist = []
            for (let i = 0; i < list.length; i++) {
                if(list[i].url != id.url || list[i].color != id.color || list[i].type != id.type){
                    newlist.push(list[i])  
                }
            }
            this.allselect=false
            localStorage.setItem("cart", JSON.stringify(newlist));
            this.data1=JSON.parse(localStorage.getItem("cart") || "[]")
            this.$Message.success({
                content: '删除成功',
                duration: 2,
                closable: true
            })
        },
        getSum(id){
            for (let i = 0; i < this.data1.length; i++) {
                if(this.data1[i].url == id.url && this.data1[i].color == id.color &&this.data1[i].type == id.type){
                    this.data1[i].isact = !this.data1[i].isact
                }  
            }
        },
        getAll(){
            for (let i = 0; i < this.data1.length; i++) {
                this.data1[i].isact = this.allselect
            }
        },
        clearCart(){
            localStorage.removeItem('cart')
            this.data1=JSON.parse(localStorage.getItem("cart") || "[]")
        },
        payCart(){
            let username=localStorage.getItem("username")
            if(username == null){
                this.$Message.error({
                    content: '您没有登录',
                    duration: 2,
                    closable: true
                })
            }
            else if(this.sum==0){
                this.$Message.error({
                    content: '您没有选择东西',
                    duration: 2,
                    closable: true
                })
            }
            else{
                const newlist = []
                for (let i = 0; i < this.data1.length; i++) {
                    if(this.data1[i].isact==false)
                    newlist.push(this.data1[i])  
                }
                this.$Message.success({
                    content: '购买成功',
                    duration: 10,
                    closable: true
                })
                this.allselect=false
                localStorage.setItem("cart", JSON.stringify(newlist));
                this.data1=JSON.parse(localStorage.getItem("cart") || "[]")
            }
        },
        btnAdd (id) {
            for (let i = 0; i < this.data1.length; i++) {
                if(this.data1[i].url == id){
                    this.data1[i].number++
                }   
            }
            localStorage.setItem("cart", JSON.stringify(this.data1));
        },
        btnMinute (id) {
            for (let i = 0; i < this.data1.length; i++) {
                if(this.data1[i].url == id){
                    if(this.data1[i].number>1){
                        this.data1[i].number--
                    }
                    
                }   
            }
            localStorage.setItem("cart", JSON.stringify(this.data1));
        },

    },
    created(){
        let cartdata=JSON.parse(localStorage.getItem("cart") || "[]")
        let username=localStorage.getItem("username")
        for (let i = 0; i < cartdata.length; i++) {
            if(cartdata[i].username == username){
                this.data1.push(cartdata[i])
            } 
        }
    }
}
</script>

<style scoped>
    .car{
        height:50px;
        width:100%;
        background:#eee;
        margin:0% 5%;
        line-height:50px;
        font-size:16px;
        text-align:left;
        padding-left:10px;
        margin-top:10px;
    }
    .paytype{
        height:50px;
        width:100px;
        background:red;
        float:right;
        border:none;
        color:#fff;
    }
    .allchoose{
        float:right;
        padding-right:20px;
    }
</style>