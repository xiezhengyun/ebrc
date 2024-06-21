type AliasMap<T> = {
  [key: string]: keyof T;
};
export function resolveAlias<T>(obj: T, aliasMap: AliasMap<T>): Partial<T> {
  const resolvedObj: Partial<T> = {};
  for (const key in obj) {
    if (key in aliasMap) {
      const alias = aliasMap[key];
      resolvedObj[alias] = obj[key];
    } else {
      resolvedObj[key] = obj[key];
    }
  }
  return resolvedObj;
}

export function isNullOrUndefined(target: any) {
  return target === null || target === undefined;
}
interface Pagination {
  total: number;
  current: number;
  pageSize: number;
}
interface TableRowNoType {
  pagination: Pagination;
  index: number;
  isReverseOrder?: Boolean;
}
/**
 * 表格序号
 * @param TableRiwNoType
 * @returns
 */
export function computedTableRowSerialNo({
  pagination,
  index,
  isReverseOrder = false,
}: TableRowNoType) {
  if (isReverseOrder) {
    return (
      pagination.total - (pagination.current - 1) * pagination.pageSize - index
    );
  } else {
    return (pagination.current - 1) * pagination.pageSize + (index + 1);
  }
}

/**
 * 对中国手机号进行加密中间四位。
 * @param phoneNumber - 需要加密的手机号
 * @returns 加密后的手机号
 */
export function encryptPhoneNumber(phoneNumber: string): string {
  // 将中间四位替换为星号
  const encryptedPhoneNumber = String(phoneNumber).replace(
    /^(\d{3})\d{4}(\d{4})$/,
    '$1****$2',
  );
  return encryptedPhoneNumber;
}

export function showEmptyText<T>(txt: T, computedShow?: (arg0: T) => string) {
  if (isNullOrUndefined(txt) || txt === '') {
    return '-';
  }
  return computedShow ? computedShow(txt) : txt;
}
