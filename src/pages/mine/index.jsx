/* eslint-disable no-unused-vars */
import React, { Component }from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import mine_avatar from '../../assets/mine/mine_avatar.png'
import second from '../../assets/mine/information_avatar.png'
import first from '../../assets/mine/organization_detail.png'
import third from '../../assets/mine/information_detail.png'
import fourth from '../../assets/mine/help.png'
import back from '../../assets/mine/back.png'
import './index.less'

export default class Mine extends Component {

  show() {
    showToast('该功能暂未开放')
  }
  toEditInfo() {
    Taro.navigateTo({ url: '/pages/editInfo/index'})
  }
  
  
  render() {
    return (
      <View className='mine-container'>
        <View className='mine-head'>
          <View className='mine-avatar'>
            <Image className='mine-image' src={mine_avatar} style='width:76px;height:76px;'></Image>
          </View>
          <View className='mine-info'>
            <View className='mine-nickname'>樱桃小丸</View>
            <View className='mine-edit' onClick={this.toEditInfo.bind(this)}>点击编辑个人信息</View>
          </View>
        </View>
        <View className='mine-body'>
          <View className='mine-child'>
            <View className='mine-linebefore' onClick={this.show.bind(this)}>
              <View className='mine-line'><Image className='mine-image' src={first} style='width:44px;height:44px;border-radius=50%;'></Image></View>
              <View className='line-text'>申诉订单</View>
            </View>
            <View className='mine-lineback'><Image src={back} style='width:16px;height:22px;'></Image></View>
          </View>
          <View className='mine-child'>
            <View className='mine-linebefore' onClick={this.show.bind(this)}>
              <View className='mine-line'><Image className='mine-image' src={second} style='width:44px;height:44px;'></Image></View>
              <View className='line-text'>我的课程</View>
            </View>
            <View className='mine-lineback'><Image src={back} style='width:16px;height:22px;'></Image></View>
          </View>
          <View className='mine-child'>
            <View className='mine-linebefore' onClick={this.show.bind(this)}>
              <View className='mine-line'><Image className='mine-image' src={third} style='width:44px;height:44px;'></Image></View>
              <View className='line-text'>我的邀请</View>
            </View>
            <View className='mine-lineback'><Image src={back} style='width:16px;height:22px;'></Image></View>
          </View>
          <View className='mine-child'>
            <View className='mine-linebefore' onClick={this.show.bind(this)}>
              <View className='mine-line'><Image className='mine-image' src={fourth} style='width:44px;height:44px;'></Image></View>
              <View className='line-text'>商家协议</View>
            </View>
            <View className='mine-lineback'><Image src={back} style='width:16px;height:22px;'></Image></View>
          </View>
        </View>
      </View>
    )
  }
}