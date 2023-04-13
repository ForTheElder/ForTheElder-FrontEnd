import { Picker,Input,Switch,Textarea, PageContainer } from '@tarojs/components'
import React, { useState } from 'react'
import './index.less'
import { Fetch } from '../../service/fetch'
import Taro from '@tarojs/taro'

export default function Deliver() {

  const [name,setName] = useState('')
  const [area,setArea] = useState('')
  const [date,setDate] = useState('日期')
  const [start,setStart] = useState('开始');
  const [end,setEnd] = useState('结束');
  const [isCost,setIsCost] = useState(false)
  const [content,setContent] = useState('')
  const [attention,setAttention] = useState('')
  const [showAttention,setShowAttention] = useState(false)

  const getName = e => {
    setName(e.detail.value);
    console.log(e.detail.value)
  }

  const getArea = e => {
    setArea(e.detail.value)
    console.log(e.detail.value)
  }

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

  const deliver = () =>{
    let newAttention = ''
    if(name === '') {
      newAttention += "请填写活动名称\n"
    }

    if(area === ''){
      newAttention += "请选择活动区域\n"
    }

    if(date !== "日期" && start !== "开始" && end !== "结束"){
      let time = new Date();
      let d1 = Date.parse(date)
      let d2 = time.getTime()
      let t1 = time.setHours(start.split(":")[0],start.split(":")[1])
      let t2 = time.setHours(end.split(":")[0],end.split(":")[1])
      if(d2 < d1 || t2 <= t1){
        newAttention += "请选择正确的活动时间\n"
      }
    }else {
        newAttention += "请选择正确的活动时间\n"
    }
    
    if(content === ''){
      newAttention += "请填写活动内容\n"
    }

    if(newAttention !== ''){
      setAttention(newAttention)
      Taro.showToast({
        title: '发布失败',
        icon:'error',
        duration:2000
      })
      return ;
    }

    let data = {
      title:name,
      address:area,
      beginTime:date + ' ' + start + ':00',
      endTime:date + ' ' + end + ':00',
      isFree:isCost?'0':'1',
      content:content,
    }
    const res = Fetch('/service/service/self/publish',data);
    res.then(
      resdata => {
        if(resdata.msg === '发布成功'){
          Taro.showToast({
            title:'发布成功',
            icon: 'success',
            duration: 2000
          })
        }
        else {
          Taro.showToast({
            title: '发布失败',
            icon:'error',
            duration:2000
          })
        }
      }
    )
  }

  const cancel = () => {
    Taro.navigateBack({
      delta: 1
    })
  }

  return (
    <view className='wrapper-del'>
      <view className='form'>
        <view className='activity-name'>
          <view>活动名称</view>
          <Input type='text' className='name' onInput={getName} placeholder='请输入活动名称' />
        </view>
        <view className='activity-area'>
          <view>活动区域</view>
          <Input type='text' className='area' onInput={getArea} placeholder='请输入活动地点' />
        </view>
        <view className='activity-time'>
          <view>活动时间</view>
          <Picker mode='date' onChange={changeDate}>
            <view className='date'>
              {date}
            </view>
          </Picker>
          <view>-</view>
          <Picker mode='time' onChange={changeStart}>
            <view className='start'>
              {start}
            </view>
          </Picker>
          <view>-</view>
          <Picker mode='time' onChange={changeEnd} >
            <view className='end'>
              {end}
            </view>
          </Picker>
        </view>
        <view className='activity-cost'>
          <view>是否付费</view>
          <Switch controlled='true' className='cost' onChange={changeCost}></Switch>
        </view>
        <view className='activity-content'>
          <view>活动内容</view>
          <Textarea className='content' onInput={getText} placeholder='请输入活动内容' />
        </view>
      </view>
      <view className='btn'>
        <view className='deliver' onClick={deliver}>发布</view>
        <view className='cancel' onClick={cancel}>取消</view>
      </view>
      <view>
        <PageContainer show={showAttention} position='top'>
          <view>{attention}</view>
        </PageContainer>
      </view>
    </view>
  )
}
