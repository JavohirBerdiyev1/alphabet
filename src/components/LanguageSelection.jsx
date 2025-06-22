import { Link, useNavigate } from 'react-router-dom';

const languages = [
  { id: 'en', name: 'English', flag: '🇺🇸' },
  { id: 'ru', name: 'Русский', flag: '🇷🇺' },
  { id: 'uz', name: 'O‘zbek',  flag: '🇺🇿' },
];

export default function LanguageSelection() {
  const navigate = useNavigate();

  const handleContact = () => {
    window.open('https://t.me/Zarish_0305', '_blank', 'noopener,noreferrer');
  };

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
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
          Tilni tanlang
        </h1>

        <div className="grid grid-cols-1 gap-4">
          {languages.map((lang) => (
            <Link
              key={lang.id}
              to={`/${lang.id}`}
              className="flex items-center justify-between bg-white bg-opacity-100 transition p-4 rounded-lg border border-blue-300 shadow hover:shadow-lg hover:scale-105"
            >
              <span className="text-xl font-medium text-gray-800">
                {lang.name}
              </span>
              <span className="text-3xl">{lang.flag}</span>
            </Link>
          ))}
        </div>
      </div>
      <button
          onClick={handleContact}
          className="mb-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 rounded-lg shadow hover:from-blue-600 hover:to-blue-700 transition  w-[140px] absolute bottom-0 right-[30px]"
        >
          Aloqaga chiqish (Telegram)
        </button>

    </div>
  );
}
