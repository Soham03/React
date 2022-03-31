import { useEffect, useState } from "react";
import { GridWithRandomAlphabets } from "./Grid";
import { createTableLikeArray, generateArrayForGrid } from "./helpers";
import { InputFields } from "./InputFields";
import  '../index.css';
 const SearchAbleGrid = () => {
  const [row, setrow] = useState(0);
  const [column, setcolumn] = useState(0);
  const [generatedArray, setGeneratedArray] = useState();

  useEffect(() => {
    if (row !== 0 || column !== 0) {
      setGeneratedArray(generateArrayForGrid(row, column));
    }
  }, [row, column]);
  
  return (
    <>
     <h1>Welcome</h1>
      <InputFields
        row={row}
        column={column}
        setrow={setrow}
        setcolumn={setcolumn}
      />
      <GridWithRandomAlphabets
        tableArray={generatedArray}
        row={row}
        column={column}
      />
    </>
  );
};

export default SearchAbleGrid; 
