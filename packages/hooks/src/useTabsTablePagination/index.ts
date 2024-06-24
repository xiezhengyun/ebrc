import { usePagination } from 'ahooks';
import { PaginationOptions, Service } from 'ahooks/lib/usePagination/types';
import { isNullOrUndefined } from 'ebn-fe-utils';
import { useState } from 'react';

type TPaginationHookParams = {
  service: Service<any, any>;
  options?: PaginationOptions<any, any>;
};
export default function useTabsTablePagination(
  params: TPaginationHookParams & {
    defaultTabKey: any;
    tabKeyAlias?: string;
  },
) {
  const {
    defaultTabKey,
    tabKeyAlias = 'tabKeyAlias',
    service,
    options,
  } = params;

  const [filterConditions, setFilterConditions] = useState<any>({
    [tabKeyAlias]: defaultTabKey,
  });

  const paginationHookRes = usePagination(
    ({ current = 1, pageSize = 10, ...restParams }) => {
      const newConditions = {
        ...restParams,
        page: current,
        limit: pageSize,
        [tabKeyAlias]: isNullOrUndefined(restParams?.[tabKeyAlias])
          ? filterConditions?.[tabKeyAlias]
          : restParams?.[tabKeyAlias],
      };
      setFilterConditions(newConditions);
      return service(newConditions);
    },
    options,
  );

  const processQueryFilterOnReset = () => {
    setFilterConditions({
      page: 1,
      limit: 10,
      [tabKeyAlias]: filterConditions?.[tabKeyAlias],
    });
  };
  const onChangeTab = (activeKey: string) => {
    const newFilterConditions = {
      ...filterConditions,
      page: 1,
      limit: 10,
      [tabKeyAlias]: activeKey,
    };
    setFilterConditions(newFilterConditions);
    paginationHookRes?.run?.(newFilterConditions);
  };

  return {
    ...paginationHookRes,
    processQueryFilterOnReset,
    onChangeTab,
    filterConditions,
  };
}
