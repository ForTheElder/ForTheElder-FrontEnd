import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Button} from '@tarojs/components'
import './index.less'
import xifa from '../../assets/main/lunbo1.png'


export default class Order extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            myorders:[],
            currentBoxId: 'one'
        };
      }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
    
  componentWillReceiveProps() {}

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
        break;
        case 'three':
        this.setState({
            currentBoxId: 'three'
        })
        break;
        case 'four':
        this.setState({
            currentBoxId: 'four'
        })
        break;
        case 'five':
        this.setState({
            currentBoxId: 'five'
        })
        break;
    }
}
    
  render() {
    return (
      <View>
        <View className='btns'>
            <View id="one" onClick={this.changeBox.bind(this)} className={this.state.currentBoxId === "one" ? "button active1" : "button"}>全部</View>
            <View id="two" onClick={this.changeBox.bind(this)} className={this.state.currentBoxId === "two" ? "button active1" : "button"}>待接单</View>
            <View id="three" onClick={this.changeBox.bind(this)} className={this.state.currentBoxId === "three" ? "button active1" : "button"}>待服务</View>
            <View id="four" onClick={this.changeBox.bind(this)} className={this.state.currentBoxId === "four" ? "button active1" : "button"}>服务中</View>
            <View id="five" onClick={this.changeBox.bind(this)} className={this.state.currentBoxId === "five" ? "button active1" : "button"}>已完成</View>
        </View>
        <View>
            <View id="one" className={this.state.currentBoxId === "one" ? "show" : "hidden"}>
                <View className="box daijiedan">
                    <View className="top">
                        <View className="lef">
                            <View className='dingdan'>服务编号：154545454545</View>
                        </View>
                        <View className="zhuangtai">待接单</View>
                    </View>
                    <View className="mid">
                        <View className='left'>
                            <Image src={xifa} alt="" className="img"></Image>
                            <View className='name'>上门洗发</View>
                            <View className="way">不能自理，卧床洗发</View>
                            <View className="time">订单时间：2022.11.22</View>
                        </View>
                        <View className='right'>
                            <View className="price">免费</View>
                        </View>
                    </View>
                    <View className="bot">
                        <View className="butt">
                            <Button className="button1">取消订单</Button>
                        </View>
                    </View>
                </View>
                <View className="box daifuwu">
                    <View className="top">
                        <View className="lef">
                            <View className='dingdan'>服务编号：154545454544</View>
                        </View>
                        <View className="zhuangtai">待服务</View>
                    </View>
                    <View className="mid">
                        <View className='left'>
                            <Image src={xifa} alt="" className="img"></Image>
                            <View className='name'>上门洗发</View>
                            <View className="way">不能自理，卧床洗发</View>
                            <View className="time">订单时间：2022.11.22</View>
                        </View>
                        <View className='right'>
                            <View className="price">免费</View>
                        </View>
                    </View>
                    <View className="bot">
                        <View className="butt">
                            <Button className="button2">取消订单</Button>
                            <Button className="button1">确认完成</Button>
                        </View>
                    </View>
                </View>
                <View className="box yiwancheng">
                    <View className="top">
                        <View className="lef">
                            <View className='dingdan'>服务编号：154545454543</View>
                        </View>
                        <View className="zhuangtai">已完成</View>
                    </View>
                    <View className="mid">
                        <View className='left'>
                            <Image src={xifa} alt="" className="img"></Image>
                            <View className='name'>上门洗发</View>
                            <View className="way">不能自理，卧床洗发</View>
                            <View className="time">订单时间：2022.11.22</View>
                        </View>
                        <View className='right'>
                            <View className="price">免费</View>
                        </View>
                    </View>
                    <View className="bot">
                        <View className="butt">
                            <Button className="button1">售后服务</Button>
                        </View>
                    </View>
                </View>
            </View>
            <View id="two" className={this.state.currentBoxId === "two" ? "show" : "hidden"}>
                <View className="box daijiedan">
                    <View className="top">
                        <View className="lef">
                            <View className='dingdan'>服务编号：154545454545</View>
                        </View>
                        <View className="zhuangtai">待接单</View>
                    </View>
                    <View className="mid">
                        <View className='left'>
                            <Image src={xifa} alt="" className="img"></Image>
                            <View className='name'>上门洗发</View>
                            <View className="way">不能自理，卧床洗发</View>
                            <View className="time">订单时间：2022.11.22</View>
                        </View>
                        <View className='right'>
                            <View className="price">免费</View>
                        </View>
                    </View>
                    <View className="bot">
                        <View className="butt">
                            <Button className="button1">取消订单</Button>
                        </View>
                    </View>
                </View>
            </View>
            <View id="three" className={this.state.currentBoxId === "three" ? "show" : "hidden"}>
                <View className="box daifuwu">
                    <View className="top">
                        <View className="lef">
                            <View className='dingdan'>服务编号：154545454544</View>
                        </View>
                        <View className="zhuangtai">待服务</View>
                    </View>
                    <View className="mid">
                        <View className='left'>
                            <Image src={xifa} alt="" className="img"></Image>
                            <View className='name'>上门洗发</View>
                            <View className="way">不能自理，卧床洗发</View>
                            <View className="time">订单时间：2022.11.22</View>
                        </View>
                        <View className='right'>
                            <View className="price">免费</View>
                        </View>
                    </View>
                    <View className="bot">
                        <View className="butt">
                            <Button className="button2">取消订单</Button>
                            <Button className="button1">确认完成</Button>
                        </View>
                    </View>
                </View>
            </View>
            <View id="four" className={this.state.currentBoxId === "four" ? "show" : "hidden"}></View>
            <View id="five" className={this.state.currentBoxId === "five" ? "show" : "hidden"}>
                <View className="box yiwancheng">
                    <View className="top">
                        <View className="lef">
                            <View className='dingdan'>服务编号：154545454543</View>
                        </View>
                        <View className="zhuangtai">已完成</View>
                    </View>
                    <View className="mid">
                        <View className='left'>
                            <Image src={xifa} alt="" className="img"></Image>
                            <View className='name'>上门洗发</View>
                            <View className="way">不能自理，卧床洗发</View>
                            <View className="time">订单时间：2022.11.22</View>
                        </View>
                        <View className='right'>
                            <View className="price">免费</View>
                        </View>
                    </View>
                    <View className="bot">
                        <View className="butt">
                            <Button className="button1">售后服务</Button>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </View>

    )
  }
}