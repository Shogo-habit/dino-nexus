const AUTHOR_DATA = {
  name: "Dino-Nexus キュレーター",
  role: "Project Lead / Digital Archive Curator",
  bio: "息子の恐竜好きをきっかけに自らも探求の世界へ。膨大な古生物資料を独自に精査・データベース化し、本プロジェクトを立ち上げる。専門家ではない一人の親としての視点を大切にしながら、最新の学説に基づいた『次世代のデジタルアーカイブ』の構築を目指している。",
  twitter: "@DinoNexusLab",
  mission: "複雑な古生物データを、最も直感的かつ正確に可視化し、次世代の知的好奇心を刺激する。"
};

const DINOSAURS = [
  {
    id: "tyrannosaurus",
    name: "ティラノサウルス",
    kana: "てぃらのさうるす",
    scientificName: "Tyrannosaurus rex",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "肉食",
    length: "12.3m",
    weight: "8.4t",
    description: "史上最大級の肉食恐竜。その咬合力は全ての陸上生物の中で最強クラスと言われ、骨をも噛み砕くことができた。頂点捕食者として君臨していた。",
    bioTraits: [
      { trait: "咬合力", value: "驚異的", detail: "骨を砕くための特殊な歯の構造を持つ" },
      { trait: "感知能力", value: "極めて高い", detail: "優れた立体視を持つ" }
    ],
    image: "images/tyrannosaurus.webp",
    group: "獣脚類"
  },
  {
    id: "triceratops",
    name: "トリケラトプス",
    kana: "とりけらとぷす",
    scientificName: "Triceratops horridus",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "9.0m",
    weight: "10.0t",
    description: "3本の角と巨大な襟飾りが特徴。強力な防御能力を持ち、大型肉食恐竜に対しても立ち向かった。",
    bioTraits: [
      { trait: "防御力", value: "鉄壁", detail: "厚い襟飾りが首元を保護する" },
      { trait: "攻撃手段", value: "突進", detail: "最大1メートルの角による突き" }
    ],
    image: "images/triceratops.webp",
    group: "角竜類"
  },
  {
    id: "spinosaurus",
    name: "スピノサウルス",
    kana: "すぴのさうるす",
    scientificName: "Spinosaurus aegyptiacus",
    era: "白亜紀中～後期",
    region: "アフリカ",
    diet: "肉食（魚食）",
    length: "15.0m",
    weight: "7.0t",
    description: "背中に帆を持つ水陸両生の肉食恐竜。ワニのような長い顎を持ち、水中での狩りに適応していた。",
    bioTraits: [
      { trait: "水中適応", value: "最高水準", detail: "パドルのような尾による遊泳" },
      { trait: "捕食特化", value: "魚食", detail: "長い顎で魚を捕らえる" }
    ],
    image: "images/spinosaurus.webp",
    group: "獣脚類"
  },
  {
    id: "stegosaurus",
    name: "ステゴサウルス",
    kana: "すてごさうるす",
    scientificName: "Stegosaurus stenops",
    era: "ジュラ紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "9.0m",
    weight: "5.0t",
    description: "背中に並ぶ骨板と、尾の鋭いスパイクが特徴。脳は小さいが、尾による強力な防御策を持っていた。",
    bioTraits: [
      { trait: "防御武具", value: "スパイク", detail: "サゴマイザーと呼ばれる尾の武器" },
      { trait: "体温調節", value: "可能", detail: "背中の骨板による熱制御説" }
    ],
    image: "images/stegosaurus.webp",
    group: "剣竜類"
  },
  {
    id: "ankylosaurus",
    name: "アンキロサウルス",
    kana: "あんきろさうるす",
    scientificName: "Ankylosaurus magniventris",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "7.0m",
    weight: "6.0t",
    description: "全身が装甲板で覆われ、尾の先端にはハンマーのような骨の塊がある。最も硬い恐竜の一つ。",
    bioTraits: [
      { trait: "装甲", value: "超硬質", detail: "皮膚に骨質の装飾が埋め込まれている" },
      { trait: "反撃能力", value: "ハンマー", detail: "尾で肉食恐竜の骨を砕く" }
    ],
    image: "images/ankylosaurus.webp",
    group: "よろい竜類"
  },
  {
    id: "velociraptor",
    name: "ヴェロキラプトル",
    kana: "ヴぇろきらぷとる",
    scientificName: "Velociraptor mongoliensis",
    era: "白亜紀後期",
    region: "アジア",
    diet: "肉食",
    length: "2.0m",
    weight: "15kg",
    description: "小型だが知能が高く、俊敏な捕食者。鉤爪を使い、獲物の急所を執拗に狙う狩りを得意としていた。",
    bioTraits: [
      { trait: "敏捷性", value: "最高速", detail: "軽量な骨格による高速移動" },
      { trait: "知能", value: "高い", detail: "集団での狩りが可能だったとされる" }
    ],
    image: "images/velociraptor.webp",
    group: "獣脚類"
  },
  {
    id: "allosaurus",
    name: "アロサウルス",
    kana: "あろさうるす",
    scientificName: "Allosaurus fragilis",
    era: "ジュラ紀後期",
    region: "北アメリカ",
    diet: "肉食",
    length: "8.5m",
    weight: "2.3t",
    description: "ジュラ紀の頂点捕食者。鋭い歯と強力な前肢の爪を持ち、大型の草食恐竜を集団で狩った可能性がある。",
    bioTraits: [
      { trait: "攻撃特性", value: "噛みつき・爪", detail: "斧のように上顎を振り下ろす攻撃" },
      { trait: "機動力", value: "高い", detail: "同サイズの肉食恐竜より俊敏" }
    ],
    image: "images/allosaurus.webp",
    group: "獣脚類"
  },
  {
    id: "brachiosaurus",
    name: "ブラキオサウルス",
    kana: "ぶらきおさうるす",
    scientificName: "Brachiosaurus altithorax",
    era: "ジュラ紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "25.0m",
    weight: "56.0t",
    description: "前肢が後肢よりも長い超大型恐竜。高い所の植物を食べることに特化し、圧倒的な巨体が防具となった。",
    bioTraits: [
      { trait: "リーチ", value: "超広範囲", detail: "地上13メートル以上の葉を摂取" },
      { trait: "防御", value: "巨大質量", detail: "捕食者に襲われるリスクはほぼ皆無" }
    ],
    image: "images/brachiosaurus.webp",
    group: "竜脚類"
  },
  {
    id: "carnotaurus",
    name: "カルノタウルス",
    kana: "かるのたふるす",
    scientificName: "Carnotaurus sastrei",
    era: "白亜紀後期",
    region: "南アメリカ",
    diet: "肉食",
    length: "7.5m",
    weight: "1.35t",
    description: "「肉食の雄牛」を意味し、目の上にある2本の角が特徴。極端に短い前肢と、非常に発達した脚力を持つ。",
    bioTraits: [
      { trait: "走力", value: "最高クラス", detail: "直進加速能力が非常に高いとされる" },
      { trait: "感覚", value: "嗅覚", detail: "強力な嗅覚で獲物を追跡する" }
    ],
    image: "images/carnotaurus.webp",
    group: "獣脚類"
  },
  {
    id: "diplodocus",
    name: "ディプロドクス",
    kana: "でぃぷろどくす",
    scientificName: "Diplodocus longus",
    era: "ジュラ紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "27.0m",
    weight: "12.0t",
    description: "非常に長い首と、鞭のように細長い尾を持つ大型の竜脚類。細長い体型を活かして広範囲の植物を摂取した。",
    bioTraits: [
      { trait: "防御手段", value: "鞭打ち", detail: "尾を音速で振り回し、音波や打撃で攻撃" },
      { trait: "採食効率", value: "高い", detail: "首を横に振るだけで広範囲の植物を食べられた" }
    ],
    image: "images/diplodocus.webp",
    group: "竜脚類"
  },
  {
    id: "elasmosaurus",
    name: "エラスモサウルス",
    kana: "えらすもさうるす",
    scientificName: "Elasmosaurus platyurus",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "肉食（魚食）",
    length: "14.0m",
    weight: "2.0t",
    description: "全長の大半分を占める極端に長い首を持つ首長竜。その首は70個以上の骨からなり、柔軟に獲物を追跡できた。",
    bioTraits: [
      { trait: "水中機動", value: "高い", detail: "ヒレ状の四肢で滑らかに泳ぐ" },
      { trait: "奇襲性", value: "高い", detail: "水面下から頭だけを動かして魚を捕らえる" }
    ],
    image: "images/elasmosaurus.webp",
    group: "首長竜"
  },
  {
    id: "fukuisaurus",
    name: "フクイサウルス",
    kana: "ふくいさうるす",
    scientificName: "Fukuisaurus tetoriensis",
    era: "白亜紀前期",
    region: "日本",
    diet: "草食",
    length: "4.7m",
    weight: "1.0t",
    description: "福井県で発見されたイグアノドン類。日本を代表する恐竜の一つであり、四足歩行と二足歩行の両方が可能だった。",
    bioTraits: [
      { trait: "汎用性", value: "高い", detail: "二足と四足の両方で活動可能" },
      { trait: "咀嚼能力", value: "進化型", detail: "植物を効率よくすりつぶす歯の構造" }
    ],
    image: "images/fukuisaurus.webp",
    group: "鳥脚類"
  },
  {
    id: "mosasaurus",
    name: "モササウルス",
    kana: "もささうるす",
    scientificName: "Mosasaurus hoffmanni",
    era: "白亜紀後期",
    region: "海洋（全世界）",
    diet: "肉食",
    length: "17.0m",
    weight: "20.0t",
    description: "白亜紀の海に君臨した頂点捕食者。強力な顎と遊泳に適した流線型の体を持ち、多様な獲物を捕らえていた。",
    bioTraits: [
      { trait: "破壊力", value: "絶大", detail: "強力な咬合力でカメの甲羅も砕く" },
      { trait: "推進力", value: "高い", detail: "強力な尾びれによる突進" }
    ],
    image: "images/mosasaurus.webp",
    group: "その他"
  },
  {
    id: "giganotosaurus",
    name: "ギガノトサウルス",
    kana: "ぎがのとさうるす",
    scientificName: "Giganotosaurus carolini",
    era: "白亜紀後期",
    region: "南アメリカ",
    diet: "肉食",
    length: "13.0m",
    weight: "8.0t",
    description: "ティラノサウルスに匹敵、あるいはそれを上回る巨体を持つ巨大肉食恐竜。アルゼンチンで発見され、巨大な竜脚類を狩っていたと考えられている。",
    bioTraits: [
      { trait: "巨体", value: "最大級", detail: "地上最大級の獣脚類の一つ" },
      { trait: "咬合力", value: "高い", detail: "肉を切り裂くのに適した薄く鋭い歯" }
    ],
    image: "images/giganotosaurus.webp",
    group: "獣脚類"
  },
  {
    id: "hadrosaurus",
    name: "ハドロサウルス",
    kana: "はどろさうるす",
    scientificName: "Hadrosaurus foulkii",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "8.0m",
    weight: "3.0t",
    description: "「カモノハシ竜」として知られる草食恐竜の代表格。北アメリカで初めてほぼ完全な骨格が発見された恐竜でもある。",
    bioTraits: [
      { trait: "咀嚼能力", value: "高度", detail: "数百本の歯が並ぶデンタルバッテリー構造" },
      { trait: "移動形式", value: "二足・四足", detail: "状況に応じて歩行スタイルを切り替えた" }
    ],
    image: "images/hadrosaurus.webp",
    group: "鳥脚類"
  },
  {
    id: "iguanodon",
    name: "イグアノドン",
    kana: "いぐあのどん",
    scientificName: "Iguanodon bernissartensis",
    era: "白亜紀前期",
    region: "ヨーロッパ・アジア",
    diet: "草食",
    length: "10.0m",
    weight: "4.0t",
    description: "「イグアナの歯」を意味する名前を持つ、世界で2番目に命名された恐竜。親指にある鋭いスパイクが特徴で、自衛に用いたとされる。",
    bioTraits: [
      { trait: "自衛武器", value: "親指のスパイク", detail: "捕食者に対する強力な武器" },
      { trait: "食性適応", value: "効率的", detail: "硬い植物をすりつぶす能力に長けていた" }
    ],
    image: "images/iguanodon.webp",
    group: "鳥脚類"
  },
  {
    id: "juravenator",
    name: "ジュラベナトル",
    kana: "じゅらべなとる",
    scientificName: "Juravenator starki",
    era: "ジュラ紀後期",
    region: "ヨーロッパ",
    diet: "肉食",
    length: "0.8m",
    weight: "2kg",
    description: "ドイツで発見された小型の肉食恐竜。皮膚の痕跡から、鱗と羽毛の両方を持っていた可能性が示唆されている。",
    bioTraits: [
      { trait: "皮膚構造", value: "ハイブリッド", detail: "鱗と羽毛の痕跡が同時に確認されている" },
      { trait: "敏捷性", value: "極めて高い", detail: "小型の獲物を捕らえるための俊敏な動き" }
    ],
    image: "images/juravenator.webp",
    group: "獣脚類"
  },
  {
    id: "kentrosaurus",
    name: "ケントロサウルス",
    kana: "けんとろさうるす",
    scientificName: "Kentrosaurus aethiopicus",
    era: "ジュラ紀後期",
    region: "アフリカ",
    diet: "草食",
    length: "4.5m",
    weight: "1.0t",
    description: "ステゴサウルスの仲間だが、背中の後半から尾にかけて鋭いスパイクが並んでいるのが特徴。アフリカのタンザニアで多く発見された。",
    bioTraits: [
      { trait: "カウンター", value: "鋭いトゲ", detail: "尾を振り回して敵を攻撃する" },
      { trait: "防御態勢", value: "ハリネズミ状", detail: "全身のトゲで捕食者を威嚇" }
    ],
    image: "images/kentrosaurus.webp",
    group: "剣竜類"
  },
  {
    id: "lambeosaurus",
    name: "ランベオサウルス",
    kana: "らんべおさうるす",
    scientificName: "Lambeosaurus lambei",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "9.0m",
    weight: "4.0t",
    description: "頭部に斧のような形の大きなトサカを持つハドロサウルス類。トサカの内部は空洞で、音を鳴らして仲間と通信していた可能性がある。",
    bioTraits: [
      { trait: "音響装置", value: "トサカ", detail: "低周波の音を増幅させて通信に利用" },
      { trait: "社会性", value: "高い", detail: "群れで行動し、音声で警告を発し合った" }
    ],
    image: "images/lambeosaurus.webp",
    group: "鳥脚類"
  },
  {
    id: "nigersaurus",
    name: "ニジェールサウルス",
    kana: "にじぇーるさうるす",
    scientificName: "Nigersaurus taqueti",
    era: "白亜紀前期",
    region: "アフリカ",
    diet: "草食",
    length: "9.0m",
    weight: "2.0t",
    description: "「掃除機のような口」を持つ不思議な外見の竜脚類。地面の草を効率よく食べるため、頭部が常に下を向くような骨格構造をしていた。",
    bioTraits: [
      { trait: "採食特化", value: "広幅の口", detail: "一度に大量の地表植物を摂取可能" },
      { trait: "軽量化", value: "極限の骨格", detail: "骨の多くが薄く、頭骨は透けて見えるほど" }
    ],
    image: "images/nigersaurus.webp",
    group: "竜脚類"
  },
  {
    id: "bajadasaurus",
    name: "バジャダサウルス",
    kana: "ばじゃださうるす",
    scientificName: "Bajadasaurus pronuspinax",
    era: "白亜紀前期",
    region: "南アメリカ",
    diet: "草食",
    length: "10.0m",
    weight: "4.0t",
    description: "首から前向きに伸びる巨大な棘が最大の特徴である竜脚類。この棘は身を守るための武器、あるいは肉食恐竜を威嚇するための装飾だったと考えられている。",
    bioTraits: [
      { trait: "防御構造", value: "前向頸棘", detail: "首の神経棘が前方に長く伸び、頭部を守る" },
      { trait: "進化の特異性", value: "極めて高い", detail: "アマルガサウルスとは逆に、棘が前を向く" }
    ],
    image: "images/bajadasaurus.webp",
    group: "竜脚類"
  },
  {
    id: "psittacosaurus",
    name: "プシッタコサウルス",
    kana: "ぷしったこさうるす",
    scientificName: "Psittacosaurus mongoliensis",
    era: "白亜紀前期",
    region: "アジア",
    diet: "草食",
    length: "2.0m",
    weight: "20kg",
    description: "「オウムトカゲ」を意味する名の通り、強力な嘴（くちばし）を持つ初期の角竜類。尻尾の付け根から背中にかけて長い毛（剛毛）が生えていたことが、保存状態の良い化石から判明している。",
    bioTraits: [
      { trait: "特異な外見", value: "オウム状の嘴", detail: "硬い植物や木の実を砕いて食べていた" },
      { trait: "防御器官", value: "尾の剛毛", detail: "威嚇やディスプレイに使われた可能性のある長いクイル" }
    ],
    image: "images/psittacosaurus.webp",
    group: "角竜類"
  },
  {
    id: "carcharodontosaurus",
    name: "カルカロドントサウルス",
    kana: "かるかろどんとさうるす",
    scientificName: "Carcharodontosaurus saharicus",
    era: "白亜紀後期",
    region: "アフリカ",
    diet: "肉食",
    length: "13.0m",
    weight: "8,000kg",
    description: "「サメの歯を持つトカゲ」を意味する名を持つ、史上最大級の肉食恐竜。ティラノサウルスに匹敵、あるいは凌駕する巨体を持ち、その名の通り肉を切り裂くのに適した薄く鋭い歯が特徴。",
    bioTraits: [
      { trait: "攻撃器官", value: "サメ状の歯", detail: "縁がギザギザ（鋸歯）になった鋭い歯で獲物の肉を切り裂く" },
      { trait: "身体的特徴", value: "巨大な頭骨", detail: "全長1.6mに達する巨大な頭部を持ち、噛む力よりも切り裂く力を重視していた" }
    ],
    image: "images/carcharodontosaurus.webp",
    group: "獣脚類"
  },
  {
    id: "gigantspinosaurus",
    name: "ギガントスピノサウルス",
    kana: "ぎがんとすぴのさうるす",
    scientificName: "Gigantspinosaurus sichuanensis",
    era: "ジュラ紀後期",
    region: "アジア",
    diet: "草食",
    length: "4.2m",
    weight: "700kg",
    description: "肩から巨大な棘が後ろ向きに突き出した、極めて特異な姿を持つ剣竜類。スピノサウルスと名が付くが獣脚類ではなく、ステゴサウルスに近い仲間。この巨大な棘は防御だけでなく、ディスプレイの役割もあったと考えられている。",
    bioTraits: [
      { trait: "防御器官", value: "巨大な肩甲棘", detail: "肩から側面後方へ伸びる巨大な棘。側面からの攻撃に対する強力な盾となった" },
      { trait: "攻撃器官", value: "サゴマイザー", detail: "尾の先端に4本の鋭い棘を持ち、肉食恐竜を撃退した" }
    ],
    image: "images/gigantspinosaurus.webp",
    group: "剣竜類"
  },
  {
    id: "oviraptor",
    name: "オヴィラプトル",
    kana: "おヴぃらぷとる",
    scientificName: "Oviraptor philoceratops",
    era: "白亜紀後期",
    region: "アジア",
    diet: "雑食",
    length: "2.0m",
    weight: "33kg",
    description: "「卵泥棒」を意味する名前だが、実際には自分の卵を抱いて守っていたことが判明した子煩悩な恐竜。歯がなく、強力なくちばしを持っていた。",
    bioTraits: [
      { trait: "育児本能", value: "極めて強い", detail: "卵を抱いたまま化石化した個体が発見" },
      { trait: "嘴の破壊力", value: "強力", detail: "硬い殻や木の実を砕くことができる" }
    ],
    image: "images/oviraptor.webp",
    group: "獣脚類"
  },
  {
    id: "parasaurolophus",
    name: "パラサウロロフス",
    kana: "ぱらさうろろふす",
    scientificName: "Parasaurolophus walkeri",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "10.0m",
    weight: "3.0t",
    description: "後方に長く伸びたトサカが特徴的な恐竜。このトサカは管楽器のように音を響かせることができ、数キロ先まで声が届いたとされる。",
    bioTraits: [
      { trait: "遠距離通信", value: "最高水準", detail: "長いトサカで独自の音波を発生" },
      { trait: "感知能力", value: "高い", detail: "優れた視覚と聴覚で外敵を察知" }
    ],
    image: "images/parasaurolophus.webp",
    group: "鳥脚類"
  },
  {
    id: "pteranodon",
    name: "プテラノドン",
    kana: "ぷてらのどん",
    scientificName: "Pteranodon longiceps",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "肉食（魚食）",
    length: "翼開長7.0m",
    weight: "20kg",
    description: "最も有名な翼竜の一つ。歯のないくちばしと、頭部後方の長いトサカが特徴。海の上を飛び回り、魚を捕らえて食べていた。",
    bioTraits: [
      { trait: "飛行能力", value: "超長距離", detail: "上昇気流を利用したグライダー飛行" },
      { trait: "捕食技術", value: "魚食特化", detail: "水面の魚をダイビングして捕らえる" }
    ],
    image: "images/pteranodon.webp",
    group: "翼竜"
  },
  {
    id: "quetzalcoatlus",
    name: "ケツァルコアトルス",
    kana: "けつぁるこあとるす",
    scientificName: "Quetzalcoatlus northropi",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "肉食",
    length: "翼開長11.0m",
    weight: "200kg",
    description: "史上最大級の空飛ぶ生物。キリンに匹敵する高さがあり、巨大な翼で大陸間を移動した可能性もある。地上でも四肢を使って活発に動けた。",
    bioTraits: [
      { trait: "圧倒的サイズ", value: "空の王者", detail: "軽飛行機に匹敵する翼の広さ" },
      { trait: "地上移動", value: "意外に俊敏", detail: "四足歩行で地上を歩き獲物を探す" }
    ],
    image: "images/quetzalcoatlus.webp",
    group: "翼竜"
  },
  {
    id: "rugops",
    name: "ルゴプス",
    kana: "るごぷす",
    scientificName: "Rugops primus",
    era: "白亜紀後期",
    region: "アフリカ",
    diet: "肉食",
    length: "6.0m",
    weight: "750kg",
    description: "「しわのある顔」を意味する名前の通り、頭骨に多くの溝や穴がある肉食恐竜。死肉をあさるスカベンジャーだったという説もある。",
    bioTraits: [
      { trait: "頭部装飾", value: "特徴的", detail: "血管が通る多くの穴があり、ディスプレイ用か" },
      { trait: "食性", value: "スカベンジャー", detail: "死肉を効率よく食べるのに適した構造" }
    ],
    image: "images/rugops.webp",
    group: "獣脚類"
  },
  {
    id: "utahraptor",
    name: "ユタラプトル",
    kana: "ゆたらぷとる",
    scientificName: "Utahraptor ostrommaysi",
    era: "白亜紀前期",
    region: "北アメリカ",
    diet: "肉食",
    length: "7.0m",
    weight: "500kg",
    description: "ラプトル類の中で最大最強の種。20cmを超える巨大な鉤爪を持ち、自分より大きな恐竜も執拗に攻撃して倒したと考えられている。",
    bioTraits: [
      { trait: "凶器", value: "巨大鉤爪", detail: "足にある20cm以上の鎌状の爪" },
      { trait: "筋力", value: "強靭", detail: "跳躍力と瞬発力に優れる" }
    ],
    image: "images/utahraptor.webp",
    group: "獣脚類"
  },
  {
    id: "wuerhosaurus",
    name: "ウエルホサウルス",
    kana: "うえほさうるす",
    scientificName: "Wuerhosaurus homheni",
    era: "白亜紀前期",
    region: "アジア",
    diet: "草食",
    length: "7.0m",
    weight: "4.0t",
    description: "中国で発見された、白亜紀まで生き残った珍しい剣竜類。背中の板がステゴサウルスよりも低く、丸みを帯びているのが特徴。",
    bioTraits: [
      { trait: "骨板形状", value: "低重心", detail: "平らで低い板が背中を守る" },
      { trait: "生存戦略", value: "長期間", detail: "白亜紀という激戦の時代を生き抜いた剣竜" }
    ],
    image: "images/wuerhosaurus.webp",
    group: "剣竜類"
  },
  {
    id: "xenoceratops",
    name: "クセノケラトプス",
    kana: "くせのけらとぷす",
    scientificName: "Xenoceratops foremostensis",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "6.0m",
    weight: "2.0t",
    description: "「異質な角を持つ顔」を意味する、初期の大型角竜類。襟飾りの縁にある巨大なスパイクが、後のトリケラトプスらへと繋がる進化の道筋を示している。",
    bioTraits: [
      { trait: "威嚇力", value: "絶大", detail: "派手で巨大なフリルと角" },
      { trait: "突進力", value: "高い", detail: "重量を活かした重戦車のような突進" }
    ],
    image: "images/xenoceratops.webp",
    group: "角竜類"
  },
  {
    id: "yutyrannus",
    name: "ユティラヌス",
    kana: "ゆてぃらぬす",
    scientificName: "Yutyrannus huali",
    era: "白亜紀前期",
    region: "アジア",
    diet: "肉食",
    length: "9.0m",
    weight: "1.4t",
    description: "全身が羽毛に覆われていたことが確認されている、ティラノサウルスの仲間。比較的寒冷な地域に住んでいたため、保温のために羽毛が発達したとされる。",
    bioTraits: [
      { trait: "耐寒性能", value: "羽毛装甲", detail: "全身を覆う長い羽毛で寒さに適応" },
      { trait: "集団狩猟", value: "可能性あり", detail: "複数の個体が同時に発見されることが多い" }
    ],
    image: "images/yutyrannus.webp",
    group: "獣脚類"
  },
  {
    id: "zuniceratops",
    name: "ズニケラトプス",
    kana: "ずにけらとぷす",
    scientificName: "Zuniceratops christopheri",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "3.5m",
    weight: "150kg",
    description: "目の上に立派な角を持つ、最初期の角竜類の一つ。これより古い角竜には目の上の角がなく、角の進化を解き明かす重要な鍵を握る。",
    bioTraits: [
      { trait: "角の先駆者", value: "眉上の角", detail: "大型角竜に繋がる特徴をいち早く獲得" },
      { trait: "機動力", value: "中型犬並み", detail: "小回りのきく動きで外敵を回避" }
    ],
    image: "images/zuniceratops.webp",
    group: "角竜類"
  },
  {
    id: "pachycephalosaurus",
    name: "パキケファロサウルス",
    kana: "ぱきけふぁろさうるす",
    scientificName: "Pachycephalosaurus wyomingensis",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食（または雑食）",
    length: "4.5m",
    weight: "450kg",
    description: "厚さ25cmにも達する分厚い頭骨を持つ恐竜。頭突きで儀礼的な争いや防御を行っていたと考えられており、その独特な形状から非常に人気が高い。",
    bioTraits: [
      { trait: "打撃武器", value: "堅い頭頂部", detail: "衝撃を吸収する特殊な骨構造" },
      { trait: "防御装甲", value: "骨質ノブ", detail: "頭部の周囲に並ぶ刺状の突起" }
    ],
    image: "images/pachycephalosaurus.webp",
    group: "堅頭竜類"
  },
  {
    id: "dilophosaurus",
    name: "ディロフォサウルス",
    kana: "でぃろふぉさうるす",
    scientificName: "Dilophosaurus wetherilli",
    era: "ジュラ紀前期",
    region: "北アメリカ",
    diet: "肉食",
    length: "7.0m",
    weight: "400kg",
    description: "頭部にある2本の高く丸いトサカが特徴的な獣脚類。映画等の影響で毒を吐くイメージがあるが、実際にはその証拠はなく、鋭い爪と牙で獲物を捕らえる俊敏なハンターだった。",
    bioTraits: [
      { trait: "ディスプレイ", value: "扇形トサカ", detail: "個体識別や求愛に使用された可能性" },
      { trait: "機動力", value: "高い", detail: "細身の体格を活かしたスピーディな狩り" }
    ],
    image: "images/dilophosaurus.webp",
    group: "獣脚類"
  },
  {
    id: "apatosaurus",
    name: "アパトサウルス",
    kana: "あぱとさうるす",
    scientificName: "Apatosaurus ajax",
    era: "ジュラ紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "23.0m",
    weight: "20.0t",
    description: "「まどわすトカゲ」を意味する名を持つ超大型竜脚類。かつてはブロントサウルスとして知られていた最も有名な恐竜の一つで、巨大な体と長い鞭のような尾を持つ。",
    bioTraits: [
      { trait: "リーチ", value: "広範囲", detail: "長い首を動かし大量の植物を摂取" },
      { trait: "護身", value: "鞭の尾", detail: "尾を音速で振り回し天敵を威嚇" }
    ],
    image: "images/apatosaurus.webp",
    group: "竜脚類"
  },
  {
    id: "therizinosaurus",
    name: "テリジノサウルス",
    kana: "てりじのさうるす",
    scientificName: "Therizinosaurus cheloniformis",
    era: "白亜紀後期",
    region: "アジア",
    diet: "草食",
    length: "10.0m",
    weight: "5.0t",
    description: "「大鎌のトカゲ」の名にふさわしい、長さ1メートルにも達する巨大な爪を持つ恐竜。その巨大な爪は攻撃ではなく、植物を引き寄せたり自衛のために使われたと考えられている。",
    bioTraits: [
      { trait: "リーチ", value: "巨大な鎌", detail: "史上最大級のハンドクローを保持" },
      { trait: "特異な外観", value: "羽毛と巨体", detail: "直立に近い姿勢で高い木の葉を食べる" }
    ],
    image: "images/therizinosaurus.webp",
    group: "獣脚類"
  },
  {
    id: "deinocheirus",
    name: "デイノケイルス",
    kana: "でぃのけいるす",
    scientificName: "Deinocheirus mirificus",
    era: "白亜紀後期",
    region: "アジア",
    diet: "雑食",
    length: "11.0m",
    weight: "6.5t",
    description: "「恐ろしい手」という意味の通り、巨大な前肢のみが長年謎とされていた恐竜。近年全身が判明し、帆のような背中とアヒルのような口を持つ特異な姿だったことが明らかになった。",
    bioTraits: [
      { trait: "汎用性", value: "雑食適応", detail: "魚、植物、昆虫など多様な食事を摂取" },
      { trait: "構造", value: "帆と嘴", detail: "水辺での生活に適した特異な骨格構造" }
    ],
    image: "images/deinocheirus.webp",
    group: "獣脚類"
  },
  {
    id: "baryonyx",
    name: "バリオニクス",
    kana: "ばりおにくす",
    scientificName: "Baryonyx walkeri",
    era: "白亜紀前期",
    region: "ヨーロッパ",
    diet: "肉食（魚食）",
    length: "9.5m",
    weight: "1.7t",
    description: "ワニのような長い口先と、親指にある30cmもの巨大な鉤爪が特徴。水辺で魚を主食としていたと考えられており、スピノサウルスの近縁種にあたる。",
    bioTraits: [
      { trait: "捕食特化", value: "魚獲りの爪", detail: "大型の魚を引っ掛けて捕らえる鉤爪" },
      { trait: "構造", value: "細長い顎", detail: "90本以上の歯を持つ魚食に適した口" }
    ],
    image: "images/baryonyx.webp",
    group: "獣脚類"
  },
  {
    id: "argentinosaurus",
    name: "アルゼンチノサウルス",
    kana: "あるぜんちのさうるす",
    scientificName: "Argentinosaurus huinculensis",
    era: "白亜紀後期",
    region: "南アメリカ",
    diet: "草食",
    length: "35.0m",
    weight: "70.0t",
    description: "史上最大の陸生動物の一つとされる超巨大竜脚類。その一歩は地響きを立て、圧倒的な質量こそが最大の防御であった。あまりの巨大さゆえに天敵はほぼ存在しなかった。",
    bioTraits: [
      { trait: "質量", value: "地上最強", detail: "他の大型肉食恐竜を圧倒する巨体" },
      { trait: "構造", value: "強靭な四肢", detail: "数十トンの体重を支えるための柱のような脚" }
    ],
    image: "images/argentinosaurus.webp",
    group: "竜脚類"
  },
  {
    id: "megalodon",
    name: "メガロドン",
    kana: "めがろどん",
    scientificName: "Otodus megalodon",
    era: "中新世〜鮮新世",
    region: "全世界の海洋",
    diet: "肉食",
    length: "18.0m",
    weight: "60.0t",
    description: "史上最大級のサメ。クジラを主食としていたと考えられており、その巨大な顎には数百本の鋭い歯が並んでいた。絶滅した理由は気候変動や獲物の減少など諸説ある。",
    bioTraits: [
      { trait: "咬合力", value: "絶大", detail: "陸海空を通じて史上最強クラスの噛む力" },
      { trait: "捕食特化", value: "鯨食", detail: "大型の鯨類を主食としていた" }
    ],
    image: "images/megalodon.webp",
    group: "その他"
  },
  {
    id: "deinosuchus",
    name: "デイノスクス",
    kana: "でいのすくす",
    scientificName: "Deinosuchus rugosus",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "肉食",
    length: "10.6m",
    weight: "5.0t",
    description: "史上最大級のワニ類。恐竜をも捕食していたと考えられており、その咬合力はティラノサウルスに匹敵したという説もある。現代のワニをそのまま巨大化させたような姿をしていた。",
    bioTraits: [
      { trait: "咬合力", value: "驚異的", detail: "大型恐竜の骨をも砕く強力な顎" },
      { trait: "奇襲", value: "水辺の恐怖", detail: "水中に潜み、水を飲みに来た恐竜を襲う" }
    ],
    image: "images/deinosuchus.webp",
    group: "その他"
  },
  {
    id: "styracosaurus",
    name: "スティラコサウルス",
    kana: "すてぃらこさうるす",
    scientificName: "Styracosaurus albertensis",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "5.5m",
    weight: "2.5t",
    description: "鼻の上の巨大な角と、襟飾りに並ぶ6本以上の長いトゲが特徴。敵に対する威嚇と防御において、角竜類の中でも極めて派手で強力な装備を持っていた。",
    bioTraits: [
      { trait: "威嚇力", value: "刺々しいフリル", detail: "捕食者に襲われるリスクを軽減する装飾" },
      { trait: "攻撃", value: "長大な鼻角", detail: "一撃で相手を仕留める貫通力" }
    ],
    image: "images/styracosaurus.webp",
    group: "角竜類"
  },
  {
    id: "gallimimus",
    name: "ガリミムス",
    kana: "がりみむす",
    scientificName: "Gallimimus bullatus",
    era: "白亜紀後期",
    region: "アジア",
    diet: "雑食",
    length: "7.0m",
    weight: "250kg",
    description: "「鶏もどき」を意味する、ダチョウのような姿をした恐竜。中型バイク並みのスピードで走ることができたとされ、翼のような前肢と歯のない嘴を持つ。",
    bioTraits: [
      { trait: "速力", value: "最高クラス", detail: "時速50〜60kmでの高速移動が可能" },
      { trait: "感覚", value: "高度な視覚", detail: "広い視野で周囲の危険を素早く察知" }
    ],
    image: "images/gallimimus.webp",
    group: "獣脚類"
  },
  {
    id: "archaeopteryx",
    name: "アーケオプテリクス",
    kana: "あーけおぷてりくす",
    scientificName: "Archaeopteryx lithographica",
    era: "ジュラ紀後期",
    region: "ヨーロッパ",
    diet: "肉食（昆虫食）",
    length: "0.5m",
    weight: "0.5kg",
    description: "「始祖鳥」として有名な、恐竜と鳥類の中間に位置する重要種。羽毛はあるが、鳥と異なり口には歯があり、翼には爪、そして長い骨質の尾を持っていた。",
    bioTraits: [
      { trait: "進化の繋ぎ目", value: "羽毛と爬虫類質", detail: "滑空と樹上生活への適応" },
      { trait: "構造", value: "翼の鉤爪", detail: "木を登るために発達した指先の爪" }
    ],
    image: "images/archaeopteryx.webp",
    group: "獣脚類"
  },
  {
    id: "fukuiraptor",
    name: "フクイラプトル",
    kana: "ふくいらぷとる",
    scientificName: "Fukuiraptor kitadaniensis",
    era: "白亜紀前期",
    region: "日本（福井県）",
    diet: "肉食",
    length: "4.2m",
    weight: "300kg",
    description: "日本で初めて全身骨格が復元された肉食恐竜。アロサウルスに近い仲間と考えられており、鋭い鉤爪を武器に狩りをしていた。",
    bioTraits: [
      { trait: "機動力", value: "高い", detail: "中型獣脚類特有の軽快な動き" },
      { trait: "武器", value: "鋭い爪", detail: "前肢の発達した鉤爪で獲物を捕らえる" }
    ],
    image: "images/fukuiraptor.webp",
    group: "獣脚類"
  },
  {
    id: "futabasaurus",
    name: "フタバサウルス",
    kana: "ふたばさうるす",
    scientificName: "Futabasaurus suzukii",
    era: "白亜紀後期",
    region: "日本（福島県）",
    diet: "肉食（魚食）",
    length: "7.0m",
    weight: "3.0t",
    description: "福島県で発見された有名な首長竜。長い首と4つのヒレを使い、太古の日本近海を泳いでいた。",
    bioTraits: [
      { trait: "潜水能力", value: "優秀", detail: "深い海での魚獲りに適した能力" },
      { trait: "柔軟性", value: "高い", detail: "長い首を自在に動かして獲物を追う" }
    ],
    image: "images/futabasaurus.webp",
    group: "首長竜"
  },
  {
    id: "kamuyasaurus",
    name: "カムイサウルス",
    kana: "かむいさうるす",
    scientificName: "Kamuyasaurus japonicus",
    era: "白亜紀後期",
    region: "日本（北海道）",
    diet: "草食",
    length: "8.0m",
    weight: "4.5t",
    description: "北海道むかわ町で発見された、通称「むかわ竜」。日本列島で発見された恐竜として最大級の全身骨格を誇るハドロサウルス類。",
    bioTraits: [
      { trait: "集団行動", value: "可能性あり", detail: "群れで行動し外敵から身を守る" },
      { trait: "適応力", value: "高い", detail: "沿岸部などの過酷な環境にも適応" }
    ],
    image: "images/kamuyasaurus.webp",
    group: "鳥脚類"
  },
  {
    id: "fukuititan",
    name: "フクイティタン",
    kana: "ふくいてぃたん",
    scientificName: "Fukuititan nipponensis",
    era: "白亜紀前期",
    region: "日本（福井県）",
    diet: "草食",
    length: "10.0m",
    weight: "10.0t",
    description: "福井県で発見された大型の竜脚類。日本で初めて学名がついた竜脚類であり、当時の日本の生態系を支える巨体であった。",
    bioTraits: [
      { trait: "巨大質量", value: "圧倒的", detail: "日本国内では最大級の体躯" },
      { trait: "採食範囲", value: "広い", detail: "長い首を利用して高い場所の植物を摂取" }
    ],
    image: "images/fukuititan.webp",
    group: "竜脚類"
  },
  {
    id: "fukuivenator",
    name: "フクイベナトル",
    kana: "ふくいべなとる",
    scientificName: "Fukuivenator paradoxus",
    era: "白亜紀前期",
    region: "日本（福井県）",
    diet: "雑食",
    length: "2.5m",
    weight: "25kg",
    description: "「奇妙な福井のハンター」を意味する名を持つ。鳥への進化の過程を示す特異な骨格を持ち、食性も多岐にわたっていたと考えられている。",
    bioTraits: [
      { trait: "進化の鍵", value: "特異構造", detail: "鳥類に近い耳の構造などを持つ" },
      { trait: "汎用性", value: "高い", detail: "多様な環境で生き抜く雑食性" }
    ],
    image: "images/fukuivenator.webp",
    group: "獣脚類"
  },
  {
    id: "koshisaurus",
    name: "コシサウルス",
    kana: "こしさうるす",
    scientificName: "Koshisaurus katsuyama",
    era: "白亜紀前期",
    region: "日本（福井県）",
    diet: "草食",
    length: "3.0m",
    weight: "500kg",
    description: "福井県勝山市で発見された小型のイグアノドン類。フクイサウルスよりも原始的な特徴を持ち、初期の鳥脚類の多様性を示している。",
    bioTraits: [
      { trait: "警戒心", value: "強い", detail: "小型ゆえに鋭い感覚で天敵を察知" },
      { trait: "機動性", value: "中程度", detail: "二足歩行での迅速な退避が可能" }
    ],
    image: "images/koshisaurus.webp",
    group: "鳥脚類"
  },
  {
    id: "tambatitan",
    name: "タンバティタニス",
    kana: "たんばてぃたにす",
    scientificName: "Tambatitanis amicitiae",
    era: "白亜紀前期",
    region: "日本（兵庫県）",
    diet: "草食",
    length: "15.0m",
    weight: "20.0t",
    description: "兵庫県丹波市で発見された「丹波竜」。独特な尾の骨の形状を持ち、国内発見の恐竜としては史上最大級のサイズを誇る。",
    bioTraits: [
      { trait: "地響き", value: "強烈", detail: "その巨体が一歩歩くごとに周囲が震えた" },
      { trait: "防御", value: "サイズ依存", detail: "大きさそのものが肉食恐竜への威嚇" }
    ],
    image: "images/tambatitan.webp",
    group: "竜脚類"
  },
  {
    id: "yamatodraco",
    name: "ヤマトドラコ",
    kana: "やまとどらこ",
    scientificName: "Yamatodraco izanamii",
    era: "白亜紀後期",
    region: "日本（兵庫県・淡路島）",
    diet: "草食",
    length: "7.5m",
    weight: "3.0t",
    description: "淡路島で発見されたハドロサウルス類。白亜紀末期まで生き残った「生きた化石」のような存在だった可能性がある。",
    bioTraits: [
      { trait: "生存戦略", value: "長期間", detail: "原始的な特徴を残したまま進化し続けた" },
      { trait: "採食能力", value: "優秀", detail: "沿岸の多様な植物を効率よく摂取" }
    ],
    image: "images/yamatodraco.webp",
    group: "鳥脚類"
  },
  {
    id: "paralitherizinosaurus",
    name: "パラリテリジノサウルス",
    kana: "ぱらりてりじのさうるす",
    scientificName: "Paralitherizinosaurus japonicus",
    era: "白亜紀後期",
    region: "日本（北海道）",
    diet: "草食",
    length: "8.5m",
    weight: "4.0t",
    description: "北海道で発見されたテリジノサウルス類。非常に長い爪を持ち、護身や植物を引き寄せるために使っていたと考えられている。",
    bioTraits: [
      { trait: "巨大武器", value: "鎌状の爪", detail: "護身や採食に用いる長大な爪" },
      { trait: "威嚇", value: "効果的", detail: "その異様な姿で天敵を遠ざける" }
    ],
    image: "images/paralitherizinosaurus.webp",
    group: "獣脚類"
  },
  {
    id: "nipponosaurus",
    name: "ニッポノサウルス",
    kana: "にっぽのさうるす",
    scientificName: "Nipponosaurus sachalinensis",
    era: "白亜紀後期",
    region: "日本（当時は樺太）",
    diet: "草食",
    length: "7.6m",
    weight: "2.5t",
    description: "日本人が初めて本格的に研究した恐竜。ハドロサウルス類の子供の化石として知られ、日本の恐竜研究の礎となった象徴的な種。",
    bioTraits: [
      { trait: "歴史的価値", value: "最高位", detail: "日本の恐竜研究をスタートさせた存在" },
      { trait: "成長段階", value: "発育中", detail: "発見されたのは亜成体とされている" }
    ],
    image: "images/nipponosaurus.webp",
    group: "鳥脚類"
  },
  {
    id: "wakinosaurus",
    name: "ワキノサウルス",
    kana: "わきのさうるす",
    scientificName: "Wakinosaurus satoheii",
    era: "白亜紀前期",
    region: "日本（福岡県）",
    diet: "肉食",
    length: "6.0m",
    weight: "1.0t",
    description: "福岡県で発見された大型の獣脚類。九州を闊歩していた捕食者で、当時の生態系の上位に位置していたと考えられる。",
    bioTraits: [
      { trait: "牙", value: "鋭利", detail: "肉を切り裂くのに適した鋸歯状の歯" },
      { trait: "追跡", value: "粘り強い", detail: "発達した脚力で獲物を追い詰める" }
    ],
    image: "images/wakinosaurus.webp",
    group: "獣脚類"
  },
  {
    id: "sanchuryu",
    name: "サンチュウリュウ",
    kana: "さんちゅうりゅう",
    scientificName: "Sanchuryu (Unnamed Taxon)",
    era: "白亜紀前期",
    region: "日本（群馬県）",
    diet: "雑食",
    length: "2.5m",
    weight: "30kg",
    description: "群馬県で発見された、ダチョウに似た姿の恐竜。非常に素早く走ることができ、雑食性で多様な環境に適応していた。",
    bioTraits: [
       { trait: "速力", value: "最高クラス", detail: "二足歩行での極めて高い走破性" },
       { trait: "生存戦略", value: "雑食", detail: "昆虫から植物まで幅広く摂取" }
    ],
    image: "images/sanchuryu.webp",
    group: "獣脚類"
  },
  {
    id: "deinonychus",
    name: "デイノニクス",
    kana: "でいのにくす",
    scientificName: "Deinonychus antirrhopus",
    era: "白亜紀前期",
    region: "北アメリカ",
    diet: "肉食",
    length: "3.4m",
    weight: "73kg",
    description: "「恐ろしい鉤爪」を意味する名を持つ。足にある巨大な鎌状の爪を使い、獲物を執拗に攻撃した。この恐竜の発見により、恐竜が活発な温血動物であったという説が広まった。",
    bioTraits: [
      { trait: "武器", value: "鎌状の鉤爪", detail: "足の第2指にある巨大な爪で致命傷を与える" },
      { trait: "機動性", value: "高い", detail: "群れで行動し、俊敏な動きで獲物を追い詰める" }
    ],
    image: "images/deinonychus.webp",
    group: "獣脚類"
  },
  {
    id: "ceratosaurus",
    name: "ケラトサウルス",
    kana: "けらとさうるす",
    scientificName: "Ceratosaurus nasicornis",
    era: "ジュラ紀後期",
    region: "北アメリカ・ヨーロッパ",
    diet: "肉食",
    length: "6.0m",
    weight: "700kg",
    description: "鼻の上に大きな角を持つ独特な外見の獣脚類。アロサウルスと同時代に生きていたが、より水辺に近い環境を好んでいた可能性が示唆されている。",
    bioTraits: [
      { trait: "突進", value: "角による一撃", detail: "鼻上の角はディスプレイや儀礼的闘争に使われたか" },
      { trait: "捕食", value: "水辺のハンター", detail: "魚や水生生物も捕食していた可能性がある" }
    ],
    image: "images/ceratosaurus.webp",
    group: "獣脚類"
  },
  {
    id: "tarbosaurus",
    name: "タルボサウルス",
    kana: "たるぼさうるす",
    scientificName: "Tarbosaurus bataar",
    era: "白亜紀後期",
    region: "アジア（モンゴル・中国）",
    diet: "肉食",
    length: "11.0m",
    weight: "5.0t",
    description: "「恐怖させるトカゲ」という意味のアジア最大級のティラノサウルス類。北米のティラノサウルスと極めて近縁だが、前肢はさらに小さく進化していた。",
    bioTraits: [
      { trait: "咬合力", value: "最強クラス", detail: "巨大な竜脚類をも倒す顎の力" },
      { trait: "感知", value: "高度な聴覚", detail: "獲物のわずかな動きを音で察知する" }
    ],
    image: "images/tarbosaurus.webp",
    group: "獣脚類"
  },
  {
    id: "acrocanthosaurus",
    name: "アクロカントサウルス",
    kana: "あくろかんとさうるす",
    scientificName: "Acrocanthosaurus atokensis",
    era: "白亜紀前期",
    region: "北アメリカ",
    diet: "肉食",
    length: "11.5m",
    weight: "6.0t",
    description: "「高い棘を持つトカゲ」の名の通り、背中に沿って高く伸びた神経棘を持つ。当時の北米における最大級の捕食者であり、大型の竜脚類も襲った形跡がある。",
    bioTraits: [
      { trait: "筋力", value: "強靭な背筋", detail: "背中の突起は獲物を支える筋肉の付着部だったか" },
      { trait: "追跡", value: "持久力", detail: "大型の獲物を長時間追跡することが可能" }
    ],
    image: "images/acrocanthosaurus.webp",
    group: "獣脚類"
  },
  {
    id: "majungasaurus",
    name: "マジュンガサウルス",
    kana: "まじゅんがさうるす",
    scientificName: "Majungasaurus crenatissimus",
    era: "白亜紀後期",
    region: "アフリカ（マダガスカル）",
    diet: "肉食",
    length: "7.0m",
    weight: "1.1t",
    description: "マダガスカルの島で独自に進化したアベリサウルス類。短い鼻面と分厚い頭骨、そして共食いの痕跡が発見されていることで知られる異色の捕食者。",
    bioTraits: [
      { trait: "防御", value: "強固な頭部", detail: "獲物への突進や仲間との争いに耐える頭骨" },
      { trait: "知能", value: "中程度", detail: "孤立した環境での生存に適した能力" }
    ],
    image: "images/majungasaurus.webp",
    group: "獣脚類"
  },
  {
    id: "suchomimus",
    name: "スコミムス",
    kana: "すこみむす",
    scientificName: "Suchomimus tenerensis",
    era: "白亜紀前期",
    region: "アフリカ（ニジェール）",
    diet: "肉食（魚食）",
    length: "11.0m",
    weight: "3.5t",
    description: "「ワニもどき」を意味する、スピノサウルスに近い系統の恐竜。川辺で魚を主食としていたと考えられ、長い口と前肢の巨大な爪を持つ。",
    bioTraits: [
      { trait: "捕食", value: "魚獲りの天才", detail: "ワニのような長い顎と滑りにくい歯" },
      { trait: "武器", value: "親指の巨大爪", detail: "水中の獲物を引っ掛けて捕らえる" }
    ],
    image: "images/suchomimus.webp",
    group: "獣脚類"
  },
  {
    id: "gigantoraptor",
    name: "ギガントラプトル",
    kana: "ぎがんとらぷとる",
    scientificName: "Gigantoraptor erlianensis",
    era: "白亜紀後期",
    region: "アジア（中国）",
    diet: "雑食",
    length: "8.0m",
    weight: "2.0t",
    description: "オヴィラプトルの仲間としては桁外れに巨大で、鳥のような嘴と羽毛を持っていた。その巨体にもかかわらず、敏捷な動きができたと考えられている。",
    bioTraits: [
      { trait: "存在感", value: "威圧的", detail: "鳥のような姿でありながら圧倒的な巨体" },
      { trait: "汎用", value: "高度な雑食性", detail: "様々な環境で食料を確保できる能力" }
    ],
    image: "images/gigantoraptor.webp",
    group: "獣脚類"
  },
  {
    id: "monolophosaurus",
    name: "モノロフォサウルス",
    kana: "ものろふぉさうるす",
    scientificName: "Monolophosaurus jiangi",
    era: "ジュラ紀中期",
    region: "アジア（中国）",
    diet: "肉食",
    length: "5.0m",
    weight: "700kg",
    description: "鼻先から目の上にかけて一本の独特なトサカを持つ。「一つのトサカを持つトカゲ」という意味で、初期の堅頭竜に近い特徴も見られる謎多き恐竜。",
    bioTraits: [
      { trait: "威嚇", value: "ディスプレイ", detail: "トサカは視覚的なコミュニケーションに使われた" },
      { trait: "反射", value: "鋭い攻撃", detail: "中型獣脚類らしい迅速な狩り" }
    ],
    image: "images/monolophosaurus.webp",
    group: "獣脚類"
  },
  {
    id: "abelisaurus",
    name: "アベリサウルス",
    kana: "あべりさうるす",
    scientificName: "Abelisaurus comahuensis",
    era: "白亜紀後期",
    region: "南アメリカ（アルゼンチン）",
    diet: "肉食",
    length: "7.5m",
    weight: "1.5t",
    description: "南米を代表する肉食恐竜の一つ。アベリサウルス科の模式標本であり、非常にがっしりとした頭骨を持つことが特徴。短いが強力な顎で獲物を屠る。",
    bioTraits: [
      { trait: "攻撃", value: "強力な顎", detail: "一噛みで獲物の肉を大きく削ぎ落とす" },
      { trait: "探索", value: "優れた感知", detail: "広い範囲をパトロールして獲物を探す" }
    ],
    image: "images/abelisaurus.webp",
    group: "獣脚類"
  },
  {
    id: "compsognathus",
    name: "コンプソグナトゥス",
    kana: "こんぷそぐなとぅす",
    scientificName: "Compsognathus longipes",
    era: "ジュラ紀後期",
    region: "ヨーロッパ（ドイツ・フランス）",
    diet: "肉食",
    length: "1.0m",
    weight: "3kg",
    description: "小型恐竜の代表格。「かわいい顎」を意味するが、小型のトカゲや昆虫を素早く捕らえる鋭いハンターだった。始祖鳥と同じ環境に生息していた。",
    bioTraits: [
      { trait: "敏捷性", value: "最高クラス", detail: "小回りのきく動きで外敵から逃げ切る" },
      { trait: "連携", value: "集団", detail: "小柄ながら集団で行動し、効率的に狩る" }
    ],
    image: "images/compsognathus.webp",
    group: "獣脚類"
  },
  {
    id: "guanlong",
    name: "グアンロン",
    kana: "ぐあんろん",
    scientificName: "Guanlong wucaii",
    era: "ジュラ紀後期",
    region: "アジア（中国）",
    diet: "肉食",
    length: "3.0m",
    weight: "75kg",
    description: "「五彩の冠を戴く竜」という意味。ティラノサウルスの遠い祖先であり、頭部に非常に薄く壊れやすいトサカを持っていたのが特徴。",
    bioTraits: [
      { trait: "進化", value: "祖先の資質", detail: "後のティラノサウルスに繋がる強力な脚部" },
      { trait: "特性", value: "トサカの誇示", detail: "派手なトサカで自らの存在をアピールしたか" }
    ],
    image: "images/guanlong.webp",
    group: "獣脚類"
  },
  {
    id: "cryolophosaurus",
    name: "クリオロフォサウルス",
    kana: "くりおろふぉさうるす",
    scientificName: "Cryolophosaurus ellioti",
    era: "ジュラ紀前期",
    region: "南極大陸",
    diet: "肉食",
    length: "6.5m",
    weight: "465kg",
    description: "南極で発見された「氷のトサカを持つトカゲ」。当時は温暖だった南極の森に生息しており、エルビス・プレスリーのような髪型に見えるトサカが有名。",
    bioTraits: [
      { trait: "環境適応", value: "高い", detail: "季節変動のある高緯度地域で活動できた" },
      { trait: "武器", value: "斬撃", detail: "鋭い牙で獲物を素早く仕留める" }
    ],
    image: "images/cryolophosaurus.webp",
    group: "獣脚類"
  },
  {
    id: "eoraptor",
    name: "エオラプトル",
    kana: "えおらぷとる",
    scientificName: "Eoraptor lunensis",
    era: "三畳紀後期",
    region: "南アメリカ（アルゼンチン）",
    diet: "雑食",
    length: "1.0m",
    weight: "10kg",
    description: "「夜明けの泥棒」を意味する、世界最古の恐竜の一つ。すべての恐竜の共通祖先に近い姿をしており、そのシンプルながら完成された体格が繁栄の鍵となった。",
    bioTraits: [
      { trait: "原初", value: "バランス型", detail: "あらゆる環境に順応できる身体能力" },
      { trait: "生存", value: "回避特化", detail: "大型の爬虫類から逃げ抜く俊敏さ" }
    ],
    image: "images/eoraptor.webp",
    group: "獣脚類"
  },
  {
    id: "herrerasaurus",
    name: "ヘレラサウルス",
    kana: "へれらさうるす",
    scientificName: "Herrerasaurus ischigualastensis",
    era: "三畳紀後期",
    region: "南アメリカ（アルゼンチン）",
    diet: "肉食",
    length: "4.0m",
    weight: "210kg",
    description: "最初期にして最大級の肉食恐竜の一つ。未だ恐竜が世界の支配者ではなかった時代において、既に強力な捕食者としての圧倒的な資質を誇っていた。",
    bioTraits: [
      { trait: "打撃", value: "強力な四肢", detail: "大きな足爪を活かした力強い一撃" },
      { trait: "不屈", value: "闘争心", detail: "自分より大きな競合相手とも渡り合った" }
    ],
    image: "images/herrerasaurus.webp",
    group: "獣脚類"
  },
  {
    id: "albertosaurus",
    name: "アルバートサウルス",
    kana: "あるばーとさうるす",
    scientificName: "Albertosaurus sarcophagus",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "肉食",
    length: "9.0m",
    weight: "2.5t",
    description: "ティラノサウルス科の中では細身で脚が長く、機動力に優れていたと考えられている。カナダのアルバータ州で多くの化石が発見されている。",
    bioTraits: [
      { trait: "機動力", value: "高い", detail: "ティラノサウルスより高速で走行可能だった" },
      { trait: "集団性", value: "可能性あり", detail: "多数の個体が一度に発見された例がある" }
    ],
    image: "images/albertosaurus.webp",
    group: "獣脚類"
  },
  {
    id: "daspletosaurus",
    name: "ダスプレトサウルス",
    kana: "だすぷれとさうるす",
    scientificName: "Daspletosaurus torosus",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "肉食",
    length: "9.0m",
    weight: "3.0t",
    description: "「恐ろしいトカゲ」を意味する名を持ち、ティラノサウルス科の中でも非常に強力な顎と頑丈な体格を持っていた。",
    bioTraits: [
      { trait: "咬合力", value: "強力", detail: "骨を噛み砕くのに適した頑丈な頭骨" },
      { trait: "攻撃性", value: "高い", detail: "同地域に生息した角竜類などを捕食" }
    ],
    image: "images/daspletosaurus.webp",
    group: "獣脚類"
  },
  {
    id: "gorgosaurus",
    name: "ゴルゴサウルス",
    kana: "ごるごさうるす",
    scientificName: "Gorgosaurus libratus",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "肉食",
    length: "8.5m",
    weight: "2.5t",
    description: "ダスプレトサウルスと同時期に生息していたが、より軽量で俊敏な捕食者だったと考えられている。当時の生態系で主要な役割を果たした。",
    bioTraits: [
      { trait: "狩りのスタイル", value: "追跡型", detail: "俊敏さを活かして獲物を追い詰める" },
      { trait: "成長速度", value: "急速", detail: "短期間で成体に達する成長戦略" }
    ],
    image: "images/gorgosaurus.webp",
    group: "獣脚類"
  },
  {
    id: "coelophysis",
    name: "コエロフィシス",
    kana: "こえろふぃしす",
    scientificName: "Coelophysis bauri",
    era: "三畳紀後期",
    region: "北アメリカ",
    diet: "肉食",
    length: "3.0m",
    weight: "30kg",
    description: "初期の獣脚類の一つで、中空の骨を持つ軽量な体格が特徴。集団で行動し、小型の爬虫類や昆虫を捕らえていた。",
    bioTraits: [
      { trait: "骨格構造", value: "超軽量", detail: "中空の骨による優れた敏捷性" },
      { trait: "適応力", value: "高い", detail: "乾燥した三畳紀の環境に広く適応" }
    ],
    image: "images/coelophysis.webp",
    group: "獣脚類"
  },
  {
    id: "microraptor",
    name: "ミクロラプトル",
    kana: "みくらぷとる",
    scientificName: "Microraptor zhaoianus",
    era: "白亜紀前期",
    region: "アジア",
    diet: "肉食（昆虫・小型脊椎動物）",
    length: "0.8m",
    weight: "1kg",
    description: "前肢と後肢の両方に長い羽毛を持ち、4枚の翼で滑空していたと考えられる。恐竜から鳥類への進化を解き明かす重要な種。",
    bioTraits: [
      { trait: "飛行能力", value: "滑空", detail: "木から木へと飛び移る能力" },
      { trait: "視覚", value: "夜行性？", detail: "大きな眼窩から夜間の活動も推測される" }
    ],
    image: "images/microraptor.webp",
    group: "獣脚類"
  },
  {
    id: "concavenator",
    name: "コンカベナトル",
    kana: "こんかべなとる",
    scientificName: "Concavenator corcovatus",
    era: "白亜紀前期",
    region: "ヨーロッパ（スペイン）",
    diet: "肉食",
    length: "6.0m",
    weight: "400kg",
    description: "腰の近くにある2本の椎骨が突き出し、独特のコブを形成しているのが最大の特徴。前肢に羽毛の痕跡が見つかっている。",
    bioTraits: [
      { trait: "身体的特徴", value: "背中のコブ", detail: "体温調節やディスプレイの役割説がある" },
      { trait: "皮膚構造", value: "羽毛の萌芽", detail: "前肢に羽軸隆起の形跡がある" }
    ],
    image: "images/concavenator.webp",
    group: "獣脚類"
  },
  {
    id: "megalosaurus",
    name: "メガロサウルス",
    kana: "めがろさうるす",
    scientificName: "Megalosaurus bucklandii",
    era: "ジュラ紀中期",
    region: "ヨーロッパ（イギリス）",
    diet: "肉食",
    length: "9.0m",
    weight: "1.0t",
    description: "世界で最初に名前が付けられた恐竜として有名。ジュラ紀中期における強力な捕食者で、当時のイギリス周辺の頂点に立っていた。",
    bioTraits: [
      { trait: "歴史的価値", value: "最初", detail: "1824年に恐竜として初めて正式に記載" },
      { trait: "牙の構造", value: "鋸歯状", detail: "肉を切り裂くのに適した鋭い歯" }
    ],
    image: "images/megalosaurus.webp",
    group: "獣脚類"
  },
  {
    id: "mapusaurus",
    name: "マップサウルス",
    kana: "まっぷさうるす",
    scientificName: "Mapusaurus roseae",
    era: "白亜紀後期",
    region: "南アメリカ",
    diet: "肉食",
    length: "12.2m",
    weight: "5.0t",
    description: "ギガノトサウルスに近い巨大なカルカロドントサウルス科。多数の個体が一緒に発見され、集団で超大型竜脚類を狩っていた可能性がある。",
    bioTraits: [
      { trait: "狩猟戦略", value: "群れ", detail: "集団でアルゼンチノサウルスに対抗した説" },
      { trait: "攻撃力", value: "致命的", detail: "薄く鋭い歯による深い傷を与える攻撃" }
    ],
    image: "images/mapusaurus.webp",
    group: "獣脚類"
  },
  {
    id: "amargasaurus",
    name: "アマルガサウルス",
    kana: "あまるがさうるす",
    scientificName: "Amargasaurus cazaui",
    era: "白亜紀前期",
    region: "南アメリカ",
    diet: "草食",
    length: "10.0m",
    weight: "2.6t",
    description: "首から背中にかけて2列の長い棘が伸びているのが特徴。竜脚類の中では比較的小型だが、その姿は非常に独特である。",
    bioTraits: [
      { trait: "防御武具", value: "首の棘", detail: "捕食者に対する防御や威嚇に使用した" },
      { trait: "帆の存在", value: "可能性", detail: "棘の間に皮膚の帆が張られていた説がある" }
    ],
    image: "images/amargasaurus.webp",
    group: "竜脚類"
  },
  {
    id: "camarasaurus",
    name: "カマラサウルス",
    kana: "かまらさうるす",
    scientificName: "Camarasaurus supremus",
    era: "ジュラ紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "18.0m",
    weight: "20.0t",
    description: "北アメリカで最も一般的な竜脚類の一つ。頭骨に大きな空洞（室）があり、軽量化されていた。スプーン状の非常に頑丈な歯が特徴。",
    bioTraits: [
      { trait: "採食能力", value: "広範囲", detail: "頑丈な歯で硬い植物も食べることができた" },
      { trait: "群れの行動", value: "一般的", detail: "大規模な群れで移動していた証拠がある" }
    ],
    image: "images/camarasaurus.webp",
    group: "竜脚類"
  },
  {
    id: "mamenchisaurus",
    name: "マメンチサウルス",
    kana: "まめんちさうるす",
    scientificName: "Mamenchisaurus hochuanensis",
    era: "ジュラ紀後期",
    region: "アジア（中国）",
    diet: "草食",
    length: "22.0m",
    weight: "27.0t",
    description: "体長の半分近くを占めるほど異常に長い首が最大の特徴。首の骨（頚椎）の数は最大19個に達し、あらゆる動物の中で最も多い部類に入る。",
    bioTraits: [
      { trait: "首の長さ", value: "驚異的", detail: "10メートルを超える驚異的なリーチ" },
      { trait: "構造", value: "軽量化", detail: "複雑な骨の構造により長い首を支えた" }
    ],
    image: "images/mamenchisaurus.webp",
    group: "竜脚類"
  },
  {
    id: "saltasaurus",
    name: "サルタサウルス",
    kana: "さるたさうるす",
    scientificName: "Saltasaurus loricatus",
    era: "白亜紀後期",
    region: "南アメリカ",
    diet: "草食",
    length: "12.0m",
    weight: "7.0t",
    description: "竜脚類として初めて、背中に骨質の装甲板（オステオダーム）を持つことが確認された。これにより、巨大さに寄らない防御能力を証明した。",
    bioTraits: [
      { trait: "防御力", value: "装甲板", detail: "皮膚に埋め込まれた無数の骨質の塊" },
      { trait: "進化の特異点", value: "装甲化", detail: "竜脚類の新たな生存戦略を示した" }
    ],
    image: "images/saltasaurus.webp",
    group: "竜脚類"
  },
  {
    id: "shunosaurus",
    name: "シュノサウルス",
    kana: "しゅのさうるす",
    scientificName: "Shunosaurus lii",
    era: "ジュラ紀中期",
    region: "アジア（中国）",
    diet: "草食",
    length: "10.0m",
    weight: "3.0t",
    description: "竜脚類としては珍しく、尾の先端に2対のスパイクを備えた重厚な骨の棍棒（クラブ）を持っていた。この武器で捕食者を撃退したとされる。",
    bioTraits: [
      { trait: "反撃兵器", value: "尾の棍棒", detail: "アンキロサウルスに似た防御用クラブ" },
      { trait: "歯の形状", value: "円筒状", detail: "植物をすりつぶすのに適した構造" }
    ],
    image: "images/shunosaurus.webp",
    group: "竜脚類"
  },
  {
    id: "patagotitan",
    name: "パタゴティタン",
    kana: "ぱたごてぃたん",
    scientificName: "Patagotitan mayorum",
    era: "白亜紀中期",
    region: "南アメリカ（アルゼンチン）",
    diet: "草食",
    length: "37.0m",
    weight: "70.0t",
    description: "史上最大級の陸棲動物。パタゴニアで発見されたこの巨人は、その圧倒的な質量により、成体になれば天敵はほぼ存在しなかった。",
    bioTraits: [
      { trait: "巨大質量", value: "規格外", detail: "ジェット機に匹敵する圧倒的な重さ" },
      { trait: "心肺能力", value: "強靭", detail: "巨大な体を維持するための強力な循環システム" }
    ],
    image: "images/patagotitan.webp",
    group: "竜脚類"
  },
  {
    id: "puertasaurus",
    name: "プエルタサウルス",
    kana: "ぷえるたさうるす",
    scientificName: "Puertasaurus reuili",
    era: "白亜紀後期",
    region: "南アメリカ",
    diet: "草食",
    length: "30.0m",
    weight: "50.0t",
    description: "アルゼンチノサウルスに匹敵する超巨大竜脚類。非常に広い胸郭を持っていたと考えられており、世界で最も幅の広い恐竜の一つとされる。",
    bioTraits: [
      { trait: "胸郭幅", value: "世界最大級", detail: "約5メートルに達する驚異的な胴体の幅" },
      { trait: "生存戦略", value: "超巨体", detail: "サイズそのものを最大の防御とした" }
    ],
    image: "images/puertasaurus.webp",
    group: "竜脚類"
  },
  {
    id: "vulcanodon",
    name: "ウルカノドン",
    kana: "うるかのどん",
    scientificName: "Vulcanodon karibaensis",
    era: "ジュラ紀前期",
    region: "アフリカ",
    diet: "草食",
    length: "6.5m",
    weight: "3.5t",
    description: "初期の竜脚類の一種。まだ比較的小型だが、竜脚類特有の長い首と頑丈な四肢への進化の過渡期を示している貴重な種。",
    bioTraits: [
      { trait: "進化的位置", value: "過渡期", detail: "古竜脚類から真竜脚類への橋渡し" },
      { trait: "足の構造", value: "原始的", detail: "後の竜脚類とは異なる爪の構造" }
    ],
    image: "images/vulcanodon.webp",
    group: "竜脚類"
  },
  {
    id: "giraffatitan",
    name: "ギラファティタン",
    kana: "ぎらふぁてぃたん",
    scientificName: "Giraffatitan brancai",
    era: "ジュラ紀後期",
    region: "アフリカ",
    diet: "草食",
    length: "25.0m",
    weight: "30.0t",
    description: "「キリンの巨人」を意味し、前肢が後肢より長く、首が垂直に近い角度まで高く伸びていた。高所の木の葉を食べるのに特化していた。",
    bioTraits: [
      { trait: "リーチ", value: "垂直上昇", detail: "地上10メートル以上の高さに到達可能" },
      { trait: "心臓", value: "超強力", detail: "頭部まで血液を押し上げるための巨大な心臓" }
    ],
    image: "images/giraffatitan.webp",
    group: "竜脚類"
  },
  {
    id: "barosaurus",
    name: "バロサウルス",
    kana: "ばろさうるす",
    scientificName: "Barosaurus lentus",
    era: "ジュラ紀後期",
    region: "北アメリカ・アフリカ",
    diet: "草食",
    length: "26.0m",
    weight: "20.0t",
    description: "ディプロドクスに似ているが、首がさらに長く、尾は少し短い。最近の研究では、後肢だけで立ち上がり高い木の葉を食べたと言われる。",
    bioTraits: [
      { trait: "二足立ち", value: "可能性あり", detail: "後肢と強力な尾でバランスを取り直立" },
      { trait: "首の骨", value: "延長", detail: "個々の頸椎が非常に長く伸びている" }
    ],
    image: "images/barosaurus.webp",
    group: "竜脚類"
  },
  {
    id: "jobaria",
    name: "ジョバリア",
    kana: "じょばりあ",
    scientificName: "Jobaria tiguidensis",
    era: "白亜紀前期",
    region: "アフリカ（ニジェール）",
    diet: "草食",
    length: "18.0m",
    weight: "16.0t",
    description: "竜脚類としては比較的原始的な特徴を多く残している。発見された骨格の保存状態が非常に良く、その生態の詳細が判明している。",
    bioTraits: [
      { trait: "原始的な特徴", value: "スプーン状の歯", detail: "進化した竜脚類とは異なる歯の形状" },
      { trait: "骨格の保存", value: "ほぼ全身", detail: "95%近くの骨格が揃った状態で発見された" }
    ],
    image: "images/jobaria.webp",
    group: "竜脚類"
  },
  {
    id: "alamosaurus",
    name: "アラモサウルス",
    kana: "あらもさうるす",
    scientificName: "Alamosaurus sanjuanensis",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "30.0m",
    weight: "73.0t",
    description: "北アメリカで発見された数少ない竜脚類の一つ。ティラノサウルと同じ時代を生きた巨大な恐竜で、白亜紀末期の生態系における最大の草食恐竜の一つだった。",
    bioTraits: [
      { trait: "巨大なサイズ", value: "超大型", detail: "北米大陸における白亜紀後期の最大級の恐竜" },
      { trait: "分布の謎", value: "南から北へ", detail: "南米系の系統が北米へ進出したと考えられている" }
    ],
    image: "images/alamosaurus.webp",
    group: "竜脚類"
  },
  {
    id: "ampelosaurus",
    name: "アンペロサウルス",
    kana: "あんぺろさうるす",
    scientificName: "Ampelosaurus atacis",
    era: "白亜紀後期",
    region: "ヨーロッパ（フランス）",
    diet: "草食",
    length: "15.0m",
    weight: "8.0t",
    description: "背中に骨質の装甲を持っていた竜脚類。ティタノサウルス類に属し、肉食恐竜から身を守るために皮膚に埋め込まれたトゲや板状の骨を発達させていた。",
    bioTraits: [
      { trait: "防御機構", value: "皮骨装甲", detail: "竜脚類としては珍しく高度に発達した装甲を持つ" },
      { trait: "系統的特徴", value: "ティタノサウルス類", detail: "進化した竜脚類のグループに属し、広範囲に分布した" }
    ],
    image: "images/ampelosaurus.webp",
    group: "竜脚類"
  },
  {
    id: "brontosaurus",
    name: "ブロントサウルス",
    kana: "ぶろんとさうるす",
    scientificName: "Brontosaurus excelsus",
    era: "ジュラ紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "22.0m",
    weight: "15.0t",
    description: "かつてアパトサウルスと同じとされていたが、近年の研究により別属として復活した「雷竜」。強靭な首とムチのような尾を持ち、ジュラ紀の湿地帯に生息していた。",
    bioTraits: [
      { trait: "復活した学名", value: "学名の変遷", detail: "一度は抹消された名前が2015年の研究で復活" },
      { trait: "強力な尾", value: "ムチのような尾", detail: "尾の先端を音速で振り回し、威嚇や防御に使用した" }
    ],
    image: "images/brontosaurus.webp",
    group: "竜脚類"
  },
  {
    id: "dreadnoughtus",
    name: "ドレッドノータス",
    kana: "どれっどのーたす",
    scientificName: "Dreadnoughtus schrani",
    era: "白亜紀後期",
    region: "南アメリカ（アルゼンチン）",
    diet: "草食",
    length: "26.0m",
    weight: "59.0t",
    description: "「何も恐れない」という意味の名前を持つ南米の巨人。骨格の保存状態が極めて良く、超大型竜脚類の正確な体格や筋肉の付き方を解明する重要な手がかりとなった。",
    bioTraits: [
      { trait: "骨格確実性", value: "高い", detail: "超大型竜脚類としては珍しく全身の7割近くが発見" },
      { trait: "成長力", value: "驚異的", detail: "発見された個体はまだ成長途上であった可能性がある" }
    ],
    image: "images/dreadnoughtus.webp",
    group: "竜脚類"
  },
  {
    id: "plesiosaurus",
    name: "プレシオサウルス",
    kana: "ぷれしおさうるす",
    scientificName: "Plesiosaurus dolichodeirus",
    era: "ジュラ紀前期",
    region: "ヨーロッパ（イギリス）周辺の海",
    diet: "肉食（魚食・軟体動物）",
    length: "3.5m",
    weight: "450kg",
    description: "代表的な首長竜。4枚のヒレ（パドル）を使い、空を飛ぶように海中を泳いだ。長い首は、魚の群れを不意に襲うのに適していた。",
    bioTraits: [
      { trait: "遊泳法", value: "水中飛翔", detail: "4枚のパドルを上下に動かして泳ぐ" },
      { trait: "捕獲能力", value: "高い", detail: "針のような細い歯で逃げる魚を逃がさない" }
    ],
    image: "images/plesiosaurus.webp",
    group: "首長竜"
  },
  {
    id: "ichthyosaurus",
    name: "イクチオサウルス",
    kana: "いくちおさうるす",
    scientificName: "Ichthyosaurus communis",
    era: "ジュラ紀前期",
    region: "ヨーロッパ周辺の海",
    diet: "肉食（魚食・軟体動物）",
    length: "3.3m",
    weight: "150kg",
    description: "イルカのような流線型の体を持った魚竜。完全に水中に適応しており、卵ではなく赤ちゃんを直接産む「胎生」であったことがわかっている。",
    bioTraits: [
      { trait: "水中適応", value: "完璧", detail: "高速泳行に適した尾鰭と背鰭" },
      { trait: "視覚力", value: "極めて高い", detail: "深海や夜間でも獲物を見つける巨大な目" }
    ],
    image: "images/ichthyosaurus.webp",
    group: "魚竜"
  },
  {
    id: "liopleurodon",
    name: "リオプレウロドン",
    kana: "りおぷれうろどん",
    scientificName: "Liopleurodon ferox",
    era: "ジュラ紀後期",
    region: "ヨーロッパ周辺の海",
    diet: "肉食",
    length: "7.0m",
    weight: "3.5t",
    description: "ジュラ紀の海における恐ろしい捕食者。巨大な頭部と強力な顎を持ち、イカや大型の魚、他の海生爬虫類までも捕食していた。",
    bioTraits: [
      { trait: "探知能力", value: "嗅覚", detail: "水中の微かな匂いを立体的に嗅ぎ分ける" },
      { trait: "瞬発力", value: "爆発的", detail: "巨大なパドルによる一瞬の突進攻撃" }
    ],
    image: "images/liopleurodon.webp",
    group: "魚竜・首長竜"
  },
  {
    id: "kronosaurus",
    name: "クロノサウルス",
    kana: "くろのさうるす",
    scientificName: "Kronosaurus queenslandicus",
    era: "白亜紀前期",
    region: "オーストラリア周辺の海",
    diet: "肉食",
    length: "11.0m",
    weight: "12.0t",
    description: "古代のギリシャ神話の神クロノスから名付けられた、史上最大級のプリオサウルス類。2メートルに近い頭部は海のあらゆる生物の脅威だった。",
    bioTraits: [
      { trait: "咬合力", value: "破壊的", detail: "T-Rexを凌ぐとされる圧倒的な噛む力" },
      { trait: "大型牙", value: "25cm以上", detail: "獲物の骨を粉砕する巨大な円錐形の歯" }
    ],
    image: "images/kronosaurus.webp",
    group: "魚竜・首長竜"
  },
  {
    id: "shonisaurus",
    name: "ショニサウルス",
    kana: "しょにさうるす",
    scientificName: "Shonisaurus popularis",
    era: "三畳紀後期",
    region: "北アメリカ周辺の海",
    diet: "肉食（魚食・軟体動物）",
    length: "15.0m",
    weight: "30.0t",
    description: "史上最大級の魚竜の一つ。クジラのような巨体を持ち、胎生であった。三畳紀の広大な海で優占的な地位を占めていたと考えられている。",
    bioTraits: [
      { trait: "サイズ", value: "超弩級", detail: "魚竜としては異例の巨大な体躯" },
      { trait: "生存戦略", value: "長距離移動", detail: "エネルギー効率の良い巨大な体での外洋移動" }
    ],
    image: "images/shonisaurus.webp",
    group: "魚竜・首長竜"
  },
  {
    id: "archelon",
    name: "アーケロン",
    kana: "あーけろん",
    scientificName: "Archelon ischyros",
    era: "白亜紀後期",
    region: "北アメリカ周辺の海",
    diet: "雑食（軟体動物・海藻）",
    length: "4.5m",
    weight: "2.2t",
    description: "史上最大のウミガメ。甲羅は硬い板ではなく、骨のフレームに厚い皮膚が張られた構造をしており、軽量化と潜水能力を両立させていた。",
    bioTraits: [
      { trait: "軽量甲羅", value: "特殊構造", detail: "皮膚張りの甲羅による水浮力調節" },
      { trait: "咬合部", value: "嘴状", detail: "硬いアンモナイトの殻を砕く強力な嘴" }
    ],
    image: "images/archelon.webp",
    group: "その他"
  },
  {
    id: "tanystropheus",
    name: "タニストロフェウス",
    kana: "たにすとろふぇうす",
    scientificName: "Tanystropheus longobardicus",
    era: "三畳紀中期",
    region: "ヨーロッパ・アジア周辺の海岸",
    diet: "肉食（魚食）",
    length: "6.0m",
    weight: "150kg",
    description: "全長の半分以上が首という、極めて奇妙な姿をした爬虫類。岸辺から長い首を釣り竿のように伸ばし、水中の魚を捕らえていたとされる。",
    bioTraits: [
      { trait: "首の構造", value: "棒状", detail: "頸椎1つ1つが極端に長く、柔軟性は低かった" },
      { trait: "狩りの手法", value: "待ち伏せ", detail: "水中への不意のリーチによる捕食" }
    ],
    image: "images/tanystropheus.webp",
    group: "魚竜・首長竜"
  },
  {
    id: "tylosaurus",
    name: "ティロサウルス",
    kana: "てぃろさうるす",
    scientificName: "Tylosaurus proriger",
    era: "白亜紀後期",
    region: "北アメリカ周辺の海",
    diet: "肉食",
    length: "13.0m",
    weight: "8.0t",
    description: "最大級のモササウルス類。頑丈で長い骨質の吻（ふん）を持ち、獲物への体当たりや攻撃に使ったと考えられている。海の食物連鎖の頂点に君臨していた。",
    bioTraits: [
      { trait: "攻撃特性", value: "体当たり", detail: "硬い鼻先を武器として使用" },
      { trait: "捕食", value: "広範囲", detail: "サメや首長竜、さらには他のモササウルス類も捕食" }
    ],
    image: "images/tylosaurus.webp",
    group: "魚竜・首長竜"
  },
  {
    id: "hainosaurus",
    name: "ハイノサウルス",
    kana: "はいのさうるす",
    scientificName: "Hainosaurus bernardi",
    era: "白亜紀後期",
    region: "ヨーロッパ周辺の海",
    diet: "肉食",
    length: "12.0m",
    weight: "7.0t",
    description: "ティロサウルスの近縁種で、かつては史上最大のモササウルス類と考えられていた。非常に長い体を持ち、尾を使ってパワフルに泳ぐことができた。",
    bioTraits: [
      { trait: "推進力", value: "強力な尾", detail: "巨大な体を高速で加速させる筋肉" },
      { trait: "骨格", value: "多椎骨", detail: "柔軟な動きを可能にする背骨の構造" }
    ],
    image: "images/hainosaurus.webp",
    group: "魚竜・首長竜"
  },
  {
    id: "prognathodon",
    name: "プログナソドン",
    kana: "ぷろぐなそどん",
    scientificName: "Prognathodon solvayi",
    era: "白亜紀後期",
    region: "世界中の海",
    diet: "肉食",
    length: "10.0m",
    weight: "5.0t",
    description: "非常に頑丈な頭骨と強力な牙を持つモササウルス類。貝類やアンモナイト、硬い鱗を持つ魚などを噛み砕くのに適した顎を持っていた。",
    bioTraits: [
      { trait: "咬合力", value: "絶大", detail: "硬い獲物の殻を粉砕する特殊な歯" },
      { trait: "潜水", value: "深海対応", detail: "深海での活動を示唆する強固な耳の構造" }
    ],
    image: "images/prognathodon.webp",
    group: "魚竜・首長竜"
  },
  {
    id: "nothosaurus",
    name: "ノトサウルス",
    kana: "のとさうるす",
    scientificName: "Nothosaurus mirabilis",
    era: "三畳紀中期",
    region: "ヨーロッパ・北アフリカ周辺の海",
    diet: "肉食（魚食）",
    length: "4.0m",
    weight: "300kg",
    description: "アザラシのように水陸両方で活動したとされる海生爬虫類。長い首と鋭い歯を持ち、待ち伏せや奇襲で魚を捕らえていた。",
    bioTraits: [
      { trait: "機動性", value: "水陸両用", detail: "ヒレ状の足で陸上も移動可能だった" },
      { trait: "捕食技術", value: "鋭い牙", detail: "魚を捕らえて逃がさない複雑な歯列" }
    ],
    image: "images/nothosaurus.webp",
    group: "魚竜・首長竜"
  },
  {
    id: "placodus",
    name: "プラコドゥス",
    kana: "ぷらこどぅす",
    scientificName: "Placodus gigas",
    era: "三畳紀中期",
    region: "ヨーロッパ周辺の海",
    diet: "肉食（貝食）",
    length: "2.0m",
    weight: "150kg",
    description: "石畳のような平らな歯を持つ、貝を食べることに特化した爬虫類。海底をゆっくりと泳ぎながら、貝類や甲殻類を探して食べていた。",
    bioTraits: [
      { trait: "特殊歯", value: "石畳状の歯", detail: "硬い殻を押しつぶすための強力な歯" },
      { trait: "防御", value: "骨質ノブ", detail: "背中にある小さな骨の装甲" }
    ],
    image: "images/placodus.webp",
    group: "魚竜・首長竜"
  },
  {
    id: "henodus",
    name: "ヘノドゥス",
    kana: "へのどぅす",
    scientificName: "Henodus chelyops",
    era: "三畳紀後期",
    region: "中東（ドイツ）周辺の汽水域",
    diet: "雑食（植物・小動物）",
    length: "1.0m",
    weight: "20kg",
    description: "カメに似た箱状の甲羅を持つが、カメとは全く別の系統。汽水域や湖に生息し、平らな口で水底の堆積物をこし取って食べていたとされる。",
    bioTraits: [
      { trait: "装甲", value: "箱状甲羅", detail: "1枚の大きな骨板で覆われた平らな体" },
      { trait: "採食", value: "フィルター", detail: "広くて平らな口による砂泥の濾過" }
    ],
    image: "images/henodus.webp",
    group: "魚竜・首長竜"
  },
  {
    id: "cymbospondylus",
    name: "キンボスポンディルス",
    kana: "きんぼすぽんでぃるす",
    scientificName: "Cymbospondylus petrinus",
    era: "三畳紀中期",
    region: "北アメリカ・ヨーロッパ周辺の海",
    diet: "肉食",
    length: "10.0m",
    weight: "4.0t",
    description: "初期の魚竜としては異例の巨体を誇る。後の魚竜のような三日月型の尾鰭を持たず、ウナギのように体をくねらせて泳いでいた。",
    bioTraits: [
      { trait: "巨体", value: "三畳紀最大級", detail: "全長10メートルに達する細長い体" },
      { trait: "遊泳法", value: "蛇行", detail: "長い全身を使って力強く泳ぐ" }
    ],
    image: "images/cymbospondylus.webp",
    group: "魚竜・首長竜"
  },
  {
    id: "leedsichthys",
    name: "リードシクティス",
    kana: "りーどしくてぃす",
    scientificName: "Leedsichthys problematicus",
    era: "ジュラ紀後期",
    region: "ヨーロッパ周辺の海",
    diet: "プランクトン食",
    length: "16.5m",
    weight: "21.0t",
    description: "史上最大の硬骨魚類の一つ。現生のジンベエザメのように、巨大な口で海水中のプランクトンを濾しとって食べていた平和な巨人。",
    bioTraits: [
      { trait: "濾過摂食", value: "高効率", detail: "数千の鰓耙（さいは）で微細な餌を捕集" },
      { trait: "巨体", value: "最大級の魚類", detail: "他の大型魚類や爬虫類を圧倒する質量" }
    ],
    image: "images/leedsichthys.webp",
    group: "魚類"
  },
  {
    id: "dimorphodon",
    name: "ディモルフォドン",
    kana: "でぃもるふぉどん",
    scientificName: "Dimorphodon macronyx",
    era: "ジュラ紀前期",
    region: "ヨーロッパ",
    diet: "肉食（昆虫・小動物）",
    length: "翼開長1.4m",
    weight: "2kg",
    description: "「2種類の歯」を意味する名を持つ翼竜。大きな頭部と長い尾が特徴で、地上でも比較的活発に動けたと考えられている。",
    bioTraits: [
      { trait: "異形歯", value: "2種類", detail: "獲物を捕らえる長い前歯と噛み切る奥歯を持つ" },
      { trait: "構造", value: "長い尾", detail: "飛行時のバランスを保つための長い尾" }
    ],
    image: "images/dimorphodon.webp",
    group: "翼竜"
  },
  {
    id: "rhamphorhynchus",
    name: "ランフォリンクス",
    kana: "らんふぉりんくす",
    scientificName: "Rhamphorhynchus muensteri",
    era: "ジュラ紀後期",
    region: "ヨーロッパ",
    diet: "肉食（魚食）",
    length: "翼開長1.2m",
    weight: "2kg",
    description: "長い尾の先端に菱形のひれを持つ翼竜。嘴には前方に突き出した鋭い歯があり、水面の魚を捕らえるのに適していた。",
    bioTraits: [
      { trait: "舵取り装置", value: "菱形の尾", detail: "尾の先端のひれが飛行中の方向転換を助ける" },
      { trait: "捕食特化", value: "前向きの歯", detail: "滑りやすい魚を確実に捕らえる構造" }
    ],
    image: "images/rhamphorhynchus.webp",
    group: "翼竜"
  },
  {
    id: "pterodactylus",
    name: "プテロダクティルス",
    kana: "ぷてろだくてぃるす",
    scientificName: "Pterodactylus antiquus",
    era: "ジュラ紀後期",
    region: "ヨーロッパ",
    diet: "肉食（小動物・魚）",
    length: "翼開長1.0m",
    weight: "2kg",
    description: "世界で最初に発見された翼竜。コンパクトな体と短い尾を持ち、翼竜の中でも洗練された飛行能力を有していた。",
    bioTraits: [
      { trait: "機動力", value: "高い", detail: "短い尾により空中での旋回性能が向上" },
      { trait: "構造", value: "軽量化", detail: "極限まで薄い骨格による効率的な飛行" }
    ],
    image: "images/pterodactylus.webp",
    group: "翼竜"
  },
  {
    id: "tapejara",
    name: "タペヤラ",
    kana: "たぺやら",
    scientificName: "Tapejara wellnhoferi",
    era: "白亜紀前期",
    region: "南アメリカ",
    diet: "雑食（果実・魚）",
    length: "翼開長3.5m",
    weight: "10kg",
    description: "頭部にある巨大なトサカと、オウムのような短く鋭い嘴が特徴。トサカはディスプレイや飛行時のバランス調節に使われた可能性がある。",
    bioTraits: [
      { trait: "巨大トサカ", value: "帆状", detail: "骨質と帆のような膜からなる大きな装飾" },
      { trait: "食性適応", value: "嘴", detail: "種子や果実も食べられたとされる特殊な形状" }
    ],
    image: "images/tapejara.webp",
    group: "翼竜"
  },
  {
    id: "tupandactylus",
    name: "トゥパンダクティルス",
    kana: "とぅぱんだくてぃるす",
    scientificName: "Tupandactylus imperator",
    era: "白亜紀前期",
    region: "南アメリカ",
    diet: "雑食（果実・種子）",
    length: "翼開長5.0m",
    weight: "15kg",
    description: "タペヤラの近縁種で、さらに巨大で複雑な形状のトサカを持つ。そのトサカは非常に色彩豊かだったと考えられている。",
    bioTraits: [
      { trait: "極大トサカ", value: "驚異的サイズ", detail: "頭部の数倍の大きさになるディスプレイ用トサカ" },
      { trait: "社会性", value: "高い", detail: "トサカを用いた個体識別やコミュニケーション" }
    ],
    image: "images/tupandactylus.webp",
    group: "翼竜"
  },
  {
    id: "alanqa",
    name: "アランカ",
    kana: "あらんか",
    scientificName: "Alanqa saharica",
    era: "白亜紀後期",
    region: "アフリカ",
    diet: "肉食",
    length: "翼開長6.0m",
    weight: "40kg",
    description: "サハラ砂漠で発見された巨大な翼竜。地上に立つとキリンほどの高さがあり、強力な嘴で様々な獲物を捕食していた。",
    bioTraits: [
      { trait: "地上高", value: "キリン並み", detail: "四足歩行時には高い視点から地上を監視" },
      { trait: "構造", value: "堅牢な嘴", detail: "貝殻などの硬いものも砕けた可能性" }
    ],
    image: "images/alanqa.webp",
    group: "翼竜"
  },
  {
    id: "dsungaripterus",
    name: "ズンガリプテルス",
    kana: "ずんがりぷてるす",
    scientificName: "Dsungaripterus weii",
    era: "白亜紀前期",
    region: "アジア",
    diet: "肉食（貝食）",
    length: "翼開長3.0m",
    weight: "15kg",
    description: "先端がわずかに反り返った、ピンセットのような嘴を持つ。口の奥には貝などを砕くための平らな歯が並んでいた。",
    bioTraits: [
      { trait: "特殊嘴", value: "反り返り", detail: "岩の隙間から獲物を引き抜くのに適した形状" },
      { trait: "粉砕能力", value: "高い", detail: "硬い殻を噛み砕くための強靭な奥歯" }
    ],
    image: "images/dsungaripterus.webp",
    group: "翼竜"
  },
  {
    id: "tropeognathus",
    name: "トロペオグナトゥス",
    kana: "とろぺおぐなとぅす",
    scientificName: "Tropeognathus mesembrinus",
    era: "白亜紀前期",
    region: "南アメリカ",
    diet: "肉食（魚食）",
    length: "翼開長8.0m",
    weight: "50kg",
    description: "嘴の先端に半円形のトサカ（隆起）を持つ巨大な翼竜。この隆起は水面ギリギリを飛ぶ際の安定性を高めていたとされる。",
    bioTraits: [
      { trait: "キール構造", value: "嘴のトサカ", detail: "水中に嘴を入れて飛ぶ際の水の抵抗を軽減" },
      { trait: "巨翼", value: "白亜紀前期最大", detail: "上昇気流を捉えて数千キロを移動可能" }
    ],
    image: "images/tropeognathus.webp",
    group: "翼竜"
  },
  {
    id: "anhanguera",
    name: "アンハングエラ",
    kana: "あんはんぐえら",
    scientificName: "Anhanguera piscator",
    era: "白亜紀前期",
    region: "南アメリカ",
    diet: "肉食（魚食）",
    length: "翼開長4.5m",
    weight: "25kg",
    description: "「年老いた悪魔」を意味する名を持つ。交互に並ぶ長い獲物捕らえ用の歯が特徴で、魚食に特化した進化を遂げた。",
    bioTraits: [
      { trait: "捕食トラップ", value: "交差する歯", detail: "一度捕らえた魚を逃さないケージのような歯" },
      { trait: "センシング", value: "高い平衡感覚", detail: "低空飛行で正確に獲物を狙い撃つ" }
    ],
    image: "images/anhanguera.webp",
    group: "翼竜"
  },
  {
    id: "eudimorphodon",
    name: "エウディモルフォドン",
    kana: "えうでぃもるふぉどん",
    scientificName: "Eudimorphodon ranzii",
    era: "三畳紀後期",
    region: "ヨーロッパ",
    diet: "肉食（魚食・昆虫）",
    length: "翼開長1.0m",
    weight: "1kg",
    description: "既知で最古級の翼竜の一つ。初期の翼竜ながら、魚の鱗が胃の内容物から見つかるなど、高度な狩りを行っていた。",
    bioTraits: [
      { trait: "複雑な歯", value: "多咬頭歯", detail: "原始的だが複雑な形状の歯で多様な餌に対応" },
      { trait: "構造", value: "長い尾", detail: "ステアリングの役割を果たす硬い尾" }
    ],
    image: "images/eudimorphodon.webp",
    group: "翼竜"
  },
  {
    id: "sordes",
    name: "ソルデス",
    kana: "そるです",
    scientificName: "Sordes pilosus",
    era: "ジュラ紀後期",
    region: "アジア",
    diet: "肉食（昆虫食）",
    length: "翼開長0.5m",
    weight: "0.5kg",
    description: "「毛深い不浄なもの」という名を持つが、翼竜が羽毛（ピクノファイバー）を持っていたことを示す重要な証拠となった小型種。",
    bioTraits: [
      { trait: "外皮", value: "体毛状組織", detail: "全身を覆う毛のような組織による保温効果" },
      { trait: "適応", value: "昆虫食", detail: "夜間や寒冷地でも活動できた可能性" }
    ],
    image: "images/sordes.webp",
    group: "翼竜"
  },
  {
    id: "jeholopterus",
    name: "ジェホロプテルス",
    kana: "じぇほろぷてるす",
    scientificName: "Jeholopterus ningchengensis",
    era: "ジュラ紀中期",
    region: "アジア",
    diet: "肉食（昆虫食）",
    length: "翼開長0.9m",
    weight: "1kg",
    description: "丸みを帯びた頭部と、非常に広い口を持つ特殊な翼竜。現代のヨタカのような、夜間に空中。で虫を捕らえる生活をしていた可能性がある。",
    bioTraits: [
      { trait: "広角嘴", value: "夜間狩猟", detail: "大きく開く口で空中を飛ぶ昆虫を効率よく捕獲" },
      { trait: "鉤爪", value: "強靭", detail: "樹木にしっかりと掴まるための発達した爪" }
    ],
    image: "images/jeholopterus.webp",
    group: "翼竜"
  },
  {
    id: "protoceratops",
    name: "プロトケラトプス",
    kana: "ぷろとけらとぷす",
    scientificName: "Protoceratops andrewsi",
    era: "白亜紀後期",
    region: "アジア",
    diet: "草食",
    length: "1.8m",
    weight: "180kg",
    description: "「最初の角のある顔」を意味する名前だが、実際には角を持たず、発達した襟飾りのみを持つ初期の角竜。羊ほどの大きさで、砂漠地帯に生息していた。",
    bioTraits: [
      { trait: "襟飾り", value: "発達", detail: "個体識別や求愛、筋肉の付着点として機能" },
      { trait: "嘴", value: "強力", detail: "硬い砂漠の植物を切り取るための鋭いくちばし" }
    ],
    image: "images/protoceratops.webp",
    group: "角竜類"
  },
  {
    id: "pachyrhinosaurus",
    name: "パキリノサウルス",
    kana: "ぱきりのさうるす",
    scientificName: "Pachyrhinosaurus canadensis",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "8.0m",
    weight: "4.0t",
    description: "鼻の上の角の代わりに、分厚く平らな「骨のコブ」を持つ奇妙な角竜。襟飾りの縁には複雑な形状の角や飾りが並んでいた。",
    bioTraits: [
      { trait: "骨のコブ", value: "頑強", detail: "鼻の上の厚いコブは儀礼的な闘争に使われた可能性" },
      { trait: "群れ", value: "大規模", detail: "アラスカなどで大量の化石が発見され、大移動をしていたとされる" }
    ],
    image: "images/pachyrhinosaurus.webp",
    group: "角竜類"
  },
  {
    id: "chasmosaurus",
    name: "カスモサウルス",
    kana: "かすもさうるす",
    scientificName: "Chasmosaurus belli",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "5.0m",
    weight: "2.0t",
    description: "「穴の開いたトカゲ」という意味の名を持つ。非常に大きな襟飾りには巨大な穴が開いており、重量を軽く保ちつつ視覚的な威嚇効果を高めていた。",
    bioTraits: [
      { trait: "大型襟飾", value: "威嚇特化", detail: "面積が広く、捕食者を驚かせるのに十分な大きさ" },
      { trait: "角の構成", value: "短角", detail: "目の上と鼻に短い角を持つ" }
    ],
    image: "images/chasmosaurus.webp",
    group: "角竜類"
  },
  {
    id: "torosaurus",
    name: "トロサウルス",
    kana: "とろさうるす",
    scientificName: "Torosaurus latus",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "8.0m",
    weight: "6.0t",
    description: "陸生動物の中で最大級の頭骨を持つ恐竜。トリケラトプスに似ているが、襟飾りがさらに長く、大きな窓（穴）が開いているのが特徴。",
    bioTraits: [
      { trait: "巨大頭骨", value: "記録的サイズ", detail: "頭部だけで2.5メートル以上に達する個体も存在" },
      { trait: "装飾進化", value: "極限", detail: "より大きな襟飾りが選択された進化の結果" }
    ],
    image: "images/torosaurus.webp",
    group: "角竜類"
  },
  {
    id: "diabloceratops",
    name: "ディアブロケラトプス",
    kana: "でぃあぶろけらとぷす",
    scientificName: "Diabloceratops eatoni",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "5.5m",
    weight: "1.5t",
    description: "「悪魔の角を持つ顔」を意味する名を持つ。襟飾りの上部から左右に長く伸びた2本の角が、まるで悪魔の角のように見えることから命名された。",
    bioTraits: [
      { trait: "襟飾角", value: "左右一対", detail: "上方に大きく湾曲した特徴的な2本の角" },
      { trait: "進化段階", value: "原始的", detail: "セントロサウルス類の中でも古い時代の特徴を残す" }
    ],
    image: "images/diabloceratops.webp",
    group: "角竜類"
  },
  {
    id: "nasutoceratops",
    name: "ナーストケラトプス",
    kana: "なーすとけらとぷす",
    scientificName: "Nasutoceratops titani",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "4.5m",
    weight: "1.5t",
    description: "牛のような、前方に大きく湾曲した角を持つユニークな角竜。名前は「大きな鼻を持つ角竜」を意味し、特大の鼻の空間が特徴的。",
    bioTraits: [
      { trait: "牛状の角", value: "前方湾曲", detail: "他の角竜とは異なる、闘牛のように前に向いた角" },
      { trait: "巨大な鼻", value: "解剖学的特徴", detail: "嗅覚や発声に関わっていた可能性のある大きな鼻腔" }
    ],
    image: "images/nasutoceratops.webp",
    group: "角竜類"
  },
  {
    id: "centrosaurus",
    name: "セントロサウルス",
    kana: "せんとろさうるす",
    scientificName: "Centrosaurus apertus",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "6.0m",
    weight: "2.5t",
    description: "鼻の上に一本の長い角があり、襟飾りの縁には複雑な「フック状」の飾りが並んでいるのが特徴。代表的な角竜の一つ。",
    bioTraits: [
      { trait: "鼻角", value: "一本槍", detail: "前方に向けられた強力な一本の武器" },
      { trait: "襟飾フック", value: "内側湾曲", detail: "襟飾りの縁から内側に向かって伸びる不思議な突起" }
    ],
    image: "images/centrosaurus.webp",
    group: "角竜類"
  },
  {
    id: "einiosaurus",
    name: "エイニオサウルス",
    kana: "えいにおさうるす",
    scientificName: "Einiosaurus procurvicornis",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "4.5m",
    weight: "1.3t",
    description: "鼻の上の角が、栓抜きのように前方に強く曲がっているのが最大の特徴。襟飾りの上部には2本の鋭いスパイクが付いていた。",
    bioTraits: [
      { trait: "前曲角", value: "ボトルオープナー", detail: "下向きに大きく曲がった独特の鼻角" },
      { trait: "スパイク", value: "防御・威嚇", detail: "襟飾りの上部から外側へ向かう二本のトゲ" }
    ],
    image: "images/einiosaurus.webp",
    group: "角竜類"
  },
  {
    id: "leptoceratops",
    name: "レプトケラトプス",
    kana: "れぷとけらとぷす",
    scientificName: "Leptoceratops gracilis",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "2.5m",
    weight: "180kg",
    description: "白亜紀の最後にまで生き残った、小型で襟飾りのない角竜。二足歩行での逃走も可能だったと考えられ、原始的な特徴を最後まで維持していた。",
    bioTraits: [
      { trait: "無襟飾", value: "原始的", detail: "防御用の襟飾りがなく、身軽な体格を持つ" },
      { trait: "移動形式", value: "二足・四足行", detail: "通常は四足、緊急時には二足で走ることができた" }
    ],
    image: "images/leptoceratops.webp",
    group: "角竜類"
  },
  {
    id: "gastonia",
    name: "ガストニア",
    kana: "がすとにあ",
    scientificName: "Gastonia burgei",
    era: "白亜紀前期",
    region: "北アメリカ",
    diet: "草食",
    length: "5.0m",
    weight: "1.9t",
    description: "体表に鋭いトゲがびっしりと並んだ鎧竜の仲間（ノドサウルス科）。特に尾の側面にあるトゲは、尾を振ることで獲物を切り裂くハサミのように機能した。",
    bioTraits: [
      { trait: "トゲ装甲", value: "全身武装", detail: "体中から飛び出した大小様々な棘が接近を阻む" },
      { trait: "シザーズ・テイル", value: "攻撃手段", detail: "尾を左右に振るだけで肉食恐竜に深い傷を負わせる" }
    ],
    image: "images/gastonia.webp",
    group: "よろい竜類"
  },
  {
    id: "sauropelta",
    name: "サウロペルタ",
    kana: "さうろぺるた",
    scientificName: "Sauropelta edwardsorum",
    era: "白亜紀前期",
    region: "北アメリカ",
    diet: "草食",
    length: "5.0m",
    weight: "1.5t",
    description: "「トカゲの盾」の名を持つ鎧竜。肩から首にかけて巨大なスパイクが突き出しており、正面や側面からの攻撃に対して鉄壁の防御を誇った。",
    bioTraits: [
      { trait: "ショルダースパイク", value: "対空・対側面", detail: "肩にある最大級のトゲが首元を保護する" },
      { trait: "盾状装甲", value: "モザイク装甲", detail: "皮膚に埋め込まれた無数の骨質の板" }
    ],
    image: "images/sauropelta.webp",
    group: "よろい竜類"
  },
  {
    id: "edmontonia",
    name: "エドモントニア",
    kana: "えどもんとにあ",
    scientificName: "Edmontonia longiceps",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "6.0m",
    weight: "3.0t",
    description: "非常に重厚な装甲を持つノドサウルス科の鎧竜。肩に前方を向いた巨大なスパイクを持ち、肉食恐竜が突進してきても逆に串刺しにする能力があった。",
    bioTraits: [
      { trait: "正面迎撃", value: "突進防御", detail: "正面を向いた二対の巨大な肩のトゲ" },
      { trait: "装甲密度", value: "最高水準", detail: "頭部から尾まで隙間なく並んだ硬い骨板" }
    ],
    image: "images/edmontonia.webp",
    group: "よろい竜類"
  },
  {
    id: "polacanthus",
    name: "ポラカントゥス",
    kana: "ぽらかんとぅす",
    scientificName: "Polacanthus foxii",
    era: "白亜紀前期",
    region: "ヨーロッパ",
    diet: "草食",
    length: "5.0m",
    weight: "2.0t",
    description: "腰の部分に「サクラル・シールド」と呼ばれる一枚板のような巨大な装甲を持っていたのが特徴。背中にはトゲ、尾には板状の突起が並んでいた。",
    bioTraits: [
      { trait: "腰の盾", value: "サクラル・シールド", detail: "腰から臀部を覆う広大な単一の骨板" },
      { trait: "マルチ武装", value: "トゲと板", detail: "部位によってトゲと板状の装甲を使い分ける" }
    ],
    image: "images/polacanthus.webp",
    group: "よろい竜類"
  },
  {
    id: "euoplocephalus",
    name: "エウオプロケファルス",
    kana: "えうおぷろけふぁるす",
    scientificName: "Euoplocephalus tutus",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "6.0m",
    weight: "2.5t",
    description: "「立派な装甲の頭」という意味の通り、まぶたまで装甲化されていた徹底した防御型のアンキロサウルス類。尾の先端には巨大な骨のハンマーを持つ。",
    bioTraits: [
      { trait: "ハンマーテイル", value: "重量武器", detail: "数百キロの衝撃を与える骨の塊" },
      { trait: "装甲まぶた", value: "全身保護", detail: "目という弱点すら骨質の板で保護可能" }
    ],
    image: "images/euoplocephalus.webp",
    group: "よろい竜類"
  },
  {
    id: "saichania",
    name: "サイカニア",
    kana: "さいかにあ",
    scientificName: "Saichania chulsanensis",
    era: "白亜紀後期",
    region: "アジア（ゴビ砂漠）",
    diet: "草食",
    length: "6.0m",
    weight: "2.5t",
    description: "「美しいもの」を意味し、その保存状態の良い装甲の見事さから名付けられた。乾燥した砂漠環境に適応しており、頭骨の内部には熱を逃がすための複雑な構造があった。",
    bioTraits: [
      { trait: "砂漠適応", value: "熱交換システム", detail: "鼻腔内の複雑な構造で吸気を冷却" },
      { trait: "二段腹装甲", value: "特殊装甲", detail: "腹部側まで装甲が回り込んでいる珍しい構造" }
    ],
    image: "images/saichania.webp",
    group: "よろい竜類"
  },
  {
    id: "minmi",
    name: "ミンミ",
    kana: "みんみ",
    scientificName: "Minmi paravertebra",
    era: "白亜紀前期",
    region: "オーストラリア",
    diet: "草食",
    length: "3.0m",
    weight: "300kg",
    description: "オーストラリアで発見された小型の鎧竜。脊椎の横に「パラバーテブラ（副脊椎骨）」という特殊な骨があり、それが名前の由来。背中だけでなくお腹側も小さな骨で守られていた。",
    bioTraits: [
      { trait: "副脊椎骨", value: "背筋強化", detail: "素早く逃げたり激しい動きを支えるための特殊な骨" },
      { trait: "腹部守備", value: "鎖帷子", detail: "お腹側を保護する小さな骨の粒の集合体" }
    ],
    image: "images/minmi.webp",
    group: "よろい竜類"
  },
  {
    id: "scelidosaurus",
    name: "スケリドサウルス",
    kana: "すけりどさうるす",
    scientificName: "Scelidosaurus harrisonii",
    era: "ジュラ紀前期",
    region: "ヨーロッパ",
    diet: "草食",
    length: "4.0m",
    weight: "270kg",
    description: "ジュラ紀の初期に現れた、最も原始的な装甲恐竜の一つ。後のアンキロサウルス類やステゴサウルス類の共通の先祖に近いと考えられている。",
    bioTraits: [
      { trait: "原初装甲", value: "骨質ノブ", detail: "皮膚に規則正しく並んだ原始的な装具" },
      { trait: "進化の基点", value: "装盾亜目", detail: "すべての装甲系恐竜の進化の鍵を握る種" }
    ],
    image: "images/scelidosaurus.webp",
    group: "よろい竜類"
  },
  {
    id: "hylaeosaurus",
    name: "ヒラエオサウルス",
    kana: "ひらえおさうるす",
    scientificName: "Hylaeosaurus armatus",
    era: "白亜紀前期",
    region: "ヨーロッパ",
    diet: "草食",
    length: "5.0m",
    weight: "2.0t",
    description: "「森のトカゲ」を意味し、1842年にリチャード・オーウェンが「Dinosauria（恐竜）」という言葉を提唱した際に含まれていた最初の3頭の一つ。メガロサウルス、イグアノドンに続いて世界で3番目に名前が与えられた歴史的な存在。",
    bioTraits: [
      { trait: "歴史的重要種", value: "三大恐竜", detail: "「恐竜」誕生時に数えられた歴史的な種" },
      { trait: "背棘", value: "三列のトゲ", detail: "背中の中心線とその両脇に並ぶ鋭いトゲ" }
    ],
    image: "images/hylaeosaurus.webp",
    group: "よろい竜類"
  },
  {
    id: "tarchia",
    name: "タルキア",
    kana: "たるきあ",
    scientificName: "Tarchia gigantea",
    era: "白亜紀後期",
    region: "アジア（モンゴル）",
    diet: "草食",
    length: "8.0m",
    weight: "4.5t",
    description: "「知恵がある」という意味の名前を持つが、これは非常に大きな脳函を持っていたことから。アジア最大級のアンキロサウルス類で、タルボサウルスなどの大型肉食恐竜と共存していた。",
    bioTraits: [
      { trait: "最大重量級", value: "アジアの壁", detail: "極めて重厚な装甲と巨大な体躯" },
      { trait: "対捕食者", value: "ハンマー攻撃", detail: "巨大な尾のハンマーでタルボサウルスに対抗" }
    ],
    image: "images/tarchia.webp",
    group: "よろい竜類"
  },
  {
    id: "borealopelta",
    name: "ボレアロペルタ",
    kana: "ぼれあろぺるた",
    scientificName: "Borealopelta markmitchelli",
    era: "白亜紀前期",
    region: "北アメリカ（カナダ）",
    diet: "草食",
    length: "5.5m",
    weight: "1.3t",
    description: "奇跡的な保存状態で発見された「恐竜のミイラ」。皮膚や装甲、さらには最後の食事内容まで保存されており、生前は赤茶色の保護色をしていたことが判明している。",
    bioTraits: [
      { trait: "保護色", value: "赤茶色", detail: "カウンターシェーディングによる擬態の証拠" },
      { trait: "完全再現", value: "生きた姿", detail: "三次元的な装甲の配置が完全に判明している唯一の鎧竜" }
    ],
    image: "images/borealopelta.webp",
    group: "よろい竜類"
  },
  {
    id: "edmontosaurus",
    name: "エドモントサウルス",
    kana: "えどもんとさうるす",
    scientificName: "Edmontosaurus annectens",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "12.0m",
    weight: "3.5t",
    description: "アヒルのような嘴を持つ代表的なハドロサウルス類。トサカのない平坦な頭部が特徴で、非常に高い密度で群れを作り、渡りを行っていたことが知られている。",
    bioTraits: [
      { trait: "アヒル口", value: "特化型", detail: "数千本の歯が並ぶデンタルバッテリーで植物をすり潰す" },
      { trait: "群居性", value: "高い", detail: "数千頭規模の巨大な群れで移動していた証拠がある" }
    ],
    image: "images/edmontosaurus.webp",
    group: "鳥脚類"
  },
  {
    id: "corythosaurus",
    name: "コリトサウルス",
    kana: "こりとさうるす",
    scientificName: "Corythosaurus casuarius",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "9.0m",
    weight: "3.0t",
    description: "カシオワリ（ヒクイドリ）のような半円形の立派なトサカを持つ恐竜。トサカの内部は空洞になっており、共鳴させて大きな声を出して仲間とコミュニケーションをとっていた。",
    bioTraits: [
      { trait: "半円形トサカ", value: "共鳴器", detail: "声を増幅させ、数キロ先まで音を届けることが可能" },
      { trait: "視覚的装飾", value: "ディスプレイ", detail: "トサカは成長とともに大きくなり、雌雄の識別にも使われた" }
    ],
    image: "images/corythosaurus.webp",
    group: "鳥脚類"
  },
  {
    id: "maiasaura",
    name: "マイアサウラ",
    kana: "まいあさうら",
    scientificName: "Maiasaura peeblesorum",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "9.0m",
    weight: "2.5t",
    description: "「良い母親のトカゲ」を意味する名を持ち、恐竜が子育てをしていたことを初めて証明した重要な種。大規模な営巣地を作り、子供が成長するまで世話を焼いていた。",
    bioTraits: [
      { trait: "子育て", value: "高度な社会性", detail: "卵の孵化から幼体の成長まで群れ全体で保護する" },
      { trait: "営巣戦略", value: "コロニー形成", detail: "一定の間隔で巣を配置し、集団で捕食者から守る" }
    ],
    image: "images/maiasaura.webp",
    group: "鳥脚類"
  },
  {
    id: "muttaburrasaurus",
    name: "ムッタブラサウルス",
    kana: "むったぶらさうるす",
    scientificName: "Muttaburrasaurus langdoni",
    era: "白亜紀前期",
    region: "オーストラリア",
    diet: "草食",
    length: "8.0m",
    weight: "2.8t",
    description: "オーストラリアを代表する大型の鳥脚類。膨らんだ大きな鼻腔が特徴で、嗅覚が非常に鋭かった、あるいは大きな鳴き声を出すための共鳴器として機能していたと考えられている。",
    bioTraits: [
      { trait: "隆起した鼻", value: "特異形状", detail: "嗅覚の強化や音響調節に使用された可能性が高い" },
      { trait: "咬合力", value: "強力", detail: "硬い植物を切断するのに適した鋭い嘴と歯を持つ" }
    ],
    image: "images/muttaburrasaurus.webp",
    group: "鳥脚類"
  },
  {
    id: "shantungosaurus",
    name: "シャントゥンゴサウルス",
    kana: "しゃんとぅんごさうるす",
    scientificName: "Shantungosaurus giganteus",
    era: "白亜紀後期",
    region: "アジア（中国）",
    diet: "草食",
    length: "15.0m",
    weight: "16.0t",
    description: "史上最大のハドロサウルス類であり、最大の二足歩行動物の一つ。その巨体は一部の竜脚類にも匹敵し、白亜紀のアジアにおいて圧倒的な存在感を放っていた。",
    bioTraits: [
      { trait: "巨大化", value: "最大級", detail: "ハドロサウルス類としては異例の15メートル超えの体躯" },
      { trait: "骨格強度", value: "極めて高い", detail: "巨体を支えるための頑強な脊椎と後肢を持つ" }
    ],
    image: "images/shantungosaurus.webp",
    group: "鳥脚類"
  },
  {
    id: "tenontosaurus",
    name: "テノントサウルス",
    kana: "てのんとさうるす",
    scientificName: "Tenontosaurus tilletti",
    era: "白亜紀前期",
    region: "北アメリカ",
    diet: "草食",
    length: "7.0m",
    weight: "1.0t",
    description: "極端に長い尾を持つ鳥脚類。デイノニクスなどの小型肉食恐竜の主な獲物となっていたことが、化石の発見状況から強く示唆されている。",
    bioTraits: [
      { trait: "超長尾", value: "バランス調整", detail: "全長の半分以上を占める強靭な尾でバランスを取る" },
      { trait: "被食者", value: "生態系の中核", detail: "肉食恐竜との格闘の痕跡が複数の化石に残っている" }
    ],
    image: "images/tenontosaurus.webp",
    group: "鳥脚類"
  },
  {
    id: "camptosaurus",
    name: "カンプトサウルス",
    kana: "かんぷとさうるす",
    scientificName: "Camptosaurus dispar",
    era: "ジュラ紀後期〜白亜紀前期",
    region: "北アメリカ・ヨーロッパ",
    diet: "草食",
    length: "6.0m",
    weight: "0.8t",
    description: "イグアノドン類に近い原始的な鳥脚類。がっしりとした四肢を持ち、通常は四足、走る時は二足歩行を使い分けることができたと考えられている。",
    bioTraits: [
      { trait: "歩行柔軟性", value: "二足/四足併用", detail: "状況に応じて歩行スタイルを自在に切り替える" },
      { trait: "強靭な嘴", value: "植物切断", detail: "地表に近い植物を効率よく摘み取るための嘴" }
    ],
    image: "images/camptosaurus.webp",
    group: "鳥脚類"
  },
  {
    id: "ouranosaurus",
    name: "オウラノサウルス",
    kana: "おうらのさうるす",
    scientificName: "Ouranosaurus nigeriensis",
    era: "白亜紀前期",
    region: "アフリカ（ニジェール）",
    diet: "草食",
    length: "7.0m",
    weight: "2.2t",
    description: "背中に帆のような突起を持つユニークなイグアノドン類。この帆は体温調節や、仲間へのディスプレイ（自己アピール）に使われたと考えられている。",
    bioTraits: [
      { trait: "背中の帆", value: "体温調節", detail: "表面積を広げ、熱を放射または吸収する役割" },
      { trait: "親指スパイク", value: "防御武器", detail: "イグアノドン類特有の鋭い親指の爪で身を守る" }
    ],
    image: "images/ouranosaurus.webp",
    group: "鳥脚類"
  },
  {
    id: "olorotitan",
    name: "オロロティタン",
    kana: "おろろてぃたん",
    scientificName: "Olorotitan arharensis",
    era: "白亜紀後期",
    region: "アジア（ロシア）",
    diet: "草食",
    length: "12.0m",
    weight: "5.0t",
    description: "扇形の巨大なトサカを持つハドロサウルス類。ロシアの極東地域で発見され、白亜紀末期まで生き残っていた。",
    bioTraits: [
      { trait: "構造", value: "扇形トサカ", detail: "中空のトサカで音を鳴らし仲間と通信した" },
      { trait: "機動性", value: "中程度", detail: "二足・四足歩行の両方で移動可能" }
    ],
    image: "images/olorotitan.webp",
    group: "鳥脚類"
  },
  {
    id: "stegoceras",
    name: "ステゴケラス",
    kana: "すてごけらす",
    scientificName: "Stegoceras validum",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "2.5m",
    weight: "40kg",
    description: "分厚いドーム状の頭骨を持つパキケファロサウルス類。比較的小型だが、頭突きによる儀礼的闘争を行っていたと考えられている。",
    bioTraits: [
      { trait: "武装", value: "頭骨ドーム", detail: "衝撃に強い強化された骨構造" },
      { trait: "感覚", value: "鋭敏な嗅覚", detail: "脳の嗅球が発達していた" }
    ],
    image: "images/stegoceras.webp",
    group: "堅頭竜類"
  },
  {
    id: "homalocephale",
    name: "ホマロケファレ",
    kana: "ほまろけふぁれ",
    scientificName: "Homalocephale calathocercos",
    era: "白亜紀後期",
    region: "アジア（モンゴル）",
    diet: "草食",
    length: "1.8m",
    weight: "43kg",
    description: "ドーム状ではなく平らな頭頂部を持つパキケファロサウルス類。骨盤が広く、内臓を保護するのに適していた。",
    bioTraits: [
      { trait: "構造", value: "平坦な頭頂", detail: "頭突きよりも威嚇やディスプレイ用か" },
      { trait: "安定性", value: "広い骨盤", detail: "低重心で安定した歩行が可能" }
    ],
    image: "images/homalocephale.webp",
    group: "堅頭竜類"
  },
  {
    id: "hyperodapedon",
    name: "ハイペロダペドン",
    kana: "はいぺろだぺどん",
    scientificName: "Hyperodapedon",
    era: "三畳紀後期",
    region: "全世界",
    diet: "草食",
    length: "1.3m",
    weight: "50kg",
    description: "三畳紀に繁栄したリンコサウルス類。嘴のような口と、植物をすりつぶすのに特化したプレート状の歯を持つ。",
    bioTraits: [
      { trait: "採食", value: "特殊な嘴", detail: "硬い種子や植物を砕くための強力な顎" },
      { trait: "生存戦略", value: "爆発的繁栄", detail: "三畳紀後期の主要な草食動物だった" }
    ],
    image: "images/hyperodapedon.webp",
    group: "その他"
  },
  {
    id: "dimetrodon",
    name: "ディメトロドン",
    kana: "でぃめとろどん",
    scientificName: "Dimetrodon",
    era: "古生代 (ペルム紀前期)",
    region: "北アメリカ・ヨーロッパ",
    diet: "肉食",
    length: "3.5m",
    weight: "250kg",
    description: "背中の巨大な帆が特徴的な単弓類。恐竜ではなく、爬虫類よりも哺乳類に近い系統（哺乳類型爬虫類）に属する。",
    bioTraits: [
      { trait: "構造", value: "熱調節の帆", detail: "背中の帆で太陽光を浴び体温を上げた" },
      { trait: "捕食武器", value: "二種類の歯", detail: "切り裂き用と保持用の異なる形状の歯" }
    ],
    image: "images/dimetrodon.webp",
    group: "その他"
  },
  {
    id: "inostrancevia",
    name: "イノストランケビア",
    kana: "いのすとらんけびあ",
    scientificName: "Inostrancevia",
    era: "古生代 (ペルム紀後期)",
    region: "アジア（ロシア）",
    diet: "肉食",
    length: "3.5m",
    weight: "300kg",
    description: "ペルム紀末の頂点捕食者であるゴルゴノプス類。巨大な犬歯を持ち、当時の大型草食動物を狩っていた。",
    bioTraits: [
      { trait: "攻撃", value: "サーベルタイガー状の牙", detail: "厚い皮を貫く巨大な牙" },
      { trait: "脚力", value: "高い", detail: "初期の単弓類としては直立に近い脚配置" }
    ],
    image: "images/inostrancevia.webp",
    group: "その他"
  },
  {
    id: "postosuchus",
    name: "ポストスクス",
    kana: "ぽすとすくす",
    scientificName: "Postosuchus",
    era: "三畳紀後期",
    region: "北アメリカ",
    diet: "肉食",
    length: "4.0m",
    weight: "300kg",
    description: "三畳紀の陸上に君臨した巨大な擬鰐類。ワニに近い系統だが、二足歩行も可能で、当時の初期の恐竜たちを圧倒していた。",
    bioTraits: [
      { trait: "武器", value: "強力な顎", detail: "ワニのような骨を砕く顎の力" },
      { trait: "機動力", value: "二足・四足", detail: "大型の体躯を支える強力な後肢" }
    ],
    image: "images/postosuchus.webp",
    group: "その他"
  },
  {
    id: "desmatosuchus",
    name: "デスマトスクス",
    kana: "ですまとすくす",
    scientificName: "Desmatosuchus",
    era: "三畳紀後期",
    region: "北アメリカ",
    diet: "草食",
    length: "4.5m",
    weight: "500kg",
    description: "全身を棘と装甲板で覆った草食の擬鰐類。肩に非常にながい棘があり、肉食動物からの防御に役立っていた。",
    bioTraits: [
      { trait: "防御", value: "ショルダー・スパイク", detail: "横からの攻撃を防ぐ巨大な棘" },
      { trait: "装甲", value: "骨質板", detail: "全身を覆うリベット状の鎧" }
    ],
    image: "images/desmatosuchus.webp",
    group: "その他"
  },
  {
    id: "nyctosaurus",
    name: "ニクトサウルス",
    kana: "にくとさうるす",
    scientificName: "Nyctosaurus gracilis",
    era: "白亜紀後期",
    region: "北アメリカ",
    diet: "肉食（魚食）",
    length: "翼開長2.0m",
    weight: "2kg",
    description: "翼竜の中でも極めて特異な、頭部の数倍もある巨大なトサカを持つ。トサカは1本の主軸がV字型に分かれた構造をしており、帆のように風を受けて飛行を補助した可能性もある。",
    bioTraits: [
      { trait: "巨大なトサカ", value: "V字/Y字型", detail: "極めて高く伸びる分岐したトサカ" },
      { trait: "飛行適応", value: "グライダー", detail: "上昇気流を捉えて海上で長時間飛行する" }
    ],
    image: "images/nyctosaurus.webp",
    group: "翼竜"
  },
  {
    id: "sasayamagnomus",
    name: "ササヤマグノームス",
    kana: "ささやまぐのーむす",
    scientificName: "Sasayamagnomus saeki",
    era: "白亜紀前期",
    region: "日本（兵庫県）",
    diet: "草食",
    length: "0.8m",
    weight: "10kg",
    description: "2024年に正式に命名された、日本で発見された最小級の角竜類。トリケラトプスなどの祖先に近いグループであり、東アジアにおける角竜の進化を解き明かす重要な発見となった。",
    bioTraits: [
      { trait: "進化の鍵", value: "原始的な角", detail: "北米のケラトプス類へと繋がる進化の道筋を示す" },
      { trait: "小型軽量", value: "高い敏捷性", detail: "森林地帯で外敵を避けながら生活していた" }
    ],
    image: "images/sasayamagnomus.webp",
    group: "角竜類"
  },
  {
    id: "titanoboa",
    name: "ティタノボア",
    kana: "てぃたのぼあ",
    scientificName: "Titanoboa cerrejonensis",
    era: "古新世",
    region: "南アメリカ",
    diet: "肉食",
    length: "12.8m",
    weight: "1.1t",
    description: "史上最大のヘビ。恐竜絶滅後の古新世に、現在のコロンビアにあたる湿熱な熱帯雨林に生息していた。現生のアナコンダを遥かに凌ぐ巨体を持ち、巨大なワニや魚を捕食していたと考えられている。",
    bioTraits: [
      { trait: "圧倒的サイズ", value: "史上最大", detail: "全長12mを超え、胴体の太さは1mに達した" },
      { trait: "締め付け", value: "強力", detail: "巨体から繰り出される締め付けは獲物を一瞬で無力化する" }
    ],
    image: "images/titanoboa.webp",
    group: "その他"
  },
  {
    id: "nanuqsaurus",
    name: "ナヌークサウルス",
    kana: "なぬーくさうるす",
    scientificName: "Nanuqsaurus hoglundi",
    era: "白亜紀後期",
    region: "北アメリカ（アラスカ）",
    diet: "肉食",
    length: "6.0m",
    weight: "1.0t",
    description: "北極圏の厳しい環境に適応したティラノサウルス類。名前はイヌピアック語で「ホッキョクグマ・トカゲ」を意味する。ティラノサウルスに近い仲間だが、資源の限られた極地で効率よく活動するために小型化したと考えられている。",
    bioTraits: [
      { trait: "防寒羽毛", value: "可能性大", detail: "極地の寒さに耐えるための絶縁性の羽毛" },
      { trait: "感覚器官", value: "鋭敏", detail: "冬の長い夜でも獲物を探せる優れた嗅覚と視覚" }
    ],
    image: "images/nanuqsaurus.webp",
    group: "獣脚類"
  },
  {
    id: "dinichthys",
    name: "ディニクティス",
    kana: "でぃにくてぃす",
    scientificName: "Dinichthys herzeri",
    era: "古生代 (デボン紀後期)",
    region: "北アメリカ",
    diet: "肉食",
    length: "6.0m",
    weight: "1.0t",
    description: "古生代デボン紀の海に君臨した巨大な板皮類。強力な顎の骨を刃物のように使い、あらゆる獲物を切り裂いたと考えられている。「恐怖の魚」の異名を持つ。ダンクルオステウスの近縁種である。",
    bioTraits: [
      { trait: "装甲", value: "超硬質", detail: "頭部から肩にかけて頑強な骨質の装甲を持つ" },
      { trait: "咬合力", value: "絶大", detail: "骨をも容易に断ち切る鋭い顎のプレート" }
    ],
    image: "images/dinichthys.webp",
    group: "その他"
  },
  {
    id: "paralititan",
    name: "パラリティタン",
    kana: "ぱらりていたん",
    scientificName: "Paralititan stromeri",
    era: "白亜紀後期 (セノマニアン)",
    region: "アフリカ (エジプト)",
    diet: "草食",
    length: "26.0m",
    weight: "59.0t",
    description: "エジプトのマングローブ沼地で発見された巨大な竜脚類。名前は「潮の巨神」を意味する。化石が潮間帯の堆積物から見つかったため、海岸付近の湿地帯に生息していたと考えられている。カルカロドントサウルスなどの巨大肉食恐竜と共存していた。",
    bioTraits: [
      { trait: "骨格", value: "巨大", detail: "長さ1.69mにも及ぶ巨大な上腕骨を持つ" },
      { trait: "環境適応", value: "湿地帯", detail: "マングローブが茂る海岸線での生活に適応" }
    ],
    image: "images/paralititan.webp",
    group: "竜脚類"
  },
  {
    id: "dunkleosteus",
    name: "ダンクレオステウス",
    kana: "だんくれおすてうす",
    scientificName: "Dunkleosteus terrelli",
    era: "古生代 (デボン紀後期)",
    region: "北アメリカ・ヨーロッパ・北アフリカ",
    diet: "肉食",
    length: "6.0m",
    weight: "1.0t",
    description: "デボン紀の海を支配した最大級の板皮類。頭部から肩にかけて強力な装甲を持ち、顎には歯の代わりに鋭い骨のプレートが備わっていた。その咬合力は凄まじく、当時のあらゆる生物を噛み砕くことができたとされる。「恐怖の魚」の代表格である。",
    bioTraits: [
      { trait: "装甲", value: "超硬質", detail: "頭部から胸部を覆う頑強な骨質のプレート" },
      { trait: "咬合力", value: "絶大", detail: "あらゆる獲物を両断する鋭い顎の刃" }
    ],
    image: "images/dunkleosteus.webp",
    group: "その他"
  },
  {
    id: "sarcosuchus",
    name: "サルコスクス",
    kana: "さるこすくす",
    scientificName: "Sarcosuchus imperator",
    era: "中生代白亜紀前期",
    region: "アフリカ (ニジェールなど)",
    diet: "肉食",
    length: "12.0m",
    weight: "8.0t",
    description: "白亜紀前期のアフリカに生息した史上最大級のワニ形類。現生のワニを遥かに凌ぐ巨体を持ち、「スーパークロック」とも呼ばれる。長く伸びた吻の先端には「ビュラ」と呼ばれる膨らみがあり、強力な咬合力で恐竜さえも獲物にしていたと考えられている。",
    bioTraits: [
      { trait: "咬合力", value: "驚異的", detail: "大型肉食恐竜をも仕留める強力な顎" },
      { trait: "体躯", value: "巨大", detail: "全長12mに達し、現生ワニの2倍以上のサイズ" }
    ],
    image: "images/sarcosuchus.webp",
    group: "その他"
  }
];

