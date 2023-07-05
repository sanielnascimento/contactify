import { SearchFormInput } from "../../../providers/ContactsProvider/types";
import { MdOutlineCancel } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";

import { useContact } from "../../../hooks";

import { StyledSearchForm } from "./styles";
import { useForm } from "react-hook-form";

import { createPortal } from "react-dom";

export const SearchForm = () => {
  const { register, handleSubmit } = useForm<SearchFormInput>();
  const { searchContacts } = useContact();

  const onSubmit = (data: SearchFormInput) => {    
    searchContacts(data);
  };

  return createPortal(
    <StyledSearchForm noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="form-containter">
        <div className="input-content">
          <input
            id="search"
            type="text"
            placeholder="Pesquisar contato"
            {...register("searchQuery")}
          />
        </div>
        <div className="search-buttons-box">
          <button type="submit">
            <BiSearchAlt2 />
          </button>
          <button type="button">
            <MdOutlineCancel />
          </button>
        </div>
      </div>
    </StyledSearchForm>,
    document.body
  );
};
