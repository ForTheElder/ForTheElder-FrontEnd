import { View, Picker, Input, Switch, Textarea, PageContainer } from '@tarojs/components'
import React, { useState } from 'react'
import './index.less'

export default function Deliver() {


  const name = '设备教学'
  // const [name, setName] = useState('')
  const [options, setOptions] = useState([
    '请选择', '1', '2', '3'
  ])
  const [thisOption, setThisOption] = useState(options[0])
  const [date, setDate] = useState('日期')
  const [start, setStart] = useState('开始');
  const [end, setEnd] = useState('结束');
  // const [isCost, setIsCost] = useState(false)
  // const [content, setContent] = useState('')
  // const [attention, setAttention] = useState('')
  // const [showAttention, setShowAttention] = useState(false)
  // const params = getCurrentInstance()
  // const id = params.router.params
  // const goodsid = id.goodsid



  const changeDate = e => {
    setDate(e.detail.value);
    console.log(e.detail.value)
  }

  const changeStart = e => {
    setStart(e.detail.value);
    console.log(e.detail.value)
  }

  const changeEnd = e => {
    setEnd(e.detail.value);
    console.log(e.detail.value)
  }

  const changeCost = e => {
    setIsCost(e.detail.value)
    console.log(e.detail.value)
  }

  const getText = e => {
    setContent(e.detail.value)
    console.log(e.detail.value)
  }

  // const deliver = () => {
  //   let newAttention = ''
  //   if(name === '') {
  //     newAttention += "请填写活动名称\n"
  //   }

  //   if(thisOption === options[0]){
  //     newAttention += "请选择活动区域\n"
  //   }

  //   if(date !== "日期" && start !== "开始" && end !== "结束"){
  //     let time = new Date();
  //     let d1 = Date.parse(date)
  //     let d2 = time.getTime()
  //     let t1 = time.setHours(start.split(":")[0],start.split(":")[1])
  //     let t2 = time.setHours(end.split(":")[0],end.split(":")[1])
  //     if(d2 < d1 || t2 <= t1){
  //       newAttention += "请选择正确的活动时间\n"
  //     }
  //   }else {
  //       newAttention += "请选择正确的活动时间\n"
  //   }

  //   if(content === ''){
  //     newAttention += "请填写活动内容\n"
  //   }

  //   if(newAttention !== ''){
  //     setAttention(newAttention)
  //     setShowAttention(true)
  //     setTimeout(() => {
  //       setShowAttention(false)
  //     }, 3000);
  //   }
  // }

  const deliver = () => {
    if (date !== "日期" && start !== "开始" && end !== "结束") {
      let time = new Date();
      let d1 = Date.parse(date)
      let d2 = time.getTime()
      let t1 = time.setHours(start.split(":")[0], start.split(":")[1])
      let t2 = time.setHours(end.split(":")[0], end.split(":")[1])
      if (d2 < d1 || t2 <= t1) {
        return false
      }
      showToast('发布成功')
    }
    else {
      showToast('请选择时间')
    }
  }
  const cancel = () => {
    console.log('取消')
  }

  return (
    <View className='wrapper-del'>
      <View className='form'>
        <View className='activity-name'>
          <View>活动名称</View>
          <Input type='text' className='name' value={name} />
        </View>
        <View className='activity-area'>
          <View>活动区域</View>
          <Picker mode='selector' range={options} onChange={(e) => changeOption(e)}>
            <View className='area'>
              {thisOption}
            </View>
          </Picker>
        </View>
        <View className='activity-time'>
          <View>活动时间</View>
          <Picker mode='date' onChange={changeDate}>
            <View className='date'>
              {date}
            </View>
          </Picker>
          <View>-</View>
          <Picker mode='time' onChange={changeStart}>
            <View className='start'>
              {start}
            </View>
          </Picker>
          <View>-</View>
          <Picker mode='time' onChange={changeEnd} >
            <View className='end'>
              {end}
            </View>
          </Picker>
        </View>
        <View className='btn'>
          <View className='deliver' onClick={deliver}>发布</View>
          <View className='cancel' onClick={cancel}>取消</View>
        </View>
      </View>
    </View>

  )
}
