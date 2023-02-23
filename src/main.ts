import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'ant-design-vue/dist/antd.css';
import {
  ConfigProvider,
  Layout,
  Input,
  InputNumber,
  Button,
  Switch,
  Radio,
  Checkbox,
  Select,
  Card,
  Form,
  Row,
  Col,
  Modal,
  Table,
  Tabs,
  Badge,
  Popover,
  Dropdown,
  List,
  Avatar,
  Breadcrumb,
  Steps,
  Spin,
  Menu,
  Drawer,
  Tooltip,
  Alert,
  Tag,
  Divider,
  DatePicker,
  TimePicker,
  Upload,
  Progress,
  Skeleton,
  Popconfirm,
  PageHeader,
  Result,
  Statistic,
  Descriptions,
  Space,
  message,
  notification,
  Pagination,
} from 'ant-design-vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

// app.config.errorHandler = () => {};
// app.component('xxx', App);
// 显式添加全局对象到全局对象列表中，方便在模板内表达式中直接访问
// app.config.globalProperties = {
//   ...app.config.globalProperties,
//   firstName: 'Joe',
// };
app.use(createPinia())
app.use(router)
app.use(Input);
app.mount('#app')

