import React, { Component, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Picker, Input, Text, Textarea, Checkbox } from '@tarojs/components'
import './index.less'
import bg1 from '../../assets/main/bg1.png'
import bg2 from '../../assets/main/bg2.png'
import shijian from '../../assets/main/shijian.png'
import address from '../../assets/main/address.png'
import yonghu from '../../assets/main/yonghu.png'
import dianhua from '../../assets/main/dianhua.png'
import touxiang from '../../assets/main/touxiang.jpg'


export default function Baoming() {


  // const gender = ['男','女']
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  // const gender =['男','女']
  const [gender, setGender] = useState('请选择')
  const [options, setOptions] = useState('请选择')
  const [date, setDate] = useState('请选择')

  const [checked, setChecked] = useState(false)

  const handleClick = ()=>{
    setChecked(!checked)
    console.log(!checked)
  }
  const changeName = e => {
    setName(e.detail.value);
    console.log(e.detail.value)
  }
  const changePhone = e => {
    setPhone(e.detail.value);
    console.log(e.detail.value)
  }
  const changeAddress = e => {
    setAddress(e.detail.value);
    console.log(e.detail.value)
  }
  const changeGender = e => {
    // setGender(e.detail.value);
    setOptions(e.detail.value)
    if (e.detail.value === '0') {
      setGender('男')
    } else if (e.detail.value === '1') {
      setGender('女')
    }
    console.log(e.detail.value)
  }
  const changeDate = e => {
    setDate(e.detail.value);
    console.log(e.detail.value)
  }
  const toXuzhi = () => {
    Taro.navigateTo({ url: '/pages/stu_xuzhi/index' })
  }
  const Chenggong = () => {
    if(name!==''&&phone!==''&&address!==''&&gender!=='请选择'&&date!=='请选择'&&checked===true){
      const { name, phone, address, gender } = this.state;
      Fetch(
        '/student/service/participate/orService/'+ sid,
        {
          name: name,
          phone: phone,
          sex: gender,
          address: address,
        },
        'POST',
        { token: token }
      )
        .then(res => {
          console.log(res.code);
          switch (res.code) {
            case 200:
              Taro.showToast({
                title: '报名成功',
                icon: 'success',
                duration: 2000
              })
              break;
          }
        }).catch(e => {
          console.log(e)
        })
    }
    else{
      console.log('222')
      Taro.showToast({
       title: '请补全信息',
        icon: 'none',
        duration: 3000
      })
    }
    
  }
  return (
    <View className='main_container'>
      <View className="activity_image">
        <View className="activity_absoluted">公益助老活动</View>
        <Image src={bg1} alt=''></Image>
        {/* <View className="activity_absoluted">活动报名中</View> */}
        <View className="buwei"></View>
      </View>
      <View className="activity_info">
        <View className='activity_title'>家庭公益服务（帮助理发）</View>
        <View className='activity_text'><Image src={shijian} alt=''></Image>报名截止时间：2021/05/05  20:00</View>
      </View>
      <View className='info'>
        {/* 接口，post */}
        <View>
          <View className='yonghu yonghu_xingming'>
            <View className='title'>姓名</View>
            <Input type="text" value={name} onInput={changeName} />
          </View>
          <View className='yonghu yonghu_shouji'>
            <View className='title'>手机号码</View>
            <Input type="number" value={phone} onInput={changePhone} />
            <View className='absolute'>微信授权</View>
          </View>
          <View className='yonghu yonghu_xingming'>
            <View className='title'>性别</View>
            <Picker mode='selector' range={['男', '女']} onChange={changeGender} value={gender} >
              <View className='gender'>
                {gender}
              </View>
            </Picker>
          </View>
          <View className='yonghu yonghu_shengri'>
            <View className='title'>出生日期</View>
            <Picker mode='date' onChange={changeDate} value={date}>
              <View className='date'>
                {date}
              </View>
            </Picker>
          </View>
          <View className='yonghu yonghu_address'>
            <View className='title'>详细地址</View>
            <Textarea type='text' value={address} onInput={changeAddress}/>
          </View>

        </View>
      </View>
      <View className='yonghu xuzhi'>
        {/* <Input type='checkbox' className='correct' name='xuzhi' value='xuzhi'/><Text className='yhxz'>用户须知</Text> */}
        <Checkbox type='checkbox' onClick={handleClick} checked={checked}/><Text className='yhxz' onClick={toXuzhi}>用户须知</Text>
        {/* <View className='yonghuxuzhi' >用户须知</View> */}
      </View>
      <View className='kongbai'></View>
      <View className='bottom'>
        {/* 接口 */}
        <View className='bottom_button' onClick={Chenggong}>立即报名</View>
      </View>
    </View>
  )
}