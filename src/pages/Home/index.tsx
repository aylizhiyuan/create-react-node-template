import React, { FC } from 'react'
import { Button } from 'antd'
import styles from './index.scss'
import defaultAvatar from '@/assets/img/default.png'
const Home: FC = () => {
  return (
    <div className={styles.customerDetail}>
      <div className={styles.content}>
        <div className={styles.user}>
          <div className={styles.title}>
            <img width={40} height={40} src={defaultAvatar} />
            <div className={styles.desc}>
              <p>{`测试`}</p>
              <p>
                <span className={styles.tag}>测试</span>
                <span className={styles.tag}>测试</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <p>家庭总资产(元)</p>
          <p>***</p>
          <div className={styles.rate}>
            <div className={styles.left}>
              <p>持仓收益</p>
              <p>***</p>
            </div>
            <div className={styles.right}>
              <p>累计收益</p>
              <p>***</p>
            </div>
          </div>
        </div>
        <div className={styles.btns}>
          <p>测试按钮</p>
          <p>测试按钮</p>
        </div>
        <div className={styles.information}>
          <div className={styles.header}>
            <p>基本信息</p>
            <p>编辑</p>
          </div>
          <ul>
            <li>
              <p>客户生日</p>
              <p>{'测试'}</p>
            </li>
            <li>
              <p>客户性别</p>
              <p>{'测试'}</p>
            </li>
            <li>
              <p>手机号码</p>
              <p className={styles.tel}>
                <a></a>
              </p>
            </li>
            <li>
              <p>微信号码</p>
              <p>{'custWechatNo'}</p>
            </li>
          </ul>
        </div>
        <div className={styles.information}>
          <div className={styles.header}>
            <p>联系地址</p>
            <p>编辑</p>
          </div>
          <ul>
            <li>
              <p>所在地址</p>
              <p>
                <span>{'测试'}</span>
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.information}>
          <div className={styles.header}>
            <p>个人情况</p>
            <p>编辑</p>
          </div>
          <ul>
            <li>
              <p>家庭状态</p>
              <p>测试</p>
            </li>
            <li>
              <p>风险偏好</p>
              <p>测试</p>
            </li>
            <li>
              <p>投资偏好</p>
              <p>测试</p>
            </li>
            <li>
              <p>期望收益率</p>
              <p>测试</p>
            </li>
            <li>
              <p>可投资资产</p>
              <p>测试</p>
            </li>
            <li>
              <p>备注信息</p>
              <p>测试</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
