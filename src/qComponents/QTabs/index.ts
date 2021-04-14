import { App } from 'vue';

import QTabs from './src/QTabs.vue';

/* istanbul ignore next */
QTabs.install = (app: App): void => {
  app.component(QTabs.name, QTabs);
};

export type { QTabsProvider } from './src/types';
export default QTabs;
