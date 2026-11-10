import { useState, useEffect } from 'react';

import './App.css';

import FormTransaksi from './FormTransaksi';
import ItemTransaksi from './ItemTransaksi';

function App() {

  // State utama untuk menyimpan daftar transaksi
  const [daftarTransaksi, setDaftarTransaksi] = useState(() => {

    // Mengambil data dari localStorage
    const dataTersimpan = localStorage.getItem('catatan-keuangan');

    if (dataTersimpan) {
      return JSON.parse(dataTersimpan);
    }

    // Jika belum ada data, gunakan array kosong
    return [];
  });

  // Menambahkan transaksi baru
  const tambahTransaksi = (data) => {

    const transaksiBaru = {
      id: Date.now(),
      keterangan: data.keterangan,
      nominal: Number(data.nominal),
      jenis: data.jenis
    };

    setDaftarTransaksi([
      ...daftarTransaksi,
      transaksiBaru
    ]);
  };

  // Menghapus transaksi berdasarkan ID
  const hapusTransaksi = (id) => {

    setDaftarTransaksi(
      daftarTransaksi.filter(
        (transaksi) => transaksi.id !== id
      )
    );
  };

  // Menghitung total pemasukan
  const totalPemasukan = daftarTransaksi
    .filter((transaksi) => transaksi.jenis === 'pemasukan')
    .reduce((total, transaksi) => {
      return total + Number(transaksi.nominal);
    }, 0);

  // Menghitung total pengeluaran
  const totalPengeluaran = daftarTransaksi
    .filter((transaksi) => transaksi.jenis === 'pengeluaran')
    .reduce((total, transaksi) => {
      return total + Number(transaksi.nominal);
    }, 0);

  // Menghitung total saldo
  const saldo = totalPemasukan - totalPengeluaran;

  // Menyimpan data transaksi ke localStorage
  useEffect(() => {

    localStorage.setItem(
      'catatan-keuangan',
      JSON.stringify(daftarTransaksi)
    );

  }, [daftarTransaksi]);

  // Format angka menjadi Rupiah
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(angka);
  };

  return (
    <div className="wadah">

      {/* Header aplikasi */}
      <header className="header">
        <h1>Catatan Keuangan Mini</h1>
        <p>Kelola pemasukan dan pengeluaran dengan mudah.</p>
      </header>

      {/* Ringkasan saldo */}
      <section className="kartu-saldo">

        <p>Total Saldo</p>

        <h2>{formatRupiah(saldo)}</h2>

        <div className="ringkasan-keuangan">

          <div>
            <span>Total Pemasukan</span>
            <strong className="warna-hijau">
              {formatRupiah(totalPemasukan)}
            </strong>
          </div>

          <div>
            <span>Total Pengeluaran</span>
            <strong className="warna-merah">
              {formatRupiah(totalPengeluaran)}
            </strong>
          </div>

        </div>

      </section>

      {/* Formulir transaksi */}
      <section className="kartu">

        <h2>Tambah Transaksi</h2>

        <FormTransaksi onTambah={tambahTransaksi} />

      </section>

      {/* Daftar transaksi */}
      <section className="kartu">

        <h2>Riwayat Transaksi</h2>

        {daftarTransaksi.length === 0 ? (

          <p className="pesan-kosong">
            Belum ada transaksi. Silakan tambahkan transaksi pertama Anda.
          </p>

        ) : (

          <div className="daftar-transaksi">

            {daftarTransaksi.map((transaksi) => (

              <ItemTransaksi
                key={transaksi.id}
                transaksi={transaksi}
                onHapus={hapusTransaksi}
              />

            ))}

          </div>

        )}

      </section>

      <footer>
        Catatan Keuangan Mini © 2026
      </footer>

    </div>
  );
}

export default App;