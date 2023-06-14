import React from "react";
import { api } from "../../services";
import { useAuth } from "../../hooks";
import { iContact } from "./styles";

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
      {owner && (
        <div>
          <h1>{owner.name}</h1>
          <img src={owner.imgUrl} alt={owner.name} />
        </div>
      )}
      <ul>{contacts && contacts.map((x) => <li key={x.id}>{x.name}</li>)}</ul>
    </>
  );
};

export default Home;
