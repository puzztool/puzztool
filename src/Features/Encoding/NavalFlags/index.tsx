import React from 'react';
import { NavalFlags as Data } from 'puzzle-lib';
import Table from 'react-bootstrap/Table';
import './index.scss';

function NavalFlags() {
  return (
    <div className="NavalFlags">
      <Table striped={true} responsive={true}>
        <thead>
          <tr>
            <th>Letter</th>
            <th>Flag</th>
          </tr>
        </thead>
        <tbody>
          {Data.instance.entries.map((value) => (
            <tr key={value.character}>
              <td>{value.character}</td>
              <td>
                <img
                  className="NavalFlags-flagImage"
                  src={`data:image/svg+xml,${encodeURIComponent(value.image.render())}`}
                  alt={value.character}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default NavalFlags;
