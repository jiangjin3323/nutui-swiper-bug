import React, { useState } from 'react'
import { Swiper,SwiperItem } from '@nutui/nutui-react-taro';

const App = () => {
  const [initPage1, setInitPage1] = useState(0)
  const [height, setHeight] = useState<any>(150)
  const onChange = (e) => {
    // do something
  }
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        height={height}
        paginationColor="#426543"
        autoPlay="3000"
        initPage={initPage1}
        paginationVisible
        onChange={onChange}
      >
        <SwiperItem >
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
        </SwiperItem>
        <SwiperItem >
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
        </SwiperItem>
        <SwiperItem >
          <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
        </SwiperItem>
        <SwiperItem >
          <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
        </SwiperItem>
      </Swiper>
    </div>
  )
}
export default App;
