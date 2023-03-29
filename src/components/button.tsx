import { PropsWithChildren } from 'react';

const Button = ({ children, ..._props }: PropsWithChildren) => {
  return <button className="px-5 py-2">{children}</button>;
};

export default Button;
