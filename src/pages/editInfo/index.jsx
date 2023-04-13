/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import {Fetch} from '../../service/fetch'
// eslint-disable-next-line import/first
import { View ,Image} from '@tarojs/components'
import './index.less'
import avatar from '../../assets/editInfo/editAvatar.png'
import backinfo from '../../assets/editInfo/back.png'


export default function editInfo() {

    const [name,setName] = useState('老有所益')
    const [useravatar,setUserAvatar] = useState(avatar)
    const [sex,setSex] = useState('男') 
    const [tel,setTel] = useState('未绑定')
    const [wechat,setWechat] = useState('2433968569')

    useEffect(()=>{
        const res = Fetch('/user/info/query',{},'GET')
        const data = res.userInfo
        setName(data.name)
        setUserAvatar(data.avatar);
        setSex(data.sex)
        setTel(data.tel)
        setWechat(data.wechat);
    },[])

  return (
    <View className='edit-container'>
        <View className='edit-head'>
            <View className='edit-box'>
                <View><Image src={avatar} className='edit-avatar'></Image></View>
                <View className='edit-text'>点击更换头像</View>
            </View>
        </View>
        <View className='edit-body'>
            <View className='edit-line'>
                <View className='edit-title'>昵称</View>
                <View className='edit-else'>
                    <View className='edit-info'>{name}</View>
                    <View className='edit-back'><Image className='edit-img' src={backinfo}></Image></View>
                </View>
            </View>
            <View className='edit-line'>
                <View className='edit-title'>性别</View>
                <View className='edit-else'>
                    <View className='edit-info'>{sex}</View>
                    <View className='edit-back'><Image className='edit-img' src={backinfo}></Image></View>
                </View>
            </View>
            <View className='edit-line'>
                <View className='edit-title'>手机号</View>
                <View className='edit-else'>
                    <View className='edit-info'>{tel}</View>
                    <View className='edit-back'><Image className='edit-img' src={backinfo}></Image></View>
                </View>
            </View>
            <View className='edit-line'>
                <View className='edit-title'>微信</View>
                <View className='edit-else'>
                    <View className='edit-info'>{wechat}</View>
                    <View className='edit-back'><Image className='edit-img' src={backinfo}></Image></View>
                </View>
            </View>
        </View>
    </View>
    )
}
