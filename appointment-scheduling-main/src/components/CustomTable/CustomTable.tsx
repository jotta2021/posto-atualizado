import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { ButtonAction } from './CustomTable.styles'
export function CustomTable(props: any) {
  const { data, columns } = props

  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((column: any) => (
            <TableCell key={column.field}>{column.headerName}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row: any) => (
          <TableRow key={row.id}>
            {columns.map((column: any) => (
              <TableCell key={column.field}>{row[column.field]}</TableCell>
            ))}
            <ButtonAction
              onClick={() => {
                console.log(row)
              }}
            >
              <BsThreeDotsVertical />
            </ButtonAction>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
