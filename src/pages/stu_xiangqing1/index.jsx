import React, { Component } from 'react'
import Taro,{ getCurrentInstance } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.less'
import bg1 from '../../assets/main/bg1.png'
import bg2 from '../../assets/main/bg2.png'
import shijian from '../../assets/main/shijian.png'
import dizhi from '../../assets/main/address.png'
import yonghu from '../../assets/main/yonghu.png'
import dianhua from '../../assets/main/dianhua.png'
import touxiang from '../../assets/main/touxiang.jpg'
import {Fetch} from '../../service/fetch';

export default class Xiangqing1 extends Component {

  // 获取本页活动详情数据
  constructor() {
    super(...arguments);
    this.state = {
      activity: [],
    };
  }
  // state={
  //   activity: ''
  //   // activity: {title:'',address:'',beginTime:'',endTime:'',num:'',count:'',content:''},
  // }
  componentDidMount() {
    const params = getCurrentInstance()
    const id = params.router.params
    const activity_id = id.id
    console.log(activity_id)
    Fetch(
      `/service/student/service/query/orService/${activity_id}`,//获取本页活动详情数据
      {
        sid: activity_id
      },
      'POST'
    )
    .then(res=>{
        console.log('kk')
        console.log(res)
        this.setState({
          activity: res.activity,
          title: res.activity.title,
          address: res.activity.address,
          beginTime: res.activity.beginTime,
          endTime: res.activity.endTime,
          content: res.activity.content,
          count: res.activity.count,
          num: res.activity.num,
          id: res.activity.id,
          icon: res.activity.icon
      })
    })
   }


  toBaoming=(id,title,icon)=>{
    Taro.setStorage({
      key: 'title',
      data: title
    });
    Taro.setStorage({
      key: 'icon',
      data: icon
    });
    Taro.navigateTo({
      url:'/pages/baoming/index?id='+id
    })
    return 1
  }

  render() {
    const activity = this.state
    const title = activity.title
    const address = activity.address
    const beginTime = activity.beginTime
    const endTime = activity.endTime
    const content = activity.content
    const count = activity.count
    const num = activity.num
    const id = activity.id
    const icon = activity.icon
    return (
      <View className='main_container'>
        <View className="activity_image">
          {/* 接口 从上一页拿id，加载本页数据*/}
          <View className="activity_absoluted">公益助老活动</View>
          <Image src={icon} alt=''></Image>
          {/* <View className="activity_absoluted">活动报名中</View> */}
          <View className="buwei"></View>
        </View>
        <View className="activity_info">
          <View className='activity_title'>{title}</View>
          <View className='activity_text'><Image src={shijian} alt=''></Image>活动时间：{beginTime}-{endTime}</View>
          <View className='activity_text'><Image src={yonghu} alt=''></Image>招募人数：{count}/{num}</View>
          <View className='activity_text'><Image src={dizhi} alt=''></Image>活动地点：{address}</View>
        </View>
        <View className='lianxi'>
          <View><Image src={touxiang} alt='' className='touxiang'></Image>华中师范大学社区</View>
          <View><Image src={dianhua} alt=''></Image></View>
        </View>
        <View className='content'>
          <View className='content_title'>活动详情</View>
          <View className='content_box'>
            <View className='content_text'>
              {content}
            </View>
          </View>
        </View>
        <View className='content tip'>
          <View className='content_title'>温馨提示</View>
          <View className='content_box'>
            <View className='content_text'>
              本活动由组织方发起，并已承诺该活动为非营利性活动。平台方未委托授权任何公司或个人收取手续费、服务费等各类费用，请勿轻信非官方渠道的虚假信息。
            </View>
          </View>
        </View>
        <View className='kongbai'></View>
        <View className='bottom'>
          <View className='bottom_button' onClick={()=>this.toBaoming(id,title,icon)}>在线报名</View>
        </View>
      </View>



    )
  }
}