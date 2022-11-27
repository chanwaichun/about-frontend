/*
 * @Author: 陈伟俊 chenwj@crosstech.group
 * @Date: 2022-06-28 15:04:59
 * @LastEditors: chanwaichun chanwaichuncc@163.com
 * @LastEditTime: 2022-11-24 09:59:54
 * @FilePath: \about-frontend\vue\compnents\VirtualList\index.jsx
 * @Description: 
 * 
 * Copyright (c) 2022 by 陈伟俊 chenwj@crosstech.group, All Rights Reserved. 
 */
import './index.scss'
import { defineComponent } from "vue";
const VirtualList = defineComponent({
    setup(props, ctx) {
        const height = 18
        const bigData = () => {
            const data = []
            for (let i = 0; i < 1000; i++) {
                data.push(i)
            }
            return data
        }
        const data = bigData()
        let currentData = ref(data.slice(0, 14))
        let offsetY = ref(0)
        // virtualList.addEventListener('scroll',(e)=>{
        //     console.log(virtualList)
        // })
        function handleScroll(e) {
            
            const hideNumber = Math.floor(e.target.scrollTop / height)
            currentData.value = data.slice(hideNumber, 20 + hideNumber)
            offsetY.value = hideNumber * height
            console.log(offsetY.value)
        }
        return () => (
            <div className="virtualList-box" onScroll={(e) => handleScroll(e)}>
                <ul className="virtualList"  >
                    {
                        currentData.value.map(item => {
                            return <li style={{ transform: `translateY(${offsetY.value}px)` }}>{item}</li>
                        })
                    }
                </ul>
            </div >

        )
    }
})
export default VirtualList