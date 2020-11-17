import React from 'react';

const TableRow = ({name ,email ,phone , message , status}) => {
    return (
        <tr>
            <td >{name}</td>
            <td>{email}</td>
             <td>{phone}</td>
             <td>{message}</td>
            <td>{status} 
              <i className="ml-2 fa fa-angle-down"aria-hidden="true">
               </i>
            </td>
        </tr>
    );
};

export default TableRow;