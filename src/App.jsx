import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CourseCard from './components/CourseCard';
import CourseModal from './components/CourseModal';
import { sampleCourses } from './interfaces/courseModel';
import { Search, Filter, BookOpen } from 'lucide-react';

export default function App() {
  // 1. State Tanımlamaları ve LocalStorage Entegrasyonu
  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem('lms_courses');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return sampleCourses;
      }
    }
    return sampleCourses;
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseToEdit, setCourseToEdit] = useState(null);

  // Veriler değiştikçe LocalStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('lms_courses', JSON.stringify(courses));
  }, [courses]);

  // 2. CRUD İşlemleri (Ekleme, Güncelleme, Silme)
  const handleSaveCourse = (courseData) => {
    if (courseData.id) {
      // Güncelleme İşlemi (Update)
      setCourses(courses.map(c => c.id === courseData.id ? courseData : c));
    } else {
      // Yeni Ekleme İşlemi (Create)
      const newCourse = {
        ...courseData,
        id: Date.now().toString()
      };
      setCourses([newCourse, ...courses]);
    }
  };

  const handleDeleteCourse = (id) => {
    if (window.confirm('Bu eğitimi silmek istediğinize emin misiniz?')) {
      setCourses(courses.filter(c => c.id !== id));
    }
  };

  const handleOpenAddModal = () => {
    setCourseToEdit(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (course) => {
    setCourseToEdit(course);
    setIsModalOpen(true);
  };

  // 3. Filtreleme ve Arama Mantığı
  const categories = ['Tümü', ...new Set(courses.map(c => c.category).filter(Boolean))];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'Tümü' || course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // İstatistik Hesaplamaları
  const totalCourses = courses.length;
  const totalQuota = courses.reduce((acc, curr) => acc + (Number(curr.quota) || 0), 0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Üst Navbar */}
      <Navbar 
        totalCourses={totalCourses} 
        totalQuota={totalQuota} 
        onOpenAddModal={handleOpenAddModal} 
      />

      {/* Ana İçerik Alanı */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-6">
        
        {/* Arama ve Kategori Filtre Çubuğu */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-900/60 border border-slate-800/80 p-4 rounded-2xl shadow-xl backdrop-blur-md">
          
          {/* Arama Kutusu */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Eğitim veya eğitmen ara..."
              className="w-full bg-slate-800/80 border border-slate-700/60 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Kategori Filtreleri */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
            <div className="flex items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Eğitim Kartları Listesi (Grid) */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onEdit={handleOpenEditModal}
                onDelete={handleDeleteCourse}
              />
            ))}
          </div>
        ) : (
          /* Boş Durum (Hiç eğitim bulunamazsa) */
          <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-slate-900/30 border border-slate-800/50 rounded-3xl">
            <div className="bg-slate-800/80 p-4 rounded-2xl mb-4 text-slate-400">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">Eğitim Bulunamadı</h3>
            <p className="text-sm text-slate-400 max-w-sm">
              Aradığınız kriterlere uygun bir eğitim kaydı bulunamadı. Farklı bir arama yapabilir veya yeni eğitim ekleyebilirsiniz.
            </p>
          </div>
        )}

      </main>

      {/* Ekleme / Güncelleme Modalı */}
      <CourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveCourse}
        courseToEdit={courseToEdit}
      />

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500">
        <p>LMS Lite — Yönetim Bilişim Sistemleri Web Geliştirme Projesi</p>
      </footer>

    </div>
  );
}