<template>
  <el-config-provider :locale="locale">
    <slot name="app"></slot>
  </el-config-provider>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
//引入vue方法
import { ElConfigProvider } from 'element-plus';
//中文包
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import en from 'element-plus/lib/locale/lang/en';
//引入自定义方法
//引入自定义组件
export default defineComponent({
  name: 'ZhProvider',
  components: { [ElConfigProvider.name]: ElConfigProvider },
  setup() {
    const locale = computed(() => {
      const appLang = localStorage.getItem('lang') || 'zh-cn';
      if (appLang === 'zh-cn') {
        return zhCn;
      } else {
        return en;
      }
    });
    return { locale };
  },
});
</script>
