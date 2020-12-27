<template>
<div>
  <div class="mainstyle">
    
    <pic-zoom :url="require('@/assets/'+(this.$route.query.num)+'.jpg')" :scale="3" class="descimg"></pic-zoom>
    
    <div class="descgoods">
      <h2>{{itemdesc}}</h2>
      <div class="descpoint">
        <div>
          <span>产品活动:</span>
          <span class="text1">{{itemDiscount}}</span>
        </div>
        <div>
          <span>活动价:</span>
          <span class="text2">￥{{itemPrice}}</span>
        </div>
        <div>
          <span>原价:</span>
          <span class="text3">￥{{itemFullPrice}}</span>
        </div>
      </div>
      <div class="distpicker">
        <span style="padding-top:10px;">配送至: </span>
        <v-distpicker province="江苏省" city="南通市" area="启东市" style="height:50px"></v-distpicker>
      </div>
      <div class="sales">
        <Row>
          <Col span="8">月销量：{{sales}} </Col>
          <Col span="8">累计销量：{{fullSales}} </Col>
          <Col span="8">累计评价：{{fullPL}} </Col>
        </Row>
      </div>
      <div>
        <div class="choosetype1">
          <div style="margin-top:5px">颜色：</div>
            <RadioGroup style="display:flex" v-model="itemColor">
              <div v-for="(item,i) in colorlist" :key="i">
                <Radio :label="item.name" border ></Radio>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div class="choosetype1"> 
          <div  style="margin-top:5px">类型：</div>
          <RadioGroup style="display:flex" v-model="itemType">
            <div v-for="(item,i) in typelist" :key="i">
              <Radio :label="item.name" border ></Radio>
            </div>
          </RadioGroup>
        </div>
          
        <div class="choosetype2">
          <div style="margin-top:5px">数量：</div>
          <div style="display:flex">    
            <Button @click="btnMinute">-</Button>
            <Input type="text" value="0"  v-model="count" style="width:35px;"/>
            <Button @click="btnAdd">+</Button>
          </div>
        </div>
        <button class="button1" @click="buyItem()">立即购买</button>
        <button class="button2" @click="addItem()">加入购物车</button>
      </div>
    </div>
    <div style="clear:both"></div>
    
    <Divider></Divider>

    <div class="end">

      <Tabs class="menu">
        
        <TabPane label="宝贝详情" name="name1">
          <div v-for="(item,i) in imglist" :key="i" style="margin:0;padding:0;">
            <img :src="require('@/assets/详情-'+item.imgurl+'.jpg')" alt="" style="width:90%">
          </div>
        </TabPane>

        <TabPane label="全部评价" name="name2">暂无数据</TabPane>
        <TabPane label="猜你喜欢" name="name3">暂无数据</TabPane>
      </Tabs>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import PicZoom  from 'vue-piczoom'
export default {
  name: 'ItemBody',
  data () {
    return {
      itemColor:'',
      itemdesc:'',
      itemDiscount :'',
      itemPrice:'',
      itemFullPrice:'',
      sales:'',
      fullSales:'',
      fullPL:'',
      count:1,
      stock:999,
      itemType:'',
      colorlist:[],
      typelist:[],
      imglist:[]
    }
  },
  components: {
    PicZoom,
  },
  methods: {
    btnAdd () {
      this.count++
    },
    btnMinute () {
      if(this.count>1)
      this.count--
    },
    buyItem(){
      this.$Message.success({
        background: true,
        content: '购买成功'
      });
    },
    addItem(){
      if(this.itemdesc != '暂无数据'){
        var templist = JSON.parse(localStorage.getItem("cart") || "[]");
        var username = localStorage.getItem("username")
        var flag = 1
        const item = {'url':this.$route.query.num,'desc':this.itemdesc,'prices':this.itemPrice,'number':this.count,'color':this.itemColor,'type':this.itemType,'isact':false,'username':username}
        if(item.type=='' || item.color==''){
          this.$Message.error({content: '没有选择类型或颜色',
          duration: 3,
          closable: true
          })
          flag=0;
        }
        else{
          for (let index = 0; index < templist.length; index++) {
            if(templist[index].url == item.url && templist[index].color == item.color && templist[index].type == item.type){
              templist[index].color = item.color
              templist[index].type = item.type
              templist[index].desc = item.desc
              templist[index].prices = item.prices
              templist[index].number += item.number
              flag = 0
              localStorage.setItem("cart", JSON.stringify(templist));
              this.$Message.success({
                content: '加入购物车成功！！！',
                duration: 2,
                closable: true
              })
            }
          }
        }

        if(flag == 1 ){
          templist.push(item)
          localStorage.setItem("cart", JSON.stringify(templist));
          this.$Message.success({
            content: '加入购物车成功！！！',
            // 3秒后关闭；可以关闭
            duration: 3,
            closable: true
          })
        }
      }
    }
  },
  created(){
    axios.post('/getItemInfo',this.$route.query.num).then(res => {
      this.itemdesc=res.data.itemDesc,
      this.itemDiscount=res.data.itemDiscount,
      this.itemPrice=res.data.itemPrice,
      this.itemFullPrice=res.data.itemFullPrice,
      this.sales=res.data.sales,
      this.fullSales=res.data.fullSales,
      this.fullPL=res.data.fullPL,
      this.imglist = res.data.itemImg
      this.colorlist = res.data.itemColor
      this.typelist = res.data.itemType
    })
  }
}
</script>

<style scoped>
  .mainstyle{
    margin-top:20px;
    width:100%;
  }
  .descimg{
    float:left;
    margin-left:100px;
    border:1px yellow solid;
    width:30%;
    height:30%;
  }
  .descgoods{
    text-align:left;
    padding:0 20px 20px 20px;
    float:left;
    width:60%;
  }
  .descpoint{
    background:#eee;
    height:150px;
    font-size:16px;
    font-weight:bold;
    line-height:50px;
    padding-left:20px;
  }
  .text1{
    color:red;
    margin-left:15px;
  }
  .text2{
    color:red;
    margin-left:28px;
  }
  .text3{
    color:red;
    margin-left:43px;
  }
  .distpicker{
    display:flex;
    padding-top:15px;
  }
  .sales{
    background:#eee;
    height:30px;
    text-align:center;
    padding-top:5px;
  }
  .choosetype1{
    display:flex;
    font-size:16px;
    margin:10px 0px;
  }
  .choosetype2{
    display:flex;
    font-size:16px;
    margin:10px 0px 30px 0px;
  }
  .button1{
    background:pink;
    width:160px;
    height:50px;
    border:1px red solid;
    color:red;
    font-size:16px;
    margin-left:50px;
  }
  .button2{
    background:red;
    width:160px;
    height:50px;
    border:none;
    color:#fff;
    font-size:16px;
    margin-left:20px;
  }
  .end{
    text-align:left;
    margin-left:100px;
    display:flex;
  }
  .menu{
    width:70%;
    border:1px #fff solid;
    margin:0 auto;
    padding:5px;
  }
</style>