---
nav: components
toc: content
---

# StyledQueryFilter

说明.

## 代码演示

```tsx
import {
  ProFormDateRangePicker,
  ProFormText,
} from '@ant-design/pro-components';
import { Form } from 'antd';
import { StyledQueryFilter } from 'ebn-fe-components';
import { useState } from 'react';

export default () => {
  const [state] = useState(1);
  const [searchForm] = Form.useForm();

  const onFinish = async (params) => {
    console.log(params);
  };
  const reset = () => {
    console.log('reset');
  };
  return (
    <StyledQueryFilter
      labelWidth={100}
      form={searchForm}
      onFinish={onFinish}
      onReset={reset}
    >
      <ProFormText label="项目名称" name="projectName" />
      <ProFormText label="企业名称" name="companyName" />
      <ProFormDateRangePicker label="服务日期范围" name="time" />
    </StyledQueryFilter>
  );
};
```

## API

### StyledQueryFilter

<API id="StyledQueryFilter"></API>
