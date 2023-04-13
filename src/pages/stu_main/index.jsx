import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.less'
import bg1 from '../../assets/main/bg1.png'
import bg2 from '../../assets/main/bg2.png'
import { Fetch } from '../../service/fetch'



export default class Main extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      currentBoxId: 'one',
      activities: [],
      activities1: [],
      offset: '0',
      id:''
    };
  }

  //获取活动数据
  componentWillMount() {
    const offset = this.state.offset

    Fetch(
      `/service/student/service/query/all/${offset}`,
      {},
      'GET',
      {Authorization: Taro.getStorageSync('token')}
      )
      .then(res => {
          console.log(res.orActivityDTOS)
          if(res.orActivityDTOS!==null){
              this.setState({
                  activities: res.orActivityDTOS,
              })
          }
          }).catch(() => {
          Taro.showToast({
              icon: 'none',
              title: '跳转错误'
          });
      })
      Fetch(
        `/organization/service/query/all/${offset}`,
        {},
        'GET',
        {Authorization: Taro.getStorageSync('token')}
        )
        .then(res => {
            console.log(res.orActivityDTOS)
            if(res.orActivityDTOS!==null){
                this.setState({
                    activities1: res.orActivityDTOS,
                })
            }
            }).catch(() => {
            Taro.showToast({
                icon: 'none',
                title: '跳转错误'
            });
        })
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentWillReceiveProps() { }

  changeBox(e) {
    let currentFlag = e.currentTarget.id;
    switch (currentFlag) {
      case 'one':
        this.setState({
          currentBoxId: 'one'
        })
        break;
      case 'two':
        this.setState({
          currentBoxId: 'two'
        })
    }
  }

  // toXiangqing() {
  //   Taro.navigateTo({ url: '/pages/xiangqing/index' })
  // }
  // 上面代码改为
  handleitem=(id)=>{
    console.log(typeof id)
    console.log(id,'111111111111111')
    Taro.setStorage({
      key: 'id',
      data: id
    });
    Taro.navigateTo({
      url:'/pages/stu_xiangqing/index?id='+id
    })
    return 1
  }

  handleitem1=(id)=>{
    console.log(id,'111111111111111')
    Taro.setStorage({
      key: 'id',
      data: id
    });
    Taro.navigateTo({
      url:'/pages/stu_xiangqing1/index?id='+id
    })
    return 1
  }
  
  onPullDownRefresh=()=>{
    this.setState({
      offset:((this.offset)+1).toString()
    })
    console.log(this.offset)
  }
  
  render() {
    const {activities, activities1} = this.state
    return (
      <View className='main_container'>
        <View className='activity_btns'>
          <View id='one' onClick={this.changeBox.bind(this)} className={this.state.currentBoxId === "one" ? "activity_btn active2" : "activity_btn"}>个人活动</View>
          <View id='two' onClick={this.changeBox.bind(this)} className={this.state.currentBoxId === "two" ? "activity_btn active2" : "activity_btn"}>团体活动</View>
        </View>
        <View>
          <View id='one' className={this.state.currentBoxId === "one" ? "show" : "hidden"}>
            
            {/* 获取所有发布的活动接口 */}
            {activities.map((activity) => {
              // const id = activity.id
              return (
                  <View className='activity_box' onClick={()=>this.handleitem(activity.id)} key={activity.id}>
                    <View className='activity_image'>
                      <Image src={`${activity.icon}`} alt=''></Image>
                      <View className='activity_absoluted'>{activity.isCompleted=='0'?'活动报名中':'报名已结束'}</View>
                    </View>
                    <View className='activity_title'>{activity.title}</View>
                    <View className='activity_text'>时间：{activity.beginTime}-{activity.endTime}</View>
                    <View className='activity_text last'>地点：{activity.address}</View>
                    {/* <View className='activity_text last'>招募人数：{activity.count}/{activity.num}</View> */}
                  </View>
                  )
              })}
            
            <View className='activity_box'>
              <View className='activity_image'>
                <Image src={bg1} alt=''></Image>
                <View className='activity_absoluted'>活动报名中</View>
              </View>
              <View className='activity_title'>家庭公益服务（帮助理发）</View>
              <View className='activity_text'>时间：2021/05/06  09:00-12:00</View>
              <View className='activity_text'>地点：华中师范大学西区教工宿舍14</View>
              <View className='activity_text last'>报名人数：0/2</View>
            </View>
            <View className='activity_box'>
              <View className='activity_image'>
                <Image src={bg1} alt=''></Image>
                <View className='activity_absoluted'>活动报名中</View>
              </View>
              <View className='activity_title'>代买代办</View>
              <View className='activity_text'>时间：2021/05/06  09:00-12:00</View>
              <View className='activity_text'>地点：华中师范大学西区教工宿舍14</View>
              <View className='activity_text last'>报名人数：0/2</View>
            </View>
          </View>
          <View id='two' className={this.state.currentBoxId === "two" ? "show" : "hidden"}>
            {activities1.map((activity) => {
              // const id = activity.id
              return (
                  <View className='activity_box' onClick={()=>this.handleitem1(activity.id)} key={activity.id}>
                    <View className='activity_image'>
                      <Image src={`${activity.icon}`} alt=''></Image>
                      <View className='activity_absoluted'>{activity.status=='0'?'活动报名中':'报名已结束'}</View>
                    </View>
                    <View className='activity_title'>{activity.title}</View>
                    <View className='activity_text'>时间：{activity.beginTime}-{activity.endTime}</View>
                    <View className='activity_text'>地点：{activity.address}</View>
                    <View className='activity_text last'>招募人数：{activity.count}/{activity.num}</View>
                  </View>
                  )
              })}
            <View className='activity_box'>
              <View className='activity_image'>
                <Image src={bg2} alt=''></Image>
                <View className='activity_absoluted'>活动报名中</View>
              </View>
              <View className='activity_title'>社区公益服务大集</View>
              <View className='activity_text'>时间：2021/05/06  09:00-12:00</View>
              <View className='activity_text'>地点：武汉市洪山区洪山街韵湖社区</View>
              <View className='activity_text last'>报名人数：101/200</View>
            </View>
            <View className='activity_box'>
              <View className='activity_image'>
                <Image src={bg2} alt=''></Image>
                <View className='activity_absoluted'>活动报名中</View>
              </View>
              <View className='activity_title'>社区公益服务大集</View>
              <View className='activity_text'>时间：2021/05/06  09:00-12:00</View>
              <View className='activity_text'>地点：武汉市洪山区洪山街韵湖社区</View>
              <View className='activity_text last'>报名人数：0/200</View>
            </View>
          </View>
        </View>
      </View>

    )
  }
}