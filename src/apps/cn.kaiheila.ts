import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.kaiheila',
  name: 'KOOK',
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
            '@TextView[text^="跳过"][visibleToUser=true][right>getPrev(4).width.div(2)][top<getPrev(4).height.div(2)] <n RelativeLayout <n FrameLayout <n FrameLayout < [vid="ad_container"] <<n [parent=null]',
          snapshotUrls: 'https://i.gkd.li/i/25939059',
        },
        {
          key: 1,
          action: 'click',
          matches:
            '@View[visibleToUser=true][clickable=true][right>getPrev(2).width.div(2)][top<getPrev(2).height.div(2)] <n FrameLayout < [vid="fl_splash"] <<n [parent=null]',
          snapshotUrls: 'https://i.gkd.li/i/26462531',
        },
      ],
    },
  ],
});
