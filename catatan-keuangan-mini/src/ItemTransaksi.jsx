function ItemTransaksi({ transaksi, onHapus }) {
  // Mengubah angka menjadi format mata uang Rupiah
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <div className="item-transaksi">
      {/* Informasi transaksi */}
      <div className="info-transaksi">
        <h3>{transaksi.keterangan}</h3>

        <span className="jenis-transaksi">
          {transaksi.jenis === "pemasukan" ? "Pemasukan" : "Pengeluaran"}
        </span>
      </div>

      {/* Nominal transaksi */}
      <div className="aksi-transaksi">
        <span
          className={
            transaksi.jenis === "pemasukan" ? "nominal masuk" : "nominal keluar"
          }
        >
          {transaksi.jenis === "pemasukan" ? "+" : "-"}
          {formatRupiah(transaksi.nominal)}
        </span>

        {/* Tombol hapus */}
        <button className="btn-hapus" onClick={() => onHapus(transaksi.id)}>
          Hapus
        </button>
      </div>
    </div>
  );
}

export default ItemTransaksi;
