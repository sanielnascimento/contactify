import { ContactCreateForm } from "../../components/Form/ContactCreateForm";
import { MainModal } from "../../components/Modal/MainModal";

import { ContactBox } from "../../components/ContactBox";
import { useAuth, useContact } from "../../hooks";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Painel } from "../../components/Painel";

import { StyledHome } from "./styles";
import { api } from "../../services";
import { useEffect } from "react";
import { SearchForm } from "../../components/Form/SearchForm";

const Home = () => {
  const { navigate, owner, contacts, setContacts } = useAuth();
  const { isOpenModal, toggleMainModal, isShowSearch } = useContact();

  useEffect(() => {
    const token = localStorage.getItem("Contactify:token");
    (async () => {
      try {
        const resp = await api.get("/contacts", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setContacts(resp.data);
      } catch (error: unknown) {
        localStorage.removeItem("Contactify:token");
        navigate("/login");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header client={owner} />
      {isOpenModal && (
        <MainModal toggleModal={toggleMainModal}>
          <ContactCreateForm />
        </MainModal>
      )}
      {isShowSearch && <SearchForm/>}
      <StyledHome>
        <ContactBox contacts={contacts} />
        <Painel user={owner} toggleModal={toggleMainModal} />
      </StyledHome>
      <Footer />
    </>
  );
};

export default Home;
