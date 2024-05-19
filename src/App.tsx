import { ClerkProvider } from "@clerk/clerk-react";
import { Authenticated, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";

import { ThemedLayoutV2 } from "./components/layout";
import { ThemedSiderV2 } from "./components/layout/sider";
import { ErrorComponent, useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";
import { dataProvider } from "@refinedev/supabase";
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import authProvider from "./authProvider";
import { Header } from "./components/header";
import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  CategoryShow,
} from "./pages/categories";
import { Login } from "./auth/login";
import { Register } from "./auth/register";
import {ClientsCreate, ClientsEdit, ClientsList, ClientsShow} from "./pages/clients";
import Creator from "./pages/creator/page";
import {supabaseClient} from "./utility";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

function App() {
  return (
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <AntdApp>
          <DevtoolsProvider>
            <Refine
              // dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                dataProvider={dataProvider(supabaseClient)}
              authProvider={authProvider}
              routerProvider={routerBindings}
              notificationProvider={useNotificationProvider}
              resources={[
                {
                  name: "categories",
                  list: "/categories",
                  create: "/categories/create",
                  edit: "/categories/edit/:id",
                  show: "/categories/show/:id",
                  meta: {
                    canDelete: true,
                  },
                },
                {
                  name: "clients",
                  list: "/clients",
                  create: "/clients/create",
                  edit: "/clients/edit/:id",
                  show: "/clients/show/:id",
                  meta: {
                    canDelete: true,
                  },
                },
              ]}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
                projectId: "Ndi2nw-gEmwC7-kBmEtg",
              }}
            >
              <Routes>
                <Route
                  element={
                    <Authenticated
                      key="authenticated-inner"
                      fallback={<CatchAllNavigate to="/login" />}
                    >
                      <ThemedLayoutV2
                        Header={() => <Header sticky />}
                        Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                      >
                        <Outlet />
                      </ThemedLayoutV2>
                    </Authenticated>
                  }
                >
                  <Route
                    index
                    element={<NavigateToResource resource="blog_posts" />}
                  />
                  <Route path="/categories">
                    <Route index element={<CategoryList />} />
                    <Route path="create" element={<CategoryCreate />} />
                    <Route path="edit/:id" element={<CategoryEdit />} />
                    <Route path="show/:id" element={<CategoryShow />} />
                  </Route>
                  <Route path="/clients">
                    <Route index element={<ClientsList />} />
                    <Route path="create" element={<ClientsCreate />} />
                    <Route path="edit/:id" element={<ClientsEdit />} />
                    <Route path="show/:id" element={<ClientsShow />} />
                  </Route>
                  <Route path="/creator" element={<Creator />}></Route>
                  <Route path="*" element={<ErrorComponent />} />
                </Route>
                <Route
                  element={
                    <Authenticated
                      key="authenticated-outer"
                      fallback={<Outlet />}
                    >
                      <NavigateToResource />
                    </Authenticated>
                  }
                >
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Route>
              </Routes>

              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </AntdApp>
      </ClerkProvider>
    </BrowserRouter>
  );
}

export default App;
