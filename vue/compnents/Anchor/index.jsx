/*
 * @Author: 陈伟俊 chenwj@crosstech.group
 * @Date: 2022-07-05 15:45:41
 * @LastEditors: 陈伟俊 chenwj@crosstech.group
 * @LastEditTime: 2022-07-06 11:51:32
 * @FilePath: \RuoYi-Vue3\src\components\Anchor\index.jsx
 * @Description: 
 * 
 * Copyright (c) 2022 by 陈伟俊 chenwj@crosstech.group, All Rights Reserved. 
 */
import { defineComponent, ref, watch, onBeforeUpdate, nextTick, onMounted, onUnmounted, defineExpose } from "vue";
import './index.scss'
/**
 * @description: 滚动到对应位置
 * @param {HTMLElement} currentRefItem
 * @return {void}
 */
function scrollToArea(currentRefItem) {
    const offsetTop = currentRefItem.offsetTop;
    // 父元素滚动到相对应的位置
    currentRefItem.parentElement.scrollTo({ left: 0, top: offsetTop, behavior: 'smooth' })
}
/**
 * @description: 防抖函数
 * @param {Number} delay
 * @param {Function} callback
 * @return {void}
 */
function debonuce(delay, callback) {
    let timer = null
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            callback(...args)
        }, delay);
    }
}
/**
 * @description: 监听滚动并对tab赋值
 * @param {Array} currentRefList 滚动内的元素
 * @param {Function} callback 回调函数
 * @param {Boolean} isRemove 是否移除监听
 * @return {void}
 */
function listenerScroll( currentRefList, callback, isRemove = false) {
    const parentElement = currentRefList[0].parentElement
    const invokeFunction = debonuce(200, (e) => {
        let currentIndex = 0;
        currentRefList.forEach((refItem, index) => {
            if (parentElement.scrollTop >= refItem.offsetTop) {
                currentIndex = index
            }
        })
        callback && callback(currentIndex)
    })
    if (isRemove) {
        parentElement.removeEventListener('scroll', (e) => invokeFunction(e))
    } else {

        parentElement.addEventListener('scroll', (e) => invokeFunction(e))
        invokeFunction = null
    }
}
const Anchor = defineComponent({
    expose: ['setRefItem'],
    setup(_, { expose, slots }) {
        const current = ref(0);
        const meunList = unref([{
            label: '1',
        }, {
            label: '2',
        }, {
            label: '3',
        }, {
            label: '4',
        }])
        let refItem = []
        // watch(() => current.value, (value) => {
        //     scrollToArea(refItem[value])
        // })

        onBeforeUpdate(() => {
            refItem = []
        })
        onMounted(() => {
            listenerScroll(refItem[0], refItem, (value) => setScrollIndex(value))
        })
        onUnmounted(() => {
            listenerScroll(refItem[0], refItem, (value) => setScrollIndex(value), false)
        })
        function setScrollIndex(value) {
            if (current.value !== value) {
                current.value = String(value)
            }
        }
        function onTabClick(pane) {

            const index = pane.index
            console.log(index)
            scrollToArea(refItem[index])
        }
        function setRefItem(el) {
            refItem.push(el)
        }
        expose({
            setRefItem
        })
        return () => (
            <>
                <div class="tabItem">
                    <el-tabs vModel={current.value} tab-position={'left'} style={{ height: '200px' }} class="demo-tabs" onTabClick={onTabClick}>
                        {
                            meunList.map(item => <el-tab-pane label={item.label}>{item.label}</el-tab-pane>)
                        }
                    </el-tabs>
                </div >
                <div class="scrollView" ref="">
                    <div class="scrollView-item" ref={setRefItem}>
                        {slots['content']?.()}
                    </div>
                </div>
            </>

        );
    }
})
export default Anchor;