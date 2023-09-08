import React from 'react';

import Table from 'react-bootstrap/Table';

import RowWithAdditionExpenseCategory from './Rows/RowWithAdditionExpenseCategory';

export default function TypesExpensesTable() {
    return <>
        <Table striped bordered hover>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                </tr>
                <RowWithAdditionExpenseCategory />
            </tbody>
        </Table>
    </>;
}
