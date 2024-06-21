---
nav: utils
toc: content
---

# form

此文件为表单校验正则

## 表单校验

```tsx
import { ProForm, ProFormText } from '@ant-design/pro-components';
import {
  AmountRule,
  IdRule,
  NaturalnumRule,
  PhoneRule,
  PositiveIntegerRule,
  RequiredRules,
} from '@ebaorc/utils';
export default () => {
  const formFinish = (parmas) => {
    console.log(params);
  };
  return (
    <ProForm onFinish={formFinish}>
      <ProFormText name="RequiredRules" label="必填" {...RequiredRules} />
      <ProFormText
        label="手机电话"
        name="legalPhone"
        rules={[PhoneRule, RequiredRules.rules[0]]}
      />
      <ProFormText
        label="身份证"
        name="id"
        rules={[IdRule, RequiredRules.rules[0]]}
      />
      <ProFormText
        label="自然数，0，1，2..."
        name="NaturalnumRule"
        rules={[NaturalnumRule, RequiredRules.rules[0]]}
      />
      <ProFormText
        label="正整数1，2，3..."
        name="PositiveIntegerRule"
        rules={[PositiveIntegerRule, RequiredRules.rules[0]]}
      />
      <ProFormText
        label="金额，大于等于0，最多2位小数"
        name="AmountRule"
        rules={[AmountRule, RequiredRules.rules[0]]}
      />
    </ProForm>
  );
};
```
