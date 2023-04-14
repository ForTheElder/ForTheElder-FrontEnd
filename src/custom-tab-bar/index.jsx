import React from 'react'
import Taro from '@tarojs/taro'
import { useState, useRef, useEffect } from 'react'
import { CoverView,CoverImage } from '@tarojs/components'
import './index.less'

export default function CustomTabBar() {

    const [type,setType] = useState('0')
    const [selected,setSelected] = useState(0)
    const [elder] = useState([
        {
            pagePath: 'pages/main/index',
            text:'首页',
            iconPath: '/assets/tab/home.png',
        },
        {
            pagePath: 'pages/order/index',
            text:'订单',
            iconPath: '/assets/tab/sort.png',
    
        },
        {
            pagePath: 'pages/stu_mine/index',
            text:'我的',
            iconPath: '/assets/tab/user.png',
        }
    ])

    const [student] = useState([
        {
            pagePath: 'pages/stu_main/index',
            text:'首页',
            iconPath: '/assets/tab/home.png',
        },
        {
            pagePath: 'pages/stu_signIn/index',
            text:'签到',
            iconPath: '/assets/tab/location.png',
    
        },
        {
            pagePath: 'pages/stu_mine/index',
            text:'我的',
            iconPath: '/assets/tab/user.png',
        }
    ])

    const [list,setList] = useState(elder)

    useEffect(() => {
        console.log('type',Taro.getStorageSync('type'))
        setType(Taro.getStorageSync('type'))
        if(Taro.getStorageSync('type') === '0'){
            setList(elder)
            console.log('elder')
        }else {
            setList(student)
            console.log('stu')
        }
    },[type])

    const changeSelected = (index) => {
        setSelected(index)
        Taro.switchTab({url:'/'+list[index].pagePath})
    }


    return (
        <CoverView className='bottom-tab'>
            {
                list.map((item,index) => 
                    <CoverView onClick={()=>changeSelected(index)} className='bottom-tab-item' key={`${item.text}`}>
                        <CoverImage className='bottom-tab-item-img'
                          src={item.iconPath} 
                        />
                        <CoverView 
                          className='bottom-tab-item-text'
                          style={{color: '#000000'}}
                        >
                            {item.text}
                        </CoverView>
                    </CoverView>    
                )
            }
        </CoverView>
    )
}
