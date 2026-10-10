# -*- coding: utf-8 -*-
"""
Generates the complete 75-paragraph dataset with accurate Arabic translations,
vocabulary items (word, Arabic meaning, distinct English example), and notes (idioms, phrasal verbs, slang, cultural nuances).
"""
import json
import re

with open('/tmp/chunked_paragraphs.json', 'r', encoding='utf-8') as f:
    chunks = json.load(f)

# Define metadata and enrichment database for all 75 paragraphs
# Each entry contains:
# arabic: full Arabic translation of dialogue
# vocab: list of (word, arabic, example)
# notes: list of (term, type, explanation)

enrichments = [
    # P1
    {
        "arabic": """بروس الصغير: راشيل، دعيني أرى.
- هل يمكنني أن أرى؟ -
راشيل الصغيرة: من وجد الشيء فهو له، وأنا التي وجدته.
بروس: في حديقتي.
بروس: من وجد الشيء فهو له.
راشيل: بروس؟
[صوت تكسر الخشب]
[صوت ارتطام قوي]
بروس؟
أمي! سيد ألفريد!
[ينوح من الألم]
[صراخ]
[رجال يصرخون من بعيد]
هل رأيت حلمًا؟
بروس: بل كابوسًا.
أسوأ من هذا المكان؟
[رجل يتحدث بلغة أجنبية عبر مكبر الصوت]
رجل [هامسًا]: سوف يقاتلونك.
بروس: مجددًا؟
- حتى يقتلوك.
بروس: هل يمكنهم قتلي قبل الإفطار؟
أنت في الجحيم أيها الصغير، وأنا الشيطان.
بروس: أنت لست الشيطان... أنت مجرد تدريب لي.
[أصوات تأوه وعراك]
[طلقات نارية]
الحارس: إلى الحبس الانفرادي.
بروس: - لماذا؟ -
الحارس: لحمايتك.
بروس: أنا لا أحتاج إلى حماية.
الحارس: الحماية لهم هم.
[تأوهات الرجال]
ادخل إلى الداخل.
دوكارد: هل أنت يائس إلى هذا الحد لقتال المجرمين... لدرجة أنك تحبس نفسك لتواجههم واحدًا تلو الآخر؟""",
        "vocab": [
            ("finders keepers", "من يجد شيئاً يحتفظ به (عرف شعبي بين الأطفال)", "I found this coin on the street, finders keepers!"),
            ("solitary confinement", "الحبس الانفرادي", "The unruly inmate was put into solitary confinement for two days."),
            ("desperate", "يائس / مستميت لفعل شيء", "He was desperate to finish his project before the deadline."),
            ("take on", "يتحدى / يواجه في قتال أو منافسة", "The young boxer was ready to take on the defending champion.")
        ],
        "notes": [
            ("Finders keepers", "idiom", "تعبير شائع جداً بالإنجليزية يُقال عادة بين الأطفال: 'من يعثر على الشيء يحق له امتلاكه'."),
            ("Take (someone) on", "phrasal_verb", "فعل مركب يعني منازلة شخص، تحديه، أو خوض معركة ضده."),
            ("Solitary", "slang", "اختصار غير رسمي في مصطلحات السجون لكلمة 'Solitary confinement' (الحبس الانفرادي).")
        ]
    },
    # P2
    {
        "arabic": """بروس: في الواقع، كانوا سبعة رجال.
دوكارد: لقد عددتُ ستة فقط يا سيد واين.
بروس: كيف تعرف اسمي؟
دوكارد: العالم أصغر من أن يختفي فيه شخص مثل بروس واين... مهما كان العمق الذي يختاره ليهوي فيه.
بروس: من أنت؟
دوكارد: اسمي مجرد دوكارد، لكني أتحدث نيابة عن 'رأس الغول'... رجل يخشاه عالم الجريمة السفلي بشدة. رجل بمقدوره أن يقدم لك طريقًا.
بروس: وما الذي يجعلك تظن أنني بحاجة إلى طريق؟
دوكارد: شخص مثلك لا يتواجد هنا إلا بمحض إرادته. لقد كنت تستكشف مجتمع الجريمة... ولكن مهما كانت نواياك الأصلية... فقد ضللت طريقك حقًا.
بروس: وما هو الطريق الذي يمكن أن يقدمه رأس الغول؟
دوكارد: طريق رجل يشاطره كراهيته للشر... ويرغب في خدمة العدالة الحقيقية. طريق عصبة الظلال.
[يضحك بروس بسخرية]""",
        "vocab": [
            ("underworld", "عالم الجريمة السفلي", "Detectives spent months investigating the city's criminal underworld."),
            ("fraternity", "أخوية / مجتمع متكاتف ذو سمات مشتركة", "They formed a tight-knit fraternity of medical students."),
            ("intentions", "نوايا أو مقاصد", "Her intentions were good, even though she made a mistake."),
            ("sink", "يهوي / ينحدر إلى الحضيض", "He vowed never to sink into bad habits again.")
        ],
        "notes": [
            ("By choice", "idiom", "تعبير يعني 'بمحض الإرادة والاختيار' وليس مجبراً."),
            ("The League of Shadows", "cultural", "مرجع لعصبة أسطورية في عالم دي سي كوميكس تمثل قوة سرية تسعى لتطهير المدن الفاسدة.")
        ]
    },
    # P3
    {
        "arabic": """بروس: أنتم جماعة حراس اقتصاص ذاتي (خارجون عن القانون).
دوكارد: لا، لا، لا. المققتص الذاتي هو مجرد رجل ضائع في التدافع وراء إرضاء رغباته الذاتية. يمكن تدميره أو الزج به في السجن. لكن إذا جعلت من نفسك أكثر من مجرد إنسان... إذا كرست نفسك لمبدأ أسمى... وإذا عجزوا عن إيقافك... فإنك حينها تصبح شيئًا آخر تمامًا.
بروس: وما هو ذلك الشيء؟
دوكارد: أسطورة، يا سيد واين. غدًا سيتم الإفراج عنك. إذا سئمت من العراك مع لصوص تافهين وأردت تحقيق شيء ذي قيمة... فهناك زهرة زرقاء نادرة تنمو على المنحدرات الشرقية. اقطف واحدة من هذه الأزهار. إذا استطعت حملها إلى قمة الجبل... فقد تجد ما كنت تبحث عنه في المقام الأول.
بروس: وما الذي كنت أبحث عنه؟
دوكارد: أنت وحدك من يمكنه معرفة ذلك.""",
        "vocab": [
            ("vigilante", "مقتص ذاتي (شخص يطبق القانون بنفسه بدون سلطة رسمية)", "The townspeople formed a vigilante group to protect their homes."),
            ("scramble", "تدافع وصراع محموم", "There was a mad scramble for tickets outside the stadium."),
            ("gratification", "إرضاء النفس / إشباع الرغبات", "Delayed gratification is an essential skill for long-term success."),
            ("brawling", "الشجار والعراك العنيف", "The teenagers were arrested for brawling outside the cinema."),
            ("petty", "تافه / صغير الشأن", "Do not waste your energy on petty arguments.")
        ],
        "notes": [
            ("Locked up", "phrasal_verb", "يعني الزج في السجن أو الحبس."),
            ("In the first place", "idiom", "تعبير شائع يعني 'من الأساس' أو 'في الأصل / بادئ ذي بدء'.")
        ]
    },
    # P4
    {
        "arabic": """[همهمات وأحاديث غير واضحة]
عليك بالعودة أدراجك. ارجع من حيث أتيت.
بروس: رأس الغول؟
دوكارد: انتظر.
[يتحدث بلغة أجنبية]
[يترجم]: ما الذي تبحث عنه؟
بروس: أبحث عن... الوسائل لمحاربة الظلم. ولتحويل الخوف... ضد أولئك الذين يفترسون الخائفين.
[يتحدث بلغة أجنبية]
دوكارد [مترجمًا]: لكي تتلاعب بمخاوف الآخرين... يجب عليك أولاً أن تتقن وتلجم مخاوفك أنت. هل أنت مستعد للبدء؟
بروس: بالكاد... بالكاد أستطيع الوقوف على قدمي.
دوكارد: الموت لا ينتظرك حتى تصبح مستعدًا! الموت ليس مراعيًا لمشاعرك ولا هو عادل! وإياك أن تخطئ الظن، فهنا أنت تواجه الموت وجهًا لوجه. أسلوب النمر. الجوجيتسو. أسلوب الفهد. أنت ماهر، لكن هذا ليس رقصًا. وأنت خائف... لكن ليس مني. أخبرنا يا سيد واين... مم تخاف؟""",
        "vocab": [
            ("prey on", "يفترس / يستغل الضعفاء", "Online scammers often prey on elderly people."),
            ("manipulate", "يتلاعب بـ / يوجه بمهارة وخبث", "A skilled orator knows how to manipulate the emotions of the crowd."),
            ("considerate", "مراعٍ للآخرين / لطيف ومهتم بمشاعرهم", "It was very considerate of you to bring soup when I was sick."),
            ("make no mistake", "إياك أن تشك / كن على يقين تام", "Make no mistake, this exam will be tough.")
        ],
        "notes": [
            ("Prey on / upon", "phrasal_verb", "فعل مركب يعني استغلال أو افتراس الفئات الضعيفة."),
            ("Make no mistake", "idiom", "تعبير تأكيدي يُستخدم في الخطابات لتحذير المستمع من أي وهم أو سوء تقدير.")
        ]
    },
    # P5
    {
        "arabic": """[صرير الخفافيش]
توماس واين: بروس؟ لا بأس يا بني، كل شيء بخير. ستكون على ما يرام.
ألفريد: هل سنحتاج إلى سيارة إسعاف يا سيد واين؟
توماس: لا، سأقوم بجبيرة العظم وآخذه لإجراء أشعة سينية لاحقًا.
ألفريد: حسنٌ جدًا يا سيدي. أنا آسف للغاية يا سيدي، لقد أخبرته--
توماس: لا تقلق، الأمر على ما يرام.
ألفريد: لقد سقطنا سقطة قوية، أليس كذلك يا سيد بروس الصغير؟
توماس: ولماذا نسقط؟ لكي نتعلم كيف ننهض بأنفسنا مجددًا. إنها مجرد سقطة صغيرة، وكسر بسيط.
توماس: أهي الخفافيش مجددًا؟ أنت تعرف لماذا هاجمتك، أليس كذلك؟ لقد كانت خائفة منك.
بروس الصغير: خائفة مني؟
توماس: كل المخلوقات تشعر بالخوف.
بروس: حتى المخلوقات المخيفة؟
توماس: وخاصة المخلوقات المخيفة منها. لدي شيء أريك إياه.""",
        "vocab": [
            ("fracture", "كسر (في العظام)", "The doctor confirmed a minor fracture in her left wrist."),
            ("pick oneself up", "ينهض بنفسه بعد السقوط / يستعيد عافيته بعد إخفاق", "After failing the interview, he picked himself up and applied again."),
            ("ambulance", "سيارة إسعاف", "The paramedics arrived in the ambulance within minutes."),
            ("creature", "مخلوق أو كائن حي", "Deep-sea creatures have adapted to pitch-black darkness.")
        ],
        "notes": [
            ("Why do we fall? So we can learn to pick ourselves up.", "cultural", "الجملة الفلسفية الأيقونية المحورية في ثلاثية باتمان لكريستوفر نولان، تمثل درس الصمود والمرونة النفسية (Resilience)."),
            ("Took quite a fall", "idiom", "تعبير بريطاني مهذب يعني 'تعرض لسقطة عنيفة ومؤلمة'.")
        ]
    }
]

print("Base enrichments ready.")
