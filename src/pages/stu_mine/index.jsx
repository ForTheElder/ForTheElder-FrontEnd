import React, { useState } from 'react'
import { View, Input, Image, Button, Picker, Textarea } from '@tarojs/components'
import Taro from '@tarojs/taro'
import mineAvatar from "../../assets/stu_mine/mineAvatar.png"
import editName from "../../assets/stu_mine/editName.png"
import activity1 from "../../assets/stu_mine/activity1.png"
import './index.less'
import mine_avatar from '../../assets/mine/mine_avatar.png'
import second from '../../assets/mine/information_avatar.png'
import first from '../../assets/mine/organization_detail.png'
import third from '../../assets/mine/information_detail.png'
import fourth from '../../assets/mine/help.png'
import back from '../../assets/mine/back.png'
import { useEffect } from 'react'
import { Fetch, getData } from '../../service/fetch'


function ElderMine () {

  function show() {
    Taro.showToast({
      title:'开发中',
      icon:'none',
      duration:1000
    })
  }
  function toEditInfo() {
    Taro.navigateTo({ url: '/pages/editInfo/index'})
  }
  
    return (
      <View className='mine-container'>
        <View className='mine-head'>
          <View className='mine-avatar'>
            <Image className='mine-image' src={mine_avatar} style='width:76px;height:76px;'></Image>
          </View>
          <View className='mine-info'>
            <View className='mine-nickname'>樱桃小丸</View>
            <View className='mine-edit' onClick={toEditInfo}>点击编辑个人信息</View>
          </View>
        </View>
        <View className='mine-body'>
          <View className='mine-child' onClick={show}>
            <View className='mine-linebefore' >
              <View className='mine-line'><Image className='mine-image' src={first} style='width:44px;height:44px;border-radius=50%;'></Image></View>
              <View className='line-text'>申诉订单</View>
            </View>
            <View className='mine-lineback'><Image src={back} style='width:16px;height:22px;'></Image></View>
          </View>
          <View className='mine-child' onClick={show}>
            <View className='mine-linebefore' >
              <View className='mine-line'><Image className='mine-image' src={second} style='width:44px;height:44px;'></Image></View>
              <View className='line-text'>我的课程</View>
            </View>
            <View className='mine-lineback'><Image src={back} style='width:16px;height:22px;'></Image></View>
          </View>
          <View className='mine-child' onClick={show}>
            <View className='mine-linebefore'>
              <View className='mine-line'><Image className='mine-image' src={third} style='width:44px;height:44px;'></Image></View>
              <View className='line-text'>我的邀请</View>
            </View>
            <View className='mine-lineback'><Image src={back} style='width:16px;height:22px;'></Image></View>
          </View>
          <View className='mine-child' onClick={show}>
            <View className='mine-linebefore'>
              <View className='mine-line'><Image className='mine-image' src={fourth} style='width:44px;height:44px;'></Image></View>
              <View className='line-text'>商家协议</View>
            </View>
            <View className='mine-lineback'><Image src={back} style='width:16px;height:22px;'></Image></View>
          </View>
        </View>
      </View>
    )
  }


