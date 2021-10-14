interface Window {
  __VUE_I18N_LEGACY_API__: boolean;
  __VUE_I18N_FULL_INSTALL__: boolean;
  __INTLIFY_PROD_DEVTOOLS__: boolean;
}

declare const window: Window & typeof globalThis;
declare module '__VUE_I18N_LEGACY_API__';
declare module '__VUE_I18N_FULL_INSTALL__';
declare module '__INTLIFY_PROD_DEVTOOLS__';
