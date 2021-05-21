import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";

const CryptoList = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <TableRow>
      <TableCell>
        <Avatar alt="Remy Sharp" src={image} />
      </TableCell>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">{symbol}</TableCell>
      <TableCell align="right">${price}</TableCell>
      <TableCell align="right">${volume.toFixed(2)}</TableCell>
      {priceChange < 0 ? (
        <TableCell align="right">{priceChange.toFixed(2)}%</TableCell>
      ) : (
        <TableCell align="right">{priceChange.toFixed(2)}%</TableCell>
      )}
      <TableCell align="right">
        Mkt cap: ${marketcap.toLocaleString()}
      </TableCell>
    </TableRow>
  );
};

export default CryptoList;
