import React from 'react'
import backtrack from '@/utils/backtrack'
const A = () => {
  const goToPage = (page: any) => {
    backtrack.pushPage()
    // 假设我不需要a页面进入历史栈,直接在A组件中使用replace即可。其他的页面正常使用href 进行跳转
    window.location.replace(page)
  }
  const myBack = () => {
    backtrack.configureBackButton()
  }
  return (
    <div>
      <a id="universal_back_button" href="" onClick={() => myBack()}>
        后退
      </a>
      <br />
      <a onClick={() => goToPage('/a')}>去a页面</a>
      <br />
      <a onClick={() => goToPage('/b')}>去b页面</a>
      <br />
      <a onClick={() => goToPage('/c')}>去C页面</a>
      <br />
      <a onClick={() => goToPage('/d')}>去D页面</a>
      <br />
    </div>
  )
}
export default A
