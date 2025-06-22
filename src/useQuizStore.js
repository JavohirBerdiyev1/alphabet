import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useQuizStore = create(
  persist(
    (set, get) => ({
      lang        : null,
      questions   : [],      // {type, prompt, …}
      index       : 0,
      score       : 0,
      done        : false,

      /* — quizni boshlash — */
      init(lang, qs) {
        set({ lang, questions: qs, index: 0, score: 0, done: false });
      },

      /* — javobni belgilash — */
      answer(isCorrect) {
        if (get().done) return;
        if (isCorrect) set((s) => ({ score: s.score + 1 }));
        const next = get().index + 1;
        if (next >= get().questions.length) {
          set({ index: next, done: true });
        } else {
          set({ index: next });
        }
      },

      /* — reset — */
      reset() {
        set({ questions: [], index: 0, score: 0, done: false });
      },
    }),
    { name: 'quiz-storage' }              // <-- localStorage key
  )
);
