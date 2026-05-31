// ============================================================================
// Music Theory Test — 問題データ
// ----------------------------------------------------------------------------
// 章（chapter）→ セクション（section）→ 問題（Question）の階層で管理します。
// 章を追加するときは下部の CHAPTERS / SECTIONS に追記し、questions 配列へ
// 問題を足してください。問題追加の詳細は CLAUDE.md を参照。
// ============================================================================

export interface Question {
  id: string;
  /** 所属セクションID（SECTIONS の id と一致させる） */
  section: string;
  question: string;
  /** 必ず3択 */
  choices: string[];
  /** 正解の choices インデックス（0-2） */
  correctIndex: number;
  explanation: string;
}

export interface Section {
  id: string;
  /** 所属章ID */
  chapter: string;
  title: string;
  description: string;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
}

export const CHAPTERS: Chapter[] = [
  {
    id: "ch1",
    title: "第1章: 基礎理論",
    description: "音名・音程・調・音階の基礎を固める",
  },
];

export const SECTIONS: Section[] = [
  {
    id: "s1-intervals",
    chapter: "ch1",
    title: "音名と音程",
    description: "音の名前、半音数、音程の数え方",
  },
  {
    id: "s2-scales",
    chapter: "ch1",
    title: "調と音階",
    description: "調号・五度圏・長音階と短音階",
  },
  {
    id: "s3-mixed",
    chapter: "ch1",
    title: "総合問題",
    description: "音程と調の知識を組み合わせた応用",
  },
];

