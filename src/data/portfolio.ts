export type Accent = 'blue' | 'coral' | 'acid' | 'mint' | 'lilac' | 'paper'

export interface Article {
  title: string
  url: string | null
}

export interface Publication {
  id: string
  outlet: string
  shortName: string
  logoSrc: string
  logoShape: 'mark' | 'wordmark'
  size: 'wide' | 'compact'
  accent: Accent
  articles: Article[]
}

export interface EducationItem {
  years: string
  level: string
  university: string
  department: string
  degree: string
  accent: Accent
}

export interface ExpertiseItem {
  title: string
  code: string
  accent: Accent
}

export interface ConferenceProject {
  name: string
  description: string
  responsibilities: {
    title: string
    description: string
  }[]
  url: string
}

export const navigation = [
  { label: 'Публикации', href: '#publications' },
  { label: 'Конференция', href: '#conference' },
  { label: 'Образование', href: '#education' },
]

export const hero = {
  name: 'Екатерина Шемякинская',
  role: 'Научный журналист и коммуникатор',
  intro:
    'Пишу о науке, образовании, фемтехе, IT и здоровье — на языке, который соединяет точность исследований и живой человеческий опыт.',
}

export const publications: Publication[] = [
  {
    id: 'forbes-woman',
    outlet: 'Forbes Woman',
    shortName: 'FW',
    logoSrc: 'media-logos/forbes.svg',
    logoShape: 'mark',
    size: 'wide',
    accent: 'coral',
    articles: [
      {
        title: 'Трекер женского здоровья и поддержка матерей: какие продукты создают фемтех-проекты',
        url: 'https://www.forbes.ru/forbes-woman/554970-treker-zenskogo-zdorov-a-i-podderzka-materej-kakie-produkty-sozdaut-femteh-proekty',
      },
    ],
  },
  {
    id: 'techno-yandex',
    outlet: 'ТЕХНО: Яндекс про технологии',
    shortName: 'ТХ',
    logoSrc: 'media-logos/techno.jpg',
    logoShape: 'mark',
    size: 'compact',
    accent: 'acid',
    articles: [
      {
        title: 'Как связаны Библия и машинный перевод',
        url: 'https://t.me/techno_yandex/4003',
      },
      {
        title: 'Технологическая сингулярность близко',
        url: 'https://t.me/techno_yandex/3947',
      },
      {
        title: 'USB из воздуха: как (не) появился универсальный беспроводной интерфейс',
        url: 'https://t.me/techno_yandex/4172',
      },
      {
        title: 'ИИ поднимается по карьерной лестнице',
        url: 'https://t.me/techno_yandex/4006',
      },
      {
        title: 'Как развивались рекомендательные сервисы',
        url: 'https://t.me/techno_yandex/4102',
      },
    ],
  },
  {
    id: 'femtech-force',
    outlet: 'Femtech Force',
    shortName: 'FF',
    logoSrc: 'media-logos/femtech-force.jpg',
    logoShape: 'mark',
    size: 'compact',
    accent: 'mint',
    articles: [
      {
        title: 'Как отказ от экспериментов на животных может навредить здоровью женщин',
        url: 'https://t.me/femtechforce/3643',
      },
      {
        title: 'Карта носимых технологий для женского здоровья',
        url: 'https://t.me/femtechforce/3476',
      },
      {
        title: 'Какой будет жизнь женщины через 10 лет?',
        url: 'https://t.me/femtechforce/3178',
      },
      {
        title: 'Матка на чипе: как ученые воссоздали начало беременности',
        url: 'https://t.me/femtechforce/3126',
      },
      {
        title: 'Как фемтех-стартап помогает незрячим женщинам самостоятельно отслеживать цикл',
        url: 'https://t.me/femtechforce/2974',
      },
      {
        title: 'Почему тестостерон для женщин — «серая зона»',
        url: 'https://t.me/femtechforce/2928',
      },
      {
        title: 'Работает ли cycle syncing',
        url: 'https://t.me/femtechforce/2909',
      },
      {
        title: 'Фемтех-изобретения в списке TIME',
        url: 'https://t.me/femtechforce/2895',
      },
      {
        title: 'Красота без жертв: как студентка изобрела безопасный «крабик»',
        url: 'https://t.me/femtechforce/2782',
      },
      {
        title: 'Реально ли создать беременных роботов',
        url: 'https://t.me/femtechforce/2737',
      },
      {
        title: 'Человеческие яйцеклетки защищены от возрастных мутаций в митохондриях',
        url: 'https://t.me/femtechforce/2658',
      },
      {
        title: 'Микропластик проникает в женский организм',
        url: 'https://t.me/femtechforce/2593',
      },
      {
        title: 'Загрязнение воздуха и беременность: какие риски и как их снизить с помощью технологий',
        url: 'https://t.me/femtechforce/2450',
      },
      {
        title: 'Женщины тратят на здравоохранение на $8,8 млрд больше, чем мужчины',
        url: 'https://t.me/femtechforce/2330',
      },
      {
        title: 'Искусственный интеллект в родительстве',
        url: 'https://t.me/femtechforce/2284',
      },
      {
        title: 'Femtech Force Jam — конференция о технологиях для женского здоровья',
        url: 'https://femtechforcejam.com/',
      },
    ],
  },
  {
    id: 'hi-tech-mail',
    outlet: 'Hi-Tech Mail',
    shortName: 'HT',
    logoSrc: 'media-logos/hi-tech-mail.svg',
    logoShape: 'wordmark',
    size: 'wide',
    accent: 'lilac',
    articles: [
      {
        title: 'AI-тренер',
        url: 'https://hi-tech.mail.ru/review/124396-ai-trener/',
      },
      {
        title: 'Промт-инженер',
        url: 'https://hi-tech.mail.ru/review/123790-prompt-engineer/',
      },
      {
        title: 'AI-разработчик',
        url: 'https://hi-tech.mail.ru/review/123211-ai-razrabotchik/',
      },
      {
        title: 'ML-инженер',
        url: 'https://hi-tech.mail.ru/review/124173-ml-engineer/',
      },
      {
        title: '11 лучших приложений для умного дома в 2024 году',
        url: 'https://hi-tech.mail.ru/review/111220-luchshiye-prilozheniya-dlya-umnogo-doma/',
      },
      {
        title: '15 лучших умных лампочек в 2024 году',
        url: 'https://hi-tech.mail.ru/review/111719-luchshie-umnye-lampochki/',
      },
      {
        title: '16 лучших систем «умный дом» в 2024 году',
        url: 'https://hi-tech.mail.ru/review/111673-luchshie-sistemy-umnogo-doma/',
      },
      {
        title: 'Топ-7 лучших голосовых помощников в 2024 году',
        url: 'https://hi-tech.mail.ru/review/111214-luchshie-golosovye-pomoshchniki/',
      },
      {
        title: 'Топ-10 лучших умных камер видеонаблюдения в 2024 году',
        url: 'https://hi-tech.mail.ru/review/111059-luchshie-umnye-kamery-videonablyudeniya/',
      },
      {
        title: 'Что такое нейросеть простыми словами',
        url: 'https://hi-tech.mail.ru/review/63074-chto-takoe-nejroset/',
      },
      {
        title: 'Как рисуют нейросети: лучшие примеры сгенерированных изображений',
        url: 'https://hi-tech.mail.ru/review/109795-kak-risuyut-neyroseti/',
      },
      {
        title: '10 лучших нейросетей для написания текстов в 2024 году',
        url: 'https://hi-tech.mail.ru/review/108991-luchshiye-neyroseti-dlya-napisaniya-tekstov/',
      },
      {
        title: 'Доксинг: что это такое и как от него защититься',
        url: 'https://hi-tech.mail.ru/review/104107-ostorozhno-doksing/',
      },
      {
        title: 'Что делать, если звонят и сбрасывают с разных номеров',
        url: 'https://hi-tech.mail.ru/review/45600-zvonyat-i-sbrasyvayut-kak-izbavitsya-ot-telefonnyh-spamerov/',
      },
      {
        title: 'Как найти скрытую камеру: 5 проверенных способов',
        url: 'https://hi-tech.mail.ru/review/40235-kak-najti-skrytye-kamery-v-otelyah-i-semnyh-kvartirah/',
      },
      {
        title: 'Что такое голограмма, где используется и какой у нее принцип работы',
        url: 'https://hi-tech.mail.ru/review/63212-hologram/',
      },
      {
        title: 'Год в космосе: самая долгая миссия на МКС',
        url: 'https://hi-tech.mail.ru/review/62792-god-v-kosmose-na-mks/',
      },
      {
        title: 'Какая температура на Марсе',
        url: 'https://hi-tech.mail.ru/review/62885-kakaya-temperatura-na-marse/',
      },
      {
        title: 'Есть ли жизнь на Марсе',
        url: 'https://hi-tech.mail.ru/review/100352-est-li-zhizn-na-Marse/',
      },
      {
        title: 'Starlink: как работает спутниковый интернет от Илона Маска и кому он нужен',
        url: 'https://hi-tech.mail.ru/review/100519-starlink/',
      },
      {
        title: 'Что такое черная дыра и как она выглядит',
        url: 'https://hi-tech.mail.ru/review/100742-chernaya-dyra/',
      },
      {
        title: 'Какая температура в космосе',
        url: 'https://hi-tech.mail.ru/review/101015-temperatura-v-kosmose/',
      },
      {
        title: 'Первый человек в открытом космосе: Алексей Леонов',
        url: 'https://hi-tech.mail.ru/news/53312-leonov_pervuy_v_kosmose/',
      },
      {
        title: 'Как и зачем собаки Белка и Стрелка были отправлены в космос',
        url: 'https://hi-tech.mail.ru/review/101308-belka-strelka-v-kosmose/',
      },
      {
        title: 'Робот да Винчи: как работает робот-хирург и какие операции может проводить',
        url: 'https://hi-tech.mail.ru/review/100035-da-vinci-robot/',
      },
      {
        title: 'Кто такие гуманоиды',
        url: 'https://hi-tech.mail.ru/review/63049-kto-takie-gumanoidy/',
      },
      {
        title: 'Что такое аэронавтика',
        url: 'https://hi-tech.mail.ru/review/100893-chto-takoe-aeronavtika/',
      },
      {
        title: 'Что такое реактивный двигатель и где он используется',
        url: 'https://hi-tech.mail.ru/review/100772-reaktivnyj-dvigatel/',
      },
      {
        title: 'Что такое летательный аппарат: объясняем простыми словами',
        url: 'https://hi-tech.mail.ru/review/101770-chto-takoe-letatelnyj-apparat/#anchor169140019151715109',
      },
    ],
  },
  {
    id: 'hightech-plus',
    outlet: 'Хайтек+',
    shortName: 'Х+',
    logoSrc: 'media-logos/hightech-plus.png',
    logoShape: 'wordmark',
    size: 'wide',
    accent: 'coral',
    articles: [
      {
        title: 'Новости',
        url: 'https://yandex.ru/search/?text=site%3Ahightech.plus+%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0+%D0%A8%D0%B5%D0%BC%D1%8F%D0%BA%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F&lr=213',
      },
    ],
  },
  {
    id: 'knife',
    outlet: 'Нож',
    shortName: 'НЖ',
    logoSrc: 'media-logos/knife.png',
    logoShape: 'mark',
    size: 'compact',
    accent: 'paper',
    articles: [
      {
        title: '«Спилить дерево должно быть дорого». Как вырастить лес в городе, какие реформы нужны в структурах, отвечающих за озеленение, и чем тут могут помочь неравнодушные горожане',
        url: 'https://knife.media/urban-trees/',
      },
    ],
  },
  {
    id: 'paperpaper',
    outlet: 'Бумага',
    shortName: 'БМ',
    logoSrc: 'media-logos/paperpaper.svg',
    logoShape: 'wordmark',
    size: 'compact',
    accent: 'coral',
    articles: [
      {
        title: 'Болгарин Делян Балев — о дисциплинированности русских, плюсах петербургской погоды и пробежках в парке 300-летия',
        url: 'https://paperpaper.ru/photos/bolgarin-delyan-balev-o-discipliniro/',
      },
      {
        title: 'Куда поехать на «Ласточке» из Петербурга? 12 направлений — от пещер в Саблине до Рюрикова городища в Великом Новгороде',
        url: 'https://paperpaper.ru/kuda-poehat-na-lastochke-iz-peterbu/',
      },
    ],
  },
  {
    id: 'tnf',
    outlet: 'TNF',
    shortName: 'TNF',
    logoSrc: 'media-logos/tnf.png',
    logoShape: 'mark',
    size: 'wide',
    accent: 'acid',
    articles: [
      {
        title: 'ИИ может вдвое сократить расходы нефтегазовых компаний на разведку и разработку, но реальность пока другая',
        url: 'https://telegra.ph/II-mozhet-vdvoe-sokratit-rashody-neftegazovyh-kompanij-na-razvedku-i-razrabotku-no-realnost-poka-drugaya-08-30',
      },
      {
        title: 'Когда должен произойти переход нефтегазовых компаний на отечественную систему стандартизации и оценки соответствия',
        url: 'https://t.me/oilgasforum_TNF/382',
      },
      {
        title: 'Технологии разведки и добычи газа',
        url: 'https://t.me/oilgasforum_TNF/422',
      },
      {
        title: 'Кибербезопасность в нефтегазовой отрасли',
        url: 'https://t.me/oilgasforum_TNF/387',
      },
      {
        title: 'Что ждет рынок публичного капитала в России и в мире?',
        url: 'https://t.me/oilgasforum_TNF/399',
      },
    ],
  },
]

