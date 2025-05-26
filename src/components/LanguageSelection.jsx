import { Link, useNavigate } from 'react-router-dom';

const languages = [
  { id: 'en', name: 'English', flag: '🇺🇸' },
  { id: 'ru', name: 'Русский', flag: '🇷🇺' },
  { id: 'uz', name: 'O‘zbek',  flag: '🇺🇿' },
];

export default function LanguageSelection() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-4"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.6)),
          url('/images/bg_4.jpg')
        `
      }}
    >
      <div className="relative bg-white bg-opacity-90 rounded-xl shadow-xl p-8 max-w-md w-full">
        {/* Orqaga tugma */}
        {/* <button
          onClick={() => navigate(-1)}
          className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700"
        >
          ←
        </button> */}

        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
          Tilni tanlang
        </h1>

        <div className="grid grid-cols-1 gap-4">
          {languages.map((lang) => (
            <Link
              key={lang.id}
              to={`/${lang.id}`}
              className="flex items-center justify-between bg-white bg-opacity-80 hover:bg-opacity-100 transition p-4 rounded-lg border border-blue-300 shadow"
            >
              <span className="text-xl font-medium text-gray-800">
                {lang.name}
              </span>
              <span className="text-3xl">{lang.flag}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
