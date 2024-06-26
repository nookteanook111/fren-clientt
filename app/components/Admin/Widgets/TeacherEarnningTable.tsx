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


interface Row {
    desc: string;
    qty: number;
    unit: number;
    price: number;
}

const TextLabel = ({ text }: any) => {
    return <div className='text-[12px]'>{text}</div>
}

export default function TeacherEarnningTable({ rows = [], total, totalEarning, totalCommission }: any) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{}} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Earnning</TableCell>
                        <TableCell align="right">Commission</TableCell>
                        <TableCell align="right">Profit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map?.((row) => (
                        <TableRow key={row?.name}>
                            <TableCell>{row?.name}</TableCell>
                            <TableCell align="right"> <CountUp end={row?.earning} /></TableCell>
                            <TableCell align="right"><CountUp end={row?.commission} /></TableCell>
                            <TableCell align="right"><CountUp end={row?.earning - row?.commission} /></TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell rowSpan={3} colSpan={2} />
                        <TableCell align="right" rowSpan={1} colSpan={1} ><TextLabel text="Total Earning" /></TableCell>
                        <TableCell align="right" className='p-[0px]'><CountUp end={totalEarning} /></TableCell>
                    </TableRow>
                    <TableRow>
                        {/* <TableCell rowSpan={3} colSpan={1}/> */}
                        <TableCell align="right" rowSpan={1} colSpan={1}><TextLabel text="Total Commission" /></TableCell>
                        <TableCell align="right"><CountUp end={totalCommission} /></TableCell>
                    </TableRow>
                    <TableRow>
                        {/* <TableCell rowSpan={3} colSpan={1}/> */}
                        <TableCell align="right" rowSpan={1} colSpan={1}><TextLabel text="Sum" /></TableCell>
                        <TableCell align="right"><CountUp end={total} /></TableCell>
                    </TableRow>
                    {/* <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell align="right" colSpan={2}>Subtotal</TableCell>
                        <TableCell align="right">{ccyFormat(20)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell align="right" colSpan={2}>Subtotal</TableCell>
                        <TableCell align="right">{ccyFormat(20)}</TableCell>
                    </TableRow> */}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
