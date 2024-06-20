import type { QueryFilterProps } from '@ant-design/pro-components';
import { QueryFilter } from '@ant-design/pro-components';
import './index.less';
export default function StyledQueryFilter(props: QueryFilterProps) {
  const { children, ...rest } = props;
  return (
    <QueryFilter
      className={'styledQueryFilter'}
      defaultColsNumber={7}
      defaultCollapsed={false}
      {...rest}
    >
      {children}
    </QueryFilter>
  );
}