export const questions: Question[] = [
  // ==========================================================================
  // セクション1: 音名と音程（15問）
  // ==========================================================================
  {
    id: "s1-q01",
    section: "s1-intervals",
    question: "CとGの音程は？",
    choices: ["完全4度", "完全5度", "長6度"],
    correctIndex: 1,
    explanation:
      "C→G は半音7つ分。完全5度です。五度圏で隣り合う、もっとも協和的な関係。",
  },
  {
    id: "s1-q02",
    section: "s1-intervals",
    question: "F# の異名同音は？",
    choices: ["Eb", "Gb", "Ab"],
    correctIndex: 1,
    explanation:
      "F# と Gb は同じ音高（異名同音）。1つの黒鍵が状況に応じて2つの名前を持ちます。",
  },
  {
    id: "s1-q03",
    section: "s1-intervals",
    question: "長3度の半音数は？",
    choices: ["3", "4", "5"],
    correctIndex: 1,
    explanation:
      "長3度は半音4つ。C から E までが長3度の代表例です。短3度なら半音3つ。",
  },
  {
    id: "s1-q04",
    section: "s1-intervals",
    question: "完全5度の転回音程は？",
    choices: ["完全4度", "完全5度", "短4度"],
    correctIndex: 0,
    explanation:
      "転回音程は度数を9から引きます（5→4）。完全音程は転回しても完全のままなので完全4度。",
  },
  {
    id: "s1-q05",
    section: "s1-intervals",
    question: "B と F の音程は？",
    choices: ["完全5度", "減5度", "増4度"],
    correctIndex: 1,
    explanation:
      "B-F は半音6つで減5度（トライトーン）。逆に F から B へ取ると増4度になります。",
  },
  {
    id: "s1-q06",
    section: "s1-intervals",
    question: "シャープ（#）が音に与える意味は？",
    choices: ["半音上げる", "半音下げる", "全音上げる"],
    correctIndex: 0,
    explanation:
      "シャープは音を半音（最小単位）上げる変化記号。F に付けば F# になります。",
  },
  {
    id: "s1-q07",
    section: "s1-intervals",
    question: "フラット（b）が音に与える意味は？",
    choices: ["半音上げる", "半音下げる", "全音下げる"],
    correctIndex: 1,
    explanation:
      "フラットは音を半音下げる変化記号。B に付けば Bb になります。",
  },
  {
    id: "s1-q08",
    section: "s1-intervals",
    question: "ナチュラル（♮）の意味は？",
    choices: ["半音上げる", "もとの音に戻す", "オクターブ上げる"],
    correctIndex: 1,
    explanation:
      "ナチュラルは # や b を打ち消し、その音をもとの幹音（白鍵）の高さに戻します。",
  },
  {
    id: "s1-q09",
    section: "s1-intervals",
    question: "短3度の半音数は？",
    choices: ["2", "3", "4"],
    correctIndex: 1,
    explanation:
      "短3度は半音3つ。A から C までが短3度。長3度（半音4つ）より半音1つ狭い音程です。",
  },
  {
    id: "s1-q10",
    section: "s1-intervals",
    question: "完全8度（オクターブ）の半音数は？",
    choices: ["10", "11", "12"],
    correctIndex: 2,
    explanation:
      "オクターブは半音12個分。C から1オクターブ上の C まで。半音12個で音名が一巡します。",
  },
  {
    id: "s1-q11",
    section: "s1-intervals",
    question: "次のうち協和音程はどれ？",
    choices: ["長2度", "完全5度", "短7度"],
    correctIndex: 1,
    explanation:
      "完全5度は完全協和音程。長2度や短7度は不協和音程に分類されます。",
  },
  {
    id: "s1-q12",
    section: "s1-intervals",
    question: "次のうち不協和音程はどれ？",
    choices: ["完全4度", "長3度", "長7度"],
    correctIndex: 2,
    explanation:
      "長7度は鋭い不協和音程。長3度は協和音程、完全4度は条件によって協和とされます。",
  },
  {
    id: "s1-q13",
    section: "s1-intervals",
    question: "複音程の9度は、どう分解できる？",
    choices: ["2度＋オクターブ", "3度＋オクターブ", "ただの2度の別名"],
    correctIndex: 0,
    explanation:
      "9度はオクターブを超える複音程。9−7＝2 で、2度にオクターブを足したものと考えます。",
  },
  {
    id: "s1-q14",
    section: "s1-intervals",
    question: "Db の異名同音は？",
    choices: ["C#", "D#", "B#"],
    correctIndex: 0,
    explanation:
      "Db と C# は同じ音高。D を半音下げても、C を半音上げても同じ黒鍵にたどり着きます。",
  },
  {
    id: "s1-q15",
    section: "s1-intervals",
    question: "長6度の半音数は？",
    choices: ["8", "9", "10"],
    correctIndex: 1,
    explanation:
      "長6度は半音9つ。C から A まで。短6度（半音8つ）より半音1つ広い音程です。",
  },

  // ==========================================================================
  // セクション2: 調と音階（15問）
  // ==========================================================================
  {
    id: "s2-q01",
    section: "s2-scales",
    question: "# が3つ付く長調は？",
    choices: ["D major", "A major", "E major"],
    correctIndex: 1,
    explanation:
      "シャープ系の調号は五度圏を右回り。F#・C#・G# の3つで A major になります。",
  },
  {
    id: "s2-q02",
    section: "s2-scales",
    question: "C minor の平行調は？",
    choices: ["Eb major", "Ab major", "Bb major"],
    correctIndex: 0,
    explanation:
      "短調の平行調は短3度上の長調。C から短3度上は Eb なので Eb major。調号を共有します。",
  },
  {
    id: "s2-q03",
    section: "s2-scales",
    question: "和声的短音階（ハーモニックマイナー）の特徴は？",
    choices: ["第6音を半音上げる", "第7音を半音上げる", "第5音を半音上げる"],
    correctIndex: 1,
    explanation:
      "自然的短音階の第7音を半音上げたものが和声的短音階。主音へ向かう導音を作るためです。",
  },
  {
    id: "s2-q04",
    section: "s2-scales",
    question: "F major の調号は？",
    choices: ["Bb 1つ", "Bb・Eb の2つ", "なし"],
    correctIndex: 0,
    explanation:
      "F major はフラット系で Bb が1つ。フラット系の調号は五度圏を左回りに増えます。",
  },
  {
    id: "s2-q05",
    section: "s2-scales",
    question: "D major の近親調でないものは？",
    choices: ["B minor", "A major", "Eb major"],
    correctIndex: 2,
    explanation:
      "近親調は属調(A)・下属調(G)・平行調(Bm)など調号が近いもの。Eb major は遠隔調で該当しません。",
  },
  {
    id: "s2-q06",
    section: "s2-scales",
    question: "シャープ系の調号が増える順番は？",
    choices: ["F C G D A E B", "B E A D G C F", "C D E F G A B"],
    correctIndex: 0,
    explanation:
      "# は F→C→G→D→A→E→B の順に増えます（5度ずつ上行）。フラットはこの逆順です。",
  },
  {
    id: "s2-q07",
    section: "s2-scales",
    question: "フラット系の調号が増える順番は？",
    choices: ["F C G D A E B", "B E A D G C F", "G F E D C B A"],
    correctIndex: 1,
    explanation:
      "b は B→E→A→D→G→C→F の順に増えます。シャープの順番をちょうど逆から読んだ並びです。",
  },
  {
    id: "s2-q08",
    section: "s2-scales",
    question: "G major の調号は？",
    choices: ["なし", "F# 1つ", "F#・C# の2つ"],
    correctIndex: 1,
    explanation:
      "G major はシャープ系で F# が1つだけ。五度圏で C major の右隣に位置する調です。",
  },
  {
    id: "s2-q09",
    section: "s2-scales",
    question: "旋律的短音階（メロディックマイナー）の上行形の特徴は？",
    choices: [
      "第6音と第7音を半音上げる",
      "第7音だけ半音上げる",
      "自然的短音階と同じ",
    ],
    correctIndex: 0,
    explanation:
      "上行形では第6音・第7音をともに半音上げ、和声的短音階の増2度の跳躍をなめらかにします。",
  },
  {
    id: "s2-q10",
    section: "s2-scales",
    question: "旋律的短音階の下行形は何と同じ？",
    choices: ["自然的短音階", "和声的短音階", "上行形と同じ"],
    correctIndex: 0,
    explanation:
      "古典的な旋律的短音階は、下行では第6・第7音を元に戻し、自然的短音階と同じになります。",
  },
  {
    id: "s2-q11",
    section: "s2-scales",
    question: "A minor の平行調は？",
    choices: ["C major", "G major", "F major"],
    correctIndex: 0,
    explanation:
      "A minor の平行調は短3度上の C major。どちらも調号にシャープ・フラットがありません。",
  },
  {
    id: "s2-q12",
    section: "s2-scales",
    question: "E major の調号に付くシャープの数は？",
    choices: ["3つ", "4つ", "5つ"],
    correctIndex: 1,
    explanation:
      "E major は F#・C#・G#・D# の4つ。五度圏で A major（3つ）の1つ右隣にあります。",
  },
  {
    id: "s2-q13",
    section: "s2-scales",
    question: "五度圏で C の右隣（時計回り）にある調は？",
    choices: ["G major", "F major", "D major"],
    correctIndex: 0,
    explanation:
      "右回りは5度上＝シャープが増える方向。C の右隣は G major（F# が1つ）です。",
  },
  {
    id: "s2-q14",
    section: "s2-scales",
    question: "五度圏で C の左隣（反時計回り）にある調は？",
    choices: ["G major", "F major", "Bb major"],
    correctIndex: 1,
    explanation:
      "左回りは5度下＝フラットが増える方向。C の左隣は F major（Bb が1つ）です。",
  },
  {
    id: "s2-q15",
    section: "s2-scales",
    question: "Bb major の調号は？",
    choices: ["Bb・Eb の2つ", "Bb 1つ", "Bb・Eb・Ab の3つ"],
    correctIndex: 0,
    explanation:
      "Bb major はフラット系で Bb・Eb の2つ。フラットの順番 B→E どおりに増えています。",
  },

  // ==========================================================================
  // セクション3: 総合問題（10問）
  // ==========================================================================
  {
    id: "s3-q01",
    section: "s3-mixed",
    question: "C major の音階内でトライトーンを作る2音は？",
    choices: ["F と B", "C と G", "D と A"],
    correctIndex: 0,
    explanation:
      "C major のダイアトニック音だけで作れるトライトーン（減5度）は F-B。属七和音 G7 の核です。",
  },
  {
    id: "s3-q02",
    section: "s3-mixed",
    question: "G7（ドミナント7th）の構成音は？",
    choices: ["G-B-D-F", "G-B-D-F#", "G-Bb-D-F"],
    correctIndex: 0,
    explanation:
      "属七は長三和音＋短7度。G-B-D に短7度の F を重ねて G-B-D-F。F# だと長7度で別の和音です。",
  },
  {
    id: "s3-q03",
    section: "s3-mixed",
    question: "C major のサブドミナント（IV）の和音は？",
    choices: ["F major", "G major", "A minor"],
    correctIndex: 0,
    explanation:
      "第4音 F を根音とする IV がサブドミナント。C major では F-A-C の F major です。",
  },
  {
    id: "s3-q04",
    section: "s3-mixed",
    question: "長調の主要三和音（スリーコード）の組み合わせは？",
    choices: ["I・IV・V", "I・ii・iii", "I・iii・vi"],
    correctIndex: 0,
    explanation:
      "トニック(I)・サブドミナント(IV)・ドミナント(V)が主要三和音。多くの曲の骨格になります。",
  },
  {
    id: "s3-q05",
    section: "s3-mixed",
    question: "C major 音階の第7音（導音）は？",
    choices: ["B", "A", "C"],
    correctIndex: 0,
    explanation:
      "導音は主音の半音下にある第7音。C major では B で、主音 C へ強く引きつけられます。",
  },
  {
    id: "s3-q06",
    section: "s3-mixed",
    question: "増4度と減5度の関係は？",
    choices: [
      "異名同音（同じ半音数）",
      "まったく別の音程",
      "オクターブ違い",
    ],
    correctIndex: 0,
    explanation:
      "どちらも半音6つのトライトーン。綴り（度数）が違うだけで響きの幅は同じ異名同音音程です。",
  },
  {
    id: "s3-q07",
    section: "s3-mixed",
    question: "C minor におけるナポリの6度（bII）の根音は？",
    choices: ["Db", "D", "Eb"],
    correctIndex: 0,
    explanation:
      "ナポリの和音は第2音を半音下げた bII。C minor では Db を根音とする Db major 三和音です。",
  },
  {
    id: "s3-q08",
    section: "s3-mixed",
    question: "A minor で和声的短音階を使うとき、ドミナント（V）の和音は？",
    choices: ["E major", "E minor", "G major"],
    correctIndex: 0,
    explanation:
      "和声的短音階は第7音 G を G# に上げるため、V は E-G#-B の E major になり導音が生まれます。",
  },
  {
    id: "s3-q09",
    section: "s3-mixed",
    question: "平行調どうし（例: C major と A minor）が共有するものは？",
    choices: ["調号", "主音", "導音"],
    correctIndex: 0,
    explanation:
      "平行調は同じ調号（構成音）を共有し、主音だけが異なります。C major と A minor はともに調号なし。",
  },
  {
    id: "s3-q10",
    section: "s3-mixed",
    question: "C major と A minor の関係は？",
    choices: ["平行調", "同主調", "属調"],
    correctIndex: 0,
    explanation:
      "同じ調号を持つ長調と短調は平行調の関係。同主調は主音が同じ（C major と C minor）関係を指します。",
  },
];

/** セクションIDに属する問題を返す */
export function getQuestionsBySection(sectionId: string): Question[] {
  return questions.filter((q) => q.section === sectionId);
}

/** セクションメタ情報を取得 */
export function getSection(sectionId: string): Section | undefined {
  return SECTIONS.find((s) => s.id === sectionId);
}
