import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getImageSrc } from '../utils/getImageSrc';
import alphabetData from './data/alphabetData';

export default function AlphabetDisplay() {
  const { lang } = useParams();
  const navigate = useNavigate();

  const letters = Object.entries(alphabetData[lang] || {}).map(
    ([letter, info]) => ({ letter, ...info })
  );

  useEffect(() => {
    const handleKeyPress = (e) => {
      const pressedKey = e.key.toUpperCase();
      const isAvailable = letters.some((item) => item.letter.toUpperCase() === pressedKey);
      if (isAvailable) {
        navigate(`/${lang}/${encodeURIComponent(pressedKey)}`);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lang, navigate, letters]);

  return (
    <div className="min-h-screen bg-blue-500 px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6 gap-4">
          <button
            onClick={() => navigate('/lang')}
            className="bg-white rounded-full px-4 py-2 shadow-lg hover:bg-gray-100"
          >
            <span className="text-blue-600 font-bold">← Til tanlash</span>
          </button>
          <h1 className="text-2xl font-bold text-white text-center">
            {lang.toUpperCase()} alifbosi
          </h1>
          <div className="w-32 h-10" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-center">
          {letters.map((item) => (
            <Link
              key={item.letter}
              to={`/${lang}/${encodeURIComponent(item.letter)}`}
              className="relative rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105 w-full aspect-square max-w-[160px] mx-auto"
              style={{
                backgroundImage: `url(${getImageSrc(item.image, lang)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="bg-black bg-opacity-40 w-full h-full flex flex-col items-center justify-center text-white p-2">
                <span className="text-4xl sm:text-5xl font-extrabold drop-shadow">
                  {item.letter}
                </span>
                <span className="text-xs sm:text-sm mt-1 text-center">{item.example}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
