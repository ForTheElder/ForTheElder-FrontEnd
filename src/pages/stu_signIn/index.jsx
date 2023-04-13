/* eslint-disable no-unused-vars */
import React from 'react'
import Taro from '@tarojs/taro'
import { View , Text, Input} from '@tarojs/components'
import './index.less'

export default function signIn() {
  return (
    <View className='signin-container'>
      <View className='signin-box'>
        <View className='signinbox-one'>
          请输入活动编码
        </View>
        <View className='signinbox-two'>
          <View className='signin-input'></View>
          <View className='signin-input'></View>
          <View className='signin-input'></View>
          <View className='signin-input'></View>
          <View className='signin-input'></View>
          <View className='signin-input'></View>
        </View>
        <View className='signinbox-three'>
          温馨提示
        </View>
        <View className='signinbox-four'>
          <View>1.活动编码由6位数字组成，由活动管理员活组织者告知</View>
          <View>2.活动编码请勿在公共场合、网络聊天等渠道公开传播</View>
        </View>
      </View>
    </View>
  )
}
