export interface NavItem { href: string; en: string; ja: string }

export const nav: NavItem[] = [
  { href: '#top',   en: 'Top',      ja: 'トップ' },
  { href: '#about', en: 'About us',  ja: '私たちについて' },
  { href: '#dog',   en: 'Dog',       ja: 'わんちゃん' },
  { href: '#cat',   en: 'Cat',       ja: 'ねこちゃん' },
  { href: '#flow',  en: 'Flow',      ja: 'ご利用の流れ' },
  { href: '#ask',   en: 'Ask',       ja: 'よくあるご質問' }
]

/**
 * 公開前に実際の情報へ差し替えてください。
 */
export const site = {
  hospital: 'XXX動物病院',
  wordmark: 'PET HOTEL',
  tel: '03-0000-0000',
  telHref: 'tel:0300000000',
  telHours: '受付時間 9:00〜12:00 ／ 16:00〜19:00（水曜・日曜午後を除く）',
  mail: 'hotel@example.com',
  mailNote: '24時間受付・翌診療日までにお返事します',
  zip: '〒000-0000',
  address: '○○県○○市○○町1-2-3',
  building: 'XXX動物病院 2F',
  handover: '受け渡し 9:00〜12:00／16:00〜18:00',
  closed: '休診 水曜・日曜午後',
  copyright: '© XXX Animal Hospital Pet Hotel'
}

export interface Pillar { icon: string; title: string; text: string }

export const pillars: Pillar[] = [
  {
    icon: 'stethoscope',
    title: '獣医師がすぐそばに',
    text: '診療時間中は獣医師が院内に。夜間も当直スタッフが2時間ごとに巡回し、体調の変化にその場で対応します。'
  },
  {
    icon: 'room',
    title: 'すべて完全個室',
    text: '1頭ずつのお部屋でお預かりします。犬と猫はフロアを分け、空調も動線も別。よその子と顔を合わせません。'
  },
  {
    icon: 'clipboard',
    title: 'カルテをそのまま引き継ぐ',
    text: '当院のカルテを参照してお預かりします。既往歴・アレルギー・投薬内容を、あらためて説明していただく必要はありません。'
  }
]

export interface Step { n: string; title: string; desc: string }

export const steps: Step[] = [
  { n: '01', title: '空室のお問い合わせ', desc: 'お電話またはWebフォームから、ご希望の日程をお知らせください。当日中にお返事します。' },
  { n: '02', title: '事前面談（初回のみ）', desc: '15分・無料。健康状態の確認と、お部屋の見学。ふだんの様子をうかがいます。' },
  { n: '03', title: 'ご予約の確定', desc: '面談後にお日にちを確定します。予約金はいただきません。' },
  { n: '04', title: 'チェックイン・滞在', desc: '持ち物の確認と問診票の記入（約15分）。滞在中は毎日お写真と様子をお送りします。' },
  { n: '05', title: 'チェックアウト', desc: '食事量・排泄・体重を記録した滞在レポートをお渡しし、その場でお会計です。' }
]

export const reservation = [
  { k: '受付方法', v: 'お電話／Webフォーム／ご来院' },
  { k: '受付開始', v: 'ご利用日の2か月前から' },
  { k: '繁忙期',   v: 'GW・お盆・年末年始は3か月前から' },
  { k: '初回',     v: '事前面談が必須です' }
]

export const checkInOut = [
  { k: 'チェックイン',   v: '9:00〜12:00 ／ 16:00〜18:00' },
  { k: 'チェックアウト', v: '9:00〜12:00 ／ 16:00〜18:00' },
  { k: '受け渡し不可',   v: '水曜終日・日曜午後（滞在は可能）' },
  { k: '時間外',         v: '18:00以降は 1,100円' }
]
