import React from 'react';

function BadgeSkill({ namaSkill, level }) {

  // Menentukan warna berdasarkan level keahlian
  const warnaLevel = {
    Pemula: {
      backgroundColor: '#FDE8E8',
      color: '#C0392B'
    },
    Menengah: {
      backgroundColor: '#FFF3CD',
      color: '#856404'
    },
    Mahir: {
      backgroundColor: '#D4EDDA',
      color: '#155724'
    }
  };

  return (
    <span
      style={{
        display: 'inline-block',
        padding: '8px 14px',
        margin: '5px',
        borderRadius: '20px',
        fontSize: '13px',
        fontWeight: 'bold',
        ...warnaLevel[level]
      }}
    >
      {namaSkill} - {level}
    </span>
  );
}

export default BadgeSkill;