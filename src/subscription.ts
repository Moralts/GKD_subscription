import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 32767,
  name: 'Moralts 的 GKD 规则',
  version: 4,
  author: 'Moralts',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/Moralts/GKD_subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
