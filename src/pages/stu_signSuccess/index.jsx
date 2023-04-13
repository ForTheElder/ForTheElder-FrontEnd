/* eslint-disable no-unused-vars */
import React from 'react'
import Taro from '@tarojs/taro'
import { View ,Text} from '@tarojs/components'
import './index.less'

export default function signSuccess() {
  return (
    <View className='success-container'>
        <View className='success-box'>
            <View className='signsuccess-one'></View>
            <View className='signsuccess-two'>恭喜您，签到成功</View>
            <View className='signsuccess-three'>报名活动号：001</View>
        </View>
    </View>
  )
}
