import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const { isEmpty } = require('lodash');



class DisplayLessons extends Component {
    render() {
        const allLessons = this.props.lessons;
        const lessons = !isEmpty(allLessons) ? allLessons : [];

        return (
            <div className="lessons">
                {!isEmpty(lessons) ? <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {lessons.map(({ name, price, lessonDate }, key) => (
                            <TableRow key={key}>
                                <TableCell component="th" scope="row"> {name ? name : 'No Name Found'} </TableCell>
                                <TableCell align="right">{lessonDate ? lessonDate : 'No Date Found'}</TableCell>
                                <TableCell align="right">{price ? price : 'No Price Found'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table> : null}
            </div>
        );
    }
}

export default DisplayLessons;
