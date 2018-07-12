import { storiesOf } from '@storybook/react';
import React from 'react';
import Table from '.';
import trbl from '../../utility/trbl';
import Box from '../Box';
import Button from '../Button';
import Icon from '../Icon';
import Spacer from '../Spacer';
import TableCell from '../TableCell';
import TableRow from '../TableRow';
import Text from '../Text';

storiesOf('Table', module).add('Default', () => {
    const headings = ['Filter', 'Filter Type', 'Eenheden', ''];
    const contents = [
        ['Merk', 'LIJST', '$122,500.00'],
        ['Prijs', 'BEREIK', '$122,500.00'],
        ['Lengte', 'BEREIK', '$19,090.00'],
        ['Breedte', 'BEREIK', '$122,500.00'],
        ['Hoogte', 'BEREIK', '$122,500.00'],
        ['Gewicht', 'BEREIK', '$122,500.00'],
        ['Voorraad', 'LIJST', '$122,500.00'],
    ];

    return (
        <Table>
            <TableRow>
                {headings.map(cell => (
                    <TableCell tableHead>
                        <Text strong>{cell}</Text>
                    </TableCell>
                ))}
            </TableRow>
            {contents.map(row => (
                <TableRow>
                    {row.map(cell => {
                        if (cell === 'BEREIK') {
                            return (
                                <TableCell>
                                    <Box>
                                        <Spacer offset={trbl(0, 9, 0, 0)} offsetType="inner">
                                            <Icon size="small" icon="sliders" />
                                        </Spacer>
                                        <Text>bereik</Text>
                                    </Box>
                                </TableCell>
                            );
                        } else if (cell === 'LIJST') {
                            return (
                                <TableCell>
                                    <Box>
                                        <Spacer offset={trbl(0, 9, 0, 0)} offsetType="inner">
                                            <Icon size="small" icon="list" />
                                        </Spacer>
                                        <Text>lijst</Text>
                                    </Box>
                                </TableCell>
                            );
                        } else {
                            return (
                                <TableCell key="id1">
                                    <Text>{cell}</Text>
                                </TableCell>
                            );
                        }
                    })}
                    <TableCell align="right">
                        <Box justifyContent="flex-end">
                            <Spacer offset={trbl(0, 18, 0, 0)} offsetType="inner">
                                <Icon size="small" icon="bars" />
                            </Spacer>
                            <Spacer offset={trbl(0, 9, 0, 0)} offsetType="inner">
                                <Icon size="small" icon="trash" />
                            </Spacer>
                        </Box>
                    </TableCell>
                </TableRow>
            ))}
        </Table>
    );
});
