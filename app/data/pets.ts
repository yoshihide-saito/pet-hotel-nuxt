export interface ScheduleItem { time: string; title: string; desc: string }
export interface Spec { label: string; value: string }
export interface PriceRow { label: string; amount: string; unit?: string }
export interface OptionRow { label: string; amount: string }
export interface PackItem { strong?: string; text: string }
export interface PackGroup {
  icon: 'check' | 'heart' | 'alert'
  title: string
  items: PackItem[]
  note?: string
  warn?: boolean
}

export interface Pet {
  id: 'dog' | 'cat'
  no: string
  en: string
  ja: string
  bandLead: string
  tint: boolean
  room: {
    title: string
    img: string
    alt: string
    paragraphs: string[]
    specs: Spec[]
  }
  schedule: ScheduleItem[]
  price: {
    caption: string
    head: [string, string]
    rows: PriceRow[]
    note: string
    options: OptionRow[]
    optionNote: string
  }
  packs: PackGroup[]
}

export const dog: Pet = {
  id: 'dog',
  no: '02',
  en: 'Dog',
  ja: 'わんちゃんのお預かり',
  bandLead: 'ひとりの時間と、外の時間。どちらもきちんと確保します。',
  tint: false,
  room: {
    title: '犬舎はすべて個室です',
    img: '/img/dog-room.jpg',
    alt: '個室でくつろぐビーグル',
    paragraphs: [
      'ステンレス製の相部屋ではなく、木調パネルで仕切った1頭ずつの個室です。床は滑りにくいクッションフロア、天井にはやわらかい間接照明。前後左右が見えないので、となりの子の気配で落ち着かない、ということがありません。',
      '仲の良い同居犬は、ご希望があれば同室でお預かりできます（体重合計20kgまで）。'
    ],
    specs: [
      { label: 'Sサイズ', value: '幅80 × 奥行80 × 高さ80cm ／ 〜5kg' },
      { label: 'Mサイズ', value: '幅100 × 奥行100 × 高さ100cm ／ 〜15kg' },
      { label: 'Lサイズ', value: '幅120 × 奥行120 × 高さ120cm ／ 〜30kg' },
      { label: '大型犬',  value: '専用ルーム2室（要予約・事前面談あり）' }
    ]
  },
  schedule: [
    { time: '7:30',  title: '起床・健康チェック', desc: '体温、便の状態、食欲、歩き方をスタッフが記録します。' },
    { time: '8:00',  title: '朝ごはん・お薬',     desc: 'いつものフードを、いつもの量で。投薬は獣医師の確認のもと行います。' },
    { time: '9:30',  title: 'お散歩（15分）',     desc: '併設の屋外スペースへ。雨天時は室内運動場に切り替えます。' },
    { time: '11:00', title: 'お部屋で休憩',       desc: 'お掃除とお水の入れ替え。静かな時間帯です。' },
    { time: '13:00', title: 'フリータイム（20分）', desc: '運動スペースを1頭ずつ貸し切りで。ボール遊びや、ただの昼寝でも。' },
    { time: '15:00', title: 'ブラッシング・おやつ', desc: 'ご希望制。この時間にお写真を撮ってLINEでお送りします。' },
    { time: '17:00', title: 'お散歩（15分）',     desc: '夕方の空気の中で、もう一度からだを動かします。' },
    { time: '18:00', title: '晩ごはん・お薬',     desc: '食べ残しの量も毎回記録し、お迎えのときにお渡しします。' },
    { time: '20:00', title: '消灯・夜間巡回',     desc: '照明を落として就寝。当直スタッフが2時間ごとに見回ります。' }
  ],
  price: {
    caption: '宿泊 ／ 1泊あたり',
    head: ['お部屋・体重', '料金'],
    rows: [
      { label: 'Sサイズ（〜5kg）',        amount: '3,850', unit: '円' },
      { label: 'Mサイズ（〜15kg）',       amount: '4,950', unit: '円' },
      { label: 'Lサイズ（〜30kg）',       amount: '6,600', unit: '円' },
      { label: '大型犬ルーム（30kg〜）',   amount: '8,800', unit: '円' },
      { label: '同居犬 2頭同室（追加1頭）', amount: '＋2,200', unit: '円' }
    ],
    note: 'すべて税込。9:00〜18:00の受け渡しを1泊として計算します。\n日帰り（8時間まで）は各サイズの半額です。',
    options: [
      { label: 'お薬の投与',           amount: '330円 / 回' },
      { label: '追加のお散歩',         amount: '550円 / 回' },
      { label: '爪切り',               amount: '1,100円' },
      { label: 'シャンプー',           amount: '3,300円〜' },
      { label: 'フードのご用意（一般食）', amount: '220円 / 食' },
      { label: '時間外の受け渡し',     amount: '1,100円' }
    ],
    optionNote: '当院の診察券をお持ちの方は宿泊料金が10%引きになります。連休・年末年始は繁忙期料金（＋20%）となります。'
  },
  packs: [
    {
      icon: 'check',
      title: '必ずお持ちください',
      items: [
        { strong: 'いつものフード', text: '／滞在日数＋1食分を小分けに' },
        { strong: 'ワクチン接種証明書', text: '／混合ワクチン・狂犬病ともに1年以内' },
        { strong: '首輪とリード', text: '／お散歩に使います' },
        { strong: '常用のお薬', text: '／1回分ずつ分包し、お薬手帳を添えて' }
      ]
    },
    {
      icon: 'heart',
      title: 'あると安心なもの',
      items: [
        { strong: 'いつもの毛布・タオル', text: '／においがあると落ち着きます' },
        { strong: 'お気に入りのおもちゃ', text: '／壊れにくいものを' },
        { strong: 'おやつ', text: '／1日分ずつ小分けに' },
        { strong: 'ペットシーツ', text: '／いつもの銘柄があれば' },
        { strong: '洋服', text: '／着慣れたものを1〜2枚' }
      ]
    },
    {
      icon: 'alert',
      warn: true,
      title: 'お預かりできないもの',
      items: [
        { text: '生食・手作りごはんの作り置き' },
        { text: 'ちぎれやすい布製おもちゃ、細い紐類' },
        { text: 'ケージに入りきらない大きさのベッド' },
        { text: '他院で処方された用途不明のお薬' }
      ],
      note: '判断に迷うものは、事前面談のときにお持ちください。一緒に確認します。'
    }
  ]
}

