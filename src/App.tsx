import "./App.css";
import { Routes } from "./routes";
import { Provider } from "react-redux";
import store from "./features/store";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Header from "./components/Header";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Header />
        <Routes />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
