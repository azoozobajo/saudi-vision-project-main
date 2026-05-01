import abdullahPhoto from "@/assets/team/abdullah-aldossary.jpeg";
import abdulazizPhoto from "@/assets/team/abdulaziz-bajkhaif.jpeg";
import naifPhoto from "@/assets/team/naif-binmahri.png";

export type Lang = "en" | "ar";

type L<T> = { en: T; ar: T };

export const ui: Record<string, L<string>> = {
  proposalTitle: {
    en: "Saudi Football Model",
    ar: "النموذج السعودي لكرة القدم",
  },
  eyebrowProposal: {
    en: "A National Proposal · April 2026",
    ar: "مقترح وطني · أبريل 2026",
  },
  heroHeadlineA: {
    en: "A national proposal to build the football system",
    ar: "مقترح وطني شامل لتطوير منظومة كرة القدم ",
  },
  heroHeadlineB: {
    en: "Saudi Arabia deserves.",
    ar: "في المملكة العربية السعودية",
  },
  heroSubheadline: {
    en: "An integrated framework that begins with diagnosing the reality, moves through the seven pillars of success, and ends with clear, actionable measurement indicators — to build a sustainable Saudi football system that reflects the Kingdom's identity and lays the foundation for a generation capable of competing locally, in Asia, and globally.",
    ar: "إطار عمل متكامل يبدأ من تشخيص الواقع، ويمر بأعمدة النجاح السبعة، وينتهي بمؤشرات قياس واضحة قابلة للتنفيذ،  بهدف بناء منظومة كرة قدم سعودية مستدامة، تعكس هوية المملكة، وتؤسس لجيل قادر على المنافسة محلياً وآسيوياً وعالمياً.",
  },
  heroQuote: {
    en: "Saudi football is gifted, but the environment around it is destructive.",
    ar: "الكرة السعودية ولّادة، لكن البيئة مدمّرة",
  },
  ctaRead: { en: "Read the Proposal", ar: "اقرأ المقترح" },
  submittedTo: {
    en: "Submitted to Mr. Samir Al-Muhammadi, Secretary General, Saudi Arabian Football Federation",
    ar: "مُقدَّم إلى الأستاذ سمير المحمادي، الأمين العام للاتحاد السعودي لكرة القدم",
  },
  downloadPdf: { en: "Download PDF", ar: "تحميل المقترح" },
  pdfToastTitle: { en: "PDF coming soon", ar: "ملف PDF قادم قريباً" },
  pdfToastBody: {
    en: "The full proposal document will be available for download shortly.",
    ar: "سيكون المستند الكامل للمقترح متاحاً للتحميل قريباً.",
  },

  tabIntroduction: { en: "Introduction", ar: "المقدمة" },
  tabDiagnosis: { en: "Diagnosis", ar: "التشخيص" },
  tabFramework: { en: "Pillars of Success", ar: "ركائز النجاح" },
  tabMeasurement: { en: "Measurement", ar: "القياس" },
  tabUrgent: { en: "Urgent", ar: "مستعجل" },
  tabWorldLessons: { en: "World Lessons", ar: "دروس عالمية" },
  tabTeam: { en: "Team", ar: "فريق العمل" },

  prefaceEyebrow: { en: "Preface", ar: "تمهيد" },
  prefaceHeadline: {
    en: "Big ambitions need a solid foundation",
    ar: "طموحات كبيرة تحتاج إلى أساس متين",
  },
  prefaceBody: {
    en: "Despite this legacy and these opportunities, the sports community has begun to feel concern about the future of Saudi football. The national team barely qualified through the Asian playoff and appeared underwhelming in the recent Asian Cup, with the absence of strong names to rely on. Major national programs were abruptly shut down despite the expectations placed on them.\n\nThis report is not offered out of criticism, but with the methodology of a doctor diagnosing a case before beginning treatment: we put our finger on the source of the problem, and propose practical solutions, to make football a more attractive environment for players, coaches, and investors.",
    ar: "رغم هذا الإرث وهذه الفرص، بدأ الوسط الرياضي يعيش مرحلة من القلق على مستقبل الكرة السعودية. المنتخب الوطني تأهل بشق الأنفس عبر الملحق الآسيوي، وظهر بشكل باهت في كأس آسيا الأخيرة، مع غياب أسماء قوية يُعوَّل عليها. برامج وطنية كبرى تم إغلاقها بشكل مفاجئ رغم ما كان يُنتظَر منها.\n\nهذا التقرير لا يُقدَّم بدافع الانتقاد، بل بمنهجية الطبيب الذي يُشخّص الحالة قبل بدء العلاج: نضع اليد على مكمن الخلل، ونطرح حلولاً عملية، لجعل كرة القدم بيئة أكثر جاذبية للاعبين والمدربين والمستثمرين.",
  },
  introEyebrow: { en: "Why Now", ar: "لماذا الآن" },
  introHeadline: {
    en: "A rare convergence of ambition, investment, and opportunity.",
    ar: "تقاطعٌ نادر بين الطموح والاستثمار والفرصة.",
  },
  introQuote: {
    en: "This proposal is not about 2034. It is about building infrastructure that produces results in 2034, keeping them coming for decades beyond.",
    ar: "هذا المقترح ليس عن 2034، بل عن بناء بنية تحتية تُثمر في 2034 وتستمر في الإثمار لعقودٍ بعدها.",
  },
  lessonsEyebrow: { en: "Global Lessons", ar: "دروس عالمية" },
  lessonsHeadline: {
    en: "What we can learn from the world.",
    ar: "ما يمكننا تعلّمه من العالم.",
  },

  diagEyebrow: { en: "The Reality", ar: "الواقع" },
  diagHeadline: {
    en: "Saudi football has always produced talent despite its environment, not because of it.",
    ar: "الكرة السعودية أنتجت المواهب دائماً رغم بيئتها، لا بفضلها.",
  },
  diagOpening: {
    en: "A national team that defeated Argentina in 2022. A culture that produced Majed Abdullah, Sami Al-Jaber, and Salem Al-Dawsari. These achievements happened without a coherent development system. The question is not how Saudi football produced those results under those conditions. It is how much more it would have produced if the conditions had been right.",
    ar: "منتخبٌ هزم بطل العالم في 2022. ثقافةٌ أنجبت لنا عدة اساطير حققوا لنا كأس اسيا ثلاث مرات. تحقّقت هذه الإنجازات دون منظومة تطوير متكاملة. السؤال ليس كيف أنتجت الكرة السعودية هذه النتائج في تلك الظروف، بل كم كانت ستُنتج لو أن الظروف كانت صحيحة.",
  },

  pillarsEyebrow: { en: "The Solution", ar: "الحل" },
  pillarsHeadline: {
    en: "Six pillars. One integrated system.",
    ar: "ستة ركائز. منظومة واحدة متكاملة.",
  },
  pillarsIntro: {
    en: "Saudi Arabia is not starting from zero. Since 2021, football funding has increased by 162%. The coaching workforce has grown from 750 to 5,500. SAFF+ delivers match-level data across 62 stadiums. This proposal builds on that foundation, completing what it cannot yet do on its own.",
    ar: "المملكة لا تبدأ من الصفر. منذ 2021 ارتفع تمويل كرة القدم بنسبة 162%. ونما عدد المدربين من 750 إلى 5,500. ويوفّر سَفّ+ بيانات على مستوى المباراة عبر 62 ملعباً. هذا المقترح يبني على ذلك الأساس، مُكمِلاً ما لا تستطيع المنظومة تحقيقه وحدها بعد.",
  },
  pillarsCallout: {
    en: "Remove any one pillar and the system underperforms. These six are not independent initiatives. They are a single integrated system.",
    ar: "أزِل أيّ ركيزة من هذه الستة، وتختلّ المنظومة بأكملها. هذه ليست مبادراتٍ مستقلّة، بل منظومةٌ واحدة متكاملة.",
  },

  platformEyebrow: { en: "The Infrastructure", ar: "البنية التحتية" },
  platformHeadline: {
    en: "Making the invisible visible.",
    ar: "جعل ما هو خفيٌّ مرئياً.",
  },
  saffCovers: { en: "SAFF+ covers", ar: "ما يغطّيه سَفّ+" },
  saffTitle: { en: "The match itself", ar: "المباراة ذاتها" },
  saffBody: {
    en: "Match performance across 62 stadiums. Competition statistics and player database. Talent identification and scouting support. 60 to 70 performance parameters at competition level.",
    ar: "أداء المباريات عبر 62 ملعباً. إحصاءات المنافسات وقاعدة بيانات اللاعبين. دعم اكتشاف المواهب والاستكشاف. من 60 إلى 70 مؤشّر أداء على مستوى المنافسة.",
  },
  platformAdds: { en: "The Platform adds", ar: "ما تُضيفه المنصة" },
  platformTitle: {
    en: "Everything between the matches",
    ar: "كلّ ما يحدث بين المباريات",
  },
  platformBody: {
    en: "Training sessions, welfare records, physical development, educational progress. A portable development profile that travels with every player from first registration through professional contract. An AI layer that sees patterns across thousands of players simultaneously.",
    ar: "حصص التدريب، وسجلات الرعاية، والتطور البدني، والتقدّم التعليمي. ملفٌّ تطويريٌّ محمول يرافق كل لاعب من أول تسجيل حتى عقده الاحترافي. وطبقة ذكاء اصطناعي ترى الأنماط عبر آلاف اللاعبين في آنٍ واحد.",
  },
  demoButton: {
    en: "Platform demo coming soon",
    ar: "العرض التوضيحي للمنصة قادم قريباً",
  },
  demoToastBody: {
    en: "An interactive walkthrough of the platform is in development.",
    ar: "جولةٌ تفاعلية للمنصة قيد التطوير.",
  },

  phasesEyebrow: { en: "Eight Years", ar: "ثماني سنوات" },
  phasesHeadline: {
    en: "Three phases. Clear milestones. Public accountability.",
    ar: "ثلاث مراحل. معالم واضحة. مساءلةٌ علنية.",
  },
  phaseLabel: { en: "Phase", ar: "المرحلة" },
  ninetyEyebrow: { en: "The Path Begins", ar: "بداية الطريق" },
  ninetyHeadline: { en: "The First Ninety Days", ar: "أول تسعين يوماً" },
  ninetyOne: { en: "One:", ar: "أولاً:" },
  ninetyTwo: { en: "Two:", ar: "ثانياً:" },
  ninetyThree: { en: "Three:", ar: "ثالثاً:" },
  ninetyFour: { en: "Four:", ar: "رابعاً:" },
  ninetyBody: {
    en: "The first ninety days do not require a fully resourced program. They require four decisions. {one} formal adoption of the implementation plan. {two} convening of the Saudi football identity workshop. {three} appointment of the five Regional Football Development Office directors. {four} commissioning of the platform's foundational build. These four decisions do not complete Phase 1. They make Phase 1 real.",
    ar: "لا تتطلّب أول تسعين يوماً برنامجاً مكتمل الموارد. تتطلّب أربعة قرارات. {one} الاعتماد الرسمي لخطة التنفيذ. {two} عقد ورشة هويّة الكرة السعودية. {three} تعيين مديري مكاتب تطوير كرة القدم الإقليمية الخمسة. {four} الشروع في البناء التأسيسي للمنصة. هذه القرارات الأربعة لا تُكمل المرحلة الأولى، بل تجعلها حقيقةً واقعة.",
  },

  footerTagline: {
    en: "A proposal for the transformation of Saudi football. April 2026",
    ar: "مقترحٌ لتحويل كرة القدم السعودية. أبريل 2026",
  },
  footerSubmitted: {
    en: "Submitted to the Secretary General · Saudi Arabian Football Federation",
    ar: "مُقدَّم إلى الأمين العام · الاتحاد السعودي لكرة القدم",
  },
};

export function t(key: keyof typeof ui, lang: Lang) {
  return ui[key][lang];
}

export const heroStats: L<{ value: string; label: string }[]> = {
  en: [
    { value: "10%", label: "SPL minutes played by under-23 players" },
    { value: "5,500", label: "coaches with no unified standard" },
    { value: "0", label: "development programs with outcome data" },
  ],
  ar: [
    { value: "10٪", label: "نسبة دقائق لاعبي تحت 23 في دوري روشن" },
    { value: "5,500", label: "مدرّب دون معيار موحّد" },
    { value: "0", label: "برامج تطوير ببيانات نتائج" },
  ],
};

