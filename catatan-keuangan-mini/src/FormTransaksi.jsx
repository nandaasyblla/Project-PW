import { useState } from 'react';

function FormTransaksi({ onTambah }) {

  // State untuk menyimpan keterangan transaksi
  const [keterangan, setKeterangan] = useState('');

  // State untuk menyimpan nominal transaksi
  const [nominal, setNominal] = useState('');

  // State untuk menentukan jenis transaksi
  const [jenis, setJenis] = useState('pemasukan');

  // Fungsi ketika formulir dikirim
  const tanganiSubmit = (event) => {
    event.preventDefault();

    // Validasi input
    if (
      keterangan.trim() === '' ||
      nominal === '' ||
      Number(nominal) <= 0
    ) {
      return;
    }

    // Mengirim data ke komponen App
    onTambah({
      keterangan: keterangan.trim(),
      nominal: Number(nominal),
      jenis: jenis
    });

    // Mengosongkan formulir
    setKeterangan('');
    setNominal('');
    setJenis('pemasukan');
  };

  return (
    <form onSubmit={tanganiSubmit} className="form-transaksi">

      {/* Input keterangan */}
      <div className="form-group">
        <label>Keterangan Transaksi</label>

        <input
          type="text"
          placeholder="Contoh: Uang saku bulanan"
          value={keterangan}
          onChange={(event) =>
            setKeterangan(event.target.value)
          }
        />
      </div>

      {/* Input nominal */}
      <div className="form-group">
        <label>Nominal (Rp)</label>

        <input
          type="number"
          placeholder="Contoh: 500000"
          min="1"
          value={nominal}
          onChange={(event) =>
            setNominal(event.target.value)
          }
        />
      </div>

      {/* Pilihan jenis transaksi */}
      <div className="form-group">
        <label>Jenis Transaksi</label>

        <select
          value={jenis}
          onChange={(event) =>
            setJenis(event.target.value)
          }
        >
          <option value="pemasukan">Pemasukan</option>
          <option value="pengeluaran">Pengeluaran</option>
        </select>
      </div>

      {/* Tombol submit */}
      <button type="submit" className="btn-tambah">
        + Tambah Transaksi
      </button>

    </form>
  );
}

export default FormTransaksi;