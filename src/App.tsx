import { AuthProvider } from "./providers/AuthProvider";
import RoutesMain from "./routes";
import GlobalStyle from "./styles/global";

const App = () => (
  <>
    <GlobalStyle />
    <AuthProvider>
      <RoutesMain />
    </AuthProvider>
  </>
);

export default App;
