import React from 'react';

function KartuProfil({ nama, npm, kelas, status, fotoUrl }) {
  return (
    <div style={{
      border: '1px solid #D0D7DE',
      borderRadius: '12px',
      padding: '20px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 4px 6px rgba(0,0,0,0.08)',
      maxWidth: '450px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    }}>

      {/* FOTO PROFIL */}
      <img
        src={fotoUrl}
        alt={`Foto ${nama}`}
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '3px solid #E1E8F0'
        }}
      />

      {/* INFORMASI PROFIL */}
      <div>
        <h3 style={{
          color: '#1B365D',
          margin: '0 0 10px 0',
          fontSize: '20px'
        }}>
          {nama}
        </h3>

        <p style={{ margin: '5px 0', fontSize: '14px' }}>
          NPM: <strong>{npm}</strong>
        </p>

        <p style={{ margin: '5px 0', fontSize: '14px' }}>
          Kelas: {kelas}
        </p>

        <span style={{
          display: 'inline-block',
          marginTop: '8px',
          backgroundColor: '#D4EDDA',
          color: '#155724',
          padding: '6px 12px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          Status: {status}
        </span>
      </div>

    </div>
  );
}

export default KartuProfil;