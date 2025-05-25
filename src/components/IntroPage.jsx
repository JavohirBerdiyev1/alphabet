import { Link } from 'react-router-dom';

export default function IntroPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.6)),
          url(https://img.freepik.com/free-vector/realistic-colorful-rainbow-concept_52683-35882.jpg?t=st=1748095065~exp=1748098665~hmac=c4e8d51f0a2e287199b786fcc15b50f0b99a7fdee39e84c7d9c8be510b0a2819&w=1380)
        `
      }}
    >
    <div className="text-center max-w-lg bg-white/55 backdrop-blur-lg rounded-2xl shadow-2xl p-10">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">AlphaLearn</h1>
        <p className="text-lg text-gray-700 mb-8">
          Ingliz, Rus va O‘zbek alifbolarini rangli rasm va audio bilan o‘rganing.
        </p>
        <Link
          to="/lang"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          Boshlash
        </Link>
      </div>
    </div>
  );
}