const GLOSSARY = [
  { id: "theropods", term: "獣脚類 (Theropods)", def: "主に二足歩行をする肉食恐竜のグループ。ティラノサウルスや鳥類もここに含まれる。" },
  { id: "sauropods", term: "竜脚類 (Sauropods)", def: "長い首と尾、巨大な体を持った草食恐竜。ブラキオサウルスなどが代表。" },
  { id: "cretaceous", term: "白亜紀 (Cretaceous)", def: "約1億4500万年前から6600万年前までの期間。恐竜が最も多様化した時代。" },
  { id: "jurassic", term: "ジュラ紀 (Jurassic)", def: "約2億130万年前から1億4500万年前までの期間。大型の竜脚類が繁栄した。" },
  { id: "triassic", term: "三畳紀 (Triassic)", def: "約2億5190万年前から2億130万年前までの期間。恐竜が登場し始めた時代。" },
  { id: "paleozoic", term: "古生代 (Paleozoic)", def: "約5億4100万年前から2億5190万年前までの期間。生命の多様化が爆発的に進んだ時代であり、魚類、両生類、そして初期の単弓類（哺乳類の祖先系）が繁栄した。カンブリア紀からペルム紀までを含む。" }
];

const TOPICS = [
  {
    id: "dilophosaurus-frill",
    date: "2026.05.21",
    category: "RESEARCH_HISTORY",
    title: "ディロフォサウルスの真実：映画が作った「毒と襟飾り」の虚像",
    summary: "映画『ジュラシック・パーク』で一躍有名になったディロフォサウルス。しかし、トレードマークである「襟飾り（フリル）」や「毒吐き」は本当に存在したのか？最新の研究から明らかになった本当の姿を解説する。",
    content: `
<h4 class="article-section-title">映画が作り上げた強烈なイメージ</h4>
<p class="article-paragraph">
  ディロフォサウルスと聞いて多くの人が思い浮かべるのは、映画『ジュラシック・パーク』（1993年）に登場した姿でしょう。小型で可愛らしい鳴き声を上げながら近づき、突如として首周りのカラフルな「襟飾り（フリル）」を広げ、真っ黒な毒液を吐き出して獲物を仕留める——その姿は世界中の人々に強烈な印象を与えました。
</p>
<p class="article-paragraph">
  しかし、この恐ろしくも魅力的な特徴は、映画の演出のために作られた<strong>純粋なフィクション（創作）</strong>でした。
</p>

<h4 class="article-section-title">襟飾りと毒液は存在しなかった</h4>
<p class="article-paragraph">
  実際の化石からは、エリマキトカゲのような襟飾りを支えるための骨や軟骨の痕跡は一切見つかっていません。また、毒腺を持っていたことを示すような頭骨の構造や、毒を注入するための特殊な牙も存在しません。
</p>
<p class="article-paragraph">
  これらは原作者のマイケル・クライトンが、小説をよりスリリングにするために付与した空想の設定でした。映画の大ヒットにより、この「架空の姿」が現実の恐竜のイメージとして定着してしまった珍しいケースと言えます。
</p>

<h4 class="article-section-title">本当のディロフォサウルスは「ジュラ紀前期の頂点捕食者」</h4>
<p class="article-paragraph">
  では、実際のディロフォサウルスはどのような恐竜だったのでしょうか。最新の包括的な研究（2020年）により、彼らの本当の姿は映画とは全く異なることがわかっています。
</p>
<p class="article-paragraph">
  まず、サイズが全く違います。映画では人間より小柄に描かれていましたが、実際は全長約7メートル、体重約400キロにも達する大型の肉食恐竜でした。ジュラ紀前期の北米において、間違いなく当時の生態系の頂点に立つ最強の捕食者（アペックス・プレデター）だったのです。
</p>

<h4 class="article-section-title">象徴的な「2つのトサカ」の真の役割</h4>
<p class="article-paragraph">
  唯一、映画でも正しく描かれていた特徴が頭部の「一対の半月状のトサカ（クレスト）」です。ディロフォサウルスという名前も「2つの隆起を持つトカゲ」という意味を持っています。
</p>
<p class="article-paragraph">
  このトサカは非常に薄く脆いため、武器や防御には使えなかったと考えられています。現代の鳥類（サイチョウやヒクイドリなど）に見られるような、求愛行動や仲間同士のディスプレイ（視覚的な自己アピール）のために使われていた可能性が高いと推測されています。
</p>

<h4 class="article-section-title">似て非なる「1つのトサカ」：モノロフォサウルス</h4>
<p class="article-paragraph">
  ディロフォサウルス（＝2つの隆起を持つトカゲ）と名前や特徴が非常によく似た恐竜に、同じジュラ紀に生息していた<strong>モノロフォサウルス（＝1つの隆起を持つトカゲ）</strong>がいます。
</p>
<p class="article-paragraph">
  どちらもジュラ紀の肉食恐竜で、頭部に目立つトサカを持っていることから親戚（近縁種）のように思われがちですが、実は系統的に近い仲間ではありません。ディロフォサウルスはジュラ紀前期の北米に生息した初期のグループであるのに対し、モノロフォサウルスはジュラ紀中期の中国（アジア）に生息し、より鳥類に近い「テタヌラ類」という進化したグループに分類されます。住んでいた地域も分類グループも異なる、まさに「似て非なる」存在なのです。
</p>
    `,
    image: "images/topics/dilophosaurus_comparison.webp",
    securityLevel: "LEVEL 2 (SCIENTIFIC REVISION)",
    relatedSpecimens: ["dilophosaurus", "monolophosaurus"]
  },
  {
    id: "spinosaurus-ecology",
    date: "2026.05.20",
    category: "RESEARCH_HISTORY",
    title: "スピノサウルスの生態推測の歴史的変化：陸の王者から水中の狩人へ",
    summary: "かつてはT-Rexのような二足歩行の陸生恐竜と考えられていたスピノサウルスが、いかにして「四足歩行の水棲恐竜」という特異な姿へと推測が変わっていったのか、その歴史的変遷を追う。",
    content: `
<h4 class="article-section-title">初期の発掘と大戦による喪失</h4>
<p class="article-paragraph">
  スピノサウルスの最初の化石は、1912年にエジプトでドイツの古生物学者エルンスト・シュトローマーによって発見されました。この時は下顎や特徴的な背中の帆の骨などが発掘され、「ティラノサウルスのような大型の獣脚類で、背中に帆がある」と推測されました。
</p>
<p class="article-paragraph">
  しかし、これらの貴重な基準標本（ホロタイプ）はドイツの博物館に展示されていたものの、1944年のミュンヘン大空襲によって全て焼失してしまいます。これにより、スピノサウルスは長い間「幻の恐竜」となってしまいました。
</p>

<h4 class="article-section-title">二足歩行の陸生肉食恐竜としてのイメージ</h4>
<p class="article-paragraph">
  2001年の映画『ジュラシック・パークIII』では、ティラノサウルスを凌ぐ巨大な陸の捕食者として描かれ、世界的に有名になりました。この時期の学説でも、ワニのような長い口先を持ちながらも、基本的にはティラノサウルスのように強靭な後脚で二足歩行する陸生の恐竜として復元されていました。
</p>

<h4 class="article-section-title">2014年のパラダイムシフト：四足歩行と水中生活説</h4>
<p class="article-paragraph">
  2014年、ニザール・イブラヒム博士らの研究チームが新たな化石を発見し、これまでの復元図を根本から覆す発表を行いました。
</p>
<p class="article-paragraph">
  新しく見つかった骨格から、<strong>後脚が非常に短く、重心が極端に前にある</strong>ことが判明したのです。これにより、「二足歩行は困難であり、陸上では四足歩行していた。そして、人生の大半を水中で過ごす水棲（または半水棲）恐竜であった」という衝撃的な説が提唱されました。
</p>

<h4 class="article-section-title">2020年の決定打：オオサンショウウオのような尾</h4>
<p class="article-paragraph">
  さらに2020年、同じモロッコの地層からスピノサウルスの<strong>完全な尾の化石</strong>が発見されました。その尾はこれまでの獣脚類のような丸い断面ではなく、<strong>上部に非常に長い骨（神経棘）が伸びた、オールの形（ヒレ状）</strong>をしていたのです。
</p>
<p class="article-paragraph">
  これにより、スピノサウルスがこの尾を左右に振ることで、ワニやオオサンショウウオのように水中で強力な推進力を得て泳いでいたことが確実視されるようになりました。
</p>

<h4 class="article-section-title">最新の研究と続く議論</h4>
<p class="article-paragraph">
  現在でも、どれほど深く潜れたのか（骨密度からのアプローチ）、陸上での移動はどうだったのか等、研究者たちの間で活発な議論が続いています。スピノサウルスは、古生物学という学問が「新しい化石一つで過去の常識が完全に覆る」という最もエキサイティングな側面を持つことを教えてくれる、最高のケーススタディなのです。
</p>
    `,
    image: "images/topics/spinosaurus_evolution.webp",
    securityLevel: "LEVEL 1 (PUBLIC ARCHIVE)",
    relatedSpecimens: ["spinosaurus", "tyrannosaurus"]
  },
  {
    id: "trex-feathers",
    date: "2026.05.21",
    category: "RESEARCH_HISTORY",
    title: "ティラノサウルスの「羽毛」論争と最新の姿：モフモフ説は否定された？",
    summary: "一時期「ティラノサウルスは全身羽毛に覆われていた」という説がメディアを席巻したが、その後の皮膚化石の発見により「大人のT-Rexはウロコに覆われていた」という説が有力になっている。最新の研究からT-Rexの本当の姿を読み解く。",
    content: `
<h4 class="article-section-title">「全身モフモフ」のティラノサウルス像の誕生</h4>
<p class="article-paragraph">
  1990年代以降、中国で羽毛を持った恐竜の化石が次々と発見されました。特に2012年に発見された「ユティラヌス（Yutyrannus huali）」は、ティラノサウルスの近縁種でありながら全長9メートルに達し、全身が長い羽毛で覆われていました。
</p>
<p class="article-paragraph">
  この発見は古生物学界に衝撃を与え、「もし近縁種が全身羽毛に覆われていたなら、ティラノサウルス・レックスも同じように羽毛に覆われていたはずだ」という推測が一気に広まりました。その結果、数多くのドキュメンタリーや図鑑で「巨大な鳥のように全身が羽毛で覆われた（モフモフの）ティラノサウルス」が描かれるようになりました。
</p>

<h4 class="article-section-title">ウロコ化石の発見によるパラダイムシフト</h4>
<p class="article-paragraph">
  しかし、2017年にオーストラリアやアメリカの国際研究チームが、ティラノサウルス・レックスの実物化石（首、骨盤、尾などの皮膚痕跡）を詳細に分析した結果を発表しました。そこには、鳥のような羽毛の痕跡はなく、現生爬虫類のような「細かいウロコ」がはっきりと残されていました。
</p>
<p class="article-paragraph">
  これにより、「少なくとも成長した大人のティラノサウルスは、全身の大部分がウロコで覆われていた」ことがほぼ確実となりました。巨体を持つT-Rexにとって、全身を羽毛で覆うことは体温が上がりすぎる（オーバーヒートの）危険性があったため、進化の過程で羽毛を失っていったと考えられています。
</p>

<h4 class="article-section-title">現在のティラノサウルスの復元像</h4>
<p class="article-paragraph">
  現在最も有力なのは、「幼体の頃は保温のために産毛のような羽毛が生えていたが、成長するにつれて抜け落ち、大人になるとゾウやサイのように皮膚（ウロコ）がむき出しになり、背中や首筋などにわずかに装飾的な羽毛が残る程度だった」という説です。
</p>
<p class="article-paragraph">
  恐竜の姿は新しい化石が発見されるたびに変わります。ティラノサウルスの復元の変遷も、まさに科学が常に自己修正していくプロセスを体現していると言えるでしょう。
</p>
    `,
    image: "images/topics/trex_feathers.webp",
    securityLevel: "LEVEL 2 (SCIENTIFIC REVISION)",
    relatedSpecimens: ["tyrannosaurus", "yutyrannus", "nanuqsaurus"]
  },
  {
    id: "extinction-scenario",
    date: "2026.05.21",
    category: "RESEARCH",
    title: "恐竜絶滅の最新シナリオ：小惑星衝突の直前まで「彼らは全盛期だった」",
    summary: "かつての「恐竜は隕石が落ちる前から環境変化で衰退しつつあった」という説を覆す、最新の統計的アプローチによる研究。恐竜たちは絶滅の直前まで極めて多様で繁栄していたことが示された。",
    content: `
<h4 class="article-section-title">「恐竜衰退説」への疑問</h4>
<p class="article-paragraph">
  約6600万年前の白亜紀末、直径約10キロメートルの小惑星が現在のメキシコ・ユカタン半島に衝突し、恐竜を含む全生物の約75%が絶滅しました。しかし長年、古生物学者の間では「小惑星が衝突する前から、気候変動や火山活動によって恐竜の多様性はすでに減少し、絶滅に向かっていたのではないか」という「恐竜衰退説」が議論されてきました。
</p>

<h4 class="article-section-title">2025〜2026年の最新解析が示す真実</h4>
<p class="article-paragraph">
  近年、化石記録の不完全さを補うための高度な統計モデリングが導入されました。イギリスのブリストル大学などの研究チームが化石データを再評価した結果、恐竜は絶滅の直前まで衰退などしておらず、むしろ多様性を維持し、それぞれの環境に高度に適応していたことが証明されました。
</p>
<p class="article-paragraph">
  特に北米大陸では、ティラノサウルスやトリケラトプス、エドモントサウルスなどによる豊かで安定した生態系が築かれていました。つまり、恐竜たちは「ゆっくりと滅びゆく種族」ではなく、「絶頂期に突如として宇宙からの物理的暴力によって断ち切られた」というのが現在の正しいシナリオです。
</p>

<h4 class="article-section-title">なぜ「鳥類」だけが生き残れたのか</h4>
<p class="article-paragraph">
  多様性を誇っていた恐竜の中で、唯一「鳥類（鳥型恐竜）」だけが絶滅を逃れました。その理由として、「体が小さく必要な食料が少なかったこと」「くちばしを持っていたため、土の中の種子や昆虫を食べることができたこと」「飛翔能力によって環境変化から素早く逃れられたこと」などが挙げられます。
</p>
<p class="article-paragraph">
  小惑星衝突という未曾有の大災害においても、ほんのわずかな身体的・生態的特徴の差が生死を分け、現在の地球の生態系へと繋がっているのです。
</p>
    `,
    image: "images/topics/extinction_scenario.webp",
    securityLevel: "LEVEL 3 (PUBLIC)",
    relatedSpecimens: ["triceratops", "tyrannosaurus", "edmontosaurus"]
  },
  {
    id: "sasayamagnomus-discovery",
    date: "2026.05.21",
    category: "DISCOVERY",
    title: "日本発の恐竜たち：ササヤマグノームスが解き明かす角竜進化の道筋",
    summary: "2024年に命名された兵庫県丹波市産の最小級角竜「ササヤマグノームス・サエキ」。トリケラトプスなどの北米の大型角竜へと続く進化のルーツとして、いかに重要な発見であるかを解説する。",
    content: `
<h4 class="article-section-title">日本から見つかった「森の小人」</h4>
<p class="article-paragraph">
  2024年9月、兵庫県丹波市の「篠山層群（ささやまそうぐん）」という約1億1000万年前（白亜紀前期）の地層から発見された化石が、新属新種の恐竜『ササヤマグノームス・サエキ（Sasayamagnomus saeki）』として正式に命名されました。
</p>
<p class="article-paragraph">
  学名の意味は「丹波篠山地方の、地下の財宝を守る小人（グノーム）」。その名の通り、推定全長は約80センチメートルと、極めて小型の草食恐竜です。トリケラトプスなどでおなじみの「角竜類」の仲間ですが、立派な角や襟飾り（フリル）はまだ発達しておらず、二足歩行も可能な身軽な体型をしていました。
</p>

<h4 class="article-section-title">東アジアから北米への「進化の旅」</h4>
<p class="article-paragraph">
  ササヤマグノームスの発見が世界的に注目されている理由は、彼らが「基盤的角竜類」と呼ばれる、進化の初期段階にあるグループだからです。
</p>
<p class="article-paragraph">
  角竜類はアジアで誕生し、その後ベーリング陸橋を渡って北アメリカ大陸へと進出、そこで巨大化・多様化を遂げたと考えられています。ササヤマグノームスは、まさにその「アジアから北米への移動」が起こった時期の東アジアに生息しており、角竜たちがどのように大陸間を移動し、姿を変えていったのかを解き明かすための「ミッシングリンク（失われた環）」を埋める極めて重要なピースなのです。
</p>

<h4 class="article-section-title">豊かだった日本の白亜紀</h4>
<p class="article-paragraph">
  北海道の「カムイサウルス」や福井県の「フクイラプトル」など、日本国内での恐竜化石の発見は年々増加しています。当時の日本は大陸の東端に位置しており、多種多様な恐竜たちが暮らす豊かな生態系が広がっていました。今後も日本発の新たな大発見が、世界の恐竜研究の歴史を塗り替える可能性を秘めています。
</p>
    `,
    image: "images/topics/sasayamagnomus_habitat.webp",
    securityLevel: "LEVEL 4 (UNCLASSIFIED)",
    relatedSpecimens: ["sasayamagnomus", "triceratops", "kamuyasaurus", "fukuiraptor"]
  },
  {
    id: "strongest-dinosaur-debate",
    date: "2026.05.22",
    category: "RESEARCH_HISTORY",
    title: "最強の恐竜は誰だ？ティラノサウルス・ギガノトサウルス・スピノサウルスを徹底比較！",
    summary: "「もし戦ったら一番強いのは？」誰もが一度は夢見る大型肉食恐竜たちのドリームマッチ。体格、噛む力、武器の違いなど、最新科学のデータに基づいて徹底的に比較検証する。",
    content: `
<h4 class="article-section-title">永遠のテーマ「最強の恐竜」</h4>
<p class="article-paragraph">
  「地球の歴史上で最も強かった恐竜はどれか？」これは恐竜好きの子供から大人まで、誰もが一度は熱く議論したことのある永遠のテーマです。今回は、その筆頭候補である大型獣脚類（肉食恐竜）の3強「ティラノサウルス」「ギガノトサウルス」「スピノサウルス」に焦点を当て、最新の科学的知見からそれぞれの実力を比較してみましょう。
</p>

<h4 class="article-section-title">最大・最強の「噛む力」を持つ絶対王者：ティラノサウルス</h4>
<p class="article-paragraph">
  まず紹介するのは、知名度・人気ともにダントツの「ティラノサウルス・レックス」です。全長約12メートル、体重約8〜9トンに達する体躯を持ち、何よりもその特徴は<strong>圧倒的な噛む力（咬合力）</strong>にあります。
</p>
<p class="article-paragraph">
  研究によると、ティラノサウルスの噛む力は約3〜6トン（現生のワニの数倍、乗用車1台を押し潰すほど）と推定されており、陸生動物としては史上最強クラスです。太く頑丈なバナナのような牙は、獲物の肉を切り裂くだけでなく、骨ごと噛み砕くことができました。さらに、立体視が可能な優れた視力と、極めて鋭い嗅覚を併せ持っており、まさに「狩りの完璧なスペシャリスト」でした。
</p>

<h4 class="article-section-title">南米の巨大なスピードハンター：ギガノトサウルス</h4>
<p class="article-paragraph">
  続いては、ティラノサウルスに匹敵する、あるいはそれを超える巨体を持っていたとされる「ギガノトサウルス」です。南米アルゼンチンで発見されたこの恐竜は、全長約13メートルに達し、ティラノサウルスよりもやや細身でスマートな体型をしていました。
</p>
<p class="article-paragraph">
  ギガノトサウルスの特徴は、ナイフのように薄く鋸歯（ギザギザ）のある鋭い牙です。ティラノサウルスの「骨を砕く顎」とは異なり、獲物の肉を効率よく「切り裂いて失血死させる」戦術を得意としていました。当時の南米にいたアルゼンチノサウルスなどの超巨大な草食恐竜を狩るために、集団で行動し、俊敏性を活かして戦っていたと考えられています。
</p>

<h4 class="article-section-title">水陸両生の異形の超巨大獣：スピノサウルス</h4>
<p class="article-paragraph">
  最後に紹介するのは、映画『ジュラシック・パークIII』でティラノサウルスを倒したことで一躍最強候補に躍り出た「スピノサウルス」です。全長は約15メートルと、全肉食恐竜の中でも最長を誇ります。
</p>
<p class="article-paragraph">
  しかし、近年の研究でスピノサウルスの生態は大きく塗り替えられました。彼らは「陸上のハンター」というよりは、人生の大部分を水中で過ごす「水棲の捕食者」だったのです。ワニのような細長い顎と円錐形の牙は魚を捕らえるのに適しており、後肢が短く、水中で泳ぐためのオオサンショウウオのような尾を持っていました。陸上での素早い格闘は苦手だったと考えられますが、水中という彼らのテリトリーにおいては無敵の存在でした。
</p>

<h4 class="article-section-title">3大肉食恐竜のスペック比較</h4>
<div class="table-container" style="overflow-x: auto; margin-bottom: 20px;">
  <table style="width: 100%; border-collapse: collapse; border: 1px solid var(--panel-border); font-size: 14px;">
    <thead>
      <tr style="background-color: rgba(0, 242, 255, 0.1); border-bottom: 1px solid var(--panel-border);">
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">恐竜名</th>
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">推定全長</th>
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">推定体重</th>
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">攻撃スタイル</th>
        <th style="padding: 10px; text-align: left;">得意な戦場</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid var(--panel-border);">
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">ティラノサウルス</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">約12.3m</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">約8.0〜9.0t</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">圧倒的な噛む力で骨ごと粉砕</td>
        <td style="padding: 10px;">陸上（森林・平原）</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--panel-border);">
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">ギガノトサウルス</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">約13.0m</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">約6.0〜8.0t</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">薄く鋭い牙で肉を切り裂く</td>
        <td style="padding: 10px;">陸上（開けた平原）</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">スピノサウルス</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">約15.0m</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">約6.0〜7.0t</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">長い顎と前肢の鋭い爪での捕縛</td>
        <td style="padding: 10px;">水中・水辺</td>
      </tr>
    </tbody>
  </table>
</div>

<h4 class="article-section-title">もし戦ったら？勝負の行方</h4>
<p class="article-paragraph">
  では、この3頭がもし直接対決したらどうなるでしょうか？
</p>
<p class="article-paragraph">
  <strong>陸上での戦い</strong>であれば、強靭な骨格と圧倒的な咬合力、そして高い知能を持つティラノサウルスが圧倒的に有利とされています。ギガノトサウルスの噛みつく攻撃も強力ですが、ティラノサウルスの「骨を砕く一撃」を喰らえば致命傷は避けられません。
</p>
<p class="article-paragraph">
  一方で、<strong>水辺や水中での戦い</strong>であれば、泳ぎが得意で圧倒的なリーチを誇るスピノサウルスが絶対的な優位に立ちます。
</p>
<p class="article-paragraph">
  このように、「最強」の定義は彼らが暮らしていた環境や獲物によって異なります。それぞれの恐竜が独自の進化を遂げ、異なる戦略で生態系の頂点に君臨していたことこそが、古生物の多様性の最も面白いところなのです。
</p>
    `,
    image: "images/topics/strongest_dinosaur_debate.webp",
    securityLevel: "LEVEL 2 (SCIENTIFIC REVISION)",
    relatedSpecimens: ["tyrannosaurus", "giganotosaurus", "spinosaurus"]
  },
  {
    id: "first-named-dinosaur",
    date: "2026.05.22",
    category: "RESEARCH_HISTORY",
    title: "世界で最初に名前がついた恐竜は？「恐竜」という言葉が生まれた歴史と最初の3頭",
    summary: "「恐竜」という言葉が存在しなかった時代、最初に見つかった化石は「巨人の骨」だと思われていた？メガロサウルス、イグアノドン、ヒラエオサウルスという、歴史のスタートを飾った最初の3頭と発見の歩みを解説。",
    content: `
<h4 class="article-section-title">「恐竜」という言葉がなかった時代</h4>
<p class="article-paragraph">
  現在では誰もが知っている「恐竜」という言葉ですが、かつては地球上に存在しない言葉でした。19世紀の初頭、イギリスの鉱山や地層から巨大な骨の化石が次々と発見され始めたとき、当時の人々は「大洪水で溺れた巨人の骨」や「伝説のドラゴンの遺骸」ではないかと大真面目に考えていたのです。
</p>
<p class="article-paragraph">
  そんな中、奇妙な化石を科学的に分析し、歴史上初めて正式に名前（学名）を与えられた「最初の恐竜たち」がいました。それが「メガロサウルス」「イグアノドン」「ヒラエオサウルス」の3頭です。
</p>

<h4 class="article-section-title">世界初の学名：メガロサウルス（1824年命名）</h4>
<p class="article-paragraph">
  歴史上、最も最初に正式な学名が与えられた恐竜は、肉食恐竜の<strong>メガロサウルス（Megalosaurus）</strong>です。
</p>
<p class="article-paragraph">
  1824年、イギリスの学者ウィリアム・バックランドが、オックスフォードシャー州で見つかった巨大な顎と歯の化石をもとに「メガロサウルス（巨大なトカゲ）」と命名しました。当時はまだ二足歩行する恐竜の姿は想像されておらず、ワニやオオトカゲをそのまま巨大化させたような四足歩行の怪獣として描かれていました。
</p>

<h4 class="article-section-title">歯の発見から始まった：イグアノドン（1825年命名）</h4>
<p class="article-paragraph">
  メガロサウルスに続いて、世界で2番目に命名されたのが植物食恐竜の<strong>イグアノドン（Iguanodon）</strong>です。
</p>
<p class="article-paragraph">
  1822年、イギリスの医師ギデオン・マンテルとその妻メアリー・アンが、道路の砂利の中から奇妙な歯の化石を発見しました。マンテルはこの歯が現代の爬虫類「イグアナ」の歯にそっくりであることに気づき、1825年に「イグアナの歯」を意味する「イグアノドン」と名付けました。
</p>
<p class="article-paragraph">
  当初、マンテルは発見された鋭いスパイク状の骨を「鼻の上の角」だと勘違いし、巨大なイグアナのような復元図を作成しました。しかし後の発見により、このスパイクは鼻の角ではなく「親指の爪」であり、身を守るための強力な武器だったことが判明しました。
</p>

<h4 class="article-section-title">3番目の鎧竜：ヒラエオサウルス（1833年命名）</h4>
<p class="article-paragraph">
  3番目に名前がついたのは、初期の鎧竜（アンキロサウルス類）である<strong>ヒラエオサウルス（Hylaeosaurus）</strong>です。
</p>
<p class="article-paragraph">
  1832年、ふたたびギデオン・マンテルによってイギリス南部のウェスト・サセックス州で発見され、翌1833年に「森のトカゲ」を意味する「ヒラエオサウルス」と命名されました。背中に並ぶ鋭いトゲや骨質のプレート（装甲）が特徴で、植物食恐竜が肉食恐竜から身を守るための頑丈な防御用パーツを持っていたことを示す最初の証拠となりました。
</p>

<h4 class="article-section-title">「恐竜（Dinosaur）」という言葉の誕生（1842年）</h4>
<p class="article-paragraph">
  これら3頭の発見からしばらくの間、それぞれは「珍しい巨大爬虫類」として個別に扱われていました。しかし1842年、イギリスの偉大な解剖学者リチャード・オーウェンが、これら3頭の骨格に共通する特徴（直立に近い頑丈な脚、融合した仙椎など）に着目しました。
</p>
<p class="article-paragraph">
  オーウェンは、これらは単なるトカゲの仲間ではなく、すでに絶滅した全く新しい爬虫類のグループであると確信し、ギリシャ語の「deinos（恐ろしい、凄まじい）」と「sauros（トカゲ）」を組み合わせ、<strong>「Dinosauria（恐竜類）」</strong>という新たな分類グループを提唱したのです。これが、私たちが今日使っている「恐竜」という言葉の歴史の始まりです。
</p>

<h4 class="article-section-title">歴史を創った最初の3頭のスペック</h4>
<div class="table-container" style="overflow-x: auto; margin-bottom: 20px;">
  <table style="width: 100%; border-collapse: collapse; border: 1px solid var(--panel-border); font-size: 14px;">
    <thead>
      <tr style="background-color: rgba(0, 242, 255, 0.1); border-bottom: 1px solid var(--panel-border);">
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">恐竜名</th>
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">命名年</th>
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">名前の意味</th>
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">食性</th>
        <th style="padding: 10px; text-align: left;">主な特徴</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid var(--panel-border);">
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">メガロサウルス</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">1824年</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">巨大なトカゲ</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">肉食</td>
        <td style="padding: 10px;">世界で最初に命名された肉食恐竜</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--panel-border);">
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">イグアノドン</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">1825年</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">イグアナの歯</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">草食</td>
        <td style="padding: 10px;">親指の鋭いトゲ（スパイク）を持つ</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">ヒラエオサウルス</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">1833年</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">森のトカゲ</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">草食</td>
        <td style="padding: 10px;">背中の鋭いトゲと骨質の装甲を持つ初期の鎧竜</td>
      </tr>
    </tbody>
  </table>
</div>
    `,
    image: "images/topics/first_named_dinosaur.webp",
    securityLevel: "LEVEL 2 (SCIENTIFIC REVISION)",
    relatedSpecimens: ["megalosaurus", "iguanodon", "hylaeosaurus"]
  },
  {
    id: "fossil-reconstruction-science",
    date: "2026.05.22",
    category: "RESEARCH",
    title: "完全な化石がないのになぜ全身がわかる？古生物学者が「パズル」を解く科学的アプローチ",
    summary: "「博物館の恐竜骨格はほとんど想像で作られている？」そんな素朴な疑問に迫ります。一部の骨しか見つかっていない恐竜の全身像を、科学的に高い精度で復元する驚きのテクニックを解説。",
    content: `
<h4 class="article-section-title">博物館の骨格は「ほぼ想像」で作られている？</h4>
<p class="article-paragraph">
  博物館に並ぶ巨大な恐竜の全身骨格を見上げるとき、「全身の骨が100%きれいに見つかることなんてあるのだろうか？」と疑問に思ったことはありませんか？
</p>
<p class="article-paragraph">
  実は、頭から足の先まで全ての骨が完全な状態で発掘されるケースは極めてまれです。多くの場合は、全身のわずか数パーセント〜数十パーセントの骨しか見つかりません。では、なぜ古生物学者たちは残りの失われたパーツを補い、生きていた頃のリアルな姿を再現できるのでしょうか。その裏側にある科学的な「謎解き（復元）のテクニック」を紹介します。
</p>

<h4 class="article-section-title">手がかり1：骨格の共通ルールを使う「比較解剖学」</h4>
<p class="article-paragraph">
  生物の骨は、進化の歴史や機能（歩く、食べるなど）に応じて一定の法則に沿って作られています。これを研究するのが<strong>比較解剖学</strong>です。
</p>
<p class="article-paragraph">
  例えば、新しい恐竜の「一本の歯」が見つかったとします。その歯の形がトリケラトプスにそっくりであれば、その恐竜は角竜（角を持つ植物食恐竜）の仲間である可能性が極めて高くなります。すると科学者たちは、すでに全身の骨格がよく分かっているトリケラトプスやプロトケラトプスの骨格データをベースにして、見つかっていない胴体や足の形を高い精度で予測（推測）することができるのです。
</p>

<h4 class="article-section-title">手がかり2：ワニと鳥で挟み撃ちにする「系統的ブラケッティング」</h4>
<p class="article-paragraph">
  恐竜の「筋肉」や「内臓」「皮膚」といった柔らかい組織は、化石として残りにくい弱点があります。これらを復元するために使われるのが<strong>系統的ブラケッティング（Phylogenetic Bracketing）</strong>という手法です。
</p>
<p class="article-paragraph">
  恐竜は、現代の生き物でいうと<strong>「鳥類」</strong>と<strong>「ワニ類」</strong>の間に位置するグループです。そこで科学者たちは、恐竜の骨化石に残された筋肉の付着痕（筋痕）を観察し、現代の鳥とワニの筋肉の付き方を比較します。両方に共通する特徴があれば、「恐竜にも同じ位置に同じ筋肉があったはずだ」と高い確率で特定でき、ただの骨の塊にリアルな肉付けを施すことが可能になります。
</p>

<h4 class="article-section-title">世紀の大逆転：腕だけで50年間悩ませた「デイノケイルス」</h4>
<p class="article-paragraph">
  この予測の難しさと面白さを象徴する最も有名な例が、<strong>デイノケイルス（Deinocheirus）</strong>です。
</p>
<p class="article-paragraph">
  1965年、モンゴルのゴビ砂漠で、長さ2.4メートルもある巨大で鋭い爪を持つ「一対の前肢（腕）の骨」だけが発見されました。これを見た学者たちは、「ティラノサウルスを超える超巨大で凶暴な肉食恐竜に違いない」と予測し、様々な恐ろしい復元図が描かれました。
</p>
<p class="article-paragraph">
  しかし発見から約50年後の2014年、ついに全身の化石が発見されます。現れたその姿は、誰もが予想しなかったものでした。頭部はアヒルのように平らで歯がなく、背中には大きな帆（コブ）があり、基本的には植物や魚を食べるおっとりとした雑食恐竜だったのです。このように、新しい化石の発見によって復元図が「上書き」され、より真実に近づいていくことこそが古生物学のダイナミズムです。
</p>

<h4 class="article-section-title">復元を支える3大科学アプローチ</h4>
<p class="article-paragraph">
  現代の恐竜復元は、ただの絵描き（イラストレーター）の想像ではなく、以下のような多角的な科学技術の連携によって行われています。
</p>
<ul style="list-style-type: square; padding-left: 20px; line-height: 1.8; margin-bottom: 20px; font-size: 14px;">
  <li><strong style="color: var(--primary-neon);">3Dスキャンとデジタル組み立て</strong>: 歪んで潰れた骨の化石をCTスキャンし、コンピュータ上で元の立体的な形に修正してパズルのように組み立てる。</li>
  <li><strong style="color: var(--primary-neon);">バイオメカニクス（生体力学）解析</strong>: 関節の可動範囲や骨の強度をシミュレーションし、「実際にその脚で体重を支え、歩くことが可能か」を物理法則に基づいて検証する。</li>
  <li><strong style="color: var(--primary-neon);">骨組織学（マイクロスコープ解析）</strong>: 骨の内部組織を顕微鏡で観察し、その恐竜が何歳で、どのくらいのスピードで成長していたのかを特定する。</li>
</ul>
<p class="article-paragraph">
  次に博物館で恐竜の骨格を見るときは、ぜひ「どの部分が実際に見つかった骨で、どの部分が科学的な裏付けによって補われたパズルなのか」を想像しながら観察してみてください。
</p>
    `,
    image: "images/topics/fossil_reconstruction.webp",
    securityLevel: "LEVEL 3 (PUBLIC)",
    relatedSpecimens: ["deinocheirus"]
  },
  {
    id: "trex-small-arms",
    date: "2026.05.23",
    category: "RESEARCH",
    title: "ティラノサウルスの「小さな前足」の謎！何のために使っていた？",
    summary: "体長12メートルを超える巨大な体に、人間とほぼ同じ長さの小さな前足。アンバランスで愛嬌すら感じるティラノサウルスの前足の使い道について、最新の説をわかりやすく解説。",
    content: `
<h4 class="article-section-title">アンバランスすぎる「小さな前足」</h4>
<p class="article-paragraph">
  史上最強の肉食恐竜ティラノサウルス。その最大の武器は、あらゆるものを噛み砕く巨大な頭部ですが、それとは対照的に、驚くほど小さな「前足（腕）」を持っています。
</p>
<p class="article-paragraph">
  その長さはわずか約1メートル。これは大人の人間の腕とほぼ同じ長さです。体長12メートルを超える巨体に対してあまりにも小さく、なんと自分の口にさえ届きません。なぜ、これほどまでに前足が小さくなってしまったのでしょうか。そして、彼らはこの前足を何に使っていたのでしょうか。
</p>

<h4 class="article-section-title">なぜ前足が小さくなったのか？</h4>
<p class="article-paragraph">
  進化の過程で前足が小さくなった最大の理由は、<strong>「頭部が巨大化しすぎたため」</strong>と考えられています。
</p>
<p class="article-paragraph">
  ティラノサウルスは進化を重ねるにつれ、強力な顎の筋肉を支えるために頭骨がどんどん大きく重くなっていきました。もし前足まで大きくて重いままだったら、重心が前に偏りすぎてしまい、二足歩行でバランスを取って走ることが難しくなります。そのため、体のバランスを保つための「重り調整」として前足が縮んでいったのです。
</p>

<h4 class="article-section-title">何に使っていた？4つの面白い仮説</h4>
<p class="article-paragraph">
  「小さすぎて役に立たなかったのでは？」と思われがちですが、骨の化石を詳しく調べると、筋肉が強く付着していた痕跡があり、小さくても非常に力強かったことが分かっています。主に以下のような使い道の仮説が提案されています。
</p>

<h5 style="color: var(--primary-neon); margin-top: 20px; margin-bottom: 10px; font-size: 16px;">1. 起き上がり補助説</h5>
<p class="article-paragraph">
  ティラノサウルスが地面に寝そべった状態から立ち上がるとき、この小さな前足で地面をぐっと押して体を支え、後ろ脚で立ち上がるための「滑り止め・スタビライザー」として使ったという説です。
</p>

<h5 style="color: var(--primary-neon); margin-top: 20px; margin-bottom: 10px; font-size: 16px;">2. 獲物のホールド（抑え込み）説</h5>
<p class="article-paragraph">
  顎で噛みついた獲物が激しく暴れた際、胸の前に引き寄せて逃げられないように、短い前足と2本の鋭い爪でガッチリとホールドしたという説です。
</p>

<h5 style="color: var(--primary-neon); margin-top: 20px; margin-bottom: 10px; font-size: 16px;">3. 切り裂き武器説</h5>
<p class="article-paragraph">
  2017年に発表された説で、超至近戦において、獲物に約10センチメートルもある鋭い爪を使って深手を負わせる「接近戦用の隠し武器」だったとする主張です。
</p>

<h5 style="color: var(--primary-neon); margin-top: 20px; margin-bottom: 10px; font-size: 16px;">4. 役に立っていなかった説（退化）</h5>
<p class="article-paragraph">
  現代のキウイやダチョウの羽のように、特に機能は持っておらず、進化の途中でただ退化していっただけであるという説です。
</p>

<h4 class="article-section-title">小さな前足の仮説まとめ</h4>
<div class="table-container" style="overflow-x: auto; margin-bottom: 20px;">
  <table style="width: 100%; border-collapse: collapse; border: 1px solid var(--panel-border); font-size: 14px;">
    <thead>
      <tr style="background-color: rgba(0, 242, 255, 0.1); border-bottom: 1px solid var(--panel-border);">
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">仮説名</th>
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">具体的な機能</th>
        <th style="padding: 10px; text-align: left;">支持される理由 / 疑問点</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid var(--panel-border);">
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">起き上がり補助</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">地面を突いて起き上がりのバランスをとる</td>
        <td style="padding: 10px;">巨体を支えるには前足が小さすぎるという意見もある</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--panel-border);">
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">獲物のホールド</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">噛みついた獲物を至近距離で固定する</td>
        <td style="padding: 10px;">骨や筋肉の構造が非常に頑丈であり、強い力が出せた証拠がある</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--panel-border);">
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">切り裂き武器</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">鋭い爪で獲物に傷を負わせる</td>
        <td style="padding: 10px;">リーチが短すぎるため、そもそも攻撃が届く場面が少ないという指摘も</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">退化プロセス</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">使われなくなり、ただ小さくなっている途中</td>
        <td style="padding: 10px;">機能がないにしては筋肉の付着痕が発達しすぎているという矛盾がある</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="article-paragraph">
  現在も決定的な結論は出ていませんが、近縁種のカルノタウルスではさらに前足が退化して指の関節すらなくなっています。このように、最強の恐竜のちょっと可愛らしい前足には、生物の「進化と適応の歴史」がぎゅっと詰まっているのです。
</p>
    `,
    image: "images/topics/trex_small_arms.webp",
    securityLevel: "LEVEL 2 (SCIENTIFIC REVISION)",
    relatedSpecimens: ["tyrannosaurus", "carnotaurus"]
  },
  {
    id: "triceratops-frill-mystery",
    date: "2026.05.23",
    category: "RESEARCH",
    title: "トリケラトプスの頭の「フリル」、実は盾（たて）じゃなかった！？",
    summary: "ティラノサウルスの攻撃を防ぐ最強のバリアだと思われていたトリケラトプスのフリル。実は防御用としては脆かった？最新の研究から浮かび上がった意外な使い道を解説。",
    content: `
<h4 class="article-section-title">誰もが信じる「最強の防具」</h4>
<p class="article-paragraph">
  3本の角と、頭の後ろに広がる巨大なうちわのような骨の飾り「フリル」。トリケラトプスの姿を特徴づけるこのフリルは、長年「宿敵ティラノサウルスの鋭い牙から首元を守るための頑丈な盾（シールド）」であると信じられてきました。
</p>
<p class="article-paragraph">
  しかし、近年の古生物学研究によって、この定説に大きな疑問が投げかけられています。実は、このフリルは防具として使うにはあまりにも不向きな構造をしていたのです。
</p>

<h4 class="article-section-title">「盾としては弱すぎる」という新事実</h4>
<p class="article-paragraph">
  フリルが盾ではなかったと考えられている主な理由は以下の3点です。
</p>
<ul style="list-style-type: square; padding-left: 20px; line-height: 1.8; margin-bottom: 20px; font-size: 14px;">
  <li><strong>骨が薄く、穴だらけだった</strong>: トリケラトプスの仲間（角竜類）の多くは、フリルの骨に「窓」のような大きな穴（窓骨）が開いており、そこは皮膚だけで覆われていました。これでは牙や角を通してしまうため、盾としての用をなしません。</li>
  <li><strong>血管がびっしり通っていた</strong>: フリルの表面には、無数の血管が通っていた痕跡（溝）が刻まれています。もしここにティラノサウルスの強烈な噛みつき攻撃を受ければ、大出血を起こしてしまい非常に危険です。</li>
  <li><strong>トリケラトプス自身のフリルも意外と薄い</strong>: トリケラトプスは穴が開いていない頑丈なフリルを持っていましたが、それでも厚みは数センチメートル程度であり、ティラノサウルスの数トンに達する咬合力（噛む力）を防ぎきることは困難でした。</li>
</ul>

<h4 class="article-section-title">フリルの真の役割は？3つの有力な説</h4>
<p class="article-paragraph">
  では、盾でなければ何のためにこれほど巨大なフリルを発達させたのでしょうか。現在、主に以下の3つの役割があったと考えられています。
</p>

<h5 style="color: var(--primary-neon); margin-top: 20px; margin-bottom: 10px; font-size: 16px;">1. 求愛とコミュニケーション（ディスプレイ説）</h5>
<p class="article-paragraph">
  現代のクジャクの羽やシカの角のように、異性に自分をアピールしたり、ライバルを威嚇するための「ディスプレイ」だったとする説です。血管が豊富に通っていたため、興奮するとフリルの色を赤や鮮やかな色に変色させ、視覚的に訴えかけていた可能性も指摘されています。
</p>

<h5 style="color: var(--primary-neon); margin-top: 20px; margin-bottom: 10px; font-size: 16px;">2. 体温調節のエアコン（熱放射説）</h5>
<p class="article-paragraph">
  巨大なフリルに風を当てることで、血管の中の血液を冷やし、体温が上がりすぎるのを防ぐ「放熱板」として機能していたという説です。ゾウの大きな耳と同じようなシステムです。
</p>

<h5 style="color: var(--primary-neon); margin-top: 20px; margin-bottom: 10px; font-size: 16px;">3. 噛むための筋肉の土台（顎筋サポート説）</h5>
<p class="article-paragraph">
  トリケラトプスは、繊維質の硬い植物をすりつぶして食べるために強力な顎（あご）を持っていました。この巨大な顎を動かすための強力な筋肉の端を、フリルに固定することで、噛む力を大幅に強化していたという説です。
</p>

<h4 class="article-section-title">フリルの役割まとめ</h4>
<div class="table-container" style="overflow-x: auto; margin-bottom: 20px;">
  <table style="width: 100%; border-collapse: collapse; border: 1px solid var(--panel-border); font-size: 14px;">
    <thead>
      <tr style="background-color: rgba(0, 242, 255, 0.1); border-bottom: 1px solid var(--panel-border);">
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">機能説</th>
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">メリット・目的</th>
        <th style="padding: 10px; text-align: left;">現代の生物での例</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid var(--panel-border);">
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">ディスプレイ</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">異性へのアピール、強さの誇示、変色による威嚇</td>
        <td style="padding: 10px;">クジャクの飾り羽、カメレオンの皮膚色変化</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--panel-border);">
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">体温調節</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">風を受けて血液を冷やすラジエーター効果</td>
        <td style="padding: 10px;">アフリカゾウの大きな耳</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">咀嚼（そしゃく）補助</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">顎を動かす巨大な筋肉のアンカー（固定場所）</td>
        <td style="padding: 10px;">現代の多くの哺乳類（頭頂部の骨の隆起）</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="article-paragraph">
  もちろん、完全に防御の役に立たなかったわけではなく、結果的に首を守る防護壁になったことも事実でしょう。しかし、トリケラトプスのシンボルであるフリルは、ただ戦うためだけのものではなく、恋をしたり、暑さをしのいだり、食事をしたりといった彼らの「日常の暮らし」を支える多機能マルチツールだったのです。
</p>
    `,
    image: "images/topics/triceratops_frill.webp",
    securityLevel: "LEVEL 2 (SCIENTIFIC REVISION)",
    relatedSpecimens: ["triceratops", "protoceratops", "styracosaurus"]
  },
  {
    id: "stegosaurus-plates-mystery",
    date: "2026.05.23",
    category: "RESEARCH",
    title: "ステゴサウルスの背中の「プレート（背板）」は何のためにあるの？",
    summary: "背中に交互に並ぶ大きな五角形の板。ステゴサウルスのシンボルであるこの板は、身を守るヨロイだったのか、それとも別の役割があったのか？最新の研究を優しく解説。",
    content: `
<h4 class="article-section-title">背中にそびえる奇妙な板</h4>
<p class="article-paragraph">
  背中から尾にかけて、五角形の大きな骨の板が互い違いにずらりと並ぶステゴサウルス。そのユニークな姿は、ティラノサウルスやトリケラトプスと並んで世界中で大人気です。
</p>
<p class="article-paragraph">
  この特徴的な「背中の板」について、多くの人は「肉食恐竜アロサウルスなどの攻撃から身を守るためのヨロイ（防具）」だと思っているのではないでしょうか。しかし、この板もトリケラトプスのフリルと同様、実は盾や鎧としてはあまり役に立たなかったことが分かっています。では、何のためにこの板があったのでしょうか。
</p>

<h4 class="article-section-title">実は骨組みと繋がっていなかった！</h4>
<p class="article-paragraph">
  復元された骨格標本を見ると、板は背骨からしっかり生えているように見えますが、実は<strong>背骨とは一切繋がっていません。</strong>
</p>
<p class="article-paragraph">
  この板は、ワニの背中のウロコなどと同じ「皮骨（ひこつ）」と呼ばれる、皮膚の中で発達した骨です。そのため、生きている間は背骨に固定されておらず、皮膚で支えられて立っているだけでした。さらに、板の内部はスポンジのようにスカスカで、表面には無数の血管が通っていました。もしアロサウルスなどの鋭い牙で噛まれれば、板は簡単に砕けて大出血してしまうため、防具としては非常に危険な構造だったのです。
</p>

<h4 class="article-section-title">最新研究が明かす3つの役割</h4>
<p class="article-paragraph">
  現在、ステゴサウルスの板には以下のような重要な役割があったと考えられています。
</p>

<h5 style="color: var(--primary-neon); margin-top: 20px; margin-bottom: 10px; font-size: 16px;">1. 体温を調節するエアコン（ラジエーター説）</h5>
<p class="article-paragraph">
  現在最も有力なのが、<strong>体温調節</strong>に使われていたという説です。
</p>
<p class="article-paragraph">
  ステゴサウルスは体が大きく、食べた植物を消化する際に胃の中で大量の発酵熱が発生します。そのため、熱が体内にこもりやすい課題を抱えていました。風通しの良い並び方をした背中の板に風を当てることで、板の中を通る血液を効率よく冷やし、体温の上昇を防いでいたと考えられています。逆に、朝方は太陽光を板に当てて体温を素早く上げる「ソーラーパネル」の役割も果たしていたようです。
</p>

<h5 style="color: var(--primary-neon); margin-top: 20px; margin-bottom: 10px; font-size: 16px;">2. 自分を大きく見せる（威嚇・ディスプレイ説）</h5>
<p class="article-paragraph">
  板が上向きに並んでいることで、肉食恐竜から見たときに実際の体格よりも遥かに巨大な生き物に見える効果（威嚇効果）がありました。また、血管が豊富だったことを利用し、怒ったときや興奮したときに一時的に血液を送り込み、板の皮膚を赤くフラッシング（変色）させて外敵を驚かせていた可能性も指摘されています。
</p>

<h5 style="color: var(--primary-neon); margin-top: 20px; margin-bottom: 10px; font-size: 16px;">3. 仲間を見分ける（種識別説）</h5>
<p class="article-paragraph">
  ステゴサウルスの仲間には、背中に板ではなく「長いトゲ（スパイク）」を持つ種（ケントロサウルスなど）や、「丸っこい板」を持つ種（ウエルホサウルスなど）がいました。うっそうとした森の中でも、背中の飾りを見れば一目で「自分の仲間（同じ種）」であることを見分けられるように発達したという説です。
</p>

<h4 class="article-section-title">ステゴサウルスの板とトゲの役割比較</h4>
<div class="table-container" style="overflow-x: auto; margin-bottom: 20px;">
  <table style="width: 100%; border-collapse: collapse; border: 1px solid var(--panel-border); font-size: 14px;">
    <thead>
      <tr style="background-color: rgba(0, 242, 255, 0.1); border-bottom: 1px solid var(--panel-border);">
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">部位</th>
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">特徴</th>
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">主な役割</th>
        <th style="padding: 10px; text-align: left;">防御・武器としての実用性</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid var(--panel-border);">
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">背中の板</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">薄く、血管が多く通る。骨組みとは繋がっていない。</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">体温調節（エアコン）、威嚇用のディスプレイ</td>
        <td style="padding: 10px;">低い（攻撃を受けると破損・大出血の危険）</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">尾のトゲ（サゴマイザー）</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">頑丈で鋭く、尾の強力な筋肉と連動する。</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">肉食恐竜への直接攻撃（自己防衛）</td>
        <td style="padding: 10px; font-weight: bold; color: var(--alert-neon);">極めて高い（アロサウルスの骨に突き刺さった痕跡も発見）</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="article-paragraph">
  なお、ステゴサウルスの本当の武器は背中の板ではなく、尾の先にある4本の鋭いトゲ（通称：サゴマイザー）でした。背中の板でエアコンのように体温を調節し、見た目を大きく見せて威嚇しつつ、いざとなったら尾のトゲで一撃を食らわせる——これが、ステゴサウルスが編み出した見事な生存戦略だったのです。
</p>
    `,
    image: "images/topics/stegosaurus_plates.webp",
    securityLevel: "LEVEL 2 (SCIENTIFIC REVISION)",
    relatedSpecimens: ["stegosaurus", "kentrosaurus", "wuerhosaurus"]
  },
  {
    id: "not-dinosaurs-truth",
    date: "2026.05.23",
    category: "RESEARCH_HISTORY",
    title: "プテラノドンやモササウルスは恐竜じゃないって本当！？",
    summary: "図鑑や映画では一緒に「恐竜」として紹介されがちな翼竜や首長竜。しかし学術的には恐竜ではありません。誰かに話したくなる、簡単で正しい恐竜の見分け方を伝授！",
    content: `
<h4 class="article-section-title">図鑑の「主役たち」が恐竜じゃない？</h4>
<p class="article-paragraph">
  「恐竜図鑑」を開くと、ティラノサウルスやトリケラトプスと一緒に、空を飛ぶプテラノドンや、海を泳ぐ首長竜のフタバサウルス、海の怪物モササウルスが当たり前のように紹介されています。
</p>
<p class="article-paragraph">
  しかし、古生物学の分類では、<strong>プテラノドンもフタバサウルスもモササウルスも、すべて「恐竜」ではありません。</strong>
</p>
<p class="article-paragraph">
  「えっ、大昔の巨大な爬虫類はみんな恐竜じゃないの？」と思われるかもしれませんが、実は恐竜を恐竜たらしめる、非常にシンプルで明確な「境界線」が存在するのです。
</p>

<h4 class="article-section-title">決定的な違いは「脚の生え方」にあり！</h4>
<p class="article-paragraph">
  生物学的に、恐竜は「直立歩行に適した骨盤と脚の構造を持つグループ」と定義されています。一番分かりやすい見分け方は、<strong>胴体から脚がどのように生えているか</strong>です。
</p>
<ul style="list-style-type: square; padding-left: 20px; line-height: 1.8; margin-bottom: 20px; font-size: 14px;">
  <li><strong style="color: var(--primary-neon);">恐竜の生え方</strong>: 胴体の直下（真下）に脚がまっすぐ生えています（人間、犬、鳥などと同じ）。これにより、巨大な体重をしっかり支え、陸上を効率よく走り回ることができました。</li>
  <li><strong style="color: var(--primary-neon);">その他の爬虫類（トカゲ・ワニなど）の生え方</strong>: 脚が一度胴体の横に突き出してから、L字型に曲がって地面についています（いわゆる「這う」姿勢）。</li>
</ul>
<p class="article-paragraph">
  このルールを当てはめると、空を飛ぶグループや、海を泳ぐために脚がヒレになったグループは、恐竜の定義から外れることになります。
</p>

<h4 class="article-section-title">恐竜と間違えられやすい「3大爬虫類」</h4>

<h5 style="color: var(--primary-neon); margin-top: 20px; margin-bottom: 10px; font-size: 16px;">1. 翼竜（よくりゅう）</h5>
<p class="article-paragraph">
  代表例：<strong>プテラノドン</strong>、<strong>ケツァルコアトルス</strong><br>
  空を飛ぶことに特化した爬虫類です。恐竜とは共通の先祖から枝分かれした「いとこ」のような近い関係ですが、脚は胴体の真下になく、直立歩行はできません。薬指が非常に長く伸び、そこに皮膚の膜が張って翼になっています。
</p>

<h5 style="color: var(--primary-neon); margin-top: 20px; margin-bottom: 10px; font-size: 16px;">2. 首長竜（くびながりゅう）</h5>
<p class="article-paragraph">
  代表例：<strong>フタバサウルス（エルスモサウルス類）</strong>、<strong>プレシオサウルス</strong><br>
  海で暮らしていた、首の長い大型爬虫類です。恐竜とは全く異なる系統から進化しました。4つの四肢がオールのような「ヒレ（フリッパー）」に変化しており、水中を羽ばたくようにして泳いでいました。
</p>

<h5 style="color: var(--primary-neon); margin-top: 20px; margin-bottom: 10px; font-size: 16px;">3. モササウルス類</h5>
<p class="article-paragraph">
  代表例：<strong>モササウルス</strong>、<strong>ティロサウルス</strong><br>
  白亜紀後期の海に君臨した海の頂点捕食者です。彼らは首長竜とも異なり、系統的には現代の「オオトカゲ」や「ヘビ」に極めて近いグループです。つまり、「海に適応して巨大化したトカゲの王様」であり、やはり恐竜ではありません。
</p>

<h4 class="article-section-title">中生代の巨大爬虫類の分類まとめ</h4>
<div class="table-container" style="overflow-x: auto; margin-bottom: 20px;">
  <table style="width: 100%; border-collapse: collapse; border: 1px solid var(--panel-border); font-size: 14px;">
    <thead>
      <tr style="background-color: rgba(0, 242, 255, 0.1); border-bottom: 1px solid var(--panel-border);">
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">グループ名</th>
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">主な生息場所</th>
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">脚の構造・姿勢</th>
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">恐竜か？</th>
        <th style="padding: 10px; text-align: left;">代表的な古生物</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid var(--panel-border);">
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">恐竜</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">陸上（一部水辺）</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">胴体の真下にまっすぐ生える（直立）</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">YES</td>
        <td style="padding: 10px;">ティラノサウルス、トリケラトプス</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--panel-border);">
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">翼竜</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">空中</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">横に這う（前肢は翼に変形）</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); color: var(--alert-neon);">NO</td>
        <td style="padding: 10px;">プテラノドン、ケツァルコアトルス</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--panel-border);">
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">首長竜</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">海中</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">ヒレ状に変化（水中での推進用）</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); color: var(--alert-neon);">NO</td>
        <td style="padding: 10px;">フタバサウルス、プレシオサウルス</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">モササウルス類</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">海中</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">ヒレ状に変化（トカゲに近い骨格）</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); color: var(--alert-neon);">NO</td>
        <td style="padding: 10px;">モササウルス、ティロサウルス</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="article-paragraph">
  それでも図鑑に一緒に載っているのは、彼らが同じ「中生代」という恐竜の黄金時代に生き、お互いに関わり合いながらダイナミックな生態系を作っていたからです。恐竜ではない空と海の覇者たちも含めて、中生代の地球はまさに「巨大爬虫類たちの楽園」だったのです。
</p>
    `,
    image: "images/topics/not_dinosaurs.webp",
    securityLevel: "LEVEL 2 (SCIENTIFIC REVISION)",
    relatedSpecimens: ["pteranodon", "futabasaurus", "mosasaurus"]
  },
  {
    id: "dinosaur-eras-guide",
    date: "2026.05.24",
    category: "RESEARCH",
    title: "3分でわかる恐竜の歴史！「三畳紀・ジュラ紀・白亜紀」ってどんな時代？",
    summary: "恐竜たちが生きた約1億6000万年間（中生代）。大きく分かれる3つの時代「三畳紀」「ジュラ紀」「白亜紀」の地球環境の変化と恐竜たちの進化をシンプルに解説。",
    content: `
<h4 class="article-section-title">恐竜たちが生きた「中生代」とは？</h4>
<p class="article-paragraph">
  恐竜たちが地球上に現れ、そして絶滅するまでの期間は、地質学で<strong>「中生代（ちゅうせいだい）」</strong>と呼ばれています。その期間は約1億6000万年間にも及び、人類の歴史（約30万年）とは比べものにならないほど長い繁栄の時代でした。
</p>
<p class="article-paragraph">
  この中生代は、地球環境や気候の変化、そして生物の移り変わりによって、大きく<strong>「三畳紀（さんじょうき）」</strong><strong>「ジュラ紀（じゅらき）」</strong><strong>「白亜紀（はくあき）」</strong>の3つの時代に区分されています。それぞれの時代で、地球と恐竜たちがどのように姿を変えていったのかをシンプルに追ってみましょう。
</p>

<img src="images/topics/dinosaur_timeline.webp" class="topic-detail-img" alt="中生代の年代表" style="width: 66.7%; margin: 0 auto 30px auto;">

<h4 class="article-section-title">1. 三畳紀：恐竜の誕生と過酷な砂漠の世界</h4>
<p class="article-paragraph">
  今から約2億5190万年前〜2億130万年前までの時代です。
</p>
<p class="article-paragraph">
  当時の地球は、すべての陸地が合体した「パンゲア」と呼ばれるひとつの超巨大大陸しかありませんでした。大陸の内部には海の湿った風が届かないため、地球の大部分は極めて乾燥した広大な砂漠となっていました。
</p>
<p class="article-paragraph">
  恐竜はこの時代の初期（約2億3000万年前）に誕生しました。しかし当時はまだ、全長1〜3メートル程度の小さくすばしっこいトカゲのような存在でした。当時の陸上は、ワニの祖先や巨大な両生類、哺乳類の祖先に近いグループが支配しており、恐竜たちは彼らの影でひっそりと暮らす弱者だったのです。
</p>

<h4 class="article-section-title">2. ジュラ紀：温暖化と恐竜の「超巨大化」</h4>
<p class="article-paragraph">
  今から約2億130万年前〜1億4500万年前までの時代です。
</p>
<p class="article-paragraph">
  超大陸パンゲアが徐々に分裂し始め、陸地の間に海が入り込むことで、地球全体に湿った風が行き渡るようになりました。気候は温暖で雨が多くなり、地表には巨大なシダ植物や針葉樹などの大森林が形成されました。
</p>
<p class="article-paragraph">
  豊富な植物資源のおかげで、草食恐竜たちは驚異的な「超巨大化」を遂げました。ブラキオサウルスやディプロドクスといった、全長20〜30メートルに達する「竜脚類」が全盛期を迎えます。そして、それらを捕食するためにアロサウルスなどの大型肉食恐竜も出現し、まさに恐竜たちが地球の絶対的な主役に躍り出ました。
</p>

<h4 class="article-section-title">3. 白亜紀：進化の多様性とドラマチックな最期</h4>
<p class="article-paragraph">
  今から約1億4500万年前〜6600万年前までの時代です。恐竜の歴史の中で最も長く続いた時代（約8000万年間）でもあります。
</p>
<p class="article-paragraph">
  大陸の分裂がさらに進み、現代に近い世界地図の形へと近づいていきました。陸地がバラバラに分断されたことで、それぞれの地域で独自の進化が起こり、恐竜の多様性はピークを迎えます。また、この時代に初めて「花を咲かせる植物（被子植物）」が登場し、昆虫や恐竜の生態系も大きく変化しました。
</p>
<p class="article-paragraph">
  ティラノサウルスやトリケラトプス、アンキロサウルスなど、現在でも高い知名度を誇る人気恐竜の多くはこの白亜紀の末期に登場しました。しかし約6600万年前、直径約10キロメートルの小惑星がメキシコ付近に衝突。急激な気候寒冷化により、鳥類を除くすべての恐竜たちが突如として絶滅を迎えたのです。
</p>

<h4 class="article-section-title">恐竜時代の3大区分まとめ</h4>
<div class="table-container" style="overflow-x: auto; margin-bottom: 20px;">
  <table style="width: 100%; border-collapse: collapse; border: 1px solid var(--panel-border); font-size: 14px;">
    <thead>
      <tr style="background-color: rgba(0, 242, 255, 0.1); border-bottom: 1px solid var(--panel-border);">
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">時代名</th>
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">おおよその期間</th>
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">地球の環境・気候</th>
        <th style="padding: 10px; border-right: 1px solid var(--panel-border); text-align: left;">恐竜たちの特徴</th>
        <th style="padding: 10px; text-align: left;">代表的な恐竜</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid var(--panel-border);">
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">三畳紀</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">約2.5億〜2.0億年前</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">超大陸パンゲア、極めて乾燥した砂漠気候</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">恐竜の誕生。まだ小さく目立たない存在。</td>
        <td style="padding: 10px;">エオラプトル、ヘレラサウルス</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--panel-border);">
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">ジュラ紀</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">約2.0億〜1.45億年前</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">大陸が分裂開始、温暖湿潤で広大な森林が広がる</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">恐竜の黄金期。植物食恐竜の超巨大化が進行。</td>
        <td style="padding: 10px;">ブラキオサウルス、アロサウルス</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border); font-weight: bold; color: var(--primary-neon);">白亜紀</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">約1.45億〜6600万年前</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">大陸がさらに分裂、温暖な気候。被子植物の出現</td>
        <td style="padding: 10px; border-right: 1px solid var(--panel-border);">進化の頂点（多様化）。末期に小惑星衝突で絶滅。</td>
        <td style="padding: 10px;">ティラノサウルス、トリケラトプス</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="article-paragraph">
  恐竜たちの歴史は、地球環境の劇的な変化に適応し続けた進化のストーリーです。時代の名前とそれぞれの環境を知ることで、目の前にある化石が「どのような世界で暮らしていたのか」をより深くリアルに感じ取ることができるようになります。
</p>
    `,
    image: "images/topics/dinosaur_eras.webp",
    securityLevel: "LEVEL 2 (SCIENTIFIC REVISION)",
    relatedSpecimens: ["eoraptor", "allosaurus", "triceratops"]
  }
];
