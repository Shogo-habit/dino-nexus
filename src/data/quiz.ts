export interface QuizSpecimen {
    id: string;
    name: string;
    zoom: number;
    originX: string;
    originY: string;
    featureName: string; // クイズでフォーカスする特徴的な部位の名称
    difficulty: 'beginner' | 'intermediate' | 'advanced' | 'master';
}

export const QUIZ_SPECIMENS: QuizSpecimen[] = [
    {
        id: "tyrannosaurus",
        name: "ティラノサウルス",
        zoom: 3.5,
        originX: "18%",
        originY: "48%",
        featureName: "骨を噛み砕くための強大な顎と鋭い牙",
        difficulty: "beginner"
    },
    {
        id: "triceratops",
        name: "トリケラトプス",
        zoom: 3.5,
        originX: "15%",
        originY: "50%",
        featureName: "敵を威嚇し自衛するための強靭な角と襟飾り（フリル）",
        difficulty: "beginner"
    },
    {
        id: "spinosaurus",
        name: "スピノサウルス",
        zoom: 3.8,
        originX: "50%",
        originY: "45%",
        featureName: "背中にそびえる大きな帆（神経棘）",
        difficulty: "beginner"
    },
    {
        id: "stegosaurus",
        name: "ステゴサウルス",
        zoom: 3.8,
        originX: "52%",
        originY: "40%",
        featureName: "背中に対になって並ぶ独特な骨板",
        difficulty: "beginner"
    },
    {
        id: "ankylosaurus",
        name: "アンキロサウルス",
        zoom: 3.8,
        originX: "90%",
        originY: "50%",
        featureName: "骨を砕く破壊力を持つ尾の先端のハンマー",
        difficulty: "beginner"
    },
    {
        id: "velociraptor",
        name: "ヴェロキラプトル",
        zoom: 4.0,
        originX: "45%",
        originY: "60%",
        featureName: "獲物の急所を執拗に狙うための後肢の巨大な鉤爪",
        difficulty: "beginner"
    },
    {
        id: "allosaurus",
        name: "アロサウルス",
        zoom: 3.5,
        originX: "20%",
        originY: "45%",
        featureName: "目の上にある小さな角状のコブと捕食用の頭部",
        difficulty: "beginner"
    },
    {
        id: "brachiosaurus",
        name: "ブラキオサウルス",
        zoom: 3.8,
        originX: "18%",
        originY: "20%",
        featureName: "高所の植物を食べるための極めて長い首と小さな頭部",
        difficulty: "beginner"
    },
    {
        id: "mosasaurus",
        name: "モササウルス",
        zoom: 3.5,
        originX: "20%",
        originY: "52%",
        featureName: "カメの甲羅をも砕く強力な咬合力を持つ頭部",
        difficulty: "beginner"
    },
    {
        id: "iguanodon",
        name: "イグアノドン",
        zoom: 3.8,
        originX: "30%",
        originY: "58%",
        featureName: "自衛武器として使われた親指の鋭いスパイク",
        difficulty: "beginner"
    },
    {
        id: "parasaurolophus",
        name: "パラサウロロフス",
        zoom: 3.8,
        originX: "22%",
        originY: "42%",
        featureName: "音を響かせて仲間と通信するための後方に伸びるトサカ",
        difficulty: "beginner"
    },
    {
        id: "pteranodon",
        name: "プテラノドン",
        zoom: 3.5,
        originX: "35%",
        originY: "45%",
        featureName: "飛行時の舵やディスプレイの役割を持った頭部後方のトサカ",
        difficulty: "beginner"
    },
    {
        id: "quetzalcoatlus",
        name: "ケツァルコアトルス",
        zoom: 3.5,
        originX: "25%",
        originY: "40%",
        featureName: "地上で獲物を捕らえるための非常に長いクチバシ",
        difficulty: "beginner"
    },
    {
        id: "therizinosaurus",
        name: "テリジノサウルス",
        zoom: 3.8,
        originX: "28%",
        originY: "52%",
        featureName: "長さ1メートルに達する史上最大級の大鎌のような前肢の爪",
        difficulty: "beginner"
    },
    {
        id: "pachycephalosaurus",
        name: "パキケファロサウルス",
        zoom: 3.8,
        originX: "18%",
        originY: "42%",
        featureName: "頭突きやディスプレイに使われた厚さ25cmに達する分厚い頭骨",
        difficulty: "beginner"
    }
];
