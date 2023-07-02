import React from "react";
import { api } from "../../services";
import { useAuth } from "../../hooks";
import { iContact } from "./types";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { StyledHome } from "./styles";
import { Painel } from "../../components/Painel";
import { ContactBox } from "../../components/ContactBox";

const Home = () => {
  const [contacts, setContacts] = React.useState<Array<iContact>>([]);
  const { owner } = useAuth();

  React.useEffect(() => {
    (async () => {
      const resp = await api.get("/contacts");
      setContacts(resp.data);
    })();
  }, []);

  return (
    <>
      <Header user={owner} />
      <StyledHome>
        <ContactBox contacts={contacts}/>   
        <Painel user={owner} />
      </StyledHome>
      <Footer />
    </>
  );
};

export default Home;
