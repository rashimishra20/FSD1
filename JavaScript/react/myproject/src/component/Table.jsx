import React from 'react'
import student from '../data/student.js'
const Table=()=>{
    return(
        <table border={2} cellpadding={5}>
            <caption> Student Dashboard</caption>
            <thead>
                <th>ID</th>
                <th>name</th>
        
                <th>branch</th>
            </thead>
            <tbody>
                {
                    student.map((std,idx)=>{
                        return(
                            <tr>
                                <th>{std.id}</th>
                                <th>{std.name}</th>
                                <th>{std.branch}</th>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    )
}
export default Table
