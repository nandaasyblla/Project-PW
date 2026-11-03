import React from "react";
import KartuProfil from "./KartuProfil.jsx";
import BadgeSkill from "./BadgeSkill.jsx";
import ItemMatkul from "./ItemMatkul.jsx";
import "./App.css";
import fotoProfil from "./assets/foto-profil.jpeg";

function App() {
  // Data profil mahasiswa
  const profil = {
    nama: "Ananda Meysa Syabilla",
    npm: "243040130",
    kelas: "Teknik Informatika",
    status: "Aktif",
  };

  // Data keahlian
  const daftarSkill = [
    { id: 1, namaSkill: "HTML", level: "Menengah" },
    { id: 2, namaSkill: "CSS", level: "Menengah" },
    { id: 3, namaSkill: "Java", level: "Pemula" },
    { id: 4, namaSkill: "JavaScript", level: "Pemula" },
    { id: 5, namaSkill: "Analysis System", level: "Mahir" },
    { id: 6, namaSkill: "Infrastruktur Jaringan", level: "Mahir" },
  ];

  // Data mata kuliah
  const daftarPraktikum = [
    {
      id: 101,
      kode: "IF21W0407",
      nama: "Pemrograman Web (React & Laravel)",
      sks: 2,
      hari: "Selasa",
    },
    {
      id: 102,
      kode: "IF21W0507",
      nama: "Praktikum Sistem Beorientasi Objek",
      sks: 2,
      hari: "Selasa",
    },
    {
      id: 103,
      kode: "IF21W0508",
      nama: "Praktikum Pemograman II",
      sks: 2,
      hari: "Senin",
    },
    {
      id: 104,
      kode: "IF21W",
      nama: "Perancangan Sistem",
      sks: 3,
      hari: "Kamis",
    },
  ];

  // Data proyek portofolio
  const daftarProyek = [
    {
      id: 1,
      judul: "Sistem Informasi Perpustakaan",
      deskripsi:
        "Website untuk mengelola data buku, anggota, peminjaman, dan pengembalian buku.",
      teknologi: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/nandaasyblla",
    },
    {
      id: 2,
      judul: "Aplikasi Koperasi Mahasiswa",
      deskripsi:
        "Aplikasi pengelolaan simpanan dan pinjaman mahasiswa dengan database MySQL.",
      teknologi: ["Java", "MySQL"],
      github: "https://github.com/nandaasyblla",
    },
    {
      id: 3,
      judul: "Personal Portfolio Website",
      deskripsi:
        "Website pribadi untuk menampilkan profil, kemampuan, pengalaman, dan hasil proyek.",
      teknologi: ["HTML", "CSS", "Bootstrap"],
      github: "https://github.com/nandaasyblla",
    },
    {
      id: 4,
      judul: "Sistem Booking Dokter",
      deskripsi:
        "Sistem pemesanan jadwal konsultasi dokter secara online untuk memudahkan pasien.",
      teknologi: ["React", "JavaScript", "CSS"],
      github: "https://github.com/nandaasyblla",
    },
  ];

  return (
    <div className="container">
      {/* HEADER */}
      <header className="header">
        <h1>My Mini Portfolio</h1>
        <p>
          Welcome to my mini portfolio! This website showcases my projects,
          skills, and learning journey in Informatics Engineering, built with
          creativity and technology.
        </p>
        <span>
          Praktikum Pemrograman Web - Modul 1 React JS & Component Architecture
        </span>
      </header>

      {/* PROFIL MAHASISWA */}
      <section className="section">
        <h2>Profil Mahasiswa</h2>

        <KartuProfil
          nama={profil.nama}
          npm={profil.npm}
          kelas={profil.kelas}
          status={profil.status}
          fotoUrl={fotoProfil}
        />
      </section>

      {/* DAFTAR KEAHLIAN */}
      <section className="section">
        <h2>My Skills</h2>
        <p className="section-description">
          Daftar kemampuan dan tingkat penguasaan teknologi.
        </p>

        <div className="skill-list">
          {daftarSkill.map((skill) => (
            <BadgeSkill
              key={skill.id}
              namaSkill={skill.namaSkill}
              level={skill.level}
            />
          ))}
        </div>
      </section>

      {/* DAFTAR MATA KULIAH */}
      <section className="section">
        <h2>Daftar Praktikum dan Mata Kuliah</h2>

        <div className="matkul-list">
          {daftarPraktikum.map((matkul) => (
            <ItemMatkul key={matkul.id} {...matkul} />
          ))}
        </div>
      </section>

      {/* SHOWCASE PORTOFOLIO */}
      <section className="section">
        <h2>My Project Showcase</h2>

        <p className="section-description">
          Beberapa proyek yang menjadi bagian dari perjalanan belajar saya di
          bidang Informatika.
        </p>

        <div className="project-grid">
          {daftarProyek.map((proyek) => (
            <div className="project-card" key={proyek.id}>
              <div className="project-number">PROJECT 0{proyek.id}</div>

              <h3>{proyek.judul}</h3>

              <p className="project-description">{proyek.deskripsi}</p>

              <div className="technology-list">
                {proyek.teknologi.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    #{tech}
                  </span>
                ))}
              </div>

              <a
                href={proyek.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
              >
                Lihat Repository GitHub ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Nanda Syabilla | Praktikum Web React JS</p>
      </footer>
    </div>
  );
}

export default App;
