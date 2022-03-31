import '../index.css'

export const InputFields = (props) => {
  const { row, column, setcolumn, setrow } = props;

  return (
    <>
      <input
        id="row-input"
        type="number"
        value={row}
        onChange={(e) => setrow(e.target.value)}
        placeholder="Enter number of Rows"
      />
      <input
        id="column-input"
        type="number"
        value={column}
        placeholder="Enter number of Columns"
        onChange={(e) => setcolumn(e.target.value)}
      />
    </>
  );
};