export const cat: Pet = {
  id: 'cat',
  no: '03',
  en: 'Cat',
  ja: 'ねこちゃんのお預かり',
  bandLead: '静かで、高いところがあって、犬の声が届かない場所。',
  tint: true,
  room: {
    title: '猫舎は専用フロアの個室です',
    img: '/img/cat-room.jpg',
    alt: 'やわらかい寝床で眠る猫',
    paragraphs: [
      '犬舎とは階を分け、空調も換気も独立させています。廊下の動線も別なので、滞在中に犬とすれ違うことはありません。',
      'お部屋は上下2段の造りで、途中に棚板を渡しています。上に登る・見下ろす・隠れるという猫の動きがひととおりできる高さを確保しました。トイレと寝床、食器はそれぞれ離して配置しています。'
    ],
    specs: [
      { label: 'お部屋', value: '幅90 × 奥行60 × 高さ150cm（2段・棚板2枚）' },
      { label: '設備',   value: 'ハンモック、隠れ家ボックス、爪とぎ、窓側の日向スペース' },
      { label: '多頭',   value: '仲の良い2頭まで同室可' },
      { label: '環境',   value: '室温24〜26℃、フェリウェイ（合成フェロモン）を常時使用' }
    ]
  },
  schedule: [
    { time: '8:00',  title: 'カーテンを開けて健康チェック', desc: '食欲、飲水量、トイレの回数と状態を記録します。' },
    { time: '8:30',  title: '朝ごはん・お薬',   desc: 'いつものフードを。食べ残しはグラム単位で記録します。' },
    { time: '10:00', title: 'お部屋のお掃除',   desc: 'トイレの砂を替え、寝床を整えます。ここは静かに手早く。' },
    { time: '11:00', title: '日向ぼっこ',       desc: '窓側の棚に日が入る時間。多くの子がここでいちばん眠ります。' },
    { time: '14:00', title: 'フリータイム（20分）', desc: 'キャットルームを1頭ずつ貸し切りで。出たがらない子は無理に出しません。' },
    { time: '16:00', title: 'ブラッシング',     desc: 'ご希望制。この時間のお写真をLINEでお送りします。' },
    { time: '18:00', title: '晩ごはん・お薬',   desc: 'お水も新しいものに入れ替えます。' },
    { time: '20:00', title: '消灯・夜間巡回',   desc: '常夜灯だけを残して就寝。当直スタッフが2時間ごとに見回ります。' }
  ],
  price: {
    caption: '宿泊 ／ 1泊あたり',
    head: ['ご利用内容', '料金'],
    rows: [
      { label: '1頭',                 amount: '3,850', unit: '円' },
      { label: '2頭同室',             amount: '6,600', unit: '円' },
      { label: '2頭別室',             amount: '7,700', unit: '円' },
      { label: '日帰り（8時間まで）',  amount: '1,980', unit: '円' },
      { label: '長期（8泊以上・1泊）', amount: '3,300', unit: '円' }
    ],
    note: 'すべて税込。9:00〜18:00の受け渡しを1泊として計算します。',
    options: [
      { label: 'お薬の投与',           amount: '330円 / 回' },
      { label: 'ブラッシング',         amount: '550円 / 回' },
      { label: '爪切り',               amount: '1,100円' },
      { label: 'フードのご用意（一般食）', amount: '220円 / 食' },
      { label: '療法食のご用意',       amount: '330円 / 食' },
      { label: '時間外の受け渡し',     amount: '1,100円' }
    ],
    optionNote: '当院の診察券をお持ちの方は宿泊料金が10%引きになります。連休・年末年始は繁忙期料金（＋20%）となります。'
  },
  packs: [
    {
      icon: 'check',
      title: '必ずお持ちください',
      items: [
        { strong: 'いつものフード', text: '／滞在日数＋1食分を小分けに' },
        { strong: 'いつものトイレ砂', text: '／ひとつかみ分。慣れた砂を混ぜて使います' },
        { strong: 'ワクチン接種証明書', text: '／3種混合以上・1年以内' },
        { strong: '常用のお薬', text: '／1回分ずつ分包し、お薬手帳を添えて' },
        { strong: 'キャリーバッグ', text: '／来院・お帰りに使います' }
      ]
    },
    {
      icon: 'heart',
      title: 'あると安心なもの',
      items: [
        { strong: 'においのついた布', text: '／ふだん寝ている毛布やタオル' },
        { strong: 'お気に入りのおもちゃ', text: '／紐の短いものを' },
        { strong: 'おやつ', text: '／食欲が落ちたときに使います' },
        { strong: 'ふだんの食器', text: '／器が変わると食べない子もいます' }
      ]
    },
    {
      icon: 'alert',
      warn: true,
      title: '事前にご相談ください',
      items: [
        { text: '3種混合ワクチンが未接種の場合' },
        { text: '猫風邪・口内炎などで通院中の場合' },
        { text: '脱走歴のある子、ハーネスを外せる子' },
        { text: '他の猫と同室にしてほしいご希望がある場合' }
      ],
      note: '環境の変化に敏感な子ほど、事前面談で一度お部屋を見ておくと当日が楽になります。'
    }
  ]
}

export const pets = [dog, cat]
