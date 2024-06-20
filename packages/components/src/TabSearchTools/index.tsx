import { resolveAlias } from '@ebaorc/utils';
import { Tabs, TabsProps } from 'antd';
import { Ref, forwardRef, memo, useImperativeHandle, useMemo } from 'react';

type TabSearchToolOption = any; //TabsProps['items'][0];
type OptionAliasMap<T> = {
  [key in keyof T]: keyof TabSearchToolOption;
};
export type TTabSearchToolsProps<T = any> = {
  options: T[];
  alias?: OptionAliasMap<T>;
  onChange: (activeKey: string) => any;
  tabsProps?: TabsProps;
};
export type TTabSearchToolsRef = {};
const TabSearchTools = (
  props: TTabSearchToolsProps,
  ref: Ref<TTabSearchToolsRef>,
) => {
  const { options, alias, onChange, tabsProps = {} } = props;

  const items = useMemo(() => {
    return alias
      ? options?.map?.((item) => resolveAlias(item, alias))
      : options;
  }, [options, alias]);

  useImperativeHandle(ref, () => {
    return {};
  });
  return <Tabs items={items as any} onChange={onChange} {...tabsProps} />;
};

export default memo(
  forwardRef<TTabSearchToolsRef, TTabSearchToolsProps>(TabSearchTools),
);
