import React from 'react';
import { User, Users, Calendar, Tag, Edit3, Trash2 } from 'lucide-react';

export default function CourseCard({ course, onEdit, onDelete }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-all shadow-lg flex flex-col justify-between group">
      
      {/* Üst Kısım: Kategori ve İşlem Butonları */}
      <div>
        <div className="flex justify-between items-start gap-2 mb-3">
          <span className="inline-flex items-center gap-1 bg-blue-500/10 text-blue-400 text-xs px-3 py-1 rounded-full border border-blue-500/20 font-medium">
            <Tag className="w-3 h-3" />
            {course.category || 'Genel'}
          </span>
          
          <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onEdit(course)}
              className="p-2 hover:bg-slate-800 text-slate-400 hover:text-blue-400 rounded-lg transition-colors"
              title="Güncelle"
            >
              <Edit3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onDelete(course.id)}
              className="p-2 hover:bg-slate-800 text-slate-400 hover:text-rose-400 rounded-lg transition-colors"
              title="Sil"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Eğitim Başlığı */}
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-blue-400 transition-colors">
          {course.title}
        </h3>

        {/* Detay Bilgileri (Eğitmen, Kontenjan, Tarih) */}
        <div className="space-y-2 text-sm text-slate-300 mt-4">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-slate-400" />
            <span className="text-slate-400 text-xs">Eğitmen:</span>
            <span className="font-medium text-slate-200">{course.instructor}</span>
          </div>

          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-slate-400" />
            <span className="text-slate-400 text-xs">Kontenjan:</span>
            <span className="font-medium text-slate-200">{course.quota} Kişi</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span className="text-slate-400 text-xs">Tarih:</span>
            <span className="font-medium text-slate-200">{course.date}</span>
          </div>
        </div>
      </div>

      {/* Alt Çizgi Vurgusu */}
      <div className="mt-5 pt-3 border-t border-slate-800/80 flex justify-between items-center text-xs text-slate-500">
        <span>ID: {String(course.id).slice(0, 6)}...</span>
        <span className="text-emerald-400 font-medium">Aktif Plan</span>
      </div>

    </div>
  );
}