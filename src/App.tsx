import { AuthProvider } from "./providers/AuthProvider";
import { ContactProvider } from "./providers/ContactsProvider";
import RoutesMain from "./routes";
import GlobalStyle from "./styles/global";

const App = () => (
  <>
    <GlobalStyle />
    <AuthProvider>
      <ContactProvider>
        <RoutesMain />
      </ContactProvider>
    </AuthProvider>
  </>
);

export default App;
