import { ContactBox } from "../../components/ContactBox";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Painel } from "../../components/Painel";

import { useAuth } from "../../hooks";
import { StyledHome } from "./styles";

import { api } from "../../services";
import { iContact } from "./types";

import React from "react";


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
        <ContactBox contacts={contacts} />
        <Painel user={owner} />
      </StyledHome>
      <Footer />
    </>
  );
};

export default Home;