export const mandateBlocks: L<{ title: string; body: string }[]> = {
  en: [
    {
      title: "The moment",
      body: "Saudi Arabia stands at a moment that will not repeat itself. The 2034 World Cup is confirmed. Vision 2030 has placed football at the center of the Kingdom's national identity. Investment at the senior level is unprecedented.",
    },
    {
      title: "The gap",
      body: "The foundation beneath all of it, the development system that will produce the players who wear the green jersey in 2034, remains fragmented, unmeasured, and operating without a shared direction.",
    },
    {
      title: "Passion",
      body: "No country in the world loves football more than Saudi Arabia. Passion has never been the problem. The system is the problem, and the system is the solution.",
    },
    {
      title: "The opportunity",
      body: "Saudi Arabia is building its system in an era those countries never had, where AI identifies talent patterns across thousands of players simultaneously, where a player's complete development history travels with them, where the federation sees everything continuously, not at the end of the season.",
    },
  ],
  ar: [
    {
      title: "اللحظة",
      body: "تقف المملكة العربية السعودية أمام لحظةٍ لن تتكرّر. كأس العالم 2034 مؤكَّد. وضعت رؤية 2030 كرة القدم في صميم الهوية الوطنية. والاستثمار على مستوى المنتخب الأول لم يسبق له مثيل.",
    },
    {
      title: "الفجوة",
      body: "الأساس الذي يقوم عليه كلّ ذلك، منظومة التطوير التي ستُنتج اللاعبين الذين سيرتدون الفانيلة الخضراء في 2034، لا يزال مُجزّأً، وغير مُقاس، ويعمل دون توجّهٍ مشترك.",
    },
    {
      title: "الشغف",
      body: "لا توجد دولة في العالم تحب كرة القدم أكثر مما تحبها المملكة. الشغف لم يكن يوماً المشكلة. المنظومة هي المشكلة، وهي الحل.",
    },
    {
      title: "الفرصة",
      body: "تبني المملكة منظومتها في عصرٍ لم تشهده تلك الدول، حيث يكتشف الذكاء الاصطناعي أنماط المواهب عبر آلاف اللاعبين في آنٍ واحد، وحيث يرافق التاريخ التطويريّ الكامل اللاعبَ أينما ذهب، وحيث يرى الاتحاد كلّ شيءٍ بشكلٍ مستمر، لا في نهاية الموسم فقط.",
    },
  ],
};

export const lessons: L<
  { country: string; title: string; body: string; saudiHeadline: string; saudiAction: string }[]
> = {
  en: [
    {
      country: "Belgium",
      title: "Unify before you invest more.",
      body: "System quality, not population size, was the constraint. Belgium went from irrelevant to consistently top three in the world by connecting what already existed before spending more.",
      saudiHeadline: "Integrate before you spend more.",
      saudiAction:
        "SAFF, Mahd, regional centers, and clubs already exist — connect them under one methodology before scaling investment.",
    },
    {
      country: "Iceland",
      title: "Infrastructure enables everything.",
      body: "You cannot develop players you cannot train consistently. For Saudi Arabia, climate-adapted facilities are not comfort measures. They are prerequisites.",
      saudiHeadline: "Beat the heat the way they beat the cold.",
      saudiAction:
        "Climate-adapted facilities and smarter scheduling are not comfort — they are prerequisites for year-round development.",
    },
    {
      country: "Japan",
      title: "Protect the system from short-term pressure.",
      body: "Japan published a twenty-year vision and honored it across administrations and tournament disappointments. Development metrics, not match results, were the measure.",
      saudiHeadline: "Protect the plan from the scoreboard.",
      saudiAction:
        "Anchor a long-term system to development KPIs — coaching, player profiles, regional activity. Senior results follow, not lead.",
    },
    {
      country: "Germany",
      title: "Data turns good intentions into good decisions.",
      body: "Germany tracked 1.8 million junior players across 27,000 clubs. The 2014 World Cup was the result of a decade of data-driven reform that began after Euro 2000.",
      saudiHeadline: "Build data-native from day one.",
      saudiAction:
        "Track every player, club, and region from the start, instead of bolting analytics onto the system a decade later.",
    },
    {
      country: "England + Germany",
      title: "Develop the person, not just the footballer.",
      body: "98% of academy scholars at 16 are no longer playing professionally by 18. The players who do not make it are the next generation of coaches, analysts, and administrators, provided the system keeps them.",
      saudiHeadline: "Develop the person, not just the player.",
      saudiAction:
        "A dual-career framework keeps the 98% who don't turn pro inside the game as coaches, analysts, scouts, and staff.",
    },
    {
      country: "Morocco",
      title: "Ecosystem integration multiplies every investment.",
      body: "Morocco built connective tissue between existing programs rather than one dominant academy. Saudi Arabia's starting conditions most closely resemble Morocco's.",
      saudiHeadline: "Connect the assets you already own.",
      saudiAction:
        "Mahd, Future Falcons, regional centers, clubs, and academies must compound into one national system — not run in parallel.",
    },
  ],
  ar: [
    {
      country: "بلجيكا",
      title: "وحِّد قبل أن تستثمر أكثر.",
      body: "كانت جودة المنظومة، لا حجم السكان، هي العائق. انتقلت بلجيكا من اللاوجود إلى المراكز الثلاثة الأولى عالمياً بشكلٍ ثابت عبر ربط ما هو قائمٌ أصلاً قبل ضخّ مزيدٍ من الإنفاق.",
      saudiHeadline: "اربط قبل أن تُنفق أكثر.",
      saudiAction:
        "الاتحاد ومهد والمراكز الإقليمية والأندية موجودة بالفعل — اربطها تحت منهجية واحدة قبل التوسّع في الاستثمار.",
    },
    {
      country: "آيسلندا",
      title: "البنية التحتية تُمكّن كلّ شيء.",
      body: "لا يمكنك تطوير لاعبين لا تستطيع تدريبهم باستمرار. وللمملكة، فإن المنشآت المتكيّفة مع المناخ ليست رفاهية، بل شرطٌ أساسي.",
      saudiHeadline: "اهزم الحرّ كما هزموا البرد.",
      saudiAction:
        "المنشآت المتكيّفة مع المناخ والجداول الأذكى ليست رفاهية، بل شرطٌ أساسي للتطوير على مدار العام.",
    },
    {
      country: "اليابان",
      title: "احمِ المنظومة من الضغوط قصيرة المدى.",
      body: "نشرت اليابان رؤيةً عشرينيّة والتزمت بها عبر إداراتٍ متعاقبة وخيباتٍ في البطولات. كانت مؤشّرات التطوير، لا نتائج المباريات، هي المعيار.",
      saudiHeadline: "احمِ الخطّة من لوحة النتائج.",
      saudiAction:
        "ارسِ منظومة طويلة المدى على مؤشرات تطوير — تدريب، ملفّات لاعبين، نشاط إقليمي. نتائج المنتخب الأول ثمرة، لا معيار.",
    },
    {
      country: "ألمانيا",
      title: "البيانات تحوّل النوايا الحسنة إلى قرارات صائبة.",
      body: "تابعت ألمانيا 1.8 مليون لاعبٍ ناشئ عبر 27 ألف نادٍ. كأس العالم 2014 كان ثمرة عقدٍ من الإصلاح المبنيّ على البيانات، بدأ بعد يورو 2000.",
      saudiHeadline: "ابنِ منظومة بيانات منذ اليوم الأول.",
      saudiAction:
        "تتبّع كلّ لاعب ونادٍ ومنطقة منذ البداية، بدلاً من إلحاق التحليلات بالمنظومة بعد عقد.",
    },
    {
      country: "إنجلترا + ألمانيا",
      title: "طوّر الإنسان، لا اللاعب فقط.",
      body: "98٪ من ناشئي الأكاديميات في عمر 16 لا يستمرّون في الاحتراف بعد 18. اللاعبون الذين لا يصلون هم الجيل القادم من المدربين والمحلّلين والإداريين، إن أبقتهم المنظومة.",
      saudiHeadline: "طوّر الإنسان، لا اللاعب فقط.",
      saudiAction:
        "إطار مسار مزدوج يُبقي الـ98٪ الذين لا يحترفون داخل اللعبة كمدربين ومحلّلين وكشّافين وكوادر.",
    },
    {
      country: "المغرب",
      title: "تكامل المنظومة يضاعف كلّ استثمار.",
      body: "بنى المغرب نسيجاً رابطاً بين البرامج القائمة بدلاً من أكاديميةٍ واحدة مهيمنة. ظروف انطلاق المملكة هي الأقرب إلى الحالة المغربية.",
      saudiHeadline: "اربط الأصول التي تملكها أصلاً.",
      saudiAction:
        "مهد، الصقور المستقبل، المراكز الإقليمية، الأندية، والأكاديميات يجب أن تتراكم في منظومة وطنية واحدة — لا أن تعمل بالتوازي.",
    },
  ],
};

export const diagnosisCards: L<{ title: string; body: string }[]> = {
  en: [
    {
      title: "A system that isn't a system",
      body: "Mahd Academy operates on its own methodology. Regional centers follow their own approach. Clubs teach whatever curriculum their staff brings. No shared language, no unified data, no feedback loop. Strategies are published but not enforced.",
    },
    {
      title: "Investment without accountability",
      body: "In 2021, SAFF launched its Our Tactics for Tomorrow strategy. The Future Falcons program was launched in Spain, and the regional centers spread across the Kingdom — both were shut down suddenly and without justification. The recurring pattern of launching strategic programs, then closing them and launching new ones, is the single most expensive structural failure in Saudi football.",
    },
    {
      title: "No Saudi football identity",
      body: "The national team has cycled through Brazilian, Portuguese, French, Italian, Dutch, Latin, and Greek coaching philosophies. Each new coach imposes a different system on players prepared for something else. Youth coaches cannot prepare players for a philosophy that changes every two years.",
    },
    {
      title: "Winning over development",
      body: "Across every level, including club academies, private academies, regional centers, and school tournaments, teams are rewarded based on results rather than player development. Physically mature players are selected over technically gifted late developers. As a result, the entire process of talent discovery and development loses its meaning.",
    },
    {
      title: "Private academies, invisible",
      body: "Hundreds of private football academies across the Kingdom are developing genuinely talented players and receiving nothing in return: no compensation, no recognition, no integration into the national talent pipeline.",
    },
    {
      title: "The schools net, unused",
      body: "Every child in Saudi Arabia passes through the school system. PE teachers are theoretically the first scouts in the country. In practice they have no evaluation tools, no reporting pathways, and no connection to the national talent identification infrastructure.",
    },
    {
      title: "The parental trust deficit",
      body: "For a significant portion of Saudi families, the calculation is simple: professional football offers a narrow pathway with no safety net, while education offers a clear alternative regardless of outcome. Parental trust is not a soft concern. It is what determines whether talent enters the pipeline at all.",
    },
    {
      title: "The data vacuum",
      body: "There is currently no mechanism by which SAFF can answer basic operational questions with evidence. Which regions produce the most talented players? Along which pathway are players being lost? Decisions are made on intuition and public opinion. Without data, there is no way to measure or to make the right decisions.",
    },
  ],
  ar: [
    {
      title: "منظومةٌ ليست منظومة",
      body: "تعمل أكاديمية مهد بمنهجيّتها الخاصة. وتتّبع المراكز الإقليمية نهجها المستقل. وتُدرّس الأندية أيَّ منهجٍ يأتي به طاقمها. لا لغةٌ مشتركة، ولا بيانات موحّدة، ولا حلقة تغذية راجعة. تُنشَر الاستراتيجيات ولا تُفرَض. ",
    },
    {
      title: "استثمارٌ بلا مساءلة",
      body: "في 2021 أطلق الاتحاد استراتيجية «تكتيكاتنا للغد». انطلق برنامج صقور المستقبل في إسبانيا،  و انتشرت المراكز الإقليمية و كلاهما اغلقا بشكل مفاجئ و بلا تبرير .النمط المتكرر لاطلاق البرامج الاستراتيجية ثم اغلاقها واطلاق برامج اخرى هو أعلى فشلٍ هيكليّ تكلفةً في الكرة السعودية.",
    },
    {
      title: "لا هويّة كروية سعودية",
      body: "تنقّل المنتخب بين فلسفاتٍ تدريبية برازيلية وبرتغالية وفرنسية وإيطالية وهولندية ولاتينية ويونانية. كلّ مدرّبٍ جديد يفرض نظاماً مختلفاً على لاعبين أُعدّوا لشيءٍ آخر. ولا يستطيع مدرّبو الفئآت السنية إعداد لاعبين لفلسفةٍ تتغيّر كلّ عامين.",
    },
    {
      title: "الفوز على حساب التطوير",
      body: "في كلّ مستوى، بما في ذلك أكاديميات الأندية والأكاديميات الخاصة والمراكز الإقليمية وبطولات المدارس. بحيث يكافأ الفريق بناء على النتائج بدلا من تطور اللاعب. يُختار اللاعبون الناضجون بدنياً على حساب الموهوبين مهاريا متأخّري النموّ. مما يفقد عملية اكتشاف و تطوير المواهب معناها.",
    },
    {
      title: "الأكاديميات الخاصة خارج الحسبان",
      body: "تعمل مئات الأكاديميات الخاصة عبر المملكة على تطوير لاعبين موهوبين فعلاً، ولا تتلقّى شيئاً من الاهتمام. لا تعويضاً ولا اعترافاً ولا اندماجاً في خط إمداد المواهب الوطني.",
    },
    {
      title: "شبكة المدارس، غير مُستثمَرة",
      body: "كلّ طفلٍ في المملكة يمرّ بالمنظومة المدرسية. ومعلّمو التربية البدنية هم نظرياً أوّل المستكشفين في البلاد. ولكن عملياً لا يملكون أدوات تقييم، ولا قنوات إبلاغ، ولا صلةً ببنية اكتشاف المواهب الوطنية.",
    },
    {
      title: "عجز ثقة الأسر",
      body: "لشريحةٍ كبيرة من الأسر السعودية، الحساب بسيط: الاحتراف يقدّم مساراً ضيّقاً بلا شبكة أمان، فيما يقدّم التعليم بديلاً واضحاً مهما كانت النتيجة. ثقة الأسر ليست شأناً ثانوياً، بل هي ما يحدّد إن كانت الموهبة ستدخل خطّ الإمداد أصلاً.",
    },
    {
      title: "فراغ البيانات",
      body: "لا توجد حالياً آلية تمكّن الاتحاد من الإجابة عن أسئلة تشغيلية أساسية بالأدلّة. أيّ المناطق تُصدر أكثر اللاعبين موهبة. في اي مسار يُفقَد اللاعبون؟ تُتّخذ القرارات بالحدس و الرأي العام. وبلا بيانات لا يمكن القياس ولا اتخاذ القرار الصحيح",
    },
  ],
};

