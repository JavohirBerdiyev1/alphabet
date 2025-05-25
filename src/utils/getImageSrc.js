/**
 * Rasm manzilini to'g'ri qaytaruvchi yordamchi.
 *
 * @param {string} image       — alphabetData ichidagi image maydoni
 * @param {string} languageId  — 'en', 'ru', 'uz' va h.k.
 * @returns {string}           — <img src="..."> yoki backgroundImage uchun URL
 */
export function getImageSrc(image, languageId) {
  if (!image) return '/images/placeholder.jpg';          // zaxira rasm

  // 1) Tashqi (http/https) manzil bo'lsa — shu holicha
  if (/^https?:\/\//i.test(image)) return image;

  // 2) /images/... kabi rootdan boshlangan lokal yo‘l bo'lsa — shu holicha
  if (image.startsWith('/')) return image;

  // 3) `public/` bilan yozilgan bo'lsa — `public` ni olib tashlaymiz
  if (image.startsWith('public/')) {
    const cleaned = image.replace(/^public\/?/, '');
    return `/${cleaned}`;
  }

  // 4) Faqat fayl nomi bo'lsa — /images/<lang>/<file>
  return `/images/${languageId}/${image}`;
}
