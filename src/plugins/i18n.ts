import { App } from 'vue';
import i18n from '@/locales';

export default function loadComponent(app: App): void {
  app.use(i18n);
}
