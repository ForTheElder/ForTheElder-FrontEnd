export default defineAppConfig({
  pages: [
    'pages/login/index',
    'pages/main/index',
    'pages/mine/index',
    'pages/order/index',
    'pages/push/index',
    'pages/call/index',
    'pages/deliver/index',
    'pages/editInfo/index',
    'pages/kj_deliver/index',
    'pages/organization/index',
    'pages/orgfound/index',
    'pages/orglist/index',
    'pages/orgmessage/index',
    'pages/stu_main/index',
    'pages/stu_mine/index',
    'pages/stu_signIn/index',
    'pages/stu_signSuccess/index',
    'pages/stu_xiangqing/index',
    'pages/stu_xiangqing1/index',
    'pages/stu_baoming/index',
    'pages/stu_xuzhi/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#CF1322',
    navigationBarTitleText: '年轮',
    navigationBarTextStyle: 'black',
    //navigationStyle:"custom",
  },
  
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: 'pages/main/index',
        text:'首页',
        iconPath: './assets/tab/home.png',
      },
      {
        pagePath: 'pages/order/index',
        text:'订单',
        iconPath: './assets/tab/sort.png',

      },
      {
        pagePath: 'pages/stu_mine/index',
        text:'我的',
        iconPath: './assets/tab/user.png',
      },
      {
        pagePath: 'pages/stu_main/index',
        text:'首页',
        iconPath: './assets/tab/home.png',
    },
    {
        pagePath: 'pages/stu_signIn/index',
        text:'签到',
        iconPath: './assets/tab/location.png',

    }
    ],
    color: "#000000",
    selectedColor: "#BD3124",
    backgroundColor: "#FFFFFF"
    
  }
})
