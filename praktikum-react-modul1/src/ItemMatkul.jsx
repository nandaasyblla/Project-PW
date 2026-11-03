import React from 'react';

function ItemMatkul({ kode, nama, sks, hari }) {
  return (
    <div className="matkul-card">

      <div>
        <h3>{kode}</h3>
        <p>{nama}</p>
        <small>Jadwal: {hari}</small>
      </div>

      <span className="sks-badge">
        {sks} SKS
      </span>

    </div>
  );
}

export default ItemMatkul;