export const education: EducationItem[] = [
  {
    years: '2018–2023',
    level: 'Бакалавриат',
    university: 'Санкт-Петербургский государственный университет',
    department: 'Высшая школа журналистики и массовых коммуникаций',
    degree: 'Журналист',
    accent: 'coral',
  },
  {
    years: '2024–2026',
    level: 'Магистратура',
    university: 'Университет ИТМО',
    department: 'Институт международного развития и партнерства',
    degree: 'Научная коммуникация',
    accent: 'acid',
  },
]

export const expertise: ExpertiseItem[] = [
  {
    title: 'Наука и образование',
    code: '01',
    accent: 'blue',
  },
  {
    title: 'Здоровье и FemTech',
    code: '02',
    accent: 'coral',
  },
  {
    title: 'IT и технологии',
    code: '03',
    accent: 'acid',
  },
  {
    title: 'Научная коммуникация',
    code: '04',
    accent: 'mint',
  },
]

export const statistics = {
  experienceYears: '6+',
  outletCount: '10+',
  publicationCount: '150+',
  conferenceCount: '2',
}

export const conferenceProject: ConferenceProject = {
  name: 'Femtech Force Jam',
  description:
    'Femtech Force Jam — онлайн-конференция о технологиях для женского здоровья, объединяющая учёных, врачей, предпринимателей, инвесторов и медиа. В 2025 и 2026 годах я участвовала в её организации: искала и координировала спикеров, готовила контент и выстраивала коммуникацию с аудиторией.',
  responsibilities: [
    {
      title: 'Спикеры и программа',
      description: 'Искала релевантных экспертов, формулировала темы и собирала содержательную основу программы.',
    },
    {
      title: 'Координация спикеров',
      description: 'Вела коммуникацию от первого контакта до выступления: отвечала на вопросы, синхронизировала материалы и дедлайны.',
    },
    {
      title: 'Контент и продвижение',
      description: 'Готовила анонсы и материалы о спикерах, темах и программе для продвижения конференции.',
    },
    {
      title: 'Аудитория и эфир',
      description: 'Общалась со зрителями, поддерживала диалог вокруг программы и помогала с возникающими вопросами.',
    },
  ],
  url: 'https://femtechforcejam.com/',
}

export const contact = {
  text:
    'Открыта к редакционным проектам, спецпроектам, интервью, научно-популярным материалам и коммуникационным задачам.',
  email: 'eekaterinashem@gmail.com',
  telegram: 'https://t.me/ekaterinashem',
}
