import React from 'react';

type Props = {
  as?: keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> | string;
  children?: React.ReactNode;
  [key: string]: any;
};

export default function CreatePolymorphicComponent({ as = 'div', children, ...props }: Props) {
  // If `as` is a string (intrinsic), create that element; otherwise render the component
  if (typeof as === 'string') {
    return React.createElement(as, props, children);
  }
  const Component = as as any;
  return <Component {...props}>{children}</Component>;
}
