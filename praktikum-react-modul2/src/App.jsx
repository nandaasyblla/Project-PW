import { useState, useEffect } from "react";
import "./App.css";

import Kartu from "./Kartu";
import Penghitung from "./Penghitung";
import FormTugas from "./FormTugas";
import ItemTugas from "./ItemTugas";

function App() {
  // State utama untuk menyimpan daftar tugas
  const [daftarTugas, setDaftarTugas] = useState(() => {
    const dataTersimpan = localStorage.getItem("daftar-tugas");

    if (dataTersimpan) {
      return JSON.parse(dataTersimpan);
    }

    return [
      { id: 1, judul: "Install Node.js dan Vite", selesai: true },
      { id: 2, judul: "Pelajari useState", selesai: false },
    ];
  });

  // State untuk menyimpan pilihan filter
  const [filter, setFilter] = useState("semua");

  // Menampilkan pesan saat aplikasi pertama kali dibuka
  useEffect(() => {
    console.log("Aplikasi Daftar Tugas siap digunakan!");
  }, []);

  // Mengubah judul tab sesuai jumlah tugas yang belum selesai
  useEffect(() => {
    const sisa = daftarTugas.filter((tugas) => !tugas.selesai).length;

    document.title = `(${sisa}) Tugas Belum Selesai`;
  }, [daftarTugas]);

  // Menyimpan daftar tugas ke localStorage
  useEffect(() => {
    localStorage.setItem("daftar-tugas", JSON.stringify(daftarTugas));
  }, [daftarTugas]);

  // Fungsi menambahkan tugas baru
  const tambahTugas = (judul) => {
    const tugasBaru = {
      id: Date.now(),
      judul: judul,
      selesai: false,
    };

    setDaftarTugas([...daftarTugas, tugasBaru]);
  };

  // Fungsi mengubah status tugas
  const ubahStatus = (id) => {
    const daftarBaru = daftarTugas.map((tugas) => {
      if (tugas.id === id) {
        return {
          ...tugas,
          selesai: !tugas.selesai,
        };
      }

      return tugas;
    });

    setDaftarTugas(daftarBaru);
  };

  // Fungsi menghapus satu tugas
  const hapusTugas = (id) => {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id));
  };

  // Fungsi menghapus seluruh tugas yang selesai
  const hapusSemuaSelesai = () => {
    setDaftarTugas(daftarTugas.filter((tugas) => !tugas.selesai));
  };

  // Menghitung jumlah tugas yang selesai
  const jumlahSelesai = daftarTugas.filter((tugas) => tugas.selesai).length;

  // Menghitung jumlah tugas yang belum selesai
  const jumlahBelumSelesai = daftarTugas.length - jumlahSelesai;

  // Filter daftar tugas sebelum ditampilkan dengan map()
  const tugasDitampilkan = daftarTugas.filter((tugas) => {
    if (filter === "selesai") {
      return tugas.selesai;
    }

    if (filter === "belum") {
      return !tugas.selesai;
    }

    return true;
  });

  return (
    <div className="wadah">
      <h1 className="judul">Daftar Tugas Praktikum</h1>

      <p className="subjudul">
        Laboratorium Informatika - Modul 2: React Lanjutan
      </p>

      <Penghitung />

      <Kartu judul="Tambah Tugas Baru">
        <FormTugas onTambah={tambahTugas} />
      </Kartu>

      <Kartu judul="Daftar Tugas">
        <p className="ringkasan">
          {jumlahSelesai} dari {daftarTugas.length} tugas selesai
        </p>

        {/* TOMBOL FILTER */}
        <div className="filter-container">
          <button
            className={`tombol-filter ${filter === "semua" ? "aktif" : ""}`}
            onClick={() => setFilter("semua")}
          >
            Semua
          </button>

          <button
            className={`tombol-filter ${filter === "belum" ? "aktif" : ""}`}
            onClick={() => setFilter("belum")}
          >
            Belum Selesai
          </button>

          <button
            className={`tombol-filter ${filter === "selesai" ? "aktif" : ""}`}
            onClick={() => setFilter("selesai")}
          >
            Selesai
          </button>
        </div>

        {/* TOMBOL HAPUS SEMUA YANG SELESAI */}
        {jumlahSelesai > 0 && (
          <button
            className="tombol tombol-merah tombol-hapus-semua"
            onClick={hapusSemuaSelesai}
          >
            Hapus Semua yang Selesai
          </button>
        )}

        {/* MENAMPILKAN DAFTAR TUGAS */}
        {tugasDitampilkan.length === 0 ? (
          <p className="kosong">Tidak ada tugas pada kategori ini.</p>
        ) : (
          <ul className="daftar">
            {tugasDitampilkan.map((tugas) => (
              <ItemTugas
                key={tugas.id}
                tugas={tugas}
                onUbahStatus={ubahStatus}
                onHapus={hapusTugas}
              />
            ))}
          </ul>
        )}
      </Kartu>
    </div>
  );
}

export default App;
