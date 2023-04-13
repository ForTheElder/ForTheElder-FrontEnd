import { Input, View,Image, Picker, Textarea, PageContainer } from '@tarojs/components'
import React, { useState } from 'react'
import './index.less'
import camera from '../../assets/organization/camera.png'
import Taro from '@tarojs/taro'
import { Fetch } from '../../service/fetch'


export default function AddOrg() {

    const [name,setName] = useState('')
    const [img,setImg] = useState('');
    const [loc,setLoc] = useState('');
    const [num,setNum] = useState('')
    const [tel,setTel] = useState('')
    const [content,setContent] = useState('');
    const [base64,setBase64] = useState()
    const [attention,setAttention] = useState('')
    const [showAttention,setShowAttention] = useState(false)

    const getName = e => {
        setName(e.detail.value)
    }

    const chooseImg = () => {
        console.log('11111111')
        Taro.chooseImage({
            count: 1,
            sizeType: ['original'],
            sourceType: ['album'],
            success: res => {
                let src = res.tempFilePaths[0];
                setImg(src)
                Taro.getFileSystemManager().readFile({
                    filePath:src,
                    encoding:'base64',
                    success: response => {
                        setBase64(response.data)
                    }
                })
            }
        })
    }

    const getLoc = e => {
        setLoc(e.detail.value)
    }

    const getNum = e => {
        setNum(e.detail.value)
    }

    const getTel = e => {
        setTel(e.detail.value)
    }

    const getContent = e => {
        setContent(e.detail.value)
    }

    const submit = () => {
        let newAttention = ''
        if(name === '') {
            newAttention += "请填写组织名称\n"
        } 
        
        if(!base64){
            newAttention += "请选择图片\n"
        }

        if(!loc){
            newAttention += "请填写组织地点\n"
        }

        // if(date !== "日期" && start !== "开始" && end !== "结束"){
        //     let time = new Date();
        //     let d1 = Date.parse(date)
        //     let d2 = time.getTime()
        //     let t1 = time.setHours(start.split(":")[0],start.split(":")[1])
        //     let t2 = time.setHours(end.split(":")[0],end.split(":")[1])
        //     if(d2 < d1 || t2 <= t1){
        //     newAttention += "请选择正确的活动时间\n"
        //     }
        // }else {
        //     newAttention += "请选择正确的活动时间\n"
        // }
        
        if(parseInt(num) <= 0){
            newAttention += "请正确填写组织的人数\n"
        }

        if(tel === ''){
            newAttention += "请填写联系电话\n"
        }

        if(content === ''){
            newAttention += "请填写组织简介\n"
        }
        

        if(newAttention !== ''){
            Taro.showToast({
                title:'信息不完整！',
                icon:'error',
                duration:2000
            })
        }

        const data = {
            name: name,
            logo: base64,
            address: loc,
            phone: tel,
            brief: content,
            icon: [base64],
            count: num
        }
        Fetch('/organization/organization/establish',data)
    }

    return (
        <View className='AddOrg'>
            <View className='orgname'>
                <View>名称：</View>
                <Input type='text' className='name' onInput={getName} placeholder='请输入组织名称' />
            </View>
            <View className='orgimg'>
                <View style='align-self:center;'>图片：</View>
                <View className='img' onClick={chooseImg}>
                    {img?<Image src={img} style='width:100px;height:100px;'></Image>:<Image src={camera} style='width:100px;height:100px;'></Image>}
                </View>
            </View>
            <View className='orgloc'>
                <View>位置：</View>
                <Input type='text' className='loc' onInput={getLoc} placeholder='请输入位置' />
            </View>
            <View className='orgpeople'>
                <View>人数：</View>
                <Input type='text' className='num' onInput={getNum} placeholder='请输入人数' />
            </View>
            <View className='orgtel'>
                <View>电话：</View>
                <Input type='text' className='tel' onInput={getTel} placeholder='请输入电话' />
            </View>
            {/* <View className='acttime'>
                <View>时间:</View>
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
            </View> */}
            <View className='orgcontent'>
                <View>内容描述：</View>
                <Textarea className='content' onInput={getContent} placeholder='请输入组织简介' />
            </View>
            <View className='submit' onClick={submit}>完成</View>
            <View>
                <PageContainer show={showAttention} position='top'>
                <View>{attention}</View>
                </PageContainer>
            </View>
        </View>
    )
}
