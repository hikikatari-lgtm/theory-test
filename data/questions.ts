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
  {
    id: "ch2",
    title: "第2章: コード／テンション",
    description: "和音の構成とテンションの仕組み",
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
  {
    id: "s4-chords",
    chapter: "ch2",
    title: "コードの構成",
    description: "三和音・四和音・コードネームの読み方",
  },
  {
    id: "s5-tensions",
    chapter: "ch2",
    title: "テンション",
    description: "9th・11th・13th とその解決",
  },
  {
    id: "s6-chord-mixed",
    chapter: "ch2",
    title: "総合問題",
    description: "コードとテンションの知識を組み合わせた応用",
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

  // ==========================================================================
  // 第2章 / セクション1: コードの構成（15問）
  // ==========================================================================
  {
    id: "s4-q01",
    section: "s4-chords",
    question: "長三和音（メジャートライアド）の構成音程は？",
    choices: ["短3度＋長3度", "長3度＋短3度", "長3度＋長3度"],
    correctIndex: 1,
    explanation:
      "長三和音は下から長3度＋短3度。例: C-E-G。C→E が長3度（半音4つ）、E→G が短3度（半音3つ）です。",
  },
  {
    id: "s4-q02",
    section: "s4-chords",
    question: "減三和音（ディミニッシュトライアド）の構成音程は？",
    choices: ["短3度＋短3度", "長3度＋短3度", "短3度＋長3度"],
    correctIndex: 0,
    explanation:
      "減三和音は短3度＋短3度。例: B-D-F。根音から5度がトライトーン（減5度）になります。",
  },
  {
    id: "s4-q03",
    section: "s4-chords",
    question: "増三和音（オーギュメントトライアド）の構成音程は？",
    choices: ["長3度＋短3度", "短3度＋長3度", "長3度＋長3度"],
    correctIndex: 2,
    explanation:
      "増三和音は長3度＋長3度。例: C-E-G#。根音から5度が増5度になり、対称的な響きを持ちます。",
  },
  {
    id: "s4-q04",
    section: "s4-chords",
    question: "Cm（C マイナー）の構成音は？",
    choices: ["C, E, G", "C, Eb, G", "C, Eb, Gb"],
    correctIndex: 1,
    explanation:
      "Cm は短三和音で C-Eb-G。長三和音 C-E-G の3rd を半音下げた形です。",
  },
  {
    id: "s4-q05",
    section: "s4-chords",
    question: "和音の第1転回形とは？",
    choices: ["ルートがベース", "3rd がベース", "5th がベース"],
    correctIndex: 1,
    explanation:
      "第1転回形は3rd が最低音に来る形。C major なら E-G-C。第2転回形は5th がベースになります。",
  },
  {
    id: "s4-q06",
    section: "s4-chords",
    question: "CM7（メジャーセブンス）の構成音は？",
    choices: ["C, E, G, Bb", "C, E, G, B", "C, Eb, G, B"],
    correctIndex: 1,
    explanation:
      "CM7 は長三和音＋長7度で C-E-G-B。7th が Bb だとドミナント7th の C7 になります。",
  },
  {
    id: "s4-q07",
    section: "s4-chords",
    question: "Cm7（マイナーセブンス）の構成音は？",
    choices: ["C, E, G, Bb", "C, Eb, G, Bb", "C, Eb, G, B"],
    correctIndex: 1,
    explanation:
      "Cm7 は短三和音＋短7度で C-Eb-G-Bb。マイナーの落ち着いた響きの基本和音です。",
  },
  {
    id: "s4-q08",
    section: "s4-chords",
    question: "C7（ドミナントセブンス）の構成は？",
    choices: ["長三和音＋長7度", "長三和音＋短7度", "短三和音＋短7度"],
    correctIndex: 1,
    explanation:
      "C7 は長三和音＋短7度で C-E-G-Bb。長7度なら CM7。属和音として強い解決感を持ちます。",
  },
  {
    id: "s4-q09",
    section: "s4-chords",
    question: "Cm7(b5) の別名は？",
    choices: ["オーギュメントセブンス", "ハーフディミニッシュ", "ディミニッシュセブンス"],
    correctIndex: 1,
    explanation:
      "Cm7(b5) はハーフディミニッシュ（半減七）。C-Eb-Gb-Bb。7th も半音下げると dim7 になります。",
  },
  {
    id: "s4-q10",
    section: "s4-chords",
    question: "Cdim7 の構成音程の特徴は？",
    choices: ["すべて短3度", "長3度＋短3度＋短3度", "短3度＋長3度＋短3度"],
    correctIndex: 0,
    explanation:
      "dim7 はすべての音が短3度（半音3つ）間隔。C-Eb-Gb-Bbb(=A)。完全に対称な和音です。",
  },
  {
    id: "s4-q11",
    section: "s4-chords",
    question: "C/E（スラッシュコード）はどういう意味？",
    choices: ["E コードで C がベース音", "C コードで E がベース音", "C と E を同時に弾く"],
    correctIndex: 1,
    explanation:
      "C/E は「C コードで E がベース音」。和音は C-E-G のまま、最低音だけを E にした第1転回形です。",
  },
  {
    id: "s4-q12",
    section: "s4-chords",
    question: "オープン・ボイシングとは？",
    choices: [
      "構成音を1オクターブ以上に広げた配置",
      "すべての音を密集させた配置",
      "ルートを省略した配置",
    ],
    correctIndex: 0,
    explanation:
      "オープン・ボイシングは構成音を1オクターブ以上に広げた配置。密集形はクローズド・ボイシングと呼びます。",
  },
  {
    id: "s4-q13",
    section: "s4-chords",
    question: "sus4 コードの構成は？",
    choices: [
      "ルート＋長3度＋完全5度",
      "ルート＋完全4度＋完全5度",
      "ルート＋短3度＋完全5度",
    ],
    correctIndex: 1,
    explanation:
      "sus4（suspended 4th）は3度の代わりに完全4度を使う和音。Csus4 = C-F-G。長短の性格を持ちません。",
  },
  {
    id: "s4-q14",
    section: "s4-chords",
    question: "C6 の構成音は？",
    choices: ["C, E, G, Ab", "C, E, G, A", "C, E, G, B"],
    correctIndex: 1,
    explanation:
      "C6 は長三和音＋長6度で C-E-G-A。Am7（A-C-E-G）と同じ構成音の転回関係にあります。",
  },
  {
    id: "s4-q15",
    section: "s4-chords",
    question: "Caug（C+、増三和音）の構成音は？",
    choices: ["C, E, G", "C, E, G#", "C, Eb, G#"],
    correctIndex: 1,
    explanation:
      "Caug は長3度を2つ重ねた C-E-G#。長三和音の5th を半音上げた形です。",
  },

  // ==========================================================================
  // 第2章 / セクション2: テンション（15問）
  // ==========================================================================
  {
    id: "s5-q01",
    section: "s5-tensions",
    question: "テンションノートに含まれないのは？",
    choices: ["9th", "13th", "5th"],
    correctIndex: 2,
    explanation:
      "テンションはコードトーン(1,3,5,7)の上に3度ずつ積んだ 9th・11th・13th。5th はコードトーンです。",
  },
  {
    id: "s5-q02",
    section: "s5-tensions",
    question: "ナチュラルテンションとオルタードテンションの違いは？",
    choices: [
      "ダイアトニックスケール上にあるかないか",
      "音が高いか低いか",
      "メジャーかマイナーか",
    ],
    correctIndex: 0,
    explanation:
      "そのコードのスケール上に自然にあるのがナチュラル、半音変化させて外れたものがオルタードテンションです。",
  },
  {
    id: "s5-q03",
    section: "s5-tensions",
    question: "C7 のオルタードテンションは？",
    choices: ["b9, #9, #11, b13", "9, 11, 13", "b9, 11, b13"],
    correctIndex: 0,
    explanation:
      "ドミナント7th のオルタードテンションは b9・#9・#11・b13 の4つ。オルタードスケール由来の緊張音です。",
  },
  {
    id: "s5-q04",
    section: "s5-tensions",
    question: "CM7 のアヴォイドノートは？",
    choices: ["11th(F)", "9th(D)", "13th(A)"],
    correctIndex: 0,
    explanation:
      "CM7 の 11th(F) は3rd(E)の半音上でぶつかるためアヴォイドノート。9th(D)・13th(A)は使えます。",
  },
  {
    id: "s5-q05",
    section: "s5-tensions",
    question: "テンション・リゾルブとは？",
    choices: [
      "テンションが隣のコードトーンに解決すること",
      "テンションを追加すること",
      "テンションを省略すること",
    ],
    correctIndex: 0,
    explanation:
      "テンション・リゾルブはテンションが半音または全音で隣のコードトーンへ解決する動きのことです。",
  },
  {
    id: "s5-q06",
    section: "s5-tensions",
    question: "9th のリゾルブ先は？",
    choices: ["ルート", "3rd", "5th"],
    correctIndex: 0,
    explanation:
      "9th は下行してルートへ解決します。CM7 なら D→C。テンションは下のコードトーンへ落ち着くのが基本です。",
  },
  {
    id: "s5-q07",
    section: "s5-tensions",
    question: "13th のリゾルブ先は？",
    choices: ["5th", "3rd", "ルート"],
    correctIndex: 0,
    explanation:
      "13th は下行して5th へ解決します。C コードなら A→G という動きになります。",
  },
  {
    id: "s5-q08",
    section: "s5-tensions",
    question: "C9 というコードに含まれる音は？",
    choices: ["C, E, G, B, D", "C, E, G, Bb, D", "C, Eb, G, Bb, D"],
    correctIndex: 1,
    explanation:
      "C9 は C7＋9th。ドミナント7th(C-E-G-Bb)に9th(D)を加えた C-E-G-Bb-D です。",
  },
  {
    id: "s5-q09",
    section: "s5-tensions",
    question: "Cm11 に含まれるテンションは？",
    choices: ["9th と 11th", "11th のみ", "9th のみ"],
    correctIndex: 0,
    explanation:
      "Cm11 = Cm7＋9th＋11th。テンションコードは下位のテンション(9th)も含むのが通例です。C-Eb-G-Bb-D-F。",
  },
  {
    id: "s5-q10",
    section: "s5-tensions",
    question: "Csus4 と C11 の違いは？",
    choices: ["C11 は7th と9th も含む", "同じコード", "Csus4 の方が音が多い"],
    correctIndex: 0,
    explanation:
      "Csus4 は C-F-G の3音。C11 はそこに7th(Bb)と9th(D)も加わります（3rd は省略されがち）。",
  },
  {
    id: "s5-q11",
    section: "s5-tensions",
    question: "add9 とは？",
    choices: ["7th なしで9th を加える", "7th ありで9th を加える", "9th の代わりに2nd を使う"],
    correctIndex: 0,
    explanation:
      "add9 は7th を含めず三和音に9th だけ足す和音。Cadd9 = C-E-G-D。7th を含む C9 とは別物です。",
  },
  {
    id: "s5-q12",
    section: "s5-tensions",
    question: "Cm7 で自然に使えるナチュラルテンションは？",
    choices: ["9th と 11th", "b9 と b13", "#11 のみ"],
    correctIndex: 0,
    explanation:
      "マイナー7th（ドリアン／エオリアン上）では 9th と 11th がナチュラルテンションとして自然に使えます。",
  },
  {
    id: "s5-q13",
    section: "s5-tensions",
    question: "#11 がナチュラルテンションとして自然に使えるコードは？",
    choices: ["メジャー7th（リディアン）", "マイナー7th", "sus4"],
    correctIndex: 0,
    explanation:
      "メジャー7th をリディアンで捉えると #11 がナチュラルテンションになり、アヴォイドの11thを回避できます。",
  },
  {
    id: "s5-q14",
    section: "s5-tensions",
    question: "13th は度数でいうとどの音？",
    choices: ["6度を1オクターブ上げた音", "7度", "5度"],
    correctIndex: 0,
    explanation:
      "13th は6度を1オクターブ上げた音。同様に 9th=2度、11th=4度のオクターブ上にあたります。",
  },
  {
    id: "s5-q15",
    section: "s5-tensions",
    question: "テンションを積む基本ルールは？",
    choices: ["コードトーンの上に3度ずつ堆積", "半音ずつ積む", "5度ずつ積む"],
    correctIndex: 0,
    explanation:
      "テンションは7th の上にさらに3度ずつ積んで 9th→11th→13th と得られます。3度堆積がコードの基本原理です。",
  },

  // ==========================================================================
  // 第2章 / セクション3: 総合問題（10問）
  // ==========================================================================
  {
    id: "s6-q01",
    section: "s6-chord-mixed",
    question: "Cm7 のルートを C から Eb に変えると何コード？",
    choices: ["Eb6", "EbM7", "Cm7 のまま"],
    correctIndex: 0,
    explanation:
      "Cm7(C-Eb-G-Bb)を Eb から並べ替えると Eb-G-Bb-C = Eb6。m7 と短3度上の6th は同じ構成音（転回関係）です。",
  },
  {
    id: "s6-q02",
    section: "s6-chord-mixed",
    question: "II-V-I の Key=C での II は？",
    choices: ["Dm7", "Em7", "FM7"],
    correctIndex: 0,
    explanation:
      "C メジャーのダイアトニックで ii は Dm7。II-V-I は Dm7-G7-CM7 という進行になります。",
  },
  {
    id: "s6-q03",
    section: "s6-chord-mixed",
    question: "II-V-I の Key=C での V は？",
    choices: ["Gm7", "G7", "GM7"],
    correctIndex: 1,
    explanation:
      "V はドミナント7th の G7（G-B-D-F）。トライトーン B-F が CM7 へ強く解決します。",
  },
  {
    id: "s6-q04",
    section: "s6-chord-mixed",
    question: "G7(b9) の構成音は？",
    choices: ["G, B, D, F, A", "G, B, D, F, Ab", "G, Bb, D, F, Ab"],
    correctIndex: 1,
    explanation:
      "G7 = G-B-D-F。b9 は9th(A)を半音下げた Ab。よって G-B-D-F-Ab です。",
  },
  {
    id: "s6-q05",
    section: "s6-chord-mixed",
    question: "dim7 コードの転回形が3つとも別の dim7 に見える理由は？",
    choices: ["すべて等間隔（短3度）だから", "すべて長3度だから", "ルートが変わるから"],
    correctIndex: 0,
    explanation:
      "dim7 は短3度の積み重ねで完全に対称。どの音を最低音にしても同じ短3度堆積に見え、実質3種類しかありません。",
  },
  {
    id: "s6-q06",
    section: "s6-chord-mixed",
    question: "G7 が持つトライトーンの2音は？",
    choices: ["B と F", "G と D", "B と D"],
    correctIndex: 0,
    explanation:
      "G7（G-B-D-F）の3rd(B)と7th(F)が減5度＝トライトーン。これが C の E と C へ解決して終止感を生みます。",
  },
  {
    id: "s6-q07",
    section: "s6-chord-mixed",
    question: "Key=C で CM7 のトニック代理として使えるのは？",
    choices: ["Am7", "Dm7", "G7"],
    correctIndex: 0,
    explanation:
      "Am7(A-C-E-G)は CM7(C-E-G-B)と C・E・G を共有するトニック代理（vi）。同じ機能で使えます。",
  },
  {
    id: "s6-q08",
    section: "s6-chord-mixed",
    question: "ドミナント G7 を Db7 に置き換える技法は？",
    choices: ["裏コード（トライトーン代理）", "クリシェ", "ペダルポイント"],
    correctIndex: 0,
    explanation:
      "裏コード（トライトーン代理）。G7 と Db7 はトライトーン(B-F = Cb-F)を共有し、ベースが半音で下行します。",
  },
  {
    id: "s6-q09",
    section: "s6-chord-mixed",
    question: "sus4 の典型的な解決は？",
    choices: ["4th が 3rd へ下がる", "5th へ上がる", "ルートへ下がる"],
    correctIndex: 0,
    explanation:
      "sus4 は宙づりの4th が3rd へ下行して解決します。Csus4(C-F-G)→C(C-E-G) で F→E という動きです。",
  },
  {
    id: "s6-q10",
    section: "s6-chord-mixed",
    question: "add9 と 9th コード（C9）の違いは？",
    choices: ["add9 は7th を含まない", "同じ意味", "9th コードは三和音"],
    correctIndex: 0,
    explanation:
      "add9 は三和音＋9th で7th なし(Cadd9=C-E-G-D)。一方 C9 は7th も含む(C-E-G-Bb-D)四和音以上です。",
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
