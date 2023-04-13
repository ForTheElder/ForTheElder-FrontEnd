import { View,Image } from '@tarojs/components'
import React, { useEffect, useState } from 'react'
import './index.less'
import defaultLogo from '../../assets/organization/orglogo.png'
import defaultImg from '../../assets/organization/orgimg.png'
import { getData } from '../../service/fetch'

export default function OrgMessage() {

    const [message,setMessage] = useState({})

    useEffect(() => {
        getData('/organization/organization/query').then(
            data => {
                console.log(data.organizationDTO)
                setMessage(data.organizationDTO)
            }
        )
    },[])

    return (
        <View className='OrgMsg'>
            <View className='orgname'>组织名称：{message.name}</View>
            <View className='orglogo'>
                <View className='text'>组织LOGO</View>
                {message.logo?<Image src={message.logo} style='width:60px;height:60px;margin:16px 0;'></Image>:<Image src={defaultLogo} style='width:60px;height:60px;margin:16px 0;'></Image>}
            </View>
            <View className='orgimg'>
                <View className='text'>组织图片</View>
                {message?<Image src={defaultImg} style='width:100%;height:60px;margin:16px 0;'></Image>:<Image src={defaultImg} style='width:100%;height:60px;margin:16px 0;'></Image>}
            </View>
            <View className='orgtel'>联系电话：{message.phone}</View>
            <View className='orgintro'>
                <View className='text'>组织简要描述：</View>
                <View className='intro'>{message.brief}</View>
            </View>
        </View>
    )
}
