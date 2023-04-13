import { View,Image } from '@tarojs/components'
import React, { useState,useEffect } from 'react'
import './index.less'
import defaultLogo from '../../assets/organization/orglogo.png'
import defaultImg from '../../assets/organization/orgimg.png'
import { getData } from '../../service/fetch';

export default function OrgList() {

    const [orgs,setOrgs] = useState([])

    useEffect(() => {
        getData(`/organization/organization/list/${1}`).then(
            data => {
                console.log(data.organizationList)
                setOrgs(data.organizationList)
            }
        )
    },[])

    return (
    <View className='OrgList'>
        {
            orgs.map(org => 
            <View className='OrgMsg' key={org.id}>
                <View className='orgname'>组织名称：{org.name}</View>
                <View className='orglogo'>
                    <View className='text'>组织LOGO</View>
                    {org.logo?<Image src={org.logo} style='width:60px;height:60px;margin:16px 0;'></Image>:<Image src={defaultLogo} style='width:60px;height:60px;margin:16px 0;'></Image>}
                </View>
                <View className='orgimg'>
                    <View className='text'>组织图片</View>
                    {org.icon[0]?<Image src={org.icon[0]} style='width:100%;height:60px;margin:16px 0;'></Image>:<Image src={defaultImg} style='width:100%;height:60px;margin:16px 0;'></Image>}
                </View>
                <View className='orgtel'>联系电话：{org.phone}</View>
                <View className='orgintro'>
                    <View className='text'>组织简要描述：</View>
                    <View className='intro'>{org.brief}</View>
                </View>
            </View>
            )
        }
    </View>
    )
}
