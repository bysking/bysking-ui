import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: ' ',
  },
  resolve: {
    atomDirs: [
      // dumi 2.0 拆分了普通文档与资产文档的解析逻辑，其中资产文档的解析仅识别解析路径顶层 md 及顶层下的 index.md，其他路径需要主动配置组件资产查找路径
      { type: 'bysking-components', dir: 'packages/bysking-components/src' },
    ],
  },

  // 配置 md文档中：import { Foo } from 'bysking-components'; 能正确解析到组件位置
  alias: {
    'bysking-components': path.join(
      __dirname,
      'packages/bysking-components/src',
    ),
  },
});
