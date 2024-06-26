import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CountUp from 'react-countup';

const TAX_RATE = 0.07;

function ccyFormat(num: number) {
    return `${num.toFixed(2)}`;
}


const TextLabel = ({ text }: any) => {
    return <div className='text-[12px]'>{text}</div>
}



export default function OwnerEarnningTable({ rows = [], total }: any) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{}} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell>Course</TableCell>
                        <TableCell align="right">Qty.</TableCell>
                        <TableCell align="right">Unit</TableCell>
                        <TableCell align="right">Profit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map?.((row) => (
                        <TableRow key={row?.name}>
                            <TableCell>{row?.name}</TableCell>
                            <TableCell align="right">{row?.qty}</TableCell>
                            <TableCell align="right">{row?.price}</TableCell>
                            <TableCell align="right">{row?.sum}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell rowSpan={3} colSpan={3} align="right" className=' font-semibold' ><TextLabel text="Sum" /></TableCell>
                        <TableCell colSpan={2} align="right" className='font-semibold'><CountUp end={total}/></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
