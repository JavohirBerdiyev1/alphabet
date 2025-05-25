import { Link, useParams, useNavigate } from 'react-router-dom';
import { getImageSrc }       from '../utils/getImageSrc';
import alphabetData from './data/alphabetData';

export default function AlphabetDisplay() {
  const { lang } = useParams();        // URL dan tilni olamiz
  const navigate = useNavigate();

  const letters = Object.entries(alphabetData[lang] || {}).map(
    ([letter, info]) => ({ letter, ...info })
  );

  return (
    <div className="min-h-screen bg-blue-500 p-4">
      <div className="container mx-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigate('/lang')}
            className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100"
          >
            <span className="text-blue-600 font-bold">← Til tanlash</span>
          </button>
          <h1 className="text-2xl font-bold text-white">
            {lang.toUpperCase()} alifbosi
          </h1>
          <div className="w-16" />
        </div>

        {/* LETTERS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {letters.map((item) => (
            <Link
              key={item.letter}
              to={`/${lang}/${encodeURIComponent(item.letter)}`}
              className="rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105"
              style={{
                backgroundImage: `url(${getImageSrc(item.image, lang)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '180px',
                width: '180px',
              }}
            >
              <div className="bg-black bg-opacity-40 w-full h-full flex flex-col items-center justify-center text-white p-2">
                <span className="text-5xl font-extrabold drop-shadow">
                  {item.letter}
                </span>
                <span className="text-sm mt-1">{item.example}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
