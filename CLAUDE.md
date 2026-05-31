# theory-test — Music Theory Test

解説付き3択クイズで音楽理論を学ぶ Web アプリ。正解・不正解にかかわらず必ず解説が表示され、学びながら進められる。Directline Studio の音楽理論ツール群（`theory-lab` / `my-clone`）と同じダークテーマ（黒背景＋ゴールド）。

## 技術スタック

- Next.js 15（App Router）+ TypeScript
- Tailwind CSS（ダークテーマ。アクセントカラーは `gold`）
- 状態は React のローカルステート、進捗のみ `localStorage` に保存
- データベース・バックエンドなし。すべてクライアントで完結

## ディレクトリ構造

```
theory-test/
├── app/
│   ├── layout.tsx              # ルートレイアウト（メタ情報・背景）
│   ├── globals.css             # ダークテーマ・ゴールドのユーティリティ
│   ├── page.tsx                # トップ画面（章 → セクションカード一覧＋進捗バッジ）
│   ├── progress.ts             # localStorage で進捗を読み書きするヘルパー
│   └── section/[id]/page.tsx   # 出題・解説・結果画面（クイズ本体）
├── data/
│   └── questions.ts            # ★問題データ（章・セクション・問題）
├── tailwind.config.ts          # gold / ink カラー定義
└── CLAUDE.md
```

## データモデル（`data/questions.ts`）

階層は **章（Chapter）→ セクション（Section）→ 問題（Question）**。

```typescript
interface Question {
  id: string;          // 一意。例: "s1-q16"
  section: string;     // SECTIONS の id と一致させる
  question: string;
  choices: string[];   // 必ず3択
  correctIndex: number;// 正解の choices インデックス（0-2）
  explanation: string; // 正解・不正解どちらでも表示される解説
}
```

- `CHAPTERS` … 章の一覧
- `SECTIONS` … セクションの一覧（`chapter` で章に紐づく）
- `questions` … 問題の配列（`section` でセクションに紐づく）

## 問題の追加方法

### 既存セクションに問題を足す

`data/questions.ts` の `questions` 配列に追記するだけ。

```typescript
{
  id: "s1-q16",            // 既存と重複しない一意な id
  section: "s1-intervals", // 追加先セクションの id
  question: "Aを基準にした完全4度上の音は？",
  choices: ["D", "Eb", "E"],
  correctIndex: 0,
  explanation: "A から完全4度（半音5つ）上は D。",
},
```

出題順は実行時に Fisher–Yates でシャッフルされるので、配列内の順序は気にしなくてよい。

### 新しいセクションを足す

1. `SECTIONS` に `{ id, chapter, title, description }` を追加
2. その `id` を `section` に持つ問題を `questions` に追加

トップ画面・出題画面・進捗バッジは `SECTIONS` / `questions` から自動生成されるため、コンポーネントの変更は不要。

### 新しい章を足す

1. `CHAPTERS` に `{ id, title, description }` を追加
2. その章に属する `SECTIONS` と `questions` を追加

## 現在の収録内容

- **第1章: 基礎理論**
  - セクション1「音名と音程」… 15問
  - セクション2「調と音階」… 15問
  - セクション3「総合問題」… 10問

## 開発

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 本番ビルド
```

## 設計メモ

- 進捗は `theory-test:progress` キーで `localStorage` に保存（未着手 / 進行中 / 完了）。
- クイズ本体 `app/section/[id]/page.tsx` はクライアントコンポーネント。
  選択 → 解説表示 → 次の問題 → 結果画面（間違えた問題の復習付き）という単方向フロー。
- 問題内容は音楽理論的な正確さを最優先。半音数・調号・和音構成音などは追加時に必ず検算すること。