export const pillars: L<{ name: string; body: string }[]> = {
  en: [
    {
      name: "The Unified National Curriculum",
      body: "One technical methodology, one playing identity, one development standard across every institution. Mandated, not encouraged. Before the curriculum is written, a Saudi Football Identity Workshop convenes coaches, former internationals, and cultural advisors to define the playing philosophy that reflects Saudi culture: courage, intensity, refusal to surrender.",
    },
    {
      name: "Coach Education and Saudization Pipeline",
      body: "Coaching qualification accessible across all 13 regions. Regional licensing hubs at all 17 RTCs. Subsidized fees. A formal university partnership connecting Saudi sports science graduates to coaching certification. A Saudization acceleration program developing qualified Saudi coaches into leadership roles, not as a quota, but as a talent investment in the people who develop players.",
    },
    {
      name: "National Data Infrastructure and AI Platform",
      body: "Every registered player has a portable development profile, created at first registration and traveling with them for life. A staff application with Gulf Arabic voice capture. A federation dashboard with real-time visibility. An AI layer identifying development patterns, flagging early warning signals, surfacing geographic talent gaps, and measuring curriculum effectiveness.",
    },
    {
      name: "The Integrated Ecosystem",
      body: "Five Regional Football Development Offices. A mandatory feedback loop between national youth teams and clubs. A private academy registration framework with a compensation mechanism. A schools integration system connecting PE teachers to national talent identification. A two-way communication platform so practitioners can reach the federation.",
    },
    {
      name: "Player Care and Dual Career Framework",
      body: "A welfare officer at every registered institution. Documented education support plans. Quarterly parent meetings. Transition and aftercare support for every released player, including formal pathways into coaching, scouting, sports science, and academy administration. The players who do not make it are the next generation of the system's workforce.",
    },
    {
      name: "International Pathway and Role Model Program",
      body: "Formal European club partnerships in France, Spain, Portugal, Germany, and Netherlands. A player readiness pathway for under-18 to under-23 Saudi players. A role model program connecting Saudi players succeeding abroad to regional centers and parental engagement sessions.",
    },
  ],
  ar: [
    {
      name: "المنهج الوطني الموحَّد",
      body: "منهجيّةٌ فنّيةٌ واحدة، وهويّة لعبٍ واحدة، ومعيار تطوير واحد عبر كل مؤسسة، إلزامياً لا اختيارياً. وقبل كتابة المنهج، تنعقد ورشة هويّة الكرة السعودية تجمع المدربين واللاعبين الدوليين السابقين والمستشارين الثقافيين لتحديد فلسفة اللعب التي تعكس الثقافة السعودية: الشجاعة، والشدّة، ورفض الاستسلام.",
    },
    {
      name: "تأهيل المدربين ومسار السعودة",
      body: "تأهيلٌ تدريبي متاحٌ في كلّ المناطق الثلاث عشرة. مراكز ترخيص إقليمية في الـ17 مركزاً تدريبياً. رسومٌ مدعومة. شراكة جامعية رسمية تربط خريجي علوم الرياضة السعوديين بشهادات التدريب. وبرنامج تسريع للسعودة يطوّر المدربين السعوديين المؤهَّلين إلى أدوارٍ قيادية، ليس كحصّة، بل كاستثمارٍ في موهبة من يطوّرون اللاعبين.",
    },
    {
      name: "البنية التحتية للبيانات ومنصّة الذكاء الاصطناعي",
      body: "لكل لاعبٍ مسجّل ملفٌّ تطويريٌّ محمول، يُنشأ عند أول تسجيل ويرافقه مدى الحياة. تطبيقٌ للطاقم بإدخال صوتي بلهجة الخليج. لوحة قيادة للاتحاد برؤية لحظية. وطبقة ذكاء اصطناعي ترصد أنماط التطوّر، وتُنبّه إلى الإشارات المبكّرة، وتكشف فجوات المواهب الجغرافية، وتقيس فاعلية المنهج.",
    },
    {
      name: "المنظومة المتكاملة",
      body: "خمسة مكاتب لتطوير كرة القدم الإقليمية. حلقة تغذية راجعة إلزامية بين منتخبات الناشئين والأندية. إطار تسجيل للأكاديميات الخاصة بآليّة تعويض. ونظامٌ لدمج المدارس يربط معلمي التربية البدنية باكتشاف المواهب الوطني. ومنصّة تواصلٍ ثنائية الاتجاه يصل عبرها الممارسون إلى الاتحاد.",
    },
    {
      name: "إطار رعاية اللاعب والمسار المزدوج",
      body: "مسؤول رعاية في كلّ مؤسسة مسجّلة. خطط دعمٍ تعليمي موثّقة. اجتماعات أولياء أمور ربعية. ودعم انتقالٍ ورعاية لاحقة لكل لاعبٍ يُستغنى عنه، بما في ذلك مساراتٌ رسمية إلى التدريب والاستكشاف وعلوم الرياضة وإدارة الأكاديميات. اللاعبون الذين لا يصلون هم الجيل القادم من كادر المنظومة.",
    },
    {
      name: "المسار الدولي وبرنامج القدوة",
      body: "شراكاتٌ رسمية مع أندية أوروبية في فرنسا وإسبانيا والبرتغال وألمانيا وهولندا. مسار جاهزية للاعبين السعوديين تحت 18 وحتى تحت 23. وبرنامج قدوةٍ يربط اللاعبين السعوديين الناجحين خارجاً بالمراكز الإقليمية وجلسات مشاركة أولياء الأمور.",
    },
  ],
};

export const platformFeatures: L<{ title: string; body: string }[]> = {
  en: [
    {
      title: "Portable player profiles",
      body: "Created at first registration. Five categories: technical, physical, psychological, educational, and transition records. Travels with the player for life.",
    },
    {
      title: "Staff application",
      body: "Gulf Arabic voice capture. Role-specific templates for coaches, physios, welfare officers. Documentation fast enough that it actually gets done.",
    },
    {
      title: "Federation dashboard",
      body: "Real-time visibility for technical directorate and five regional offices. Parent visibility portal. Every institution's compliance visible at a glance.",
    },
    {
      title: "AI development layer",
      body: "Pattern recognition, early warning signals, geographic talent gap detection, curriculum effectiveness measurement. Informs coaching judgment. Does not replace it.",
    },
    {
      title: "Audit trail",
      body: "Every decision logged with timestamp and rationale. Selection decisions that bypass data are flagged. Programs that claim outcomes can be verified. The anti-corruption mechanism built into the infrastructure.",
    },
  ],
  ar: [
    {
      title: "ملفّات لاعبين محمولة",
      body: "تُنشأ عند أول تسجيل. خمس فئات: السجلات الفنية والبدنية والنفسية والتعليمية والانتقالية. ترافق اللاعب مدى الحياة.",
    },
    {
      title: "تطبيق الطاقم",
      body: "إدخالٌ صوتي بلهجة الخليج. قوالب مخصصة لكل دور: المدربون والأخصائيون ومسؤولو الرعاية. توثيقٌ سريعٌ بما يكفي ليُنجَز فعلاً.",
    },
    {
      title: "لوحة قيادة الاتحاد",
      body: "رؤيةٌ لحظية للإدارة الفنية والمكاتب الإقليمية الخمسة. بوابة رؤية لأولياء الأمور. التزام كل مؤسسة مرئيٌّ بنظرة.",
    },
    {
      title: "طبقة الذكاء الاصطناعي",
      body: "تمييز الأنماط، إشاراتٌ مبكّرة للإنذار، رصد فجوات المواهب الجغرافية، قياس فاعلية المنهج. تُسند حكم المدرّب ولا تحلّ محلّه.",
    },
    {
      title: "سجلّ التدقيق",
      body: "كلّ قرارٍ مسجّل بوقته ومبرراته. قرارات الاختيار التي تتجاوز البيانات يتمّ تنبيهها. البرامج التي تدّعي نتائج يمكن التحقّق منها. آليّة مكافحة الفساد مبنيّةٌ في البنية التحتية ذاتها.",
    },
  ],
};

export const phases: L<{
  name: string;
  years: string;
  budget: string;
  milestones: string[];
}[]> = {
  en: [
    {
      name: "Foundation",
      years: "Years 1 to 2",
      budget: "SAR 180M – 280M",
      milestones: [
        "Five Regional Football Development Offices established",
        "Saudi football identity workshop convened",
        "Unified curriculum published for all age groups",
        "2,000 additional coaching qualifications awarded",
        "Platform operational, every registered player profiled",
        "60% of private academies registered",
        "Player welfare officers in post at all institutions",
      ],
    },
    {
      name: "Scale",
      years: "Years 3 to 5",
      budget: "SAR 320M – 480M",
      milestones: [
        "Full curriculum deployed and audited nationally",
        "Full AI intelligence layer operational",
        "First public annual development report published",
        "Schools integration fully national",
        "5 Saudi players under 23 competing professionally abroad",
        "U23 SPL minutes above 15%",
      ],
    },
    {
      name: "Performance",
      years: "Years 6 to 8",
      budget: "SAR 280M – 420M",
      milestones: [
        "Platform producing predictive intelligence from 6 years of data",
        "First complete development cohort entering the Pro League",
        "60% of national team squad with documented national system history",
        "15 Saudi players under 25 competing professionally abroad",
        "Saudi private sector providing 40% of development system service contracts",
      ],
    },
  ],
  ar: [
    {
      name: "التأسيس",
      years: "السنتان 1 و2",
      budget: "180 – 280 مليون ريال",
      milestones: [
        "إنشاء خمسة مكاتب إقليمية لتطوير كرة القدم",
        "عقد ورشة هويّة الكرة السعودية",
        "نشر المنهج الموحّد لجميع الفئات العمرية",
        "منح 2,000 شهادة تدريب إضافية",
        "تشغيل المنصة وإنشاء ملفٍّ لكل لاعبٍ مسجّل",
        "تسجيل 60٪ من الأكاديميات الخاصة",
        "تعيين مسؤولي رعاية اللاعبين في جميع المؤسسات",
      ],
    },
    {
      name: "التوسّع",
      years: "السنوات 3 إلى 5",
      budget: "320 – 480 مليون ريال",
      milestones: [
        "تطبيق المنهج كاملاً وتدقيقه على المستوى الوطني",
        "تشغيل طبقة الذكاء الاصطناعي بالكامل",
        "نشر أول تقرير تطوير سنوي علني",
        "اكتمال دمج المدارس على المستوى الوطني",
        "احتراف 5 لاعبين سعوديين تحت 23 خارجياً",
        "تجاوز نسبة دقائق تحت 23 في دوري روشن 15٪",
      ],
    },
    {
      name: "الأداء",
      years: "السنوات 6 إلى 8",
      budget: "280 – 420 مليون ريال",
      milestones: [
        "إنتاج المنصة لذكاءٍ تنبؤي من 6 سنوات من البيانات",
        "دخول أول دفعة تطوير كاملة إلى دوري المحترفين",
        "60٪ من تشكيلة المنتخب بتاريخٍ موثّق في المنظومة الوطنية",
        "احتراف 15 لاعباً سعودياً تحت 25 خارجياً",
        "تقديم القطاع الخاص السعودي 40٪ من عقود خدمات منظومة التطوير",
      ],
    },
  ],
};

// =====================================================
// Detailed pillars (Part 03 · PILLARS — full source)
// =====================================================

export type PillarDetail = {
  name: string;
  tagline: string;
  intro: string;
  causes: string[];
  impact: string[];
  shortTerm: string[];
  longTerm: string[];
};

