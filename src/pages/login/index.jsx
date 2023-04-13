import React,{ useState, useRef } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Input, Radio, Checkbox, Switch, Picker, Icon } from '@tarojs/components'
import './index.less'

export default function Login() {

  const [selector] = useState([
    '老人','学生'
  ])
  const [selected,setSelected] = useState('老人')
  const [code,setCode] = useState('')

  const [formState, setFormState] = useState(0)
  const telRef1 = useRef(null)
  const psRef1 = useRef(null)
  const telRef2 = useRef(null)
  const psRef2 = useRef(null)
  const checkRef = useRef(null)


  const select = (e) => {
    setSelected(selector[e.detail.value])
  }

  async function login(){
    if(formState===1){
      setFormState(0)
      return
    }

    let phone = ''
    let password = ''

    if(telRef1 && telRef1.current.value.length === 11){
      phone = telRef1.current.value
    }else return
    
    if(psRef1){
      password = psRef1.current.value
    }

    const data = {
      phone: phone,
      password: password
    }

    const header = {
      'content-type': 'application/json'
    }

    console.log(data)
    Taro.request({
      url: 'http://124.70.208.213:9001/user/user/login',
      data,
      method: 'POST',
      header
    }).then(
      res => {
        if(res.statusCode === 200){
          console.log(res.statusCode);
          console.log(res.data)
          Taro.setStorageSync('token',res.data.token)
          Taro.setStorageSync('type',res.data.type)
          Taro.showToast({
            title:'登录成功',
            icon:'success',
            duration: 2000
          })
          if(res.data.type === '0'){
            Taro.reLaunch({url: '/pages/main/index'})
          }else {
            Taro.reLaunch({url: '/pages/stu_main/index'})
          }
        }
        else if(res.statusCode === 500){
          Taro.showToast({
            title:'登录超时',
            icon:'loading',
            duration: 2000
          })
        }
        else {
          Taro.showToast({
            title:'登录失败',
            icon:'error',
            duration: 2000
          })
        }
      }
    )
  }

  async function getCode(){
    let phone = ''
    if(telRef2 && telRef2.current.value.length === 11){
      phone = telRef2.current.value
    }else return

    const header = {
      'content-type': 'application/json'
    }

    Taro.request({
      url: `http://124.70.208.213:9001/user/user/sendCode/${phone}`,
      method: 'GET',
      header,
    }).then(res => {
      console.log(res.statusCode);
      if(res.statusCode === 200){
        console.log(res.data)
        setCode(res.data.code)
      }
    })
  }

  async function register(){

    if(formState===0){
      setFormState(1)
      return
    }

    let phone = ''
    let password = ''
    console.log(11111)
    let type = selected === '老人'?'0':'1'
    console.log(22222)
    if(telRef2 && telRef2.current.value.length === 11){
      phone = telRef2.current.value
    }else return
    
    if(psRef2 && psRef2.current.value){
      password = psRef2.current.value
    }else return



    if(checkRef.current.value.toLowerCase() !== code.toLowerCase()) return

    const data = {
      phone: phone,
      password: password,
      code: code,
      type: type
    }

    const header = {
      'content-type': 'application/json'
    }

    console.log(data)

    Taro.request({
      url: 'http://124.70.208.213:9001/user/user/register',
      data,
      method: 'POST',
      header,
    }).then(res => {
      if(res.statusCode === 200){
        // console.log(res.statusCode);
        // console.log(res.data)
        Taro.showToast({
          title:'注册成功',
          icon:'success',
          duration: 2000
        })
        setFormState(0)
      }
    })
  }

  return (
      <View className='wrapper'>
        {
          formState === 0?
          <View className='login-wrapper'>
            <Text className='title'>登录</Text>
            <View className='form'>
              <View className='username'>
                <Text>手机号:</Text>
                <Input ref={telRef1} type='text' className='username-input' />
              </View>
              <View className='password'>
                <Text>密码:</Text>
                <Input ref={psRef1} type='password' className='password-input' />
              </View>
            </View>
            <View className='btn'>
              <View className='btn-login' onClick={login}>登录</View>
              <View className='btn-register' onClick={register}>注册</View>
            </View>
          </View>
          :
          <View className='register-wrapper'>
          <Text className='title'>注册</Text>
          <View className='form'>
            <View className='username'>
              <Text>手机号:</Text>
              <Input ref={telRef2} type='text' className='username-input' />
            </View>
            <View className='password'>
              <Text>密码:</Text>
              <Input ref={psRef2} type='password' className='password-input' />
            </View>
            <View className='check'>
              <Text>验证码:</Text>
              <Input ref={checkRef} type='text' className='check-input' />
              <View className='getCode' onClick={getCode}>{code === ''?'获取验证码':code}</View>
            </View>
            <View className='type'>
                <Text>用户类型</Text>
                <View className='picker-wrapper'>
                  <Picker className='picker' mode='selector' range={selector} onChange={select}>
                    <View className='pick-view'>{selected}</View>
                  </Picker>
                </View>
            </View>
          </View>
          <View className='btn'>
            <View className='btn-login' onClick={login}>登录</View>
            <View className='btn-register' onClick={register}>注册</View>
          </View>
        </View>
        }
      </View>
  )
}