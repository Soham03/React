import { useEffect, useState } from "react";
import { createTableLikeArray, searchForValues } from "./helpers";
import { TableRow } from "./Table";
import "../index.css"

export const GridWithRandomAlphabets = (props) => {
  const { tableArray, row, column } = props;
  const [array, setArray] = useState([]);
  const [searchedValue, setSearchedValue] = useState(null);

  useEffect(() => {
    if (row !== 0 && column !== 0 && tableArray?.length > 0) {
      setArray(createTableLikeArray(row, column, tableArray));
    }
  }, [tableArray]);

  const container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const onHandleSearchChange = (e) => {
    setSearchedValue(e.target.value);
  };

  return (
    <div style={container}>
      <div style={{ margin: "10px" }}>
        <input
          id="search-input"
          type="text"
          maxLength={1}
          value={searchedValue}
          onChange={onHandleSearchChange}
          placeholder="Search Value"
        />
        <button
         id="search"
          onClick={() => {
            setArray(
              createTableLikeArray(
                row,
                column,
                searchForValues(array, searchedValue)
              )
            );
          }}
        >
          Search
        </button>
      </div>
      {!array?.length ? (
        <h1>Cannot Create Table</h1>
      ) : (
        <table style={{ border: "2px solid black" }}>
          <tbody>
            {array?.map((item, index) => {
              return <TableRow key={`tr-${index}`} tableRow={item} />;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
