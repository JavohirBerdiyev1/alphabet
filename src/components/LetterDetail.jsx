import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate }      from 'react-router-dom';
import { getImageSrc }                 from '../utils/getImageSrc';
import alphabetData from './data/alphabetData';

export default function LetterDetail() {
  const { lang, letter } = useParams();   // URL dan parametrlar
  const navigate = useNavigate();

  const data = alphabetData[lang]?.[letter];
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  if (!data) return <div className="p-10">Harf topilmadi</div>;

  const toggleAudio = () => {
    const src = `/audio/${lang}/${data.audio}`;
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.onended = () => setIsPlaying(false);
    }
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(console.error);
      setIsPlaying(true);
    }
  };


  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      // style={{ backgroundImage: 'url("/images/Apples-184940975-770x533-1_jpg.webp")' }}
      style={{ backgroundImage: 'url("/images/bg_1.jpg")' }}
    >
      <div className="bg-white bg-opacity-80 rounded-2xl shadow-2xl p-6 max-w-lg w-full">
        {/* HEADER */}
        <div className="flex justify-between mb-6">
          <button
            onClick={() => navigate(`/${lang}`)}
            className="bg-blue-100 text-blue-600 rounded-full px-4 py-2 font-bold hover:bg-blue-200"
          >
            ← Alifbo
          </button>
          <h1 className="text-3xl font-bold text-blue-600">{letter}</h1>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col items-center space-y-6">
          <img
            src={getImageSrc(data.image, lang)}
            alt={data.example}
            className="w-48 h-48 object-contain rounded-lg shadow"
          />

          <h2 className="text-2xl font-bold">{data.example}</h2>
          <p className="text-center text-gray-600">{data.description}</p>

          <button
            onClick={toggleAudio}
            className={`bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all ${
              isPlaying ? 'scale-110' : ''
            }`}
          >
            {isPlaying ? (
              /* PAUSE */
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <rect x="6" y="5" width="4" height="14" fill="currentColor" />
                <rect x="14" y="5" width="4" height="14" fill="currentColor" />
              </svg>
            ) : (
              /* PLAY */
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
