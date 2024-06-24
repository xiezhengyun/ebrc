---
nav: hooks
toc: content
---

# useTabsTablePagination

useTabsTablePagination 是 ahooks usePagination 的超集。在usePagination的而基础上，封装了搜索组件 `StyledQueryFilter`和Tab组件 `TabSearchTools`联动的搜索，发出请求，reset表单等逻辑。

- 接受一个参数params，里面是defaultTabKey，tabKeyAlias，service（usePagination的service）,options(usePagination的options)。
- 返回
  - processQueryFilterOnReset（reset form 回调函数）
  - onChangeTab tab切换回调函数
  - filterConditions 存储的search params

## 代码演示

```tsx
import {
  ProFormDateRangePicker,
  ProFormText,
} from '@ant-design/pro-components';
import { Form } from 'antd';
import { StyledQueryFilter, TabSearchTools } from 'ebn-fe-components';
import { useTabsTablePagination } from 'ebn-fe-hooks';

export default () => {
  const [searchForm] = Form.useForm();
  const getOrderList = (params) => {
    const { state } = params;
    return new Promise((r) => {
      r({
        data: state === '1' ? [1, 2, 2, 4] : ['a', 'b', 'c', 'd'],
      });
    });
  };
  const {
    data = {},
    run,
    loading,
    pagination,
    refresh,
    onChangeTab,
    processQueryFilterOnReset,
    filterConditions,
  } = useTabsTablePagination({
    defaultTabKey: '1',
    tabKeyAlias: 'state',
    service: (params) => getOrderList(params),
  });

  const onFinish = async (params) => {
    run(params);
  };
  return (
    <div>
      <StyledQueryFilter
        labelWidth={100}
        form={searchForm}
        onFinish={onFinish}
        onReset={processQueryFilterOnReset}
      >
        <ProFormText label="项目名称" name="projectName" />
        <ProFormText label="企业名称" name="companyName" />
        <ProFormDateRangePicker label="服务日期范围" name="time" />
      </StyledQueryFilter>

      <TabSearchTools
        options={[
          { label: '待处理', key: '1' },
          { label: '查看', key: '2' },
        ]}
        // alias={{ value: 'key' }}
        onChange={onChangeTab}
      />
      <div>搜索条件{JSON.stringify(filterConditions || {})}</div>
      <div>结果{JSON.stringify(data || {})}</div>
    </div>
  );
};
```

## 参数 params

接受一个对象，里面参数为

| 参数          | 说明                           | 类型           | 默认值        |
| ------------- | ------------------------------ | -------------- | ------------- |
| defaultTabKey | tab 的默认值                   | string, number |               |
| tabKeyAlias   | tab state 的键值名称，传给后端 | string         | `tabKeyAlias` |
| service       | usePagination的service         | function       | -             |
| options       | usePagination的options         | Object         | -             |