export const pillarsDetailed: L<PillarDetail[]> = {
  ar: [
    {
      name: "تمكين السعوديين",
      tagline: "الكوادر الوطنية هي رأس المال الحقيقي. كل عقد مع كفاءة أجنبية يجب أن يكون استثماراً في كفاءة سعودية.",
      intro: "يُعد العنصر السعودي القادر والمؤهل هو حجر الأساس لاستدامة أي تطور في كرة القدم. الاعتماد المتواصل على الخبرات الأجنبية دون نقل المعرفة يُنتج تطوراً سطحياً يزول مع رحيل تلك الخبرات. تمكين السعوديين يعني تأهيل المدربين، الإداريين، المحللين، الكشافين، الأطباء الرياضيين، والمدراء الفنيين السعوديين ليكونوا أصحاب القرار والخبرة في المنظومة.",
      causes: [
        "قلة و ضعف برامج تأهيل الكوادر السعودية في التخصصات الرياضية المتقدمة",
        "الاعتماد المباشر على الكفاءات الأجنبية دون اشتراطات نقل المعرفة",
        "غياب آلية المعايشة (Internship) داخل منظومة العمل الرياضية",
        "محدودية الفرص العملية للسعوديين في المناصب القيادية والتخصصية",
        "ضعف تمثيل السعوديين في الدورات والمؤتمرات الدولية",
        "ضعف الثقافة الاحترافية في التدريب، إذ لا يُعدّ مهنة بمسار واضح ومعترف به اجتماعياً",
      ],
      impact: [
        "تطور سطحي يختفي مع رحيل الخبرات الأجنبية",
        "هدر مالي ضخم في عقود لا تترك أثراً معرفياً",
        "غياب الهوية الكروية الوطنية بسبب ضعف القرار السعودي في الجهاز الفني للمنتخب",
        "محدودية الكفاءات السعودية القادرة على قيادة المشاريع التنموية",
        "اعتماد طويل المدى على الخارج في أبسط القرارات",
      ],
      shortTerm: [
        "اشتراط تعاقدي إلزامي على جميع الكفاءات الأجنبية بتأهيل نظراء سعوديين خلال فترة العقد",
        "برامج معايشة (Internship) داخل أندية الدوري للمدربين السعوديين الشباب",
        "تخصيص 60% من المقاعد كحد أدنى في دورات التطوير المتقدمة للسعوديين",
        "إنشاء قاعدة بيانات وطنية للكفاءات السعودية في كرة القدم بكل التخصصات",
        "تنظيم منتدى سنوي للكفاءات السعودية العاملة محلياً والمغتربة",
        "اشتراط توثيق المنهجيات بالعربية إلى جانب الإنجليزية في كل عقد مع أي كفاءة أجنبية",
      ],
      longTerm: [
        "سعودة 70%+ من المناصب القيادية في الاتحاد والأندية والمراكز الإقليمية بحلول 2034",
        "إنشاء أكاديمية وطنية للكوادر القيادية الرياضية تخرّج مدراء فنيين، تنفيذيين، رياضيين",
        "بناء جيل من المدربين السعوديين الحاصلين على رخصة Pro قادرين على قيادة المنتخبات والأندية الكبيرة",
        "إطلاق برنامج ابتعاث متخصص للسعوديين في التخصصات النادرة",
        "مدرب وطني سعودي للمنتخب الأول كهدف استراتيجي بحلول 2034",
        "مدربيين وطنيين سعوديين لجميع المنتخبات الوطنية",
      ],
    },
    {
      name: "الاتحادات الإقليمية كفروع للاتحاد السعودي",
      tagline: "اللامركزية هي مفتاح التغطية الجغرافية الحقيقية. كل منطقة تستحق أن تكون مصنعاً للمواهب.",
      intro: "تُمثّل الاتحادات الإقليمية ذراع الاتحاد السعودي في كل منطقة، وتعمل كنقطة تواصل مباشرة بين القيادة المركزية والميدان. وظيفتها الأساسية تشمل أربعة محاور: تشغيل المراكز الإقليمية لتطوير المواهب، تكوين منتخبات إقليمية تنافسية، تنظيم دورات الرخص التدريبية، وإدارة بطولات إقليمية على مستوى الفئات السنية والهواة و زيادة نسبة الممارسين للعبة.",
      causes: [
        "تمركز صناعة القرار وموارد التطوير.",
        "عدم تغطية مناطق المملكة جغرافياً بشكل عادل",
        "غياب آلية لاستقطاب المواهب من خارج المدن الكبرى",
        "محدودية بطولات الفئات السنية على المستوى الإقليمي",
        "إغلاق برامج وطنية مهمة (صقور المستقبل، المراكز الإقليمية) دون بدائل واضحة",
      ],
      impact: [
        "ضياع آلاف المواهب في المناطق البعيدة عن المدن الكبرى",
        "قاعدة تغذية ضيقة للمنتخبات الوطنية تعتمد على عدد محدود من الأندية",
        "تفاوت كبير في مستوى التدريب والمنافسة بين المناطق",
        "ضعف المنافسات و قلة عدد المباريات لفرق درجات المناطق و قد تصل الى مباراتين فقط في الموسم كامل",
        "ضعف ارتباط الجمهور المحلي بالمشروع الكروي الوطني",
        "تفويت مواهب حقيقية في مناطق المدن غير الرئيسية",
      ],
      shortTerm: [
        "إعادة تفعيل المراكز الإقليمية بنموذج محسّن وأهداف واضحة",
        "تأسيس فروع إدارية للاتحاد في 13 منطقة بصلاحيات تنفيذية محددة",
        "منتخبات إقليمية للفئات السنية (U13, U15, U17, U19) تتنافس في بطولة وطنية سنوية",
        "تنظيم دورات الرخص التدريبية (D, C, B) في كل منطقة بدلاً من المركز فقط",
        "بطولات إقليمية للهواة والشباب منظمة ومستمرة طوال الموسم",
        "انشاء أول ملف رقمي مرجعي للاعب. ",
      ],
      longTerm: [
        "لكل منطقة منتخب إقليمي قوي يُغذّي المنتخبات الوطنية بأسماء جديدة كل عام",
        "20,000+ مدرب سعودي مرخّص (D, C, B) موزعين بشكل عادل جغرافياً بحلول 2034",
        "استقلالية مالية وإدارية متدرجة للاتحادات الإقليمية مع رقابة مركزية",
        "بطولات إقليمية معترف بها رسمياً ضمن منظومة الاتحاد",
        "منشأة رياضية متكاملة في كل منطقة تخدم البطولات والتدريب و التعليم الإقليمي",
      ],
    },
    {
      name: "الهوية والمدرسة السعودية",
      tagline: "كل دولة عظيمة في كرة القدم تمتلك مدرستها الخاصة. الهوية ليست شعاراً، بل أسلوب لعب يعكس ثقافة المملكة وخصائص لاعبها.",
      intro: "تمتلك جميع الدول المتقدمة كروياً مدرسة خاصة بها. أما الكرة السعودية، فقد تنقّلت بين عدة مدارس دون أن تستقر على هوية واضحة. اللاعب السعودي يمتلك خصائص مميزة نابعة من ثقافة البلد (الشجاعة، الهمة، القوة، عدم الاستسلام) يجب أن تُترجم إلى أسلوب لعب موحّد على جميع المستويات.",
      causes: [
        "تغيّر المدرسة الفنية مع كل تغيير لمدرب المنتخب",
        "غياب مرجع وطني فني ملزم لجميع الأجهزة الفنية",
        "عدم تأهيل مدربين سعوديين قادرين على قيادة المنتخب وفق هوية ثابتة",
        "عمل الأكاديميات والأندية باجتهادات فردية دون توجه موحد",
        "ضعف الربط بين هوية اللاعب وثقافة المملكة",
      ],
      impact: [
        "شتات اللاعبين عند كل تغيير مدرب",
        "صعوبة على الأندية في تأسيس لاعبين متوافقين مع منهجية المنتخب",
        "تذبذب الأداء على المدى الطويل وضعف الاستمرارية",
        "ضعف الانتماء الفني للاعب، إذ يُشكّك في ما يتعلمه بسبب التناقض",
        "غياب البصمة المعرفية لكرة القدم السعودية على الصعيد الإقليمي والقاري",
      ],
      shortTerm: [
        "عقد مؤتمر وطني للهوية الكروية يضم المدربين السعوديين والكفاءات التي عملت في المملكة",
        "إصدار وثيقة رسمية للهوية الكروية السعودية تشمل المبادئ، أسلوب اللعب، خصائص اللاعب",
        "إلزام المدرب الأجنبي للمنتخب بالعمل ضمن إطار الهوية المعتمدة",
        "تطبيق الهوية الموحدة على منتخبات الفئات السنية والمنتخبات الإقليمية",
        "إصدار دليل أكاديميات يلتزم بمبادئ المدرسة السعودية",
      ],
      longTerm: [
        "منتخب وطني بهوية لعب واضحة يُعرَف بها على المستوى العالمي بحلول 2034",
        "طاقم فني سعودي متكامل قادر على قيادة المنتخب وفق الهوية الوطنية",
        "تأثير المدرسة السعودية على المستوى الخليجي والآسيوي كنموذج يُحتذى به",
        "بصمة فنية مميزة تجعل اللاعب السعودي مرغوباً في الدوريات العالمية",
        "مناهج تدريبية وطنية متكاملة تعكس الهوية في كل مرحلة عمرية",
      ],
    },
    {
      name: "التقنية",
      tagline: "التقنية ليست رفاهية، بل ضرورة. كل قرار في كرة القدم الحديثة يُبنى على بيانات. ومن لا يمتلك البيانات، لا يمتلك المستقبل.",
      intro: "تتسابق دول العالم اليوم في توظيف التقنية في كرة القدم. والمملكة تمتلك بنية تقنية متقدمة في قطاعات أخرى، ويجب أن ينعكس ذلك على كرة القدم عبر أنظمة بيانات وتحليل حديثة، وأدوات علمية مساندة تساعد على تخصيص التدريب والتغذية والوقاية من الإصابات بشكل أخلاقي ومنظم.",
      causes: [
        "اعتماد كامل على الشركات الأجنبية في التقنيات الرياضية",
        "غياب بيانات موحّدة عن اللاعبين والمدربين على المستوى الوطني",
        "ضعف توظيف التحليل بالذكاء الاصطناعي",
        "تأخر تطبيق التقنيات الحديثة في الأكاديميات الناشئة",
        "ضعف ثقافة اتخاذ القرار المبني على البيانات",
        "منصة SAFF+ جيدة ولكن غير كافية و محصور استخدامها على بث المباريات",
        "غياب منظومة وطنية منظمة لاستخدام البيانات الحيوية والجينية في دعم التدريب والوقاية والتغذية للاعبين الصغار",
      ],
      impact: [
        "هدر مالي ضخم في عقود مع شركات أجنبية",
        "ضياع فرصة بناء قاعدة بيانات وطنية للمواهب",
        "تأخر في الانضمام للموجة العالمية لكرة القدم الرقمية",
        "صعوبة قياس تطور اللاعبين وفعالية البرامج التدريبية",
        "استمرار تصميم البرامج البدنية والغذائية والوقائية بصورة عامة، دون مراعاة الفروق الفردية العميقة بين اللاعبين.",
      ],
      shortTerm: [
        "منصة وطنية موحّدة لبيانات اللاعبين من الفئات السنية حتى الاحتراف",
        "تطبيق إلزامي لإدارة الأكاديميات يربطها بالاتحاد ويوحّد المعايير",
        
        "قاعدة بيانات وطنية للمدربين (الرخص، الخبرات، التقييمات)",
        "تطبيق رسمي للاتحاد يخدم اللاعبين والمدربين والمواطنين",
        "وضع إطار تنظيمي وأخلاقي لاستخدام البيانات الحيوية والجينية في الأكاديميات، يشمل موافقة اللاعب وولي الأمر، حماية الخصوصية، ومنع استخدامها كمعيار إقصائي.",
      ],
      longTerm: [
        "صناعة سعودية للتقنية الرياضية بمنتجات محلية تُصدَّر للمنطقة",
        "منظومة متكاملة للذكاء الاصطناعي في تحليل البيانات و اتخاذ قرارات افضل",
        "مراكز تحليل أداء متقدمة في كل اتحاد إقليمي",
        "شراكات استراتيجية مع شركات تقنية سعودية (NEOM، علم، STC، KAUST)",
        "قاعدة بيانات وطنية شاملة تربط المواهب من المدارس إلى الاحتراف",
        "إنشاء وحدة وطنية لعلوم الأداء والوراثة الرياضية لدعم الأندية والأكاديميات في تخصيص التدريب، التغذية، وبرامج الوقاية من الإصابات.",
      ],
    },
    {
      name: "الشفافية والرقابة",
      tagline: "الشفافية ليست خياراً، بل التزام. وما لا يُقاس ولا يُراقَب لا يمكن إصلاحه أو تطويره.",
      intro: "تعاني المنظومة الكروية من فجوة ثقة بين القيادة الرياضية والشارع الرياضي بسبب غياب الشفافية في الخطط، الميزانيات، وآليات اتخاذ القرار. الشفافية تُحوّل النقد العشوائي إلى نقاش مثمر، وتمنح القيادة دعماً جماهيرياً قائماً على الفهم.",
      causes: [
        "عدم نشر الخطط والاستراتيجيات عبر القنوات الرسمية",
        "غياب التقارير الدورية لمؤشرات الاداء  تُوضح مستوى التقدم في كل قسم",
        "ضعف آليات الرقابة على الأكاديميات والأندية",
        "غياب لجان متخصصة لمراجعة الأداء بشكل دوري",
        "اعتماد الجمهور على التسريبات والمصادر غير الرسمية",
      ],
      impact: [
        "انتشار الشائعات والمعلومات غير الدقيقة",
        "نقد عشوائي لا يصيب جوهر المشاكل",
        "ضعف ثقة الممارسين والجمهور في الجهة المسؤولة",
        "تجاوزات في الأكاديميات (سلامة، تأهيل المدربين، حماية اللاعبين)",
        "ضياع فرصة الحصول على دعم جماهيري واع للخطط",
      ],
      shortTerm: [
        "نشر الخطة الاستراتيجية الكاملة للاتحاد على القنوات الرسمية",
        "تقارير ربعية توضح مستوى التقدم في كل قسم من أقسام الاتحاد",
        "لجنة رقابة على الأكاديميات و الاندية و المراكز الاقليمية و زيارات تفتيشية دورية",
        "آلية شفافة لاستقبال الشكاوى ومتابعة الردود",
        "نشر معايير الترخيص والمؤهلات للأكاديميات والمدربين",
      ],
      longTerm: [
        "هيئة رقابة مستقلة لمتابعة جودة كرة القدم في المملكة",
        "تقارير سنوية شاملة عن واقع الكرة السعودية وتقدم الأهداف الاستراتيجية",
        "مؤشرات شفافية معتمدة دولياً تضع المملكة في مصاف الدول المتقدمة كروياً",
        "منصة بيانات مفتوحة تتيح للباحثين والإعلاميين الوصول للإحصائيات الرسمية",
        "ثقافة الرقابة الذاتية داخل الأندية والأكاديميات كجزء من المنظومة",
      ],
    },
    {
      name: "التعليم والبحث العلمي",
      tagline: "المعرفة هي وقود التطور. كرة القدم الحديثة علم قبل أن تكون فناً، ومن لا يستثمر في المعرفة يخسر السباق.",
      intro: "تواجه كرة القدم السعودية فجوة معرفية حادة: شح في الدورات التدريبية المحلية، ضعف في تحديث المناهج، ومحدودية المحتوى العلمي العربي المتعلق بكرة القدم. حلها يتطلب منظومة تعليمية متكاملة: دورات إلزامية، مناهج وطنية حديثة، نشر علمي عربي، وتعاون أكاديمي مع الجامعات.",
      causes: [
        "شح في الدورات التدريبية بناء على الاحتياج",
        "غياب تمكين القطاع الخاص في تنظيم دورات الرخص",
        "نقص الأبحاث العلمية الحديثة في المناهج المقدمة",
        "غياب مبادرات منظمة لإثراء المحتوى العلمي العربي",
        "ضعف التعاون بين الاتحاد والجامعات السعودية",
        "غياب وثيقة رسمية تحدد خصائص وأهداف كل فئة عمرية علمياً",
      ],
      impact: [
        "تأسيس الفئات السنية على معلومات علمية قديمة غير محدثة",
        "اعتماد المعرفة على الخبرات المتناقلة بين الأجيال",
        "اضطرار المدربين للسفر للخارج للحصول على الدورات",
        "فجوة معرفية تجعل المهتمين يعتمدون على مصادر أجنبية",
        "ضعف ثقافة الوسط الكروي في فهم الجوانب العلمية",
      ],
      shortTerm: [
        "إنشاء أكاديمية وطنية للتدريب تنظم دورات الرخص بشكل دوري ومنتظم وتراعي المنهج السعودي",
        "تمكين القطاع الخاص من تنظيم دورات (B, C, D) وفق معايير الاتحاد",
        "منصة محتوى علمي عربية تنشر الأبحاث والترجمات والمقاطع التعليمية",
        "برنامج ترجمة الكتب الأجنبية المتخصصة (+10 كتب سنوياً)",
        "مؤتمر علمي سنوي لكرة القدم السعودية يستضيف خبرات دولية",
        "ربط شهادات علوم الرياضة من الجامعات السعودية بالرخص التدريبية",
      ],
      longTerm: [
        "كلية متخصصة في علوم كرة القدم ضمن إحدى الجامعات السعودية",
        "برامج بحثية مشتركة مع جامعات محلية و دولية متقدمة",
        "مكتبة رقمية شاملة لكرة القدم بالعربية تخدم الوطن العربي بأكمله",
        "أبحاث علمية سعودية منشورة دولياً في تطوير المواهب وعلوم الرياضة",
        "نشر سعودي عالمي يضع المملكة كمرجع علمي إقليمي في كرة القدم",
      ],
    },
    {
      name: "القطاع الخاص",
      tagline: "القطاع الخاص هو المحرك الذي يضاعف الأثر. تمكينه يخفف العبء عن الجهات الرسمية ويفتح آفاق ابتكار لا حدود لها.",
      intro: "يُعدّ القطاع الخاص الرهان الاستراتيجي الذي يجب أن يتمسك به المسؤولون في القيادة الرياضية. في الدول المتقدمة كرويًا، يُمثّل القطاع الخاص نسبة كبيرة من المنظومة. في المملكة، لا يزال نمو القطاع الخاص في كرة القدم بطيئاً ومحدوداً في الملابس والأكاديميات. تمكينه يحتاج إلى تمويل، تنظيم، وتحفيز.",
      causes: [
        "غياب برامج تمويلية موجهة لرواد الأعمال في القطاع الرياضي",
        "عدم وجود قنوات تواصل واضحة للإجابة على استفسارات المستثمرين",
        "غياب جوائز ومحفّزات للمشاريع الناجحة",
        "تعقيد إجراءات الترخيص في بعض المجالات",
        "ضعف الوعي بفرص الاستثمار في كرة القدم خارج المجالات التقليدية",
        "عدم تقدير قيمة القطاع الخاص في النهوض بالرياضة",
      ],
      impact: [
        "اعتماد على شركات أجنبية في التقنيات والاستشارات والتحليل بدون منح فرصة عادلة للمنافسة بين الشركات المحلية و الاجنبية",
        "زيادة الأعباء المالية على الجهات الرسمية",
        "إبطاء وتيرة التطوير العام لكرة القدم",
        "ضياع فرص ابتكار يقدمها رواد الأعمال السعوديون",
        "تركّز الاستثمار في قطاعات محدودة فقط",
      ],
      shortTerm: [
        "إطلاق صندوق تمويلي لرواد الأعمال في القطاع الرياضي",
        "قنوات تواصل مباشرة للمستثمرين قبل دخولهم المجال",
        "جائزة سنوية لأفضل المشاريع الخاصة في القطاع الرياضي",
        "تبسيط إجراءات الترخيص للأكاديميات والشركات الناشئة",
        "دلائل استثمارية متخصصة توضح فرص الاستثمار في كرة القدم",
      ],
      longTerm: [
        "قطاع خاص رياضي قوي يُساهم بـ 30%+ من المنظومة الكروية بحلول 2034",
        "10+ شركات سعودية ناشئة في التقنية الرياضية تُصدّر منتجاتها للمنطقة",
        "منظومة وكلاء سعوديين معتمدين تخدم اللاعبين والأندية",
        "صناعة سعودية متكاملة للأدوات والمنشآت الرياضية",
        "شراكات استراتيجية بين القطاعين العام والخاص في مشاريع وطنية كبرى",
      ],
    },
  ],
  en: [
    {
      name: "Empowering Saudis",
      tagline: "National talent is the real capital. Every contract with foreign expertise must be an investment in Saudi expertise.",
      intro: "A capable, qualified Saudi workforce is the foundation of any sustainable football progress. Continued reliance on foreign expertise without knowledge transfer produces shallow progress that vanishes when those experts leave. Empowering Saudis means qualifying coaches, administrators, analysts, scouts, sports physicians, and technical directors to be the decision-makers and experts in the system.",
      causes: [
        "Weak qualification programs for Saudis in advanced sports specializations",
        "Direct reliance on foreign expertise with no knowledge-transfer requirements",
        "No internship mechanism inside major technical staffs",
        "Limited practical opportunities for Saudis in leadership roles",
        "Underrepresentation of Saudis in international courses and conferences",
        "Weak professional culture around coaching as a recognized career",
      ],
      impact: [
        "Surface-level progress that disappears when foreign experts leave",
        "Massive financial waste on contracts that leave no knowledge footprint",
        "No national football identity due to weak Saudi voice in the technical staff",
        "Limited Saudi capacity to lead developmental projects",
        "Long-term dependency on outside actors for the simplest decisions",
      ],
      shortTerm: [
        "Mandatory contract clause: every foreign expert must qualify Saudi counterparts",
        "Internship programs inside Pro League clubs for young Saudi coaches",
        "Reserve at least 60% of seats in advanced courses for Saudis",
        "National database of Saudi football professionals across all specializations",
        "Annual forum for Saudi professionals working at home and abroad",
        "Require methodologies be documented in Arabic alongside English",
      ],
      longTerm: [
        "70%+ Saudization of leadership posts across SAFF, clubs, and regional centers by 2034",
        "A national academy for sport leadership graduating technical and executive directors",
        "A generation of Pro-licensed Saudi coaches able to lead national teams and top clubs",
        "Specialized scholarship program for Saudis in scarce specializations",
        "A Saudi national-team head coach as a strategic 2034 goal",
      ],
    },
    {
      name: "Regional Federations as Branches of SAFF",
      tagline: "Decentralization is the key to real geographic coverage. Every region deserves to be a talent factory, not just a results consumer.",
      intro: "Regional federations are SAFF's arm in every region, the direct link between central leadership and the field. Their core remit covers four areas: running regional talent development centers, building competitive regional teams, organizing licensing courses, and managing regional age-group and amateur competitions, while increasing the participation rate in the game.",
      causes: [
        "Decision-making and development resources concentrated at the center",
        "Regions of the Kingdom not covered fairly",
        "No mechanism to attract talent from outside major cities",
        "Limited regional age-group competitions",
        "Closure of major national programs (Future Falcons, regional centers) with no clear replacement",
      ],
      impact: [
        "Thousands of talents lost in regions far from major cities",
        "A narrow feeder base for national teams reliant on a few clubs",
        "Wide gaps in training and competition quality between regions",
        "Weak local fan connection to the national project",
        "Real talents missed in regions outside major cities",
      ],
      shortTerm: [
        "Re-activate regional centers with an improved model and clear targets",
        "Establish 13 regional administrative branches with defined executive powers",
        "Regional age-group teams (U13, U15, U17, U19) competing in an annual national tournament",
        "Run licensing courses (D, C, B) in every region rather than only the center",
        "Regular regional youth and amateur competitions throughout the season",
        "Creation of the first digital reference profile for players",
      ],
      longTerm: [
        "Every region with a strong regional team feeding national squads with new names yearly",
        "20,000+ licensed Saudi coaches (D, C, B) distributed fairly across the country by 2034",
        "Gradual financial and administrative independence for regional federations under central oversight",
        "Officially recognized regional competitions inside the SAFF system",
        "An integrated sports facility in every region serving regional competition, training, and education",
      ],
    },
    {
      name: "Identity and the Saudi School of Play",
      tagline: "Every great football nation has its own school. Identity is not a slogan. It is a style that reflects the Kingdom's culture and its players.",
      intro: "Every leading football nation has its own school. Saudi football has cycled between several schools without settling on a clear identity. The Saudi player has distinct characteristics, courage, determination, strength and refusal to surrender, that must be translated into a unified style across every level.",
      causes: [
        "Technical school changes with every new national team coach",
        "No binding national technical reference for all coaching staffs",
        "Few Saudi coaches qualified to lead the national team within a stable identity",
        "Academies and clubs operating on individual judgments without unified direction",
        "Weak link between player identity and Saudi culture",
      ],
      impact: [
        "Players scattered with every coaching change",
        "Clubs struggle to develop players aligned with the national-team methodology",
        "Long-term performance volatility and weak continuity",
        "Weak technical belonging, where players doubt what they learn due to contradictions",
        "No distinctive Saudi football footprint regionally or continentally",
      ],
      shortTerm: [
        "Hold a national football identity conference with Saudi coaches and experts who worked in the Kingdom",
        "Publish an official Saudi football identity document covering principles, style, and player profile",
        "Require the foreign national-team coach to operate within the adopted identity",
        "Apply the unified identity to age-group and regional teams",
        "Issue an academy guide that adheres to the Saudi school's principles",
      ],
      longTerm: [
        "A national team known globally for a clear playing identity by 2034",
        "An integrated Saudi technical staff capable of leading the national team within the identity",
        "The Saudi school as a Gulf and Asian model to be emulated",
        "A distinctive technical signature making Saudi players sought after in global leagues",
        "Integrated national curricula reflecting the identity at every age",
      ],
    },
    {
      name: "Technology",
      tagline: "Technology is not a luxury. It is a necessity. Every modern football decision is built on data. Whoever lacks the data lacks the future.",
      intro: "Nations race to embed technology in football today. Saudi Arabia has advanced tech infrastructure in other sectors, and that must be reflected in football.",
      causes: [
        "Full reliance on foreign companies for sports technology",
        "No unified national data on players and coaches",
        "Underuse of AI-driven analysis",
        "Slow adoption of modern technology in emerging academies",
        "Weak culture of data-driven decision-making",
        "SAFF+ is good but not sufficient, and its use is limited to broadcasting matches",
      ],
      impact: [
        "Heavy financial waste on contracts with foreign companies",
        "Lost opportunity to build a national talent database",
        "Falling behind the global digital football wave",
        "Difficulty measuring player progress and the effectiveness of training programs",
      ],
      shortTerm: [
        "A unified national platform for player data from age groups to professional",
        "A mandatory academy management app linking academies to SAFF and unifying standards",
        "A national database of coaches (licenses, experience, evaluations)",
        "An official SAFF app serving players, coaches, and citizens",
      ],
      longTerm: [
        "A Saudi sports-tech industry with local products exported to the region",
        "An integrated AI ecosystem for data analysis and better decision-making",
        "Advanced performance analysis centers in every regional federation",
        "Strategic partnerships with Saudi tech companies (NEOM, Elm, STC, KAUST)",
        "A comprehensive national database linking talent from schools to professional",
      ],
    },
    {
      name: "Transparency and Oversight",
      tagline: "Transparency is not a choice. It is a commitment. What is not measured and monitored cannot be improved.",
      intro: "The football system suffers a trust gap between sport leadership and the public due to a lack of transparency in plans, budgets, and decision-making. Transparency turns random criticism into productive debate and earns informed public support.",
      causes: [
        "Plans and strategies not published through official channels",
        "No periodic reports on departmental progress",
        "Weak oversight of academies and clubs",
        "No specialized periodic performance review committees",
        "The public relies on leaks and unofficial sources",
      ],
      impact: [
        "Spread of rumors and inaccurate information",
        "Random criticism that misses the real problems",
        "Weak trust from practitioners and the public",
        "Violations in academies (safety, coach qualifications, child protection)",
        "Lost opportunity for informed public support",
      ],
      shortTerm: [
        "Publish the full SAFF strategy on official channels",
        "Quarterly reports on each department's progress",
        "An oversight committee for academies, clubs, and regional centers, with periodic inspection visits",
        "A transparent complaints mechanism with response tracking",
        "Publish licensing standards and qualifications for academies and coaches",
      ],
      longTerm: [
        "An independent oversight body monitoring football quality in the Kingdom",
        "Comprehensive annual reports on Saudi football reality and strategic progress",
        "Internationally recognized transparency indicators",
        "An open-data platform for researchers and journalists",
        "A culture of self-oversight inside clubs and academies",
      ],
    },
    {
      name: "Education and Scientific Research",
      tagline: "Knowledge is the fuel of progress. Modern football is a science before it is an art. Those who do not invest in knowledge lose the race.",
      intro: "Saudi football faces a sharp knowledge gap: scarce local courses, outdated curricula, and limited Arabic scientific content. The fix requires an integrated education system: mandatory courses, modern national curricula, Arabic publishing, and academic cooperation with universities.",
      causes: [
        "Limited local courses against high demand",
        "No private-sector empowerment to organize licensing courses",
        "Lack of recent scientific research in delivered curricula",
        "No organized initiatives to enrich Arabic scientific content",
        "Weak cooperation between SAFF and Saudi universities",
        "No official document defining each age group scientifically",
      ],
      impact: [
        "Age groups built on outdated information",
        "Knowledge passed only through generational experience",
        "Coaches forced to travel abroad for courses",
        "A knowledge gap pushing reliance on foreign sources",
        "Weak scientific literacy in the football community",
      ],
      shortTerm: [
        "Establish a national coaching academy that runs licensing courses regularly and reflects the Saudi curriculum",
        "Empower the private sector to run B, C, and D courses to SAFF standards",
        "An Arabic scientific content platform publishing research, translations, and tutorials",
        "A program translating 10+ specialized foreign books per year",
        "An annual scientific conference for Saudi football hosting global expertise",
        "Link sports-science degrees from Saudi universities to coaching licenses",
      ],
      longTerm: [
        "A specialized college of football science within a Saudi university",
        "Joint research programs with leading local and international universities",
        "A comprehensive Arabic digital library serving the entire Arab world",
        "Saudi research published internationally in talent development",
        "Saudi global publishing positioning the Kingdom as a regional reference",
      ],
    },
    {
      name: "The Private Sector",
      tagline: "The private sector is the multiplier. Empowering it lightens the load on official bodies and opens limitless innovation.",
      intro: "The private sector is the strategic bet sport leadership must hold onto. In leading football nations, the private sector represents a major share of the system. In the Kingdom, private-sector growth in football remains slow and limited to apparel and academies. Empowering it requires funding, regulation, and incentives.",
      causes: [
        "No targeted funding programs for entrepreneurs in the sport sector",
        "No clear communication channels for investor inquiries",
        "No prizes or incentives for successful projects",
        "Complicated licensing in some areas",
        "Low awareness of football investment opportunities beyond traditional segments",
        "Undervaluing the role of the private sector in advancing sport",
      ],
      impact: [
        "Reliance on foreign companies for tech, consulting, and analysis without giving fair competition opportunities to local companies alongside foreign ones",
        "Increased financial burden on official bodies",
        "Slower pace of overall football development",
        "Lost innovation from Saudi entrepreneurs",
        "Investment concentrated in only a few segments",
      ],
      shortTerm: [
        "Launch a funding fund for entrepreneurs in the sport sector",
        "Direct communication channels for investors before they enter the market",
        "An annual prize for the best private projects in the sport sector",
        "Simplify licensing for academies and startups",
        "Specialized investment guides explaining football opportunities",
      ],
      longTerm: [
        "A strong sport private sector contributing 30%+ of the football system by 2034",
        "10+ Saudi sport-tech startups exporting to the region",
        "A licensed Saudi agents ecosystem serving players and clubs",
        "An integrated Saudi industry for sport equipment and facilities",
        "Strategic public-private partnerships on major national projects",
      ],
    },
  ],
};

