/**
 * Har bir til uchun:
 *  letter → { example, image, audio, description }
 *  image  →  `public/images/<lang>/<file>.jpg` kabi yo‘l
 *  audio  →  `public/audio/<lang>/<file>.mp3` yoki .ogg
 */

const alphabetData = {
  /* ---------- ENGLISH – 26 letters ---------- */
  en: {
    A: { example: 'Apple',     image: 'https://vectorjungal.com/files/preview/960x960/11723144175v5ovxvbvvv3pdqnrbmzlki7byag74wdftobwvyokbmejbtqpfqyhwbujcmxgjxwpihsxsjtct5gzwjbdiykyb1wqvwjfbhwcifma.png', audio: 'A.wav', description: 'A is for Apple.' },
    B: { example: 'Ball',      image: 'https://cdn.pixabay.com/photo/2024/11/08/15/42/ball-9183621_1280.png',                                         audio: 'B.wav', description: 'B is for Ball.' },
    C: { example: 'Cat',       image: '/images/en/cat.png',                                                                                             audio: 'C.wav', description: 'C is for Cat.' },
    D: { example: 'Dog',       image: 'https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-cute-cartoon-happy-dog-png-file-png-image_10201723.png', audio: 'D.wav', description: 'D is for Dog.' },
    E: { example: 'Elephant',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvan7C4i8YUv8JRArnMf9YaYThSxwteLeYPA&s',                    audio: 'E.wav', description: 'E is for Elephant.' },
    F: { example: 'Fish',      image: 'https://png.pngtree.com/png-vector/20231015/ourmid/pngtree-cartoon-character-happy-fish-png-image_10163346.png',   audio: 'F.wav', description: 'F is for Fish.' },
    G: { example: 'Giraffe',   image: 'https://static.vecteezy.com/system/resources/previews/039/657/593/non_2x/ai-generated-cute-baby-giraffe-cartoon-style-transparent-background-free-png.png', audio: 'G.wav', description: 'G is for Giraffe.' },
    H: { example: 'House',     image: 'https://png.pngtree.com/png-vector/20221108/ourmid/pngtree-cartoon-house-illustration-png-image_6434928.png',      audio: 'H.wav', description: 'H is for House.' },
    I: { example: 'Ice cream', image: 'https://static.vecteezy.com/system/resources/previews/023/636/520/non_2x/ice-cream-illustration-colorful-cartoon-free-png.png',                                    audio: 'I.wav', description: 'I is for Ice-cream.' },
    J: { example: 'Jelly',     image: 'https://png.pngtree.com/png-clipart/20220206/original/pngtree-cartoon-red-jelly-dessert-png-image_7264610.png',    audio: 'J.wav', description: 'J is for Jelly.' },
    K: { example: 'Kite',      image: 'https://gallery.yopriceville.com/downloadfullsize/send/17723',                                                    audio: 'K.wav', description: 'K is for Kite.' },
    L: { example: 'Lion',      image: 'https://png.pngtree.com/png-clipart/20250116/original/pngtree-lion-cartoon-png-image_19493213.png',               audio: 'L.wav', description: 'L is for Lion.' },
    M: { example: 'Monkey',    image: 'https://static.vecteezy.com/system/resources/previews/027/187/651/non_2x/monkey-cute-sticker-transparent-free-png.png',                                              audio: 'M.wav', description: 'M is for Monkey.' },
    N: { example: 'Nest',      image: 'https://toppng.com/uploads/thumbnail/bird-nest-cartoon-birds-nest-11562866507aq6keqwtim.png',                     audio: 'N.wav', description: 'N is for Nest.' },
    O: { example: 'Orange',    image: 'https://static.vecteezy.com/system/resources/thumbnails/019/607/041/small_2x/orange-graphic-clipart-design-free-png.png',                                           audio: 'O.wav', description: 'O is for Orange.' },
    P: { example: 'Penguin',   image: 'https://cdn.pixabay.com/photo/2020/11/02/03/21/penguin-5705579_1280.png',                                         audio: 'P.wav', description: 'P is for Penguin.' },
    Q: { example: 'Queen',     image: 'https://png.pngtree.com/png-clipart/20240416/original/pngtree-a-cute-cartoon-queen-illustrations-png-image_14844122.png',                                             audio: 'Q.wav', description: 'Q is for Queen.' },
    R: { example: 'Rabbit',    image: 'https://png.pngtree.com/png-vector/20250104/ourmid/pngtree-rabbit-cartoon-png-image_15045752.png',                 audio: 'R.wav', description: 'R is for Rabbit.' },
    S: { example: 'Sun',       image: 'https://gallery.yopriceville.com/downloadfullsize/send/7437',                                                      audio: 'S.wav', description: 'S is for Sun.' },
    T: { example: 'Tiger',     image: 'https://static.vecteezy.com/system/resources/previews/049/159/624/non_2x/royal-bangle-tiger-3d-cartoon-image-png.png',                                               audio: 'T.wav', description: 'T is for Tiger.' },
    U: { example: 'Umbrella',  image: 'https://images.vexels.com/media/users/3/190470/isolated/preview/b569d69cb930c91c3f4f8ab4449872ef-illustration-umbrella.png',                                          audio: 'U.wav', description: 'U is for Umbrella.' },
    V: { example: 'Violin',    image: 'https://png.pngtree.com/png-vector/20221117/ourmid/pngtree-violin-cartoon-musical-instrument-decoration-clipart-transparent-background-png-image_6463430.png',       audio: 'V.wav', description: 'V is for Violin.' },
    W: { example: 'Whale',     image: 'https://image.similarpng.com/file/similarpng/original-picture/2020/10/Cute-whale-cartoon-character-on-transparent-background-PNG.png',                              audio: 'W.wav', description: 'W is for Whale.' },
    X: { example: 'Xylophone', image: 'https://cdn-icons-png.flaticon.com/512/5445/5445260.png',                                                          audio: 'X.wav', description: 'X is for Xylophone.' },
    Y: { example: 'Yacht',     image: 'https://png.pngtree.com/png-clipart/20220106/ourlarge/pngtree-cartoon-yacht-boat-illustration-png-image_4094344.png',                                                  audio: 'Y.wav', description: 'Y is for Yacht.' },
    Z: { example: 'Zebra',     image: 'https://png.pngtree.com/png-clipart/20230412/ourmid/pngtree-zebra-cartoon-black-and-white-png-image_6678635.png',   audio: 'Z.wav', description: 'Z is for Zebra.' },
  },
  /* ---------- UZBEK – 29 letters ---------- */
  uz: {
    A:  { example: 'Anor',      image: 'https://pngimg.com/d/pomegranate_PNG8639.png',                                           audio: 'A.wav',   description: 'A – Anor.' },
    B:  { example: 'Baliq',     image: 'https://neptun.az/image/cache/catalog/A.Narmin/B.LSHCAPAQIRIBALIQKG-1000x1000.png?v=9',  audio: 'B.wav',   description: 'B – Baliq.' },
    D:  { example: 'Daftar',    image: 'https://www.pngfind.com/pngs/m/237-2372782_checklist-cartoon-png-transparent-png.png',   audio: 'D.wav',   description: 'D – Daftar.' },
    E:  { example: 'Echki',     image: 'https://static.vecteezy.com/system/resources/previews/044/315/182/non_2x/cartoon-of-a-baby-goat-free-png.png',                     audio: 'E.wav',   description: 'E – Echki.' },
    F:  { example: 'Fil',       image: 'https://parspng.com/wp-content/uploads/2023/07/Elephantpng.parspng.com_.png',             audio: 'F.wav',   description: 'F – Fil.' },
    G:  { example: 'Gul',       image: 'https://png.pngtree.com/png-vector/20230408/ourmid/pngtree-rose-red-flower-decoration-photo-png-image_6680301.png',                 audio: 'G.wav',   description: 'G – Gul.' },
    H:  { example: 'Hassa',     image: 'https://png.pngtree.com/png-clipart/20230825/original/pngtree-wooden-walking-stick-cane-picture-image_8467706.png',                 audio: 'H.wav',   description: 'H – Hassa.' },
    I:  { example: 'Ilon',      image: 'https://png.pngtree.com/png-clipart/20230323/ourmid/pngtree-cartoon-snake-green-png-image_6659195.png',                            audio: 'I.wav',   description: 'I – Ilon.' },
    J:  { example: 'Jirafa',    image: 'https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-giraffe-cartoon-style-illustration-png-image_10145465.png',             audio: 'J.wav',   description: 'J – Jirafa.' },
    K:  { example: 'Kitob',     image: 'https://www.grafus.uz/backend/web/uploads/category/16790785221148.png',                   audio: 'K.wav',   description: 'K – Kitob.' },
    L:  { example: 'Lampa',     image: 'https://png.pngtree.com/png-vector/20240825/ourmid/pngtree-sleeping-time-objects-clip-art-cartoon-lamp-png-image_13618790.png',     audio: 'L.wav',   description: 'L – Lampa.' },
    M:  { example: 'Mosh',      image: 'https://api.cabinet.smart-market.uz/uploads/images/ff80818112bce8e6f85039ea',              audio: 'M.wav',   description: 'M – Mosh.' },
    N:  { example: 'Non',       image: 'https://t3.ftcdn.net/jpg/02/73/45/16/360_F_273451658_eP3dG81ZobaN13ojDxsEQv9lFj2TZs04.jpg',                                        audio: 'N.wav',   description: 'N – Non.' },
    O:  { example: 'Olma',      image: 'https://www.freeiconspng.com/uploads/apple-fruit-cartoon-transparent-28.png',             audio: 'O.wav',   description: 'O – Olma.' },
    P:  { example: 'Piyola',    image: 'https://cdn1.ozone.ru/s3/multimedia-y/c600/6093077818.jpg',                                audio: 'P.wav',   description: 'P – Piyola.' },
    Q:  { example: 'Qalam',     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTotlZrJT8NJA8ZNN7e9zOva-XZzHSL7w2A5g&s',                                       audio: 'Q.wav',   description: 'Q – Qalam.' },
    R:  { example: 'Ruchka',    image: 'https://foni.papik.pro/uploads/posts/2024-09/foni-papik-pro-y3uh-p-kartinki-ruchka-dlya-detei-na-prozrachnom-21.png',               audio: 'R.wav',   description: 'R – Ruchka.' },
    S:  { example: 'Somsa',     image: 'https://png.pngtree.com/png-vector/20221204/ourmid/pngtree-samosa-food-vector-png-image_6506630.png',                               audio: 'S.wav',   description: 'S – Somsa.' },
    T:  { example: 'Togʻ',      image: 'https://static.vecteezy.com/system/resources/thumbnails/049/025/475/small_2x/cartoon-mountain-with-trees-and-grass-png.png',        audio: 'T.wav',   description: 'T – Togʻ.' },
    U:  { example: 'Uy',        image: 'https://static.vecteezy.com/system/resources/previews/037/222/116/non_2x/ai-generated-cute-house-in-cartoon-style-png.png',         audio: 'U.wav',   description: 'U – Uy.' },
    V:  { example: 'Velosiped', image: 'https://png.pngtree.com/png-clipart/20220103/original/pngtree-cartoon-hand-drawn-cartoon-bicycle-elements-png-image_7010125.png',    audio: 'V.wav',   description: 'V – Velosiped.' },
    X:  { example: 'Xurmo',     image: 'https://www.pngplay.com/wp-content/uploads/6/Organic-Persimmon-Transparent-PNG.png',       audio: 'X.wav',   description: 'X – Xurmo.' },
    Y:  { example: 'Yulduz',    image: 'https://static.vecteezy.com/system/resources/previews/048/343/746/non_2x/cartoon-star-logo-with-a-happy-expression-png.png',       audio: 'Y.wav',   description: 'Y – Yulduz.' },
    Z:  { example: 'Zebra',     image: 'https://png.pngtree.com/png-clipart/20230412/ourmid/pngtree-zebra-cartoon-black-and-white-png-image_6678635.png',                   audio: 'Z.wav',   description: 'Z – Zebra.' },
  
    "O‘": { example: 'O‘rik',   image: 'https://pngimg.com/d/apricot_PNG104227.png',                                               audio: "O'.wav", description: 'O‘ – O‘rik.' },
    "G‘": { example: 'G‘oz',    image: 'https://pngimg.com/d/goose_PNG10.png',                                                    audio: "G'.wav", description: 'G‘ – G‘oz.' },
    Sh:    { example: 'Shirinlik', image: 'https://images.vexels.com/media/users/3/143381/isolated/preview/ff1d5dbbb619c58295083cba48f85cff-candy-sweet-cartoon.png',      audio: 'SH.wav',  description: 'Sh – Shirinlik.' },
    Ch:    { example: 'Chiroq',    image: 'https://play-lh.googleusercontent.com/k-pZUpUAlAOLqsPNJm47Vf3XNe3PIr2zgI2e03bmposL81QMhppvKC6isiyVOfhbvzRe',                    audio: 'CH.wav',  description: 'Ch – Chiroq.' },
    Ng:    { example: 'Angliya',   image: 'https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-london-clipart-an-illustration-of-london-cartoon-vector-png-image_6803328.png', audio: 'NG.wav', description: 'Ng – Angliya.' }
  },
  

  /* ---------- (Optional) RUSSIAN – qisqargan namunaviy ---------- */
  ru: {
    А: { example: 'Арбуз',     image: 'https://cdn.pixabay.com/photo/2020/03/31/16/26/watermelon-4988432_1280.png',                                audio: 'а.mp3',  description: 'А — Арбуз. Арбузы — сладкие летние ягоды.' },
    Б: { example: 'Банан',     image: 'https://static.vecteezy.com/system/resources/thumbnails/009/597/420/small_2x/banana-fruit-illustration-cartoon-png.png',            audio: 'б.mp3',  description: 'Б — Банан. Бананы жёлтые и вкусные.' },
    В: { example: 'Волк',      image: 'https://images.squarespace-cdn.com/content/v1/5ec314739406427c6686b3fe/1601582108300-0FTF7TPRZS2ZPLP2HSAV/volk+sticker_small.png?format=1000w', audio: 'в.mp3',  description: 'В — Волк. Волки живут в лесу.' },
    Г: { example: 'Гриб',      image: 'https://png.pngtree.com/png-clipart/20240314/original/pngtree-cute-cartoon-mushroom-png-image_14582579.png',                          audio: 'г.mp3',  description: 'Г — Гриб. Грибы растут после дождя.' },
    Д: { example: 'Дом',       image: 'https://static.vecteezy.com/system/resources/previews/037/222/116/non_2x/ai-generated-cute-house-in-cartoon-style-png.png',          audio: 'д.mp3',  description: 'Д — Дом. В доме живут люди.' },
    Е: { example: 'Ель',       image: 'https://png.pngtree.com/png-vector/20220827/ourmid/pngtree-spruce-cartoon-vector-png-image_6123248.png',                                audio: 'е.mp3',  description: 'Е — Ель. Ель — хвойное дерево.' },
    Ё: { example: 'Ёж',        image: 'https://cdn.pixabay.com/photo/2018/12/13/23/54/hedgehog-3874008_1280.png',                                                         audio: 'ё.mp3',  description: 'Ё — Ёж. Ёжик — колючее животное.' },
    Ж: { example: 'Жук',       image: 'https://png.pngtree.com/png-clipart/20240830/original/pngtree-a-colourful-beetle-png-image_15884187.png',                             audio: 'ж.mp3',  description: 'Ж — Жук. Жуки бывают разных цветов.' },
    З: { example: 'Зебра',     image: 'https://png.pngtree.com/png-clipart/20230412/ourmid/pngtree-zebra-cartoon-black-and-white-png-image_6678635.png',                     audio: 'з.mp3',  description: 'З — Зебра. Полосатое африканское животное.' },
    И: { example: 'Игла',      image: 'https://png.pngtree.com/png-clipart/20220818/ourmid/pngtree-needle-png-png-image_6113018.png',                                       audio: 'и.mp3',  description: 'И — Игла. Иглой шьют ткань.' },
    Й: { example: 'Йогурт',    image: 'https://cdn-icons-png.flaticon.com/512/10845/10845876.png',                                                                        audio: 'й.mp3',  description: 'Й — Йогурт. Полезный кисломолочный продукт.' },
    К: { example: 'Кот',       image: 'https://png.pngtree.com/png-clipart/20241114/original/pngtree-cat-cartoon-png-image_17035205.png',                                   audio: 'к.mp3',  description: 'К — Кот. Коты мурлычат.' },
    Л: { example: 'Лев',       image: 'https://png.pngtree.com/png-clipart/20240418/original/pngtree-cute-cartoon-lion-png-image_14883293.png',                             audio: 'л.mp3',  description: 'Л — Лев. Царь зверей.' },
    М: { example: 'Медведь',   image: 'https://png.pngtree.com/png-clipart/20240508/original/pngtree-a-cute-bear-cartoon-art-png-image_15036695.png',                       audio: 'м.mp3',  description: 'М — Медведь. Большое лесное животное.' },
    Н: { example: 'Нос',       image: 'https://png.pngtree.com/png-vector/20220517/ourmid/pngtree-human-funny-cartoon-nose-character-png-image_4676357.png',                audio: 'н.mp3',  description: 'Н — Нос. Мы дышим носом.' },
    О: { example: 'Облако',    image: 'https://static.vecteezy.com/system/resources/thumbnails/013/166/970/small/cartoon-cloud-illustration-png.png',                      audio: 'о.mp3',  description: 'О — Облако. Белое, пушистое.' },
    П: { example: 'Панда',     image: 'https://png.pngtree.com/png-vector/20240202/ourmid/pngtree-black-and-white-panda-sitting-eating-bamboo-leaves-with-green-and-png-image_11587056.png', audio: 'п.mp3',  description: 'П — Панда. Чёрно-белый медведь из Китая.' },
    Р: { example: 'Рыба',      image: 'https://png.pngtree.com/png-clipart/20250120/original/pngtree-fish-cartoon-picture-png-image_19976492.png',                          audio: 'р.mp3',  description: 'Р — Рыба. Живёт в воде.' },
    С: { example: 'Солнце',    image: 'https://png.pngtree.com/png-clipart/20240312/original/pngtree-cartoon-illustration-of-sun-png-image_14575997.png',                  audio: 'с.mp3',  description: 'С — Солнце. Светит днём.' },
    Т: { example: 'Тигр',      image: 'https://png.pngtree.com/png-clipart/20230818/original/pngtree-cartoon-tiger-roaring-on-white-background-picture-image_8016262.png',  audio: 'т.mp3',  description: 'Т — Тигр. Полосатый хищник.' },
    У: { example: 'Улитка',    image: 'https://img.pikbest.com/png-images/20241213/cartoon-snail-character-friendly-expression-large-eyes-spiral-shell-detailed-texture_11247638.png!sw800', audio: 'у.mp3',  description: 'У — Улитка. Медленно ползёт.' },
    Ф: { example: 'Фламинго',  image: 'https://cdn-icons-png.flaticon.com/512/10776/10776222.png',                                    audio: 'ф.mp3',  description: 'Ф — Фламинго. Розовая птица.' },
    Х: { example: 'Хлеб',      image: 'https://free-png.ru/wp-content/uploads/2022/06/free-png.ru-483.png',                          audio: 'х.mp3',  description: 'Х — Хлеб. Основной продукт питания.' },
    Ц: { example: 'Цветок',    image: 'https://png.pngtree.com/png-clipart/20230328/original/pngtree-spring-flower-cartoon-sticker-png-image_9007776.png',                 audio: 'ц.mp3',  description: 'Ц — Цветок. Красивое растение.' },
    Ч: { example: 'Чайник',    image: 'https://png.pngtree.com/png-clipart/20230108/original/pngtree-kettle-cartoon-teapot-jar-china-png-image_8885893.png',               audio: 'ч.mp3',  description: 'Ч — Чайник. В нём кипятят воду.' },
    Ш: { example: 'Шар',       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNj9ACg0KyisD5FEG5uvAi91RTg1g4-Db2DA&s', audio: 'ш.mp3',  description: 'Ш — Шар. Круглая игрушка.' },
    Щ: { example: 'Щука',      image: 'https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-northern-pike-vector-png-image_6887654.png',                               audio: 'щ.mp3',  description: 'Щ — Щука. Хищная рыба.' },
    Ъ: { example: 'Твёрдый знак', image: 'https://img1.liveinternet.ru/images/attach/c/3/77/769/77769791_.png',                     audio: 'ъ.mp3',  description: 'Ъ — не имеет звука, делает согласную твёрдой.' },
    Ы: { example: 'Буква Ы',   image: 'https://alphabetonline.ru/images/letters2/y/y6.png',                                         audio: 'ы.mp3',  description: 'Ы — гласная. Звук после твёрдых согласных.' },
    Ь: { example: 'Мягкий знак', image: 'https://grizly.club/uploads/posts/2023-02/1675505099_grizly-club-p-myagkii-znak-klipart-18.png',                                     audio: 'ь.mp3',  description: 'Ь — смягчает предыдущую согласную.' },
    Э: { example: 'Экскаватор', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiMyjmOQHfvoJ6aCbxTWTxW7VHiPWDF2tyDQ&s',                                       audio: 'э.mp3',  description: 'Э — Экскаватор. Строительная техника.' },
    Ю: { example: 'Юла',       image: 'https://png.pngtree.com/png-clipart/20230818/original/pngtree-children-toy-whirligig-icon-in-cartoon-style-isolated-on-white-background-vector-illustration-picture-image_8009301.png', audio: 'ю.mp3',  description: 'Ю — Юла. Вращающаяся игрушка.' },
    Я: { example: 'Яблоко',    image: 'https://www.freeiconspng.com/uploads/apple-fruit-cartoon-transparent-28.png',                                                    audio: 'я.mp3',  description: 'Я — Яблоко. Сочный фрукт.' }
  },  
};

export default alphabetData;
