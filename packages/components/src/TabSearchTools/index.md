---
nav: components
toc: content
---

# TabSearchTools

说明.

## 代码演示

```tsx
import { Form } from 'antd';
import { TabSearchTools } from 'ebn-fe-components';
import { useState } from 'react';

export default () => {
  const [state] = useState(1);
  const [searchForm] = Form.useForm();

  const onChangeTab = async (params) => {
    console.log(params);
  };

  return (
    <TabSearchTools
      options={[
        { label: '待处理', value: '1' },
        { label: '查看', value: '2' },
      ]}
      alias={{ value: 'key' } as any}
      onChange={onChangeTab}
    />
  );
};
```

### TabSearchTools

<API id="TabSearchTools"></API>
