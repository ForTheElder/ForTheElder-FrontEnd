import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import './index.less'
import img1 from '../../assets/main/img1.png'
import img2 from '../../assets/main/img2.png'
import img3 from '../../assets/main/img3.png'
import img4 from '../../assets/main/img4.png'
import img5 from '../../assets/main/img5.png'
import img6 from '../../assets/main/img6.png'
import img7 from '../../assets/main/img7.png'
import img8 from '../../assets/main/img8.png'

export default class Push extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            currentBoxId: 'one'
        };
    }

    componentWillMount() { }

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
    toDeliver() {
        Taro.navigateTo({ url: '/pages/kj_deliver/index' })
    }

    render() {
        return (
            <View>
                <View className='push_btns'>
                    <View id="one" onClick={this.changeBox.bind(this)} className={this.state.currentBoxId === "one" ? "push_btn active2" : "push_btn"}>免费服务</View>
                    <View id="two" onClick={this.changeBox.bind(this)} className={this.state.currentBoxId === "two" ? "push_btn active2" : "push_btn"}>收费服务</View>
                </View>
                <View>
                    <View id="one" className={this.state.currentBoxId === "one" ? "show" : "hidden"}>
                        <View className='boxxs'>
                            <View className='boxx' onClick={this.toDeliver.bind(this)}>
                                <Image src={img5} alt=''></Image>
                                <View className='p1'>设备教学</View>
                            </View>
                            <View className='boxx'>
                                <Image src={img6} alt=''></Image>
                                <View className='p1'>聊天陪伴</View>
                            </View>
                            <View className='boxx'>
                                <Image src={img7} alt=''></Image>
                                <View className='p1'>心理疏导</View>
                            </View>
                            <View className='boxx'>
                                <Image src={img8} alt=''></Image>
                                <View className='p1'>社区活动</View>
                            </View>
                            <View className='boxx'>
                                <Image src={img7} alt=''></Image>
                                <View className='p1'>心理疏导</View>
                            </View>
                            <View className='boxx'>
                                <Image src={img8} alt=''></Image>
                                <View className='p1'>社区活动</View>
                            </View>
                        </View>
                    </View>
                    <View id="two" className={this.state.currentBoxId === "two" ? "show" : "hidden"}>
                        <View className='boxxs'>
                            <View className='boxx'>
                                <Image src={img1} alt=''></Image>
                                <View className='p1'>健康体检</View>
                            </View>
                            <View className='boxx'>
                                <Image src={img2} alt=''></Image>
                                <View className='p1'>看病买药</View>
                            </View>
                            <View className='boxx'>
                                <Image src={img3} alt=''></Image>
                                <View className='p1'>核酸检测</View>
                            </View>
                            <View className='boxx'>
                                <Image src={img4} alt=''></Image>
                                <View className='p1'>代买代办</View>
                            </View>
                            <View className='boxx'>
                                <Image src={img3} alt=''></Image>
                                <View className='p1'>核酸检测</View>
                            </View>
                            <View className='boxx'>
                                <Image src={img4} alt=''></Image>
                                <View className='p1'>代买代办</View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        )
    }
}