// =====================================================
// Measurement KPIs (Part 04)
// =====================================================

export type Kpi = {
  metric: string;
  short: string;
  mid: string;
  long: string;
  method: string;
};

export type KpiGroup = { pillar: string; items: Kpi[] };

export const kpiGroups: L<KpiGroup[]> = {
  ar: [
    {
      pillar: "تمكين السعوديين",
      items: [
        { metric: "نسبة المدربين السعوديين الحاصلين على رخصة Pro", short: "100", mid: "200", long: "500+", method: "تقرير سنوي من قسم الرخص في الاتحاد" },
        { metric: "نسبة السعوديين المستفيدين من الكفائة الاجنبية", short: "50", mid: "75", long: "100", method: "إحصاء سنوي للموارد البشرية" },
        { metric: "عدد السعوديين المُلتحقين ببرامج المعايشة سنوياً فنيا و اداريا", short: "50", mid: "150", long: "300", method: "سجلات قسم تطوير الكوادر" },
        { metric: "عدد المبتعثين السعوديين في تخصصات نادرة", short: "20", mid: "60", long: "120", method: "سجلات الابتعاث الرياضي" },
        { metric: "لاعبون سعوديون محترفون خارجياً", short: "2", mid: "8", long: "20+", method: "تقرير سنوي من إدارة المنتخبات و الاندية و والوكلاء" },
      ],
    },
    {
      pillar: "الاتحادات الإقليمية",
      items: [
        { metric: "عدد الاتحادات الإقليمية المُفعّلة", short: "30", mid: "100", long: "300+", method: "تتبع التأسيس والتشغيل" },
        { metric: "عدد المنتخبات الإقليمية للفئات السنية", short: "15", mid: "30", long: "50+", method: "4 منتخبات لكل منطقة" },
        { metric: "مدربون مرخّصون خارج المدن الكبرى", short: "500", mid: "1500", long: "+5000", method: "تقارير لجان الرقابة" },
        { metric: "البطولات الإقليمية المنتظمة سنوياً", short: "10", mid: "30", long: "60+", method: "سجلات اتحاد كل منطقة" },
        { metric: "لاعبو الفئات السنية المسجلون", short: "200K", mid: "800K", long: "2M+", method: "قاعدة البيانات الوطنية للمواهب" },
        
      ],
    },
    {
      pillar: "الهوية والمدرسة السعودية",
      items: [
        { metric: "إصدار وثيقة الهوية الكروية الرسمية", short: "تم النشر", mid: "تطبيق كامل", long: "مرجع عالمي", method: "التحقق من النشر الرسمي" },
        { metric: "نسبة المنتخبات السنية الملتزمة بالهوية", short: "40%", mid: "75%", long: "100%", method: "تقارير لجان الرقابة" },
        { metric: "نسبة الأكاديميات الملتزمة بالمدرسة", short: "30%", mid: "70%", long: "95%", method: "تقارير لجان الرقابة" },
      ],
    },
    {
      pillar: "التقنية",
      items: [
        { metric: "إطلاق المنصة الوطنية لبيانات اللاعبين", short: "قيد التطوير", mid: "تشغيل كامل", long: "مرجع عالمي", method: "التحقق من الإطلاق" },
        { metric: "نسبة الأكاديميات المسجلة على منصة الاتحاد الموحدة", short: "40%", mid: "85%", long: "100%", method: "تقرير منصة الإدارة" },
        { metric: "شركات التقنية الرياضية السعودية النشطة", short: "30", mid: "100", long: "300+", method: "سجلات وزارة التجارة والاتحاد" },
        { metric: "أندية تستخدم أنظمة تحليل أداء متقدمة", short: "20", mid: "40", long: "كل الأندية", method: "تقارير تقنية سنوية" },
        { metric: "تفعيل وحدة البيانات الحيوية وعلوم الأداء", short: "إطار تنظيمي", mid: "تشغيل تجريبي", long: "مرجع وطني", method: "تقارير الاتحاد / المنصة الوطنية / اعتماد البروتوكولات" },
      ],
    },
    {
      pillar: "الشفافية والرقابة",
      items: [
        { metric: "التقارير الربعية المنشورة للجمهور", short: "كل ربع", mid: "كل ربع", long: "كل ربع", method: "التحقق من النشر الرسمي" },
        { metric: "الزيارات الرقابية على البرامج والاندية", short: "30", mid: "300", long: "600+", method: "سجلات لجنة الرقابة" },
        { metric: "نسبة الردود على الشكاوى خلال 14 يوم", short: "70%", mid: "90%", long: "100%", method: "إحصاء آلية الشكاوى" },
      ],
    },
    {
      pillar: "التعليم والبحث العلمي",
      items: [
        { metric: "الدورات التدريبية التخصصية المُقدّمة سنوياً من الاتحاد السعودي لكرة القدم", short: "100", mid: "300", long: "500+", method: "تقرير قسم التطوير" },
        { metric: "المدربون المرخّصون الجدد سنوياً", short: "500", mid: "1000", long: "3000+", method: "قاعدة بيانات الرخص" },
        { metric: "الكتب المتخصصة المنشورة بالعربية", short: "10", mid: "50", long: "150+", method: "إحصاء النشر السنوي" },
        { metric: "الأبحاث العلمية المنشورة دولياً", short: "30", mid: "100", long: "300+", method: "قواعد بيانات الأبحاث" },
      ],
    },
    {
      pillar: "القطاع الخاص",
      items: [
        { metric: "حجم الاستثمار الخاص (ر.س)", short: "500M", mid: "2B", long: "5B+", method: "تقارير الاستثمار" },
        { metric: "رواد أعمال مستفيدون من برامج التمويل سنويا", short: "30", mid: "120", long: "300+", method: "سجلات صندوق التمويل" },
        { metric: "شركات سعودية ناشئة في قطاع كرة القدم", short: "20", mid: "60", long: "150+", method: "سجلات وزارة التجارة" },
        { metric: "نسبة مساهمة القطاع الخاص في المنظومة", short: "15%", mid: "30%", long: "50%+", method: "دراسات سنوية للمنظومة" },
      ],
    },
  ],
  en: [
    {
      pillar: "Empowering Saudis",
      items: [
        { metric: "Saudi Pro-licensed coaches", short: "30", mid: "100", long: "300+", method: "Annual SAFF licensing report" },
        { metric: "Saudization in leadership posts", short: "40%", mid: "55%", long: "70%+", method: "Annual HR census" },
        { metric: "Saudis in shadowing programs / year", short: "50", mid: "150", long: "300", method: "Workforce-development records" },
        { metric: "Scholarship recipients in scarce specializations", short: "20", mid: "60", long: "120", method: "Sport scholarship records" },
        { metric: "Saudi U-25 players in foreign pro leagues", short: "2", mid: "8", long: "20+", method: "Annual national-team report" },
      ],
    },
    {
      pillar: "Regional Federations",
      items: [
        { metric: "Active regional federations", short: "30", mid: "100", long: "300+", method: "Establishment tracking" },
        { metric: "Regional age-group teams", short: "15", mid: "30", long: "50+", method: "4 teams per region" },
        { metric: "Licensed coaches outside major cities", short: "500", mid: "1500", long: "+5000", method: "Oversight committee reports" },
        { metric: "Regular regional competitions / year", short: "10", mid: "30", long: "60+", method: "Regional federation records" },
        { metric: "Registered age-group players", short: "200K", mid: "800K", long: "2M+", method: "National talent database" },
        
      ],
    },
    {
      pillar: "Saudi School of Play",
      items: [
        { metric: "Official identity document", short: "Published", mid: "Full adoption", long: "Global reference", method: "Verification of release" },
        { metric: "Age-group teams aligned with identity", short: "40%", mid: "75%", long: "100%", method: "Oversight committee reports" },
        { metric: "Academies aligned with the school", short: "30%", mid: "70%", long: "95%", method: "Oversight committee reports" },
      ],
    },
    {
      pillar: "Technology",
      items: [
        { metric: "National player data platform", short: "In dev", mid: "Full ops", long: "Global ref.", method: "Launch verification" },
        { metric: "Academies on unified mgmt app", short: "40%", mid: "85%", long: "100%", method: "Platform report" },
        { metric: "Active Saudi sport-tech firms", short: "30", mid: "100", long: "300+", method: "Ministry & SAFF records" },
        { metric: "Clubs using advanced analytics", short: "20", mid: "40", long: "All clubs", method: "Annual technical reports" },
      ],
    },
    {
      pillar: "Transparency & Oversight",
      items: [
        { metric: "Public quarterly reports", short: "4/yr", mid: "4/yr", long: "4/yr", method: "Official channel verification" },
        { metric: "Oversight visits on programs and clubs", short: "30", mid: "300", long: "600+", method: "Oversight committee records" },
        { metric: "Complaint responses within 14 days", short: "70%", mid: "90%", long: "100%", method: "Complaints system stats" },
      ],
    },
    {
      pillar: "Education & Research",
      items: [
        { metric: "Coaching courses offered / year", short: "30", mid: "100", long: "500+", method: "SAFF development dept." },
        { metric: "Newly licensed coaches / year", short: "500", mid: "1000", long: "3000+", method: "License database" },
        { metric: "Specialized Arabic books published", short: "10", mid: "50", long: "150+", method: "Annual publication census" },
        { metric: "Internationally published research", short: "30", mid: "100", long: "300+", method: "Academic databases" },
      ],
    },
    {
      pillar: "Private Sector",
      items: [
        { metric: "Private investment (SAR)", short: "500M", mid: "2B", long: "5B+", method: "Investment reports" },
        { metric: "Entrepreneurs funded", short: "30", mid: "120", long: "300+", method: "Sport fund records" },
        { metric: "Saudi sport startups", short: "20", mid: "60", long: "150+", method: "Ministry of Commerce records" },
        { metric: "Private-sector share of system", short: "15%", mid: "30%", long: "50%+", method: "Annual ecosystem studies" },
      ],
    },
  ],
};

