import React from 'react';
import { X, BookmarkCheck, BookOpen, Compass, Trash2, ArrowRight } from 'lucide-react';
import { DISORDERS_DATA } from '../data/disordersData';
import { CLINICAL_GUIDELINES_DATA } from '../data/guidelinesData';
import { NavSection } from '../types';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedIds: string[];
  onRemoveBookmark: (id: string) => void;
  onNavigate: (section: NavSection, targetId: string) => void;
  onClearAll: () => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  bookmarkedIds,
  onRemoveBookmark,
  onNavigate,
  onClearAll
}) => {
  if (!isOpen) return null;

  const bookmarkedDisorders = DISORDERS_DATA.filter(d => bookmarkedIds.includes(d.id));
  const bookmarkedGuidelines = CLINICAL_GUIDELINES_DATA.filter(g => bookmarkedIds.includes(g.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-xs flex justify-end animate-in fade-in duration-150">
      <div className="w-full max-w-md bg-[#0a0a0a] h-full shadow-2xl flex flex-col border-l border-neutral-800 text-white">
        {/* Header */}
        <div className="p-4 border-b border-neutral-800 flex items-center justify-between bg-[#0d0d0d]">
          <div className="flex items-center gap-2">
            <BookmarkCheck className="w-5 h-5 text-red-500" />
            <div>
              <h3 className="font-bold text-sm text-white">Vizit Listesi & Sabitlenenler</h3>
              <p className="text-[11px] text-neutral-400">Klinik vizit veya nöbette hızlı başvuru listesi</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {bookmarkedIds.length > 0 && (
              <button
                type="button"
                onClick={onClearAll}
                className="text-xs text-neutral-400 hover:text-red-400 p-1.5 cursor-pointer transition-colors"
                title="Tümünü Temizle"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Diagnostic Criteria Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-red-500" />
                <span>Tanı Ölçütleri ({bookmarkedDisorders.length})</span>
              </span>
            </div>

            {bookmarkedDisorders.length === 0 ? (
              <p className="text-xs text-neutral-500 italic p-3 bg-[#111111] border border-neutral-800">
                Henüz sabitlenmiş tanı ölçütü yok.
              </p>
            ) : (
              <div className="space-y-2">
                {bookmarkedDisorders.map((disorder) => (
                  <div
                    key={disorder.id}
                    className="p-3 bg-[#111111] border border-neutral-800 hover:border-red-600 transition-colors flex items-center justify-between group"
                  >
                    <div 
                      onClick={() => {
                        onNavigate('disorders', disorder.id);
                        onClose();
                      }}
                      className="cursor-pointer flex-1 min-w-0 pr-2"
                    >
                      <span className="text-xs font-bold text-white group-hover:text-red-400 transition-colors block truncate">
                        {disorder.name}
                      </span>
                      <span className="text-[10px] text-neutral-400 font-mono">
                        {disorder.category}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemoveBookmark(disorder.id)}
                      className="text-neutral-500 hover:text-red-400 p-1 cursor-pointer"
                      title="Sabitlerden Kaldır"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Guidelines Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-red-500" />
                <span>Kılavuzlar & Algoritmalar ({bookmarkedGuidelines.length})</span>
              </span>
            </div>

            {bookmarkedGuidelines.length === 0 ? (
              <p className="text-xs text-neutral-500 italic p-3 bg-[#111111] border border-neutral-800">
                Henüz sabitlenmiş tedavi algoritması yok.
              </p>
            ) : (
              <div className="space-y-2">
                {bookmarkedGuidelines.map((guideline) => (
                  <div
                    key={guideline.id}
                    className="p-3 bg-[#111111] border border-neutral-800 hover:border-red-600 transition-colors flex items-center justify-between group"
                  >
                    <div 
                      onClick={() => {
                        onNavigate('guidelines', guideline.id);
                        onClose();
                      }}
                      className="cursor-pointer flex-1 min-w-0 pr-2"
                    >
                      <span className="text-xs font-bold text-white group-hover:text-red-400 transition-colors block truncate">
                        {guideline.title}
                      </span>
                      <span className="text-[10px] text-neutral-400 font-mono">
                        {guideline.sourceReference}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemoveBookmark(guideline.id)}
                      className="text-neutral-500 hover:text-red-400 p-1 cursor-pointer"
                      title="Sabitlerden Kaldır"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-800 bg-[#0d0d0d] text-[11px] text-neutral-500">
          Sabitler tarayıcınızın yerel belleğinde güvenle saklanır.
        </div>
      </div>
    </div>
  );
};
