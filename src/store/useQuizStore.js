// src/store/useQuizStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useQuizStore = create(
  persist(
    (set, get) => ({
      /* --- state --- */
      hasHydrated : false,
      lang        : null,
      questions   : [],
      idx         : 0,
      score       : 0,
      done        : false,

      /* --- actions --- */
      init(lang, qs) {
        set({ lang, questions: qs, idx: 0, score: 0, done: false });
      },
      answer(correct) {
        if (get().done) return;
        if (correct) set((s) => ({ score: s.score + 1 }));

        const next     = get().idx + 1;
        const finished = next >= get().questions.length;
        set({ idx: next, done: finished });
      },
      reset() {
        set({ questions: [], idx: 0, score: 0, done: false });
      }
    }),
    {
      name: 'quiz-storage',

      /* === rehydrate bo‘lganda flagni yoqish === */
      onRehydrateStorage: () =>
        (state) => {
          if (state) state.hasHydrated = true;   // ← set emas, state bevosita
        }
    }
  )
);
