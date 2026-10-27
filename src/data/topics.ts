// Central content registry for philippinearenaguide.com topic pages.
// All visitor-facing copy is Tagalog (fil) with English technical terms,
// matching the dominant GSC query language and the existing single-page site.

export type Pillar =
  | 'getting-there'
  | 'parking'
  | 'venue-rules'
  | 'near-arena'
  | 'event-day';

export interface TopicSection {
  id: string;
  title: string;
  body: string[]; // each string is one paragraph
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface Topic {
  slug: string;
  pillar: Pillar;
  titleTagalog: string;
  titleEnglish: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  sections: TopicSection[];
  faq: TopicFaq[];
  updated: string;
}

export interface PillarMeta {
  label: string; // Tagalog label shown in breadcrumb / cards
  lead: string; // short description for the home pillar card
  main: string; // representative slug used as the pillar's entry URL
}

export const PILLARS: Record<Pillar, PillarMeta> = {
  'getting-there': {
    label: 'Lokasyon at Biyahe',
    lead: 'Kung saan nakatayo ang Philippine Arena at paano pumunta mula Metro Manila, NAIA, Clark at NLEX.',
    main: 'getting-there',
  },
  parking: {
    label: 'Parking',
    lead: 'Mapa ng parking, slot ng paradahan, drop-off point, at bayad para sa PWD sa araw ng event.',
    main: 'parking-map',
  },
  'venue-rules': {
    label: 'Mga Patakaran',
    lead: 'Patakaran sa bag, bawal na item, at kung ano ang puwedeng dalhin sa loob ng arena.',
    main: 'bag-policy',
  },
  'near-arena': {
    label: 'Kainan, Hotel at Malapit',
    lead: 'Kainan, café, hotel at mga pasyalang malapit sa Ciudad de Victoria at Bocaue.',
    main: 'restaurants-nearby',
  },
  'event-day': {
    label: 'Araw ng Event',
    lead: 'Gabay sa concert, seating plan, pagbukas ng gate, at pag-uwi pagkatapos ng show.',
    main: 'concert-guide',
  },
};

export const topics: Topic[] = [
  // ───────────────────────── GETTING THERE ─────────────────────────
  {
    slug: 'getting-there',
    pillar: 'getting-there',
    titleTagalog: 'Saan ang Philippine Arena?',
    titleEnglish: 'How to Get to Philippine Arena',
    metaTitle: 'Saan ang Philippine Arena? Lokasyon, Mapa at Paano Pumunta',
    metaDescription:
      'Kumpletong gabay kung saan matatagpuan ang Philippine Arena sa Ciudad de Victoria, Bocaue, Bulacan, kasama ang mapa, plus code at mga opsyon sa biyahe.',
    h1: 'Saan ang Philippine Arena?',
    intro: [
      'Nasa Ciudad de Victoria, Bocaue Road, Bocaue, Bulacan ang Philippine Arena — hilaga ng Metro Manila at malapit sa NLEX. Ito ang pinakamadaling sagot sa tanong na "saan ang philippine arena."',
      'Hindi ito museum na bukas araw-araw; karaniwan itong napupuntahan sa araw ng concert, laro o malaking event. Gamitin ang mapa sa ibaba para sa pin, at tandaan na maaaring iba ang designated parking gate o drop-off point sa event day.',
    ],
    sections: [
      {
        id: 'address',
        title: 'Eksaktong address at coordinates',
        body: [
          'Address: Philippine Arena, Bocaue Road, Ciudad de Victoria, Bocaue, Bulacan, Pilipinas.',
          'Plus code: QXV3+GC Bocaue, Bulacan. Latitude 14.7937647, longitude 120.9535709. Gamitin ang Google Maps pin para sa navigation; huwag umasa sa screenshot ng lumang ruta.',
        ],
      },
      {
        id: 'from-manila',
        title: 'Mula Metro Manila',
        body: [
          'Ang pinakakaraniwang ruta ay dadaan sa Skyway patungong NLEX northbound, saka sundin ang signage para sa Ciudad de Victoria / Philippine Arena. Maglaan ng malaking buffer dahil sa traffic at event road closures.',
        ],
      },
      {
        id: 'public-transport',
        title: 'Public transport',
        body: [
          'May bus at P2P option mula sa Metro Manila (North EDSA/Trinoma, Cubao, Monumento, PITX) patungong Bocaue o Santa Maria. Mula roon, tricycle o local ride ang karaniwang last mile. Sa ilang malaking event, may espesyal na shuttle — gamitin lamang kung opisyal na inanunsyo.',
        ],
      },
      {
        id: 'landmarks',
        title: 'Mga landmark sa daan',
        body: [
          'Kapag nasa NLEX na, ang mga karaniwang landmark papuntang north ay ang Tabang Interchange at ang patungong Ciudad de Victoria. Gamitin ang live navigation app habang binabasa ang opisyal na advisory — huwag umasa sa memorya o lumang ruta.',
          'Sa mismong complex, ang Philippine Arena ay ang pinakamalaking dome; ang Philippine Sports Stadium naman ay nasa kabilang bahagi. Ang signage sa event day ay itinatakda ng organizer at LGU.',
        ],
      },
    ],
    faq: [
      {
        q: 'Saan ang Philippine Arena sa Google Maps?',
        a: 'Pindutin ang Google Maps pin ng Philippine Arena sa Ciudad de Victoria, Bocaue, Bulacan. Ang plus code ay QXV3+GC. Tandaan na ang parking gate ay maaaring magbago bawat event.',
      },
      {
        q: 'Gaano kalayo ang Philippine Arena mula Maynila?',
        a: 'Humigit-kumulang 1.5–2 oras ang biyahe mula Metro Manila sa normal na trapiko gamit ang NLEX, ngunit pwedeng humaba nang husto kapag may malaking event.',
      },
      {
        q: 'Bukas ba ito para bisitahin kahit walang event?',
        a: 'Hindi ito regular na walk-in attraction. Ang pagpasok sa loob ay nakatali sa event, organizer, ticket at security rules.',
      },
      {
        q: 'Paano kung mali ang napuntahan kong exit o pin?',
        a: 'Huwag mag-panic. Sundin ang road signage papuntang Ciudad de Victoria; karamihan ay itinatakda ng organizer at LGU sa event day. Kung naligaw, itanong sa traffic enforcer o i-set muli ang pin sa "Philippine Arena, Ciudad de Victoria."',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'from-manila',
    pillar: 'getting-there',
    titleTagalog: 'Biyahe mula Metro Manila',
    titleEnglish: 'From Metro Manila',
    metaTitle: 'Biyahe mula Metro Manila papuntang Philippine Arena',
    metaDescription:
      'Paano pumunta sa Philippine Arena mula Metro Manila gamit ang Skyway at NLEX, kasama ang tips sa traffic at event-day road closures.',
    h1: 'Biyahe mula Metro Manila',
    intro: [
      'Kung galing ka sa Metro Manila, ang Philippine Arena ay umaabot nang 1.5–2 oras gamit ang expressway. Ang susi ay ang NLEX northbound exit patungong Ciudad de Victoria.',
    ],
    sections: [
      {
        id: 'route',
        title: 'Pinakakaraniwang ruta',
        body: [
          'Sumakay ng Skyway patungong NLEX northbound. Sundin ang mga exit sign at advisory para sa Ciudad de Victoria / Philippine Arena.',
          'Maghanda ng RFID para sa expressway at tingnan ang NLEX traffic advisory bago umalis, lalo na kapag may concert.',
        ],
      },
      {
        id: 'timing',
        title: 'Oras at buffer',
        body: [
          'Dumating nang mas maaga kaysa sa inaakala mo. Malaki ang crowd, haba ng lakaran at posibleng NLEX/parking congestion. Gamitin ang gate-opening time ng organizer bilang batayan.',
        ],
      },
      {
        id: 'prep',
        title: 'Prep bago umalis',
        body: [
          'Siguraduhing may RFID para sa mabilis na NLEX toll, at mag-load ng gcash/card kung gagamitin ang electronic lanes. Mag-full tank bago umalis ng Metro Manila para iwas haba-habaang stop.',
          'May rest stop at gas station sa along NLEX kung kailangan ng CR o pagkain, ngunit iwasang huminto nang sobrang kadalas sa event day dahil pumapangit ang traffic pagbalik.',
        ],
      },
    ],
    faq: [
      {
        q: 'Anong exit sa NLEX ang papuntang Philippine Arena?',
        a: 'Sundin ang kasalukuyang NLEX advisory para sa Ciudad de Victoria / Philippine Arena exit. Ang eksaktong exit at lane ay maaaring magbago sa event day, kaya hintayin ang opisyal na anunsyo.',
      },
      {
        q: 'Mas mainam bang mag-drive o mag-bus mula Manila?',
        a: 'Kung may grupo at parking pass, mas praktikal ang private car. Kung mag-isa, ang bus/P2P patungong Bocaue o Santa Maria plus tricycle ay madalas na mas simple sa event day.',
      },
      {
        q: 'Anong oras dapat umalis mula Manila para sa 8PM concert?',
        a: 'Karaniwang payo: umalis nang 3–4 oras bago ang show (hal. 4–5PM) para sa parking, security at lakaran. Kung may specific gate-opening, mas maaga pa kung gusto mong iwas ang pinakamabigat na rush.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'from-naia',
    pillar: 'getting-there',
    titleTagalog: 'Mula NAIA Airport',
    titleEnglish: 'From NAIA Airport',
    metaTitle: 'Mula NAIA papuntang Philippine Arena: Taxi, Grab at Bus',
    metaDescription:
      'Paano pumunta sa Philippine Arena mula NAIA airport — pre-booked car, Grab, at P2P bus option papuntang Bocaue.',
    h1: 'Mula NAIA Airport',
    intro: [
      'Kung dumarating ka sa NAIA para sa isang concert, ang pinakasimple ay direct transfer papuntang Ciudad de Victoria. Ang public transport naman ay nangangailangan ng isang hub connection.',
    ],
    sections: [
      {
        id: 'direct',
        title: 'Direct car / Grab',
        body: [
          'Magpa-pre-book ng car, taxi o Grab direkta sa "Philippine Arena, Ciudad de Victoria." Karaniwang dadaanan ang expressway connection patungong NLEX.',
        ],
      },
      {
        id: 'public',
        title: 'Public transport',
        body: [
          'Pumunta muna sa isang Metro Manila bus/P2P hub (North EDSA, Cubao, PITX), saka bumiyahe patungong Bocaue o Santa Maria. Ang huling bahagi ay tricycle o local ride.',
        ],
      },
    ],
    faq: [
      {
        q: 'Gaano katagal ang biyahe mula NAIA?',
        a: 'Humigit-kumulang 2–3 oras depende sa trapiko at kung may event. Maglaan ng malaking buffer kapag gabi ang concert.',
      },
      {
        q: 'May direct bus ba mula NAIA papuntang arena?',
        a: 'Wala karaniwang direct bus mula NAIA; daraan ka muna sa isang Metro Manila hub bago sumakay patungong Bocaue o Santa Maria.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'bus-p2p',
    pillar: 'getting-there',
    titleTagalog: 'Bus at P2P Options',
    titleEnglish: 'Bus and P2P Options',
    metaTitle: 'Bus at P2P papuntang Philippine Arena mula Metro Manila',
    metaDescription:
      'Mga bus at P2P route mula North EDSA, Cubao, Monumento at PITX patungong Bocaue, kasama ang last-mile tricycle.',
    h1: 'Bus at P2P Options',
    intro: [
      'Maraming manonood ang mas pinipiling mag-bus o P2P mula Metro Manila papuntang Bocaue o Santa Maria, saka tricycle para sa huling bahagi ng biyahe.',
    ],
    sections: [
      {
        id: 'hubs',
        title: 'Mga hub at terminal',
        body: [
          'Mga karaniwang point of origin: North EDSA/Trinoma, Cubao, Monumento at PITX. Ang destinasyon ay Bocaue, Santa Maria o kalapit na terminal depende sa operator.',
        ],
      },
      {
        id: 'last-mile',
        title: 'Last-mile transfer',
        body: [
          'Mula sa terminal, tricycle o ibang local transport ang karaniwang hatid sa complex. Sa ilang malaking event, may espesyal na shuttle — gamitin lamang kapag opisyal na inanunsyo ng organizer.',
        ],
      },
    ],
    faq: [
      {
        q: 'Saan ako bababa para sa Philippine Arena?',
        a: 'Bumaba sa Bocaue o Santa Maria terminal, saka sumakay ng tricycle papuntang Ciudad de Victoria. I-check ang event advisory para sa espesyal na shuttle route.',
      },
      {
        q: 'May P2P ba tuwing may concert?',
        a: 'Maaaring maglabas ng espesyal na P2P/shuttle ang organizer o LGU para sa major events, ngunit hindi ito garantisado araw-araw. Sundin ang opisyal na anunsyo.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'grab-taxi',
    pillar: 'getting-there',
    titleTagalog: 'Taxi / Grab / Ride-hailing',
    titleEnglish: 'Taxi, Grab and Ride-hailing',
    metaTitle: 'Taxi, Grab at Ride-hailing papuntang Philippine Arena',
    metaDescription:
      'Tips sa pag-set ng pin at drop-off/pick-up point gamit ang Grab o taxi papuntang Philippine Arena sa event day.',
    h1: 'Taxi / Grab / Ride-hailing',
    intro: [
      'Ang ride-hailing ay praktikal para sa maliliit na grupo, ngunit sa event day ay maaaring ilipat ang drop-off at pick-up zone palayo sa gate.',
    ],
    sections: [
      {
        id: 'pin',
        title: 'I-set ang tamang pin',
        body: [
          'Ilagay sa app ang "Philippine Arena, Ciudad de Victoria" bilang destinasyon. Maaaring hindi makalapit ang sasakyan sa mismong gate kapag may crowd control.',
        ],
      },
      {
        id: 'pickup',
        title: 'Pick-up pagkatapos ng event',
        body: [
          'Mahirap sumakay agad pagkatapos ng concert. Magtakda ng malinaw na meeting point at maghanda sa mahabang lakaran palabas ng complex bago makasakay.',
        ],
      },
    ],
    faq: [
      {
        q: 'Pinapayagan ba ang Grab sa loob ng arena?',
        a: 'Hindi karaniwang nakakapasok ang sasakyan sa gate. Maghanda sa drop-off/pick-up point na malapit pero hindi mismong gate, ayon sa event advisory.',
      },
      {
        q: 'Bakit mahirap ang Grab pagkatapos ng concert?',
        a: 'Dahil sa crowd at road closure, limitado ang pickup zone at mataas ang demand. Maglakad muna palabas ng main congestion bago mag-book.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'from-clark-pampanga',
    pillar: 'getting-there',
    titleTagalog: 'Mula Pampanga / Clark',
    titleEnglish: 'From Pampanga / Clark',
    metaTitle: 'Biyahe mula Clark at Pampanga papuntang Philippine Arena',
    metaDescription:
      'Paano pumunta sa Philippine Arena mula Clark, Angeles at Pampanga gamit ang SCTEX at NLEX southbound.',
    h1: 'Mula Pampanga / Clark',
    intro: [
      'Kung galing ka sa north (Clark, Angeles, Tarlac), ang Philippine Arena ay nasa NLEX southbound side papuntang Ciudad de Victoria.',
    ],
    sections: [
      {
        id: 'route',
        title: 'SCTEX patungong NLEX',
        body: [
          'Mula Clark, daraan sa SCTEX papuntang NLEX southbound, saka sundin ang routing para sa Ciudad de Victoria at designated parking.',
        ],
      },
      {
        id: 'note',
        title: 'Huwag asahang pareho ang pasok at labas',
        body: [
          'Ang gate pabalik ay maaaring iba sa gate papasok kapag may crowd control. Sundin ang flow na itinatakda ng organizer.',
        ],
      },
    ],
    faq: [
      {
        q: 'Ilang oras mula Clark papuntang arena?',
        a: 'Humigit-kumulang 1.5–2 oras sa normal na trapiko, ngunit pwedeng humaba kapag may event sa Bulacan.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'nlex-guide',
    pillar: 'getting-there',
    titleTagalog: 'NLEX Exit at Route Guide',
    titleEnglish: 'NLEX Exit and Route Guide',
    metaTitle: 'NLEX exit at route guide papuntang Philippine Arena',
    metaDescription:
      'NLEX northbound at southbound routing, RFID tips at event-day traffic management papuntang Ciudad de Victoria.',
    h1: 'NLEX Exit at Route Guide',
    intro: [
      'Ang NLEX ang pangunahing expressway approach ng arena. Ang routing at exit ay maaaring magbago sa event day dahil sa traffic management.',
    ],
    sections: [
      {
        id: 'rfid',
        title: 'RFID at toll',
        body: [
          'Siguraduhing may RFID para mabilis na toll. Tingnan ang NLEX advisory bago umalis para sa mga exit at lane na bubuksan sa event day.',
        ],
      },
      {
        id: 'southbound',
        title: 'Mula north (southbound)',
        body: [
          'Sundin ang current routing para sa Ciudad de Victoria at designated parking. Huwag umasa na pareho ang gate sa pagpasok at paglabas.',
        ],
      },
    ],
    faq: [
      {
        q: 'Anong NLEX exit ang dapat kong labasan?',
        a: 'Sundin ang opisyal na NLEX at organizer advisory para sa Ciudad de Victoria / Philippine Arena exit. Ang eksakto ay nag-iiba bawat event.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'event-day-traffic',
    pillar: 'getting-there',
    titleTagalog: 'Event-Day Traffic Tips',
    titleEnglish: 'Event-Day Traffic Tips',
    metaTitle: 'Event-day traffic tips papuntang Philippine Arena',
    metaDescription:
      'Paano iwasan ang traffic at crowded roads sa araw ng concert o laro sa Philippine Arena.',
    h1: 'Event-Day Traffic Tips',
    intro: [
      'Sa araw ng malaking event, ang roads paligid ng Ciudad de Victoria ay under traffic management. Ang plano ay mas mahalaga kaysa sa bilis.',
    ],
    sections: [
      {
        id: 'plan',
        title: 'Magkaroon ng Plan A at Plan B',
        body: [
          'Sundin ang pinakabagong organizer at NLEX advisory, hindi lumang route screenshot. Maghanda ng alternatibong oras at drop-off point.',
        ],
      },
      {
        id: 'buffer',
        title: 'Malaking buffer',
        body: [
          'Dumating nang maaga para sa parking at lakaran. Ang paglabas pagkatapos ng event ay kadalasang mas matagal kaysa sa pagpasok.',
        ],
      },
    ],
    faq: [
      {
        q: 'Anong oras dapat umalis mula Manila para sa 8PM concert?',
        a: 'Walang fixed rule, pero ang karaniwang payo ay umalis nang 3–4 oras bago ang show para sa parking, security at lakaran. Ang organizer advisory ang masusunod.',
      },
    ],
    updated: '2026-10-27',
  },

  // ───────────────────────── PARKING ─────────────────────────
  {
    slug: 'parking-map',
    pillar: 'parking',
    titleTagalog: 'Philippine Arena Parking Map',
    titleEnglish: 'Philippine Arena Parking Map',
    metaTitle: 'Philippine Arena Parking Map: Lot, Gate at Drop-off',
    metaDescription:
      'Gabay sa parking map ng Philippine Arena — lot assignment, gate, drop-off point at kung bakit nagiiba ito bawat event.',
    h1: 'Philippine Arena Parking Map',
    intro: [
      'May malawak na parking area sa paligid ng complex, ngunit ang lot assignment, gate, at traffic flow ay maaaring magbago bawat event. Ang mapa sa ibaba ay pangkalahatang gabay lamang.',
    ],
    sections: [
      {
        id: 'lots',
        title: 'Parking lots at gate',
        body: [
          'Ang complex ay may malalaking parking area na karaniwang hinahati sa lettered lots. Ang eksaktong lot, gate at entrance ay itinatakda ng organizer para sa event.',
        ],
      },
      {
        id: 'event-advisory',
        title: 'Bakit nagiiba ang mapa',
        body: [
          'Dahil sa crowd control, maaaring magbago ang assigned lot, entrance lane at exit route. Basahin ang event advisory bago bumiyahe para sa tamang gate.',
        ],
      },
      {
        id: 'screenshot',
        title: 'Screenshot ang pin mo',
        body: [
          'Kunin at i-screenshot ang parking pin at tandaan ang row/landmark bago pumasok. Madaling makaligtaan ang sasakyan sa dami ng tao pagkatapos ng show.',
        ],
      },
      {
        id: 'walk',
        title: 'Lakad mula lot papuntang gate',
        body: [
          'Hindi lahat ng lot ay katabi ng gate. Ang ilang designated lot ay may habang lakaran papuntang entrance, kaya isipin ang lakarin kapag may bata, PWD o maleta.',
          'Tandaan ang number/letter ng lot at ang pinaka-malapit na landmark (poste, tent, gate label) bago umalis ng sasakyan. Ito ang pinakamadaling paraan para mahanap pabalik.',
        ],
      },
    ],
    faq: [
      {
        q: 'Saan ang parking map ng Philippine Arena?',
        a: 'Ang parking map ay inilalabas ng organizer bawat event kasama ng ticket at advisory. Ang pin sa Google Maps ay para sa venue; iba ang designated parking gate sa event day.',
      },
      {
        q: 'May fee ba ang parking?',
        a: 'Ang parking fee ay maaaring magbago bawat event. Huwag gamitin ang lumang halaga bilang kasalukuyang presyo — hintayin ang opisyal na advisory.',
      },
      {
        q: 'Paano kung puno na ang inassign na lot?',
        a: 'Sa event day, may alternate lot o overflow area na itinatakda ng organizer kapag puno na ang primary lot. Sundin ang direksyon ng parking marshal; huwag pumasok nang walang kumpirmasyon.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'parking-tips',
    pillar: 'parking',
    titleTagalog: 'Parking Checklist',
    titleEnglish: 'Parking Checklist',
    metaTitle: 'Parking checklist sa Philippine Arena: Paano hindi mahirapan',
    metaDescription:
      'Praktikal na parking checklist para sa Philippine Arena — maagang dating, lot, screenshot at controlled exit.',
    h1: 'Parking Checklist',
    intro: [
      'Ang bottleneck ng arena ay hindi ang pagpasok, kundi ang paglabas. Narito ang checklist bago ka umalis bahay.',
    ],
    sections: [
      {
        id: 'before',
        title: 'Bago bumiyahe',
        body: [
          'Basahin ang event advisory para sa tamang lot at gate.',
          'Kung first-come-first-served ang setup, mas maagang dating ang mas praktikal.',
        ],
      },
      {
        id: 'at-venue',
        title: 'Sa venue',
        body: [
          'Screenshot ang parking pin at tandaan ang row/landmark bago pumasok.',
          'Maghanda sa controlled exit at mabagal na paglabas pagkatapos ng major event.',
        ],
      },
    ],
    faq: [
      {
        q: 'Anong oras dapat dumating para may parking?',
        a: 'Mas maaga kaysa sa normal na venue dahil malaki ang crowd. Sundin ang gate-opening at transport advisory ng organizer bilang batayan.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'parking-fee',
    pillar: 'parking',
    titleTagalog: 'Parking Fee',
    titleEnglish: 'Parking Fee',
    metaTitle: 'Parking fee sa Philippine Arena (verify bago pumunta)',
    metaDescription:
      'Tandaan: ang parking fee sa Philippine Arena ay nag-iiba bawat event. Basahin ang opisyal na advisory bago umasa sa presyo.',
    h1: 'Parking Fee',
    intro: [
      'Walang fixed na parking fee na garantisadong pareho sa lahat ng event. Ang halaga ay itinatakda ng organizer at ng security ng venue.',
    ],
    sections: [
      {
        id: 'verify',
        title: 'I-verify bago umasa',
        body: [
          'Huwag gamitin ang lumang parking fee bilang kasalukuyang presyo. Ang opisyal na event advisory ang palaging batayan.',
        ],
      },
      {
        id: 'payment',
        title: 'Mode of payment',
        body: [
          'Ang mode of payment at presyo ay nakadepende sa event at sa parking operator. Maghanda ng cash at gcash/kard kung available, ayon sa advisory.',
        ],
      },
    ],
    faq: [
      {
        q: 'Magkano ang parking sa Philippine Arena?',
        a: 'Nag-iiba ito bawat event. Ang opisyal na event advisory ang nagtatakda ng kasalukuyang presyo at mode of payment — huwag umasa sa lumang post sa social media.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'drop-off-pickup',
    pillar: 'parking',
    titleTagalog: 'Drop-off at Pick-up Points',
    titleEnglish: 'Drop-off and Pick-up Points',
    metaTitle: 'Drop-off at pick-up point sa Philippine Arena',
    metaDescription:
      'Saan nagbababa at sumusundo ang Grab/taxi sa Philippine Arena, at bakit nagiiba ito sa event day.',
    h1: 'Drop-off at Pick-up Points',
    intro: [
      'Hindi laging nakakalapit ang sasakyan sa mismong gate. May itinatakdang drop-off at pick-up zone ang organizer, at madalas itong naililipat sa event day.',
    ],
    sections: [
      {
        id: 'drop',
        title: 'Drop-off',
        body: [
          'I-set ang pin sa "Philippine Arena, Ciudad de Victoria." Sa event day, maaaring ilipat ang drop-off zone at puwedeng hindi makalapit ang sasakyan sa gate.',
        ],
      },
      {
        id: 'pickup',
        title: 'Pick-up pagkatapos',
        body: [
          'Magtakda ng meeting point at maghanda sa lakaran palabas ng congestion bago makasakay. Mataas ang demand pagkatapos ng concert.',
        ],
      },
    ],
    faq: [
      {
        q: 'Saan ako susunduin pagkatapos ng concert?',
        a: 'Sundin ang itinatakdang pick-up zone ng organizer para sa event. Maglakad muna palabas ng main crowd bago mag-book ng ride.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'accessible-parking',
    pillar: 'parking',
    titleTagalog: 'PWD at Senior Parking',
    titleEnglish: 'PWD and Senior Parking',
    metaTitle: 'PWD at senior parking sa Philippine Arena',
    metaDescription:
      'Accessible parking at entry lane para sa PWD at senior sa Philippine Arena — kumpirmahin sa organizer.',
    h1: 'PWD at Senior Parking',
    intro: [
      'Karaniwang may designated accessible parking at entry lane para sa PWD at senior, ngunit iba-iba ang proseso bawat event.',
    ],
    sections: [
      {
        id: 'process',
        title: 'Kumpirmahin sa organizer',
        body: [
          'Makipag-ugnayan sa organizer o ticketing partner nang maaga para sa accessible parking, entry lane at kasamang upuan.',
        ],
      },
      {
        id: 'seating',
        title: 'Accessible seating',
        body: [
          'May designated accessible seating para sa PWD at companion, ngunit nangangailangan ng maagang kumpirmasyon.',
        ],
      },
    ],
    faq: [
      {
        q: 'May priority parking ba para sa PWD?',
        a: 'Karaniwan may designated accessible parking, pero iba-iba ang proseso bawat event. Makipag-ugnayan sa organizer nang maaga.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'motorcycle-parking',
    pillar: 'parking',
    titleTagalog: 'Motorcycle at Bike Parking',
    titleEnglish: 'Motorcycle and Bike Parking',
    metaTitle: 'Motorcycle at bike parking sa Philippine Arena',
    metaDescription:
      'Saan ipapark ang motor at bisikleta sa Philippine Arena, at mga safety note sa event day.',
    h1: 'Motorcycle at Bike Parking',
    intro: [
      'Para sa mga nakamotor o bisikleta, may designated area rin sa complex, ngunit tulad ng ibang lot, ito ay nasa ilalim ng event-specific rules.',
    ],
    sections: [
      {
        id: 'area',
        title: 'Designated area',
        body: [
          'I-check ang event advisory para sa motorcycle/bike parking area at anumang fee o security requirement.',
        ],
      },
      {
        id: 'safety',
        title: 'Safety',
        body: [
          'I-lock nang maigi at huwag iwanan ang valuables. Ang area ay maaaring mapuno sa peak arrival.',
        ],
      },
    ],
    faq: [
      {
        q: 'Puwede bang mag-motor papuntang arena?',
        a: 'Oo, may designated motorcycle parking, ngunit ang lot at rules ay nakadepende sa event advisory. I-check ito bago bumiyahe.',
      },
    ],
    updated: '2026-10-27',
  },

  // ───────────────────────── VENUE RULES ─────────────────────────
  {
    slug: 'bag-policy',
    pillar: 'venue-rules',
    titleTagalog: 'Bag Policy',
    titleEnglish: 'Bag Policy',
    metaTitle: 'Bag policy sa Philippine Arena: Ano ang puwedeng bag',
    metaDescription:
      'Ang bag policy ng Philippine Arena ay itinatakda ng organizer. Maliit na bag, mas mabilis na entry — iwas hassle sa gate.',
    h1: 'Bag Policy',
    intro: [
      'Ang bag policy ay itinatakda ng organizer at ng security ng venue, at maaaring magbago bawat event. Ang pangkalahatang gabay: maliit na bag, mas mabilis na entry.',
    ],
    sections: [
      {
        id: 'size',
        title: 'Laki ng bag',
        body: [
          'Inaasahan ang security inspection sa gate. Ang laki ng bag, klase ng lalagyan at bilang ng item na papayagan ay nakatakda sa event advisory — huwag itong hulaan.',
        ],
      },
      {
        id: 'tip',
        title: 'Tip para mabilis',
        body: [
          'Magdala lamang ng maliit na bag para iwas-inspection delay. Ang mga malalaking bag ay mas mahaba ang pila.',
        ],
      },
      {
        id: 'examples',
        title: 'Mga halimbawa',
        body: [
          'Karaniwang pinapayagan: maliit na sling bag, pouch, at gamit na kailangan sa loob (wallet, phone, fan, power bank).',
          'Madalas hindi pinapayagan o limitado: malaking backpack, hard-case, at anumang bag na hindi kasya sa inspection lane. Ang medication at baby essentials ay karaniwang pinapayagan, ngunit ihanda ang pagpapakita kung hingiin.',
        ],
      },
    ],
    faq: [
      {
        q: 'Anong laki ng bag ang allowed sa Philippine Arena?',
        a: 'Ang eksaktong laki ay nakatakda sa event advisory ng organizer. Karaniwang limitado ang laki at isinasailalim sa inspection ang lahat ng bag.',
      },
      {
        q: 'Bakit mahigpit ang bag policy?',
        a: 'Para sa crowd safety. Ang organizer at security ng venue ang nagtatakda ng rules bawat event.',
      },
      {
        q: 'Puwede ba ang power bank, payong at diaper bag?',
        a: 'Ang power bank ay karaniwang pinapayagan (small personal item). Ang payong ay madalas nasa prohibited list dahil sa matulis na dulo o space. Ang diaper bag ay maaaring payagan para sa baby, ngunit isasailalim sa inspection — ihanda ang kumpirmasyon kung kinakailangan.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'prohibited-items',
    pillar: 'venue-rules',
    titleTagalog: 'Bawal na Items',
    titleEnglish: 'Prohibited Items',
    metaTitle: 'Bawal na items sa Philippine Arena: outside food, camera, at iba pa',
    metaDescription:
      'Mga karaniwang bawal sa loob ng Philippine Arena — outside food at drinks, professional camera, matitigas na bag, payong.',
    h1: 'Bawal na Items',
    intro: [
      'Ang restricted items ay nakadepende sa event, ngunit may mga karaniwang bawal na inilalagay sa advisories.',
    ],
    sections: [
      {
        id: 'common',
        title: 'Mga karaniwang bawal',
        body: [
          'Kadalasang kabilang sa restricted: outside food at drinks, professional camera at video gear, recording device, matitigas o malalaking bag, payong na may matulis na dulo, laser pointer at anumang bagay na delikado para sa crowd.',
        ],
      },
      {
        id: 'check',
        title: 'I-check ang advisory',
        body: [
          'Huwag umasa sa listahan ng nakaraang event. Ang opisyal na event advisory ang palaging masusunod.',
        ],
      },
      {
        id: 'more',
        title: 'Iba pang karaniwang bawal',
        body: [
          'Kasama rin madalas sa restricted: vape/e-cigarette (depende sa event rules), selfie stick at tripod, laser pointer, at anumang bagay na pwedeng ikapahamak ng crowd.',
          'Ang medication ay maaaring dalhin, ngunit kadalasang kailangang ipakita o ipa-clear sa medical/security team. Maghanda ng reseta kung available.',
        ],
      },
    ],
    faq: [
      {
        q: 'Puwede bang magdala ng food sa loob?',
        a: 'Karaniwang bawal ang outside food at drinks sa loob; ang concessions ay nasa loob ng venue. I-check ang event rules para sa exceptions.',
      },
      {
        q: 'Puwede ba ang professional camera?',
        a: 'Madalas itong bawal o limitado, lalo na sa concert. Ang event advisory ang magtatakda kung puwede ang camera at recording gear.',
      },
      {
        q: 'Puwede ba ang vape, selfie stick o laser pointer?',
        a: 'Ang vape at laser pointer ay karaniwang bawal; ang selfie stick/tripod ay madalas limitado o bawal sa concert. Ang eksaktong listahan ay nakadepende sa event advisory — basahin ito bago umalis.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'what-to-bring',
    pillar: 'venue-rules',
    titleTagalog: 'Ano ang Puwedeng Dalhin',
    titleEnglish: 'What to Bring',
    metaTitle: 'Ano ang puwedeng dalhin sa Philippine Arena',
    metaDescription:
      'Praktikal na listahan ng puwedeng dalhin sa Philippine Arena — maliit na bag, cash, fan, power bank, at dokumento.',
    h1: 'Ano ang Puwedeng Dalhin',
    intro: [
      'Upang mabilis ang entry at komportable ang stay, magdala ng mga bagay na pasok sa event rules.',
    ],
    sections: [
      {
        id: 'essentials',
        title: 'Mga praktikal',
        body: [
          'Maliit na bag, cash at card, sariling pamaypay o fan, power bank, at ang ticket/ID.',
          'Kung may medical need, magdala ng gamot at kumpirmahin sa organizer kung may special arrangement.',
        ],
      },
      {
        id: 'avoid',
        title: 'Iwasan',
        body: [
          'Huwag magdala ng malalaking bag, outside food o anumang nabanggit sa prohibited list ng event.',
        ],
      },
    ],
    faq: [
      {
        q: 'Puwede bang magdala ng tubig?',
        a: 'Karaniwang bawal ang outside drinks; may concessions sa loob. I-check ang event advisory para sa water policy.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 're-entry-policy',
    pillar: 'venue-rules',
    titleTagalog: 'Re-entry Policy',
    titleEnglish: 'Re-entry Policy',
    metaTitle: 'Re-entry policy sa Philippine Arena: Puwede bang bumalik?',
    metaDescription:
      'Ang re-entry sa Philippine Arena ay nakadepende sa event. Karaniwang hindi pinapayagan ang pagbalik pagkalabas.',
    h1: 'Re-entry Policy',
    intro: [
      'Ang re-entry ay itinatakda ng organizer at madalas hindi pinapayagan. Basahin ang rules bago lumabas ng venue.',
    ],
    sections: [
      {
        id: 'rule',
        title: 'Madalas: no re-entry',
        body: [
          'Sa maraming event, kapag lumabas ka na, hindi ka na pinapayagang bumalik nang walang bagong inspection o bagoang ticket. Sundin ang advisory.',
        ],
      },
      {
        id: 'plan',
        title: 'Magplano',
        body: [
          'Kung kailangan ng food o cr, gawin bago pumasok o sa designated break ayon sa event rules.',
        ],
      },
    ],
    faq: [
      {
        q: 'Puwede bang lumabas at bumalik sa Philippine Arena?',
        a: 'Depende sa event. Madalas hindi pinapayagan ang re-entry. Basahin ang opisyal na event advisory bago lumabas.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'camera-policy',
    pillar: 'venue-rules',
    titleTagalog: 'Camera at Recording',
    titleEnglish: 'Camera and Recording',
    metaTitle: 'Camera at recording policy sa Philippine Arena',
    metaDescription:
      'Ang camera at recording sa Philippine Arena ay limitado sa event. Professional gear karaniwang bawal.',
    h1: 'Camera at Recording',
    intro: [
      'Ang photo at video rules ay itinatakda ng organizer at karaniwang mahigpit sa concert at broadcast event.',
    ],
    sections: [
      {
        id: 'pro',
        title: 'Professional gear',
        body: [
          'Ang professional camera, lens at recording device ay kadalasang bawal o nangangailangan ng accredidation mula sa organizer.',
        ],
      },
      {
        id: 'phone',
        title: 'Phone cameras',
        body: [
          'Maaaring payagan ang phone camera para sa personal use, ngunit bawal ang livestream o recording para sa commercial use. Sundin ang event rules.',
        ],
      },
    ],
    faq: [
      {
        q: 'Puwede bang mag-video ng concert?',
        a: 'Limitado ito; ang professional recording gear ay karaniwang bawal. Sundin ang photo at video policy ng organizer para sa event.',
      },
    ],
    updated: '2026-10-27',
  },

  // ───────────────────────── NEAR ARENA ─────────────────────────
  {
    slug: 'restaurants-nearby',
    pillar: 'near-arena',
    titleTagalog: 'Kainan malapit sa Arena',
    titleEnglish: 'Restaurants Near the Arena',
    metaTitle: 'Kainan malapit sa Philippine Arena: Bocaue at Ciudad de Victoria',
    metaDescription:
      'Mga restaurant at kainan malapit sa Philippine Arena — Bocaue Plaza Centralle, OK Cafe, Lugajuan, Forest Cafe at iba pa.',
    h1: 'Kainan malapit sa Arena',
    intro: [
      'Limitado ang madaling makuhang pagkain kapag sabay-sabay ang dating ng libo-libong tao. Mas praktikal na pumili ng kainan sa Ciudad de Victoria/Bocaue bago ang peak event window.',
    ],
    sections: [
      {
        id: 'spots',
        title: 'Mga kilalang spot',
        body: [
          'Bocaue Plaza Centralle — maraming quick-service option.',
          'OK Cafe — PH Arena area, kape at casual meals.',
          'Lugajuan — simple at lokal na option sa Bocaue side.',
          'Forest Cafe — relaxed café stop kung may oras bago bumiyahe.',
        ],
      },
      {
        id: 'timing',
        title: 'Timing',
        body: [
          'Kumain bago dumagsa ang crowd. Puwedeng humaba ang pila sa event days, kaya maagang kain ang mas ligtas.',
        ],
      },
      {
        id: 'tips',
        title: 'Tips sa pagkain',
        body: [
          'Maghanda ng cash at gcash; hindi lahat ng maliliit na stall ay tumatanggap ng card. Ang menu ay karaniwang PH casual fare — rice meals, snacks, at drinks.',
          'Kung may dietary need (vegetarian/halal), magtanong muna sa stall bago umorder; ang mga maliliit na kainan ay hindi laging may labeled option.',
        ],
      },
    ],
    faq: [
      {
        q: 'Saan pwede kumain malapit sa Philippine Arena?',
        a: 'Sa Ciudad de Victoria at Bocaue may cafés, food stalls at kainan tulad ng Bocaue Plaza Centralle, OK Cafe, Lugajuan at Forest Cafe. I-check ang event-day hours.',
      },
      {
        q: 'May vegetarian o halal option ba malapit sa arena?',
        a: 'May mga stall at café sa Ciudad de Victoria at Bocaue, ngunit hindi laging may labeled vegetarian o halal menu. Magtanong muna sa stall, at kung mahigpit ang dietary need, mas ligtas kumain sa Metro Manila bago bumiyahe.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'cafes-near-arena',
    pillar: 'near-arena',
    titleTagalog: 'Cafés sa paligid',
    titleEnglish: 'Cafés Around the Arena',
    metaTitle: 'Cafés malapit sa Philippine Arena para sa pre-concert',
    metaDescription:
      'Relaxed café stops malapit sa Philippine Arena — OK Cafe at Forest Cafe para sa chill bago ang event.',
    h1: 'Cafés sa paligid',
    intro: [
      'Kung may oras bago ang gate opening, ang café stop ay magandang paraan para hindi maagang pumila sa init.',
    ],
    sections: [
      {
        id: 'options',
        title: 'Mga café',
        body: [
          'OK Cafe — PH Arena area, kape at casual meals.',
          'Forest Cafe — mas relaxed na café stop sa Bocaue kung may dagdag na oras.',
        ],
      },
      {
        id: 'note',
        title: 'Event-day hours',
        body: [
          'I-check ang operating hours bago pumunta; maaaring magbago ito sa araw ng malaking event.',
        ],
      },
    ],
    faq: [
      {
        q: 'May café ba malapit sa arena?',
        a: 'Oo, tulad ng OK Cafe sa PH Arena area at Forest Cafe sa Bocaue. Mag-check ng hours lalo na sa event day.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'eat-before-concert',
    pillar: 'near-arena',
    titleTagalog: 'Saan kakain bago ang concert',
    titleEnglish: 'Where to Eat Before the Concert',
    metaTitle: 'Saan kakain bago ang concert sa Philippine Arena',
    metaDescription:
      'Tips kung saan kumain bago ang concert — iwas pila, kumain bago dumagsa ang crowd sa Ciudad de Victoria.',
    h1: 'Saan kakain bago ang concert',
    intro: [
      'Ang sikreto ay kumain bago ang peak arrival window. Kapag sabay-sabay ang dating, humahaba ang pila sa loob at labas ng venue.',
    ],
    sections: [
      {
        id: 'plan',
        title: 'Maagang kain',
        body: [
          'Pumili ng kainan sa Ciudad de Victoria/Bocaue nang 2–3 oras bago ang gate opening. Mas maikli ang pila at mas tahimik ang ambiance.',
        ],
      },
      {
        id: 'inside',
        title: 'Concessions sa loob',
        body: [
          'May concessions sa loob ng arena, ngunit inaasahan ang haba ng pila sa event days. Ang event rules ang magtatakda kung puwedeng food sa loob.',
        ],
      },
    ],
    faq: [
      {
        q: 'Puwede bang kumain sa loob ng arena?',
        a: 'May concessions sa loob, ngunit limitado ang outside food. I-check ang event rules para sa pagkain at inumin.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'hotels-near-arena',
    pillar: 'near-arena',
    titleTagalog: 'Hotels malapit',
    titleEnglish: 'Hotels Near the Arena',
    metaTitle: 'Hotels malapit sa Philippine Arena: Bocaue, Santa Maria, NLEX corridor',
    metaDescription:
      'Saan matutulog malapit sa Philippine Arena — Bocaue, Santa Maria, Marilao, Guiguinto at Metro Manila options.',
    h1: 'Hotels malapit',
    intro: [
      'Limitado ang malalaking hotel sa mismong Bocaue, kaya praktikal na pumili ng bayan sa NLEX corridor at kumpirmahin ang biyahe papunta at pabalik sa event day.',
    ],
    sections: [
      {
        id: 'near',
        title: 'Pinakamalapit',
        body: [
          'Bocaue at Santa Maria — pinakamaikling event-day biyahe, ngunit mabilis maubos ang room kapag may major concert.',
        ],
      },
      {
        id: 'corridor',
        title: 'NLEX corridor',
        body: [
          'Marilao, Guiguinto, Balagtas — mas maraming hotel option, nasa maikling NLEX drive papuntang Ciudad de Victoria.',
        ],
      },
      {
        id: 'manila',
        title: 'Metro Manila',
        body: [
          'Kung wala nang malapit na room, praktikal pa rin ang Metro Manila base dahil sa NLEX access — pero asahan ang mas mahabang travel.',
        ],
      },
    ],
    faq: [
      {
        q: 'Saan mag-stay para sa concert sa Philippine Arena?',
        a: 'Maraming concert-goer ang pumipili ng Bocaue, Santa Maria, Marilao o Guiguinto para maikli ang biyahe. Mag-book nang maaga dahil mabilis maubos ang room.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'bocaue-stay',
    pillar: 'near-arena',
    titleTagalog: 'Bocaue / Santa Maria Stay',
    titleEnglish: 'Bocaue / Santa Maria Stay',
    metaTitle: 'Bocaue at Santa Maria stay para sa Philippine Arena',
    metaDescription:
      'Bakit sulit ang pag-stay sa Bocaue o Santa Maria para sa concert — maikling biyahe at booking tips.',
    h1: 'Bocaue / Santa Maria Stay',
    intro: [
      'Kung gusto mo ng pinakamaikling event-day biyahe, ang Bocaue at Santa Maria ang pinakamalapit na base.',
    ],
    sections: [
      {
        id: 'why',
        title: 'Bakit dito?',
        body: [
          'Pinakamaikling biyahe papunta at pabalik mula sa arena. Limitado ang bilang ng malalaking hotel, kaya mas mabilis maubos ang room.',
        ],
      },
      {
        id: 'book',
        title: 'Booking tips',
        body: [
          'Mag-book nang maaga sa concert dates. Kumpirmahin ang parking ng tuluyan, check-in cutoff para sa late arrival, at kung may shuttle pabalik.',
        ],
      },
    ],
    faq: [
      {
        q: 'Anong hotel ang pinakamalapit sa Philippine Arena?',
        a: 'Ang Bocaue at Santa Maria ang pinakamalapit, ngunit limitado ang malalaking hotel. Mag-book nang maaga dahil mabilis maubos ang room sa concert dates.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'things-to-do-nearby',
    pillar: 'near-arena',
    titleTagalog: 'Malapit na pasyalan',
    titleEnglish: 'Nearby Attractions',
    metaTitle: 'Malapit na pasyalan sa Philippine Arena: The Garden, Stadium, Shrine',
    metaDescription:
      'Mga pasyalang pwede ipares sa arena visit — The Garden, Philippine Sports Stadium, Shrine of St. Andrew Kim, Karilagan.',
    h1: 'Malapit na pasyalan',
    intro: [
      'Kung maaga ang dating, may ilang spot sa loob o malapit sa Ciudad de Victoria na puwedeng idagdag sa itinerary.',
    ],
    sections: [
      {
        id: 'spots',
        title: 'Mga opsyon',
        body: [
          'The Garden — Ciudad de Victoria: landscaped park.',
          'Philippine Sports Stadium: outdoor football at athletics venue.',
          'Shrine of St. Andrew Kim Tae-gon: Korean-influenced church sa Bocaue.',
          'Karilagan Stevia Farm & Pavilion: greenery at café-style side trip.',
        ],
      },
      {
        id: 'access',
        title: 'Tignan ang access',
        body: [
          'Ang bawat spot ay may sariling operating rules at access. I-check bago pumunta, lalo na kung may event sa arena.',
        ],
      },
    ],
    faq: [
      {
        q: 'Anong pwedeng puntahan malapit sa Philippine Arena?',
        a: 'The Garden sa Ciudad de Victoria, Philippine Sports Stadium, Shrine of St. Andrew Kim Tae-gon sa Bocaue, at Karilagan Stevia Farm. May kanya-kanyang access rules.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'ciudad-de-victoria',
    pillar: 'near-arena',
    titleTagalog: 'Ciudad de Victoria Guide',
    titleEnglish: 'Ciudad de Victoria Guide',
    metaTitle: 'Ciudad de Victoria guide: complex ng Philippine Arena at Sports Stadium',
    metaDescription:
      'Ano ang Ciudad de Victoria — ang complex na sumasaklaw sa Philippine Arena at Philippine Sports Stadium sa Bocaue, Bulacan.',
    h1: 'Ciudad de Victoria Guide',
    intro: [
      'Ang Ciudad de Victoria ay isang malaking complex sa Bocaue at Santa Maria, Bulacan na bahay ng Philippine Arena at Philippine Sports Stadium.',
    ],
    sections: [
      {
        id: 'what',
        title: 'Ano ito',
        body: [
          'Isang mixed-use development na gumagamit para sa malalaking event — concert, sports, at religious gatherings. Dito nakatayo ang Philippine Arena.',
        ],
      },
      {
        id: 'getting',
        title: 'Pagpunta',
        body: [
          'Nasa Bocaue Road, Bocaue, Bulacan, hilaga ng Metro Manila at malapit sa NLEX. Gamitin ang mapa para sa pin.',
        ],
      },
    ],
    faq: [
      {
        q: 'Saan ang Ciudad de Victoria?',
        a: 'Sa Bocaue, Bulacan, hilaga ng Metro Manila at malapit sa NLEX. Dito matatagpuan ang Philippine Arena at Philippine Sports Stadium.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'philippine-sports-stadium',
    pillar: 'near-arena',
    titleTagalog: 'Philippine Sports Stadium',
    titleEnglish: 'Philippine Sports Stadium',
    metaTitle: 'Philippine Sports Stadium: kapitbahay ng Philippine Arena',
    metaDescription:
      'Ang Philippine Sports Stadium — outdoor football at athletics venue sa tabi ng Philippine Arena sa Ciudad de Victoria.',
    h1: 'Philippine Sports Stadium',
    intro: [
      'Katabi ng Philippine Arena, ang Philippine Sports Stadium ay isang outdoor football at athletics venue sa loob ng Ciudad de Victoria.',
    ],
    sections: [
      {
        id: 'about',
        title: 'Tungkol dito',
        body: [
          'Outdoor stadium para sa football at athletics, madalas ding gamit para sa malalaking gathering at training.',
        ],
      },
      {
        id: 'visit',
        title: 'Pwede bang bisitahin?',
        body: [
          'Ang access ay nakadepende sa event at schedule. Hindi ito regular na walk-in attraction; sundin ang opisyal na advisory.',
        ],
      },
    ],
    faq: [
      {
        q: 'Puwede bang pumunta sa Philippine Sports Stadium?',
        a: 'Ang access ay event-based. Kung may event o scheduled activity, sundin ang opisyal na advisory para sa entry.',
      },
    ],
    updated: '2026-10-27',
  },

  // ───────────────────────── EVENT DAY ─────────────────────────
  {
    slug: 'concert-guide',
    pillar: 'event-day',
    titleTagalog: 'Concert Day Guide',
    titleEnglish: 'Concert Day Guide',
    metaTitle: 'Concert day guide sa Philippine Arena: mula biyahe hanggang uwian',
    metaDescription:
      'Kumpletong concert guide — biyahe, parking, gate, bag policy, at paano umuwi pagkatapos ng show sa Philippine Arena.',
    h1: 'Concert Day Guide',
    intro: [
      'Ang araw ng concert ay nahahati sa tatlong bahagi: pagpunta, pagpasok, at pag-uwi. Ang plano sa lahat ng ito ang nagtatakda ng ganda ng experience.',
    ],
    sections: [
      {
        id: 'before',
        title: 'Bago umalis',
        body: [
          'Basahin ang organizer advisory: gate, parking lot, bag policy, at prohibited items.',
          'Mag-ayos ng transport — car, bus/P2P, o Grab — at maglaan ng malaking buffer.',
        ],
      },
      {
        id: 'inside',
        title: 'Sa venue',
        body: [
          'Dumating nang maaga para sa parking at lakaran. Sundin ang security at event rules; iwasang mag-re-entry nang walang kasiguruhan.',
        ],
      },
      {
        id: 'after',
        title: 'Pag-uwi',
        body: [
          'Ang paglabas ay karaniwang mas mabagal. Maglakad palabas ng congestion bago mag-book ng ride, at maghintay ng pickup zone.',
        ],
      },
    ],
    faq: [
      {
        q: 'Anong dapat ihanda para sa concert sa Philippine Arena?',
        a: 'Ticket, valid ID, maliit na bag, cash/card, at ang opisyal na event advisory. Maglaan ng maagang oras para sa parking at lakaran.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'seating-plan',
    pillar: 'event-day',
    titleTagalog: 'Seating Plan at Views',
    titleEnglish: 'Seating Plan and Views',
    metaTitle: 'Seating plan ng Philippine Arena: Patron, Upper Box, GA, Accessible',
    metaDescription:
      'Seating zones ng Philippine Arena — Patron/Lower Box, Upper Box, General Admission at Accessible sections, at kung paano pumili.',
    h1: 'Seating Plan at Views',
    intro: [
      'Dahil nakatutok ang bowl sa iisang focal stage, mas mahalaga ang distansya at elevation kaysa sa posisyong "sentro."',
    ],
    sections: [
      {
        id: 'zones',
        title: 'Mga zone',
        body: [
          'Patron / Lower Box — malapit sa stage, pinakamahal, pinakamalakas ang tunog.',
          'Upper Box — mas abot-kaya at mas malayo, pero nakaharap pa rin sa stage.',
          'General Admission / Floor — standing area sa ilang concert setup.',
          'Accessible / Side — designated seating para sa PWD at companion.',
        ],
      },
      {
        id: 'choose',
        title: 'Pumili ayon sa stage',
        body: [
          'Ang eksaktong section, row at presyo ay nakadepende sa event at ticketing partner. Basahin ang seat map sa ticket page bago bumili.',
        ],
      },
      {
        id: 'view',
        title: 'View at sound bawat zone',
        body: [
          'Patron / Lower Box — pinakamalapit sa stage; ramdam ang energy at malinaw ang performer, ngunit mataas ang presyo.',
          'Upper Box — nakaharap pa rin sa stage at may buong view ng dome, ngunit mas malayo at mas maliit ang tao sa screen. General Admission / Floor ay standing, kaya depende sa height at pwesto ang view.',
        ],
      },
    ],
    faq: [
      {
        q: 'Ano ang pinakamagandang seat sa Philippine Arena?',
        a: 'Depende sa budget at preference. Ang Patron/Lower Box ay malapit sa stage; ang Upper Box ay mas abot-kaya. Ang seat map ng ticketing partner ang laging batayan.',
      },
      {
        q: 'Masyado bang malayo ang Upper Box?',
        a: 'Hindi gaanong malayo dahil nakatutok ang bowl sa iisang stage at may malalaking screen sa loob. Kung budget-friendly ang habol, ang Upper Box ay solid na choice — basta handa sa mas mahabang lakaran pababa at pataas.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'gate-opening',
    pillar: 'event-day',
    titleTagalog: 'Gate Opening at Arrival',
    titleEnglish: 'Gate Opening and Arrival',
    metaTitle: 'Gate opening at arrival time sa Philippine Arena',
    metaDescription:
      'Gaano kaaga dapat dumating sa Philippine Arena — gate opening, crowd, at lakaran papuntang upuan.',
    h1: 'Gate Opening at Arrival',
    intro: [
      'Dumating nang mas maaga kaysa sa normal na indoor venue dahil malaki ang crowd, haba ng lakaran at posibleng NLEX/parking congestion.',
    ],
    sections: [
      {
        id: 'timing',
        title: 'Maagang dating',
        body: [
          'Gamitin bilang batayan ang gate-opening time ng organizer, hindi ang start ng show. Ang security line at lakaran ay nakadagdag sa oras.',
        ],
      },
      {
        id: 'buffer',
        title: 'Buffer',
        body: [
          'Maglaan ng ekstrang oras para sa parking, inspection at paglalakad papuntang section. Mas mainam ang maaga kaysa sa mauuna ang show.',
        ],
      },
    ],
    faq: [
      {
        q: 'Ilang oras bago ang concert dapat dumating?',
        a: 'Walang fixed rule, ngunit ang karaniwang payo ay 2–3 oras bago ang gate opening para sa parking, security at lakaran. Sundin ang organizer advisory.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'after-concert',
    pillar: 'event-day',
    titleTagalog: 'After the Show: Paano umuwi',
    titleEnglish: 'After the Show: Getting Home',
    metaTitle: 'After the show: paano umuwi mula Philippine Arena',
    metaDescription:
      'Tips sa pag-uwi pagkatapos ng concert — controlled exit, Grab pickup, at pag-iwas sa traffic.',
    h1: 'After the Show: Paano umuwi',
    intro: [
      'Ang pinakamabigat na bahagi ng event day ay ang pag-uwi. Ang crowd control at road closure ay nagpapabagal ng exit.',
    ],
    sections: [
      {
        id: 'exit',
        title: 'Controlled exit',
        body: [
          'Sundin ang itinatakdang exit route. Ang paglabas ay maaaring tumagal dahil sa dami ng tao at sasakyan.',
        ],
      },
      {
        id: 'ride',
        title: 'Ride-hailing',
        body: [
          'Maglakad palabas ng main congestion bago mag-book ng Grab/taxi. Magtakda ng meeting point sa pickup zone.',
        ],
      },
      {
        id: 'wait',
        title: 'Saan maghintay at gaano katagal',
        body: [
          'Ang paglabas ay karaniwang tumatagal ng ilang oras sa pinakamalaking concert. Mas mainam na lumapit sa designated pickup zone kaysa sa pagtayo sa mismong gate.',
          'Kung may kasama, magtakda ng fixed meeting point bago maghiwalay. Ang signal ay madalas mahina pagkatapos ng show, kaya text/call plan ang kailangan.',
        ],
      },
    ],
    faq: [
      {
        q: 'Bakit matagal ang uwian pagkatapos ng concert?',
        a: 'Dahil sa crowd control at road closure. Maghanda sa mabagal na exit at mahirap na ride-hailing agad pagkatapos ng show.',
      },
      {
        q: 'Ilang oras bago makauwi pagkatapos ng concert?',
        a: 'Walang fixed oras, ngunit sa major event ay asahan ang 1–2 oras (o higit pa) mula sa paglabas ng gate hanggang makasakay at makalabas ng complex. Ang traffic sa NLEX pabalik ng Metro Manila ay maaari ring humaba.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'half-day-itinerary',
    pillar: 'event-day',
    titleTagalog: 'Half-Day Itinerary',
    titleEnglish: 'Half-Day Itinerary',
    metaTitle: 'Half-day itinerary sa Philippine Arena at Ciudad de Victoria',
    metaDescription:
      'Paano gawing half-day ang biyahe — arena, The Garden, at kainan sa Ciudad de Victoria.',
    h1: 'Half-Day Itinerary',
    intro: [
      'Kung maaga ang dating o walang event, puwedeng gawing half-day ang biyahe sa paligid ng arena.',
    ],
    sections: [
      {
        id: 'plan',
        title: 'Sample flow',
        body: [
          'Dumating ng tanghali, i-picture ang exterior ng arena, saglit sa The Garden, kain sa Bocaue, saka uwi bago ang traffic.',
        ],
      },
      {
        id: 'note',
        title: 'Tignan ang access',
        body: [
          'Ang bawat spot ay may sariling rules. I-check bago pumunta, lalo na kung may event sa arena.',
        ],
      },
    ],
    faq: [
      {
        q: 'Pwede bang mag-half-day trip sa Philippine Arena?',
        a: 'Oo, kung walang event. Exterior photo, The Garden, at kainan sa Bocaue ay magandang half-day combo — basta i-check ang access rules.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'rainy-day',
    pillar: 'event-day',
    titleTagalog: 'Rainy Day Tips',
    titleEnglish: 'Rainy Day Tips',
    metaTitle: 'Rainy day tips para sa Philippine Arena visit',
    metaDescription:
      'Ano ang gagawin kung umulan sa araw ng event — indoor venue, payong, at transport.',
    h1: 'Rainy Day Tips',
    intro: [
      'Ang Philippine Arena ay indoor venue, kaya tuloy ang show kahit umapaw ang ulan — ngunit ang biyahe at parking ay maaapektuhan.',
    ],
    sections: [
      {
        id: 'travel',
        title: 'Biyahe',
        body: [
          'Maglaan ng ekstrang oras; ang basa at baha ay pwedeng magpabagal ng NLEX at local roads. Iwasang magmotor kung delikado.',
        ],
      },
      {
        id: 'inside',
        title: 'Sa venue',
        body: [
          'Ang indoor seating ay hindi nababasa, ngunit ang lakaran mula parking ay pwedeng basa. Magbaon ng jacket o payong para sa labas.',
        ],
      },
    ],
    faq: [
      {
        q: 'Tuloy ba ang concert kahit umuulan?',
        a: 'Oo, indoor ang arena. Ngunit ang biyahe at parking ay maaaring maapektuhan ng ulan, kaya maglaan ng buffer.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'family-guide',
    pillar: 'event-day',
    titleTagalog: 'With Kids Guide',
    titleEnglish: 'With Kids Guide',
    metaTitle: 'With kids guide sa Philippine Arena: family tips',
    metaDescription:
      'Tips para sa pamilya na may bata sa Philippine Arena — seating, restroom, at crowd safety.',
    h1: 'With Kids Guide',
    intro: [
      'Ang arena ay family-friendly para sa tamang event, ngunit ang laki ng crowd ay nangangailangan ng extra preparation.',
    ],
    sections: [
      {
        id: 'seating',
        title: 'Seating at comfort',
        body: [
          'Pumili ng section na hindi masyadong mataas kung may bata. I-check ang age/clearance rules ng event para sa kids.',
        ],
      },
      {
        id: 'safety',
        title: 'Crowd safety',
        body: [
          'Magtakda ng meeting point sa caso ng mahiwalay. Ang accessible lane ay pwede ring gamitin kung may especial na pangangailangan.',
        ],
      },
    ],
    faq: [
      {
        q: 'Pwede bang pumunta ng bata sa Philippine Arena?',
        a: 'Depende sa event — may mga family-friendly show, ngunit iba-iba ang age rules at ticket requirement. Basahin ang event advisory.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'first-timer',
    pillar: 'event-day',
    titleTagalog: 'First-Timer Checklist',
    titleEnglish: 'First-Timer Checklist',
    metaTitle: 'First-timer checklist sa Philippine Arena',
    metaDescription:
      'Checklist para sa first-time visitor ng Philippine Arena — ticket, transport, parking, at rules.',
    h1: 'First-Timer Checklist',
    intro: [
      'Kung unang punta mo, ito ang mga dapat nandyan bago ka umalis bahay.',
    ],
    sections: [
      {
        id: 'list',
        title: 'Dapat meron',
        body: [
          'Ticket at valid ID.',
          'Ang opisyal na event advisory (gate, parking, bag policy).',
          'Transport plan at backup.',
          'Maliit na bag lang, cash/card.',
        ],
      },
      {
        id: 'avoid',
        title: 'Iwasan',
        body: [
          'Huwag umasa sa lumang presyo o routing screenshot. Ang organizer advisory ang palaging masusunod.',
        ],
      },
    ],
    faq: [
      {
        q: 'First time ko sa Philippine Arena, saan ako magsisimula?',
        a: 'Basahin ang event advisory para sa gate at parking, ayusin ang transport, at dumating nang maaga. Ang checklist sa page na ito ang gabay.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'best-time-to-visit',
    pillar: 'event-day',
    titleTagalog: 'Best Time to Visit',
    titleEnglish: 'Best Time to Visit',
    metaTitle: 'Best time to visit Philippine Arena: photo stop at exterior',
    metaDescription:
      'Kung walang event, ang hapon ay pinakamagandang oras para sa exterior photo ng Philippine Arena.',
    h1: 'Best Time to Visit',
    intro: [
      'Hindi ito regular na attraction, kaya ang "best time" ay depende sa layunin mo.',
    ],
    sections: [
      {
        id: 'photo',
        title: 'Para sa photo',
        body: [
          'Sa araw na walang major event, mas kaaya-aya ang huling bahagi ng hapon para sa exterior photos — pero laging sumunod sa security perimeter at access rules.',
        ],
      },
      {
        id: 'event',
        title: 'Para sa event',
        body: [
          'Dumating nang may malaking buffer bago magbukas ang gate. Ang oras ay nakadepende sa event advisory.',
        ],
      },
    ],
    faq: [
      {
        q: 'Kailan pwede pumunta sa Philippine Arena para magpicture?',
        a: 'Sa araw na walang major event, ang hapon ay magandang oras para sa exterior photo. Pero tandaan na hindi ito walk-in attraction at sumunod sa access rules.',
      },
    ],
    updated: '2026-10-27',
  },
  {
    slug: 'events-schedule',
    pillar: 'event-day',
    titleTagalog: 'Paano malaman ang schedule',
    titleEnglish: 'How to Find the Event Schedule',
    metaTitle: 'Paano malaman ang schedule ng events sa Philippine Arena',
    metaDescription:
      'Walang permanenteng schedule ang venue — ang lineup ay inaanunsyo ng organizer at ticketing partner.',
    h1: 'Paano malaman ang schedule',
    intro: [
      'Walang nakatakdang permanenteng schedule ang venue. Ang lineup ay inaanunsyo ng mga organizer at ticketing partner.',
    ],
    sections: [
      {
        id: 'source',
        title: 'Saan tumingin',
        body: [
          'Sundin ang opisyal na anunsyo ng artist, promoter o ticketing platform para sa petsa, gate opening at ticket release.',
        ],
      },
      {
        id: 'avoid',
        title: 'Huwag umasa sa hindi opisyal',
        body: [
          'Huwag umasa sa hindi opisyal na listahan o lumang social media post. Ang organizer advisory ang palaging batayan.',
        ],
      },
    ],
    faq: [
      {
        q: 'Saan makikita ang schedule ng concerts sa Philippine Arena?',
        a: 'Wala itong fixed schedule; ang mga organizer at ticketing partner ang nag-aanunsyo. Sundin ang opisyal na advisory para sa petsa at ticket.',
      },
    ],
    updated: '2026-10-27',
  },
];

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getTopicsByPillar(pillar: Pillar): Topic[] {
  return topics.filter((t) => t.pillar === pillar);
}
