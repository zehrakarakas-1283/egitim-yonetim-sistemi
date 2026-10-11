import React from 'react';
import { BookOpen, Users, PlusCircle } from 'lucide-react';

export default function Navbar({ totalCourses, totalQuota, onOpenAddModal }) {
  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white py-4 px-6 sticky top-0 z-20 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Sol Taraf: Logo ve Başlık */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2.5 rounded-xl shadow-md shadow-blue-900/50">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-wide">LMS Lite</h1>
            <p className="text-xs text-slate-400">Akademik Eğitim Planlama ve Yönetim Paneli</p>
          </div>
        </div>

        {/* Orta Kısım: Hızlı İstatistikler */}
        <div className="flex items-center gap-6 bg-slate-800/60 border border-slate-700/50 px-5 py-2 rounded-xl">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-slate-400">Toplam Eğitim:</span>
            <span className="font-semibold text-white">{totalCourses}</span>
          </div>
          <div className="h-4 w-[1px] bg-slate-700"></div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-slate-400">Toplam Kontenjan:</span>
            <span className="font-semibold text-white">{totalQuota}</span>
          </div>
        </div>

        {/* Sağ Taraf: Yeni Eğitim Ekle Butonu */}
        <button
          onClick={onOpenAddModal}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-blue-600/20 active:scale-95"
        >
          <PlusCircle className="w-5 h-5" />
          <span>Yeni Eğitim Ekle</span>
        </button>

      </div>
    </header>
  );
}