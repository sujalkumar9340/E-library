import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import Header from "./Header";
import { useAxios } from "./APi";
import Book from "./Book";
function Frontpage() {
  const [search, setSearch] = useState("");
  const [callApi, setCallApi] = useState(false);
  const data = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();
  const {  isLoading } = useAxios(
    `https://www.googleapis.com/books/v1/volumes?q=${search}`,
    callApi,
    setCallApi,
    dispatch
  );
  console.log(data);
  return (
    <div className="mainpage_container">
      <div className="container ">
        <Header />
        {isLoading ? (
          <p>
          <i class="fa-solid fa-spinner"></i>
          </p>
        ) : (
          <div className="mainpage">
            <div className="container">
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label"
                ></label>
                <i className="fa-solid fa-magnifying-glass search_icon"></i>
                <input
                  type="text"
                  className="form-control "
                  id="exampleFormControlInput1"
                  name="booktitle"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  placeholder="Enter books  title or authors name "
                />
              </div>
              <div class="col-md-12 d-flex justify-content-end ">
                <button
                  onClick={() => {
                    setCallApi(!callApi);
                  }}
                  type="button"
                  class="btn btn-success mt-1"
                >
                  search
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {data &&
        data?.items?.length &&
        data?.items?.map((item) => {
          return <Book item={item} />;
        })}
    </div>
  );
}

export default Frontpage;
