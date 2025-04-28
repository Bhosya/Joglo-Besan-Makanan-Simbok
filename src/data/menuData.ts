interface MenuItem {
  id: number;
  name: string;
  price: number;
  description?: string;
}

interface MenuCategory {
  id: number;
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 1,
    name: 'SNACK',
    items: [
      {
        id: 101,
        name: 'Mix Platter',
        price: 25000,
        description: 'Berbagai makanan ringan dalam satu sajian'
      },
      {
        id: 102,
        name: 'Mantao',
        price: 25000,
        description: 'Roti kukus lembut dengan isian lezat'
      },
      {
        id: 103,
        name: 'Pisang Coklat/Keju',
        price: 15000,
        description: 'Pisang goreng dengan topping coklat atau keju'
      },
      {
        id: 104,
        name: 'Kentang',
        price: 15000,
        description: 'Kentang goreng garing dan lezat'
      },
      {
        id: 105,
        name: 'Singkong',
        price: 12000,
        description: 'Singkong goreng yang renyah di luar, lembut di dalam'
      },
      {
        id: 106,
        name: 'Timus',
        price: 12000,
        description: 'Ubi jalar digoreng dengan balutan tepung yang gurih'
      },
      {
        id: 107,
        name: 'Mendoan',
        price: 12000,
        description: 'Tempe tipis dibalut tepung dengan bumbu khas'
      },
      {
        id: 108,
        name: 'Roti Bakar Coklat/Keju',
        price: 15000,
        description: 'Roti bakar dengan pilihan topping coklat atau keju'
      },
      {
        id: 109,
        name: 'Rebusan',
        price: 10000,
        description: 'Aneka sayuran dan pendamping direbus sempurna'
      },
      {
        id: 110,
        name: 'Tambah Topping Selai Srikaya',
        price: 5000,
        description: 'Tambahan selai srikaya yang manis untuk snack'
      }
    ]
  },
  {
    id: 2,
    name: 'MAKANAN',
    items: [
      {
        id: 201,
        name: 'Mie Godog Wajan',
        price: 17500,
        description: 'Mie rebus dengan kuah gurih dan sayuran segar'
      },
      {
        id: 202,
        name: 'Nasi Goreng Joglo',
        price: 17500,
        description: 'Nasi goreng spesial dengan bumbu khas Joglo'
      },
      {
        id: 203,
        name: 'Nasi Goreng Joglo Besan',
        price: 25000,
        description: 'Varian premium dari nasi goreng Joglo dengan tambahan topping'
      },
      {
        id: 204,
        name: 'Nasi Goreng Lombok Ijo',
        price: 17500,
        description: 'Nasi goreng dengan sentuhan pedas cabai hijau'
      },
      {
        id: 205,
        name: 'Capjay Nyemek',
        price: 20000,
        description: 'Capjay dengan kuah kental dan berbagai sayuran segar'
      },
      {
        id: 206,
        name: 'Mie Goreng Hotplate',
        price: 17500,
        description: 'Mie goreng disajikan panas di atas hotplate'
      },
      {
        id: 207,
        name: 'Ayam Geprek Besan',
        price: 20000,
        description: 'Ayam goreng tepung yang digeprek dengan sambal spesial'
      },
      {
        id: 208,
        name: 'Telur Mata Sapi',
        price: 5000,
        description: 'Telur digoreng dengan pinggiran garing dan bagian kuning yang lembut'
      },
      {
        id: 209,
        name: 'Nasi',
        price: 5000,
        description: 'Nasi putih yang pulen dan hangat'
      }
    ]
  }
];