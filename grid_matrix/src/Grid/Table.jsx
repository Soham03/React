export const TableRow = (props) => {
  const { tableRow } = props;
  return (
    <>
      <tr>
        {tableRow.map((item, index) => {
          return (
            <td
              style={{
                border: "1px solid black",
                color: item?.isSearched ? "red" : "black",
              }}
              key={`${item?.alphabet || "-"}_${index}`}
            >
              {item?.alphabet || "-"}
            </td>
          );
        })}
      </tr>
    </>
  );
};