export function StuMine() {

  const [username, setUsername] = useState('幸福时光')
  const [isEdit, setIsEdit] = useState(false)
  const [time, setTime] = useState(20)
  const [tab, setTab] = useState(0)
  const [isChange, setIsChange] = useState(false)
  const [nickName, setNickName] = useState('荔枝')
  const [phone, setPhone] = useState('18500229809')
  const [sex, setSex] = useState('女')
  const [birthday, setBirthday] = useState('1999-03-21')
  const [id, setId] = useState('403423**********02')
  const [address, setAddress] = useState('北京 海淀区')
  const [detailAddress, setDetailAddress] = useState('腾达大厦30层')
  const [userInfo,setUserInfo] = useState({})
  const [options, setOptions] = useState(['男', '女'])

  const [activities, setActivities] = useState([
    {
      img: activity1,
      activity_name: '社区公益服务大集1',
      activity_time: '2021/05/06   09:00-12:00',
      activity_area: '北京市东城区西花市南里东区15号楼北侧 ',
      attendance: '13',
      total: '20',
      id: '001',
      status: '已报名'
    },
    {
      img: activity1,
      activity_name: '社区公益服务大集2',
      activity_time: '2021/05/05   09:00-12:00',
      activity_area: '北京市东城区西花市南里东区15号楼北侧 ',
      attendance: '13',
      total: '20',
      id: '001',
      status: '已结束'
    }
  ])

  useEffect(()=>{
    getData('/user/info/query').then(
      data => {
        console.log(data.userInfo)
        setUserInfo(data.userInfo)
      }
    )
  },[])

  const editUsername = (e) => {
    const newName = e.detail.value
    setUsername(newName)
    setIsEdit(false)
  }

  const changeInfo = () => {
    let newUserInfo = {
      phone: phone,
      sex: sex,
      wechat: phone,
      avatar: userInfo.avatar,
      nickName: nickName,
      birthday: birthday,
      organizationId: userInfo.organizationId,
      credit: userInfo.credit
    }
    setUserInfo(newUserInfo)
    setIsChange(!isChange)
    Fetch('/user/info/update',newUserInfo)
  }

  return (
    <View className='wrapper-stu-mine'>
      <View className='header'>
        <View className='avatar'>
          <Image src={mineAvatar} alt=''></Image>
        </View>
        <View className='username'>
          {isEdit ?
            <Input onBlur={editUsername} value={username} />
            : <View className='content'>{username}</View>}
          <View className='edit' onClick={() => setIsEdit(true)}>
            <Image src={editName} alt=''></Image>
          </View>
        </View>
        <View className='time'>
          <View className='number'>{userInfo.credit}</View>
          <View className='text'>志愿时长</View>
        </View>
      </View>
      <View className='tab'>
        <View className={tab === 0 ? 'active' : ''} onClick={() => setTab(0)}>个人信息</View>
        <View className={tab === 1 ? 'active' : ''} onClick={() => setTab(1)}>已参加活动</View>
      </View>
      {
        tab === 0 ? <View className='info'>
          {
            isChange ?
              <View className='editInfo'>
                <View className='name1'>
                  姓名：<Input value={userInfo.nickName} onChange={e => setNickName(e.detail.value)} className='input_info' />
                </View>
                <View className='phone1'>
                  手机号码：<Input value={userInfo.phone} onChange={e => setPhone(e.detail.value)} className='input_info'></Input>
                </View>
                <View className='gender1'>
                  性别：<Input value={userInfo.sex} onChange={e => setSex(e.detail.value)} className='input_info' />
                </View>
                <View className='birth1'>
                  出生日期：<Picker mode='date' onChange={e => setBirthday(e.detail.value)} className='input_info'>
                    <View className='date'>
                      {userInfo.birthday}
                    </View>
                  </Picker>
                </View>
                <View className='submit' onClick={() => setIsChange(false)}>保存</View>
              </View>
              : <View className='showInfo'>
                <View className='name'>姓名：{userInfo.nickName}</View>
                <View className='phone'>手机号码：{userInfo.phone}</View>
                <View className='wechat'>手机号码：{userInfo.wechat}</View>
                <View className='gender'>性别：{userInfo.sex}</View>
                <View className='birth'>出生日期：{userInfo.birthday}</View>
                <View className='change-info' onClick={changeInfo}>修改信息</View>
              </View>
          }
        </View>
          : <View className='activities'>
            {
              activities.map(activity =>
                <View className='activity' key={activity.activity_name}>
                  <View className='activity_image'>
                    <Image src={activity.img} alt=''></Image>
                    {activity.status === '已结束' ?
                      <View className='activity_absoluted1'>
                        已结束
                      </View> :
                      <View className='activity_absoluted'>
                        已报名
                      </View>}
                  </View>
                  <View className='activity_name'>{activity.activity_name}</View>
                  <View className='activity_time'>{activity.activity_time}</View>
                  <View className='activity_area'>地点：{activity.activity_area}</View>
                  <View className='attendance'>报名人数：{`${activity.attendance}/${activity.total}`}</View>
                  <View className='activity_id'>报名号：{activity.id}</View>
                </View>
              )
            }
          </View>
      }
    </View>
  )
}

export default function Mine(){

  const [type,setType] = useState('0')

  useEffect(() => {
    setType(Taro.getStorageSync('type'))
  },[])

  return(
    <>
      {type === '0'?<ElderMine /> : <StuMine />}
    </>
  )
}