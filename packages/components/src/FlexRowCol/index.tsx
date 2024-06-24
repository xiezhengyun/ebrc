import { useSize } from 'ahooks';
import { Col, ColProps, Row, RowProps } from 'antd';
import React, {
  Children,
  PropsWithChildren,
  isValidElement,
  useRef,
} from 'react';

export const Gutter: [number, number] = [24, 0];
export default function (
  props: PropsWithChildren<
    {
      colProps?: ColProps;
      width?: number;
      gutter?: number[];
    } & RowProps
  >,
) {
  const {
    colProps = { span: 12 },
    width = 250,
    gutter = Gutter,
    ...rest
  } = props;
  const ref = useRef(null);
  const size = useSize(ref);

  const gapX = (gutter as number[])?.[0] || 0;

  const itemWidth = width + gapX;

  const colCount = Math.floor((size?.width || 0) / itemWidth);

  const span = Math.floor(24 / colCount);

  const _colProps = { ...colProps, span: span > 24 ? 24 : span };

  return (
    <Row gutter={gutter} {...rest} ref={ref}>
      {Children.map(props.children, (child) => {
        if (!isValidElement(child)) {
          return child;
        }
        if (child.props.hidden) {
          return child;
        }

        const childColProps = child.props.colProps || _colProps;

        return <Col {...childColProps}>{child}</Col>;
      })}
    </Row>
  );
}
