import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './component/App';
import './stylus/app.styl';
import './stylus/public.css'
import "antd/dist/antd.css";
import * as serviceWorker from './serviceWorker';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
/* 默认组件数据 */
ReactDOM.render(
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>,
  document.getElementById('reactApp')
);
serviceWorker.unregister();
