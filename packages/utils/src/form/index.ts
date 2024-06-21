export const RequiredRules = {
  rules: [
    {
      required: true,
    },
  ],
  required: true,
};

export const PhoneRule = {
  pattern: /^1[3-9]\d{9}$/,
  message: '请输入正确的手机号',
};

export const IdRule = {
  pattern:
    /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
  message: '请输入正确的身份证号码',
};

export const NaturalnumRule = {
  pattern: /^[0-9]\d*$/,
  message: '只能输入自然数',
};

export const PositiveIntegerRule = {
  pattern: /^[1-9]\d*$/,
  message: '只能输入正整数',
};

// 数字最多2位小数
export const AmountRule = {
  pattern: /^\d+(\.\d{1,2})?$/,
  message: '请输入正确的金额',
};
