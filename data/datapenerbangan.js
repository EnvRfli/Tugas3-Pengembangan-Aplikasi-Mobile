const BANDARA = [
  {
    bandara_id: "B-001",
    bandara_nama: 'Monstadt', 
  },
  {
    bandara_id: "B-002",
    bandara_nama: 'Liyue',
  },
  {
    bandara_id: "B-003",
    bandara_nama: 'Inazuma',
  },
  {
    bandara_id: "B-004",
    bandara_nama: 'Sumeru',
  },
  {
   bandara_id: "B-005",
   bandara_nama: 'Fontaine',
  },
];

const MASKAPAI = [
  {
    maskapai_id: "M-001",
    maskapai_nama: "Dvalin Air", 
  },
  {
    maskapai_id: "M-002",
    maskapai_nama: "Durin Air",
  },
  {
    maskapai_id: "M-003",
    maskapai_nama: "Azdaha Air",
  },
  {
    maskapai_id: "M-004",
    maskapai_nama: "Oceanid Air",
  },
  {
    maskapai_id: "M-005",
    maskapai_nama: "Maguu Kenki Air",
  },
];

const JADWAL = [
  {
    jadwal_id: "J-001",
    bandara_id_keberangkatan: "B-001",
    bandara_id_kedatangan: "B-002",
    maskapai_id: "M-001",
    tanggal: "2022-08-10",
  },
  {
    jadwal_id: "J-002",
    bandara_id_keberangkatan: "B-003",
    bandara_id_kedatangan: "B-004",
    maskapai_id: "M-002",
    tanggal: "2022-08-11",
  },
  {
   jadwal_id: "J-003",
   bandara_id_keberangkatan: "B-005",
   bandara_id_kedatangan: "B-001",
   maskapai_id: "M-003",
   tanggal: "2022-08-10",
  },
  {
   jadwal_id: "J-004",
   bandara_id_keberangkatan: "B-003",
   bandara_id_kedatangan: "B-001",
   maskapai_id: "M-004",
   tanggal: "2022-08-11",
  },
  {
    jadwal_id: "J-005",
    bandara_id_keberangkatan: "B-002",
    bandara_id_kedatangan: "B-001",
    maskapai_id: "M-002",
    tanggal: "2022-08-10",
  },
  {
    jadwal_id: "J-006",
    bandara_id_keberangkatan: "B-001",
    bandara_id_kedatangan: "B-003",
    maskapai_id: "M-002",
    tanggal: "2022-08-11",
  },
  {
    jadwal_id: "J-007",
    bandara_id_keberangkatan: "B-002",
    bandara_id_kedatangan: "B04",
    maskapai_id: "M-004",
    tanggal: "2022-08-10",
  },
  {
    jadwal_id: "J-008",
    bandara_id_keberangkatan: "B-005",
    bandara_id_kedatangan: "B-002",
    maskapai_id: "M-005",
    tanggal: "2022-08-11",
  },
  {
    jadwal_id: "J-009",
    bandara_id_keberangkatan: "B-001",
    bandara_id_kedatangan: "B-002",
    maskapai_id: "M-005",
    tanggal: "2022-08-10",
  },
  {
    jadwal_id: "J-010",
    bandara_id_keberangkatan: "B-002",
    bandara_id_kedatangan: "B-005",
    maskapai_id: "M-001",
    tanggal: "2022-08-11",
  },
  {
    jadwal_id: "J-011",
    bandara_id_keberangkatan: "B-001",
    bandara_id_kedatangan: "B-002",
    maskapai_id: "M-004",
    tanggal: "2022-08-10",
  },
  {
    jadwal_id: "J-012",
    bandara_id_keberangkatan: "B-002",
    bandara_id_kedatangan: "B-001",
    maskapai_id: "M-005",
    tanggal: "2022-08-11",
  },
];

export {BANDARA, MASKAPAI, JADWAL};