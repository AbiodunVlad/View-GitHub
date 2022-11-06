import logo from "./logo.svg";
import "./App.css";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getGitHub = async () => {
      const res = await fetch("https://api.github.com/users/AbiodunVlad/repos");
      const data = await res.json();
      setItems(data);
    };
    getGitHub();
  }, []);
  console.log(items);

  const handlePageClick = (data) => {
    // console.log(data.selected);
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div className="com=sm-6 col-md-4 v my-2">
            <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
              <div className="card-body">
                <h5 className="card-title text-center h2">{item.name}</h5>
                <a
                  className="card-subtitle mb-2 text-muted text-center"
                  target="_blank"
                  href={item.svn_url}
                >
                  Go To Repo
                </a>
                <p className="card-text">{item.body}</p>
              </div>
            </div>
          </div>
        );
      })}

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={5}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default App;
