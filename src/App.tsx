/// <reference types="vite-plugin-svgr/client" />

import { PropertiesPage } from "@/pages/properties";
import { Layout } from "@/components/layout";
import { Providers } from "@/providers";

function App() {
  return (
    <Providers>
      <Layout>
        <PropertiesPage />
      </Layout>
    </Providers>
  );
}

export default App;
