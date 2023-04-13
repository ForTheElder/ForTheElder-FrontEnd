import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, } from '@tarojs/components'
import './index.less'
import org from '../../assets/organization/org.png'
import arrow from '../../assets/organization/arrow.png'
import member from '../../assets/organization/member.png'
import message from '../../assets/organization/message.png'
import activity from '../../assets/organization/activity.png'

export default class Organization extends Component {

    toOrgmember() {
        Taro.navigateTo({ url: '/pages/orglist/index' })
    }
    toOrgactivity() {
        Taro.navigateTo({ url: '/pages/orgfound/index' })
    }
    toOrgmessage() {
        Taro.navigateTo({ url: '/pages/orgmessage/index' })
    }
    
    render() {
        return (
            <View className='wrapper-org'>
                <Image src={org} style='width:100%;height:180px' />
                <View className='menu'>
                    <View className='member' onClick={this.toOrgmember.bind(this)}>
                        <View className='box'>
                            <Image src={member} style='height:40px;width:40px;margin-top:6px' />
                            <View className='text'>组织列表</View>
                        </View>
                        <Image src={arrow} style='height:40px;width:40px;margin-top:6px' />
                    </View>
                    <View className='message' onClick={this.toOrgmessage.bind(this)}>
                        <View className='box'>
                            <Image src={message} style='height:40px;width:40px;margin-top:6px' />
                            <View className='text'>组织信息</View>
                        </View>
                        <Image src={arrow} style='height:40px;width:40px;margin-top:6px' />
                    </View>
                    <View className='activity' onClick={this.toOrgactivity.bind(this)}>
                        <View className='box'>
                            <Image src={activity} style='height:40px;width:40px;margin-top:6px' />
                            <View className='text'>创建组织</View>
                        </View>
                        <Image src={arrow} style='height:40px;width:40px;margin-top:6px' />
                    </View>
                </View>
            </View>
        )
    }
}