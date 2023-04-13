import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, Button} from '@tarojs/components'
import './index.less'
import suo from '../../assets/call/suoxiao.png'
import tou from '../../assets/call/tou.png'
import one from '../../assets/call/huatong.svg'
import two from '../../assets/call/call.png'
import three from '../../assets/call/tingtong.png'


export default class Call extends Component {

  render() {
    return (
        <View className='call_bg'>
            <View className='top'>
                <View className='bb1'><Image src={suo} alt=''></Image></View>
                <View className='bb2'>拨号中···</View>
                <View className='bb3'></View>
            </View>
            <View className='middle'>
                <Image src={tou} alt='' className='call_tou'></Image>
                <View className='text'>华师社区负责人</View>
            </View>
            <View className='bottom'>
                <View className='box1'>
                    <Image src={one} alt='' className=''></Image>
                    <View className='text'>麦克风已开</View>
                </View>
                <View className='box2'>
                    <Image src={two} alt='' className=''></Image>
                    <View className='text'>挂断</View>
                </View>
                <View className='box3'>
                    <Image src={three} alt='' className=''></Image>
                    <View className='text'>扬声器已关</View>
                </View>
            </View>
        </View>

    )
  }
}