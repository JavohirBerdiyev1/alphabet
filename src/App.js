import { Routes, Route, Navigate } from 'react-router-dom';
import IntroPage         from './components/IntroPage';
import LanguageSelection from './components/LanguageSelection';
import AlphabetDisplay   from './components/AlphabetDisplay';
import LetterDetail      from './components/LetterDetail';

import TestPage from './components/TestPage';

export default function App() {
  return (
    <Routes>
      <Route path="/"               element={<IntroPage />} />
      <Route path="/lang"           element={<LanguageSelection />} />
      <Route path="/:lang"          element={<AlphabetDisplay />} />
      <Route path="/:lang/test"     element={<TestPage />} />
      <Route path="/:lang/:letter"  element={<LetterDetail />} />

      {/* noma’lum yo‘l — introga qaytarish */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
