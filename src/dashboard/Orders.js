import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod) {
  return { id, date, name, shipTo, paymentMethod };
}

const rows = [
  createData(0, 'Скопје-Водно', '15', '500 m2', '03-07-2019'),
  createData(1, 'Велес-Езеро Младост', '23', '1100 m2', '27-07-2019'),
  createData(2, 'Скопје-Матка', '17', '750 m2', '28-07-2019'),
  createData(3, 'Прилеп-Могила', '21', '1300 m2', '04-08-2019'),
  createData(4, 'Крушево-Мечкин Камен', '13', '900 m2', '11-08-2019'),
  createData(5, 'Куманово-Кокино', '18', '880 m2', '15-09-2019')
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Локација</TableCell>
            <TableCell>Број на активисти</TableCell>
            <TableCell>Исчистена површина</TableCell>
            <TableCell>Датум</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              {/* <TableCell align="right">{row.amount}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="">
          See more orders
        </Link>
      </div>
    </>
  );
}