// =====================================================
// Urgent cases (Part 05)
// =====================================================

export type UrgentCase = {
  title: string;
  what: string;
  causes: string[];
  impact: string[];
  solutions: string[];
  recommendation?: string;
  logoKey?: string;
  logoAlt?: string;
};

export const urgentCases: L<UrgentCase[]> = {
  ar: [
    {
      title: "نادي احد: قرار ايقاف التعاقدات قضى على جميع فرق النادي",
      logoKey: "ohod",
      logoAlt: "نادي أحد",
      what: "يواجه نادي أُحد أزمة حظر تسجيل تمنعه من قيد أي لاعب جديد. خطورة القرار أنه لا يقتصر على الفريق الأول، بل يشمل جميع فئات النادي. هذا يعني أن النادي لا يستطيع التعاقد مع لاعبين أو ضم مواهب للفئات السنية. واستمرار المنع يهدد حاضر الفريق ومستقبل النادي في اكتشاف وتطوير اللاعبين.",
      causes: [
        "وجود التزامات مالية أو تعاقدية غير مسددة",
        "وجود قضايا أو قرارات صادرة ضد النادي لم تُنفّذ بعد",
        "ضعف المتابعة القانونية والمالية للملفات المفتوحة",
        "غياب خطة عاجلة لترتيب الأولويات وتسوية القضايا",
        "تراكم المشكلة حتى أصبحت تؤثر على كامل منظومة النادي",
        "غياب الرقابة على إدارة النادي",
      ],
      impact: [
        "هبوط نادي احد الى الدرجة الثالثة",
        "توقف قدرة النادي على تدعيم الفريق الأول",
        "تعطّل استقطاب المواهب في الفئات السنية",
        "خسارة لاعبين صغار قد ينتقلون لأندية منافسة",
        "ضعف خيارات المدربين في جميع الفئات",
        "تراجع جودة المنافسة الداخلية بين اللاعبين",
        "ضرر مباشر على مشروع النادي الرياضي ومستقبله",
        "تدهور سمعة النادي أمام اللاعبين والمدربين والوكلاء",
      ],
      solutions: [
        "تشكيل فريق عاجل من الإدارة، المالية، والقانونيين لحصر جميع القضايا",
        "تحديد المبالغ المطلوبة والقرارات التي تمنع رفع الحظر",
        "ترتيب القضايا حسب الأولوية: ما يرفع المنع أولًا يُعالج أولًا",
        "سداد المستحقات الممكنة فورًا والتفاوض على جدولة البقية",
        "إرسال إثباتات السداد أو التسوية مباشرة للجهات المختصة",
        "متابعة يومية للملف حتى يتم رفع المنع رسميًا",
        "منع أي التزام مالي جديد دون اعتماد ميزانية واضحة",
        "وضع نظام رقابة مالية وقانونية يمنع تكرار الأزمة",
        "محاسبة المتسببين في القضية",
      ],
      recommendation:
        "كل يوم تأخير لا يعني فقط بقاء الفريق الأول بلا تدعيم، بل يعني أيضًا ضياع مواهب من الفئات السنية وانتقالها لأندية أخرى. حل الملف يجب أن يكون أولوية عاجلة، لأن الضرر الآن لا يمس موسمًا واحدًا فقط، بل يمس مستقبل النادي كاملًا.",
    },
    {
      title: "بدل التدريب : لاعبون يحرمون من الاحتراف بسبب رسوم بدل التدريب",
      what: "يواجه اللاعبون المتدرجون في النادي مشكلة عند انتقالهم بعد بلوغ مرحلة متقدمة من العمر أو الاقتراب من الاحتراف. بعض الأندية ترغب في التعاقد مع اللاعب، لكنها تتراجع بسبب مبالغ بدل التدريب المطلوبة. النادي الأصلي يريد بيع اللاعب أو الاستفادة منه ماليًا، لكن النادي الراغب في اللاعب لا يريد تحمّل تكلفة بدل التدريب. النتيجة أن اللاعب يبقى عالقًا: لا النادي يستفيد منه فعليًا، ولا اللاعب يحصل على فرصة انتقال مناسبة.",
      causes: [
        "ارتفاع قيمة بدل التدريب مقارنة بقيمة اللاعب السوقية أو عمره أو مستوى المنافسة",
        "غياب مرونة من النادي الأصلي في التفاوض أو تخفيض المطالبة",
        
        "خوف الأندية من الدخول في التزامات مالية إضافية بعد توقيع اللاعب",
        "ضعف التواصل المبكر بين النادي الأصلي، اللاعب، والنادي المهتم",
        "التعامل مع اللاعب كمصدر تعويض مالي فقط بدل اعتباره مشروع انتقال وتطوير",
        "عدم وجود سياسة داخلية واضحة للنادي في حالات بيع أو انتقال لاعبي الفئات السنية",
      ],
      impact: [
        "ضياع فرص انتقال حقيقية على اللاعبين",
        "تراجع رغبة الأندية الأخرى في التفاوض مع لاعبي النادي",
        "بقاء اللاعب دون فرصة لعب أو تطور مناسبة",
        "انخفاض الدافع لدى اللاعبين الصغار داخل النادي",
        "تضرر سمعة النادي أمام اللاعبين وأولياء الأمور والأندية الأخرى",
        "خسارة النادي فرصة الحصول على عائد مالي معقول من انتقال اللاعب",
        "تحوّل بدل التدريب من أداة لحماية النادي المُكوّن إلى عائق يمنع تطور اللاعب",
        "احتمال فقدان اللاعب لقيمته بمرور الوقت بسبب قلة المشاركة أو توقف الانتقال",
      ],
      solutions: [
        "وضع سياسة واضحة ومرنة لبدل التدريب حسب عمر اللاعب، مستواه، واهتمام الأندية به",
        "تخفيض المبلغ أو تقسيطه إذا كان ذلك يساعد على إتمام انتقال اللاعب",
        "قبول نسبة من البيع المستقبلي بدل الإصرار على مبلغ كبير مقدمًا",
        "الاتفاق مع النادي الجديد على حوافز مرتبطة بالمشاركة أو عدد المباريات أو الصعود للفريق الأول",
        "إنشاء لجنة انتقالات داخل النادي لدراسة كل حالة لاعب بشكل منفصل",
        "إشراك اللاعب وولي أمره أو وكيله في النقاش مبكرًا لتجنب تعطيل مستقبله",
        "عدم التمسك بمبلغ غير واقعي إذا كان سيؤدي إلى فشل الصفقة بالكامل",
        "تحويل بدل التدريب من عائق إلى أداة تفاوض ذكية تحفظ حق النادي ولا توقف مسار اللاعب",
        "بناء سمعة إيجابية للنادي بأنه يساعد لاعبيه على الانتقال، مع حفظ حقوقه المالية",
        "اعتماد مبدأ: مبلغ أقل مضمون الآن أفضل من خسارة اللاعب والصفقة بالكامل لاحقًا",
      ],
      recommendation:
        "المشكلة ليست في وجود بدل التدريب نفسه، فهو حق مشروع للنادي الذي ساهم في تكوين اللاعب. المشكلة عندما يتحول هذا الحق إلى عائق يمنع انتقال اللاعب ويجعل الأندية تصرف النظر عنه. الحل ليس التنازل الكامل، بل المرونة: تخفيض، تقسيط، حوافز، أو نسبة بيع مستقبلية. بهذه الطريقة يحفظ النادي حقه، ويحافظ على سمعة أكاديميته، ولا يقتل فرصة اللاعب في التطور.\n\nأساس تنظيمي مختصر: FIFA يقر مبدأ تعويض التدريب للأندية التي ساهمت في تدريب اللاعب وتطويره بين عمر 12 و23 سنة، ويكون مستحقًا غالبًا عند توقيع أول عقد احترافي أو في انتقالات معينة قبل نهاية موسم عيد الميلاد الـ23 للاعب. كما تذكر لوائح الاتحاد السعودي مبدأ التعويض عن التدريب ضمن تنظيم أوضاع اللاعبين وانتقالاتهم.",
    },
  ],
  en: [
    {
      title: "Ohod Club: The transfer ban decision has crippled all of the club's teams",
      logoKey: "ohod",
      logoAlt: "Ohod Club",
      what: "Ohod Club is facing a registration ban that prevents it from registering any new player. The seriousness of the decision is that it is not limited to the first team but covers all categories of the club. This means the club cannot sign players or recruit talent for its youth categories. The continuation of the ban threatens the present of the team and the future of the club in discovering and developing players.",
      causes: [
        "Outstanding unpaid financial or contractual obligations",
        "Existing cases or rulings issued against the club that have not yet been executed",
        "Weak legal and financial follow-up on open files",
        "Absence of an urgent plan to prioritize and settle cases",
        "The problem has accumulated until it now affects the entire club system",
        "Lack of oversight over the club's management",
      ],
      impact: [
        "The club's ability to reinforce the first team has stopped",
        "Recruiting talent in youth categories is disrupted",
        "Loss of young players who may move to competing clubs",
        "Limited options for coaches across all categories",
        "Decline in the quality of internal competition between players",
        "Direct damage to the club's sports project and its future",
        "Deteriorating reputation of the club before players, coaches, and agents",
      ],
      solutions: [
        "Form an urgent task force from administration, finance, and legal teams to compile all cases",
        "Identify the required amounts and decisions blocking the lifting of the ban",
        "Prioritize cases: whatever lifts the ban first is handled first",
        "Pay possible dues immediately and negotiate scheduling for the rest",
        "Send proofs of payment or settlement directly to the relevant authorities",
        "Daily follow-up of the file until the ban is officially lifted",
        "Prevent any new financial commitment without an approved clear budget",
        "Establish a financial and legal oversight system to prevent recurrence",
        "Hold those responsible for the case accountable",
      ],
      recommendation:
        "Every day of delay does not only mean the first team remains without reinforcement, but also that talents from the youth categories are lost and move to other clubs. Resolving this file must be an urgent priority, because the damage now does not affect just one season — it affects the future of the entire club.",
    },
    {
      title: "Training Compensation: Players denied professionalism due to training compensation fees",
      what: "Players progressing through the club face a problem when transferring after reaching an advanced age or approaching professional level. Some clubs want to sign the player but back away because of the training compensation amounts requested. The original club wants to sell the player or benefit financially, but the interested club does not want to bear the training compensation cost. The result is the player remains stuck: neither the club truly benefits from him, nor does the player get a suitable transfer opportunity.",
      causes: [
        "High training compensation value compared to the player's market value, age, or level of competition",
        "Lack of flexibility from the original club in negotiating or reducing the demand",
        
        "Clubs fearing additional financial commitments after signing the player",
        "Weak early communication between the original club, the player, and the interested club",
        "Treating the player only as a source of financial compensation rather than as a transfer and development project",
        "No clear internal club policy for selling or transferring youth-category players",
      ],
      impact: [
        "Real transfer opportunities lost for players",
        "Other clubs less willing to negotiate with the club's players",
        "The player remains without a proper playing or development opportunity",
        "Lower motivation among young players inside the club",
        "Damage to the club's reputation among players, parents, and other clubs",
        "The club loses the chance for a reasonable financial return from the player's transfer",
        "Training compensation turns from a tool protecting the developing club into an obstacle preventing player progression",
        "The player may lose value over time due to lack of participation or stalled transfer",
      ],
      solutions: [
        "Establish a clear, flexible training compensation policy based on the player's age, level, and clubs' interest",
        "Reduce the amount or split it into installments if that helps complete the player's transfer",
        "Accept a percentage of a future sale instead of insisting on a large upfront amount",
        "Agree with the new club on incentives tied to participation, number of matches, or promotion to the first team",
        "Create a transfers committee within the club to study each player's case individually",
        "Involve the player and his guardian or agent early in discussions to avoid blocking his future",
        "Do not insist on an unrealistic amount if it would cause the entire deal to fail",
        "Turn training compensation from an obstacle into a smart negotiation tool that protects the club's right and does not stop the player's path",
        "Build a positive reputation for the club as one that helps its players move while preserving its financial rights",
        "Adopt the principle: a smaller guaranteed amount now is better than losing the player and the entire deal later",
      ],
      recommendation:
        "The problem is not the existence of training compensation itself — it is a legitimate right of the club that contributed to forming the player. The problem is when this right turns into an obstacle that prevents the player's transfer and makes clubs walk away. The solution is not full waiver, but flexibility: reduction, installments, incentives, or a future sale percentage. This way the club preserves its right, maintains its academy's reputation, and does not kill the player's chance to develop.\n\nBrief regulatory basis: FIFA recognizes the principle of training compensation for clubs that contributed to a player's training and development between the ages of 12 and 23, generally due upon signing the first professional contract or in certain transfers before the end of the season of the player's 23rd birthday. The Saudi Football Federation regulations also recognize the principle of training compensation within the rules organizing player status and transfers.",
    },
  ],
};

