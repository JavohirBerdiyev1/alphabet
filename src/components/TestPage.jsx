import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuizStore } from "../store/useQuizStore";
import alphabetData from "./data/alphabetData";
import { getImageSrc } from "../utils/getImageSrc";

const shuffle = (a) => [...a].sort(() => Math.random() - 0.5);
const prompts = {
  uz: {
    pic: "To‘g‘ri tasvirni tanlang",
    let: "Bu rasmdagi obyekt qaysi harf bilan boshlanadi?",
  },
  en: {
    pic: "Choose the correct picture",
    let: "Which letter does this object start with?",
  },
  ru: {
    pic: "Выберите правильное изображение",
    let: "На какую букву начинается этот объект?",
  },
};

const buildQuiz = (lang) => {
  const letters = Object.entries(alphabetData[lang] || {})
    .filter(([, i]) => i?.image)
    .map(([letter, info]) => ({ letter, ...info }));

  const t = prompts[lang] ?? prompts.uz;

  return shuffle(letters)
    .slice(0, 10)
    .map((it, n) => {
      const wrong = shuffle(
        letters.filter((l) => l.letter !== it.letter)
      ).slice(0, 3);
      return n % 2 === 0
        ? {
            type: "word-image",
            prompt: t.pic,
            word: it.example,
            options: shuffle([
              { img: it.image, correct: true },
              ...wrong.map((w) => ({ img: w.image, correct: false })),
            ]),
          }
        : {
            type: "image-letter",
            prompt: t.let,
            image: it.image,
            options: shuffle([
              { letter: it.letter, example: it.example, correct: true },
              ...wrong.map((w) => ({
                letter: w.letter,
                example: w.example,
                correct: false,
              })),
            ]),
          };
    });
};

export default function TestPage() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { hasHydrated, questions, idx, score, done, init, answer, reset } =
    useQuizStore();

  const [selectedIdx, setSelectedIdx] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!hasHydrated) return;
    reset();
    init(lang, buildQuiz(lang));
  }, [hasHydrated, lang]);

  if (!hasHydrated || questions.length === 0)
    return (
      <div className="h-screen flex items-center justify-center">Loading…</div>
    );
  if (done) {
    const badge =
      score >= 9
        ? { t: "Zo‘r", c: "text-green-600" }
        : score >= 7
        ? { t: "Ajoyib", c: "text-blue-600" }
        : score >= 5
        ? { t: "Yaxshi", c: "text-yellow-600" }
        : { t: "Yomon", c: "text-red-600" };
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-blue-500">
        <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl text-center space-y-6">
          <h1 className={`text-4xl font-extrabold ${badge.c}`}>{badge.t}</h1>
          <p className="text-2xl">{score} / 10</p>

          <button
            onClick={() => {
              reset();
              init(lang, buildQuiz(lang));
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg mt-4"
          >
            Yana test
          </button>
          <button
            onClick={() => navigate(`/${lang}`)}
            className="ml-4 bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-lg"
          >
            O‘rganish
          </button>
        </div>
      </div>
    );
  }

  const q = questions[idx];
  const seq = `${idx + 1} / ${questions.length}`;

  const choose = (i, opt) => {
    if (revealed) return;
    setSelectedIdx(i);
    setRevealed(true);
    setToast({
      text: opt.correct
        ? lang === "uz"
          ? "To‘g‘ri!"
          : "Correct!"
        : lang === "uz"
        ? "Xato!"
        : "Wrong!",
      ok: opt.correct,
    });

    setTimeout(() => {
      answer(opt.correct);
      setSelectedIdx(null);
      setRevealed(false);
      setToast(null); // toastni yopish
    }, 1500);
  };

  const btnClass = (o, i) => {
    if (!revealed) return "";
    if (o.correct) return "bg-green-400";
    if (i === selectedIdx) return "bg-red-400";
    return "";
  };

  return (
    <div className="min-h-screen bg-blue-500 px-4 py-6">
      {toast && (
        <div
          className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-xl shadow-lg
                   text-white transition-all duration-300 animate-slide-in
                   ${toast.ok ? "bg-green-500" : "bg-red-500"}`}
        >
          {toast.text}
        </div>
      )}
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="text-lg font-semibold text-white mb-3">{seq}</p>

        <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl w-full max-w-xl">
          <h2 className="text-2xl font-bold text-center mb-6">{q.prompt}</h2>
          {q.type === "word-image" ? (
            <>
              <p className="text-center text-3xl font-semibold mb-4">
                {q.word}
              </p>
              <div className="grid grid-cols-2 gap-4 justify-center">
                {q.options.map((o, i) => (
                  <button
                    key={i}
                    onClick={() => choose(i, o)}
                    className={`relative w-full aspect-square max-w-[200px] mx-auto
                               rounded-2xl overflow-hidden shadow-lg transition ${btnClass(
                                 o,
                                 i
                               )}`}
                  >
                    <img
                      src={getImageSrc(o.img, lang)}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <img
                src={getImageSrc(q.image, lang)}
                alt=""
                className="w-48 h-48 object-contain mx-auto mb-6"
              />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center">
                {q.options.map((o, i) => (
                  <button
                    key={i}
                    onClick={() => choose(i, o)}
                    className={`w-full aspect-square max-w-[200px] mx-auto flex flex-col
                               items-center justify-center rounded-2xl shadow-lg transition
                               ${btnClass(o, i)} ${
                      !revealed ? "bg-blue-100 hover:bg-blue-200" : ""
                    }
                               hover:scale-105`}
                  >
                    <span className="text-4xl sm:text-5xl font-extrabold">
                      {o.letter}
                    </span>
                    <span className="text-xs sm:text-sm mt-1">{o.example}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
