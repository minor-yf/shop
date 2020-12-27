import Mock from 'mockjs'

//模拟用户信息

Mock.mock('/user',/post|get/i,{
    'username':'chenghao',
    'password':'092218205'
})

//模拟主页数据

Mock.mock('/getItem',/post|get/i,function(option){
    if(option.body == '每日推荐'){
        return Mock.mock({
            data:[{
                'imgurl':100,
                'desc':'任天堂Switch 日版续航版主机NS体感游戏机'
            },{
                'imgurl':101,
                'desc':'佳能旅游单反照相机'
            },{
                'imgurl':102,
                'desc':'搜狗录音笔'
            },{
                'imgurl':103,
                'desc':'现货Apple/苹果 Airpods2代无限蓝牙耳机'
            },{
                'imgurl':104,
                'desc':'OPPOReno5 5G新品骁龙智能手机'
            },{
                'imgurl':105,
                'desc':'Huawei/华为 Mate 40 Pro 5G手机'
            },{
                'imgurl':106,
                'desc':'【现货速发】Apple/苹果 iPhone12ProMax 5G新品智能手机'
            },{
                'imgurl':107,
                'desc':'alienware外星人笔记本游戏本'
            }]
        })
    }

    if (option.body == '精选好物') {
        return Mock.mock({
            data:[{
                'imgurl':108,
                'desc':'国行2020新款Apple/苹果 MacBook Pro 13寸16寸笔记本电脑定制M1'
            },{
                'imgurl':109,
                'desc':'罗技无线蓝牙静音键盘套装键鼠'
            },{
                'imgurl':110,
                'desc':'EDIFIER/漫步者 W800BT无线蓝牙耳机'
            },{
                'imgurl':111,
                'desc':'小米AI音响小爱同学'
            },{
                'imgurl':112,
                'desc':'雷神新911黑武士10代i7电竞屏笔记本电脑'
            },{
                'imgurl':113,
                'desc':'【原封正品】2020新款Apple/苹果'
            },{
                'imgurl':114,
                'desc':'雷蛇少女电竞游戏RGB背光机械键盘'
            },{
                'imgurl':115,
                'desc':'Apple/苹果 AppleWatch SE苹果手表'
            }]  
        })
    }
})
//模拟详情页数据
Mock.mock('/getItemInfo',/post|get/i,function(option){
    //简介 优惠 价格 原价 颜色 类别 月销量 累计销量 累计评价 商品图片

    if (option.body == 100) {
        return Mock.mock({
            itemDesc:'任天堂Switch 日版续航版主机NS体感游戏机',
            itemDiscount :'直降200元!',
            itemPrice:2299,
            itemFullPrice:2499,
            itemColor:[{name:'红蓝'},{name:'灰色'}],
            itemType:[{name:'套餐1'},{name:'套餐2'}],
            sales:'6290',
            fullSales:'37894',
            fullPL:'31862',
            itemImg:[{
                'imgurl':'00',
            },{
                'imgurl':'01',
            },{
                'imgurl':'02',
            },{
                'imgurl':'03',
            },{
                'imgurl':'04',
            },{
                'imgurl':'05',
            },{
                'imgurl':'06',
            }]
        })
    }

    if (option.body == 101) {
        return Mock.mock({
            itemDesc:'佳能旅游单反照相机',
            itemDiscount :'直降1100元!',
            itemPrice:24899,
            itemFullPrice:25999,
            itemColor:[{name:'白色'},{name:'黑色'}],
            itemType:[{name:'套餐1'},{name:'套餐2'}],
            sales:'690',
            fullSales:'7894',
            fullPL:'31862',
            itemImg:[{
                'imgurl':'10',
            },{
                'imgurl':'11',
            },{
                'imgurl':'12',
            },{
                'imgurl':'13',
            },{
                'imgurl':'14',
            },{
                'imgurl':'15',
            },{
                'imgurl':'16',
            }]
        })
    }

    if (option.body == 102) {
        return Mock.mock({
            itemDesc:'搜狗录音笔',
            itemDiscount :'直降80元!',
            itemPrice:318,
            itemFullPrice:398,
            itemColor:[{name:'白色'},{name:'红色'},{name:'黑色'},{name:'蓝色'},{name:'黄色'}],
            itemType:[{name:'套餐1'},{name:'套餐2'}],
            sales:'690',
            fullSales:'6864',
            fullPL:'31862',
            itemImg:[{
                'imgurl':'20',
            },{
                'imgurl':'21',
            },{
                'imgurl':'22',
            },{
                'imgurl':'23',
            },{
                'imgurl':'24',
            },{
                'imgurl':'25',
            },{
                'imgurl':'26',
            }]
        })
    }

    if (option.body == 103) {
        return Mock.mock({
            itemDesc:'现货Apple/苹果 Airpods2代无限蓝牙耳机',
            itemDiscount :'直降100元!',
            itemPrice:848,
            itemFullPrice:948,
            itemColor:[{name:'白色'}],
            itemType:[{name:'套餐1'},{name:'套餐2'}],
            sales:'5690',
            fullSales:'67864',
            fullPL:'41862',
            itemImg:[{
                'imgurl':'30',
            },{
                'imgurl':'31',
            },{
                'imgurl':'32',
            },{
                'imgurl':'33',
            },{
                'imgurl':'34',
            },{
                'imgurl':'35',
            }]
        })
    }

    if (option.body == 104) {
        return Mock.mock({
            itemDesc:'OPPOReno5 5G新品骁龙智能手机',
            itemDiscount :'直降200元!',
            itemPrice:2699,
            itemFullPrice:2899,
            itemColor:[{name:'黑色'},{name:'蓝色'},{name:'粉色'}],
            itemType:[{name:'套餐1'},{name:'套餐2'}],
            sales:'2290',
            fullSales:'19864',
            fullPL:'47862',
            itemImg:[{
                'imgurl':'39',
            },{
                'imgurl':'40',
            },{
                'imgurl':'41',
            },{
                'imgurl':'42',
            },{
                'imgurl':'43',
            },{
                'imgurl':'44',
            },{
                'imgurl':'45',
            },{
                'imgurl':'46',
            },{
                'imgurl':'47',
            },{
                'imgurl':'48',
            }]
        })
    }

    if (option.body == 105) {
        return Mock.mock({
            itemDesc:'Huawei/华为 Mate 40 Pro 5G手机',
            itemDiscount :'直降500元!',
            itemPrice:7299,
            itemFullPrice:7799,
            itemColor:[{name:'黑色'},{name:'蓝色'},{name:'橙色'},{name:'粉色'}],
            itemType:[{name:'套餐1'},{name:'套餐2'},{name:'套餐3'}],
            sales:'8790',
            fullSales:'29864',
            fullPL:'57862',
            itemImg:[{
                'imgurl':'49',
            },{
                'imgurl':'50',
            },{
                'imgurl':'51',
            },{
                'imgurl':'52',
            },{
                'imgurl':'53',
            },{
                'imgurl':'54',
            },{
                'imgurl':'55',
            },{
                'imgurl':'56',
            },{
                'imgurl':'57',
            },{
                'imgurl':'58',
            },{
                'imgurl':'59',
            }]
        })
    }

    if (option.body == 106) {
        return Mock.mock({
            itemDesc:'【现货速发】Apple/苹果 iPhone12ProMax 5G新品智能手机',
            itemDiscount :'直降400元!',
            itemPrice:9699,
            itemFullPrice:10099,
            itemColor:[{name:'金色'},{name:'银色'},{name:'石墨色'},{name:'海蓝色'}],
            itemType:[{name:'套餐1'},{name:'套餐2'},{name:'套餐3'}],
            sales:'4590',
            fullSales:'54364',
            fullPL:'54442',
            itemImg:[{
                'imgurl':'60',
            },{
                'imgurl':'61',
            },{
                'imgurl':'62',
            },{
                'imgurl':'63',
            },{
                'imgurl':'64',
            }]
        })
    }

    if (option.body == 107) {
        return Mock.mock({
            itemDesc:'alienware外星人笔记本游戏本',
            itemDiscount :'直降2000元!',
            itemPrice:28999,
            itemFullPrice:30999,
            itemColor:[{name:'白色'},{name:'黑色'},{name:'灰色'}],
            itemType:[{name:'套餐1'},{name:'套餐2'},{name:'套餐3'}],
            sales:'3490',
            fullSales:'9833',
            fullPL:'8332',
            itemImg:[{
                'imgurl':'70',
            },{
                'imgurl':'71',
            },{
                'imgurl':'72',
            },{
                'imgurl':'73',
            },{
                'imgurl':'74',
            },{
                'imgurl':'75',
            },{
                'imgurl':'76',
            },{
                'imgurl':'77',
            }]
        })
    }

    if (option.body == 108) {
        return Mock.mock({
            itemDesc:'国行2020新款Apple/苹果 MacBook Pro 13寸16寸笔记本电脑定制M1',
            itemDiscount :'直降1100元!',
            itemPrice:8635,
            itemFullPrice:9735,
            itemColor:[{name:'白色'},{name:'黑色'},{name:'灰色'}],
            itemType:[{name:'套餐1'},{name:'套餐2'},{name:'套餐3'}],
            sales:'1120',
            fullSales:'5345',
            fullPL:'11232',
            itemImg:[{
                'imgurl':'80',
            },{
                'imgurl':'81',
            },{
                'imgurl':'82',
            },{
                'imgurl':'83',
            },{
                'imgurl':'84',
            },{
                'imgurl':'85',
            }]
        })
    }

    if (option.body == 109) {
        return Mock.mock({
            itemDesc:'罗技无线蓝牙静音键盘套装键鼠',
            itemDiscount :'直降10元!',
            itemPrice:179,
            itemFullPrice:189,
            itemColor:[{name:'粉色'},{name:'黑色'}],
            itemType:[{name:'套餐1'},{name:'套餐2'},{name:'套餐3'}],
            sales:'10',
            fullSales:'535',
            fullPL:'132',
            itemImg:[{
                'imgurl':'89',
            },{
                'imgurl':'90',
            },{
                'imgurl':'91',
            },{
                'imgurl':'92',
            },{
                'imgurl':'93',
            },{
                'imgurl':'94',
            },{
                'imgurl':'95',
            },{
                'imgurl':'96',
            },{
                'imgurl':'97',
            },{
                'imgurl':'98',
            },{
                'imgurl':'99',
            }]
        })
    }

    if (option.body == 110) {
        return Mock.mock({
            itemDesc:'EDIFIER/漫步者 W800BT无线蓝牙耳机',
            itemDiscount :'直降10元!',
            itemPrice:289,
            itemFullPrice:299,
            itemColor:[{name:'粉色'},{name:'黑色'},{name:'蓝色'},{name:'橘色'}],
            itemType:[{name:'套餐1'},{name:'套餐2'},{name:'套餐3'}],
            sales:'1012',
            fullSales:'5125',
            fullPL:'1322',
            itemImg:[{
                'imgurl':'100',
            },{
                'imgurl':'101',
            },{
                'imgurl':'102',
            },{
                'imgurl':'103',
            },{
                'imgurl':'104',
            },{
                'imgurl':'105',
            },{
                'imgurl':'106',
            }]
        })
    }

    if (option.body == 111) {
        return Mock.mock({
            itemDesc:'小米AI音响小爱同学',
            itemDiscount :'直降40元!',
            itemPrice:209,
            itemFullPrice:249,
            itemColor:[{name:'白色'}],
            itemType:[{name:'套餐1'},{name:'套餐2'},{name:'套餐3'}],
            sales:'11223',
            fullSales:'53232',
            fullPL:'23542',
            itemImg:[{
                'imgurl':'110',
            },{
                'imgurl':'111',
            },{
                'imgurl':'112',
            },{
                'imgurl':'113',
            },{
                'imgurl':'114',
            },{
                'imgurl':'115',
            },{
                'imgurl':'116',
            },{
                'imgurl':'117',
            },{
                'imgurl':'118',
            },{
                'imgurl':'119',
            }]
        })
    }

    if (option.body == 112) {
        return Mock.mock({
            itemDesc:'雷神新911黑武士10代i7电竞屏笔记本电脑',
            itemDiscount :'直降600元!',
            itemPrice:6799,
            itemFullPrice:7399,
            itemColor:[{name:'白色'},{name:'黑色'}],
            itemType:[{name:'套餐1'},{name:'套餐2'},{name:'套餐3'}],
            sales:'1123',
            fullSales:'52325',
            fullPL:'6542',
            itemImg:[{
                'imgurl':'120',
            },{
                'imgurl':'121',
            },{
                'imgurl':'122',
            },{
                'imgurl':'123',
            },{
                'imgurl':'124',
            },{
                'imgurl':'125',
            }]
        })
    }

    if (option.body == 113) {
        return Mock.mock({
            itemDesc:'【原封正品】2020新款Apple/苹果 10.2英寸iPad平板电脑ipad8便携式掌上电脑128G支持Apple Pencil和智能键盘',
            itemDiscount :'直降200元!',
            itemPrice:6799,
            itemFullPrice:6999,
            itemColor:[{name:'白色'},{name:'黑色'},{name:'灰色'}],
            itemType:[{name:'套餐1'},{name:'套餐2'},{name:'套餐3'}],
            sales:'120',
            fullSales:'5366',
            fullPL:'1100',
            itemImg:[{
                'imgurl':'130',
            },{
                'imgurl':'131',
            },{
                'imgurl':'132',
            },{
                'imgurl':'133',
            },{
                'imgurl':'134',
            },{
                'imgurl':'135',
            },{
                'imgurl':'136',
            },{
                'imgurl':'137',
            },{
                'imgurl':'138',
            },{
                'imgurl':'139',
            }]
        })
    }

    if (option.body == 114) {
        return Mock.mock({
            itemDesc:'雷蛇少女电竞游戏RGB背光机械键盘',
            itemDiscount :'直降230元!',
            itemPrice:869,
            itemFullPrice:1099,
            itemColor:[{name:'粉色'},{name:'黑色'},{name:'白色'}],
            itemType:[{name:'套餐1'},{name:'套餐2'},{name:'套餐3'}],
            sales:'873',
            fullSales:'9236',
            fullPL:'2310',
            itemImg:[{
                'imgurl':'140',
            },{
                'imgurl':'141',
            },{
                'imgurl':'142',
            },{
                'imgurl':'143',
            },{
                'imgurl':'144',
            },{
                'imgurl':'145',
            },]
        })
    }

    if (option.body == 115) {
        return Mock.mock({
            itemDesc:'Apple/苹果 AppleWatch SE苹果手表',
            itemDiscount :'直降300元!',
            itemPrice:2499,
            itemFullPrice:2799,
            itemColor:[{name:'白色'},{name:'黑色'},{name:'灰色'},{name:'粉色'}],
            itemType:[{name:'套餐1'},{name:'套餐2'},{name:'套餐3'}],
            sales:'2120',
            fullSales:'53226',
            fullPL:'113122',
            itemImg:[{
                'imgurl':'150',
            },{
                'imgurl':'151',
            },{
                'imgurl':'152',
            },{
                'imgurl':'153',
            },{
                'imgurl':'154',
            },{
                'imgurl':'155',
            },{
                'imgurl':'156',
            }]
        })
    }

    return Mock.mock({
        itemDesc:'暂无数据',
        itemDiscount :'暂无数据',
        itemPrice:'暂无数据',
        itemFullPrice:'暂无数据',
        itemColor:[{name:'暂无存货'}],
        itemType:[{name:'暂无存货'}],
        sales:'???',
        fullSales:'???',
        fullPL:'???',
        itemImg:[]
    })
        
    
})