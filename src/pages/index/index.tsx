import {
  Button,
} from "@nutui/nutui-react-taro";
import './index.scss'
import { FC, useEffect } from 'react'
import { useReady, useDidShow, useDidHide, usePullDownRefresh } from '@tarojs/taro'
import { useSelector } from "react-redux";
const Index:FC = ()=> {
  // 可以使用所有的 React Hooks
  useEffect(() => {})

  // 对应 onReady
  useReady(() => {})

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})

  // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
  // 详情可查阅：【Hooks】
  usePullDownRefresh(() => {})
  //全局store
  const store: any = useSelector((state) => state);

  return (
    <div className="nutui-react-demo">
         <div className="index">
          欢迎使用 NutUI React 开发 Taro 多端项目。
          {store.userInfo}
         </div>
         <div className="index">
           <Button type="primary" className="btn">
             NutUI React Button
           </Button>
         </div>
       </div>
  )
}

export default Index
