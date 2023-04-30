import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="search__area">
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className=" me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button className="" type="submit">
          <AiOutlineSearch style={{ fontSize: "24px" }} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