// =====================================================
// Team (Part 06)
// =====================================================

export const teamSection: L<{ headline: string; body: string }> = {
  ar: {
    headline: "خلف هذا العمل",
    body: "تم إعداد هذه الوثيقة بجهد فريق متخصص يجمع بين الخبرة الأكاديمية، التجربة الميدانية، والمعرفة بالواقع الكروي السعودي والعالمي. كل عضو في الفريق ساهم بمجال تخصصه لإثراء المحتوى وضمان دقته.",
  },
  en: {
    headline: "Behind this vision",
    body: "This document was prepared by a dedicated team combining academic expertise, field experience, and deep knowledge of Saudi and global football. Each member contributed within their specialty to enrich the content and ensure its accuracy.",
  },
};

export type TeamMember = {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  image?: string;
};

const enBio = "Write 3-4 sentences about this team member here. Describe their background, experience, and what they bring to the project. This text can be edited in src/content/proposal.ts.";
const arBio = "اكتب من ٣ إلى ٤ جمل عن عضو الفريق هنا. صف خلفيته وخبرته وما يضيفه للمشروع. يمكن تعديل هذا النص من ملف src/content/proposal.ts.";


export const teamMembers: L<TeamMember[]> = {
  en: [
    {
      name: "Abdullah Aldossary",
      role: "\n",
      specialty: "",
      bio: "BSc in Computer Science, UW-Madison | MSc in Entrepreneurship, Innovation & Technology, KAUST | Specialist in technology solutions, research, and innovation",
      email: "abdullahbandar@yahoo.com",
      phone: "+966 56 938 5055",
      linkedin: "https://www.linkedin.com/in/abdullah44aldossary",
      image: abdullahPhoto,
    },
    {
      name: "Abdulaziz Bajkhaif",
      role: "\n",
      specialty: "",
      bio: "BSc in Movement & Sport Science, University of Marburg, Germany | Specialist and researcher in talent identification, development, and youth football pathways",
      email: "abdulaziz.bajkhaif@hotmail.com",
      phone: "+966 53 216 7956",
      linkedin: "https://www.linkedin.com/in/abdulaziz-bajkhaif",
      image: abdulazizPhoto,
    },
    { name: "Mishbab Ziyad", role: "\n", specialty: "", bio: enBio, email: "name@example.com", phone: "+966 5X XXX XXXX", linkedin: "https://linkedin.com/in/username" },
    { name: "Naif Bin Mahri", role: "\n", specialty: "", bio: "BSc MIS from the American University in London | Certified Financial Analyst | Founder of the Spanish School for Football Player Development", email: "n.binmahri@purefitness.sa", phone: "", linkedin: "", image: naifPhoto },
    { name: "Tawfiq Al-Rabat", role: "\n", specialty: "", bio: enBio, email: "name@example.com", phone: "+966 5X XXX XXXX", linkedin: "https://linkedin.com/in/username" },
    { name: "Issam Al-Hisouni", role: "\n", specialty: "", bio: enBio, email: "name@example.com", phone: "+966 5X XXX XXXX", linkedin: "https://linkedin.com/in/username" },
  ],
  ar: [
    {
      name: "عبدالله الدوسري",
      role: "\n",
      specialty: "",
      bio: "بكالوريوس علوم حاسب من جامعة UW-Madison | ماجستير ريادة اعمال و ابتكار و تكنولوجيا KAUST | متخصص في الحلول التقنية و الابحاث و الابتكار ",
      email: "abdullahbandar@yahoo.com",
      phone: "+966 56 938 5055",
      linkedin: "https://www.linkedin.com/in/abdullah44aldossary",
      image: abdullahPhoto,
    },
    {
      name: "عبدالعزيز باجخيف",
      role: "\n",
      specialty: "",
      bio: "بكالوريوس علوم الحركة والرياضة من جامعة ماربورغ بألمانيا | متخصص وباحث في مجال اكتشاف وتطوير المواهب وقطاع الفئات السنية",
      email: "abdulaziz.bajkhaif@hotmail.com",
      phone: "+966 53 216 7956",
      linkedin: "https://www.linkedin.com/in/abdulaziz-bajkhaif",
      image: abdulazizPhoto,
    },
    { name: "مشبب زياد", role: "\n", specialty: "", bio: arBio, email: "name@example.com", phone: "+966 5X XXX XXXX", linkedin: "https://linkedin.com/in/username" },
    { name: "نايف بن مهري", role: "\n", specialty: "", bio: "بكالوريوس MIS من الجامعة الأمريكية بلندن | محلل مالي معتمد | مؤسس المدرسة الإسبانية لتطوير لاعب كرة القدم", email: "n.binmahri@purefitness.sa", phone: "", linkedin: "", image: naifPhoto },
    { name: "توفيق الرباط", role: "\n", specialty: "", bio: arBio, email: "name@example.com", phone: "+966 5X XXX XXXX", linkedin: "https://linkedin.com/in/username" },
    { name: "عصام الحيسوني", role: "\n", specialty: "", bio: arBio, email: "name@example.com", phone: "+966 5X XXX XXXX", linkedin: "https://linkedin.com/in/username" },
  ],
};

