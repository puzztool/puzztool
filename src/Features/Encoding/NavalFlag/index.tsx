import React from 'react';
import { NavalFlags } from 'puzzle-lib';
import ReferenceList from '../../../Common/ReferenceList';
import './index.scss';

function NavalFlag() {
  const characters = NavalFlags.instance.entries;
  return (
    <ReferenceList>
      {characters.map((entry) => (
        <div>
          <img
            className="NavalFlag-flagImage"
            src={`data:image/svg+xml,${encodeURIComponent(entry.image.render())}`}
            alt={entry.character}
          />
          <br />{entry.character}
        </div>
      ))}
    </ReferenceList>
  );
}

export default NavalFlag;
