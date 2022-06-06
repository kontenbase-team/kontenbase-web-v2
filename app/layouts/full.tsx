import { Footer, NavigationBar } from "~/components";

import type { HTMLElementProps } from "~/types";

export const LayoutFull = ({ children }: HTMLElementProps) => {
  return (
    <div className="layout">
      <NavigationBar />

      <div className="layout-center">
        <main className="layout-content">{children}</main>
      </div>

      <Footer />
    </div>
  );
};
