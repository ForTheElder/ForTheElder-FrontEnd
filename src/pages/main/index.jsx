import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.less'
import banner from '../../assets/main/banner.png'
import first from '../../assets/main/first.png'
import second from '../../assets/main/second.png'
import third from '../../assets/main/third.png'
import fourth from '../../assets/main/fourth.png'

export default class Main extends Component {

  toPush() {
    Taro.navigateTo({ url: '/pages/push/index' })
  }
  toCall() {
    Taro.navigateTo({ url: '/pages/call/index' })
  }
  toOrganization() {
    Taro.navigateTo({ url: '/pages/organization/index' })
  }
  toDeliver() {
    Taro.navigateTo({ url: '/pages/deliver/index' })
  }
  render() {
    return (
      <View className='main-container'>
        <View className='main-head'><Image className='banner-img' src={banner}></Image></View>
        <View className='main-body'>
          <View className='main-one'>
            <View className='main-line' onClick={this.toPush.bind(this)}>
              <View className='main-contain'><Image className='child-img' src={first}></Image></View>
              <View className='child-text'>快捷发布</View>
            </View>
            <View className='main-line' onClick={this.toCall.bind(this)}>
              <View className='main-contain'><Image className='child-img' src={second}></Image></View>
              <View className='child-text'>快捷通道</View>
            </View>
          </View>
          <View className='main-one'>
            <View className='main-line' onClick={this.toOrganization.bind(this)}>
              <View className='main-contain'><Image className='child-img' src={third}></Image></View>
              <View className='child-text'>组织管理</View>
            </View>
            <View className='main-line' onClick={this.toDeliver.bind(this)}>
              <View className='main-contain'><Image className='child-img' src={fourth}></Image></View>
              <View className='child-text'>自定义发布</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}