import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.homework',
  name: '作业帮',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 5000,
      rules: [
        {
          key: 0,
          action: 'click',
          matches:
            '@TextView[text="跳过"][visibleToUser=true][right>getPrev(0).width.div(2)][top<getPrev(0).height.div(2)] <n RelativeLayout < RelativeLayout < [id="android:id/content"] <<n [parent=null]',
          snapshotUrls: 'https://i.gkd.li/i/25938517',
        },
      ],
    },
  ],
});
