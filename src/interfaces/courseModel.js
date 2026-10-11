// Eğitim Veri Modeli (Şeması)
export const initialCourse = {
  id: null,
  title: '',        // Eğitim Adı
  instructor: '',   // Eğitmen Adı
  quota: '',        // Kontenjan (Sayı)
  category: '',     // Kategori (Yazılım, Veri, İşletme vb.)
  date: ''          // Başlangıç Tarihi
};

// Gerçek YBS Dersleri ve Hocaları
export const sampleCourses = [
  {
    id: '1',
    title: 'Bilgisayar Donanımı',
    instructor: 'Abdülkadir Özdemir',
    quota: '40',
    category: 'Donanım',
    date: '2026-10-15'
  },
  {
    id: '2',
    title: 'Veri Yapıları',
    instructor: 'Ufuk Çelik',
    quota: '30',
    category: 'Yazılım',
    date: '2026-10-18'
  },
  {
    id: '3',
    title: 'Ağ ve Sistem Güvenliği',
    instructor: 'Alican Doğan',
    quota: '25',
    category: 'Güvenlik',
    date: '2026-10-22'
  },
  {
    id: '4',
    title: 'Nesne Tabanlı Programlama',
    instructor: 'Zeynep Özer',
    quota: '35',
    category: 'Yazılım',
    date: '2026-10-25'
  },
  {
    id: '5',
    title: 'İşletim Sistemleri Yönetimi',
    instructor: 'Abdülkadir Özdemir',
    quota: '30',
    category: 'Sistem',
    date: '2026-11-01'
  },
  {
    id: '6',
    title: 'Veri Madenciliği',
    instructor: 'Ufuk Çelik',
    quota: '25',
    category: 'Veri',
    date: '2026-11-05'
  },
  {
    id: '7',
    title: 'Karar Destek Sistemleri',
    instructor: 'Zeynep Özer',
    quota: '40',
    category: 'YBS',
    date: '2026-11-10'
  },
  {
    id: '8',
    title: 'Akıllı Ulaşım Sistemleri',
    instructor: 'Mehmet Tektaş',
    quota: '20',
    category: 'İnovasyon',
    date: '2026-11-15'
  },
  {
    id: '9',
    title: 'Yapay Sinir Ağları',
    instructor: 'Kutlucan Görür',
    quota: '30',
    category: 'Yapay Zeka',
    date: '2026-11-20'
  },
  {
    id: '10',
    title: 'Yapay Zeka',
    instructor: 'Zeynep Özer',
    quota: '45',
    category: 'Yapay Zeka',
    date: '2026-11-25'
  },
  {
    id: '11',
    title: 'E-Ticaret ve E-Devlet',
    instructor: 'Sedat Ersöz',
    quota: '50',
    category: 'E-Ticaret',
    date: '2026-12-01'
  },
  {
    id: '12',
    title: 'Kurumsal Kaynak Planlama',
    instructor: 'Gülçin Çömez',
    quota: '35',
    category: 'Kurumsal',
    date: '2026-12-05'
  }
];