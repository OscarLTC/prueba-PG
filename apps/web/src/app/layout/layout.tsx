import { ReactComponentElement } from 'react';
import './layout.scss';

/* eslint-disable-next-line */
export interface LayoutProps {}

export function Layout({ children }: any) {
  return (
    <div className="flex justify-center items-center mt-[100px] my-3">
      {children}
    </div>
  );
}

export default Layout;
