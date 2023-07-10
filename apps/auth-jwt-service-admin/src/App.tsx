import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { MorList } from "./mor/MorList";
import { MorCreate } from "./mor/MorCreate";
import { MorEdit } from "./mor/MorEdit";
import { MorShow } from "./mor/MorShow";
import { AmitList } from "./amit/AmitList";
import { AmitCreate } from "./amit/AmitCreate";
import { AmitEdit } from "./amit/AmitEdit";
import { AmitShow } from "./amit/AmitShow";
import { MulyList } from "./muly/MulyList";
import { MulyCreate } from "./muly/MulyCreate";
import { MulyEdit } from "./muly/MulyEdit";
import { MulyShow } from "./muly/MulyShow";
import { VikaList } from "./vika/VikaList";
import { VikaCreate } from "./vika/VikaCreate";
import { VikaEdit } from "./vika/VikaEdit";
import { VikaShow } from "./vika/VikaShow";
import { UserTestList } from "./userTest/UserTestList";
import { UserTestCreate } from "./userTest/UserTestCreate";
import { UserTestEdit } from "./userTest/UserTestEdit";
import { UserTestShow } from "./userTest/UserTestShow";
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
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Mor"
          list={MorList}
          edit={MorEdit}
          create={MorCreate}
          show={MorShow}
        />
        <Resource
          name="Amit"
          list={AmitList}
          edit={AmitEdit}
          create={AmitCreate}
          show={AmitShow}
        />
        <Resource
          name="Muly"
          list={MulyList}
          edit={MulyEdit}
          create={MulyCreate}
          show={MulyShow}
        />
        <Resource
          name="Vika"
          list={VikaList}
          edit={VikaEdit}
          create={VikaCreate}
          show={VikaShow}
        />
        <Resource
          name="UserTest"
          list={UserTestList}
          edit={UserTestEdit}
          create={UserTestCreate}
          show={UserTestShow}
        />
      </Admin>
    </div>
  );
};

export default App;