// =====================================================
// UI strings for new sections
// =====================================================

export const uiExtra: Record<string, L<string>> = {
  pillarsDeepEyebrow: { en: "Part 03 · Pillars in detail", ar: "الجزء 03 · ركائز النجاح بالتفصيل" },
  pillarsDeepHeadline: {
    en: "Seven strategic pillars. Each addresses several diagnoses at once.",
    ar: "سبعة ركائز اساسية. كل ركيزة تعالج عدة مشاكل في وقت واحد.",
  },
  pillarsDeepIntro: {
    en: "These pillars were derived by linking several diagnostic problems and identifying the strategic levers with the highest impact at the lowest cost. Each pillar carries short-term (1–2 years) and long-term (3+ years) actions, and intersects with the others to form a single integrated system.",
    ar: "تم استخلاص هذه الأعمدة من ربط عدة مشاكل تشخيصية ببعضها، وتحديد الروافع الاستراتيجية التي تُحدث أكبر أثر بأقل جهد. كل عمود يحمل حلولاً قصيرة المدى (1–2 سنة) وطويلة المدى (3+ سنوات)، ويتقاطع مع الأعمدة الأخرى لخلق منظومة واحدة متكاملة.",
  },
  introduction: { en: "Introduction", ar: "المقدمة والتعريف" },
  causesLabel: { en: "Causes", ar: "الأسباب" },
  impactLabel: { en: "Impact", ar: "الأثر" },
  shortTermLabel: { en: "Short-term · 1–2 years", ar: "قصيرة المدى · 1–2 سنة" },
  longTermLabel: { en: "Long-term · 3+ years", ar: "طويلة المدى · 3+ سنوات" },
  solutionsHeader: { en: "Proposed Solutions", ar: "حلول مقترحة" },
  pillarKpisLabel: { en: "Measurement KPIs", ar: "مؤشرات القياس" },
  kpiHorizonNote: {
    en: "Note: Short = 1 year, Mid = 3 years, Long = to 2034 and beyond.",
    ar: "ملاحظة: قصيرة المدى سنة، متوسطة المدى 3 سنوات، طويلة المدى حتى 2034 وما بعدها.",
  },

  measurementEyebrow: { en: "Part 04 · Measurement", ar: "الجزء 04 · قياس النجاح" },
  measurementHeadline: {
    en: "Clear KPIs. Three time horizons. Public accountability.",
    ar: "مؤشرات واضحة. ثلاث مراحل زمنية. مساءلةٌ علنية.",
  },
  measurementIntro: {
    en: "What is not measured cannot be improved. Each KPI is tied to a strategic pillar, with a defined measurement method and a body responsible for collecting the data, across short (1 year), mid (3 years), and long (to 2034) horizons.",
    ar: "ما لا يُقاس لا يمكن تطويره. كل مؤشر مرتبط بعمود استراتيجي، وله طريقة قياس محددة وجهة مسؤولة عن جمع البيانات، على ثلاث مراحل: قصيرة (سنة)، متوسطة (3 سنوات)، طويلة (حتى 2034).",
  },
  shortHeader: { en: "Short", ar: "قصير" },
  midHeader: { en: "Mid", ar: "متوسط" },
  longHeader: { en: "Long / 2034", ar: "طويل / 2034" },
  methodLabel: { en: "Measurement method", ar: "طريقة القياس" },

  urgentEyebrow: { en: "Part 05 · Urgent cases", ar: "الجزء 05 · حالات مستعجلة" },
  urgentHeadline: {
    en: "Issues that cannot wait for the long-term plan.",
    ar: "قضايا لا تحتمل التأجيل لخطط طويلة المدى.",
  },
  urgentIntro: {
    en: "These cases concern player safety, non-repeatable opportunities, programs that were running and abruptly stopped, or loopholes exploited at the expense of real talent. Delaying them means losing a generation, wasting active investment, or exposing children to harm.",
    ar: "هذه الحالات تتعلق بسلامة اللاعبين، أو فرص لا تتكرر، أو مشاريع كانت تسير وتم إيقافها فجأة، أو ثغرات يستفيد منها أطراف غير مؤهلة على حساب الموهوبين الحقيقيين. تأخير معالجتها يعني فقدان جيل، أو هدر استثمارات قائمة، أو تعريض الأطفال لمخاطر.",
  },
  urgentTag: { en: "Urgent", ar: "حالة مستعجلة" },
  whatLabel: { en: "What's happening", ar: "الشرح" },
  solutionsLabel: { en: "Solutions", ar: "الحلول" },
  recommendationLabel: { en: "Recommendation", ar: "توصية" },

  teamEyebrow: { en: "Part 06 · Team", ar: "الجزء 06 · فريق العمل" },
  teamHeadline: {
    en: "The people behind this proposal.",
    ar: "الأشخاص الذين ساهموا في إعداد هذه الوثيقة",
  },
};

export function te(key: keyof typeof uiExtra, lang: Lang) {
  return uiExtra[key][lang];
}
