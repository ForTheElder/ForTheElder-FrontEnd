import React, { Component, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Picker } from '@tarojs/components'
import './index.less'



export default function Xuzhi() {

  return (
    <View className='main_container'>
      <View className='xuzhi time'>更新日期：2019年7月12日</View>
      <View className='xuzhi time'>生效日期：2019年7月12日</View>
      <View className='xuzhi content'>引言：您的隐私信息对我们非常重要，我们希望您作为艺术者的用户充分了解我们的隐私政策并做出您的决定。本隐私政策描述了您使用艺术者的过程中，我们如何获取或者使用您的信息。本隐私政策是我们的用户协议的一部分。一旦您开始并继续使用我们服务，即代表您同意您的信息可以按照我们在用户协议和本隐私政策约定的内容被合理的收集、存储、分享和使用。请仔细阅读这份隐私政策，如果您对本条款有任何的疑义，您可以随时联系我们。个人信息在本条款中，“个人信息”指的是任何可以用来联系或者识别一个人的信息。当您注册艺术者帐号或者使用其他特定的艺术者服务时，您会被要求填写您的“个人信息</View>
    </View>
  )
}