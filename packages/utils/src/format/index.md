---
nav: utils
toc: content
---

# format

此文件方法为格式化，转化数据

## resolveAlias

根据传入参数aliasMap，构建一个新map返回

<!-- ## 代码演示 -->

```tsx
import { resolveAlias } from '@ebaorc/utils';
const map = { name: 'abc', value: '123' };
const newMap = resolveAlias(map, { value: 'key' });

export default () => (
  <div>
    <p>原数据：{JSON.stringify(map)}</p>
    <p>转化后：{JSON.stringify(newMap)}</p>
  </div>
);
```

### API

| 参数     | 说明                                           | 类型   | 默认值    |
| -------- | ---------------------------------------------- | ------ | --------- |
| obj      | 原数据map                                      | Object | -         |
| aliasMap | 互相转化的键值 { value: 'key' } 把value转为key | Object | `default` |

<hr />

## isNullOrUndefined

判断是否是null 或者 Undefined。返回Boolean

<!-- ## 代码演示 -->

```tsx
import { isNullOrUndefined } from '@ebaorc/utils';
const flag = isNullOrUndefined(1);
const flag2 = isNullOrUndefined(null);
export default () => (
  <div>
    <p>1: {flag + ''}</p>
    <p>null: {flag2 + ''}</p>
  </div>
);
```

### API

| 参数   | 说明 | 类型 | 默认值 |
| ------ | ---- | ---- | ------ |
| target | 数据 | any  | -      |
