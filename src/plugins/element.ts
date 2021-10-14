import { App } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// Element Plus 组件内部默认使用英语
// https://element-plus.gitee.io/#/zh-CN/component/i18n
import lang from 'element-plus/lib/locale/lang/zh-cn';
// Element Plus 直接使用了Day.js项目的时间日期国际化设置，并且会自动全局设置已经导入的Day.js
// import 'dayjs/locale/zh-cn';

// $ELEMENT size属性类型
export type Size = 'default' | 'medium' | 'small' | 'mini';

export default (app: App): void => {
  // locale(lang);
  app.use(ElementPlus, { locale: lang });

  // 全局配置 文档说明 https://element-plus.gitee.io/#/zh-CN/component/quickstart#quan-ju-pei-zhi
  // 该对象目前支持size与zIndex字段。size用于改变组件的默认尺寸small,zIndex设置弹框的初始z-index（默认值:2000）。
  app.config.globalProperties.$ELEMENT = {
    size: 'small', // Set element-ui default size
  };
};