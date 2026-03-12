// Data Produk
let produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7},
];

// Tampilkan Porduk
function tampilkanProduk(){
    for(let i = 0; i < produkToko.length; i++){
        console.log(
            "ID: " + produkToko[i].id +
            ", Nama: " + produkToko[i].nama +
            ", Harga: " + produkToko[i].harga +
            ", Stok: " + produkToko[i].stok
        );
    }
}
console.log("Daftar Produk:");
tampilkanProduk();

// Tambah Produk
function tambahProduk(nama, harga, stok){
    let idBaru = produkToko.length + 1;
    let produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };
    produkToko.push(produkBaru);
}
tambahProduk("Mousepad", 200000, 11);
console.log("\nSetelah tambah produk:");
tampilkanProduk();


// Hapus Produk
function hapusProduk(id){
    produkToko = produkToko.filter(produk => produk.id !== id);
}
console.log("\nSetelah hapus produk:");
tampilkanProduk();