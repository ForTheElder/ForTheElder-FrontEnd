import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'
import Deliver from '../deliver'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        {/* <Text>Hello world!</Text> */}
        <Deliver />
      </View>
    )
  }
}
