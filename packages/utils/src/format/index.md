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
import { resolveAlias } from 'ebn-fe-utils';
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
import { isNullOrUndefined } from 'ebn-fe-utils';
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

<hr />

## computedTableRowSerialNo

表格序号，支持翻页，支持倒序

<!-- ## 代码演示 -->

```tsx
import { Checkbox, Table } from 'antd';
import { computedTableRowSerialNo } from 'ebn-fe-utils';
import { useState } from 'react';
export default () => {
  const [order, setOrder] = useState(false);
  const onChange = () => {
    setOrder(!order);
  };
  const pagination = {
    total: 5,
    current: 1,
    pageSize: 10,
  };
  const columns = [
    {
      title: '序号',
      key: 'index',
      render: (text, record, index) =>
        computedTableRowSerialNo({ pagination, index, isReverseOrder: order }),
    },
  ];
  return (
    <>
      <Checkbox onChange={onChange}>Order</Checkbox>
      <Table columns={columns} dataSource={[1, 2, 3, 4, 5]}></Table>
    </>
  );
};
```

### API

| 参数           | 说明           | 类型       | 默认值 |
| -------------- | -------------- | ---------- | ------ |
| pagination     | 表格的分页数据 | Pagination | -      |
| index          | 表格的index    | number     | -      |
| isReverseOrder | 顺序           | Boolean    | false  |

## encryptPhoneNumber

手机号中间4位加密，\*

<!-- ## 代码演示 -->

```tsx
import { encryptPhoneNumber } from 'ebn-fe-utils';
const phone = 18155982440;
export default () => (
  <div>
    <p>phone: {phone}</p>
    <p>encryptPhone: {encryptPhoneNumber(phone)}</p>
  </div>
);
```

### API

| 参数  | 说明   | 类型   | 默认值 |
| ----- | ------ | ------ | ------ |
| phone | 手机号 | string | -      |

<hr />

## showEmptyText

统一展示数据。如果是null 或者 undefined，展示为 -。可以传入第二个参数，用来处理数据并展示。

<!-- ## 代码演示 -->

```tsx
import { encryptPhoneNumber, showEmptyText } from 'ebn-fe-utils';
const text1 = 'text1';
const text2 = null;
const text3 = undefined;
const text4 = 0;
const text5 = 18155982440;
export default () => (
  <div>
    <p>text1: {showEmptyText(text1)}</p>
    <p>text2: {showEmptyText(text2)}</p>
    <p>text3: {showEmptyText(text3)}</p>
    <p>text4: {showEmptyText(text4)}</p>
    <p>text5: {showEmptyText(text5, encryptPhoneNumber)}</p>
  </div>
);
```

### API

| 参数         | 说明           | 类型   | 默认值 |
| ------------ | -------------- | ------ | ------ |
| txt          | 展示的文字     | string | -      |
| computedShow | 处理文字的方法 | string | -      |

<hr />
