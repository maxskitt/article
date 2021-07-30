import MainLayout from "../src/components/layouts/main";
import {Provider} from "react-redux";
import store from "../src/redux/store";

function MyApp({Component, pageProps}) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  )

}

export default MyApp;
