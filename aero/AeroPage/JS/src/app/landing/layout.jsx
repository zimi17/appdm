import dynamic from "next/dynamic";
import { Suspense } from "react";
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const loading = () => <div />;

const Layout = ({ children }) => {
  return (
    <>
      <Suspense fallback={loading()}>{children}</Suspense>

      <Suspense fallback={loading()}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Layout;
