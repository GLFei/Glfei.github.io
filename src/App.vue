<template>
  <ElProvider>
    <template #app>
      <el-dropdown @command="handleSetLanguage">
        <i class="el-icon-my-zhongyingwen2 icon-lang" aria-hidden="true">语言切换</i>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              :divided="index != 0"
              v-for="(item, index) in languages"
              :key="item.value"
              :disabled="language === item.value"
              :command="item.value"
            >
              <span>{{ item.name }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-date-picker
        class="inline"
        size="mini"
        v-model="dateModel"
        type="daterange"
        unlink-panels
        @change="value => dateChange(value)"
        :start-placeholder="$t('search.startDate')"
        :end-placeholder="$t('search.endDate')"
        :shortcuts="shortcuts"
      />

        <el-button class="inline">{{ $t('public.test')}}</el-button>
    </template>
  </ElProvider>
</template>

<script lang="ts">
import { ElMessage } from 'element-plus';
import ElProvider from '@/components/ElProvider.vue';
import { computed, defineComponent, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
type Language = {
  name: string;
  value: string;
};

export default defineComponent({
  components: {
    ElProvider,
  },
  name: 'LangSelect',
  setup() {
    const { t: $t, locale } = useI18n();
    // 当前语言
    const language = ref(localStorage.getItem('lang'));
    // 可选语言列表
    const languages: Array<Language> = reactive([
      { name: 'en', value: 'en' },
      { name: '中文', value: 'zh-cn' },
    ])
    // 选择语言
    function handleSetLanguage(lang: string) {
      locale.value = lang;
      language.value = lang;
      localStorage.setItem('lang', lang);
      ElMessage({
        message: $t('language.message'),
        type: 'success',
        duration: 800,
      });
    }

    const dateModel = ref('');
    // 快捷选择周
    const getPickerWeek = (num: number) => {
      let date = new Date();
      const end = new Date(date);
      const start = new Date(date);
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7 * num);
      return {
        start,
        end,
      };
    };
    // 快捷选择月
    const getPickerDate = (num: number) => {
      let date = new Date();
      let dateStr = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
      const end = new Date(dateStr + ' 23:59:59');
      const start = new Date(dateStr);

      const startMonth = new Date(dateStr).getMonth() - num;
      const startDate = new Date(dateStr).setMonth(startMonth);
      start.setTime(startDate);
      return {
        start,
        end,
      };
    };
    // 日期快捷选择
    const shortcuts = computed(() => {
      return [
        {
          text: $t('search.lastWeek'),
          value: (() => {
            const { start, end } = getPickerWeek(1);
            return [start, end];
          })(),
        },
        {
          text: $t('search.lastMonth'),
          value: (() => {
            const { start, end } = getPickerDate(1);
            return [start, end];
          })(),
        },
        {
          text: $t('search.lastThreeMonths'),
          value: (() => {
            const { start, end } = getPickerDate(3);
            return [start, end];
          })(),
        },
      ];
    });
    function dateChange(val: any) {
      console.log(val);
    }
    return {
      language,
      languages,
      handleSetLanguage,

      dateModel,
      shortcuts,
      dateChange,
    };
  },
});
</script>

<style>
#app .inline {
  margin-left: 10px;
}
</style>
