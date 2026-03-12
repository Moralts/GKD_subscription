import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.umu168.wumu',
  name: '唔姆',
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
            '@TextView[text^="跳过"][visibleToUser=true][right>getPrev(5).width.div(2)][top<getPrev(5).height.div(2)] <n FrameLayout <n FrameLayout <n FrameLayout <n RelativeLayout < [vid="fl_splash"] <<n [parent=null]',
          snapshotUrls: 'https://i.gkd.li/i/25939903',
        },
      ],
    },
  ],
});
