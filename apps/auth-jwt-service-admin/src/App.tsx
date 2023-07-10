import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VikaList } from "./vika/VikaList";
import { VikaCreate } from "./vika/VikaCreate";
import { VikaEdit } from "./vika/VikaEdit";
import { VikaShow } from "./vika/VikaShow";
import { MorList } from "./mor/MorList";
import { MorCreate } from "./mor/MorCreate";
import { MorEdit } from "./mor/MorEdit";
import { MorShow } from "./mor/MorShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"auth-jwt-service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Vika"
          list={VikaList}
          edit={VikaEdit}
          create={VikaCreate}
          show={VikaShow}
        />
        <Resource
          name="Mor"
          list={MorList}
          edit={MorEdit}
          create={MorCreate}
          show={MorShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
