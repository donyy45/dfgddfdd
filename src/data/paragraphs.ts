export interface VocabItem {
  word: string;
  arabicMeaning: string;
  example: string;
}

export interface NoteItem {
  term: string;
  type: 'idiom' | 'phrasal_verb' | 'slang' | 'informal' | 'cultural' | 'pronunciation';
  explanation: string;
}

export interface ScriptParagraph {
  id: number;
  paragraphNumber: number;
  english: string;
  arabicTranslation: string;
  vocabulary: VocabItem[];
  notes: NoteItem[];
  wordCount: number;
}

export const PARAGRAPHS_DATA: ScriptParagraph[] = [
  {
    "id": 1,
    "paragraphNumber": 1,
    "english": "Young BRUCE: Rachel, let me see.\n-Can I see? -\nYoung Rachel: Finders keepers. And I found it.\nBruce: In my garden.\nBruce: Finders keepers.\nRachel: Bruce?\n[WOOD SNAPPING]\n[THUD]\nBruce?\nMom! Mr. AIfred!\n[WHIMPERS]\n[SCREAMING]\n[MEN SCREAMING lN DlSTANCE]\nDid you have dream?\nBruce: Nightmare.\nWorse than this place?\n[MAN SPEAKING FOREIGN LANGUAGE OVER P.A.]\nMAN [WHISPERS]: They are going to fight you.\nBruce: Again?\n-Until they k*ll you.\nBruce: Can they k*ll me before breakfast?\nYou are in hell, little man.\nAnd I am the devil.\nBruce: You're not the devil.\nYou're practice.\n[GRUNTING]\n[g*nshots]\nGUARD: Solitary.\nBruce: -Why? -\nGuard: For protection.\nBruce: I don't need protection.\nGuard: Protection for them.\n[MEN GROANING]\nGet in.\nDUCARD: Are you so desperate to fight criminaIs...\n...that you lock yourseIf in to take them on one at a time?",
    "arabicTranslation": "بروس الصغير: راشيل، دعيني أرى.\n- هل يمكنني أن أرى؟ -\nراشيل الصغيرة: من وجد الشيء فهو له، وأنا التي وجدته.\nبروس: في حديقتي.\nبروس: من وجد الشيء فهو له.\nراشيل: بروس؟\n[صوت تكسر الخشب]\n[صوت ارتطام قوي]\nبروس؟\nأمي! سيد ألفريد!\n[ينوح من الألم]\n[صراخ]\n[رجال يصرخون من بعيد]\nهل رأيت حلمًا؟\nبروس: بل كابوسًا.\nأسوأ من هذا المكان؟\n[رجل يتحدث بلغة أجنبية عبر مكبر الصوت]\nرجل [هامسًا]: سوف يقاتلونك.\nبروس: مجددًا؟\n- حتى يقتلوك.\nبروس: هل يمكنهم قتلي قبل الإفطار؟\nأنت في الجحيم أيها الصغير، وأنا الشيطان.\nبروس: أنت لست الشيطان... أنت مجرد تدريب لي.\n[أصوات تأوه وعراك]\n[طلقات نارية]\nالحارس: إلى الحبس الانفرادي.\nبروس: - لماذا؟ -\nالحارس: لحمايتك.\nبروس: أنا لا أحتاج إلى حماية.\nالحارس: الحماية لهم هم.\n[تأوهات الرجال]\nادخل إلى الداخل.\nدوكارد: هل أنت يائس إلى هذا الحد لقتال المجرمين... لدرجة أنك تحبس نفسك لتواجههم واحدًا تلو الآخر؟",
    "vocabulary": [
      {
        "word": "finders keepers",
        "arabicMeaning": "من يجد شيئاً يحتفظ به (عرف بين الأطفال)",
        "example": "I found this vintage watch in the attic, finders keepers!"
      },
      {
        "word": "nightmare",
        "arabicMeaning": "كابوس / تجربة مفزعة",
        "example": "Traveling during the snowstorm turned into a complete nightmare."
      },
      {
        "word": "solitary",
        "arabicMeaning": "انفرادي (الحبس الانفرادي)",
        "example": "The prisoner was sent to solitary confinement after breaking the rules."
      },
      {
        "word": "take on",
        "arabicMeaning": "يواجه أو ينازل شخصاً في قتال",
        "example": "The rookie tennis player was eager to take on the world champion."
      }
    ],
    "notes": [
      {
        "term": "Finders keepers",
        "type": "idiom",
        "explanation": "مثل شعبي أمريكي وبريطاني مشهور يعني أن من يعثر على غرض مفقود يحق له امتلاكه."
      },
      {
        "term": "Take on",
        "type": "phrasal_verb",
        "explanation": "فعل مركب يعني منازلة شخص في عراك أو خوض تحدٍ ضد خصم."
      },
      {
        "term": "Solitary",
        "type": "slang",
        "explanation": "تعبير دارج في لغة السجون يشير إلى زنزانة الحبس الانفرادي (Solitary confinement)."
      }
    ],
    "wordCount": 139
  },
  {
    "id": 2,
    "paragraphNumber": 2,
    "english": "Bruce: Actually, there were seven of them.\nDucard: I counted six, Mr. Wayne.\nBruce: How do you know my name?\nDucard: The world is too small for someone like Bruce Wayne to disappear...\n...no matter how deep he chooses to sink.\nBruce: Who are you?\nDucard: My name is merely Ducard, but I speak for Ra's al Ghul...\n...a man greatly feared by the criminal underworld.\nA man who can offer you a path.\nBruce: What makes you think I need a path?\nDucard: Someone like you is only here by choice.\nYou have been exploring the criminal fraternity...\n...but whatever your original intentions...\n...you have become truly lost.\nBruce:,And what path can Ra's al Ghul offer?\nDucard: The path of a man who shares his hatred of evil...\n...and wishes to serve true justice.",
    "arabicTranslation": "بروس: في الواقع، كانوا سبعة رجال.\nدوكارد: لقد عددتُ ستة فقط يا سيد واين.\nبروس: كيف تعرف اسمي؟\nدوكارد: العالم أصغر من أن يختفي فيه شخص مثل بروس واين... مهما كان العمق الذي يختاره ليهوي فيه.\nبروس: من أنت؟\nدوكارد: اسمي مجرد دوكارد، لكني أتحدث نيابة عن 'رأس الغول'... رجل يخشاه عالم الجريمة السفلي بشدة. رجل بمقدوره أن يقدم لك طريقًا.\nبروس: وما الذي يجعلك تظن أنني بحاجة إلى طريق؟\nدوكارد: شخص مثلك لا يتواجد هنا إلا بمحض إرادته. لقد كنت تستكشف مجتمع الجريمة... ولكن مهما كانت نواياك الأصلية... فقد ضللت طريقك حقًا.\nبروس: وما هو الطريق الذي يمكن أن يقدمه رأس الغول؟\nدوكارد: طريق رجل يشاطره كراهيته للشر... ويرغب في خدمة العدالة الحقيقية.",
    "vocabulary": [
      {
        "word": "underworld",
        "arabicMeaning": "عالم الجريمة السري / القاع الإجرامي",
        "example": "The detective infiltrated the city's criminal underworld under cover."
      },
      {
        "word": "sink",
        "arabicMeaning": "يهوي / ينحدر إلى درك أسفل",
        "example": "He refused to sink to their level of dishonesty."
      },
      {
        "word": "fraternity",
        "arabicMeaning": "أخوية / رابطة تجمع أصحاب مهنة أو طائفة",
        "example": "He felt a strong sense of camaraderie within the medical fraternity."
      },
      {
        "word": "intentions",
        "arabicMeaning": "نوايا ومقاصد",
        "example": "Despite her good intentions, her advice made the problem worse."
      }
    ],
    "notes": [
      {
        "term": "By choice",
        "type": "idiom",
        "explanation": "تعبير يعني بمحض الإرادة والاختيار التام دون إجبار خارجي."
      },
      {
        "term": "No matter how deep",
        "type": "informal",
        "explanation": "أسلوب بلاغي للتأكيد على الشدة والعمق مهما بلغت درجته."
      }
    ],
    "wordCount": 135
  },
  {
    "id": 3,
    "paragraphNumber": 3,
    "english": "The path of the League of Shadows.\n[CHUCKLES]\nBruce: You're vigilantes.\nDucard: No, no, no.\nA vigilante is just a man lost in the scramble for his own gratification.\nHe can be destroyed or locked up.\nBut if you make yourseIf more than just a man...\n...if you devote yourseIf to an ideal...\n...and if they can't stop you...\n...then you become something eIse entirely.\nBruce: Which is?\nDucard: Legend, Mr. Wayne.\nTomorrow, you will be released.\nIf you are bored of brawling with petty thieves and want to achieve something...\n...there is a rare blue flower that grows on the eastern slopes.\nPick one of these flowers.\nIf you can carry it to the top of the mountain...\n...you may find what you were looking for in the first place.\nBruce: And what was I looking for?",
    "arabicTranslation": "طريق عصبة الظلال.\n[يضحك بروس بسخرية]\nبروس: أنتم جماعة اقتصاص ذاتي غير قانونية.\nدوكارد: كلا، كلا، كلا. المققتص الذاتي هو مجرد رجل تائه في التدافع وراء إرضاء رغباته الذاتية. يمكن تدميره أو الزج به في السجن. لكن إذا جعلت من نفسك أكثر من مجرد إنسان... إذا كرست نفسك لمبدأ أسمى... وإذا عجزوا عن إيقافك... فإنك حينها تصبح شيئًا آخر تمامًا.\nبروس: وما هو ذلك الشيء؟\nدوكارد: أسطورة، يا سيد واين. غدًا سيتم الإفراج عنك. إذا سئمت من العراك مع لصوص تافهين وأردت تحقيق شيء ذي قيمة... فهناك زهرة زرقاء نادرة تنمو على المنحدرات الشرقية. اقطف واحدة من هذه الأزهار. إذا استطعت حملها إلى قمة الجبل... فقد تجد ما كنت تبحث عنه في المقام الأول.\nبروس: وما الذي كنت أبحث عنه؟",
    "vocabulary": [
      {
        "word": "vigilante",
        "arabicMeaning": "مقتص ذاتي / مطبق للعدالة بنفسه خارج القانون",
        "example": "The authorities warned citizens against acting as vigilantes."
      },
      {
        "word": "scramble",
        "arabicMeaning": "تدافع وصراع محموم",
        "example": "There was a frantic scramble for the last train tickets home."
      },
      {
        "word": "gratification",
        "arabicMeaning": "إرضاء النفس / إشباع الرغبات",
        "example": "Instant gratification often prevents people from achieving long-term goals."
      },
      {
        "word": "devote",
        "arabicMeaning": "يكرس ويهب وقته أو نفسه لشيء",
        "example": "She decided to devote her career to protecting marine wildlife."
      }
    ],
    "notes": [
      {
        "term": "Locked up",
        "type": "phrasal_verb",
        "explanation": "فعل مركب يعني الحبس خلف القضبان أو إدخال السجن."
      },
      {
        "term": "In the first place",
        "type": "idiom",
        "explanation": "تعبير يعني 'من الأصل' أو 'من البداية'."
      }
    ],
    "wordCount": 138
  },
  {
    "id": 4,
    "paragraphNumber": 4,
    "english": "Ducard: Only you can know that.\n[INDISTINCT CHATTERING]\nYou turn back. You go back.\nBRUCE: Ra's al Ghul?\nDUCARD: Wait.\n[SPEAKING FOREIGN LANGUAGE]\n[TRANSLATING] What are you seeking?\nBruce: I seek...\n...the means to fight injustice.\nTo turn fear...\n...against those who prey on the fearful.\n[SPEAKING FOREIGN LANGUAGE]\nDUCARD [TRANSLATING]: To manipulate the fears in others...\n...you must first master your own.\nAre you ready to begin?\nBruce: I can.... I can barely stand.\nDucard: Death does not wait for you to be ready!\nDeath is not considerate or fair!\nAnd make no mistake, here you face death.\nTiger.\nJujitsu.\nPanther.\nYou're skilled. But this is not a dance.\nAnd you are afraid.\nBut not of me.\nTell us, Mr. Wayne...\n...what do you fear?\n[BATS SQUEAKlNG]\nThomas Wayne: Bruce?\nIt's okay. It's okay.\nYou'll be okay.",
    "arabicTranslation": "دوكارد: أنت وحدك من يمكنه معرفة ذلك.\n[أصوات همهمات غير واضحة]\nعليك بالعودة أدراجك. ارجع إلى حيث أتيت.\nبروس: رأس الغول؟\nدوكارد: انتظر.\n[يتحدث بلغة أجنبية]\n[يترجم]: ما الذي تبحث عنه؟\nبروس: أبحث عن... الوسائل لمحاربة الظلم. ولتحويل الخوف... ضد أولئك الذين يفترسون الخائفين.\n[يتحدث بلغة أجنبية]\nدوكارد [مترجمًا]: لكي تتلاعب بمخاوف الآخرين... يجب عليك أولاً أن تتقن وتلجم مخاوفك أنت. هل أنت مستعد للبدء؟\nبروس: بالكاد... بالكاد أستطيع الوقوف.\nدوكارد: الموت لا ينتظرك حتى تصبح مستعدًا! الموت ليس مراعيًا للمشاعر ولا عادلًا! وإياك أن تخطئ الظن، فهنا أنت تواجه الموت وجهًا لوجه. أسلوب النمر. الجوجيتسو. أسلوب الفهد. أنت ماهر، لكن هذا ليس رقصًا. وأنت خائف... لكن ليس مني. أخبرنا يا سيد واين... مم تخاف؟",
    "vocabulary": [
      {
        "word": "prey on",
        "arabicMeaning": "يفترس / يستغل الضعفاء",
        "example": "Con artists prey on vulnerable people looking for quick investments."
      },
      {
        "word": "manipulate",
        "arabicMeaning": "يتلاعب بـ / يوجه بمهارة وخبث",
        "example": "He attempted to manipulate the statistics to suit his argument."
      },
      {
        "word": "considerate",
        "arabicMeaning": "مراعٍ للآخرين ومشاعرهم",
        "example": "It was considerate of him to turn down the music while she was studying."
      },
      {
        "word": "make no mistake",
        "arabicMeaning": "إياك أن تشك / اعلم يقينًا",
        "example": "Make no mistake, we are here to win the championship."
      }
    ],
    "notes": [
      {
        "term": "Prey on",
        "type": "phrasal_verb",
        "explanation": "فعل مركب يعني استغلال أو افتراس الفئات الضعيفة والخائفة."
      },
      {
        "term": "Make no mistake",
        "type": "idiom",
        "explanation": "عبارة تحذيرية بلاغية تعني 'لا تشك أبداً فيما أقوله'."
      }
    ],
    "wordCount": 138
  },
  {
    "id": 5,
    "paragraphNumber": 5,
    "english": "ALFRED: Will we be needing an ambulance, Master Wayne?\nTHOMAS: No, I'll set the bone and take him for an x-ray later.\nALFRED: Very good, sir.\n-I'm very sorry, sir. I've told--\nTHOMAS: Don't worry. It's fine.\nALFRED: Took quite a fall, didn't we, Master Bruce?\nTHOMAS: And why do we fall?\nSo we can learn to pick ourselves up.\nJust a little fall. It's just a small fracture.\nTHOMAS: The bats again?\nYou know why they attacked you, don't you?\n-They were afraid of you.\nYoung Bruce: Afraid of me?\nThomas: All creatures feel fear.\nBruce: Even the scary ones?\nThomas: Especially the scary ones.\nI got something to show you.\n-You think your mother will like them?\nBruce: -Yeah.\nThomas: I think it's time to get up.\nBruce: Maybe.\nTHOMAS: No going back to bed.",
    "arabicTranslation": "[صرير الخفافيش]\nتوماس واين: بروس؟ لا بأس يا بني، كل شيء بخير. ستكون على ما يرام.\nألفريد: هل سنحتاج إلى سيارة إسعاف يا سيد واين؟\nتوماس: لا، سأقوم بجبيرة العظم وآخذه لإجراء أشعة سينية لاحقًا.\nألفريد: حسنٌ جدًا يا سيدي. أنا آسف للغاية يا سيدي، لقد أخبرته--\nتوماس: لا تقلق، الأمر على ما يرام.\nألفريد: لقد سقطنا سقطة قوية، أليس كذلك يا سيد بروس الصغير؟\nتوماس: ولماذا نسقط؟ لكي نتعلم كيف ننهض بأنفسنا مجددًا. إنها مجرد سقطة صغيرة، وكسر بسيط.\nتوماس: أهي الخفافيش مجددًا؟ أنت تعرف لماذا هاجمتك، أليس كذلك؟ لقد كانت خائفة منك.\nبروس الصغير: خائفة مني؟\nتوماس: كل المخلوقات تشعر بالخوف.\nبروس: حتى المخلوقات المخيفة؟\nتوماس: وخاصة المخلوقات المخيفة منها. لدي شيء أريك إياه.",
    "vocabulary": [
      {
        "word": "fracture",
        "arabicMeaning": "كسر في العظام / صدع",
        "example": "The athlete suffered a minor fracture in his ankle during the match."
      },
      {
        "word": "pick oneself up",
        "arabicMeaning": "ينهض بعد السقوط / يستعيد قوته",
        "example": "When failure knocks you down, you must pick yourself up and keep going."
      },
      {
        "word": "creature",
        "arabicMeaning": "مخلوق أو كائن حي",
        "example": "The Amazon rainforest is home to thousands of rare creatures."
      },
      {
        "word": "set the bone",
        "arabicMeaning": "يجبر العظم المكسور ويعيده لموضعه",
        "example": "The orthopedic surgeon carefully set the bone in the patient's arm."
      }
    ],
    "notes": [
      {
        "term": "Why do we fall? So we can learn to pick ourselves up.",
        "type": "cultural",
        "explanation": "العبارة الفلسفية الخالدة في الفيلم لتوماس واين، وتعتبر أعظم درس في المرونة والصمود والتعلم من الإخفاقات."
      },
      {
        "term": "Pick ourselves up",
        "type": "phrasal_verb",
        "explanation": "النهوض مجدداً بعد كبوة أو عثرة حرفية أو مجازية."
      }
    ],
    "wordCount": 137
  },
  {
    "id": 6,
    "paragraphNumber": 6,
    "english": "Bruce:,Did you build this train, Dad?\nThomas: Gotham's been good to our family, but the city's been suffering.\nPeople less fortunate than us have been enduring very hard times.\nSo we buiIt a new, cheap, public transportation system to unite the city.\nAnd at the center...\n...Wayne Tower.\nBRUCE: Is that where you work?\nThomas: -No, I work at the hospital.\nI leave the running of our company to much better men.\nBruce: Better?\nThomas: Well...\n...more interested men.\n[PERFORMERS SlNGlNG]\n[ORCHESTRA PLAYlNG]\n[GASPlNG]\nBruce: Can we go?\nPlease.\nThomas: Okay. Let's go.\nMartha: What's wrong, Bruce?\nThomas: No, no. It was me.\nI just needed some fresh air.\nA little bit of opera goes a long way. Right, Bruce?\nCome on. Let's go.\nJoe Chill: Wallets, jewelry. Come on, fast.\nTHOMAS: That's fine.\nCHILL: Fast.\nThomas: Take it easy.",
    "arabicTranslation": "- هل تعتقد أن والدتك ستعجب بها؟\nبروس: - أجل.\nتوماس: أظن أن الوقت قد حان للنهوض.\nبروس: ربما.\nتوماس: لا عودة إلى السرير مجددًا.\nبروس: هل قمت ببناء هذا القطار يا أبي؟\nتوماس: لقد كانت مدينة غوثام سخية وعطوفة على عائلتنا، لكن المدينة تعاني. فالناس الأقل حظًا منا يكابدون أوقاتًا عصيبة للغاية. لذا قمنا ببناء نظام نقل عام جديد ورخيص ليوحد أرجاء المدينة. وفي المركز يقبع... برج واين.\nبروس: أهناك تعمل؟\nتوماس: - لا، أنا أعمل في المستشفى. أترك إدارة شركتنا لرجال أفضل مني بكثير.\nبروس: أفضل؟\nتوماس: حسنًا... رجال أكثر اهتمامًا وشغفًا بها.",
    "vocabulary": [
      {
        "word": "endure",
        "arabicMeaning": "يكابد / يتحمل الصعاب والمشقات",
        "example": "The refugees had to endure harsh winter conditions without heat."
      },
      {
        "word": "less fortunate",
        "arabicMeaning": "أقل حظًا / الفقراء والمحتاجون",
        "example": "During the holidays, our charity supports less fortunate families."
      },
      {
        "word": "public transportation",
        "arabicMeaning": "المواصلات والنقل العام",
        "example": "A reliable public transportation system reduces traffic congestion in big cities."
      },
      {
        "word": "running of",
        "arabicMeaning": "إدارة وتشغيل (مؤسسة أو عمل)",
        "example": "She took over the running of the family restaurant after her father retired."
      }
    ],
    "notes": [
      {
        "term": "Good to our family",
        "type": "idiom",
        "explanation": "تعبير مجازي يعني 'أحسنت إلينا وقدمت لنا الرخاء والفرص الوافرة'."
      },
      {
        "term": "Less fortunate",
        "type": "idiom",
        "explanation": "تعبير مهذب ومحترم يُستخدم للإشارة إلى الطبقات الفقيرة أو محدودة الدخل."
      }
    ],
    "wordCount": 140
  },
  {
    "id": 7,
    "paragraphNumber": 7,
    "english": "Here you go.\nIt's fine. It's fine.\nNow just take it and go.\nChill: I said, jewelry.\nTHOMAS: Hey--\n[g*nsh*t]\n[MARTHA SCREAMING]\nMARTHA: Thomas!\n[g*nsh*t]\nTHOMAS [WHISPERING]: Bruce.\nIt's okay.\nDon't be afraid.\n[CHATTERING]\nGordon; Is this your father's?\nIt's okay.\nCome here.\nThere you go.\nIt's okay.\nLOEB: Gordon.\nHey.\nGood news.\nGordon: We got him, son.\nMr Earle: You're in excellent hands.\nWe'll be watching the empire.\nWhen you grow up, it'll be waiting for you.\nAlfred: I thought I might prepare a little supper.\n-Very well.\nBruce: AIfred?\nAlfred: Yes, Master Bruce?\nBruce: It was my fauIt, AIfred.\n-I made them leave the theater.\nAlfred: No.\nBruce: If I hadn't gotten scared....\nAlfred: It was nothing that you did.\nIt was him, and him alone.\nDo you understand?",
    "arabicTranslation": "[المؤدون يغنون في الأوبرا]\n[عزف الأوركسترا]\n[بروس يشهق من الفزع]\nبروس: هل يمكننا المغادرة؟ أرجوك.\nتوماس: حسنًا، هيا نغادر.\nمارثا: ما خطبك يا بروس؟\nتوماس: لا، لا شيء، كان الأمر بسببي أنا. أردت فقط بعض الهواء النقي. جرعة بسيطة من الأوبرا تكفي لوقت طويل، أليس كذلك يا بروس؟ هيا بنا نذهب.\nجو تشيل: المحافظ، والمجوهرات! هيا، بسرعة!\nتوماس: لا بأس.\nتشيل: بسرعة!\nتوماس: اهدأ، خذ الأمور بروية. هاك ما تريد. لا بأس، لا بأس. الآن فقط خذها واذهب في طريقك.\nتشيل: قلت لك: المجوهرات!\nتوماس: مهلاً--\n[دوي طلق ناري]\n[مارثا تصرخ]\nمارثا: توماس!\n[دوي طلق ناري ثانٍ]\nتوماس [هامسًا بأنفاسه الأخيرة]: بروس... لا بأس... لا تخف.",
    "vocabulary": [
      {
        "word": "take it easy",
        "arabicMeaning": "اهدأ / خذ الأمور بروية دون توتر",
        "example": "Just take it easy and breathe deeply; the doctor will see you in a minute."
      },
      {
        "word": "goes a long way",
        "arabicMeaning": "يكفي تمامًا / له أثر كبير وبسيط",
        "example": "A little bit of kindness goes a long way in healing relationships."
      },
      {
        "word": "jewelry",
        "arabicMeaning": "مجوهرات وحلي",
        "example": "The burglar stole expensive gold jewelry from the master bedroom."
      },
      {
        "word": "fresh air",
        "arabicMeaning": "هواء نقي منعش",
        "example": "I need to step outside for a few minutes of fresh air."
      }
    ],
    "notes": [
      {
        "term": "Goes a long way",
        "type": "idiom",
        "explanation": "تعبير اصطلاحي يعني أن قدراً صغيراً من الشيء يكون كافياً ومؤثراً جداً."
      },
      {
        "term": "Take it easy",
        "type": "informal",
        "explanation": "تعبير دارج مهدئ يُستخدم لطلب الاسترخاء وعدم التسرع أو الغضب."
      }
    ],
    "wordCount": 131
  },
  {
    "id": 8,
    "paragraphNumber": 8,
    "english": "Bruce: I miss them, AIfred. I miss them so much.\nAlfred: So do l, Master Bruce.\nSo do l.\nDUCARD: And do you still feel responsible for your parents' death?\nBruce: My anger outweighs my guiIt.\nDucard: Come.\nYou have learned to bury your guiIt with anger.\nI will teach you to confront it and to face the truth.\nYou know how to fight six men. We can teach you how to engage 600.\nYou know how to disappear.\nWe can teach you to become truly invisible.\nBruce: Invisible?\n[SPEAKING IN FOREIGN LANGUAGE]\nDucard: The ninja understands that invisibility is a matter of patience and agility.\n[GRUNTING]\nAlways mind your surroundings.\nNinjitsu employs expl*sive powders.\nBruce; As weapons?\nDucard: Or distractions.\nTheatricality and deception are powerful agents.",
    "arabicTranslation": "[أصوات ثرثرة رجال الشرطة]\nغوردون: هل هذا المعطف لوالدك؟ لا بأس... تعال إلى هنا. ها أنت ذا. لا بأس عليك.\nلوب: غوردون. مرحبًا. لدي أخبار سارة.\nغوردون: لقد ألقينا القبض عليه يا بني.\nالسيد إيرل: أنت في أيدٍ أمينة وممتازة. نحن سنرعى الإمبراطورية المالية ونحافظ عليها، وحين تكبر وتشتد سواعدك، ستكون بانتظارك.\nألفريد: فكرت في أن أعد لك وجبة عشاء خفيفة.\n- حسنًا جدًا.\nبروس: ألفريد؟\nألفريد: نعم يا سيد بروس الصغير؟\nبروس: كان ذلك خطأي أنا يا ألفريد... أنا الذي جعلتهم يغادرون المسرح.\nألفريد: كلا يا بني.\nبروس: لو أنني لم أشعر بالخوف فقط...\nألفريد: لم يكن هناك أي ذنب اقترفته أنت. كان الجاني هو، وهو وحده دون غيره. أتفهمني؟",
    "vocabulary": [
      {
        "word": "in excellent hands",
        "arabicMeaning": "في أيدٍ أمينة وموثوقة للغاية",
        "example": "Don't worry about the surgery; you are in excellent hands with Dr. Miller."
      },
      {
        "word": "empire",
        "arabicMeaning": "إمبراطورية (تُطلق مجازياً على الشركات الضخمة)",
        "example": "The founder built a global software empire from a tiny garage."
      },
      {
        "word": "supper",
        "arabicMeaning": "وجبة عشاء مسائية خفيفة",
        "example": "We sat down for a quiet family supper after a long work day."
      },
      {
        "word": "blame / fault",
        "arabicMeaning": "ذنب / خطأ ملقى على عاتق الشخص",
        "example": "It was not your fault that the flight was delayed by the storm."
      }
    ],
    "notes": [
      {
        "term": "In excellent hands",
        "type": "idiom",
        "explanation": "تعبير يعني أن الشخص محاط برعاية واهتمام من خبراء جديرين بالثقة."
      },
      {
        "term": "Him and him alone",
        "type": "informal",
        "explanation": "صيغة تأكيدية لحصر المسؤولية واللوم على المجرم وحده وتبرئة بروس من عقدة الذنب."
      }
    ],
    "wordCount": 127
  },
  {
    "id": 9,
    "paragraphNumber": 9,
    "english": "You must become more than just a man in the mind of your opponent.\n[MAN SPEAKING FOREIGN LANGUAGE]\nBRUCE: Who is he?\nDucard: He was a farmer.\nThen he tried to take his neighbor's land and became a m*rder*r.\n-Now he is a prisoner.\nBruce: What'll happen to him?\nDucard: Justice. Crime cannot be tolerated.\nCriminaIs thrive on the indulgence of society's understanding.\nYour parents' death was not your fauIt.\nIt was your father's.\nAnger does not change the fact that your father failed to act.\nBruce: The man had a g*n.\nDucard: Would that stop you?\nBruce: I've had training.\nDucard: The training is nothing!\nWill is everything!\nThe will to act.\nBruce: Yield.\nDucard: You haven't beaten me.\nYou have sacrificed sure footing for a k*lling stroke.\nDUCARD: Rub your chest.\nYour arms will take care of themselves.",
    "arabicTranslation": "بروس: إنني أفتقدهم يا ألفريد، أفتقدهم بشدة.\nألفريد: وأنا كذلك يا سيد بروس الصغير. وأنا كذلك.\nدوكارد: وهل ما زلت تشعر بالمسؤولية عن مقتل والديك؟\nبروس: غضبي يفوق ويفلّ وطأة شعوري بالذنب.\nدوكارد: تعال معي. لقد تعلمت أن تواري ذنبك وتدفنه تحت وطأة الغضب. سأعلمك كيف تواجهه وتنظر في وجه الحقيقة. أنت تعرف كيف تقاتل ستة رجال، ونحن بمقدورنا أن نعلمك كيف تشتبك مع 600 رجل. أنت تجيد الاختفاء، لكننا سنعلمك كيف تصبح خفيًا بحق.\nبروس: خفيًا؟\n[يتحدث بلغة أجنبية]\nدوكارد: النينجا يدرك أن الاختفاء هو مسألة صبر وخفة حركة وسرعة بديهة.\n[أصوات نزال وعراك]\nانتبه دائمًا لما يحيط بك وبيئتك.",
    "vocabulary": [
      {
        "word": "outweigh",
        "arabicMeaning": "يرجح على / يفوق أهمية أو وزناً",
        "example": "The advantages of electric vehicles far outweigh their initial cost."
      },
      {
        "word": "confront",
        "arabicMeaning": "يواجه بشجاعة ودون مواربة",
        "example": "She decided to confront her phobia of public speaking directly."
      },
      {
        "word": "agility",
        "arabicMeaning": "خفة الحركة والرشاقة والسرعة",
        "example": "Gymnasts require exceptional balance, core strength, and agility."
      },
      {
        "word": "surroundings",
        "arabicMeaning": "المحيط والبيئة المحيطة بالشخص",
        "example": "Always stay alert and pay close attention to your surroundings in unfamiliar places."
      }
    ],
    "notes": [
      {
        "term": "Bury guilt",
        "type": "idiom",
        "explanation": "استعارة تعني كبت الشعور بالذنب ومحاولة إخفائه دون معالجة نفسية حقيقية."
      },
      {
        "term": "Mind your surroundings",
        "type": "cultural",
        "explanation": "وصية دوكارد المركزية في فنون القتال، والتي ستكون المفتاح النهائي لبروس لهزيمته في نهاية الفيلم."
      }
    ],
    "wordCount": 140
  },
  {
    "id": 10,
    "paragraphNumber": 10,
    "english": "You are stronger than your father.\nBruce: You didn't know my father.\nDucard: But I know the rage that drives you.\nThat impossible anger strangling the grief...\n...until the memory of your loved one is just poison in your veins ...\nAnd one day, you catch yourseIf wishing the person you loved had never existed...\n...so you'd be spared your pain.\nI wasn't always here in the mountains.\nOnce, I had a wife.\nMy great love.\nShe was taken from me.\nLike you, I was forced to learn there are those without decency...\n...who must be fought without hesitation, without pity.\nYour anger gives you great power.\nBut if you let it, it will destroy you...\n...as it almost did me.\nBruce: What stopped it?\nDucard: Vengeance.\nBruce: That's no help to me.\nDucard: Why, Bruce?",
    "arabicTranslation": "يستخدم النينجيتسو مساحيق متفجرة.\nبروس: كأسلحة؟\nدوكارد: أو كوسائل إلهاء وتشتيت. فالإبهار المسرحي والخداع هما عاملان في غاية القوة. يجب عليك أن تصبح أكثر من مجرد إنسان عادي في مخيلة خصمك وعقله.\n[رجل يتحدث بلغة أجنبية]\nبروس: من هذا الرجل؟\nدوكارد: كان مزارعًا بسيطًا، ثم حاول الاستيلاء على أرض جاره وأصبح قاتلًا. والآن هو أسير لدينا.\nبروس: وماذا سيحدث له؟\nدوكارد: العدالة. الجريمة لا يمكن التسامح معها أبدًا. المجرمون يزدهرون وينتعشون على تساهل المجتمع وتفهمه الزائد. إن مقتل والديك لم يكن خطأك أنت... بل كان خطأ والدك. إن الغضب لا يغير حقيقة أن والدك قد عجز عن اتخاذ رد فعل.",
    "vocabulary": [
      {
        "word": "theatricality",
        "arabicMeaning": "الإبهار المسرحي والدرامي",
        "example": "The magician relied on dramatic theatricality to captivate his audience."
      },
      {
        "word": "deception",
        "arabicMeaning": "المخادعة والمراوغة",
        "example": "Camouflage in nature is a masterclass in visual deception."
      },
      {
        "word": "opponent",
        "arabicMeaning": "الخصم والمنافس",
        "example": "He studied his chess opponent's past games to discover his weaknesses."
      },
      {
        "word": "thrive on",
        "arabicMeaning": "ينتعش ويزدهر مستفيداً من شيء",
        "example": "Some creative writers thrive on tight deadlines and high pressure."
      },
      {
        "word": "indulgence",
        "arabicMeaning": "التساهل الزائد والانغماس",
        "example": "Too much parental indulgence can prevent children from learning discipline."
      }
    ],
    "notes": [
      {
        "term": "Theatricality and deception",
        "type": "cultural",
        "explanation": "مبدأ بروس واين الذي استلهمه من دوكارد لبناء هوية 'باتمان' لإلقاء الرعب في قلوب المجرمين."
      },
      {
        "term": "Failed to act",
        "type": "idiom",
        "explanation": "تعبير لوم يعني الإحجام عن اتخاذ الموقف الحازم اللازم في اللحظة الحرجة."
      }
    ],
    "wordCount": 136
  },
  {
    "id": 11,
    "paragraphNumber": 11,
    "english": "Why could you not avenge your parents?\nAlfred: Will you be heading back to Princeton after the hearing, sir...\n...or can I persuade you to stay on for a day or two?\nBRUCE: I'm not heading back at all.\nALFRED: You don't like it there?\nBruce: I like it fine.\nThey just don't feel the same way.\nAlfred: I've prepared the master bedroom.\nBruce: No.\nMy room will be fine.\nALFRED: With all due respect, sir, Wayne Manor is your house.\nBRUCE: No, AIfred, it's my father's house.\n-Your father is dead.\nBruce: This place is a mausoleum.\nIf I have my way, I'll pull the damn thing down brick by brick.\nAlfred: This house, Master Wayne, has sheItered six generations of your family.\nBruce: Why do you give a damn, AIfred? It's not your family.",
    "arabicTranslation": "بروس: كان الرجل يحمل مسدسًا!\nدوكارد: وهل كان ذلك ليوقفك أنت؟\nبروس: لقد تلقيت تدريبًا.\nدوكارد: التدريب لا يساوي شيئًا! الإرادة هي كل شيء! إرادة الإقدام والفعل.\nبروس: استسلم.\nدوكارد: أنت لم تهزمني بعد... لقد ضحيت بثبات موطئ قدمك من أجل توجيه ضربة قاتلة.\nدوكارد: افرك صدرك لتدفئته. ذراعاك ستعتنيان بنفسيهما. أنت أقوى من والدك.\nبروس: أنت لم تكن تعرف والدي.\nدوكارد: لكني أعرف السُّعار والغضب العارم الذي يحركك. ذلك الغضب المستحيل الذي يخنق الحزن... حتى تصبح ذكرى من تحب مجرد سم يسري في عروقك... حتى يأتيك يوم تجد فيه نفسك تتمنى لو أن الشخص الذي أحببته لم يكن موجودًا قط... حتى تنجو من وطأة هذا الألم.",
    "vocabulary": [
      {
        "word": "yield",
        "arabicMeaning": "يستسلم / يذعن للخصم",
        "example": "The stubborn defender refused to yield an inch of ground to the enemy."
      },
      {
        "word": "footing",
        "arabicMeaning": "موطئ القدم والثبات على الأرض",
        "example": "Be careful on the icy path so that you don't lose your footing."
      },
      {
        "word": "rage",
        "arabicMeaning": "غضب عارم وسُعار",
        "example": "He struggled to control his boiling rage after hearing the unfair verdict."
      },
      {
        "word": "grief",
        "arabicMeaning": "الحزن والأسى واللوعة على فقدان حبيب",
        "example": "Time gradually softens the agonizing sharpness of grief."
      },
      {
        "word": "spared",
        "arabicMeaning": "ينجو من مكروه / يُعفى من المعاناة",
        "example": "We were fortunate to be spared the worst damage of the hurricane."
      }
    ],
    "notes": [
      {
        "term": "Will to act",
        "type": "idiom",
        "explanation": "العزيمة الصادقة على التنفيذ دون تردد أو وجل."
      },
      {
        "term": "Sure footing",
        "type": "idiom",
        "explanation": "التوازن والثبات الحركي السليم للقدمين أثناء القتال أو المشي على أرض زلقة."
      }
    ],
    "wordCount": 136
  },
  {
    "id": 12,
    "paragraphNumber": 12,
    "english": "Alfred:,I give a damn because a good man once made me responsible...\n...for what was most precious to him...\n...in the whole world.\nMiss Dawes has offered to drive you to the hearing.\nShe probably hopes to talk you out of going.\nBRUCE: Should I just bury the past out there with my parents, AIfred?\nAlfred: I wouldn't presume to tell you what to do with your past, sir.\nJust know that there are those of us who care about what you do with your future.\nBruce: Haven't given up on me yet?\nAlfred: Never.\nBruce: AIfred still keeps the condensed milk on the top sheIf.\nRachel: Hasn't he noticed you're tall enough to reach now?\nBruce: Old habits die hard, I guess.\nRachel: -Never used to stop us anyway.\nBruce: No, it didn't.\nBruce: How's your mom?",
    "arabicTranslation": "لم أكن أعيش هنا في هذه الجبال دائمًا. ذات مرة، كان لدي زوجة. كانت حبي العظيم. وقد سُلبت مني وانتُزعت من حياتي. ومثلك تمامًا، أُجبرت على أن أتعلم أن هناك في هذا العالم أشخاصًا مجردين من كل خلق وإنسانية... أشخاصًا يجب قتالهم بلا تردد، وبلا أي شفقة. إن غضبك يمنحك قوة هائلة، لكنك إن أطلقت له العنان فإنه سيدمرك حتمًا... تمامًا كما كاد أن يفعل بي.\nبروس: وما الذي أوقفه؟\nدوكارد: الانتقام والقصاص.\nبروس: هذا لن يقدم لي أي عون.\nدوكارد: ولماذا يا بروس؟ لماذا لم تستطع أن تثأر لمقتل والديك؟",
    "vocabulary": [
      {
        "word": "decency",
        "arabicMeaning": "النزاهة والأخلاق والمروءة",
        "example": "He had the common decency to apologize for his rude behavior."
      },
      {
        "word": "hesitation",
        "arabicMeaning": "تردد وتوانٍ",
        "example": "Without a moment's hesitation, she leaped into the river to rescue the puppy."
      },
      {
        "word": "pity",
        "arabicMeaning": "شفقة ورأفة",
        "example": "The ruthless villain showed no pity toward the captured prisoners."
      },
      {
        "word": "vengeance",
        "arabicMeaning": "انتقام وثأر",
        "example": "Seeking vengeance will only trap you in an endless cycle of bitterness."
      },
      {
        "word": "avenge",
        "arabicMeaning": "يثأر لشخص وينتقم لمظلمته",
        "example": "The legendary warrior set out to avenge the murder of his mentor."
      }
    ],
    "notes": [
      {
        "term": "Taken from me",
        "type": "idiom",
        "explanation": "كناية مؤلمة عن الموت أو القتل الغادر لشخص عزيز."
      },
      {
        "term": "Let it",
        "type": "phrasal_verb",
        "explanation": "السماح لشيء بالسيطرة عليك وتسيير مصيرك."
      }
    ],
    "wordCount": 138
  },
  {
    "id": 13,
    "paragraphNumber": 13,
    "english": "Rachel; She misses this place.\nSo do l.\nBruce: Yeah.\nBut it's nothing without the people who made it what it was.\n-Now there's only AIfred.\nRachel: And you.\nBruce: I'm not staying, Rachel. -\nRachel: You're just back for the hearing.\nBruce, I don't suppose there's any way to convince you not to come.\nBruce: Someone at this proceeding...\n...should stand for my parents.\nRachel; We all loved your parents, Bruce.\n-What Chill did is unforgivable.\nBruce; Then why is your boss letting him go?\nRachel; In prison, he shared a cell with Carmine Falcone.\nHe learned things, and he will testify in exchange for early parole.\nBruce: Rachel, this man k*lled my parents.\nI cannot let that pass.\nAnd I need you to understand that, please.\nRachel; Okay.",
    "arabicTranslation": "ألفريد: هل ستعود أدراجك إلى جامعة برينستون بعد جلسة الاستماع يا سيدي... أم أن بوسعي إقناعك بالبقاء هنا ليوم أو يومين؟\nبروس: لست عائدًا إلى هناك على الإطلاق.\nألفريد: ألا يروق لك العيش هناك؟\nبروس: يروق لي تمامًا. المشكلة أنهم هم لا يبادلونني نفس الشعور.\nألفريد: لقد أعددت لك غرفة النوم الرئيسية.\nبروس: كلا. غرفتي القديمة ستفي بالغرض تمامًا.\nألفريد: مع كامل الاحترام يا سيدي، قصر واين مانور هو منزلك أنت.\nبروس: كلا يا ألفريد، إنه منزل والدي.\nألفريد: - والدك قد توفي يا سيدي.\nبروس: هذا المكان مجرد ضريح للموتى. ولو سارت الأمور وفق إرادتي، لهدمت هذا المكان اللعين طوبة تلو الأخرى.",
    "vocabulary": [
      {
        "word": "persuade",
        "arabicMeaning": "يقنع شخصاً بفعل شيء",
        "example": "She tried hard to persuade her parents to let her study abroad."
      },
      {
        "word": "mausoleum",
        "arabicMeaning": "ضريح أو مقبرة فخمة كئيبة",
        "example": "The historical emperor was buried in a magnificent marble mausoleum."
      },
      {
        "word": "stay on",
        "arabicMeaning": "يمكث لفترة إضافية",
        "example": "He decided to stay on in Tokyo for another week after the conference."
      },
      {
        "word": "brick by brick",
        "arabicMeaning": "لبنة لبنة / طوبة تلو الأخرى تدريجيًا",
        "example": "They dismantled the historic stone cottage brick by brick."
      }
    ],
    "notes": [
      {
        "term": "With all due respect",
        "type": "idiom",
        "explanation": "عبارة أدبية بريطانية راقية تسبق التعبير عن رأي مخالف باحترام."
      },
      {
        "term": "Brick by brick",
        "type": "idiom",
        "explanation": "تعبير يعني الهدم أو البناء الشامل والدقيق حتى آخر قطعة."
      }
    ],
    "wordCount": 130
  },
  {
    "id": 14,
    "paragraphNumber": 14,
    "english": "FINCH: The depression hit working people, like Mr. Chill, hardest of all.\nHis crime was appalling, yes, but it was motivated not by greed...\n...but by desperation.\nGiven the 14 years served, as well as his extraordinary level of cooperation...\n...with one of this office's most important investigations...\n...we strongly endorse his petition for early release.\nFADEN: Mr. Chill?\nCHILL: Your Honor...\n...not a day goes by that I don't wish I could take back what I did.\nSure, I was desperate, like a lot of people back then...\n...but that don't change what I did.\nFADEN: I gather there is a member of the Wayne family here today.\nHas he got anything to say?\nWOMAN 1: He's coming out the side! MAN 1 : He's coming out the side, guys!\n[CLAMORlNG]\nMAN 2: Bruce Wayne!",
    "arabicTranslation": "ألفريد: هذا المنزل يا سيد واين قد آوى وستر ستة أجيال من عائلتك.\nبروس: ولمَ تبالي أنت بكل هذا يا ألفريد؟ إنها ليست عائلتك!\nألفريد: إنني أبالي بشدة لأن رجلاً طيباً وصالحاً جعلني في يوم من الأيام مسؤولاً... عن أثمن وأغلى ما يملكه في هذا العالم بأسره. الآنسة دوز عرضت أن تقودك بسيارتها إلى جلسة الاستماع، وهي على الأرجح تأمل في أن تثنيك عن الذهاب.\nبروس: هل يجدر بي فقط أن أدفن الماضي هناك في المقبرة مع والديّ يا ألفريد؟\nألفريد: لن أتجاسر على إخبارك بما ينبغي عليك فعله بماضيك يا سيدي. فقط اعلم أن هناك بيننا من يكترث ويهتم بما ستفعله بمستقبلك.\nبروس: ألم تفقد الأمل فيّ بعد؟\nألفريد: أبدًا على الإطلاق.",
    "vocabulary": [
      {
        "word": "sheltered",
        "arabicMeaning": "آوى / وفر الحماية والمأوى",
        "example": "The old mountain cabin sheltered hikers during the blizzard."
      },
      {
        "word": "give a damn",
        "arabicMeaning": "يبالي ويكترث (تعبير عامي حاد)",
        "example": "He was too cynical to give a damn about local politics."
      },
      {
        "word": "talk out of",
        "arabicMeaning": "يثني شخصاً عن فعل شيء / يقنعه بالتراجع",
        "example": "Her best friend tried to talk her out of quitting her stable job."
      },
      {
        "word": "presume",
        "arabicMeaning": "يتجاسر / يفترض بجرأة",
        "example": "I would not presume to question your professional judgment, Doctor."
      },
      {
        "word": "give up on",
        "arabicMeaning": "ييأس من شخص أو يتخلى عن دعمه",
        "example": "A dedicated teacher never gives up on a struggling student."
      }
    ],
    "notes": [
      {
        "term": "Give a damn",
        "type": "slang",
        "explanation": "تعبير عامي حاد ومباشر يعني الاكتراث بشيء (غالباً يُستخدم في النفي)."
      },
      {
        "term": "Talk (someone) out of (something)",
        "type": "phrasal_verb",
        "explanation": "فعل مركب يعني إقناع شخص بالعدول عن قرار أو خطة."
      },
      {
        "term": "Give up on",
        "type": "phrasal_verb",
        "explanation": "التخلي عن الأمل في إصلاح شخص أو تحسن وضعه."
      }
    ],
    "wordCount": 136
  },
  {
    "id": 15,
    "paragraphNumber": 15,
    "english": "WOMAN 2: Joe! Hey, Joe!\nFalcone says hi.\n[g*nsh*t]\n[PEOPLE SHOUTING]\nRACHEL: Come on, Bruce.\nWe don't need to see this.\nBruce: I do.\nRACHEL: The DA couldn't understand why Judge Faden insisted...\n...on making the hearing public.\nFalcone paid him off to get Chill out in the open.\nBruce: Maybe I should thank them.\nRachel; You don't mean that.\nBruce: What if I do, Rachel?\nMy parents deserved justice.\nRachel: You're not talking about justice. You're talking about revenge.\nBruce: Sometimes, they're the same.\nRachel: No, they're never the same.\nJustice is about harmony. Revenge is about you making yourseIf feel better.\n-It's why we have an impartial system.\nBruce: Your system is broken.\n[TlRES SCREECHING AND HORNS HONKlNG]\nRachel; You care about justice? Look beyond your own pain, Bruce.\nThis city is rotting.",
    "arabicTranslation": "بروس: ألفريد لا يزال يضع الحليب المكثف على الرف العلوي.\nراشيل: ألم يلاحظ أنك بت طويلاً بما يكفي لتصل إليه الآن؟\nبروس: العادات القديمة يصعب التخلص منها، على ما أظن.\nراشيل: - لم تكن تمنعنا عن الوصول إليه على أي حال في صغرنا.\nبروس: لا، لم تكن تفعل.\nبروس: كيف حال والدتك؟\nراشيل: إنها تفتقد هذا المكان، وأنا كذلك.\nبروس: أجل... لكنه لا يساوي شيئاً بدون الناس الذين صنعوا مجده وجعلوه كما كان. والآن لم يتبق سواه ألفريد.\nراشيل: وأنت أيضًا.\nبروس: أنا لن أبقى هنا يا راشيل.\nراشيل: أنت عدت فقط من أجل جلسة الاستماع. بروس، لا أظن أن هناك أي طريقة يمكنني بها إقناعك بعدم الحضور.\nبروس: ينبغي على شخص ما في هذا الإجراء القانوني... أن يقف ممثلًا لوالديّ.",
    "vocabulary": [
      {
        "word": "condensed milk",
        "arabicMeaning": "حليب مكثف ومحلى",
        "example": "She poured sweet condensed milk over the iced Vietnamese coffee."
      },
      {
        "word": "old habits die hard",
        "arabicMeaning": "العادات القديمة يصعب الإقلاع عنها",
        "example": "Even after retiring, he woke up at 5 a.m. every day; old habits die hard."
      },
      {
        "word": "proceeding",
        "arabicMeaning": "إجراء قضائي أو قانوني رسمي",
        "example": "The judge opened the legal proceeding at exactly nine o'clock."
      },
      {
        "word": "stand for",
        "arabicMeaning": "يمثل / يدافع عن حقوق شخص",
        "example": "She hired a seasoned attorney to stand for her family in court."
      }
    ],
    "notes": [
      {
        "term": "Old habits die hard",
        "type": "idiom",
        "explanation": "مثل إنجليزي شهير يُضرب لصعوبة التخلي عن السلوكيات والأنماط التي اعتاد عليها المرء طويلاً."
      },
      {
        "term": "Stand for",
        "type": "phrasal_verb",
        "explanation": "فعل مركب يعني الدفاع عن شخص أو تمثيله وحفظ حقوقه في مواجهة الآخرين."
      }
    ],
    "wordCount": 135
  },
  {
    "id": 16,
    "paragraphNumber": 16,
    "english": "They talk about the depression as if it's history. It's not.\nThings are worse than ever here.\nFalcone floods our streets with crime and drugs...\n...preying on the desperate, creating new Joe ChilIs every day.\nFalcone may not have k*lled your parents, Bruce...\n...but he's destroying everything that they stood for.\nYou wanna thank him for that? Here you go.\nWe all know where to find him. As long as he keeps the bad people rich...\n...and the good people scared, no one'll touch him.\nGood people like your parents, who'll stand against injustice, they're gone.\nWhat chance does Gotham have when the good people do nothing?\nBruce: I'm not one of your good people, Rachel.\nRachel: What do you mean?\nBruce: All these years, I wanted to k*ll him.\nNow I can't.",
    "arabicTranslation": "راشيل: جميعنا أحببنا والديك يا بروس. وما فعله جو تشيل أمر لا يُغتفر.\nبروس: إذن لماذا يطلق رئيسك في العمل سراحه؟\nراشيل: في السجن، كان يتشارك نفس الزنزانة مع كارمين فالكوني. وعرف منه أسراراً خطيرة، وسوف يدلي بشهادته في المحكمة مقابل الإفراج المشروط المبكر.\nبروس: راشيل، هذا الرجل قتل والديّ بدم بارد. لا يمكنني أن أدع هذا الأمر يمر بسلام. وأحتاج منك أن تفهمي ذلك، أرجوك.\nراشيل: حسنًا.\nفينش (المدعي العام): إن أزمة الكساد العظيم قد ضربت الطبقة الكادحة، مثل السيد تشيل، بقسوة بالغة أكثر من أي فئة أخرى. صحيح أن جريمته كانت مروعة ومفزعة، نعم، لكن دافعها لم يكن الجشع والنهب... بل كان اليأس الشديد. وبالنظر إلى السنوات الـ14 التي قضاها في السجن، فضلاً عن تعاونه الاستثنائي البارز مع أحد أهم التحقيقات التي يجريها هذا المكتب... فإننا نؤيد بقوة التماسه للإفراج المبكر عنه.",
    "vocabulary": [
      {
        "word": "unforgivable",
        "arabicMeaning": "لا يُغتفر ولا يُمحى ذنبه",
        "example": "Betraying a trusted friend's deepest secret is truly unforgivable."
      },
      {
        "word": "testify",
        "arabicMeaning": "يدلي بالشهادة أمام المحكمة",
        "example": "The eyewitness was subpoenaed to testify about the accident."
      },
      {
        "word": "parole",
        "arabicMeaning": "إفراج مشروط عن سجين قبل انتهاء محكوميته",
        "example": "After serving ten years of good behavior, he was granted parole."
      },
      {
        "word": "appalling",
        "arabicMeaning": "مروع / مفزع ومثير للاشمئزاز",
        "example": "The health inspector found appalling sanitation conditions in the kitchen."
      },
      {
        "word": "endorse",
        "arabicMeaning": "يؤيد رسمياً / يزكي التماساً",
        "example": "Several prominent newspapers endorsed her candidacy for mayor."
      }
    ],
    "notes": [
      {
        "term": "Let that pass",
        "type": "idiom",
        "explanation": "تعبير يعني التغاضي عن الأمر أو تركه يمر دون حساب أو عقاب."
      },
      {
        "term": "In exchange for",
        "type": "idiom",
        "explanation": "في مقابل كذا، صيغة مستخدمة في الصفقات والاتفاقيات القانونية (صفقة الإقرار/الشهادة)."
      }
    ],
    "wordCount": 133
  },
  {
    "id": 17,
    "paragraphNumber": 17,
    "english": "Rachel; Your father would be ashamed of you.\nFalcone: You're taller than you look in the tabloids, Mr. Wayne.\nNo g*n? I'm insuIted.\n-You could've just sent a thank-you note.\nBruce: I didn't come here to thank you.\nI came to show you that not everyone in Gotham's afraid of you.\nFalcone: Only those who know me, kid.\nLook around you. You'll see two councilmen...\n...a union official, couple off-duty cops...\n...and a judge.\nI wouldn't have a second's hesitation of blowing your head off in front of them.\nNow, that's power you can't buy.\nThat's the power of fear.\nBruce: I'm not afraid of you.\nFalcone: Because you think you got nothing to lose.\nBut you haven't thought it through.\nYou haven't thought about your lady friend in the DA's office.\nYou haven't thought about your old butler. Bang!",
    "arabicTranslation": "القاضي فادين: سيد تشيل؟\nتشيل: سيدي القاضي... لا يمر عليّ يوم دون أن أتمنى لو كان بمقدوري التراجع عن ما فعلته ومحوه. بالتأكيد، كنت يائسًا ومعدمًا مثل الكثير من الناس في تلك الأيام... لكن ذلك لا يغير فداحة ما اقترفته يداي.\nفادين: علمت أن أحد أفراد عائلة واين حاضر بيننا اليوم. هل لديه أي كلمة يود قولها؟\nامرأة 1: إنه يخرج من الباب الجانبي!\nرجل 1: إنه يخرج من الجانب يا شباب!\n[أصوات جلبة وصياح وازدحام]\nرجل 2: بروس واين!\nامرأة 2: جو! مرحبًا يا جو!\nالقاتلة المأجورة: فالكوني يبلغك تحياته!\n[دوي طلقات نارية]\n[صراخ وهلع بين الحشود]\nراشيل: هيا بنا يا بروس، لسنا بحاجة لرؤية هذا المشهد.\nبروس: بل أنا بحاجة إلى ذلك.",
    "vocabulary": [
      {
        "word": "take back",
        "arabicMeaning": "يسترجع أو يتراجع عن تصرف أو قول",
        "example": "Once you hit send, you cannot take back a harsh email."
      },
      {
        "word": "clamor",
        "arabicMeaning": "صخب وضجيج وجلبة عالية للجموع",
        "example": "The clamor of the angry protesters could be heard blocks away."
      },
      {
        "word": "gather",
        "arabicMeaning": "يستنتج / يصله علم بشيء",
        "example": "From his polite silence, I gather he did not enjoy the performance."
      },
      {
        "word": "desperate",
        "arabicMeaning": "يائس في فقر مدقع ومأزق حرج",
        "example": "Desperate families queued for hours in the freezing cold for emergency food."
      }
    ],
    "notes": [
      {
        "term": "Falcone says hi",
        "type": "cultural",
        "explanation": "رسالة الاغتيال المعتادة في عالم مافيا الجريمة المنظمة، حيث يقوم القاتل المأجور بنقل تحية الزعيم للضحية قبل إطلاق النار مباشرة."
      },
      {
        "term": "Take back",
        "type": "phrasal_verb",
        "explanation": "فعل مركب يعني التمني بالتراجع عما ارتكبه المرء وإلغائه."
      }
    ],
    "wordCount": 140
  },
  {
    "id": 18,
    "paragraphNumber": 18,
    "english": "People from your world...\n...have so much to lose.\nNow, you think because your mommy and your daddy got shot...\n...you know about the ugly side of life, but you don't.\nYou've never tasted desperate.\nYou're.... You're Bruce Wayne, the prince of Gotham.\nYou'd have to go 1000 miles to meet someone who didn't know your name.\nSo don't come here with your anger, trying to prove something to yourseIf.\nThis is a world you'll never understand.\nAnd you always fear...\n...what you don't understand.\nAll right.\nYeah, you got spirit, kid. I'll give you that.\nMore than your old man anyway.\nIn the joint, Chill told me about the night he k*lled your parents.\nHe said your father begged for mercy.\nBegged.\nLike a dog.\nHomeless man; Should've tipped better.\n-For what?\nBruce: Your jacket.\nOkay.",
    "arabicTranslation": "راشيل: لم يستطع المدعي العام أن يفهم لماذا أصر القاضي فادين على جعل الجلسة علنية أمام الجمهور... حتى اتضح أن فالكوني رشاه بالمال لإخراج تشيل إلى العلن وتصفيته!\nبروس: ربما يجدر بي شكرهم إذن.\nراشيل: أنت لا تعني ما تقوله حقًا!\nبروس: وماذا لو كنت أعنيه يا راشيل؟ والداي كانا يستحقان العدالة!\nراشيل: أنت لا تتحدث هنا عن العدالة، بل تتحدث عن الانتقام والتشفي!\nبروس: أحيانًا يكون الاثنان هما نفس الشيء.\nراشيل: كلا، ليسا متماثلين أبدًا على الإطلاق! العدالة تتعلق بتحقيق التناغم والتوازن... أما الانتقام فهو مجرد وسيلة لتجعل أنت نفسك تشعر بتحسن! ولهذا السبب تحديدًا لدينا نظام قضائي محايد!\nبروس: نظامكم القضائي هذا معطوب وفاسد حتى النخاع!\n[صرير إطارات السيارات وأبواق التنبيه]",
    "vocabulary": [
      {
        "word": "pay off",
        "arabicMeaning": "يرشو بالمال لشراء صمته أو ذمته",
        "example": "The corrupt developer attempted to pay off local zoning officials."
      },
      {
        "word": "in the open",
        "arabicMeaning": "في العلن / مكشوفاً أمام الجميع",
        "example": "The confidential documents were suddenly leaked out in the open."
      },
      {
        "word": "harmony",
        "arabicMeaning": "تناغم وتوافق متوازن",
        "example": "The new community project aims to foster racial and social harmony."
      },
      {
        "word": "impartial",
        "arabicMeaning": "محايد وغير منحاز لأي طرف",
        "example": "A trial judge must remain completely objective and impartial."
      },
      {
        "word": "broken",
        "arabicMeaning": "معطوب / فاشل ولا يعمل بشكل صحيح",
        "example": "Many citizens feel that the current healthcare system is deeply broken."
      }
    ],
    "notes": [
      {
        "term": "Pay off",
        "type": "phrasal_verb",
        "explanation": "فعل مركب يعني دفع رشوة لشخص (قاضٍ، شرطي، موظف) لتنفيذ مصلحة غير قانونية."
      },
      {
        "term": "Justice vs Revenge",
        "type": "cultural",
        "explanation": "الحوار الجوهري الذي يحدد الفارق الأخلاقي بين مفهوم بطل العدالة ومفهوم المنتقم الدموي في فلسفة باتمان."
      }
    ],
    "wordCount": 137
  },
  {
    "id": 19,
    "paragraphNumber": 19,
    "english": "Hey, hey, hey. Let me have it.\nIt's a nice coat.\nBruce: Be careful who sees you with that.\n-They're gonna come looking for me.\nHomeless man: -Who?\nBRUCE: Everyone.\nHomeless man: It's....\nIt's a nice coat.\nDUCARD: When you lived among the criminaIs, did you start to pity them?\nBRUCE: The first time I stole so that I wouldn't starve, yes.\nI lost many assumptions about the simple nature of right and wrong.\nAnd when I traveled...\n...I learned the fear before a crime...\n...and the thrill of success.\n[MAN SHOUTlNG lN MANDARlN]\nBRUCE: But I never became one of them.\n[OFFICER 1 SPEAKING MANDARlN]\nOFFICER 2: Fool. What do I care what your name is? You're a criminal.\n[SPEAKING MANDARIN] I'm not a criminal OFFICER 2: Tell that to the guy who owned these.",
    "arabicTranslation": "راشيل: هل تكترث للعدالة حقًا؟ انظر إلى ما هو أبعد من ألمك الخاص يا بروس! هذه المدينة تتعفن وتنهار. إنهم يتحدثون عن أزمة الكساد وكأنها أصبحت مجرد تاريخ وذكرى، لكنها ليست كذلك! الأمور هنا أسوأ من أي وقت مضى. فالكوني يغرق شوارعنا بالجريمة والمخدرات... يفترس اليائسين والمعدمين، ويخلق في كل يوم أمثالاً جديدة لجو تشيل! قد لا يكون فالكوني هو من قتل والديك يا بروس... لكنه يدمر كل ما كانا يقفان ويدافعان لأجله! هل تريد أن تشكره على ذلك؟! هاك مكانه، كلنا نعرف أين نجده. وطالما أنه يبقي على الأشرار أثرياء... وعلى الأخيار خائفين مرعوبين، فلن يجرؤ أحد على لمسه! الطيبون أمثال والديك، الذين كانوا يتصدون للظلم، رحلوا جميعًا! فأي أمل وأي فرصة تبقى لغوثام حين لا يحرك الأخيار ساكنًا؟\nبروس: أنا لست واحدًا من هؤلاء الأخيار يا راشيل.\nراشيل: ماذا تقصد؟\nبروس: طوال هذه السنوات، كنت أرغب في قتله بيدي. والآن لم يعد بإمكاني ذلك.\nراشيل: [تصفعه] والدك كان سيخجل منك لو كان حيًا!",
    "vocabulary": [
      {
        "word": "rotting",
        "arabicMeaning": "يتعفن / ينحدر في فساد مريع",
        "example": "Behind the gleaming skyscrapers lay neighborhoods rotting from urban neglect."
      },
      {
        "word": "flood",
        "arabicMeaning": "يغرق بكثرة هائلة (مجازياً)",
        "example": "Cheap counterfeit goods began to flood the domestic market."
      },
      {
        "word": "stand against",
        "arabicMeaning": "يتصدى ويقاوم الظلم بحزم",
        "example": "Brave dissidents risked everything to stand against authoritarian rule."
      },
      {
        "word": "ashamed",
        "arabicMeaning": "خجلان / يشعر بالعار من تصرف شخص",
        "example": "He felt deeply ashamed of his reckless behavior at the graduation party."
      }
    ],
    "notes": [
      {
        "term": "Look beyond your own pain",
        "type": "idiom",
        "explanation": "تعبير يعني الترفع عن الأنانية وملاحظة معاناة الآخرين ومأساة المجتمع ككل."
      },
      {
        "term": "When good people do nothing",
        "type": "cultural",
        "explanation": "اقتباس لقول إدموند بيرك الشهير: 'الشيء الوحيد الضروري لانتصار الشر هو ألا يفعل الأخيار شيئاً'."
      }
    ],
    "wordCount": 136
  },
  {
    "id": 20,
    "paragraphNumber": 20,
    "english": "DUCARD: You've traveled the world to understand the criminal mind...\n...and conquer your fears.\nBut a criminal is not complicated.\nAnd what you really fear is inside yourseIf.\nYou fear your own power.\nYou fear your anger...\n...the drive to do great or terrible things.\nNow you must journey inwards.\nYou are ready.\nBreathe.\nBreathe in your fears.\nFace them.\nTo conquer fear, you must become fear.\nYou must bask in the fear of other men.\nAnd men fear most what they cannot see.\nYou have to become a terrible thought.\nA wraith.\nYou have to become an idea!\nFeel terror cloud your senses.\nFeel its power to distort.\nTo control.\nAnd know that this power can be yours.\nEmbrace your worst fear.\nBecome one with the darkness.\n[BATS SQUEAKlNG]\nFocus.\nConcentrate.\nMaster your senses.\nYou cannot leave any sign.",
    "arabicTranslation": "فالكوني: أنت أطول مما تبدو عليه في صحف الفضائح الشعبية يا سيد واين. بدون سلاح؟ أنا ممتعض وأشعر بالإهانة! كان يمكنك فقط أن ترسل لي بطاقة شكر.\nبروس: لم آتِ إلى هنا لأشكرك، بل جئت لأريك أن ليس كل فرد في غوثام يرتجف خوفًا منك.\nفالكوني: فقط أولئك الذين يعرفونني حقًا هم من يخافون يا فتى. انظر حولك جيدا: سترى هنا عضوين من مجلس المدينة... ومسؤولًا نقابيًا، واثنين من ضباط الشرطة خارج نوبة خدمتهم... وقاضيًا بالمحكمة! لن يتردد عقلي لثانية واحدة في تفجير رأسك أمامهم جميعًا دون أدنى خشية. تلك هي القوة الحقيقية التي لا يمكنك شراؤها بالمال... إنها قوة الخوف!\nبروس: أنا لست خائفًا منك.\nفالكوني: لأنك تتوهم أن ليس لديك ما تخسره! لكنك لم تحسب الأمر جيدًا وتفكر فيه بعمق.",
    "vocabulary": [
      {
        "word": "tabloid",
        "arabicMeaning": "صحف الإثارة والفضائح الشعبية",
        "example": "The celebrity scandal made front-page headlines across every tabloid in town."
      },
      {
        "word": "councilman",
        "arabicMeaning": "عضو المجلس البلدي للمدينة",
        "example": "The local councilman promised to fix the neighborhood's damaged roads."
      },
      {
        "word": "union official",
        "arabicMeaning": "مسؤول نقابي / ممثل اتحاد العمال",
        "example": "The union official negotiated higher wages for the factory staff."
      },
      {
        "word": "blow your head off",
        "arabicMeaning": "يفجر رأسك بالرصاص (تعبير تهديد عنيف)",
        "example": "The mob boss threatened to blow his rival's head off if he betrayed him."
      }
    ],
    "notes": [
      {
        "term": "Blow (one's) head off",
        "type": "slang",
        "explanation": "تعبير عصابات عامي عنيف يعني إطلاق النار على الرأس مباشرة للقتل الفوري."
      },
      {
        "term": "Off-duty cops",
        "type": "cultural",
        "explanation": "رجال شرطة في غير أوقات دوامهم الرسمي، واستخدام فالكوني لهم يبين مدى تغلغل فساده في سلك الشرطة."
      }
    ],
    "wordCount": 140
  },
  {
    "id": 21,
    "paragraphNumber": 21,
    "english": "BRUCE: I haven't.\nRa’s Al ghul: Impressive.\n[SPEAKING FOREIGN LANGUAGE]\nDUCARD [TRANSLATING]: We have purged your fear.\nYou are ready to lead these men.\nYou are ready to become a member of the League of Shadows.\nBut first, you must demonstrate your commitment to justice.\n[SPEAKS FOREIGN LANGUAGE]\nBruce: No.\nI'm no executioner.\nDUCARD: Your compassion is a weakness your enemies will not share.\nBruce: That's why it's so important.\nIt separates us from them.\nDucard: You want to fight criminaIs. This man is a m*rder*r.\nBruce: This man should be tried.\nDUCARD: By whom?\nCorrupt bureaucrats?\nCriminaIs mock society's laws.\nYou know this better than most.\nRA'S A GHUL: You cannot lead these men...\n...unless you are prepared to do what is necessary to defeat evil.\nBruce: And where would I be leading these men?\nRa’d Al ghul; Gotham.",
    "arabicTranslation": "لم تفكر في صديقتك الفاتنة في مكتب المدعي العام، ولم تفكر في خادمك العجوز المخلص! طلقة واحدة... بوم! الناس الذين ينتمون إلى عالمك المخملي... لديهم الكثير جدًا ليخسروه. الآن تظن أنك لمجرد أن أمك وأباك قد قُتلا بالرصاص، أنك تعرف الوجه القبيح للحياة، لكنك لا تعرف شيئًا! أنت لم تتذوق طعم اليأس الحقيقي قط. أنت... أنت بروس واين، أمير غوثام المدلل! سيتعين عليك السفر ألف ميل لتلتقي بشخص واحد لا يعرف اسمك. لذا لا تأتِ إلى هنا حاملاً غضبك محاولاً إثبات شيء لنفسك. هذا عالم لن تفهمه أبدًا... والإنسان دائمًا يخاف... مما يعجز عن فهمه.\nحسنًا، نعم، لديك روح وثبات وعناد يا فتى، أعترف لك بذلك، أكثر مما كان لدى والدك العجوز على أي حال. في السجن، أخبرني تشيل عن الليلة التي قتل فيها والديك... قال إن أباك توسل من أجل الرحمة... توسل ككلب ذليل!",
    "vocabulary": [
      {
        "word": "thought it through",
        "arabicMeaning": "فكر في الأمر بعمق ودراسة لكل العواقب",
        "example": "Before resigning from your corporate post, make sure you have thought it through."
      },
      {
        "word": "butler",
        "arabicMeaning": "كبير الخدم في المنازل الفاخرة",
        "example": "The polite butler greeted the dinner guests and took their coats."
      },
      {
        "word": "the joint",
        "arabicMeaning": "السجن (مصطلح عامي دارج)",
        "example": "He served three years in the joint before being released on parole."
      },
      {
        "word": "beg for mercy",
        "arabicMeaning": "يتوسل طلباً للرحمة والعفو",
        "example": "The defeated gladiator raised his hand to beg for mercy from the emperor."
      }
    ],
    "notes": [
      {
        "term": "The joint",
        "type": "slang",
        "explanation": "مصطلح عامي أمريكي شهير بين المجرمين للإشارة إلى السجن."
      },
      {
        "term": "Taste desperate",
        "type": "idiom",
        "explanation": "تعبير بلاغي يعني معايشة الفقر والجوع والقهر الحقيقي حتى أقصى درجاته."
      }
    ],
    "wordCount": 140
  },
  {
    "id": 22,
    "paragraphNumber": 22,
    "english": "As Gotham's favored son...\n...you will be ideally placed to strike at the heart of criminality.\nBruce: How?\nDucard: Gotham's time has come.\nLike Constantinople or Rome before it...\n...the city has become a breeding ground for suffering and injustice.\nIt is beyond saving and must be allowed to die.\nThis is the most important function of the League of Shadows.\nIt is one we've performed for centuries.\nGotham...\n...must be destroyed.\nBruce: You can't believe in this.\nDucard: Ra's al Ghul rescued us from the darkest corners of our own hearts.\nWhat he asks in return is the courage to do what is necessary.\nBruce; I will go back to Gotham and I will fight men like this...\n...but I will not become an executioner.\nDucard; Bruce, please.\nFor your own sake, there is no turning back.",
    "arabicTranslation": "[بروس يخرج مذهولاً ثم يلقي سلاحه في البحر ويقترب من رجل مشرد]\nالرجل المشرد: كان يجدر بك أن تمنحه إكرامية أكبر.\n- مقابل ماذا؟\nبروس: مقابل سترتك هذه.\nحسناً.\nمهلاً، مهلاً، مهلاً، دعني آخذها. إنها معطف جميل وفاخر.\nبروس: كن حذرًا بشأن من يراك مرتديًا إياه... فسوف يأتون للبحث عني.\nالرجل المشرد: - من؟\nبروس: الجميع.\nالرجل المشرد: إنه... إنه معطف فاخر بحق.\nدوكارد: حين عشت بين المجرمين والمعدمين، هل بدأت تشعر بالشفقة والرأفة تجاههم؟\nبروس: في أول مرة سرقت فيها طعاماً كي لا أموت جوعًا... نعم. لقد فقدت العديد من افتراضاتي المسبقة عن الطبيعة البسيطة للخير والشر. وحين ارتحلت وجبت العالم... تعلمت الخوف الذي يسبق ارتكاب الجريمة... ونشوة الإثارة والظفر بالنجاح.",
    "vocabulary": [
      {
        "word": "tip",
        "arabicMeaning": "يعطي إكرامية / بقشيش",
        "example": "We always tip the delivery driver generously on rainy nights."
      },
      {
        "word": "assumptions",
        "arabicMeaning": "افتراضات وتصورات مسبقة غير مثبتة",
        "example": "Never base your final business strategy on unverified assumptions."
      },
      {
        "word": "starve",
        "arabicMeaning": "يموت من الجوع والمهلكة",
        "example": "Without international relief supplies, thousands of famine victims would starve."
      },
      {
        "word": "thrill",
        "arabicMeaning": "نشوة الإثارة الشديدة والحماس",
        "example": "Bungee jumping gave him an unforgettable rush and thrill."
      }
    ],
    "notes": [
      {
        "term": "Right and wrong",
        "type": "idiom",
        "explanation": "تعبير يعني التمييز الأخلاقي بين الصواب والخطأ، وقد أدرك بروس أنه ليس دائماً ثنائياً أبيض وأسود."
      },
      {
        "term": "Come looking for",
        "type": "phrasal_verb",
        "explanation": "البحث والتعقب لشخص ما من أجل العثور عليه."
      }
    ],
    "wordCount": 138
  },
  {
    "id": 23,
    "paragraphNumber": 23,
    "english": "-What are you doing?\nBruce: What's necessary, my friend.\n[EXPLOSIONS]\n[BRUCE SCREAMING]\nI will tell him you saved his life.\nAlfred; Master Wayne, you've been gone a long time.\nBruce: Yes, I have.\nAlfred: You look very fashionable.\nApart from the mud.\nAre you coming back to Gotham for long, sir?\nBruce: As long as it takes.\nI want to show the people...\n...their city doesn't belong to the criminaIs and the corrupt.\nAlfred: In the depression, your father nearly bankrupted Wayne Enterprises...\n...combating poverty.\nHe believed his example could inspire the weaIthy of Gotham to save their city.\nBruce: Did it?\nAlfred: In a way.\nTheir m*rder shocked the weaIthy and the powerful into action.\nBruce: People need dramatic examples to shake them out of apathy.\nI can't do that as Bruce Wayne.\nAs a man...",
    "arabicTranslation": "[رجل يصيح باللغة الماندرينية الصينية]\nبروس: لكني لم أصبح قط واحداً منهم.\n[الضابط 1 يتحدث بالصينية]\nالضابط 2: أيها الأحمق، وما الذي يهمني ما هو اسمك؟ أنت مجرد لص ومجرم.\n[بروس بالصينية]: أنا لست مجرماً.\nالضابط 2: قل هذا للرجل الذي كان يملك هذه الأغراض المسروقة!\nدوكارد: لقد طفت أرجاء العالم لتفهم العقلية الإجرامية... ولتقهر وتنتصر على مخاوفك. لكن المجرم ليس لغزاً معقداً. وما تخاف منه حقاً يقبع في داخلك أنت. أنت تخاف من قوتك الخاصة، وتخاف من غضبك الدفين... ذلك الدافع الجارف لفعل أشياء عظيمة أو مروعة. الآن عليك أن تخوض الرحلة إلى الداخل. أنت جاهز. تنفس... تنفس مخاوفك بعمق. واجهها بشجاعة. ولكي تقهر الخوف وتنتصر عليه، يجب عليك أن تصبح أنت الخوف ذاته! يجب أن تسبح في بحر خوف الآخرين. والناس يخشون أكثر ما يعجزون عن رؤيته بالعين المجردة.",
    "vocabulary": [
      {
        "word": "conquer",
        "arabicMeaning": "يقهر وينتصر على / يخضع بالكامل",
        "example": "She worked diligently with her therapist to conquer her fear of heights."
      },
      {
        "word": "drive",
        "arabicMeaning": "حافز وطاقة داخلية دافعة وموجهة",
        "example": "His unrelenting drive to excel made him the top student in his class."
      },
      {
        "word": "inwards",
        "arabicMeaning": "إلى الداخل (نحو النفس وأعماق الروح)",
        "example": "Meditation teaches you to turn your focus inwards away from external distractions."
      },
      {
        "word": "bask",
        "arabicMeaning": "يستمتع بالانغماس / يتدفأ بالسطوع",
        "example": "The reptiles love to bask on warm rocks under the midday sun."
      }
    ],
    "notes": [
      {
        "term": "Journey inwards",
        "type": "idiom",
        "explanation": "تعبير روحي وفلسفي يعني فحص أعماق النفس ومواجهة الحقائق والمشاعر الدفينة."
      },
      {
        "term": "To conquer fear, you must become fear",
        "type": "cultural",
        "explanation": "المعادلة الفلسفية التي شكلت تحول بروس واين من مجرد مقاتل إلى رمز الرعب للمجرمين (باتمان)."
      }
    ],
    "wordCount": 137
  },
  {
    "id": 24,
    "paragraphNumber": 24,
    "english": "...I'm flesh and blood, I can be ignored, destroyed.\nBut as a symbol....\nAs a symbol, I can be incorruptible.\n-I can be everlasting.\nAlfred: What symbol?\nBruce: Something elemental...\n...something terrifying.\nAlfred: I assume that as you take on the underworld...\n...this symbol is a persona to protect those you care about from reprisaIs?\nBruce: You're thinking about Rachel?\nAlfred: Actually, sir, I was thinking of myseIf.\nBruce: Have you told anyone I'm coming back?\nAlfred: I couldn't figure the legal ramifications of bringing you back from the dead.\nBruce: Dead?\nAlfred: You've been gone seven years.\nBruce: You had me declared dead?\nAlfred: Actually, it was Mr. Earle. He's taking the company public.\nHe wanted to liquidate your majority shareholding.\nThose shares are worth quite a bit of money.",
    "arabicTranslation": "يجب أن تتحول إلى فكرة مروعة ترعب الأعداء... إلى شبح طائف لا يُرى. يجب أن تصبح فكرة ومبدأ مجسدًا! اشعر بالرعب وهو يغشى حواسك ويغيمها. اشعر بقوته الهائلة على التشويه... والسيطرة والتوجيه. واعلم يقيناً أن هذه القوة يمكن أن تكون ملك يديك. عانق أسوأ مخاوفك، وتوحد مع حلكة الظلام.\n[صرير الخفافيش المفزع]\nركز... اجمع شتات ذهنك. أحكم السيطرة على حواسك. يجب ألا تترك وراءك أي أثر أو دليل.\nبروس: لم أترك أي أثر.\nرأس الغول: هذا أمر مذهل ومثير للإعجاب.\n[يتحدث بلغة أجنبية]\nدوكارد [مترجمًا]: لقد طهرنا خوفك واجتثثناه من جذوره. وأنت الآن مستعد لقيادة هؤلاء الرجال، ومستعد لتصبح عضواً كاملاً في عصبة الظلال. ولكن أولاً، يجب عليك أن تثبت وتبرهن على التزامك الراسخ بالعدالة.",
    "vocabulary": [
      {
        "word": "wraith",
        "arabicMeaning": "شبح أو طيف خفي هائم",
        "example": "In ancient folklore, the lonely castle was said to be haunted by a weeping wraith."
      },
      {
        "word": "distort",
        "arabicMeaning": "يشوه ويحرف الحقيقة أو الإدراك",
        "example": "Extreme bias can distort a person's perception of undeniable facts."
      },
      {
        "word": "embrace",
        "arabicMeaning": "يعانق ويتقبل برحابة صدر",
        "example": "Successful leaders learn to embrace change rather than resist it."
      },
      {
        "word": "purge",
        "arabicMeaning": "يطهر تماماً وينقي من الشوائب",
        "example": "The ascetic underwent a severe fast to purge impurities from his body."
      },
      {
        "word": "commitment",
        "arabicMeaning": "التزام وتعهد راسخ",
        "example": "Her long-term commitment to environmental conservation inspired many youth."
      }
    ],
    "notes": [
      {
        "term": "Cloud your senses",
        "type": "idiom",
        "explanation": "استعارة تعني تشويش الحواس والقدرة على التفكير السليم بفعل الهلع الشديد."
      },
      {
        "term": "Become one with",
        "type": "idiom",
        "explanation": "الاندماج التام والتوحد الروحي أو الحركي مع شيء (مثل الظلام)."
      }
    ],
    "wordCount": 131
  },
  {
    "id": 25,
    "paragraphNumber": 25,
    "english": "Bruce: Well, it's a good thing I left everything to you, then.\nAlfred: Quite so, sir.\nAnd you can borrow the RolIs, if you like. Just bring it back with a full tank.\nCrane: In my opinion, Mr. Zsaz is as much a danger to himseIf as to others...\n...and prison is probably not the best environment for his rehabilitation.\nRachel: Dr. Crane.\nCrane: Miss Dawes.\nRachel: You think a man who butchers people for the mob doesn't belong in jail?\nCrane: I would hardly have testified to that otherwise, would I?\nRachel: This is the third of Falcone's th*gs you've had declared insane...\n...and moved into your asylum.\nCrane; The work offered by organized crime must have an attraction to the insane.\nRachel: Or the corrupt.\nCrane: Mr. Finch.\nYou should check with Miss Dawes here...",
    "arabicTranslation": "[رأس الغول يشير بيده نحو السجين المقيد بسيف الإعدام]\n[يتحدث بلغة أجنبية]\nبروس: كلا. أنا لست جلادًا يقطع الرؤوس.\nدوكارد: إن شفقتك ورحمتك هذه هي نقطة ضعف لن يشاطرك إياها أعداؤك أبدًا.\nبروس: ولهذا السبب تحديدًا هي في غاية الأهمية والقداسة... لأنها الشيء الوحيد الذي يفصلنا عنهم ويميزنا عن وحشيتهم!\nدوكارد: أنت تريد قتال المجرمين، وهذا الرجل قاتل مجرم.\nبروس: هذا الرجل يجب أن يُحاكم وفق القانون وأمام المحكمة.\nدوكارد: ومَن سيحاكمه؟ بيروقراطيون فاسدون ومرتشون؟ إن المجرمين يسخرون من قوانين المجتمع الهشة. وأنت تدرك هذه الحقيقة أفضل من معظم الناس.\nرأس الغول: لا يمكنك قيادة هؤلاء الرجال... ما لم تكن مستعدًا لفعل كل ما هو ضروري وحتمي لدحر الشر وهزيمته.\nبروس: وإلى أين كنت سأقود هؤلاء الرجال بالضبط؟\nرأس الغول: إلى غوثام!",
    "vocabulary": [
      {
        "word": "executioner",
        "arabicMeaning": "جلاد / منفذ أحكام الإعدام",
        "example": "In medieval times, the hooded executioner carried out capital punishments."
      },
      {
        "word": "compassion",
        "arabicMeaning": "الشفقة والرحمة الإنسانية",
        "example": "True strength is shown through compassion toward those in distress."
      },
      {
        "word": "bureaucrat",
        "arabicMeaning": "موظف بيروقراطي روتيني",
        "example": "The small business owner was frustrated by endless delays caused by bureaucrats."
      },
      {
        "word": "mock",
        "arabicMeaning": "يسخر ويستهزئ بقوانين أو أشخاص",
        "example": "Disrespectful drivers mock traffic laws when police officers are not around."
      }
    ],
    "notes": [
      {
        "term": "Separates us from them",
        "type": "idiom",
        "explanation": "الخط الفاصل الأخلاقي الذي يمنع البطل من الانحدار إلى نفس وحشية أعدائه."
      },
      {
        "term": "Better than most",
        "type": "idiom",
        "explanation": "تعبير يعني إدراك الأمر بحكم التجربة الشخصية العميقة أكثر من عامة الناس."
      }
    ],
    "wordCount": 137
  },
  {
    "id": 26,
    "paragraphNumber": 26,
    "english": "...just what implications your office has authorized her to make. If any.\nFinch: What are you doing?\nRachel: What are you doing, Carl?\nFINCH: Looking out for you.\nRachel; Falcone has haIf the city bought and paid for.\n-Drop it.\nRachel: How can you say that?\nFinch: Because as much as I care about getting Falcone, I care more about you.\nRachel: That's sweet.\n[SIRENS WAlLlNG]\nWe've been through all that.\n[BAT SQUEAKlNG]\nALFRED: Blessed bat again, sir.\nThey nest somewhere in the grounds.\n[BATS SQUEAKlNG]\nCrane: No more favors. Someone is sniffing around.\nFalcone: Hey, I scratch your back, you scratch mine, doc.\nI'm bringing in the shipments.\nCrane: We are paying you for that.\nFalcone: Maybe money isn't as interesting to me as favors.",
    "arabicTranslation": "بصفتك الابن المفضل والوريث الأبرز لغوثام... ستكون في الموقع المثالي لتوجيه ضربة قاصمة إلى قلب عالم الجريمة المنظمة.\nبروس: وكيف ذلك؟\nدوكارد: لقد حان أجل غوثام وأزفت ساعتها! تماماً كما حدث مع القسطنطينية وروما من قبلها... أضحت هذه المدينة بؤرة حاضنة ومرتعاً للمعاناة والظلم المستشري. لقد باتت عصية على أي إنقاذ أو إصلاح، ويجب السماح لها بأن تموت وتندثر. هذه هي المهمة الأكثر أهمية وجوهرية لعصبة الظلال، وهي مهمة قمنا بتأديتها على مدى قرون طويلة. يجب تدمير غوثام ومحوها!\nبروس: لا يمكن أن تؤمن بهذا الجنون حقًا!\nدوكارد: رأس الغول أنقذنا وانتشلنا من أظلم زوايا قلوبنا الحزينة، وما يطلبه منا في المقابل هو التحلي بالشجاعة لفعل ما هو ضروري ومحتوم.",
    "vocabulary": [
      {
        "word": "favored son",
        "arabicMeaning": "الابن البار والمفضل للمدينة / رمز الفخر",
        "example": "The Olympic champion was celebrated as the town's most favored son."
      },
      {
        "word": "breeding ground",
        "arabicMeaning": "مرتع خصب وبؤرة لتكاثر شيء سيء",
        "example": "Extreme poverty and neglect create a fertile breeding ground for crime."
      },
      {
        "word": "beyond saving",
        "arabicMeaning": "عصي على الإنقاذ والإصلاح / ميؤوس منه",
        "example": "The old wooden bridge was structurally compromised and beyond saving."
      },
      {
        "word": "strike at the heart",
        "arabicMeaning": "يوجه ضربة في الصميم والمقتل",
        "example": "The undercover raid managed to strike at the heart of the smuggling network."
      }
    ],
    "notes": [
      {
        "term": "Time has come",
        "type": "idiom",
        "explanation": "تعبير يعني حلول الأجل أو لحظة الحسم والقدر."
      },
      {
        "term": "Breeding ground",
        "type": "idiom",
        "explanation": "استعارة مأخوذة من علم الأحياء تعني البيئة الخصبة لانتشار الفساد أو الأمراض."
      }
    ],
    "wordCount": 126
  },
  {
    "id": 27,
    "paragraphNumber": 27,
    "english": "Crane: I am more than aware that you are not intimidated by me, Mr. Falcone.\nBut you know who I'm working for, and when he gets here--\nFalcone: He-- He's coming to Gotham?\nCrane; Yes, he is.\nAnd when he gets here, he's not going to wanna hear...\n...that you've endangered our operation just to get your th*gs out of jail time.\n-Falcone: Who's bothering you?\nCrane: There's a girl at the DA's office.\n-We'll buy her off.\nCrane: Not this one.\nFalcone:,Idealist, huh?\nWell, there's an answer to that too.\n-I don't want to know. -Yes, you do.\nMAN: No, we are showing very heaIthy growth in these sectors.\nI don't think Thomas Wayne would have viewed heavy-arms manufacture...\n...as a suitable cornerstone for our business.\nWell, that's 20 years ago, Fredericks.",
    "arabicTranslation": "بروس: سأعود أدراجي إلى غوثام وسأقاتل رجالاً مثل هذا... لكني لن أتحول إلى جلاد وسفاح!\nدوكارد: بروس، أرجوك... من أجل مصلحتك أنت وسلامتك، ليس هناك أي مجال للرجوع إلى الوراء الآن!\n- ما الذي تفعله؟!\nبروس: ما هو ضروري ومحتوم يا صديقي.\n[دوي انفجارات مروعة وتفجير البارود]\n[صراخ بروس وسط ألسنة اللهب]\n[بروس ينقذ دوكارد من حافة الهاوية ويسلمه لأحد القرويين]: سأخبره بأنك أنت من أنقذت حياته.\nألفريد: سيد واين، لقد غبت عنا لوقت طويل للغاية.\nبروس: نعم يا ألفريد، لقد غبت بالفعل.\nألفريد: تبدو أنيقاً وعصرياً جداً في ثيابك... باستثناء طبقة الوحل هذه! هل أنت عائد إلى غوثام لتبقى فيها طويلاً يا سيدي؟\nبروس: للمدة التي يستغرقها الأمر مهما طالت. أريد أن أثبت للناس... أن مدينتهم لا تخص المجرمين والفاسدين.",
    "vocabulary": [
      {
        "word": "turning back",
        "arabicMeaning": "الرجوع أو التراجع عن المسار",
        "example": "Once we signed the final contract, there was no turning back."
      },
      {
        "word": "fashionable",
        "arabicMeaning": "أنيق ومواكب للموضة",
        "example": "She wore a chic, fashionable wool coat during Paris Fashion Week."
      },
      {
        "word": "for your own sake",
        "arabicMeaning": "من أجل مصلحتك وسلامتك الشخصية",
        "example": "Please wear a helmet while cycling, if only for your own sake."
      },
      {
        "word": "as long as it takes",
        "arabicMeaning": "مهما استغرق الأمر من وقت وجهد",
        "example": "I will keep practicing the piano piece for as long as it takes to master it."
      }
    ],
    "notes": [
      {
        "term": "No turning back",
        "type": "idiom",
        "explanation": "تعبير اصطلاحي يعني نقطة اللاعودة حيث يتعذر التراجع عن القرار المتخذ."
      },
      {
        "term": "As long as it takes",
        "type": "idiom",
        "explanation": "صيغة التزام قاطعة تعني البقاء حتى إنجاز المهمة أياً كانت الصعوبات والوقت."
      }
    ],
    "wordCount": 133
  },
  {
    "id": 28,
    "paragraphNumber": 28,
    "english": "I think after 20 years we can allow ourselves...\n...to stop thinking about what Thomas Wayne would have done.\nJESSlCA: Good morning, Mr. Earle's office.\nYes, he's confirmed for the dinner tomorrow evening.\nBRUCE: Good morning. I'm here to see Mr. Earle.\nJessica: Name?\nBruce: Bruce Wayne.\nThomas would probably not have taken the company public.\nBut that is what we, as responsible managers, are going to do.\nEarle: Jessica?\nJessica? Where are you?\nBRUCE: Eye on the ball, and...\nEarle: Why is no one answering the phone?\nBruce; It's Wayne Enterprises, Mr. Earle. I'm sure they'll call back.\nEarle: Bruce? You're supposed to be dead.\nBruce: I'm sorry to disappoint.\n-I need you to take a look at this. -Have you seen him yet?\nRachel: Who? -\nFinch: Wayne.\nIt's been all over the news. He's back.",
    "arabicTranslation": "ألفريد: خلال فترة الكساد، أوشك والدك على إفلاس شركة 'واين إنتربرايزز' في سبيل مكافحة الفقر. لقد كان يؤمن بأن قدوته الصالحة يمكن أن تلهم أثرياء غوثام لإنقاذ مدينتهم.\nبروس: وهل نجح في ذلك؟\nألفريد: بنوعٍ ما... لقد صدم مقتلهما الأثرياء وذوي النفوذ ودفعهم إلى التحرك.\nبروس: الناس بحاجة إلى أمثلة ورموز درامية صارخة لتوقظهم وتنتشلهم من سبات اللامبالاة والتخاذل. ولا يمكنني فعل ذلك بصفتي بروس واين. كإنسان... أنا مجرد لحم ودم، يمكن تجاهلي وسحقي وتدميري. ولكن كرمز... كرمز، يمكنني أن أكون عصيًا على الفساد، وخالداً لا يفنى.\nألفريد: وأي رمز هذا؟\nبروس: شيء جوهري وطبيعي نابع من الأعماق... شيء يبعث الرعب والهلع في النفوس.\nألفريد: أفترض أنك وأنت تخوض معركتك ضد عالم الجريمة السفلي... فإن هذا الرمز سيكون قناعاً وشخصية لحماية من تكترث لأمرهم من الانتقام؟\nبروس: هل تفكر في راشيل؟\nألفريد: في الواقع يا سيدي، كنت أفكر في نفسي أنا!",
    "vocabulary": [
      {
        "word": "apathy",
        "arabicMeaning": "اللامبالاة والتخاذل والتبلد",
        "example": "Widespread political apathy resulted in extremely low voter turnout."
      },
      {
        "word": "flesh and blood",
        "arabicMeaning": "لحم ودم (كناية عن الضعف البشري وقابلية الفناء)",
        "example": "After all, I am only flesh and blood; I make mistakes like anyone else."
      },
      {
        "word": "incorruptible",
        "arabicMeaning": "عصي على الفساد / نزيه تماماً لا يُشترى",
        "example": "The lead investigator was famous for being completely incorruptible."
      },
      {
        "word": "reprisals",
        "arabicMeaning": "أعمال انتقامية وثأرية مضادة",
        "example": "Whistleblowers often fear violent reprisals from corrupt corporations."
      }
    ],
    "notes": [
      {
        "term": "Flesh and blood",
        "type": "idiom",
        "explanation": "تعبير يعني الضعف الطبيعي للإنسان وقابليته للزوال في مقابل الأفكار والرموز الخالدة."
      },
      {
        "term": "Shake out of apathy",
        "type": "idiom",
        "explanation": "إيقاظ الناس من غفلتهم وتحفيزهم على التغيير الإيجابي بعد ركود طويل."
      }
    ],
    "wordCount": 138
  },
  {
    "id": 29,
    "paragraphNumber": 29,
    "english": "EARLE: I'm sure you realize I can't stop the big machine.\nToo many wheeIs turning.\n-We're going public.\nBruce: I understand.\nAnd I'll be handsomely rewarded for my shares.\nI'm not looking to interfere.\n-I am looking for a job.\nEarle; Oh?\nBruce; I just want to get to know the company that my family buiIt.\nAny ideas where you would start?\nBruce: Applied Sciences caught my eye.\nEarle: Fox's department.\nI'll let him know you're coming.\nYou look like him. Your dad.\nYou're the only one left of the Wayne family.\nThis is where you belong. Welcome home.\nLucius Fox: Environmental procedures, defense projects, consumer products.\nAll prototypes. None in production.\n-On any level whatsoever.\nBruce; None?\nFox: What did they tell you this place was?\nBRUCE: They didn't tell me anything.",
    "arabicTranslation": "بروس: هل أخبرت أي شخص بأنني عائد؟\nألفريد: عجزت عن تدبر العواقب والتعقيدات القانونية لإعادتك من بين صفوف الموتى!\nبروس: أموات؟\nألفريد: لقد غبت عن الأنظار لسبع سنوات كاملة.\nبروس: هل أعلنتم وفاتي رسميًا؟!\nألفريد: في الحقيقة، كان ذلك تصرف السيد إيرل، فهو يطرح الشركة للاكتتاب العام في البورصة، وأراد تصفية حصة الأغلبية التي تملكها من الأسهم. وتلك الأسهم تساوي مبلغاً طائلاً من المال.\nبروس: حسنًا، من الجيد إذن أنني تركت كل شيء في وصيتي لك أنت!\nألفريد: تمامًا يا سيدي! ويمكنك استعارة سيارة الرولز رويس إن رغبت، فقط أعدها وخزان الوقود ممتلئ!\nالدكتور كرين: في رأيي الشخصي، السيد زاز يمثل خطراً على نفسه كما يمثل خطراً على الآخرين... وربما لا يكون السجن البيئة المثلى لإعادة تأهيله وتقويمه.\nراشيل: دكتور كرين!\nكرين: آنسة دوز.\nراشيل: هل تعتقد أن رجلاً يذبح الناس بدم بارد لصالح عصابات المافيا لا مكان له في السجن؟",
    "vocabulary": [
      {
        "word": "legal ramifications",
        "arabicMeaning": "العواقب والتبعات القانونية المعقدة",
        "example": "You should consult an attorney to understand the legal ramifications of the contract."
      },
      {
        "word": "go public",
        "arabicMeaning": "طرح أسهم الشركة للاكتتاب العام في البورصة",
        "example": "The tech startup plans to go public on the stock exchange next autumn."
      },
      {
        "word": "liquidate",
        "arabicMeaning": "يصفي أسهمًا أو أصولاً مالية ويحولها لنقد",
        "example": "The company had to liquidate some assets to pay off mounting debts."
      },
      {
        "word": "rehabilitation",
        "arabicMeaning": "إعادة تأهيل وإصلاح سلوك سجين",
        "example": "Modern correctional facilities focus more on education and rehabilitation."
      }
    ],
    "notes": [
      {
        "term": "Back from the dead",
        "type": "idiom",
        "explanation": "تعبير مجازي وقانوني يشير إلى عودة شخص تم إعلان وفاته رسمياً بسبب غيابه الطويل."
      },
      {
        "term": "Full tank",
        "type": "informal",
        "explanation": "خزان وقود ممتلئ تماماً، تعليق طريف من ألفريد يضفي لمسة فكاهة إنجليزية راقية."
      }
    ],
    "wordCount": 133
  },
  {
    "id": 30,
    "paragraphNumber": 30,
    "english": "Fox: Earle told me exactly what it was when he sent me down here.\nDead end.\nPlace to keep me from causing the board any more trouble.\nCome on.\nBruce: You were on the board?\nFox: When your father ran things.\nBruce: You knew my father?\nFox: Oh, yeah.\nHelped him build his train.\nHere we are.\nKevlar utility harness.\nGas-powered, magnetic grapple g*n.\nThe 350-pound test monofilament.\nWonderful project, your dad's train.\nRouted it right into Wayne Tower, along with the water and power utilities.\nKind of made Wayne Tower the unofficial center of Gotham City.\nOf course, Earle let it go to rot. Here we are.\nNomex survival suit for advanced infantry.\nKevlar biweave, reinforced joints.\nBruce: Tear-resistant?\nFox; This sucker will stop a knife.\nBruce: Bulletproof?\nFox: Anything but a straight shot.",
    "arabicTranslation": "كرين: لم أكن لأدلي بشهادتي مؤكداً ذلك لولا أنني أراه حقاً، أليس كذلك؟\nراشيل: هذا هو الشقي الثالث من سفاحي فالكوني الذي تجعله يُعلن غير سليم العقل ومجنوناً... وتنقله إلى مصحتك العقلية!\nكرين: لا شك أن العمل الذي تقدمه الجريمة المنظمة يحمل جاذبية خاصة لفاقدي العقل.\nراشيل: أو للفاسدين المرتشين!\nكرين: سيد فينش... يجدر بك أن تراجع الآنسة دوز هنا، لتعرف بالضبط ما هي التلميحات والاتهامات التي فوضها مكتبك لإطلاقها بحقي، إن وُجد أي تفويض أصلاً.\nفينش: ما الذي تفعلينه يا راشيل؟\nراشيل: بل ما الذي تفعله أنت يا كارل؟!\nفينش: إنني أرعى مصلحتك وأحميك! فالكوني قد اشترى نصف هذه المدينة ودفع ثمن ذمم مسؤوليها مسبقاً! دعي هذا الأمر واصرفي النظر عنه!\nراشيل: كيف يمكنك أن تقول ذلك؟!\nفينش: لأنني بقدر ما أكترث للإيقاع بفالكوني، فإنني أكترث لأمرك أنت وسلامتك أكثر بكثير.\nراشيل: هذا لطف منك.\n[دوي صفارات الإنذار] لقد خضنا في كل هذا من قبل.",
    "vocabulary": [
      {
        "word": "butcher",
        "arabicMeaning": "يذبح بوحشية / يرتكب مجازر",
        "example": "The warlord ordered his soldiers to butcher innocent villagers."
      },
      {
        "word": "asylum",
        "arabicMeaning": "مصح نفسي وعقلي",
        "example": "Arkham Asylum housed Gotham City's most disturbed criminal minds."
      },
      {
        "word": "implications",
        "arabicMeaning": "تلميحات / اتهامات ضمنية",
        "example": "His speech carried serious implications about the director's integrity."
      },
      {
        "word": "drop it",
        "arabicMeaning": "اصرف النظر عن الأمر / توقف عن إثارته",
        "example": "I don't want to argue about money anymore; just drop it."
      }
    ],
    "notes": [
      {
        "term": "Bought and paid for",
        "type": "idiom",
        "explanation": "تعبير دارج يعني شراء الذمم بالرشوة والسيطرة التامة على شخص أو مؤسسة."
      },
      {
        "term": "Look out for",
        "type": "phrasal_verb",
        "explanation": "فعل مركب يعني حماية شخص والاهتمام بمصالحه وسلامته."
      }
    ],
    "wordCount": 135
  },
  {
    "id": 31,
    "paragraphNumber": 31,
    "english": "Bruce: Why didn't they put it into production?\nFox: Bean counters didn't think...\n...a soldier's life was worth 300 grand.\nSo, what's your interest in it, Mr. Wayne?\nBruce: I want to borrow it.\nFor spelunking.\nFox: Spelunking?\nBruce: Yeah, you know, cave diving?\nFox: You expecting to run into much g*nf*re in these caves?\nBruce: Look, I'd rather Mr. Earle didn't know about me borrowing--\nFox: Mr. Wayne...\n...the way I see it...\n...all this stuff is yours anyway.\nBruce; Okay. Give it a try.\nAlfred: Charming.\nAt least you'll have company.\nThis must be the lowest foundation of the southeast wing.\nYour great-great-grandfather was involved in the Underground Railroad...\n...secretly transporting freed sl*ves to the North...\n...and I suspect these caverns came in handy.\nBruce: AIfred! Come up here!",
    "arabicTranslation": "[صرير خفاش]\nألفريد: إنه ذلك الخفاش المبارك مجددًا يا سيدي... إنها تعشش في مكان ما داخل باحة القصر.\n[صرير الخفافيش]\nكرين: لن أقدم لك أي خدمات أو وساطات أخرى، فهناك من يدس أنفه ويتجسس حولنا.\nفالكوني: مهلاً يا دكتور، أنا أحك ظهرك وأنت تحك ظهري! أنا من يُدخل الشحنات إلى المدينة.\nكرين: ونحن ندفع لك المال لقاء ذلك.\nفالكوني: ربما لا يكون المال مثيراً لاهتمامي بقدر الخدمات والمصالح المتبادلة.\nكرين: أنا على دراية تامة بأنك لا تشعر بالخوف والرهبة مني يا سيد فالكوني... لكنك تعرف جيداً لحساب مَن أعمل، وحين يصل هو إلى هنا--\nفالكوني: هو... هل هو قادم إلى غوثام؟!\nكرين: نعم، إنه قادم. وحين يصل، لن يروق له أبداً أن يسمع... أنك قد عرضت عمليتنا برمتها للخطر فقط لتنقذ بلطجيتك وسفاحيك من قضاء عقوبتهم في السجن!\nفالكوني: ومن الذي يزعجك ويضايقك؟\nكرين: هناك فتاة شابة في مكتب المدعي العام.\nفالكوني: سنشتري ذمتها بالمال.\nكرين: ليس هذه بالذات.\nفالكوني: صاحبة مبادئ ومثالية، ها؟ حسنًا، هناك حل وردٌّ حاسم لذلك أيضًا.",
    "vocabulary": [
      {
        "word": "sniffing around",
        "arabicMeaning": "يدس أنفه / يتجسس ويتشمم الأخبار بريبة",
        "example": "Journalists were sniffing around the company looking for financial scandals."
      },
      {
        "word": "intimidated",
        "arabicMeaning": "متهيب وخائف من سطوة شخص",
        "example": "The young witness felt intimidated by the defendant's aggressive stare."
      },
      {
        "word": "endanger",
        "arabicMeaning": "يعرض للخطر والمخاطرة الفادحة",
        "example": "Reckless speeding on wet roads will endanger other drivers."
      },
      {
        "word": "idealist",
        "arabicMeaning": "مثالي / صاحب مبادئ وقيم لا تُباع",
        "example": "As an idealist, she believed education could eradicate world poverty."
      }
    ],
    "notes": [
      {
        "term": "Scratch your back, you scratch mine",
        "type": "idiom",
        "explanation": "مثل مشهور يعني تبادل المصالح والخدمات: 'أخدمك وتخدمني' (نفعية متبادلة)."
      },
      {
        "term": "Buy (someone) off",
        "type": "phrasal_verb",
        "explanation": "دفع رشوة لشخص لإسكاته أو كسب ولائه وصرف نظره."
      }
    ],
    "wordCount": 131
  },
  {
    "id": 32,
    "paragraphNumber": 32,
    "english": "Alfred: I can see everything all right from down here, sir, thank you very much.\nALFRED: We order the main part of this cowl from Singapore.\nBRUCE: Via a dummy corporation.\nAlfred: Indeed. And then, quite separately...\n...we place an order to a Chinese company for these.\nBruce: Put it together ourselves.\nAlfred: Precisely.\nThey'll have to be large orders, to avoid suspicion.\nBruce: How large?\nAlfred; Say 10,000.\nBruce: Well, at least we'll have spares. -Yes.\n[SIRENS WAlLlNG]\n[lNAUDlBLE DlALOGUE]\n[WOMAN CHATTERING OVER POLlCE RADIO]\nFlass: Don't suppose you want a taste.\nI just keep offering, thinking maybe someday you'll get wise.\nGordon: There's nothing wise in what you do, Flass.\nFlass: Well, Jimbo, you don't take the taste, makes us guys nervous.\nGordon: I'm no rat.\nIn a town this bent, who's there to rat to anyway?\n[LAUGHS]",
    "arabicTranslation": "كرين: لا أريد أن أعرف تفاصيل ما ستفعله.\nفالكوني: بل أنت تريد ذلك تمامًا!\nمسؤول: كلا، إننا نحقق نموًا سليمًا وصحيًا للغاية في هذه القطاعات. لا أعتقد أن توماس واين كان ليرى تصنيع الأسلحة الثقيلة كحجر زاوية ملائم ومناسب لأعمال شركتنا.\nإيرل: حسنًا، كان ذلك قبل 20 عامًا يا فريدريكس! وأعتقد أنه بعد مرور 20 عامًا، يمكننا أن نسمح لأنفسنا بالتوقف عن التفكير في ما كان ليفعله توماس واين!\nجيسيكا: صباح الخير، مكتب السيد إيرل. نعم، موعد العشاء غدًا مؤكد.\nبروس: صباح الخير، أنا هنا لرؤية السيد إيرل.\nجيسيكا: الاسم؟\nبروس: بروس واين.\nإيرل: ربما لم يكن توماس ليطرح الشركة للاكتتاب العام في البورصة، لكن هذا ما سنقوم به نحن، بصفتنا مديرين مسؤولين.\nإيرل: جيسيكا؟ أين أنتِ؟\nبروس: عيناك على الكرة، و... [يضرب كرة الغولف داخل المكتب]\nإيرل: لماذا لا يرد أحد على الهاتف؟\nبروس: إنها شركة 'واين إنتربرايزز' يا سيد إيرل، أنا على يقين من أنهم سيعاودون الاتصال!\nإيرل: بروس؟! يفترض أنك في عداد الأموات!\nبروس: يؤسفني أن أخيب ظنك!",
    "vocabulary": [
      {
        "word": "cornerstone",
        "arabicMeaning": "حجر زاوية / ركيزة أساسية",
        "example": "Trust and communication are the cornerstone of any lasting partnership."
      },
      {
        "word": "disappoint",
        "arabicMeaning": "يخيب الظن والأمل",
        "example": "We worked hard to deliver quality so we would not disappoint our customers."
      },
      {
        "word": "heavy-arms",
        "arabicMeaning": "الأسلحة والمعدات العسكرية الثقيلة",
        "example": "The treaty strictly prohibited the export of heavy-arms to conflict zones."
      },
      {
        "word": "eye on the ball",
        "arabicMeaning": "عينك وتركيزك على الهدف بدقة",
        "example": "In business management, always keep your eye on the ball regarding cash flow."
      }
    ],
    "notes": [
      {
        "term": "Keep your eye on the ball",
        "type": "idiom",
        "explanation": "تعبير رياضي من الغولف والبيسبول يعني التركيز والانتباه التام للمهمة الجوهرية."
      },
      {
        "term": "Sorry to disappoint",
        "type": "informal",
        "explanation": "رد ساخر ومتهكم يُقال عندما يفاجأ الخصم بوجودك على قيد الحياة أو بنجاحك."
      }
    ],
    "wordCount": 140
  },
  {
    "id": 33,
    "paragraphNumber": 33,
    "english": "BATMAN: Don't turn around.\nYou're a good cop. One of the few.\nGORDON: What do you want?\nBATMAN: Carmine Falcone brings in shipments of drugs every week.\nNobody takes him down. Why?\nGordon; He's paid up with the right people.\nBatman: What will it take to bring him down?\nGordon: Leverage on Judge Faden...\n...and a DA brave enough to prosecute.\nBatman; Rachel Dawes.\nGordon: Who are you?\nBATMAN: Watch for my sign.\nGordon; You're just one man?\nBATMAN: Now we're two.\nGordon: We?\nFreeze!\nOFFICER: What the hell was that?\nGordon; Just some nut.\nFox: Well, what is it today? More spelunking?\nBruce: No. Today it's BASE-jumping.\nFox: BASE-jumping.\nThat like parachuting?\nBruce: Kind of.\nDo you have any lightweight fabrics?\nFox: You know, I think I have just the thing.\nIt's called memory cloth. Notice anything?\nRegularly flexible...",
    "arabicTranslation": "- أحتاج منك إلقاء نظرة على هذا.\n- هل رأيته بعد؟\nراشيل: من تعني؟\nفينش: واين! الأخبار تتصدر كل شاشات التلفاز، لقد عاد!\nإيرل: أنا متأكد من أنك تدرك أنني عاجز عن إيقاف هذه الآلة الضخمة والقطار المنطلق... فهناك الكثير من التروس والعجلات التي تدور. إننا ماضون في الطرح العام في البورصة.\nبروس: أنا أتفهم ذلك تمامًا. وسوف أكافأ بسخاء ومبالغ طائلة مقابل أسهمي. لست أسعى للتدخل في القرارات... أنا فقط أبحث عن وظيفة!\nإيرل: أوه، حقًا؟\nبروس: أريد فقط التعرف على الشركة التي بنتها عائلتي وأسستها.\nإيرل: وهل لديك أي أفكار حول المكان الذي تود البدء منه؟\nبروس: قسم 'العلوم التطبيقية' لفت انتباهي بشدة.\nإيرل: قسم فوكس! سأخبره بأنك قادم في الطريق. أنت تشبهه كثيرًا... تشبه والدك. أنت الوحيد المتبقي من عائلة واين. هذا هو المكان الذي تنتمي إليه، أهلاً بك في بيتك.",
    "vocabulary": [
      {
        "word": "handsomely rewarded",
        "arabicMeaning": "يُكافأ بسخاء ومبالغ طائلة",
        "example": "The whistleblowers were handsomely rewarded under the federal recovery law."
      },
      {
        "word": "interfere",
        "arabicMeaning": "يتدخل ويتطفل على الشؤون",
        "example": "Parents should guide their children without trying to interfere in every tiny choice."
      },
      {
        "word": "caught my eye",
        "arabicMeaning": "لفت نظري وأثار اهتمامي",
        "example": "A sparkling vintage necklace in the display window immediately caught my eye."
      },
      {
        "word": "wheels turning",
        "arabicMeaning": "التروس تدور / العمليات انطلقت ولا يمكن إيقافها",
        "example": "Once the merger was approved, too many wheels were turning to reverse course."
      }
    ],
    "notes": [
      {
        "term": "Caught my eye",
        "type": "idiom",
        "explanation": "تعبير اصطلاحي يعني جذب الانتباه فوراً وأثار الفضول والاهتمام."
      },
      {
        "term": "Too many wheels turning",
        "type": "idiom",
        "explanation": "استعارة ميكانيكية تعني أن الإجراءات التنفيذية والمالية معقدة ومستمرة وتجاوزت مرحلة الإلغاء."
      }
    ],
    "wordCount": 140
  },
  {
    "id": 34,
    "paragraphNumber": 34,
    "english": "...but put a current through it...\n-...molecules realign, it becomes rigid.\nBruce: What kind of shapes can you make?\nFox: Can be tailored to fit any structure based on a rigid skeleton.\nBruce: Too expensive for the Army?\nFox: I don't think they tried to market it to the billionaire, BASE-jumping crowd.\nBruce: -Look, Mr. Fox. -\nFox: Yes, sir?\nBruce; If you're uncomfortable--\nFox: Mr. Wayne, if you don't want to tell me exactly what you're doing...\n...when I'm asked, I don't have to lie.\nBut don't think of me as an idiot.\nBruce: Fair enough.\nWhat's that?\nFox: The Tumbler?\nOh, you wouldn't be interested in that.\nShe was buiIt as a bridging vehicle.\nDuring combat, two of these would jump over a river, towing cables.\nOver here on the throttle, flip that open and throttle up.",
    "arabicTranslation": "لوشيوس فوكس: إجراءات وبروتوكولات بيئية، ومشاريع دفاعية وعسكرية، ومنتجات استهلاكية... جميعها نماذج أولية تجريبية، لا يوجد أي منها قيد الإنتاج الفعلي على أي مستوى كان!\nبروس: ولا حتى منتج واحد؟!\nفوكس: ماذا قالوا لك عن طبيعة هذا المكان؟\nبروس: لم يخبروني بأي شيء إطلاقاً.\nفوكس: إيرل أخبرني بحقيقة هذا المكان بدقة متناهية حين نزل بي وعزلني هنا... إنه 'طريق مسدود' ومقبرة للمشاريع، مكان لإبعادي عن التسبب في أي صداع أو متاعب لمجلس الإدارة! هيا، تعال معي.\nبروس: هل كنت عضواً في مجلس الإدارة؟\nفوكس: عندما كان والدك هو من يدير دفة الأمور!\nبروس: هل كنت تعرف والدي حقاً؟\nفوكس: أوه، بالطبع! لقد ساعدته في بناء قطاره المعلق الشهير. ها نحن ذا: حزام وأدوات التثبيت المصنوع من ألياف الكيفلار المتينة، مسدس خطاف مغناطيسي يعمل بالغاز المضغوط، وسلك أحادي الألياف يتحمل وزناً قدره 350 رطلاً.",
    "vocabulary": [
      {
        "word": "prototype",
        "arabicMeaning": "نموذج أولي تجريبي لصناعة معينة",
        "example": "Engineers tested the drone prototype under extreme weather conditions."
      },
      {
        "word": "dead end",
        "arabicMeaning": "طريق مسدود / منصب لا أفق للتطور فيه",
        "example": "He felt stuck in a dead-end job with zero promotion opportunities."
      },
      {
        "word": "utility harness",
        "arabicMeaning": "حزام أدوات وتثبيت عسكري",
        "example": "The mountain climber checked every buckle on his utility harness before the ascent."
      },
      {
        "word": "grapple gun",
        "arabicMeaning": "مسدس قذف الخطاف والحبال للتسلق",
        "example": "The commando used a grapple gun to scale the perimeter wall silently."
      }
    ],
    "notes": [
      {
        "term": "Dead end",
        "type": "idiom",
        "explanation": "تعبير يعني مساراً أو وظيفة لا مستقبل لها، وتُستخدم مجازياً للمناصب الهامشية التي يُنفى إليها الموظفون المزعجون."
      },
      {
        "term": "Ran things",
        "type": "informal",
        "explanation": "أدار زمام الأمور وتحكم في قرارات المؤسسة."
      }
    ],
    "wordCount": 139
  },
  {
    "id": 35,
    "paragraphNumber": 35,
    "english": "This will boost you into a rampless jump-- Not now!\nNot-- Not now, sir.\nCOMPUTER: Afterburner disengaged.\nFox; We never could get the damn bridge to work...\n...but this baby works just fine.\nSo, what do you think?\nBruce: Does it come in black?\nFalcone: I need you at the docks Thursday.\nFlass: -Problems?\nFalcone: I don't want any trouble...\n-...with the last shipment.\nFlass: Sure.\nWord on the street is you got a beef with somebody in the DA's office.\nFalcone; -Is that right? -\nFlass: And that there's a fat prize...\n...waiting for anybody willing to do anything about it.\nFalcone; So, what's your point, Mr. Flass?\nFlass; Have you seen the girl?\nFLASS [ON RADlO]: It's a cute little assistant DA.\nDon't you think that's a little too much heat to bring down, maybe?",
    "arabicTranslation": "مشروع رائع بحق، قطار والدك المعلق. لقد وجه مساره مباشرة إلى داخل برج واين، جنباً إلى جنب مع خطوط إمداد المياه ومحطات الطاقة الكهربائية، مما جعل برج واين المركز غير الرسمي لمدينة غوثام بأسرها. وبالطبع، تركه إيرل للإهمال حتى تعفن.\nها نحن ذا: بذلة نجاة عسكرية متطورة مصنوعة من قماش النومكس لجنود المشاة المتقدمين، نسيج كيفلار مزدوج الحياكة مع مفاصل معززة ومدعمة.\nبروس: هل هي مقاومة للتمزق والطعن؟\nفوكس: هذه البذلة اللعينة كفيلة بإيقاف طعنة سكين حادة!\nبروس: ومقاومة للرصاص؟\nفوكس: كفيلة بصد أي شيء عدا رصاصة مصوبة في خط مستقيم من مسافة قريبة جدًا!\nبروس: ولماذا لم يدخلوها خطوط الإنتاج العسكري؟\nفوكس: المحاسبون وحاسبو التكاليف لم يروا أن حياة الجندي تستحق دفع 300 ألف دولار! إذن، ما هو وجه اهتمامك بها يا سيد واين؟\nبروس: أود استعارتها... من أجل استكشاف الكهوف.\nفوكس: استكشاف الكهوف والغوص فيها؟!",
    "vocabulary": [
      {
        "word": "reinforced",
        "arabicMeaning": "معزز ومقوى بمواد صلبة",
        "example": "The bank vault was built with reinforced steel doors."
      },
      {
        "word": "tear-resistant",
        "arabicMeaning": "مقاوم للتمزق والاهتراء",
        "example": "These outdoor hiking backpacks are made from tear-resistant nylon."
      },
      {
        "word": "bulletproof",
        "arabicMeaning": "مضاد للرصاص ومقاوم للاختراق",
        "example": "The presidential limousine is equipped with heavy bulletproof glass."
      },
      {
        "word": "bean counter",
        "arabicMeaning": "محاسب متزمت مدقق في كل قرش (تعبير تهكمي)",
        "example": "The bean counters in corporate finance slashed the laboratory's research budget."
      }
    ],
    "notes": [
      {
        "term": "Bean counters",
        "type": "slang",
        "explanation": "مصطلح عامي ساخر يشير إلى المحاسبين والمديرين الماليين الذين يركزون على تقليص النفقات على حساب الجودة أو الأرواح."
      },
      {
        "term": "This sucker",
        "type": "slang",
        "explanation": "تعبير عامي أمريكي دارج يُقصد به الإشارة إلى أداة أو شيء قوي وفعال."
      }
    ],
    "wordCount": 137
  },
  {
    "id": 36,
    "paragraphNumber": 36,
    "english": "-Even for this town.\nFalcone: Never underestimate Gotham City.\nPeople get mugged coming home from work every day of the week.\nSometimes-- Sometimes things just go bad.\nAlfred: It's a problem with the graphite, sir.\nThe next 10,000 will be up to specifications.\nBruce: At least they gave us a discount.\nAlfred: Quite.\nIn the meantime, sir, may I suggest you try to avoid landing on your head?\nWhy bats, Master Wayne?\nBruce; Bats frighten me.\nIt's time my enemies shared my dread.\nFLASS: What is this?\nContinue.\nFlass: Looks fine out there.\nThe bears go straight to the dealers.\nFalcone: Yeah, and the rabbits go to the man in the Narrows.\nFlass: What's the difference?\nFalcone: Ignorance is bliss, my friend.\nDon't burden yourseIf with the secrets of scary people.\n[STEISS SCREAMS]\nHey. Steiss.\nSteiss?\nMAN: What?\nWhat the...?",
    "arabicTranslation": "بروس: أجل، كما تعلم، الغوص واستكشاف الكهوف المظلمة.\nفوكس: وهل تتوقع أن تواجه الكثير من إطلاق النار في هذه الكهوف؟!\nبروس: اسمع، أفضل ألا يعلم السيد إيرل بأمر استعارتي لهذه--\nفوكس: سيد واين... وفق الطريقة التي أنظر بها إلى الأمور... كل هذه الأشياء والعتاد ملك لك أنت على أية حال!\nبروس: حسنًا جدًا، دعنا نجربها!\nألفريد: [داخل الكهف تحت القصر]: ساحر وخلاب! على الأقل سيكون لديك رفقة ومؤنس هنا! لا بد أن هذا هو الأساس الأكثر انخفاضاً للجناح الجنوبي الشرقي من القصر. كان جد والدك الأكبر مشاركاً في شبكة 'سكة الحديد السرية تحت الأرض'... لتهريب العبيد المحررين سراً نحو الشمال، وأرجح بشدة أن هذه الكهوف الطبيعية كانت مفيدة ومناسبة للغاية آنذاك!\nبروس: ألفريد! اصعد إلى هنا!\nألفريد: يمكنني رؤية كل شيء على ما يرام وبشكل مثالي من هنا في الأسفل يا سيدي، شكراً جزيلاً لك!",
    "vocabulary": [
      {
        "word": "spelunking",
        "arabicMeaning": "رياضة استكشاف الكهوف والغوص فيها",
        "example": "Spelunking requires helmets, heavy headlights, and specialized safety ropes."
      },
      {
        "word": "handy",
        "arabicMeaning": "مفيد ومريح ونافع في الاستخدام",
        "example": "Having a multi-tool knife in your backpack is always very handy."
      },
      {
        "word": "freed slaves",
        "arabicMeaning": "العبيد المحررون والهاربون من الرق",
        "example": "Abolitionists risked their lives to guide freed slaves to safe havens."
      },
      {
        "word": "foundation",
        "arabicMeaning": "أساسات المبنى وقواعده الحجرية",
        "example": "Cracks in the concrete foundation can threaten the building's stability."
      }
    ],
    "notes": [
      {
        "term": "Underground Railroad",
        "type": "cultural",
        "explanation": "إشارة تاريخية أمريكية لشبكة سرية ومسارات آمنة أسسها نشطاء إلغاء العبودية في القرن 19 لمساعدة العبيد على الهروب من ولايات الجنوب إلى الشمال."
      },
      {
        "term": "Came in handy",
        "type": "idiom",
        "explanation": "فعل اصطلاحي يعني أنه كان ذا فائدة ونفع كبير في ظرف معين."
      }
    ],
    "wordCount": 140
  },
  {
    "id": 37,
    "paragraphNumber": 37,
    "english": "[SCREAMING lN DlSTANCE]\n[g*nshots]\nFlass: I better check it.\n[PANTlNG]\nThere's a problem out here. You better bail.\n[THUD]\nWhere are you?!\nBatman; Here.\n[SCREAMS]\n[GRUNTING]\nFalcone: Take a ride. Oh, sh*t.\nWhat the hell are you?\n[GLASS SHATTERS]\nBatman: I'm Batman.\nNice coat.\nHomeless guy: Thanks.\nRachel; Hold it.\nThat's right, you better run.\n[SCREAMS]\n[ELECTRlCITY CRACKLlNG]\nBatman: Falcone sent them to k*ll you.\nRachel: Why?\nBatman: You rattled his cage.\nRachel: What's this?\nBatman; Leverage.\nRachel: For what?\nBatman: To get things moving.\nRachel: Who are you?\nBatman: Someone like you.\nSomeone who'll rattle the cages.\nMa'am? Everything okay?\nOFFICER: Falcone's men? -Does it matter?\nWe'll never tie him to it anyway.\nI wouldn't be too sure of that.\nWhat the hell is that?\nGordon: Cut him down.\nLOEB: Unacceptable.",
    "arabicTranslation": "ألفريد: نطلب الجزء الرئيسي من هذا القناع والخوذة من سنغافورة.\nبروس: عبر شركة وهمية صورية.\nألفريد: بالتأكيد. وبعد ذلك، وبشكل منفصل تماماً... نتقدم بطلب إلى شركة صينية لتصنيع هذه القطع والأذنين.\nبروس: ونقوم بتركيبها وتجميعها بأنفسنا.\nألفريد: بالضبط وبدقة. سيتعين أن تكون الطلبيات بأعداد ضخمة لتفادي إثارة أي شكوك أو ريبة.\nبروس: كم تبلغ ضخامة الطلب؟\nألفريد: لنقل... 10 آلاف قطعة!\nبروس: حسنًا، على الأقل سيكون لدينا قطع غيار احتياطية وافرة!\nألفريد: نعم بالفعل.\n[دوي صفارات الإنذار]\n[أصوات نداءات عبر جهاز اللاسلكي للشرطة]\nالمحقق فلاس: لا أظن أنك ترغب في تذوق وتناول نصيبك اليوم! أنا فقط أستمر في عرضه عليك أملاً في أن تصبح حكيماً وفطناً في يوم من الأيام!\nغوردون: ليس هناك أي حكمة أو ذرة عقل فيما تفعله أنت يا فلاس!\nفلاس: حسنًا يا جيمبو، حين لا تأخذ نصيبك من الرشوة، فإنك تجعلنا نحن الرفاق نشعر بالقلق والريبة منك!\nغوردون: أنا لست واشياً خائناً. وفي بلدة ملتوية وفاسدة كهذه، إلى مَن سأشي بالآخرين على أي حال؟! [يضحك فلاس بسخرية]",
    "vocabulary": [
      {
        "word": "cowl",
        "arabicMeaning": "غطاء الرأس والقناع الواقي الملتصق",
        "example": "The superhero pulled his tight black cowl over his face to hide his identity."
      },
      {
        "word": "dummy corporation",
        "arabicMeaning": "شركة وهمية / شركة واجهة لإخفاء الصفقات",
        "example": "Money launderers frequently set up a dummy corporation to channel illicit funds."
      },
      {
        "word": "rat",
        "arabicMeaning": "واشٍ وجاسوس ينقل الأخبار للشرطة (تعبير عصابات)",
        "example": "The mob boss suspected there was a rat leaking information to the FBI."
      },
      {
        "word": "bent",
        "arabicMeaning": "فاسد وملتوٍ وغير مستقيم (مصطلح بريطاني وعامي)",
        "example": "Internal Affairs was assigned to investigate accusations against bent detectives."
      }
    ],
    "notes": [
      {
        "term": "Get wise",
        "type": "idiom",
        "explanation": "تعبير عامي يعني 'أن يستفيق الشخص ويفهم مصلحته' ويشارك في الفساد والرشاوى مع رفاقه."
      },
      {
        "term": "I'm no rat",
        "type": "slang",
        "explanation": "تعبير سجون وعصابات يعني 'لست خائناً أو واشياً ينقل أسرار رفاقه للجهات الرقابية'."
      }
    ],
    "wordCount": 132
  },
  {
    "id": 38,
    "paragraphNumber": 38,
    "english": "Now, I don't care if it's rival gangs, Guardian AngeIs...\n...or the g*dd*mn Salvation Army...\n...get them off the street and off the front page.\nCop; They say it was just one guy. Or a creature.\nLoeb; It was some as*h*le in a costume.\n-Yeah? -\nCop: This guy did deliver us...\n...one of the city's biggest crime lords.\nLoebb: No one takes the law into their own hands in my city.\nUnderstand?\nRACHEL: No way to bury it now.\nFINCH: There's still Judge Faden.\n-I've got Faden covered.\nFinch: -What about this bat they babble about?\nRachel; Even if these guys will swear to being thrashed by a giant bat...\n...we've got Falcone at the scene.\nDrugs, prints, cargo manifests. This bat character gave us everything.\nFinch: Okay. Let's do it.\nBruce; Bats are nocturnal.\nALFRED: Bats may be.",
    "arabicTranslation": "باتمان: [يظهر فجأة في الظلام من خلف غوردون]: إياك أن تلتفت إلى الوراء! أنت شرطي صالح وشريف... واحد من القلائل النادرين.\nغوردون: ما الذي تريده؟\nباتمان: كارمين فالكوني يُدخل شحنات ضخمة من المخدرات في كل أسبوع، ولا أحد يجرؤ على الإطاحة به أو إسقاطه... لماذا؟\nغوردون: لأنه يدفع المال ويسدد الحسابات للأشخاص المناسبين وأصحاب النفوذ!\nباتمان: وما الذي يتطلبه الأمر للإطاحة به وإسقاطه؟\nغوردون: وسيلة ضغط وابتزاز ضد القاضي فادين... ومدعٍ عام شجاع بما يكفي ليجرؤ على مقاضاته وإدانته.\nباتمان: راشيل دوز!\nغوردون: من أنت بحق الجحيم؟!\nباتمان: ترقب إشارتي وعلامتي.\nغوردون: هل أنت مجرد رجل واحد بمفردك؟\nباتمان: والآن أصبحنا اثنين!\nغوردون: نحن؟!\n[غوردون يلتفت ويشهر مسدسه]: قف مكانك وتجمد!\nضابط: ما هذا الشيء اللعين بحق الجحيم؟!\nغوردون: مجرد شخص معتوه ومجنون.",
    "vocabulary": [
      {
        "word": "turn around",
        "arabicMeaning": "يلتفت إلى الخلف أو يدور",
        "example": "Do not turn around until I give you permission."
      },
      {
        "word": "take down",
        "arabicMeaning": "يسقط / يطيح بمجرم أو شبكة فساد",
        "example": "Federal agents worked for years to take down the international cartel."
      },
      {
        "word": "paid up",
        "arabicMeaning": "مسدد لحساباته ورشاويه بالكامل",
        "example": "The tenant was fully paid up on rent through the end of the year."
      },
      {
        "word": "leverage",
        "arabicMeaning": "وسيلة ضغط قوية أو نفوذ مؤثر",
        "example": "The leaked emails gave the opposition significant political leverage."
      }
    ],
    "notes": [
      {
        "term": "Paid up with the right people",
        "type": "idiom",
        "explanation": "تعبير يعني ضمان الحماية عبر دفع الرشاوى المستمرة لكبار المسؤولين والقضاة الفاسدين."
      },
      {
        "term": "Watch for my sign",
        "type": "cultural",
        "explanation": "أول إشارة واستباق لـ 'إشارة الوطواط' (Bat-Signal) التي ستصبح رمز التعاون بين باتمان وغوردون."
      },
      {
        "term": "Some nut",
        "type": "slang",
        "explanation": "تعبير عامي يعني شخصاً مجنوناً أو غريب الأطوار يرتدي زياً غريباً."
      }
    ],
    "wordCount": 140
  },
  {
    "id": 39,
    "paragraphNumber": 39,
    "english": "But even for billionaire playboys, 3:00 is pushing it.\nThe price for leading a double life, I fear.\nYour theatrics made an impression.\nBRUCE: Theatricality and deception...\n...are powerful weapons, AIfred. This is a good start.\nAlfred; If those are to be the first of many injuries to come...\n...it would be wise to find a suitable excuse.\nPolo, for instance.\nBruce: I'm not learning polo, AIfred.\nAlfred: Strange injuries, a nonexistent social life.\nThese things beg the question...\n...as to what exactly does Bruce Wayne do with his time and his money.\nBruce; What does someone like me do?\nAlfred; Drive sports cars, date movie stars.\nBuy things that are not for sale.\nAlfred: Who knows, Master Wayne, you start pretending to have fun...\n...you might even have a little by accident.\nMAN: Sir.",
    "arabicTranslation": "فوكس: حسنًا، ما هي مغامرتنا لليوم؟ المزيد من استكشاف الكهوف؟\nبروس: كلا. اليوم هو القفز بالمظلات من المرتفعات والأبراج (BASE-jumping).\nفوكس: القفز من القواعد والمرتفعات... هل يشبه ذلك القفز بالمظلات التقليدي؟\nبروس: نوعاً ما. هل لديك أي أقمشة خفيفة الوزن للغاية؟\nفوكس: أتعلم، أعتقد أن لدي ما تبحث عنه بالضبط. يُدعى 'قماش الذاكرة'. هل تلاحظ أي شيء؟ إنه مرن وقابل للثني بشكل طبيعي واعتيادي... ولكن ما إن تمرر فيه تياراً كهربائياً... حتى تعيد جزيئاته ترتيب نفسها وتصطف، فيتحول إلى جسم صلب تماماً كالفولاذ!\nبروس: وما نوع الأشكال والهياكل التي يمكنك تشكيلها منه؟\nفوكس: يمكن تفصيله ليلائم ويغطي أي هيكل قائم على دعائم صلبة.\nبروس: أكان باهظ التكلفة بالنسبة للجيش؟\nفوكس: لا أعتقد أنهم حاولوا تسويقه وعرضه على طبقة المليارديرات المهووسين بالقفز من ناطحات السحاب!\nبروس: - اسمع يا سيد فوكس...\nفوكس: نعم يا سيدي؟\nبروس: إن كنت تشعر بعدم الارتياح أو الإحراج--",
    "vocabulary": [
      {
        "word": "memory cloth",
        "arabicMeaning": "قماش الذاكرة (نسيج ذكي يتصلب بالكهرباء)",
        "example": "Researchers engineered memory cloth that hardens instantly on impact."
      },
      {
        "word": "flexible",
        "arabicMeaning": "مرن وقابل للثني بسهولة",
        "example": "Yoga instructors possess exceptionally flexible muscles and joints."
      },
      {
        "word": "realign",
        "arabicMeaning": "تعيد اصطفافها وترتيب نسقها",
        "example": "The magnetic field causes the microscopic particles to realign."
      },
      {
        "word": "rigid",
        "arabicMeaning": "صلب وقاسٍ لا ينثني",
        "example": "The surgeon placed a rigid splint on the broken forearm."
      },
      {
        "word": "tailored",
        "arabicMeaning": "مفصل ومصمم خصيصاً لمقاس معين",
        "example": "The curriculum was carefully tailored to meet the needs of advanced students."
      }
    ],
    "notes": [
      {
        "term": "BASE-jumping",
        "type": "cultural",
        "explanation": "رياضة قفز مظلي شديدة الخطورة من المباني والهوائيات والجسور والأجراف الصخرية."
      },
      {
        "term": "Memory cloth",
        "type": "cultural",
        "explanation": "التكنولوجيا الخيالية الذكية التي استخدمها نولان لتفسير قدرة رداء باتمان على التحول لجناحي طيران شراعي متصلبين عند فرد ذراعيه."
      }
    ],
    "wordCount": 135
  },
  {
    "id": 40,
    "paragraphNumber": 40,
    "english": "-We have a situation. -All right.\nThe Coast Guard picked up one of our cargo ships last night...\n...heavily damaged, all crew missing, probably dead.\nThe ship was carrying a prototype weapon.\nIt's a microwave emitter.\nIt's designed for desert warfare, but it--\nIt looks like somebody...\n...turned it on.\nIt uses focused microwaves to vaporize the enemy's water supply.\nThe damage to the ship was catastrophic.\nThe weapon itseIf is....\nEarle: Missing?\nYeah.\nMAN: Mr. Wayne.\nNice car.\nBruce: You should see my other one.\nWOMAN: He's done something the police never have.\nMAN: You can't take the law into your own hands.\nWell, at least he's getting something done.\nMAN: Bruce, help me out here. -Huh?\nBruce: Well, a guy who dresses up like a bat clearly has issues.\nBut he's put Falcone behind bars.",
    "arabicTranslation": "فوكس: سيد واين، إذا كنت لا ترغب في إخباري بالضبط عما تفعله... فحين يُسأل عنك، لن أضطر إلى الكذب! ولكن إياك أن تظن أنني غبي أو ساذج!\nبروس: هذا منصف ومنطقي تمامًا. ما تلك المركبة هناك؟\nفوكس: 'التامبلر' (The Tumbler)؟ أوه، لن تكون مهتماً بتلك المركبة على الإطلاق! لقد صُممت وبُنيت في الأصل كمركبة لمد الجسور العابرة للأنهار. أثناء المعارك والاشتباكات القتالية، تقفز اثنتان من هذه المركبات فوق مجرى النهر وهما تجران كابلات الفولاذ. انظر هنا عند ذراع دواسة الوقود، ارفع هذا الغطاء واضغط بقوة... هذا سيدفعك ويزيدك تسارعاً لقفزة هائلة دون الحاجة إلى منحدر قفز-- ليس الآن! ليس... ليس الآن يا سيدي!\nصوت الكمبيوتر الآلي: تم فصل وإيقاف الحارق اللاحق.\nفوكس: لم نتمكن قط من جعل الجسر اللعين يعمل بنجاح... لكن هذه الفاتنة الصغيرة تعمل بكفاءة منقطعة النظير! إذن، ما رأيك فيها؟\nبروس: هل يتوفر منها اللون الأسود؟",
    "vocabulary": [
      {
        "word": "fair enough",
        "arabicMeaning": "هذا منصف ومقبول تماماً",
        "example": "If you cannot finish today, tomorrow will be fine; fair enough."
      },
      {
        "word": "bridging vehicle",
        "arabicMeaning": "مركبة عسكرية لنصب ومد الجسور الميدانية",
        "example": "Combat engineers deployed a bridging vehicle to cross the swollen river."
      },
      {
        "word": "throttle",
        "arabicMeaning": "دواسة وصمام الوقود للتحكم بالسرعة",
        "example": "He opened up the motorcycle's throttle as he entered the highway."
      },
      {
        "word": "afterburner",
        "arabicMeaning": "الحارق اللاحق النفاث لزيادة السرعة القصوى",
        "example": "The supersonic jet engaged its afterburner to climb rapidly."
      },
      {
        "word": "this baby",
        "arabicMeaning": "هذه الفاتنة (تعبير عامي عن آلة ممتازة)",
        "example": "Listen to the engine roar; this baby runs like an absolute dream."
      }
    ],
    "notes": [
      {
        "term": "Fair enough",
        "type": "idiom",
        "explanation": "عبارة إقرار بالاتفاق تعني 'كلامك معقول ومقبول وأنا أوافقك الرأي'."
      },
      {
        "term": "Does it come in black?",
        "type": "cultural",
        "explanation": "واحدة من أشهر وأطرف العبارات في الفيلم، تمثل حس الدعابة الجاف لبروس واين وميله للون الأسود لهويته كباتمان."
      }
    ],
    "wordCount": 137
  },
  {
    "id": 41,
    "paragraphNumber": 41,
    "english": "MAN: Now the cops want him. What does that tell you?\nWoman; They're jealous.\nMaitre d: Sir, the pool is for decoration...\n...and your friends do not have swimwear.\nBruce; Well, they're European.\nMaitre D; I'm going to have to ask you to leave.\n-It is not a question of money. -\nBruce: Well, you see...\n...I'm buying this hotel...\n...and setting some new rules about the pool area.\nWoman: I think the Batman deserves a medal.\nEarle: And a straitjacket to pin it on.\nMAN: Thank you.\nRachel: Bruce?\nBruce: Rachel?\nRachel: I'd heard you were back.\nWhat are you doing?\nBruce: Just swimming here. Wow, it is good to see you.\nRachel; You were gone a long time.\nBruce: I know. How are things? -\nRachel: The same.\nJob's getting worse.",
    "arabicTranslation": "فالكوني: أحتاج وجودك عند أرصفة الميناء مساء الخميس.\nفلاس: - هل هناك أي مشاكل؟\nفالكوني: لا أريد أي متاعب أو منغصات... بشأن الشحنة الأخيرة.\nفلاس: بالتأكيد. الكلمات التي تتردد في الشارع تفيد بأن لديك نزاعاً وعداءً مع شخص ما في مكتب المدعي العام.\nفالكوني: - أهذا صحيح؟\nفلاس: وأن هناك مكافأة دسمة وجائزة كبرى... تنتظر أي شخص مستعد لفعل أي شيء حيال هذا الأمر.\nفالكوني: إذن، ما هي غايتك ومقصدك يا سيد فلاس؟\nفلاس: هل رأيت الفتاة؟\nفلاس [عبر اللاسلكي]: إنها مساعدة مدعٍ عام صغيرة ولطيفة وجذابة. ألا تعتقد أن استهدافها سيجلب ضغطاً وتدقيقاً أمنياً هائلاً علينا، ربما؟ حتى بالنسبة لبلدة كغوثام؟\nفالكوني: إياك أبداً أن تستهين بمدينة غوثام! الناس يتعرضون للسرقة بالإكراه وهم عائدون من أعمالهم في كل يوم من أيام الأسبوع! وفي بعض الأحيان... تسوء الأمور وتخرج عن السيطرة فحسب.",
    "vocabulary": [
      {
        "word": "beef",
        "arabicMeaning": "نزاع / عداء وخلاف حاد (عامي)",
        "example": "The two rival rappers settled their long-standing beef with a handshake."
      },
      {
        "word": "fat prize",
        "arabicMeaning": "مكافأة دسمة ومبلغ مالي كبير",
        "example": "The contest offered a fat prize of fifty thousand dollars to the winner."
      },
      {
        "word": "mugged",
        "arabicMeaning": "تعرض للسرقة بالإكراه في الشارع",
        "example": "A tourist was mugged in the subway station late at night."
      },
      {
        "word": "underestimate",
        "arabicMeaning": "يستهين بـ / يقلل من شأن وقدرة شيء",
        "example": "Never underestimate the dedication of a passionate grassroots movement."
      }
    ],
    "notes": [
      {
        "term": "Word on the street",
        "type": "idiom",
        "explanation": "تعبير يعني 'الشائعات والأخبار المتداولة بين عامة الناس أو في أوساط الشارع والعصابات'."
      },
      {
        "term": "Have a beef with",
        "type": "slang",
        "explanation": "مصطلح عامي أمريكي يعني وجود خصومة أو عداء أو حسابات عالقة مع شخص ما."
      },
      {
        "term": "Bring down heat",
        "type": "slang",
        "explanation": "جلب الانتباه والتحقيقات المكثفة من قبل أجهزة الشرطة والإعلام."
      }
    ],
    "wordCount": 133
  },
  {
    "id": 42,
    "paragraphNumber": 42,
    "english": "Bruce; Can't change the world on your own.\nRachel: What choice do I have...\n...when you're too busy swimming?\nBruce: Rachel, all of--\nAll this....\nIt's-- It's not me. It's....\nInside, I am....\nI am more.\nWOMAN 1: Come on, Bruce. Come on.\nWOMAN 2: Bruce, we have some more hoteIs for you to buy.\nRachel: Bruce...\n...deep down you may still be that same great kid you used to be.\nBut it's not who you are underneath...\n...it's what you do that defines you.\nWOMAN: Dr. Crane, thanks for coming.\nCrane: Not at all. He cut his wrists?\nProbably looking for the insanity plea. But if anything should happen....\nCrane: Of course, better safe than sorry.\nFalcone: Yeah, Dr. Crane, I can't take it anymore. It's all too much.\nThe walIs are closing in. Blah, blah, blah.",
    "arabicTranslation": "ألفريد: هناك عيب ومشكلة في مادة الجرافيت يا سيدي. الدفعة التالية المكونة من 10 آلاف قطعة ستكون مطابقة للمواصفات القياسية المطلوبة بدقة.\nبروس: على الأقل قدموا لنا خصماً مالياً جيداً!\nألفريد: هذا صحيح تماماً. وفي هذه الأثناء يا سيدي، هل لي أن أقترح عليك محاولة تجنب الهبوط والارتطام على رأسك؟! لماذا الخفافيش تحديداً يا سيد بروس الصغير؟\nبروس: الخفافيش تفزعني وترعبني بشدة... وقد حان الوقت لكي يشاطرني أعدائي هذا الذعر والخوف!\nفلاس: ما هذا الشيء هنا؟ استمروا في العمل.\nفلاس: الأمور تبدو على ما يرام هناك. الدببة المحشوة تذهب مباشرة إلى تجار التجزئة والموزعين.\nفالكوني: أجل، والأرانب تذهب إلى ذلك الرجل القابع في منطقة 'الضياق' (الناروز).\nفلاس: وما الفرق بينهما؟\nفالكوني: الجهل نعمة وراحة بال يا صديقي! فلا تثقل كاهلك ونفسك بأسرار الناس المخيفين وأصحاب السطوة!",
    "vocabulary": [
      {
        "word": "specifications",
        "arabicMeaning": "المواصفات الفنية والقياسية المطلوبة",
        "example": "The steel beams were manufactured to exact architectural specifications."
      },
      {
        "word": "dread",
        "arabicMeaning": "رعب وفزع وهلع شديد",
        "example": "A sinking feeling of dread filled her heart as she opened the ominous letter."
      },
      {
        "word": "ignorance is bliss",
        "arabicMeaning": "الجهل بالشيء راحة ونعمة للبال",
        "example": "Sometimes not knowing all the stressful details is better; ignorance is bliss."
      },
      {
        "word": "burden",
        "arabicMeaning": "يثقل الكاهل بحمل أو أسرار ثقيلة",
        "example": "Do not burden your young children with the financial worries of the household."
      }
    ],
    "notes": [
      {
        "term": "Ignorance is bliss",
        "type": "idiom",
        "explanation": "مثل إنجليزي فلسفي شهير يعني أن عدم معرفة الحقائق المزعجة يحفظ للمرء راحة باله وهدوءه."
      },
      {
        "term": "Shared my dread",
        "type": "cultural",
        "explanation": "السبب النفسي المحوري لاختيار بروس هوية الخفاش: تحويل أكبر مصدر لرهابه الشخصي إلى سلاح ضد أعدائه."
      }
    ],
    "wordCount": 138
  },
  {
    "id": 43,
    "paragraphNumber": 43,
    "english": "A couple of days of this food, it'll be true.\nCrane: What do you want?\nFalcone: I wanna know...\n...how you're gonna convince me to keep my mouth shut.\nCrane: About what? You don't know anything.\nFalcone; I know you don't want the cops to take a closer look at the drugs they seized.\nAnd I know about your experiments with the inmates of your nut house.\nSee, I don't go into business with a guy without finding out his dirty secrets.\nAnd those g*ons you used.\nI own the muscle in this town.\nNow, I've been bringing your stuff in for months...\n...so whatever he's planning, it's big, and I want in.\nCrane: Well, I already know what he'll say.\nThat we should k*ll you.\nFalcone: Even he can't get me in here. Not in my town.",
    "arabicTranslation": "[صراخ ستيس في الظلام]\nفلاس: مهلاً... ستيس؟ ستيس؟!\nرجل: ماذا؟ ما هذا اللعين...؟\n[صراخ وهلع يتردد في الأفق من بعيد]\n[أصوات طلقات نارية متفرقة]\nفلاس: من الأفضل لي أن أتحقق مما يجري هناك. [يلهث برعب]\nهناك مصيبة وخطب ما هنا في الخارج، من الأفضل لكم أن تهربوا وتنسحبوا فوراً!\n[صوت ارتطام هائل]\nأين أنت بحق الجحيم؟!\nباتمان: [يهبط من السقف مقلوباً]: أنا هنا!\n[صراخ المجرم] [أصوات ضربات قوية]\nفالكوني: خذوا جولة في السيارة... تباً، اللعنة! ما هذا الشيء اللعين الذي أنت عليه؟!\n[تحطم زجاج سقف سيارة الليموزين وسحب فالكوني بقوة]\nباتمان: أنا باتمان!\n[باتمان يربط فالكوني على كشاف الإنارة العملاق]\nباتمان: [للمشرد الذي يرتدي معطفه القديم]: معطف جميل!\nالمشرد: شكراً لك!",
    "vocabulary": [
      {
        "word": "bail",
        "arabicMeaning": "يهرب وينسحب فوراً للنجاة (عامي)",
        "example": "When the police sirens wailed, the street racers decided to bail quickly."
      },
      {
        "word": "shatter",
        "arabicMeaning": "يتحطم ويتناثر إلى شظايا صغيرة",
        "example": "The baseball hit the window and made the glass shatter into pieces."
      },
      {
        "word": "pant",
        "arabicMeaning": "يلهث ويتنفس بصعوبة وتسارع",
        "example": "The exhausted marathon runner began to pant heavily near the finish line."
      },
      {
        "word": "heck / hell",
        "arabicMeaning": "بحق الجحيم (تعبير تعجب واستنكار)",
        "example": "What the hell just happened to the power grid?"
      }
    ],
    "notes": [
      {
        "term": "I'm Batman",
        "type": "cultural",
        "explanation": "الجملة السينمائية الأيقونية الأكثر شهرة في تاريخ السينما وأفلام الأبطال الخارقين، تُقال لأول مرة لفالكوني."
      },
      {
        "term": "Bail",
        "type": "slang",
        "explanation": "فعل عامي يعني الهروب السريع من ورطة أو موقف خطر."
      }
    ],
    "wordCount": 138
  },
  {
    "id": 44,
    "paragraphNumber": 44,
    "english": "Crane: Would you like to see my mask?\nI use it in my experiments.\nNow, I'm probably not very frightening to a guy like you.\nBut these crazies, they can't stand it.\nFalcone; So when did the nut take over the nut house?\n[SCREAMING]\nSCARECROW: They scream and they cry...\n...much as you're doing now.\nCrane: Well, he's not faking. Not that one.\nI'll talk to the judge and see if I can get him moved...\n...to the secure wing at Arkham. I can't treat him here.\nBATMAN: Storm's coming.\nGordon: The scum is getting jumpy because you stood up to Falcone.\nBatman: It's a start. Your partner was at the docks with Falcone.\nGordon: Well, he moonlights as a low-level enforcer.\nBatman: They were splitting the shipment in two. Only haIf went to the dealers.",
    "arabicTranslation": "راشيل: قفوا مكانكم وتجمدوا!\nهذا صحيح، من الأفضل لكم أن تركضوا هاربين!\n[صراخ رجال العصابات مع صعقهم بالكهرباء]\n[أزيز الشرر الكهربائي]\nباتمان: فالكوني أرسلهم لاغتيالك وقتلك.\nراشيل: لماذا؟\nباتمان: لأنك هززتِ قفصه وأثرتِ غضبه وذعره.\nراشيل: وما هذا الذي تضعه بين يدي؟\nباتمان: وسيلة ضغط وأدلة دامغة.\nراشيل: لأجل ماذا؟\nباتمان: لتحريك الأمور والمضي بها قدماً في المحكمة.\nراشيل: من أنت؟\nباتمان: شخص مثلك تماماً... شخص يهز الأقفاص ليطرد منها الفاسدين!\nضابط شرطة: سيدتي؟ هل كل شيء على ما يرام؟\nضابط: أهؤلاء رجال فالكوني؟ وما الفارق إن كانوا رجاله أم لا؟ لن نتمكن من ربطه بهذه الجريمة على أية حال!\nغوردون: لن أكون واثقاً جداً من ذلك! ما هذا الشيء بحق الجحيم؟! أنزلوه من على الكشاف واقطعوا وثاقه!\nالمفوض لوب: هذا أمر غير مقبول على الإطلاق! لا يهمني إن كانت عصابات متنافسة، أو ملائكة حراس، أو جيش الخلاص اللعين... أخرجوهم من شوارعنا وامسحوهم من صدارة الصفحات الأولى للصحف!",
    "vocabulary": [
      {
        "word": "rattle one's cage",
        "arabicMeaning": "يهز قفص شخص / يستفزه ويثير ذعره وغضبه",
        "example": "The relentless investigative journalist really rattled the corrupt mayor's cage."
      },
      {
        "word": "leverage",
        "arabicMeaning": "أدلة دامغة للضغط والإلزام في المحكمة",
        "example": "The audio recordings provided decisive legal leverage during the trial."
      },
      {
        "word": "unacceptable",
        "arabicMeaning": "غير مقبول إطلاقاً ومرفوض تماماً",
        "example": "Cheating on an academic examination is entirely unacceptable."
      },
      {
        "word": "take the law into hands",
        "arabicMeaning": "يطبق القانون بنفسه خارج إطار السلطة الشرعية",
        "example": "Citizens should not take the law into their own hands during riots."
      }
    ],
    "notes": [
      {
        "term": "Rattled his cage",
        "type": "idiom",
        "explanation": "تعبير اصطلاحي يعني هز استقرار شخص مغرور وزعزعة أمنه واستفزازه."
      },
      {
        "term": "Get things moving",
        "type": "idiom",
        "explanation": "تحريك المياه الراكدة وتسريع وتيرة الإجراءات القانونية المتعطلة."
      },
      {
        "term": "Salvation Army",
        "type": "cultural",
        "explanation": "إشارة لمنظمة 'جيش الخلاص' الخيرية المسيحية الشهيرة، يستخدمها لوب هنا بتهكم وسخرية حادة."
      }
    ],
    "wordCount": 136
  },
  {
    "id": 45,
    "paragraphNumber": 45,
    "english": "Gordon; Why? What about the other haIf?\nBatman; Flass knows.\nGordon; He won't talk.\nBatman: He'll talk to me.\nGORDON: Commissioner Loeb set up a massive task force to catch you.\n-He thinks you're dangerous.\nBatman: What do you think?\nGordon: I think you're trying to help.\nBut I've been wrong before.\n[THUNDER RUMBLlNG]\n[SIRENS WAlLlNG]\nFLASS: Come on, I ain't got all night.\nVendor: Flass, I have kids to feed.\nFlass: What, they don't like falafel?\n[SCREAMING]\nBatman: Where were the other drugs going?\nFlass: I never knew. I don't know.\n-I swear to God.\nBatman: Swear to me!\n[SCREAMING]\nFlass : I don't-- I don't know. I never knew. Never.\nThey went to some guy for a couple days before they went to the dealers.\nBatman: Why?\nFlass: There was something-- Something eIse in the drugs...\n-...something hidden.",
    "arabicTranslation": "شرطي: يقولون إنه كان مجرد رجل واحد بمفرده... أو ربما كائن ومخلوق غريب!\nالمفوض لوب: لقد كان مجرد أحمق تافه يرتدي زياً تنكرياً!\nشرطي: أليس كذلك؟ ولكن هذا الرجل قد سلمنا للتو وقدم بين أيدينا... واحداً من أكبر زعماء الجريمة وأعتى طغاتها في تاريخ هذه المدينة!\nلوب: لا أحد يأخذ القانون بيده ويطبقه بنفسه في مدينتي! أتفهمون ذلك؟!\nراشيل: لا سبيل لدفن هذه القضية والتكتم عليها الآن!\nفينش: لا يزال أمامنا القاضي فادين الفاسد!\nراشيل: لقد أحكمت قبضتي على فادين وغطيته بالأدلة!\nفينش: وماذا عن هذا الوطواط والخفاش الذي يثرثرون عنه ويهذون باسمه؟\nراشيل: حتى وإن أقسم هؤلاء الرجال بأنهم تعرضوا للضرب المبرح على يد وطواط عملاق... فلدينا فالكوني متلبساً في مسرح الجريمة بالذات! المخدرات، والبصمات، وبيانات الشحنات... هذه الشخصية الوطواطية قدمت لنا كل ما نحتاجه لإدانته بالكامل!\nفينش: حسنًا، هيا بنا نتحرك ونفعلها!",
    "vocabulary": [
      {
        "word": "crime lord",
        "arabicMeaning": "زعيم عصابة مافيا طاغية وكبير في الجريمة المنظمة",
        "example": "The federal task force spent a decade pursuing the elusive crime lord."
      },
      {
        "word": "thrash",
        "arabicMeaning": "ينهال عليه بالضرب المبرح واللكم العنيف",
        "example": "The violent bouncers threatened to thrash anyone causing trouble."
      },
      {
        "word": "manifest",
        "arabicMeaning": "بيان حمولة السفينة ووثيقة الشحن الرسمية",
        "example": "Customs agents thoroughly inspected the ship's cargo manifest for contraband."
      },
      {
        "word": "babble",
        "arabicMeaning": "يهذي ويهرف بكلام غير مفهوم من الصدمة",
        "example": "The terrified victim could only babble incoherently after the robbery."
      }
    ],
    "notes": [
      {
        "term": "Bury it",
        "type": "idiom",
        "explanation": "تعبير يعني دفن القضية والتستر على الجريمة ومنع الصحافة من النشر عنها."
      },
      {
        "term": "At the scene",
        "type": "idiom",
        "explanation": "في مسرح الجريمة ذاته متلبساً بالأدلة المادية."
      }
    ],
    "wordCount": 140
  },
  {
    "id": 46,
    "paragraphNumber": 46,
    "english": "Batman:What?\nFlass: I never went to the drop-off point. It was in the Narrows.\n-Cops only go there in force.\nBatman: Do I look like a cop?\nFlass: No--!\nFINCH: This is the one I'm talking about.\n-What's your problem with it?\nFinch: It shouldn't exist.\nThis ship left Singapore with 246 containers, but arrived with 247.\nI'm guessing there's something I'm not supposed to find in there.\nListen, counselor, we don't wanna know what's in Mr. Falcone's crate.\nFinch: Things are working a little differently now. Open it up.\nFINCH: What the hell is this?\n[g*nshots]\nBoy: It's you, isn't it? Everybody's been talking about you.\nMAN: Get in here!\nBoy: The other kids won't believe me.\n[DOOR OPENS]\nGet rid of all traces.\nMAN: Better torch the whole place. CRANE: All right.\n[GLASS SHATTERS]\nSCARECROW: Having trouble?",
    "arabicTranslation": "بروس: الخفافيش كائنات ليلية بطبيعتها.\nألفريد: ربما تكون الخفافيش كذلك بالفعل يا سيدي... ولكن حتى بالنسبة للمليارديرات العابثين اللعوبين، فإن العودة إلى المنزل في الثالثة فجراً أمر يتجاوز كل الحدود المعقولة! إنه الثمن الباهظ لعيش حياة مزدوجة، على ما أخشى! لكن استعراضاتك ومؤثراتك المسرحية قد تركت أثراً وانطباعاً هائلاً بالفعل!\nبروس: الإبهار المسرحي والمخادعة الحاذقة... هما أسلحة فتاكة وبالغة القوة يا ألفريد. وهذه بداية ممتازة وموفقة.\nألفريد: إذا كانت هذه الجروح هي الأولى من بين إصابات كثيرة قادمة لا محالة... فسيكون من الحكمة والكياسة أن نجد عذراً ومبرراً ملائماً لتفسيرها! ممارسة رياضة البولو على سبيل المثال.\nبروس: أنا لن أتعلم لعب البولو يا ألفريد!\nألفريد: إصابات غريبة ومريبة، وحياة اجتماعية منعدمة تماماً... مثل هذه الأمور تطرح وتفرض السؤال بإلحاح: ما الذي يفعله بروس واين تحديداً بوقته وأمواله الطائلة؟!\nبروس: وما الذي يفعله شخص في مثل مكانتي وثروتي؟",
    "vocabulary": [
      {
        "word": "nocturnal",
        "arabicMeaning": "ليلي النشاط (ينشط في الليل وينام في النهار)",
        "example": "Owls and bats are classic examples of nocturnal animals."
      },
      {
        "word": "playboy",
        "arabicMeaning": "شاب ثري عابث ولاهٍ يقضي وقته في الملذات",
        "example": "The tabloid newspapers tracked the wealthy playboy across luxury yachts."
      },
      {
        "word": "pushing it",
        "arabicMeaning": "يتجاوز الحد المعقول والمقبول (عامي)",
        "example": "Staying out until 4 a.m. on a school night is really pushing it."
      },
      {
        "word": "beg the question",
        "arabicMeaning": "يطرح السؤال بقوة ويفرض التساؤل",
        "example": "His lavish spending begs the question of where he got the money."
      },
      {
        "word": "theatrics",
        "arabicMeaning": "الحركات الاستعراضية والدرامية المثيرة",
        "example": "The lawyer's dramatic courtroom theatrics swayed the jury's opinion."
      }
    ],
    "notes": [
      {
        "term": "Pushing it",
        "type": "idiom",
        "explanation": "تعبير عامي دارج يعني المبالغة وتجاوز الخطوط المقبولة في الوقت أو السلوك."
      },
      {
        "term": "Double life",
        "type": "idiom",
        "explanation": "عيش حياة مزدوجة بهويتين مختلفتين تماماً (الملياردير اللعوب vs المقاتل الليلي)."
      }
    ],
    "wordCount": 139
  },
  {
    "id": 47,
    "paragraphNumber": 47,
    "english": "Take a seat. Have a drink.\nYou look like a man who takes himseIf too seriously.\nDo you want my opinion? You need to lighten up.\n[GROANING]\nBruce: AIfred, help me.\nBlood. Take. Take poison. Blood poison.\nPoisonous. Poisonous.\nTHOMAS: Bruce...\n...why do we fall?\nBruce: How long was I out?\nAlfred; Two days.\nIt's your birthday.\nMany happy returns.\nBruce: I've feIt these effects before, but this was so much more potent.\nIt was some kind of hallucinogen, weaponized, in aerosol form.\nFox: You have been hanging out in the wrong clubs, Mr. Wayne.\nAlfred: I called Mr. Fox when your condition worsened after the first day.\nFOX: I analyzed your blood...\n...isolating the receptor compounds and the protein-based catalyst.\nBruce: Am I meant to understand any of that?",
    "arabicTranslation": "ألفريد: يقود السيارات الرياضية الفارهة السريعة، ويواعد نجمات السينما الفاتنات، ويشتري أشياء باهظة ليست معروضة للبيع أصلاً!\nألفريد: ومَن يدري يا سيد بروس الصغير... إذا بدأت في التظاهر والادعاء بأنك تستمتع بوقتك وتمرح... فقد تستمتع بقليل من المرح حقاً عن طريق الصدفة البحتة!\nرجل: سيدي، لدينا حالة طارئة وموقف حرج!\nإيرل: حسنًا، ما الأمر؟\nالرجل: خفر السواحل رصد إحدى سفن الشحن التابعة لشركتنا الليلة الماضية... متضررة ومحطمة بشدة، وجميع أفراد طاقمها مفقودون، وعلى الأرجح لقوا حتفهم جميعاً! كانت السفينة تحمل سلاحاً عسكرياً أولياً وتجريبياً... إنه 'باعث موجات الميكروويف المضغوطة'. لقد صُمم لحروب الصحراء والمناطق الجافة، ولكن يبدو... يبدو أن أحدهم قد قام بتشغيله على متن السفينة! إنه يستخدم موجات ميكروويف مركزة لتبخير إمدادات ومصادر مياه العدو بالكامل! كان الضرر الذي لحق بالسفينة كارثياً وفادحاً... أما السلاح ذاته فهو...\nإيرل: مفقود؟!\nالرجل: نعم، مفقود.",
    "vocabulary": [
      {
        "word": "microwave emitter",
        "arabicMeaning": "باعث ومولد موجات الميكروويف المركزة",
        "example": "The experimental microwave emitter could boil water reservoirs from miles away."
      },
      {
        "word": "vaporize",
        "arabicMeaning": "يبخر السائل ويحوله لبخار فوراً بطاقة هائلة",
        "example": "Extreme heat from the blast caused the surface moisture to vaporize instantly."
      },
      {
        "word": "catastrophic",
        "arabicMeaning": "كارثي ومفجع وفادح الخسائر",
        "example": "The sudden dam failure caused catastrophic flooding in the downstream valley."
      },
      {
        "word": "by accident",
        "arabicMeaning": "بالمصادفة البحتة ومن غير قصد",
        "example": "She discovered a rare manuscript by accident while cleaning the archive."
      }
    ],
    "notes": [
      {
        "term": "By accident",
        "type": "idiom",
        "explanation": "عن طريق المصادفة ودون تدبير مسبق."
      },
      {
        "term": "Desert warfare",
        "type": "cultural",
        "explanation": "الحروب الصحراوية؛ إشارة تكتيكية إلى أن السلاح صُمم لتدمير آبار العدو وتجفيف موارده المائية في البيئات القاحلة."
      }
    ],
    "wordCount": 130
  },
  {
    "id": 48,
    "paragraphNumber": 48,
    "english": "Fox: Not at all. I just wanted you to know how hard it was.\n-Bottom line, I synthesized an antidote.\nBruce: Could you make more?\nFox: You planning on gassing yourseIf again, Mr. Wayne?\nBruce: Well, you know how it is. You're out at night, looking for kicks...\n...someone's passing around the weaponized hallucinogens....\nFox: I'll bring what I have. The antidote should inoculate you for now.\nAIfred, always a pleasure.\nLucius.\nAlfred: You sure you don't want to come in? -\nRachel: I have to get back.\n-I wanted to leave this. -Thank you.\nBRUCE: Rachel?\nRACHEL: Looks like someone's been burning the candle at both ends.\n-Must've been quite an occasion.\nBruce: It is my birthday.\nRachel: I know. I'm sorry I can't come tonight. I was just dropping off your present.\nBruce: You've got better plans?",
    "arabicTranslation": "رجل: سيد واين! سيارة رائعة وجميلة!\nبروس: يجب أن ترى سيارتي الأخرى!\nامرأة: لقد فعل ذلك البطل شيئاً عجزت الشرطة عن تحقيقه طوال تاريخها!\nرجل: لا يجوز لك أن تأخذ القانون بيدك وتطبقه بنفسك!\nامرأة: حسنًا، على الأقل هناك من ينجز شيئاً حقيقياً وملموساً على الأرض!\nرجل: بروس، ساعدني وأدلِ بدلوك هنا في هذا النقاش!\nبروس: ها؟ حسنًا... الرجل الذي يرتدي زي خفاش يعاني بوضوح من اضطرابات وعقد نفسية مستعصية! لكنه وضع فالكوني خلف القضبان على أية حال!\nرجل: والآن رجال الشرطة يطاردونه ويبحثون عنه! ماذا يخبرك ذلك؟\nامرأة: إنهم يشعرون بالغيرة والحقد منه!\nرئيس الخدم في الفندق (الميتر دوتيل): سيدي، حوض السباحة مخصص للزينة والديكور فقط... وصديقاتك لا يرتدين ملابس سباحة!\nبروس: حسنًا، إنهن أوروبيات!\nالميتر دوتيل: سأضطر للطلب منكم المغادرة فوراً... فالأمر ليس مسألة مال!\nبروس: حسنًا، كما ترى... أنا أقوم بشراء هذا الفندق بالكامل الآن... وسأضع بعض القواعد الجديدة لحوض السباحة!\nامرأة: أعتقد أن باتمان يستحق ميدالية شرف ووساماً!\nإيرل: ويستحق سترة مجانين تُعلق عليها تلك الميدالية!",
    "vocabulary": [
      {
        "word": "clearly has issues",
        "arabicMeaning": "يعاني بوضوح من مشاكل وعقد نفسية (تعبير دارج)",
        "example": "Anyone who loses their temper over minor delays clearly has issues."
      },
      {
        "word": "behind bars",
        "arabicMeaning": "خلف القضبان / في غياهب السجن",
        "example": "The convicted con artist will spend the next twenty years behind bars."
      },
      {
        "word": "swimwear",
        "arabicMeaning": "ملابس وبدلات السباحة",
        "example": "Remember to pack comfortable swimwear and towels for the beach trip."
      },
      {
        "word": "straitjacket",
        "arabicMeaning": "سترة المجانين (سترة قماشية لتقييد المصابين بالهياج)",
        "example": "The violent psychiatric patient was secured in a straitjacket for safety."
      }
    ],
    "notes": [
      {
        "term": "Clearly has issues",
        "type": "slang",
        "explanation": "تعبير أمريكي عامي خفيف يعني أن الشخص لديه اضطرابات نفسية أو صدمات سابقة."
      },
      {
        "term": "Behind bars",
        "type": "idiom",
        "explanation": "كناية عن الزج في السجن والاعتقال الجنائي خلف القضبان الحديدية."
      }
    ],
    "wordCount": 139
  },
  {
    "id": 49,
    "paragraphNumber": 49,
    "english": "Rachel; My boss has been missing for days...\n...which means I should probably start by looking...\n-...at the bottom of the river.\nBruce: Rachel.\n[CELL PHONE RINGS]\nRACHEL: Excuse me.\nRachel Dawes.\nWho authorized that? Get Crane down there now. Don't take no for an answer.\nCall Dr. Lehmann, tell him we need our own assessment to the judge by morning.\nBruce: What's wrong?\nRachel: It's Falcone.\nRachel; Dr. Crane moved him to Arkham Asylum on suicide watch.\nBruce: You're going to Arkham now? It's in the Narrows, Rachel.\nRachel: You enjoy your party, Bruce.\n-Some of us have work to do.\nBruce; You be careful.\nRachel; Happy birthday.\nAlfred: But, Master Wayne, the guests will be arriving.\nBruce; Keep them happy until I arrive.\nTell them that joke you know.\n[PLAYING PlANO]\nEARLE: Having fun?",
    "arabicTranslation": "رجل: شكرًا لك.\nراشيل: بروس؟!\nبروس: راشيل؟!\nراشيل: سمعت أنك عدت إلى المدينة. ما الذي تفعله هنا بحق السماء؟\nبروس: أسبح هنا فقط! يا إلهي، من الرائع والمبهج جداً رؤيتكِ مجدداً!\nراشيل: لقد غبت لوقت طويل للغاية.\nبروس: أعلم ذلك. كيف تسير الأمور معك؟\nراشيل: كعادتها دائماً... ووظيفتي تزداد سوءاً وتعقيداً يوماً بعد يوم.\nبروس: لا يمكن للمرء أن يغير العالم بمفرده يا راشيل.\nراشيل: وأي خيار آخر أملكه... حين تكون أنت مشغولاً بالسباحة واللهو مع الفتيات؟!\nبروس: راشيل، كل هذا... كل هذا الذي ترينه... هذا ليس أنا حقاً! إنه مجرد مظهر... في داخلي، أنا... أنا أكثر من هذا بكثير!\nفتاة 1: هيا بنا يا بروس، تعال معنا!\nفتاة 2: بروس، لدينا المزيد من الفنادق الفاخرة لنشتريها!\nراشيل: بروس... في أعماق روحك، ربما لا تزال ذلك الفتى الطيب الرائع الذي عرفته في صغري... ولكن ليس ما أنت عليه في باطنك هو ما يحدد حقيقتك... بل ما تفعله وتصنعه هو الذي يحدد من تكون!",
    "vocabulary": [
      {
        "word": "deep down",
        "arabicMeaning": "في أعماق النفس والسريرة الحقيقية",
        "example": "Deep down, he knew that quitting medical school was the wrong decision."
      },
      {
        "word": "underneath",
        "arabicMeaning": "في الباطن وتحت القناع الخارجي",
        "example": "Underneath his gruff exterior, he had a warm, generous heart."
      },
      {
        "word": "defines you",
        "arabicMeaning": "يحدد جوهرك وهويتك وقيمتك",
        "example": "It is not your wealth or status, but your moral character that defines you."
      },
      {
        "word": "on your own",
        "arabicMeaning": "بمفردك ودون معونة من أحد",
        "example": "You cannot solve such a massive organizational crisis entirely on your own."
      }
    ],
    "notes": [
      {
        "term": "It's what you do that defines you",
        "type": "cultural",
        "explanation": "أهم مقولة فلسفية في الفيلم تلقيها راشيل لبروس، وستكون لاحقاً كلمة السر التي يكشف بها باتمان هويته لراشيل أمام قطار الموت."
      },
      {
        "term": "Deep down",
        "type": "idiom",
        "explanation": "تعبير اصطلاحي يعني المشاعر أو الطباع الجوهرية الدفينة في أعمق طبقات الشخصية."
      }
    ],
    "wordCount": 136
  },
  {
    "id": 50,
    "paragraphNumber": 50,
    "english": "Fox: Bill? Now, what's a big shot like you doing in a place like this?\nEarle: I need some information.\nThe Wayne Enterprise 47-B, 1-ME.\n1-ME.\nLucius: It's a microwave emitter. It was designed to vaporize an enemy's water supply.\nRumor was they tested dispersing water-based chemicaIs into the air...\nFox; ...but isn't that ill*gal?\nEarle: I want all the information on the development of this project...\n...all data, files, backup disks, on my desk right away.\nFox: Did you lose one?\nEarle: I'm merging your department with Archives.\nAnd I am firing you.\nDidn't you get the memo?\nFALCONE: Scarecrow.\nScarecrow.\nCrane: Miss Dawes, this is most irregular.\nI have nothing to add to the report I filed with the judge.\nRachel: I have questions about your report.\nCrane: Such as?",
    "arabicTranslation": "امرأة: دكتور كرين، شكراً جزيلاً لحضورك.\nكرين: على الإطلاق، هذا واجبي. هل قام بجرح معصميه؟ ربما يسعى وراء الدفع بالجنون أمام القضاء، ولكن إن حدث له أي مكروه...\nكرين: بالطبع، درهم وقاية خير من قنطار علاج والأمان أولاً.\nفالكوني: أجل يا دكتور كرين، لم أعد أحتمل هذا الوضع اللعين! لقد طفح الكيل والأمر فوق طاقتي! الجدران تطبق عليّ وتضيق من حولي... بلا بلا بلا! بضعة أيام أخرى من هذا الطعام المقرف وسيصبح هذا الجنون حقيقة واقعة!\nكرين: ما الذي تريده مني بالضبط؟\nفالكوني: أريد أن أعرف... كيف ستقنعني بإبقاء فمي مغلقاً وعدم فضحك؟!\nكرين: بشأن ماذا بالضبط؟ أنت لا تعرف أي شيء ذي قيمة!\nفالكوني: أعلم جيداً أنك لا تريد أن تلقي الشرطة نظرة فاحصة دقيقة على المخدرات التي صادروها في الميناء! وأعلم كل شيء عن تجاربك السرية الشيطانية التي تجريها على نزلاء مصحتك العقلية! أترى يا دكتور، أنا لا أدخل في شراكة تجارية مع رجل دون أن أنبش وأكتشف كل أسراره القذرة! وأولئك السفاحون الذين استخدمتهم... أنا أملك القوة العضلية والقبضة الباطشة في هذه المدينة! لقد قمت بإدخال بضاعتك إلى المدينة لأشهر متتالية... لذا مهما كان ما يخطط له زعيمك، فالأمر ضخم جداً، وأنا أريد نصيبي فيه!",
    "vocabulary": [
      {
        "word": "insanity plea",
        "arabicMeaning": "الدفع بالجنون لعدم الأهلية الجنائية أمام المحكمة",
        "example": "The defense attorney entered an insanity plea on behalf of the accused."
      },
      {
        "word": "better safe than sorry",
        "arabicMeaning": "درهم وقاية خير من قنطار علاج / الاحتياط واجب",
        "example": "Always pack an umbrella on cloudy days; better safe than sorry."
      },
      {
        "word": "walls closing in",
        "arabicMeaning": "الجدران تطبق عليه (شعور بالاختناق والحصار)",
        "example": "When the deadline approached, she felt like the walls were closing in."
      },
      {
        "word": "keep mouth shut",
        "arabicMeaning": "يكتم سره / يخرس ويمتنع عن الوشاية",
        "example": "The witness was bribed to keep his mouth shut during the grand jury hearing."
      }
    ],
    "notes": [
      {
        "term": "Better safe than sorry",
        "type": "idiom",
        "explanation": "مثل إنجليزي شهير يعني اتخاذ الحيطة والحذر المسبق أفضل بكثير من مواجهة الندم لاحقاً."
      },
      {
        "term": "The walls are closing in",
        "type": "idiom",
        "explanation": "تعبير مجازي عن الشعور بالضيق الشديد والتوتر والاختناق والوقوع في شرك لا مفر منه."
      }
    ],
    "wordCount": 132
  },
  {
    "id": 51,
    "paragraphNumber": 51,
    "english": "Rachel: Isn't it convenient for a 52-year-old man who has no history of mental illness...\n...to have a psychotic breakdown just when he's about to be indicted?\nRachel; As you can see for yourseIf, there is nothing convenient about his symptoms.\nFalcone: Scarecrow.\nRachel: What's \"scarecrow\"?\nCrane: Patients suffering delusional episodes often focus their paranoia...\n...on an external tormentor...\n...usually one conforming to Jungian archetypes.\nIn this case, a scarecrow.\nRachel: He's drugged?\nCrane: Psychopharmacology is my primary field.\nCRANE [ON RADIO]: I'm a strong advocate.\nOutside, he was a giant.\nIn here, only the mind can grant you power.\nRachel; You enjoy the reversal.\nCrane: I respect the mind's power over the body.\nIt's why I do what I do.\nRachel: I do what I do to keep th*gs like Falcone behind bars, not in therapy.",
    "arabicTranslation": "كرين: حسنًا، أنا أعلم مسبقاً ما الذي سيقوله هو... سيقول إنه يجب علينا قتلك وتصفيتك فوراً!\nفالكوني: حتى زعيمك هذا يعجز عن النيل مني هنا خلف هذه القضبان! ليس في مدينتي أنا!\nكرين: هل ترغب في رؤية قناعي؟ إنني أستخدمه في تجاربي النفسية. والآن، ربما لا أكون شخصاً مخيفاً جداً لرجل عتيد الجرم مثلك... لكن هؤلاء المجانين لا يطيقون رؤيته ولا يتحملونه على الإطلاق!\nفالكوني: إذن متى استولى المعتوه والمجنون على المصحة العقلية؟!\n[كرين يرتدي قناع 'الفزاعة' (Scarecrow) ويرش فالكوني بغاز الخوف السام]\n[فالكوني يصرخ بهلع وذعر جنوني]\nالفزاعة (Scarecrow): إنهم يصرخون ويبكون وينوحون... تماماً كما تفعل أنت الآن!\nكرين: حسنًا، إنه لا يدعي ذلك أو يتظاهر، ليس هذا الرجل بالذات! سأتحدث إلى القاضي لأرى إن كان بإمكاني نقله... إلى الجناح شديد الحراسة في مصحة آركام، فلا يمكنني علاجه هنا في سجن الشرطة.",
    "vocabulary": [
      {
        "word": "frightening",
        "arabicMeaning": "مخيف ومفزع وباعث على الرعب",
        "example": "The sudden loud explosion in the quiet neighborhood was deeply frightening."
      },
      {
        "word": "scarecrow",
        "arabicMeaning": "فزاعة الحقول لإخافة الطيور (اسم شخصية الشرير)",
        "example": "The farmer set up a tall straw scarecrow to protect his cornfield from crows."
      },
      {
        "word": "nut house",
        "arabicMeaning": "مصح المجانين (تعبير عامي دارج وازدرائي)",
        "example": "In colloquial slang, old psychiatric asylums were often called nut houses."
      },
      {
        "word": "faking",
        "arabicMeaning": "يدعي ويزيف الأعراض تمثيلاً",
        "example": "The student was faking an illness to skip the difficult physics exam."
      }
    ],
    "notes": [
      {
        "term": "Take over the nut house",
        "type": "idiom",
        "explanation": "مثل دارج (When the lunatics take over the asylum) يُضرب عندما يستولي الفاسدون أو المجانين على إدارة المنظومة."
      },
      {
        "term": "Scarecrow",
        "type": "cultural",
        "explanation": "شخصية الشرير الشهير في باتمان (د. جوناثان كرين) الذي يستخدم عقار الهلوسة وقناع الفزاعة لإثارة الفوبيا القاتلة."
      }
    ],
    "wordCount": 137
  },
  {
    "id": 52,
    "paragraphNumber": 52,
    "english": "I want my own psychiatric consuItant to have full access to Falcone...\n...including blood work. Find out what exactly you put him on.\nCrane: First thing tomorrow, then.\nRachel: Tonight.\nI've already paged Dr. Lehmann at County General.\nCRANE: As you wish.\nThis way, please.\nThere's something I think you should see.\nThis is where we make the medicine.\nPerhaps you should have some, clear your head.\n[SCREAMING]\nScarecrow: Who knows you're here?\nWho knows?\nCrane: He's here.\nMAN 1: Who?\nCrane: The Batman.\nMAN 1: What do we do?\nCrane: What anyone does...\n...when a prowler comes around.\n-Call the police.\nMan: You want the cops here?\nCrane: At this point, they can't stop us.\nBut the Batman has a talent for disruption.\nForce him outside, the police will take him down. Go.\nMAN 1: What about her?",
    "arabicTranslation": "باتمان: هناك عاصفة قادمة في الأفق.\nغوردون: حثالة المدينة بدؤوا يشعرون بالتوتر والاضطراب لأنك تصديت لفالكوني وأسقطته.\nباتمان: إنها مجرد بداية. شريكك فلاس كان موجوداً عند أرصفة الميناء برفقة فالكوني.\nغوردون: حسنًا، إنه يعمل كمنفذ وبلطجي منخفض المستوى لصالح العصابات خارج أوقات دوامه الرسمي!\nباتمان: لقد كانوا يقسمون شحنة المخدرات إلى نصفين... نصف واحد فقط ذهب إلى الموزعين والتجار في الشارع.\nغوردون: ولماذا؟ وماذا عن النصف الآخر؟\nباتمان: فلاس يعرف السر.\nغوردون: لن يتحدث أو ينطق بكلمة واحدة!\nباتمان: بل سيتحدث إليّ أنا!\nغوردون: المفوض لوب شكّل قوة مهام أمنية ضخمة للقبض عليك ومطاردتك... فهو يرى أنك تمثل خطراً داهماً.\nباتمان: وما رأيك أنت؟\nغوردون: أرى أنك تحاول المساعدة بحق... لكني أخطأت في تقديري لأشخاص قبلك من قبل.\n[قصف الرعد يدمدم في السماء]\n[صفارات الإنذار تعوي]\nفلاس: هيا أسرع، ليس لدي طوال الليل لأنتظرك!\nبائع الأطعمة المتجول: يا سيد فلاس، لدي أطفال صغار لأطعمهم!\nفلاس: ماذا، ألا يحب أطفالك الفلافل؟!",
    "vocabulary": [
      {
        "word": "jumpy",
        "arabicMeaning": "متوتر وقلق ومضطرب الأعصاب",
        "example": "Drinking four cups of espresso made her feel extraordinarily jumpy."
      },
      {
        "word": "enforcer",
        "arabicMeaning": "منفذ أوامر العصابة بالقوة والبطش",
        "example": "The syndicate employed a ruthless enforcer to collect overdue protection money."
      },
      {
        "word": "task force",
        "arabicMeaning": "قوة مهام خاصة لعملية أمنية معينة",
        "example": "The federal government created a joint task force to combat cybercrime."
      },
      {
        "word": "moonlight",
        "arabicMeaning": "يعمل في وظيفة إضافية ثانية غير معلنة",
        "example": "Many teachers moonlight as online tutors in the evening to earn extra income."
      }
    ],
    "notes": [
      {
        "term": "Storm's coming",
        "type": "idiom",
        "explanation": "تعبير مجازي شهير في الأدب يعني اقتراب أزمة عاصفة وصدام دموي وشيك."
      },
      {
        "term": "Moonlight as",
        "type": "idiom",
        "explanation": "العمل بوظيفة جانبية غير رسمية في المساء بالإضافة إلى الدوام النهاري الأصلي."
      }
    ],
    "wordCount": 139
  },
  {
    "id": 53,
    "paragraphNumber": 53,
    "english": "CRANE: She hasn't got long.\nI gave her a concentrated dose.\nThe mind can only take so much. Now go.\nMAN 2: The things they say about him.\nCan he really fly?\nMAN 3: I heard he can disappear.\nCrane: Well, we'll find out.\nWon't we?\n[g*nshots]\nBatman: Taste of your own medicine, doctor?\nWhat have you been doing here?\nWho are you working for?\nCrane: Ra's-- Ra's al Ghul.\nBatman: Ra's al Ghul is dead. Who are you working for?\nCrane.\nCrane: Dr. Crane isn't here right now.\nBut if you'd like to make an appointment....\n[SIRENS WAlLlNG]\nOFFICER [OVER P.A.]: Batman, put down your weapons and surrender.\nYou're surrounded.\nFlass: What are you waiting for?\nBatman: Backup.\nFlass: Backup?\nCop; The Batman's in there.\nSWAT's on the way. But if you wanna go in now...",
    "arabicTranslation": "[فلاس يُعلق مقلوباً في الهواء من قدميه على حافة سطح عمارة شاهقة بواسطة حبل باتمان]\n[فلاس يصرخ بهلع جنوني]\nباتمان: إلى أين كانت تذهب باقي شحنات المخدرات؟!\nفلاس: لم أكن أعلم قط! لا أعلم شيئاً، أقسم بالله العظيم!\nباتمان: [يقربه من حافة السقوط إلى الهاوية]: أقسم لي أنا!\n[فلاس يصرخ مرعوباً]: لا أعلم... لا أعلم شيئاً على الإطلاق! لم أكن أعرف قط، أبدًا! كانت تذهب إلى شخص ما لبضعة أيام قبل أن تُرسل إلى تجار الشوارع!\nباتمان: ولماذا؟\nفلاس: كان هناك شيء آخر مضاف إلى المخدرات... شيء آخر مخفي بداخلها!\nباتمان: ما هو هذا الشيء؟!\nفلاس: لم أذهب قط إلى نقطة التسليم السرية! كانت تقع في حي 'الضياق' (الناروز)... ورجال الشرطة لا يجرؤون على دخول ذلك الحي إلا كقوة مسلحة ضخمة!\nباتمان: وهل أبدو لك كضابط شرطة؟!\nفلاس: لااااا!",
    "vocabulary": [
      {
        "word": "swear to God",
        "arabicMeaning": "يقسم بالله العظيم تأكيداً لصدقه",
        "example": "I swear to God that I left the car keys on the kitchen counter."
      },
      {
        "word": "drop-off point",
        "arabicMeaning": "نقطة التسليم والاستلام السرية للشحنات",
        "example": "The couriers agreed to leave the package at a designated drop-off point."
      },
      {
        "word": "in force",
        "arabicMeaning": "بأعداد غفيرة وقوة عسكرية كاملة",
        "example": "Riot police arrived in force to secure the perimeter around city hall."
      },
      {
        "word": "the Narrows",
        "arabicMeaning": "حي الضياق (المنطقة الشعبية والموبوءة في غوثام)",
        "example": "The impoverished island district known as the Narrows was notorious for crime."
      }
    ],
    "notes": [
      {
        "term": "Swear to me!",
        "type": "cultural",
        "explanation": "الرد الأيقوني الأكثر شراسة لباتمان في ثلاثية نولان بصوت كريستيان بيل الأجش المرعب حين يقسم فلاس بالله، مبيناً أنه القاضي الحاسم في تلك اللحظة."
      },
      {
        "term": "In force",
        "type": "idiom",
        "explanation": "تعبير يعني النزول بأعداد كبيرة وعتاد كامل ومدرعات لمواجهة الأخطار الجسيمة."
      }
    ],
    "wordCount": 137
  },
  {
    "id": 54,
    "paragraphNumber": 54,
    "english": "...I'll be right behind you, sir.\nFlass: SWAT's on the way.\n-Hey. -Hey.\nGORDON: What's happened to her?\nBatman: Crane poisoned her with a psychotropic hallucinogen, a panic-inducing toxin.\nGordon: Let me get her down to the medics.\nBatman: They can't help her, but I can.\nGet her downstairs. Meet me in the alley.\nCrane's been smuggling his toxin hidden in Falcone's drugs...\n...and they're dumping it into the water supply.\nGordon: What was he planning?\nBatman: I don't know.\nGordon; Was he working for Falcone?\nBatman: He mentioned someone eIse, someone worse.\nI need to get her the antidote before the damage is permanent.\nGordon: How long does she have?\nBatman: Not long.\n[BUZZING IN DISTANCE]\nGordon: : What is that?\nBatman: Backup.\nFlass: What the--?\n[BATS SQUEAKING]\nBatman: Excuse me.\nBATMAN: How is she?",
    "arabicTranslation": "فينش: هذه هي الحاوية التي كنت أتحدث عنها بالضبط!\n- وما هي مشكلتك معها؟\nفينش: لا ينبغي لهذه الحاوية أن تكون موجودة أصلاً! لقد غادرت هذه السفينة ميناء سنغافورة وهي تحمل 246 حاوية، لكنها وصلت إلى هنا بـ 247 حاوية! وأرجح أن هناك شيئاً لا يفترض بي العثور عليه مخبأ بداخلها!\nحارس المرفأ: اسمع يا سيادة المستشار، نحن لا نريد أن نعرف ما هو موجود داخل صندوق السيد فالكوني!\nفينش: الأمور تسير بطريقة مختلفة بعض الشيء الآن! افتحها فوراً!\nفينش: ما هذا الشيء اللعين بحق الجحيم؟!\n[طلقات نارية تغتال فينش وحراسه فوراً]\nطفل صغير: إنه أنت، أليس كذلك؟! الجميع يتحدثون عنك في كل مكان!\nرجل: ادخل إلى هنا فوراً!\nالطفل: الأطفال الآخرون لن يصدقوني أبداً!\n[الباب يُفتح في مختبر المخدرات السري بالناروز]\nتخلصوا من كل الآثار والأدلة!\nرجل: من الأفضل إشعال النار في المكان بأكمله وحرقه!\nكرين: حسنًا جدًا.",
    "vocabulary": [
      {
        "word": "container",
        "arabicMeaning": "حاوية شحن بحري بضائع ضخمة",
        "example": "The shipping container was loaded onto the freight vessel by giant cranes."
      },
      {
        "word": "counselor",
        "arabicMeaning": "مستشار قانوني / لقب احترام للمحامي والمدعي العام",
        "example": "The judge invited the counselor to approach the bench and state his motion."
      },
      {
        "word": "torch",
        "arabicMeaning": "يشعل النار عمداً لحرق وإتلاف الأدلة",
        "example": "Arsonists attempted to torch the abandoned warehouse late at night."
      },
      {
        "word": "traces",
        "arabicMeaning": "آثار وبقايا وأدلة مادية دالة",
        "example": "Forensic investigators found microscopic traces of gunpowder on his gloves."
      }
    ],
    "notes": [
      {
        "term": "Torch the whole place",
        "type": "slang",
        "explanation": "مصطلح إجرامي يعني حرق وإشعال النيران في المنشأة لطمس كافة الآثار والبصمات الجنائية."
      },
      {
        "term": "Counselor",
        "type": "cultural",
        "explanation": "لقب قانوني معتاد في النظام القضائي الأمريكي يُخاطب به المدعون العامون والمحامون في التحقيقات."
      }
    ],
    "wordCount": 136
  },
  {
    "id": 55,
    "paragraphNumber": 55,
    "english": "Gordon: She's fading. We gotta go.\nI'll get my car.\nBATMAN: I brought mine.\nGordon: Yours?\nI've gotta get me one of those.\nOFFICER 1: He is in a vehicle.\nOFFICER 2 [OVER RADIO]: Make and color?\nIt's a black...\n...tank.\nBatman: Stay calm.\nYou've been poisoned.\nOfficer: I'm on him.\nBatman: Breathe slowly.\nHold on.\nRachel: What are you doing?\nBatman: Shortcut.\nOFFICER 3 [OVER RADIO]: Air One to ground, block that ramp.\nHe's got no way off that roof.\nTurn off your engine. Step away from the car.\nBatman: Trust me.\nCOMPUTER: Weapons system activated.\nWho is this guy?\nOFFICER 2 [OVER RADIO]: Where's he going?\nHe's on the roof.\nOFFICER 2: What street is he taking?\nHe's not on a street.\nHe's flying on rooftops.\nAt least tell me what it looks like.\nNever mind.\nGot him.",
    "arabicTranslation": "[تحطم الزجاج واندفاع باتمان من النافذة]\nالفزاعة (Scarecrow): أتواجه بعض المتاعب؟ خذ مقعداً واجلس. وتناول مشروباً! تبدو كرجل يأخذ نفسه على محمل الجد أكثر من اللازم! هل تود سماع رأيي؟ أنت بحاجة إلى أن تروّح عن نفسك وتكون أقل تزمتاً!\n[الفزاعة يرش غاز الخوف في وجه باتمان ثم يضرم النار في بذلته]\n[باتمان يئن من الرعب وتأثير السم ويهوي من النافذة إلى الزقاق]\nبروس: [يلهث في حمى وهلوسة]: ألفريد... ساعدني! الدم... خذ... خذ السم... دم مسموم... سام... سام!\nتوماس واين: [صوت والده في ذاكرته]: بروس... لماذا نسقط؟\nبروس: [يستفيق في سريره بالقصر بعد يومين]: كم من الوقت ظللت فاقداً للوعي وغائباً عن الوجود؟\nألفريد: يومان كاملان يا سيدي. إنه يوم ميلادك اليوم! وأتمنى لك عوداً حميداً ومناسبات سعيدة مديدة!\nبروس: لقد شعرت بهذه الآثار من قبل، لكن هذا السم كان أكثر فاعلية وقوة وضراوة بمراحل! لقد كان نوعاً من المهلوسات، جرى تحويله إلى سلاح في هيئة رذاذ متطاير!",
    "vocabulary": [
      {
        "word": "lighten up",
        "arabicMeaning": "يروّح عن نفسه / يهدأ ويكون أقل تزمتاً وجدية",
        "example": "You take every joke so seriously; you really need to lighten up!"
      },
      {
        "word": "out",
        "arabicMeaning": "فاقد للوعي ومغمى عليه",
        "example": "The boxer took a heavy blow to the jaw and was completely out for two minutes."
      },
      {
        "word": "potent",
        "arabicMeaning": "شديد الفاعلية والتأثير والقوة",
        "example": "The doctor prescribed a potent antibiotic to cure the aggressive infection."
      },
      {
        "word": "hallucinogen",
        "arabicMeaning": "عقار مهلوس ومثير للخيالات والأوهام",
        "example": "The toxic mushroom contains a powerful hallucinogen that causes vivid visions."
      },
      {
        "word": "many happy returns",
        "arabicMeaning": "أتمنى لك عيد ميلاد سعيد وتكراراً للأيام الطيبة",
        "example": "Alfred smiled warmly and wished Master Bruce many happy returns of the day."
      }
    ],
    "notes": [
      {
        "term": "Lighten up",
        "type": "idiom",
        "explanation": "تعبير دارج يعني 'لا تأخذ الأمور بجدية مفرطة وكن أكثر مرونة ومرحاً'."
      },
      {
        "term": "Many happy returns",
        "type": "cultural",
        "explanation": "عبارة تهنئة بريطانية تقليدية تُقال في أعياد الميلاد تعني 'أتمنى لك عودة هذه المناسبة السعيدة لسنوات مديدة'."
      }
    ],
    "wordCount": 140
  },
  {
    "id": 56,
    "paragraphNumber": 56,
    "english": "Coming right up on his butt.\nOFFICER 3: We're tracking suspect vehicle heading west on I-17.\n-Air One to ground. -I lost him.\nOFFICER 3: We've lost visual. Exit 9 is blocked.\nWe'll loop back to check the frontage road.\nCOMPUTER: Stealth mode activated.\nBatman; Stay with me.\nOfficer; What--? There he is.\nBatman: Just hold on.\nRachel!\nGORDON: They get any of this into the mains?\nOFFICER: Yeah.\nGordon: Notify the water company. There's gotta be a way of isolating the areas.\nNo. They put it all in. They must've been at this for weeks.\n-Gotham's entire water supply is laced.\nGordon; Why haven't we feIt the effects?\nMust be a compound that has to be absorbed through the lungs.\n[BATS SQUEAKING]\nBATMAN: How do you feel?\nRachel: Where are we?\n-Why did you bring me here?",
    "arabicTranslation": "لوشيوس فوكس: لقد كنت ترتاد وتسهر في النوادي الخاطئة إذن يا سيد واين!\nألفريد: لقد اتصلت بالسيد فوكس حين ساءت حالتك وتدهورت بعد انقضاء اليوم الأول.\nفوكس: لقد قمت بتحليل عينتك من الدم... وعزلت المركبات المستقبلية والمحفز البروتيني.\nبروس: وهل يُفترض بي أن أفهم أي كلمة من هذا الكلام الطبي؟!\nفوكس: لا، على الإطلاق! أردتك فقط أن تدرك كم كان الأمر شاقاً ومعقداً للغاية! وخلاصة القول والنتيجة النهائية: لقد قمت بتخليق وتصنيع الترياق المضاد للسم!\nبروس: وهل بمقدورك تصنيع المزيد منه بكميات أكبر؟\nفوكس: هل تخطط لتعريض نفسك للغازات السامة مجددًا يا سيد واين؟!\nبروس: حسنًا، أنت تعلم كيف تسير الأمور: تخرج ليلاً للترويح عن النفس والبحث عن الإثارة... فإذا بأحدهم يمرر حولك مهلوسات حربية سامة!\nفوكس: سأحضر ما صنعته معي، وهذا الترياق سيعطيك مناعة مؤقتة في الوقت الراهن. ألفريد، دائماً ما يسعدني لقاؤك.\nألفريد: إلى اللقاء يا لوشيوس.",
    "vocabulary": [
      {
        "word": "hang out",
        "arabicMeaning": "يرتاد / يقضي وقته في مكان للتسلية",
        "example": "Teenagers love to hang out at the shopping mall on weekends."
      },
      {
        "word": "synthesize",
        "arabicMeaning": "يخلّق ويصنع مركباً كيميائياً في المختبر",
        "example": "Chemists managed to synthesize the rare plant compound artificially."
      },
      {
        "word": "antidote",
        "arabicMeaning": "ترياق ومصل مضاد للسموم",
        "example": "Doctors administered the antivenom antidote immediately after the snake bite."
      },
      {
        "word": "bottom line",
        "arabicMeaning": "خلاصة القول والنتيجة الجوهرية",
        "example": "The bottom line is that our company must cut operating costs to survive."
      },
      {
        "word": "inoculate",
        "arabicMeaning": "يحصن ويلقح بالجسم لتوليد مناعة",
        "example": "Health workers visited schools to inoculate students against the flu."
      }
    ],
    "notes": [
      {
        "term": "Bottom line",
        "type": "idiom",
        "explanation": "تعبير اصطلاحي يعني 'النتيجة الحاسمة والخلاصة النهائية دون إطالة تفاصيل'."
      },
      {
        "term": "Looking for kicks",
        "type": "slang",
        "explanation": "البحث عن الإثارة والمغامرات بدافع الفضول أو الفراغ (مبرر ساخر من بروس)."
      }
    ],
    "wordCount": 138
  },
  {
    "id": 57,
    "paragraphNumber": 57,
    "english": "Batman: If I hadn't, your mind would be lost.\n-You were poisoned. -It was--\nRachel; It was Dr. Crane.\nBatman; Rest. Gordon has Crane.\nRachel: Is Sergeant Gordon your friend?\nBatman: I don't have the luxury of friends.\nI'm gonna give you a sedative. You'll wake up back at home.\nWhen you do, get these to Gordon, and Gordon alone. Trust no one.\nRachel: What are they?\nBatman: The antidote.\nOne for Gordon to inoculate himseIf, the other for mass production.\nRACHEL: Mass production?\nBatman; Crane was just a pawn. We need to be ready.\nAlfred; When you told me your grand plan for saving Gotham...\n...all that stopped me from calling the men in white coats...\n...was when you said it wasn't about thrill-seeking.\nBruce: It's not.\nAlfred: What would you call that?\nBruce: Damn good television.",
    "arabicTranslation": "ألفريد: هل أنت واثق من أنك لا ترغبين في الدخول يا آنسة راشيل؟\nراشيل: يجب عليّ العودة سريعاً إلى العمل. أردت فقط أن أترك هذه الهدية له.\nألفريد: شكراً لكِ.\nبروس: راشيل؟\nراشيل: يبدو أن شخصاً ما هنا كان يحرق شمعته من كلا الطرفين ويسهر حتى الإنهاك! لا بد أنها كانت مناسبة استثنائية!\nبروس: إنه يوم ميلادي اليوم.\nراشيل: أعلم ذلك جيداً. وأنا آسفة للغاية لأنني عاجزة عن الحضور الليلة. كنت فقط أضع هديتي من أجلك.\nبروس: هل لديكِ خطط ومواعيد أفضل؟\nراشيل: رئيسي في العمل مفقود منذ عدة أيام... مما يعني أنني ربما يجدر بي البدء بالبحث عنه... في قاع النهر!\nبروس: راشيل...\n[رنين هاتفها المحمول]\nراشيل: المعذرة. راشيل دوز تتحدث. مَن الذي سمح بذلك وفوضه؟! أحضروا دكتور كرين إلى هناك فوراً، ولا تقبلوا منه أي رفض! اتصلوا بالدكتور ليمان وأخبروه أننا بحاجة إلى تقرير تقييمنا الطبي الخاص ليُقدم للقاضي بحلول الصباح!",
    "vocabulary": [
      {
        "word": "burn the candle at both ends",
        "arabicMeaning": "يجهد نفسه بالعمل والسهر المفرط بلا راحة",
        "example": "Between two jobs and university classes, he was burning the candle at both ends."
      },
      {
        "word": "drop off",
        "arabicMeaning": "يوصل غرضاً أو شخصاً في طريقه سريعاً",
        "example": "Could you drop off these library books on your way to the grocery store?"
      },
      {
        "word": "don't take no for an answer",
        "arabicMeaning": "لا تقبل أي رفض أو اعتذار وأصر على التنفيذ",
        "example": "When negotiating salary, be polite but do not take no for an answer."
      },
      {
        "word": "assessment",
        "arabicMeaning": "تقييم وتقرير فحص مهني دقيق",
        "example": "The psychiatrist conducted a comprehensive assessment of the patient's state."
      }
    ],
    "notes": [
      {
        "term": "Burning the candle at both ends",
        "type": "idiom",
        "explanation": "مثل إنجليزي شهير يعني استنزاف طاقة الجسد بالسهر والعمل المتواصل من الصباح الباكر حتى الهزيع الأخير من الليل."
      },
      {
        "term": "Bottom of the river",
        "type": "idiom",
        "explanation": "كناية سوداوية في عالم الجريمة عن العثور على جثة شخص مغدور ألقته المافيا في النهر."
      }
    ],
    "wordCount": 138
  },
  {
    "id": 58,
    "paragraphNumber": 58,
    "english": "Alfred:,It's a miracle no one was k*lled.\nBruce; I didn't have time to observe the rules of the road, AIfred.\nAlfred: You're getting lost inside this monster of yours.\nBruce: I'm using this monster to help other people, just like my father did.\nAlfred: For Thomas Wayne, helping others...\n...wasn't about proving anything to anyone, including himseIf.\nBruce; It's Rachel, AIfred. She was dying.\nShe's downstairs, sedated. I need you to take her home.\nAlfred: Well, we both care for Rachel, but what you're doing has to be beyond that.\nIt can't be personal, or you're just a vigilante.\nBruce: Is Fox still here?\nAlfred: Yes, sir.\nBruce: We need to send these people away.\nAlfred: Those are Bruce Wayne's guests. You have a name to maintain.\nBruce: I don't care about my name.",
    "arabicTranslation": "بروس: ما الخطب وما الذي حدث؟\nراشيل: إنه فالكوني! الدكتور كرين نقله إلى مصحة آركام تحت رقابة مشددة لمنع الانتحار!\nبروس: أذاهبة إلى آركام الآن؟! إنها في حي 'الضياق' الخطر يا راشيل!\nراشيل: استمتع بحفلتك وموسيقاك يا بروس... فبعضنا لديه عمل حقيقي لكي ينجزه!\nبروس: كوني حذرة أرجوكِ.\nراشيل: عيد ميلاد سعيد!\nألفريد: ولكن يا سيد واين، الضيوف سيبدؤون في التوافد بعد قليل!\nبروس: أبقهم سعداء ومستمتعين حتى أصل... أخبرهم بتلك النكتة الطريفة التي تعرفها!\n[عزف بيانو هادئ في قاعة الحفلات]\nإيرل: هل تستمتع بوقتك يا فوكس؟\nفوكس: بيل إيرل؟ ما الذي يفعله رجل ذو نفوذ وشأن كبير ومكانة مرموقة مثلك في مكان كهذا؟!\nإيرل: أحتاج إلى بعض المعلومات الهامة. بخصوص مشروع 'واين إنتربرايزز 47-B، باعث الميكروويف 1-ME'.\nلوشيوس فوكس: إنه باعث موجات ميكروويف. صُمم لتبخير إمدادات مياه العدو بالكامل. وكانت هناك شائعات تفيد بأنهم اختبروا نثر وتوزيع مواد كيميائية مائية في الهواء بواسطته... لكن أليس ذلك مخالفاً للقانون ومحظوراً دولياً؟!",
    "vocabulary": [
      {
        "word": "suicide watch",
        "arabicMeaning": "مراقبة مشددة لمنع محاولات الانتحار",
        "example": "The depressed inmate was placed on strict round-the-clock suicide watch."
      },
      {
        "word": "big shot",
        "arabicMeaning": "شخصية ذات نفوذ وشأن ومكانة رفيعة (عامي)",
        "example": "After his company succeeded, he acted like an untouchable big shot."
      },
      {
        "word": "dispersing",
        "arabicMeaning": "نثر ونشر وتوزيع مواد في الهواء",
        "example": "The specialized agricultural plane was dispersing fertilizer across the fields."
      },
      {
        "word": "illegal",
        "arabicMeaning": "غير قانوني ومخالف للوائح والدساتير",
        "example": "Possessing untraceable firearms is strictly illegal in this jurisdiction."
      }
    ],
    "notes": [
      {
        "term": "Big shot",
        "type": "slang",
        "explanation": "مصطلح عامي أمريكي دارج يعني شخصاً ثرياً وذا سلطة ونفوذ كبيرين."
      },
      {
        "term": "Suicide watch",
        "type": "cultural",
        "explanation": "إجراء أمني وقضائي صارم في السجون والمصحات لإبقاء السجين تحت عين الحراسة المستمرة لئلا ينهي حياته."
      }
    ],
    "wordCount": 134
  },
  {
    "id": 59,
    "paragraphNumber": 59,
    "english": "Alfred: It's not just your name, sir. It's your father's name.\nAnd it's all that's left of him.\nDon't destroy it.\n[GUESTS SINGING \"HAPPY BIRTHDAY\"]\n-Mr. Earle.\nEarle: Happy birthday, Bruce.\nBruce: Thank you.\nHow did the stock offering go?\nPrices soared.\nWho was buying?\nEarle: All kinds of funds and brokerages.\nIt's a bit technical.\nThe key thing is...\n...our company's future is secure.\nGreat.\nAlfred; A little the worse for wear, I'm afraid.\nGORDON: What was the plan, Crane?\nHow were you gonna get your toxin into the air?\nCrane: Scarecrow. Scarecrow.\nGordon; Who were you working for, Crane?\nCrane; Oh, it's too late.\nYou can't stop it now.\nGORDON: Here.\nMAN: Happy birthday, Bruce. -\nBruce; Thank you. Thanks.\nAnd thank you for that item.\nFox; You're welcome.\n-I know you'll put it to good use.",
    "arabicTranslation": "إيرل: أريد جميع المعلومات والبيانات المتعلقة بتطوير هذا المشروع... كافة الملفات، والأقراص الاحتياطية على مكتبي فوراً!\nفوكس: هل أضعتم واحداً وفقدتموه؟!\nإيرل: إنني أقوم بدمج قسمك مع قسم الأرشيف... وأنا أقوم بطردك وفصلك من العمل! ألم تستلم المذكرة الرسمية؟!\nفالكوني: [يهذي برعب في زنزانته بآركام]: الفزاعة... الفزاعة!\nالدكتور كرين: آنسة دوز، هذا إجراء في غاية الشذوذ ومخالف للأصول المتبعة تماماً. ليس لدي ما أضيفه إلى التقرير الذي رفعته وقدمته للقاضي.\nراشيل: لدي أسئلة وعلامات استفهام حول تقريرك هذا.\nكرين: مثل ماذا؟\nراشيل: أليس من المريب والمريح جداً والمناسب لرجل يبلغ من العمر 52 عاماً، وليس لديه أي تاريخ من الأمراض العقلية... أن يصاب بانهيار نفسي وعصبي حاد في اللحظة التي توشك فيها هيئة المحلفين على توجيه لائحة الاتهام الجنائية إليه؟!\nكرين: كما ترين بنفسك، ليس هناك أي شيء مريح أو ممتع في أعراضه المرضية.",
    "vocabulary": [
      {
        "word": "memo",
        "arabicMeaning": "مذكرة إدارية رسمية داخلية",
        "example": "The human resources department sent a company-wide memo about holidays."
      },
      {
        "word": "irregular",
        "arabicMeaning": "شاذ ومخالف للأصول والإجراءات النظامية",
        "example": "Accepting cash without providing an official receipt is highly irregular."
      },
      {
        "word": "indicted",
        "arabicMeaning": "تُوجه إليه لائحة اتهام جنائية رسمية في المحكمة",
        "example": "The corrupt executive was indicted on seven counts of tax fraud."
      },
      {
        "word": "psychotic breakdown",
        "arabicMeaning": "انهيار نفسي وعقلي حاد وفقدان الاتصال بالواقع",
        "example": "Severe chronic stress triggered an acute psychotic breakdown in the soldier."
      }
    ],
    "notes": [
      {
        "term": "Didn't you get the memo?",
        "type": "idiom",
        "explanation": "تعبير دارج ساخر ومشهور في بيئات العمل يعني 'ألم يصلك الخبر أو القرار الصادم بطردك بعد؟'."
      },
      {
        "term": "Convenient",
        "type": "idiom",
        "explanation": "تُستخدم هنا بتهكم (Isn't it convenient?) للإشارة إلى أن توقيت الحدث مريب ويخدم مصلحة المجرم للإفلات من المحاكمة."
      }
    ],
    "wordCount": 139
  },
  {
    "id": 60,
    "paragraphNumber": 60,
    "english": "Bruce; I already have.\nHow long would it take to manufacture on a large scale?\nFox: Weeks. Why?\nBruce: Somebody's planning to disperse the toxin using the water supply.\nThe water supply won't help you disperse an inhalant.\nBruce: What?\nFox: Unless you have a microwave emitter powerful enough...\n...to vaporize all the water in the mains.\nA microwave emitter like the one Wayne Enterprises just misplaced.\nBruce: Misplaced?\nFox; Earle just fired me for asking too many questions about it.\nBruce: Go back to Wayne Enterprises now and start making more of that antidote.\nThe police are gonna need as much as they can get their hands on.\nFox; My security clearance has been revoked.\nBruce: That wouldn't stop a man like you, would it?\nFox: I suppose not.\nDelane: Bruce, there's somebody you must meet.",
    "arabicTranslation": "فالكوني: الفزاعة... الفزاعة!\nراشيل: وما هي تلك 'الفزاعة' التي يهذي بها؟\nكرين: المرضى الذين يعانون من نوبات ذهانية وضلالات يركزون أوهامهم وهواجسهم الارتيابية... على معذب ومضطهد خارجي، عادة ما يتطابق مع النماذج البدائية في علم نفس يونغ... وفي هذه الحالة، فزاعة حقول.\nراشيل: هل هو مخدر بعقاقير؟\nكرين: علم الأدوية النفسية هو مجالي وتخصصي الأساسي الأول. وأنا من أشد المؤيدين له. في الخارج، كان عملاقاً جباراً وباطشاً... أما هنا في الداخل، فالعقل وحده هو ما يمنحك السلطة والقوة.\nراشيل: أنت تستمتع بهذا الانقلاب وتبادل الأدوار!\nكرين: أنا أحترم سلطة العقل وقوته القاهرة على الجسد... ولهذا السبب تحديداً أفعل ما أفعله.\nراشيل: وأنا أفعل ما أفعله لإبقاء السفاحين أمثال فالكوني خلف القضبان، وليس في جلسات العلاج النفسي! أريد أن يُمنح استشاريّ النفسي الخاص وصولاً كاملاً لفحص فالكوني... بما في ذلك تحاليل الدم الكاملة، لمعرفة ما وضعته له بالضبط!",
    "vocabulary": [
      {
        "word": "delusional",
        "arabicMeaning": "واهم ومصاب بالضلالات والأوهام النفسية",
        "example": "The feverish patient was having delusional thoughts about being followed."
      },
      {
        "word": "paranoia",
        "arabicMeaning": "جنون الارتياب والشك المفرط بالآخرين",
        "example": "His chronic paranoia made him mistrust even his closest family members."
      },
      {
        "word": "Jungian archetypes",
        "arabicMeaning": "النماذج البدائية والأشكال الرمزية في نظرية كارل يونغ",
        "example": "The shadow and the hero are central Jungian archetypes in literature."
      },
      {
        "word": "psychopharmacology",
        "arabicMeaning": "علم الأدوية النفسية وتأثير العقاقير على السلوك",
        "example": "Recent advances in psychopharmacology have produced safer antidepressants."
      }
    ],
    "notes": [
      {
        "term": "Jungian archetypes",
        "type": "cultural",
        "explanation": "مرجع لنظريات عالم النفس السويسري كارل يونغ حول الرموز والصور النمطية الراسخة في اللاشعور الجمعي للبشرية (كرمز الفزاعة المخيفة)."
      },
      {
        "term": "Enjoy the reversal",
        "type": "idiom",
        "explanation": "الاستمتاع بانقلاب موازين القوى حيث أصبح زعيم المافيا الجبار مجرد ضحية مذعورة تحت رحمة الطبيب."
      }
    ],
    "wordCount": 137
  },
  {
    "id": 61,
    "paragraphNumber": 61,
    "english": "Bruce: Not now, Mrs. Delane.\nDelane: Now, am I pronouncing this right...\n...Mr. Ra's al Ghul?\nBruce: You're not Ra's al Ghul.\nI watched him die.\nDUCARD: But is Ra's al Ghul immortal?\nAre his methods supernatural?\nBruce: Or cheap parlor tricks to conceal your true identity, Ra's?\nRa’s Al Ghul: Surely a man who spends his nights scrambling over the rooftops of Gotham...\n...wouldn't begrudge me dual identities.\nBruce: I saved your life.\nRa’s Al Ghul; I warned you about compassion, Bruce.\nBruce: Your quarrel is with me.\nYou let these people go.\nRa’s Al Ghul: You are welcome to explain the situation to them.\nBRUCE: Everyone.\nEverybody?\nI....\nI want to thank you all for coming here tonight and drinking all of my booze.\n[GUESTS LAUGHING]\nBruce: No, really.\nThere's a thing about being a Wayne...",
    "arabicTranslation": "كرين: أول شيء صباح الغد إذن.\nراشيل: بل الليلة فوراً! لقد استدعيت الدكتور ليمان بالفعل من المستشفى العام للمقاطعة.\nكرين: كما تشائين تماماً. من هذا الطريق، من فضلكِ. هناك شيء أعتقد أنه ينبغي عليكِ رؤيته. هذا هو المكان الذي نصنع فيه الدواء هنا! ربما يجدر بكِ تناول وتنشق القليل منه لتصفية ذهنكِ تماماً!\n[صراخ راشيل بهلع حين يرش كرين غاز الخوف في وجهها]\nالفزاعة (Scarecrow): مَن يعلم بوجودكِ هنا؟! مَن يعلم؟!\nكرين: [يسمع صوتاً في الظلام]: إنه هنا!\nرجل 1: مَن تعني؟!\nكرين: باتمان!\nرجل 1: وما الذي ينبغي علينا فعله؟!\nكرين: ما يفعله أي شخص عاقل... حين يتجول متسلل ولص في أرجاء منزله: اتصلوا بالشرطة فوراً!\nالرجل: أتريد حضور الشرطة إلى هنا في مختبرنا السري؟!\nكرين: في هذه المرحلة بالذات، هم عاجزون عن إيقاف مخططنا على أية حال! ولكن باتمان يملك موهبة استثنائية في التعطيل وإثارة الفوضى وإفساد الخطط... أجبروه على الخروج، وستتولى الشرطة إسقاطه! هيا تحركوا!",
    "vocabulary": [
      {
        "word": "clear your head",
        "arabicMeaning": "يصفي ذهنه ويريح باله (تعبير استهزائي مسموم هنا)",
        "example": "Take a short brisk walk in the park to clear your head before the exam."
      },
      {
        "word": "prowler",
        "arabicMeaning": "متسلل ومتلصص يتجول بنوايا مريبة",
        "example": "The neighborhood security guard spotted a suspicious prowler near the garage."
      },
      {
        "word": "disruption",
        "arabicMeaning": "تعطيل وتشويش وإفساد سير المخططات",
        "example": "Severe rail strikes caused massive disruption to the morning commute."
      },
      {
        "word": "take down",
        "arabicMeaning": "يسقط ويشل حركة الخصم أو يعتقله",
        "example": "The elite SWAT team moved quickly to take down the armed barricade."
      }
    ],
    "notes": [
      {
        "term": "Talent for disruption",
        "type": "idiom",
        "explanation": "امتلاك مهارة استثنائية ومفاجئة في إرباك الخصوم وإفساد ترتيباتهم المحكمة."
      },
      {
        "term": "Clear your head",
        "type": "idiom",
        "explanation": "تعبير اصطلاحي يعني تصفية الذهن، واستخدمه كرين بسخرية سوداء قبل تسميمها بغاز الهلوسة."
      }
    ],
    "wordCount": 138
  },
  {
    "id": 62,
    "paragraphNumber": 62,
    "english": "...that you're never short of a few freeloaders, like yourselves...\n...to fill up your mansion with. So here's to you people. Thank you.\n-That's enough, Bruce.\nBruce: I'm not finished.\nTo all of you....\nAll of you phonies, all of you two-faced friends...\n...you sycophantic suck-ups who smile through your teeth at me...\n...please, leave me in peace.\nPlease go.\nStop smiling, it's not a joke. Please leave.\nThe party's over, get out.\nThe apple has fallen very far from the tree, Mr. Wayne.\nHe's turning into a jerk.\nRa’s Al Ghul; Amusing.\nBut pointless. None of these people have long to live.\nYour antics at the asylum have forced my hand.\nBruce: So Crane was working for you.\nRa’s Al Ghul; His toxin is derived from the organic compound found in our blue flowers.",
    "arabicTranslation": "رجل 1: وماذا بشأن الفتاة؟!\nكرين: لم يتبقَ أمامها وقت طويل لتعيشه... لقد أعطيتها جرعة مركزة ومضاعفة للغاية! العقل البشري لا يمكنه تحمل سوى قدر محدد! والآن اذهبوا!\nرجل 2: الأشياء التي يقولونها ويروونها عنه... هل يستطيع الطيران حقاً؟!\nرجل 3: سمعت أنه قادر على الاختفاء التام في لمح البصر!\nكرين: حسنًا، سنكتشف ذلك بأنفسنا بعد قليل، أليس كذلك؟!\n[طلقات نارية ورجال يسقطون في الظلام]\nباتمان: [يمسك كرين من عنقه ويثبته]: تذوق طعم دوائك الخاص وسُمك يا دكتور! ما الذي كنتم تصنعونه هنا؟! ولحساب مَن تعمل؟!\nكرين: رأس... رأس الغول!\nباتمان: رأس الغول قد مات وقضيت عليه بنفسي! لحساب مَن تعمل بحق الجحيم؟! كرين!\nكرين: [يهلوس برعب من غازه]: دكتور كرين ليس موجوداً هنا الآن... ولكن إن كنت ترغب في حجز موعد للمعاينة...!\n[دوي صفارات الإنذار]\nضابط عبر مكبر الصوت: باتمان، ألقِ أسلحتك واستسلم فوراً! أنت محاصر تماماً!\nفلاس: ما الذي تنتظرونه بحق الجحيم؟!\nباتمان: أنتظر الدعم والتعزيزات!\nفلاس: الدعم والتعزيزات؟!",
    "vocabulary": [
      {
        "word": "concentrated dose",
        "arabicMeaning": "جرعة مركزة وفائقة القوة",
        "example": "The toxicologist analyzed the concentrated dose of the snake venom."
      },
      {
        "word": "taste of own medicine",
        "arabicMeaning": "يتذوق من نفس الكأس والسم الذي أذاقه للآخرين",
        "example": "The office bully finally got a taste of his own medicine when fired."
      },
      {
        "word": "make an appointment",
        "arabicMeaning": "يحجز موعداً في العيادة (هذيان كرين)",
        "example": "Please call the clinic receptionist to make an appointment for next week."
      },
      {
        "word": "surrounded",
        "arabicMeaning": "محاصر ومطوق من جميع الجهات",
        "example": "The surrounded fortress had no remaining escape routes."
      },
      {
        "word": "backup",
        "arabicMeaning": "الدعم والتعزيزات الأمنية أو الميدانية",
        "example": "The lone patrol officer immediately radioed headquarters for backup."
      }
    ],
    "notes": [
      {
        "term": "Taste of your own medicine",
        "type": "idiom",
        "explanation": "مثل إنجليزي شهير يعني معاقبة الجاني بنفس الأسلوب المؤذي الذي كان يمارسه ضد ضحاياه."
      },
      {
        "term": "Backup",
        "type": "slang",
        "explanation": "مصطلح شرطة وعسكري يعني وصول قوات إسناد لمساعدة الفريق المشتبك."
      }
    ],
    "wordCount": 135
  },
  {
    "id": 63,
    "paragraphNumber": 63,
    "english": "He was able to weaponize it.\nBruce; He's not a member of the League of Shadows?\nRa’s Al Ghul; Of course not. He thought our plan was to hold the city to ransom.\nBruce: But really, you are gonna release Crane's poison on the entire city.\nRa’s Al Ghul: Then watch Gotham tear itseIf apart through fear.\nBRUCE: You're gonna destroy millions of lives.\nDUCARD: Only a cynical man would call what these people have \"lives,\" Wayne.\nCrime. Despair.\nThis is not how man was supposed to live.\nThe League of Shadows has been a check against human corruption...\n...for thousands of years.\nWe sacked Rome. Loaded trade ships with plague rats.\nBurned London to the ground.\nEvery time a civilization reaches the pinnacle of its decadence...\n...we return to restore the balance.\nBruce: Gotham isn't beyond saving.",
    "arabicTranslation": "شرطي: باتمان موجود في الداخل! وقوات التدخل السريع (سوات) في طريقها إلى هنا! ولكن إن كنت ترغب في الدخول واقتحام المكان الآن... فسأكون خلفك مباشرة يا سيدي!\nفلاس: قوات التدخل السريع في الطريق...\nغوردون: ما الذي أصابها وماذا حدث لها؟!\nباتمان: كرين سممها بمهلوس عقلي مهدئ للأعصاب ومركب يثير نوبات هلع ورعب قاتلة!\nغوردون: دعني أنزلها سريعاً إلى المسعفين!\nباتمان: هم عاجزون عن مساعدتها، لكني أستطيع! أنزلها إلى الطابق الأرضي، وقابلني في الزقاق الخلفي! كرين كان يهرب سُمَّه مخبأ داخل مخدرات فالكوني... وهم يقومون بإلقائه في شبكة إمدادات المياه الرئيسية بالمدينة!\nغوردون: وماذا كان يخطط؟!\nباتمان: لا أعلم بدقة بعد... ذكر شخصاً آخر أسوأ وأشد فتكاً! يجب أن أحصل على الترياق من أجلها قبل أن يصبح الضرر الدماغي دائماً ولا رجعة فيه!\nغوردون: كم تبقى لها من الوقت؟!\nباتمان: وقت قصير جداً!\n[صوت طنين وهدير قادم من بعيد]\nغوردون: ما هذا الصوت؟!\nباتمان: الدعم والتعزيزات!\n[أسراب هائلة وملايين من الخفافيش تقتحم المبنى وتملأ الأرجاء بالرعب]\nباتمان: عن إذنكم جميعاً!\nباتمان: كيف هي حالتها؟\nغوردون: إنها تتلاشى وتفقد وعيها! يجب أن نتحرك فوراً، سأحضر سيارتي!\nباتمان: لقد أحضرت سيارتي أنا!\nغوردون: [ينظر مذهولاً إلى مدرعة باتمان التامبلر]: سيارتك أنت؟! يجب عليّ حتماً اقتناء واحدة من هذه!",
    "vocabulary": [
      {
        "word": "fading",
        "arabicMeaning": "تتلاشى قواها وتفقد الوعي والحياة تدريجياً",
        "example": "The patient's pulse was rapidly fading, so doctors initiated CPR."
      },
      {
        "word": "permanent damage",
        "arabicMeaning": "ضرر دائم وعاهة لا يمكن شفاؤها",
        "example": "Failing to treat a severe concussion immediately can cause permanent damage."
      },
      {
        "word": "smuggle",
        "arabicMeaning": "يهرب بضائع أو سموماً بطرق غير مشروعة",
        "example": "Customs agents caught a ring trying to smuggle diamonds across the border."
      },
      {
        "word": "panic-inducing",
        "arabicMeaning": "مثير لنوبات الذعر والهلع الشديد",
        "example": "The claustrophobic elevator breakdown caused a panic-inducing reaction in riders."
      }
    ],
    "notes": [
      {
        "term": "I've gotta get me one of those",
        "type": "idiom",
        "explanation": "تعبير إعجاب وانبهار عامي بالعامية الأمريكية يُقال عند رؤية سيارة أو أداة خارقة غير مسبوقة."
      },
      {
        "term": "Fading",
        "type": "idiom",
        "explanation": "فقدان الوعي أو تدهور العلامات الحيوية للمريض تدريجياً."
      }
    ],
    "wordCount": 138
  },
  {
    "id": 64,
    "paragraphNumber": 64,
    "english": "Give me more time. There are good people here.\nYou're defending a city so corrupt...\n...we have infiItrated every level of its infrastructure.\nTime to play.\nRa’s Al Ghul: When I found you in that jail, you were lost.\nBut I believed in you.\nI took away your fear, and I showed you a path.\nYou were my greatest student.\nIt should be you standing by my side, saving the world.\nI'll be standing where I belong.\nBruce; Between you and the people of Gotham.\nRa’s Al Ghul; No one can save Gotham.\nWhen a forest grows too wild, a purging fire is inevitable and natural.\nTomorrow the world will watch in horror as its greatest city destroys itseIf.\nThe movement back to harmony will be unstoppable this time.\n-You attacked Gotham before? -Of course.",
    "arabicTranslation": "ضابط 1: إنه يقود مركبة!\nضابط 2 [عبر اللاسلكي]: ما نوعها ولونها؟!\nالضابط: إنها... دبابة سوداء!\nباتمان: حافظي على هدوئكِ، لقد تعرضتِ للتسمم.\nضابط: أنا أتعقبه وعلى أثره مباشرة!\nباتمان: تنفسي ببطء، وتشبثي جيداً!\nراشيل: ما الذي تفعله؟!\nباتمان: طريق مختصر!\n[مدرعة باتمان تقفز فوق أسطح المنازل]\nالمروحية الأولى للأرض: أغلقوا ذلك المنحدر فوراً! ليس أمامه أي سبيل للنزول من فوق ذلك السطح! أطفئ محركك وترجل مبتعداً عن السيارة!\nباتمان: ثقي بي!\nصوت الكمبيوتر الآلي: تم تفعيل أنظمة الأسلحة!\nالضابط: مَن هذا الرجل بحق الجحيم؟!\nضابط 2: إلى أين يتجه؟!\nالضابط: إنه فوق السطح!\nضابط 2: أي شارع يسلكه؟!\nالضابط: إنه لا يسير في شارع أصلاً... إنه يطير فوق أسطح المنازل!\nالضابط: أخبرني على الأقل كيف يبدو شكله!\nالضابط: لا يهم الآن... لقد رصدته وأنا ملتصق بمؤخرته مباشرة!\nمروحية الشرطة: نحن نتتبع المشتبه به متجهاً غرباً على الطريق السريع I-17... لقد فقدنا الرؤية البصرية! المخرج 9 مغلق.\nصوت الكمبيوتر الآلي: تم تفعيل وضع التخفي والشبح!\nباتمان: ابقي معي... راشيل!",
    "vocabulary": [
      {
        "word": "shortcut",
        "arabicMeaning": "طريق مختصر يوفر الوقت والمسافة",
        "example": "Taking the narrow alley provided a convenient shortcut to the station."
      },
      {
        "word": "stealth mode",
        "arabicMeaning": "وضع التخفي والشبح الإلكتروني لإخفاء الأثر",
        "example": "The stealth mode on the military aircraft conceals it from radar tracking."
      },
      {
        "word": "weapons system",
        "arabicMeaning": "منظومة الأسلحة الدفاعية والهجومية",
        "example": "The armored tank's computerized weapons system locked onto the target."
      },
      {
        "word": "butt",
        "arabicMeaning": "مؤخرة (تعبير عامي: ملتصق بمؤخرة سيارته)",
        "example": "The tailgating car was driving right up on my butt during rush hour."
      }
    ],
    "notes": [
      {
        "term": "Right up on his butt",
        "type": "slang",
        "explanation": "تعبير عامي أمريكي يعني الالتصاق الشديد بالمركبة التي في الأمام (ملاصق لمؤخرتها تماماً)."
      },
      {
        "term": "Stay with me",
        "type": "idiom",
        "explanation": "رجاء التمسك بالحياة وعدم الاستسلام للغيبوبة والموت في الحالات الطبية الحرجة."
      }
    ],
    "wordCount": 135
  },
  {
    "id": 65,
    "paragraphNumber": 65,
    "english": "Over the ages our weapons have grown more sophisticated.\nWith Gotham we tried a new one. Economics.\nBut we underestimated certain of Gotham's citizens...\n...such as your parents.\nGunned down by one of the very people they were trying to help.\nCreate enough hunger and everyone becomes a criminal.\nTheir deaths galvanized the city into saving itseIf...\n...and Gotham has limped on ever since.\nWe are back to finish the job.\nAnd this time no misguided idealists will get in the way.\nLike your father, you lack the courage to do all that is necessary.\nIf someone stands in the way of true justice...\n...you simply walk up behind them and stab them in the heart.\nBruce: -I am gonna stop you.\nRa’s Al Ghul: You never did learn...\n...to mind your surroundings.\nJustice is balance.",
    "arabicTranslation": "غوردون: هل أدخلوا أي كمية من هذا السم في شبكة المياه الرئيسية؟!\nضابط: أجل يا سيدي!\nغوردون: أبلغوا شركة المياه فوراً! لا بد أن هناك طريقة لعزل المناطق وفصلها!\nالضابط: كلا، لقد ألقوا بالكميات كلها في الأنابيب! لا بد أنهم كانوا يفعلون ذلك منذ أسابيع! إمدادات مياه غوثام بأسرها أصبحت مشبعة ومسممة بالكامل!\nغوردون: ولماذا لم نشعر بآثاره وأعراضه حتى الآن إذن؟!\nالضابط: لا بد أنه مركب كيميائي لا يُمتص إلا عن طريق الرئتين وعبر الاستنشاق بالهواء!\n[صرير الخفافيش في كهف باتمان]\nباتمان: كيف تشعرين الآن؟\nراشيل: أين نحن؟! ولماذا أحضرتني إلى هنا؟!\nباتمان: لو لم أفعل، لكان عقلكِ قد ضاع إلى الأبد! لقد تعرضتِ للتسمم.\nراشيل: لقد كان... لقد كان الدكتور كرين!\nباتمان: استريحي واهدئي. الرقيب غوردون قد ألقى القبض على كرين.\nراشيل: وهل الرقيب غوردون صديق لك؟\nباتمان: أنا لا أملك رفاهية اتخاذ الأصدقاء! سأعطيكِ مهدئاً، وستستيقظين وأنتِ في منزلكِ. وحين تستيقظين، أوصلي هاتين العبوتين إلى غوردون، وإلى غوردون وحده دون غيره! لا تثقي بأي شخص آخر!\nراشيل: ما هما هاتان العبوتين؟\nباتمان: الترياق ومصل النجاة! واحدة لغوردون ليحصن بها نفسه، والأخرى لإنتاجها بكميات هائلة وضخمة!\nراشيل: إنتاج بكميات هائلة؟!\nباتمان: كرين كان مجرد بيدق شطرنج صغير في المؤامرة... ويجب أن نكون على أهبة الاستعداد!",
    "vocabulary": [
      {
        "word": "mains",
        "arabicMeaning": "خطوط وأنابيب الإمداد الرئيسية لشبكة المياه",
        "example": "A massive burst in the city water mains flooded downtown avenues."
      },
      {
        "word": "laced",
        "arabicMeaning": "ممزوج ومطعّم بالسم أو المخدر خفية",
        "example": "The punch bowl at the party had been laced with potent alcohol."
      },
      {
        "word": "inhalant",
        "arabicMeaning": "مادة مستنشقة تؤثر عبر الرئتين والتنفس",
        "example": "Certain volatile anesthetics act as a rapid inhalant in surgery."
      },
      {
        "word": "pawn",
        "arabicMeaning": "بيدق شطرنج / أداة مسيرة بيد قوى أكبر",
        "example": "The low-level courier was merely an expendable pawn in the cartel's game."
      },
      {
        "word": "mass production",
        "arabicMeaning": "الإنتاج الصناعي الضخم بكميات هائلة",
        "example": "Henry Ford revolutionized the automotive industry with assembly line mass production."
      }
    ],
    "notes": [
      {
        "term": "Luxury of friends",
        "type": "idiom",
        "explanation": "تعبير يعني أن طبيعة المهمة السرية الخطيرة تحرم البطل من امتلاك أصدقاء لحمايتهم من الاستهداف."
      },
      {
        "term": "Just a pawn",
        "type": "idiom",
        "explanation": "استعارة من لعبة الشطرنج تعني أن الشخص مجرد عنصر تافه وموجه من قوى خفية أعظم منه بكثير."
      }
    ],
    "wordCount": 136
  },
  {
    "id": 66,
    "paragraphNumber": 66,
    "english": "You burned my house and left me for dead.\nConsider us even.\nNo one comes out. Make sure.\nGORDON: They're all gone?\n-How many from maximum security?\nEvery one of them.\nSerial K*llers, rapists.\nGordon; Raise the bridges. We don't want any getting off the island.\nFLASS: Yeah, I'll raise the bridges...\n...when I get every available unit out here to catch the homicidal maniacs...\n-...that are running loose out there. -Come on!\nAlfred: I hope you're not a member of the fire brigade.\nMaster Wayne! Master Wayne!\nWhat is the point of all those pushups if you can't even lift a bloody log?\n[PLAYING PIANO]\nBRUCE: What have I done, AIfred?\nEverything my family...\n...my father, buiIt....\nAlfred: The Wayne legacy is more than bricks and mortar, sir.\nBruce; I wanted to save Gotham.\nI failed.",
    "arabicTranslation": "ألفريد: حين أخبرتني عن خطتك الكبرى والمهيبة لإنقاذ غوثام... كان كل ما منعني من الاتصال بالرجال ذوي المعاطف البيضاء (أطباء مستشفى المجانين)... هو حين قلت لي إن الأمر لا يتعلق بالسعي وراء الإثارة والتهور!\nبروس: وهو ليس كذلك بالفعل!\nألفريد: وماذا تسمي ذلك الاستعراض الذي جرى الليلة إذن؟!\nبروس: برنامجاً تلفزيونياً ممتعاً وممتازاً بحق!\nألفريد: إنها معجزة كبرى ألا يُقتل أحد في تلك المطاردة!\nبروس: لم يكن لدي متسع من الوقت لمراعاة قواعد المرور وقوانين السير يا ألفريد!\nألفريد: أنت تضل طريقك وتفقد نفسك داخل هذا الوحش والمسخ الذي خلقته بيدك!\nبروس: أنا أستخدم هذا الوحش لمساعدة الآخرين وإنقاذهم، تماماً كما فعل والدي من قبل!\nألفريد: بالنسبة لتوماس واين، لم تكن مساعدة الآخرين وسيلة لإثبات أي شيء لأي شخص، بما في ذلك إثباته لنفسه!\nبروس: إنها راشيل يا ألفريد! كانت تشرف على الموت وتفارق الحياة! هي في الأسفل الآن تحت تأثير المهدئ، وأحتاج منك أن تعيدها إلى منزلها سالمة.\nألفريد: حسنًا، كلانا يهتم براشيل ويرعاها، لكن ما تفعله يجب أن يتجاوز ذلك! لا يمكن أن يكون دافعه شخصياً، وإلا فأنت مجرد مقتص ذاتي منتقم!\nبروس: هل فوكس لا يزال هنا في الحفل؟\nألفريد: نعم يا سيدي.\nبروس: يجب علينا طرد هؤلاء الناس وصرفهم بعيداً فوراً!",
    "vocabulary": [
      {
        "word": "men in white coats",
        "arabicMeaning": "رجال المعاطف البيضاء (كناية عن ممرضي مصحة المجانين)",
        "example": "If you keep rambling about aliens, people will call the men in white coats."
      },
      {
        "word": "thrill-seeking",
        "arabicMeaning": "السعي المتهور وراء الإثارة والمغامرة",
        "example": "Skydiving without safety training is just reckless thrill-seeking."
      },
      {
        "word": "rules of the road",
        "arabicMeaning": "قواعد المرور وأنظمة السير الرسمية",
        "example": "Every new teenage driver must learn to observe the rules of the road."
      },
      {
        "word": "sedated",
        "arabicMeaning": "مخدر ومهدأ بالعقاقير الطبية",
        "example": "The agitated patient was heavily sedated to allow his wounds to heal."
      }
    ],
    "notes": [
      {
        "term": "Men in white coats",
        "type": "idiom",
        "explanation": "تعبير إنجليزي فكاهي شهير يعني أطباء أو حراس المصحة العقلية الذين يأتون لأخذ شخص فقد صوابه."
      },
      {
        "term": "Beyond that",
        "type": "idiom",
        "explanation": "يجب أن يرتقي الدافع فوق الحسابات الشخصية والعواطف الفردية ليصبح رسالة عدالة خالصة."
      }
    ],
    "wordCount": 137
  },
  {
    "id": 67,
    "paragraphNumber": 67,
    "english": "Alfred: Why do we fall, sir?\nSo that we can learn to pick ourselves up.\nBruce; You still haven't given up on me?\nAlfred: Never.\nGORDON: Down!\nMAN: Harassment! I see harassment!\nMaybe you'd like to see some excessive force?\nMadman with a g*n.\nWOMAN [ON TV]: With residents furious...\n...at the unprecedented show of police strength to round up the inmates....\nWe're about to raise these bridges.\nRachel; Officer, I am a Gotham City district attorney. Let me pass.\n-Just shut up! -Hey, Flass, cool it!\nOFFICER 1: Hold these people back.\nOFFICER 2: Hey, Gordon. Somebody here to see you.\nGordon: What are you doing here?\nRachel: A mutual friend sent me with this.\nIt counteracts Crane's toxin.\nHopefully you won't need it.\nGordon; Not unless he's got some way of getting that crap into the air.",
    "arabicTranslation": "ألفريد: أولئك هم ضيوف بروس واين وعلية القوم! ولديك اسم عائلة ومكانة يجب عليك الحفاظ عليها وصيانتها!\nبروس: أنا لا أبالي باسمي أو بمكانتي!\nألفريد: إنه ليس مجرد اسمك أنت يا سيدي... إنه اسم والدك وتاريخه العريق! وهو كل ما تبقى منه في هذا الوجود! فلا تحطمه وتدنسه!\n[الضيوف في القاعة يغنون لبروس بمناسبة عيد ميلاده: 'سنة حلوة يا جميل']\nالسيد إيرل: عيد ميلاد سعيد يا بروس!\nبروس: شكراً لك. كيف سار الطرح العام للأسهم في البورصة؟\nإيرل: الأسعار حلقت عالياً في السماء وحققت أرقاماً قياسية!\nبروس: ومَن كان يشتري تلك الأسهم؟\nإيرل: شتى أنواع الصناديق الاستثمارية وشركات الوساطة المالية... الأمر تقني ومعقد بعض الشيء! والشيء الجوهري هو... أن مستقبل شركتنا بات آمناً ومضموناً تماماً!\nبروس: هذا عظيم!\nألفريد: [يهمس لبروس متهكماً]: متوعك ومتعب بعض الشيء على ما يبدو!\nغوردون: [يحقق مع كرين في زنزانته]: ما هي الخطة يا كرين؟! كيف كنتم ستنشرون سمكم في الهواء؟!\nكرين: الفزاعة... الفزاعة!\nغوردون: لحساب مَن كنت تعمل يا كرين؟!\nكرين: أوه، لقد فات الأوان تماماً... لا يمكنكم إيقاف الأمر الآن!\nغوردون: هاك ما لديك.",
    "vocabulary": [
      {
        "word": "maintain a name",
        "arabicMeaning": "يحافظ على سمعة واسم العائلة ومكانتها",
        "example": "As an honorable diplomat, he worked hard to maintain his family's name."
      },
      {
        "word": "prices soared",
        "arabicMeaning": "حلقت الأسعار عالياً وارتفعت بشكل صاروخي",
        "example": "After the glowing tech review, the company's share prices soared."
      },
      {
        "word": "brokerages",
        "arabicMeaning": "شركات الوساطة والسمسرة المالية في البورصة",
        "example": "Major Wall Street brokerages reported record quarterly profits."
      },
      {
        "word": "worse for wear",
        "arabicMeaning": "متعب ومرهق وتبدو عليه آثار الإجهاد",
        "example": "After a grueling 20-mile hike, my boots were decidedly worse for wear."
      }
    ],
    "notes": [
      {
        "term": "Worse for wear",
        "type": "idiom",
        "explanation": "تعبير بريطاني يعني أن الشخص أو الغرض في حالة إرهاق أو تلف واضح بعد تجربة شاقة."
      },
      {
        "term": "Too late",
        "type": "idiom",
        "explanation": "فات الأوان ولم يعد هناك مجال لتدارك الخطر الداهم."
      }
    ],
    "wordCount": 139
  },
  {
    "id": 68,
    "paragraphNumber": 68,
    "english": "All right, last one across.\nOFFICER 1: People, they want this bridge up in no more than three minutes!\nGordon: Better get you off the island before they raise the bridges. Patrolman!\nGo!\n[PEOPLE SHOUTING INDISTINCTLY]\nI can't find my mom.\nRACHEL: Hey!\nWhat the hell are you doing?\nDUCARD: Gentlemen...\n...time to spread the word.\nAnd the word is... panic\nJesus. The pressure, it's spiking.\n[BEEPlNG]\nRight there.\nMAN: That water main is right under the Narrows.\n[PEOPLE COUGHING]\nRACHEL: It's okay.\n[SPEAKING INDISTINCTLY]\nLoeb; This is Commissioner Loeb.\nCome on, somebody talk to me.\nCome on!\nGORDON: Loeb, Loeb. This is Gordon.\nWhat the hell is going on?\nWe need reinforcements. TAC teams, SWAT, riot cops!\nLoeb: Gordon! All the city's riot police are on the island with you!\nGORDON [OVER RADlO]: Well, they're completely incapacitated!",
    "arabicTranslation": "رجل: عيد ميلاد سعيد يا بروس!\nبروس: شكراً لك، أشكرك جزيلاً. وشكراً لك على تلك الأداة الخاصة يا لوشيوس.\nلوشيوس فوكس: على الرحب والسعة، وأنا واثق من أنك ستضعها في استخدام نافع وحسن!\nبروس: لقد فعلت ذلك بالفعل! كم سيستغرق تصنيعه وإنتاجه على نطاق واسع وكبير؟\nفوكس: عدة أسابيع كاملة... لماذا تسأل؟\nبروس: شخص ما يخطط لنثر وتوزيع هذا السم باستخدام شبكة إمدادات مياه المدينة!\nفوكس: شبكة المياه لن تساعدك في نثر وتوزيع مادة استنشاقية غازية!\nبروس: ماذا؟!\nفوكس: إلا إذا كنت تملك باعث موجات ميكروويف قوي وفتاك بما يكفي... لتبخير كافة كميات المياه الموجودة في الأنابيب وشبكات التغذية الرئيسية فوراً! باعث ميكروويف شبيه تماماً بذلك الذي أضاعته شركة 'واين إنتربرايزز' وفقدته للتو!\nبروس: أضاعته وفقدته؟!\nفوكس: إيرل طردني وفصلني من العمل للتو لمجرد أنني طرحت الكثير من الأسئلة المحرجة بشأنه!\nبروس: عد إلى شركة واين الآن فوراً وابدأ في تصنيع المزيد من ذلك الترياق! الشرطة ستحتاج إلى كل قطرة يمكنها وضع أيديها عليها!\nفوكس: لقد تم سحب وتجريد تصريحي الأمني للدخول!\nبروس: وهل سيوقف ذلك رجلاً بمثل كفاءتك وقدرتك؟!\nفوكس: أفترض أنه لن يفعل!",
    "vocabulary": [
      {
        "word": "put to good use",
        "arabicMeaning": "يستثمره في عمل نافع ومثمر",
        "example": "She decided to put her scholarship funds to good use by studying robotics."
      },
      {
        "word": "large scale",
        "arabicMeaning": "على نطاق واسع وإنتاج ضخم",
        "example": "The laboratory began testing the solar panels on a large scale."
      },
      {
        "word": "misplace",
        "arabicMeaning": "يضيع أو يفقد غرضاً في غير موضعه (استُخدمت تهكماً)",
        "example": "How could a government department misplace millions of dollars?"
      },
      {
        "word": "security clearance",
        "arabicMeaning": "التصريح الأمني الممنوح لدخول منشآت حساسة",
        "example": "Accessing classified nuclear documents requires top-secret security clearance."
      },
      {
        "word": "revoked",
        "arabicMeaning": "أُلغي وسُحب رسمياً من صاحبه",
        "example": "His driver's license was revoked after multiple reckless driving violations."
      }
    ],
    "notes": [
      {
        "term": "Get their hands on",
        "type": "idiom",
        "explanation": "تعبير دارج يعني الحصول على أكبر قدر ممكن من الشيء الشحيح أو الضروري."
      },
      {
        "term": "Put it to good use",
        "type": "idiom",
        "explanation": "استخدام الشيء في موضع مفيد وناجع وذي قيمة حقيقية."
      }
    ],
    "wordCount": 138
  },
  {
    "id": 69,
    "paragraphNumber": 69,
    "english": "Rachel: It's okay, it's okay. No one's gonna hurt you.\nSCARECROW: Of course they are!\n-Crane? -No. Scarecrow.\nLoeb; Gordon...\n...there's nobody left to send in.\nGORDON: So I'm on my own?\nThe Narrows is tearing itseIf to pieces.\nBatman: This is just the beginning. If they hit the whole city...\n...there's nothing to stop Gotham tearing itseIf apart.\nGordon; How are they gonna do that?\nBatman: They’ll be using the train.\nThe monorail follows the water mains to the central hub beneath Wayne Tower.\nIf the machine gets to the station...\n...it'll cause a chain reaction that'll vaporize the city's water supply.\nGordon; Covering Gotham in this poison.\nBatman: I'm gonna stop him from loading that train, but I may need your help.\nGordon: What do you need?\nBatman: Can you drive stick?\nSCARECROW: There you are!",
    "arabicTranslation": "السيدة ديلين: بروس، هناك شخص يجب عليك مقابلته والتعرف عليه فوراً!\nبروس: ليس الآن يا سيدة ديلين، أرجوكِ.\nالسيدة ديلين: والآن، هل أنطق هذا الاسم بشكل صحيح... السيد رأس الغول؟!\nبروس: [يستدير مذهولاً ليجد دوكارد أمامه مبتسماً]: أنت لست رأس الغول! لقد رأيته يموت بعينيّ!\nدوكارد (رأس الغول الحقيقي): ولكن هل رأس الغول كائن خالد لا يموت؟! وهل أساليبه خارقة للطبيعة؟!\nبروس: أم أنها مجرد خدع صالونات رخيصة ومكائد لإخفاء هويتك الحقيقية يا رأس؟!\nرأس الغول: بالتأكيد رجل يقضي لياليه وهو يقفز ويتسلق أسطح منازل غوثام... لن يستكثر عليّ أو يستنكر امتلاكي لهويات مزدوجة!\nبروس: لقد أنقذت حياتك وانتشلتك من الموت!\nرأس الغول: لقد حذرتك سابقاً من عواقب الشفقة والرحمة يا بروس!\nبروس: خلافك وعداؤك هو معي أنا وحدي! دع هؤلاء الناس الأبرياء يغادرون بسلام!\nرأس الغول: أنت مرحب بك تماماً لتشرح الموقف الحقيقي لهم إن أردت!\nبروس: [يقف أمام الميكروفون ليطرد الجميع من القصر لحمايتهم]: أيها الحضور جميعاً... هل يسمعني الجميع؟ أريد أن أشكركم جميعاً على حضوركم إلى هنا الليلة وتناول كل خموري ومشروباتي!\n[الضيوف يضحكون ظانين أنها مزحة]",
    "vocabulary": [
      {
        "word": "parlor trick",
        "arabicMeaning": "خدعة صالونات رخيصة للتسلية وخداع السذج",
        "example": "The politician's sudden tax cut was merely a deceptive parlor trick."
      },
      {
        "word": "begrudge",
        "arabicMeaning": "يستكثر على شخص شيئاً أو يحسده عليه",
        "example": "Nobody would begrudge her a well-deserved vacation after years of hard labor."
      },
      {
        "word": "dual identities",
        "arabicMeaning": "هويات مزدوجة (شخصية علنية وأخرى سرية)",
        "example": "Secret agents often operate under complex dual identities."
      },
      {
        "word": "quarrel",
        "arabicMeaning": "نزاع وخصومة وعداء شخصي",
        "example": "He had no personal quarrel with his competitors, only professional rivalry."
      }
    ],
    "notes": [
      {
        "term": "Parlor tricks",
        "type": "idiom",
        "explanation": "تعبير اصطلاحي يعني الخدع البصرية والتكتيكية التي توهم السذج بوجود قوى خارقة بينما هي حيل بشرية."
      },
      {
        "term": "Dual identities",
        "type": "cultural",
        "explanation": "المفارقة الدرامية بين هوية باتمان المزدوجة وهوية رأس الغول المزدوجة التي يتقاسمانها كمعلم وتلميذ."
      }
    ],
    "wordCount": 138
  },
  {
    "id": 70,
    "paragraphNumber": 70,
    "english": "There is nothing to fear...\n...but fear itseIf!\nI am here to help you!\n[SCARECROW SCREAMING]\nBatman will save us. He'll come.\n-He'll come. -Don't peek.\nThis is Gordon. Prepare to lower the bridge.\nI told you he'd come.\nRACHEL: Wait.\nYou could die.\nAt least tell me your name.\nBatman; It's not who I am underneath...\n...but what I do that defines me.\nRachel: Bruce?\nRa’s Al Ghul: Well, well. You took my advice about theatricality a bit literally.\nBatman: It ends here.\nRa’s Al ghul: For you and the police, maybe.\nMy fight, however, lies with the rest of Gotham.\nNow, if you'll excuse me, I have a city to destroy.\n-I can't beat two of your pawns?\nRa’s Al Ghul: As you wish.\nCOMPUTER: GPS online.\nIn 100 yards.\nDUCARD: Gentlemen.\nLoeb: Who the hell authorized this?",
    "arabicTranslation": "بروس: لا، حقاً أنا أعني ذلك! هناك ميزة وأمر يلازم كونك فرداً من عائلة واين... وهو أنك لا تعاني أبداً من أي نقص في المتطفلين والانتهازيين أمثالكم... ليملؤوا قصرك ويسهروا فيه! لذا نخبكم جميعاً، وشكراً لكم!\nضيف: هذا يكفي يا بروس!\nبروس: لم أنتهِ بعد! إلى جميعكم... جميعكم أيها المزيفون والمنافقون، وجميعكم أيها الأصدقاء ذوو الوجهين... أيها المتملقون اللئام والمداهنون الذين تبتسمون لي بكبرياء مصطنع بين أسنانكم... أرجوكم، اتركوني وشأني ودعوني بسلام! أرجوكم ارحلوا فوراً! توقفوا عن الابتسام، هذه ليست نكتة أو مزحة على الإطلاق! ارحلوا، لقد انتهت الحفلة، اخرجوا جميعاً من هنا!\nضيف: لقد سقطت التفاحة بعيداً جداً عن شجرتها يا سيد واين! لقد تحول هذا الشاب إلى وغد وقح!\nرأس الغول: مشهد مسلٍ ومثير للضحك حقاً... لكنه بلا جدوى وعقيم! فليس لأي من هؤلاء الناس وقت طويل ليعيشوه! تصرفاتك واستعراضاتك في المصحة قد أجبرتني على التعجيل بخطتي!\nبروس: إذن كرين كان يعمل لحسابك أنت!\nرأس الغول: سُمّه مستخلص ومستمد من المركب العضوي الموجود في أزهارنا الزرقاء الجبلية، وقد تمكن هو من تحويله إلى سلاح فتاك!",
    "vocabulary": [
      {
        "word": "freeloader",
        "arabicMeaning": "طفيلي وانتهازي يعيش على حساب الآخرين",
        "example": "He never chipped in for groceries and acted like a shameless freeloader."
      },
      {
        "word": "phony",
        "arabicMeaning": "زائف ومنافق وغير صادق",
        "example": "Her overly dramatic compliments felt completely phony."
      },
      {
        "word": "two-faced",
        "arabicMeaning": "ذو وجهين ومنافق يطعن في الظهر",
        "example": "Beware of two-faced colleagues who flatter you to your face and gossip behind you."
      },
      {
        "word": "sycophantic",
        "arabicMeaning": "متملق ومداهن لأصحاب النفوذ رياءً",
        "example": "The dictator surrounded himself with sycophantic yes-men."
      },
      {
        "word": "jerk",
        "arabicMeaning": "وغد وقح وبغيض في تعامله (عامي)",
        "example": "He apologized sincerely for acting like an insensitive jerk."
      }
    ],
    "notes": [
      {
        "term": "The apple has fallen very far from the tree",
        "type": "idiom",
        "explanation": "تحوير للمثل الإنجليزي الشهير (The apple doesn't fall far from the tree) للإشارة إلى أن بروس خرج شريراً وقحاً على عكس والده العظيم توماس."
      },
      {
        "term": "Smile through your teeth",
        "type": "idiom",
        "explanation": "الابتسام نفاقاً وتصنعاً وإخفاء الكراهية والغيرة وراء ابتسامة صفراء."
      },
      {
        "term": "Forced my hand",
        "type": "idiom",
        "explanation": "أجبرني على التعجيل بالتحرك وتنفيذ الخطة رغماً عني دون انتظار."
      }
    ],
    "wordCount": 140
  },
  {
    "id": 71,
    "paragraphNumber": 71,
    "english": "COMPUTER: Distance to Wayne Tower, three miles.\nThe pressure's moving along the mains, blowing the pipes.\nIf that pressure reaches us...\n...the water supply right across the whole city is gonna blow!\nCOMPUTER: At the next intersection, turn right.\nRa’s Al Ghul: You will never learn.\nGordon: Sorry.\nRa’s Al Ghul: -Familiar. Don't you have anything new?\nBatman: How about this?!\nCOMPUTER: You have arrived at Wayne Tower.\nMAN: Evacuate the building.\nWe're on top of the main hub and it's gonna blow.\nCOMPUTER: Weapons system activated.\nNice ride.\nCOMPUTER: Armed.\n[BEEPlNG]\nDon't be afraid, Bruce.\nCome on. Come on.\nDUCARD: You are just an ordinary man in a cape.\nThat's why you couldn't fight injustice, that's why you can't stop this train.\nBatman: Who said anything about stopping it?\nGordon: Yes!\nBATMAN: You never learned to mind your surroundings!",
    "arabicTranslation": "بروس: وهو ليس عضواً في عصبة الظلال إذن؟\nرأس الغول: بالطبع كلا! كان يظن أن خطتنا تقتصر على ابتزاز المدينة وطلب فدية مالية!\nبروس: ولكن في الحقيقة، أنتم تنوون إطلاق سُم كرين ونشره فوق المدينة بأسرها!\nرأس الغول: ثم نراقب غوثام وهي تمزق نفسها إرباً إرباً بدافع الرعب والهلع!\nبروس: سوف تدمرون ملايين الأرواح البريئة!\nدوكارد: فقط الرجل المفرط في التشاؤم والسطحية هو من يطلق على ما يملكه هؤلاء الناس مسمى 'حياة' يا واين! الجريمة... واليأس... والبؤس! لم يكن مقدراً للإنسان أن يعيش بهذه الطريقة المزرية قط! عصبة الظلال كانت سداً منيعاً وقوة كابحة ضد الفساد والانحلال البشري... لآلاف السنين! نحن من أسقطنا روما ونهبناها، ونحن من حمّلنا سفن التجارة بفئران الطاعون، وحرقنا لندن وسويناها بالأرض! وفي كل مرة تبلغ فيها حضارة من الحضارات ذروة فسادها وانحطاطها... نعود نحن لإعادة التوازن والعدل!",
    "vocabulary": [
      {
        "word": "hold to ransom",
        "arabicMeaning": "يحتجز لطلب فدية وابتزاز مالي",
        "example": "Cybercriminals used ransomware to hold the hospital database to ransom."
      },
      {
        "word": "tear itself apart",
        "arabicMeaning": "تمزق نفسها وتدمر كيانها من الداخل",
        "example": "Internal civil strife caused the divided nation to tear itself apart."
      },
      {
        "word": "cynical",
        "arabicMeaning": "متشائم / ساخر يشكك في نقاء الدوافع البشرية",
        "example": "He had a cynical view of politics, believing every leader was corrupt."
      },
      {
        "word": "pinnacle of decadence",
        "arabicMeaning": "ذروة الانحطاط الأخلاقي والفساد والترف المفرط",
        "example": "Historians often describe late Roman emperors as the pinnacle of decadence."
      },
      {
        "word": "restore the balance",
        "arabicMeaning": "يعيد التوازن والاستقامة الكونية",
        "example": "Pruning overgrown branches helps restore the balance in the orchard."
      }
    ],
    "notes": [
      {
        "term": "Sacked Rome",
        "type": "cultural",
        "explanation": "مرجع تاريخي لسقوط الإمبراطورية الرومانية ونهبها عام 410م على يد القوط الغربيين، ينسبها رأس الغول لعصبته التاريخية."
      },
      {
        "term": "Plague rats",
        "type": "cultural",
        "explanation": "إشارة لوباء الموت الأسود (الطاعون) الذي انتشر عبر موانئ التجارة في أوروبا في القرن الرابع عشر."
      },
      {
        "term": "Burned London to the ground",
        "type": "cultural",
        "explanation": "إشارة لحريق لندن الكبير عام 1666 الذي دمر أجزاء واسعة من العاصمة البريطانية."
      },
      {
        "term": "Hold to ransom",
        "type": "idiom",
        "explanation": "ابتزاز جهة معينة عبر تهديد مصالحها أو أمنها لدفع مبالغ طائلة."
      }
    ],
    "wordCount": 140
  },
  {
    "id": 72,
    "paragraphNumber": 72,
    "english": "Ra’s Al Ghul: Have you finally learned to do what is necessary?\nBatman; I won't k*ll you...\n...but I don't have to save you.\nJESSlCA: The meeting's already started.\nEarle: What meeting?\nFox, I seem to remember firing you.\nLucius; You did.\nI got another job.\nYours.\nEarle: On whose authority?\nALFRED: Batman may have made the front page...\n...but Bruce Wayne got pushed to page eight.\n[CELL PHONE RINGS]\nBruce Wayne.\nEarle: What makes you think you can decide who's running Wayne Enterprises?\nBruce: The fact that I'm the owner.\nEARLE: What are you talking about?\nThe company went public a week ago.\nBruce: And I bought most of the shares.\nThrough various charitable foundations and trusts and so forth.\nLook, it's all a bit technical, but the important thing...\n...is that my company's future is secure.",
    "arabicTranslation": "بروس: غوثام ليست عصية على الإنقاذ والإصلاح! امنحني مزيداً من الوقت... فهناك أناس طيبون وشرفاء هنا!\nرأس الغول: أنت تدافع عن مدينة فاسدة إلى درجة... أننا قد تغلغلنا واخترقنا كل مستوى من مستويات بنيتها التحتية! حان وقت اللعب! [يضرم مقاتلو العصبة النار في قصر واين مانور]\nرأس الغول: حين وجدتك في ذلك السجن القذر، كنت تائهاً ومحطماً... لكني آمنت بك وبقدراتك! انتزعت منك خوفك، وأريتك طريق المجد! لقد كنت أعظم تلاميذي وأنبههم! وكان يجدر بك أن تقف إلى جانبي الآن، لننقذ العالم سوياً!\nبروس: سأكون واقفاً في المكان الذي أنتمي إليه بحق!\nرأس الغول: وأين ذلك؟\nبروس: بينك وبين أهل غوثام!\nرأس الغول: لا أحد بمقدوره إنقاذ غوثام! حين تصبح الغابة متوحشة ومفرطة في الكثافة، فإن نار التطهير تصبح أمراً حتمياً وطبيعياً! وغداً سيشاهد العالم بأسره في رعب وفزع كيف تدمر أعظم مدنه نفسها بيدها! والحركة العائدة نحو التناغم ستكون جارفة وعصية على الإيقاف هذه المرة!",
    "vocabulary": [
      {
        "word": "infiltrated",
        "arabicMeaning": "تغلغل واخترق بنية تنظيم أو جهاز سراً",
        "example": "Undercover agents successfully infiltrated the narcotics ring."
      },
      {
        "word": "infrastructure",
        "arabicMeaning": "البنية التحتية وشبكات الخدمات الأساسية",
        "example": "Investing in modern transportation infrastructure boosts economic growth."
      },
      {
        "word": "purging fire",
        "arabicMeaning": "نار التطهير التي تبيد الفاسد لتجديد الحياة",
        "example": "Ecologists explain that controlled purging fires rejuvenate forest soil."
      },
      {
        "word": "inevitable",
        "arabicMeaning": "حتمي ولا مفر من وقوعه إطلاقاً",
        "example": "With temperatures rising steadily, climate shifts became inevitable."
      },
      {
        "word": "unstoppable",
        "arabicMeaning": "جارف وعصي على أي إيقاف أو صد",
        "example": "The champion's offensive momentum was completely unstoppable."
      }
    ],
    "notes": [
      {
        "term": "Purging fire",
        "type": "idiom",
        "explanation": "استعارة دينية وفلسفية تعني إحراق كل ما هو فاسد وميؤوس منه لإعادة بناء العالم من الرماد."
      },
      {
        "term": "Between you and the people",
        "type": "idiom",
        "explanation": "الوقوف كدرع حامٍ وفاصل بين المعتدي والضحايا العزل."
      }
    ],
    "wordCount": 138
  },
  {
    "id": 73,
    "paragraphNumber": 73,
    "english": "Right, Mr. Fox?\nFOX: Right you are, Mr. Wayne.\nDidn't you get the memo?\nBruce: I'm sorry I didn't tell you, Rachel.\nRachel: No. No, Bruce...\n...I'm sorry.\nThe day that Chill died, l....\nI said terrible things.\nBruce: But true things.\nI was a coward with a g*n...\n...and justice is about more than revenge, so thank you.\nRachel: I never stopped thinking about you.\nAbout us.\nAnd when I heard you were back, l....\nI started to hope.\nBut then I found out about your mask.\nBruce: Batman's just a symbol, Rachel.\nRachel: No. This...\n...is your mask.\nYour real face is the one that criminaIs now fear.\nThe man I loved...\n...the man who vanished...\n...he never came back at all.\nBut maybe he's still out there somewhere.\nMaybe someday, when Gotham no longer needs Batman...",
    "arabicTranslation": "بروس: أهاجمتم غوثام من قبل؟!\nرأس الغول: بالطبع فعلنا! فعلى مر العصور والأحقاب، أصبحت أسلحتنا أكثر تطوراً وحنكة. ومع غوثام جربنا سلاحاً جديداً: السلاح الاقتصادي (الكساد العظيم)! لكننا قللنا من شأن بعض مواطني غوثام... مثل والديك! واللذين قُتلا بالرصاص على يد أحد أولئك الناس ذاتهم الذين كانا يحاولان مساعدتهم وإنقاذهم! اصنع قدراً كافياً من الجوع والفقر، وسيتحول الجميع إلى مجرمين! إن موتهما قد استنهض المدينة وحفزها لإنقاذ نفسها... وظلت غوثام تعرج وتعرج منذ ذلك الحين وهي تكابد! والآن عدنا لإنهاء المهمة وإسدال الستار! وهذه المرة لن يقف في طريقنا أي مثاليين ضليلي السبيل! ومثلك مثل والدك تماماً، أنت تفتقر إلى الشجاعة لفعل كل ما هو ضروري ومحتوم! إذا وقف شخص في طريق العدالة الحقيقية... فإنك ببساطة تسير خلفه وتطعنه في صميم قلبه!\nبروس: - أنا سأوقفك وأقضي عليك!\nرأس الغول: [يلكمه ويسقطه ويسقط عليه دعامة خشبية مشتعلة]: أنت لم تتعلم أبداً... أن تنتبه لما يحيط بك وبيئتك! العدالة هي التوازن. لقد أحرقت منزلي وتركتني للموت... اعتبرنا متعادلين الآن! لا تدعوا أحداً يخرج من هنا حياً، تأكدوا من ذلك!",
    "vocabulary": [
      {
        "word": "sophisticated",
        "arabicMeaning": "متطور ومتقدم وفائق الدقة والتعقيد",
        "example": "Modern fighter jets use sophisticated radar and stealth systems."
      },
      {
        "word": "galvanize",
        "arabicMeaning": "يحفز ويستنهض الهمم للتحرك الفوري الحاسم",
        "example": "The environmental crisis galvanized young activists across the globe."
      },
      {
        "word": "limp on",
        "arabicMeaning": "يعرج ويواصل المسير بصعوبة وتعثر بالغ",
        "example": "The injured marathoner managed to limp on until the medical tent."
      },
      {
        "word": "misguided",
        "arabicMeaning": "ضال السبيل / مبني على أوهام وأخطاء",
        "example": "His misguided attempt to fix the electrical wiring caused a short circuit."
      },
      {
        "word": "consider us even",
        "arabicMeaning": "اعتبرنا متعادلين وخالصي الحسابات",
        "example": "You paid for dinner last night and I paid today, so consider us even."
      }
    ],
    "notes": [
      {
        "term": "Gunned down",
        "type": "phrasal_verb",
        "explanation": "القتل رمياً بالرصاص بدم بارد في جريمة غادرة."
      },
      {
        "term": "Consider us even",
        "type": "idiom",
        "explanation": "تعبير اصطلاحي يعني 'تصفية الحسابات بين الطرفين وأصبحنا متعادلين لا يدين أحدنا للآخر بشيء'."
      },
      {
        "term": "Mind your surroundings",
        "type": "cultural",
        "explanation": "تكرار العبارة القتالية التي قالها دوكارد لبروس في تدريبهما الأول، والتي يستخدمها الآن ضده."
      }
    ],
    "wordCount": 139
  },
  {
    "id": 74,
    "paragraphNumber": 74,
    "english": "...I'll see him again.\nProved me wrong, you know.\nBruce: About what?\nRachel: Your father would be very proud of you.\nJust like me.\nRACHEL: What will you do?\nBruce; Rebuild it.\nJust the way it was, brick for brick.\nAlfred: Just the way it was, sir?\nBruce; Yeah, why?\nAlfred: I thought this might be a good opportunity for...\n...improving the foundations.\nBruce: In the southeast corner?\nAlfred: Precisely, sir.\nBatman: Nice.\nGordon: I couldn't find any mob bosses.\nBATMAN: Well, sergeant?\nGordon: It's \"lieutenant\" now.\nYou really started something.\nBent cops running scared.\nHope on the streets.\nBatman: But?\nGordon; The Narrows is lost.\nAnd we still haven't picked up Crane or haIf the inmates of Arkham that he freed.\nBatman: We will.\nWe can bring Gotham back.\nGordon: What about escalation?\nBatman: Escalation?",
    "arabicTranslation": "غوردون: هل هربوا جميعاً؟! كم عدد الهاربين من الجناح شديد الحراسة؟!\nالضابط: كل واحد منهم دون استثناء يا سيدي! قتلة متسلسلون، ومغتصبون!\nغوردون: ارفعوا الجسور فوراً! لا نريد لأي منهم الخروج من الجزيرة!\nفلاس: أجل، سأرفع الجسور... حين أتمكن من إرسال كل وحدة متوفرة لاعتقال هؤلاء المجانين القتلة الطليقين هناك! هيا تحركوا!\nألفريد: [يضرب حطام الخشب المشتعل بمجرفة]: آمل ألا تكون عضواً في فرقة الإطفاء يا سيدي! سيد بروس! سيد بروس! ما الفائدة من كل تمارين الضغط تلك إذا كنت تعجز حتى عن رفع جذع شجرة لعين؟!\n[ألفريد يجر بروس إلى مصعد الكهف السري بينما ينهار القصر بالنيران]",
    "vocabulary": [
      {
        "word": "maximum security",
        "arabicMeaning": "الجناح شديد الحراسة في السجن",
        "example": "The convicted spy was held in a maximum security facility."
      },
      {
        "word": "serial killer",
        "arabicMeaning": "قاتل متسلسل يرتكب جرائم متتابعة",
        "example": "Detectives pieced together forensic clues to profile the serial killer."
      },
      {
        "word": "running loose",
        "arabicMeaning": "طليق وحر في الشوارع دون قيود",
        "example": "A dangerous tiger escaped from the reserve and was running loose."
      },
      {
        "word": "fire brigade",
        "arabicMeaning": "فرقة الإطفاء ومكافحة الحرائق",
        "example": "The fire brigade arrived promptly and extinguished the warehouse blaze."
      }
    ],
    "notes": [
      {
        "term": "Running loose",
        "type": "idiom",
        "explanation": "تعبير يعني التجول بحرية دون رقابة أو حراسة بعد الهروب من السجن."
      },
      {
        "term": "Bloody log",
        "type": "slang",
        "explanation": "استخدام بريطاني دارج لكلمة 'bloody' للتعبير عن الاستياء والانفعال الطريف من ألفريد."
      }
    ],
    "wordCount": 136
  },
  {
    "id": 75,
    "paragraphNumber": 75,
    "english": "Gordon: We start carrying semiautomatics, they buy automatics.\nWe start wearing Kevlar, they buy armor-piercing rounds.\nBatman: And?\nGordon: And you're wearing a mask...\n...and jumping off rooftops.\nNow, take this guy.\nArmed robbery, double homicide.\nGot a taste for the theatrical, like you.\nLeaves a calling card.\nBatman: I'll look into it.\nGordon: I never said thank you.\nBatman; And you'll never have to.",
    "arabicTranslation": "[عزف البيانو في الكهف المظلم تحت أنقاض القصر المحترق]\nبروس: ما الذي فعلته بيدي يا ألفريد؟! كل شيء بنته عائلتي... وأسسه والدي... قد احترق وضاع!\nألفريد: إن إرث عائلة واين وتاريخها أعظم وأسمى بكثير من مجرد طوب وأسمنت يا سيدي!\nبروس: لقد أردت إنقاذ غوثام... لكني فشلت فشلاً ذريعاً!\nألفريد: ولماذا نسقط يا سيدي؟\nبروس: [يصمت ويتذكر كلمات والده]\nألفريد: لكي نتعلم كيف ننهض بأنفسنا مجدداً!\nبروس: ألم تفقد الأمل فيّ بعد؟\nألفريد: أبدًا على الإطلاق!\nغوردون: [وسط جموع الغاضبين في الشارع]: انبطحوا أرضاً!\nرجل: هذا تضييق واعتداء! أرى اعتداءً وقمعاً صارخاً!\nالشرطي: ربما ترغب في رؤية واستشعار بعض القوة المفرطة إذن؟!\nالشرطي: رجل مجنون ومسلح!\nمذيعة التلفاز: مع تصاعد غضب السكان واحتجاجهم العارم... إزاء الاستعراض الأمني غير المسبوق للشرطة لإعادة اعتقال النزلاء الفارين... نحن على وشك رفع هذه الجسور المؤدية لجزيرة الناروز!",
    "vocabulary": [
      {
        "word": "bricks and mortar",
        "arabicMeaning": "مجرد طوب وملاط وأحجار مادية",
        "example": "A true university is a community of scholars, not just bricks and mortar."
      },
      {
        "word": "legacy",
        "arabicMeaning": "إرث ومجد تاريخي متوارث",
        "example": "Nelson Mandela left an indelible legacy of forgiveness and human dignity."
      },
      {
        "word": "harassment",
        "arabicMeaning": "مضايقة واستفزاز وقمع غير مبرر",
        "example": "The employee filed a formal complaint regarding workplace harassment."
      },
      {
        "word": "excessive force",
        "arabicMeaning": "القوة المفرطة والتعسفية من الشرطة",
        "example": "Amnesty International condemned the police department's use of excessive force."
      }
    ],
    "notes": [
      {
        "term": "Bricks and mortar",
        "type": "idiom",
        "explanation": "تعبير مجازي يعني المباني المادية الصماء في مقابل القيم والمبادئ الروحية والإنسانية."
      },
      {
        "term": "Pick ourselves up",
        "type": "cultural",
        "explanation": "العودة الثانية لأعظم عبارة في الفيلم على لسان ألفريد، لإحياء عزيمة بروس بعد احتراق قصره التاريخي."
      }
    ],
    "wordCount": 65
  }
];
