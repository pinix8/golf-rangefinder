'use strict';
// 골프장별 코스·홀 파 내장 데이터 (tools/build-par-db.js로 생성 — 직접 수정 시 형식 유지)
// verified=false 항목은 앱에서 「확인 필요」로 표시됨
window.GOLF_PAR_DB = [
 {
  "name": "360도CC",
  "aliases": [
   "360CC",
   "360도 컨트리클럽",
   "360° Country Club",
   "360 Country Club"
  ],
  "region": "경기 여주",
  "nines": [
   {
    "label": "OUT",
    "pars": [
     4,
     4,
     5,
     3,
     4,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "IN",
    "pars": [
     4,
     3,
     5,
     4,
     4,
     3,
     5,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 홀별 텍스트 이미지(num_01~18_txt.png: 'PAR n - yard - HCP')를 직접 판독. 1번 448yd가 홀맵 이미지 백티 거리와 일치.",
  "source": "http://www.360cc.co.kr/course/courseIntro.do",
  "checked": "2026-11-03"
 },
 {
  "name": "가평베네스트CC",
  "aliases": [
   "가평베네스트",
   "가평베네스트GC",
   "가평베네스트 골프클럽",
   "Gapyeong Benest",
   "Benest Gapyeong"
  ],
  "region": "경기 가평",
  "nines": [
   {
    "label": "메이플코스",
    "pars": [
     5,
     4,
     3,
     4,
     4,
     3,
     5,
     4,
     4
    ]
   },
   {
    "label": "파인코스",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     4,
     3,
     4,
     5
    ]
   },
   {
    "label": "버치코스",
    "pars": [
     5,
     3,
     4,
     4,
     3,
     4,
     5,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지(PC 홀별 페이지) 27개 홀 헤더를 원문 HTML에서 직접 확인. 블로그 공략글에 명시된 홀(메이플1·2·3·6, 파인1·2·6·7·9, 버치1·2·4·5·8·9)과 모두 일치. 각 9홀 36.",
  "source": "https://www.benestgolf.com/reve/pc/gp-course/m01.do (m01~m09, p01~p09, b01~b09 홀별 헤더 'PAR n')",
  "checked": "2026-11-03"
 },
 {
  "name": "강남300CC",
  "aliases": [
   "강남300",
   "강남300 컨트리클럽",
   "Kangnam 300 Country Club"
  ],
  "region": "경기 광주",
  "nines": [
   {
    "label": "OUT",
    "pars": [
     5,
     4,
     3,
     4,
     3,
     4,
     4,
     4,
     5
    ]
   },
   {
    "label": "IN",
    "pars": [
     5,
     4,
     3,
     4,
     4,
     4,
     3,
     4,
     5
    ]
   }
  ],
  "verified": false,
  "notes": "공식 IN 홀별표는 3번 PAR4(합73)로 공식 18홀 72파 안내와 불일치 → 후기 근거로 3으로 수정한 값. 현장 확인 필요. OUT은 공식 페이지와 홀별 후기 블로그가 9홀 모두 일치. IN은 공식 페이지(/Mobile/Club/CourseIn)가 3번을 PAR 4로 표기하나 합계 73이 되어 공식 '18홀 72파'와 모순 — 블로그의 'IN 3번 164m 파3'에 따라 3으로 수정(합계 72). IN 4·5·6·8번은 공식 페이지 단독 출처.",
  "source": "https://www.kn300.com/Mobile/Club/CourseOut",
  "checked": "2026-11-03"
 },
 {
  "name": "골프존카운티 진천",
  "aliases": [
   "골프존카운티진천",
   "골프존카운티 진천CC",
   "아트밸리CC",
   "아트밸리 컨트리클럽"
  ],
  "region": "충북 진천",
  "nines": [
   {
    "label": "레이크",
    "pars": [
     4,
     3,
     5,
     4,
     4,
     3,
     5,
     4,
     4
    ]
   },
   {
    "label": "마운틴",
    "pars": [
     4,
     4,
     3,
     4,
     5,
     4,
     3,
     4,
     5
    ]
   },
   {
    "label": "밸리",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     4,
     3,
     5,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "골프존카운티 공식 사이트 코스상세 HTML의 홀별 PAR 값을 직접 파싱(3코스 27홀, 108파).",
  "source": "https://www.golfzoncounty.com/golfclub/courseDtl?golfclubSeq=4&courseSeq=9",
  "checked": "2026-11-03"
 },
 {
  "name": "그린힐CC",
  "aliases": [
   "그린힐CC",
   "그린힐",
   "그린힐 컨트리클럽",
   "Green Hill CC"
  ],
  "region": "경기 광주",
  "nines": [
   {
    "label": "OUT",
    "pars": [
     3,
     5,
     4,
     3,
     5,
     5,
     3,
     4,
     4
    ]
   },
   {
    "label": "IN",
    "pars": [
     4,
     4,
     4,
     3,
     5,
     3,
     4,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "신안그룹 공식 사이트 스코어카드 표(Out/In Course, PAR 행) 직접 판독. OUT 6번은 블루 402m이나 공식 표·홀설명 모두 PAR 5(짧은 롱홀).",
  "source": "https://www.shinangolf.com/club/course/greenhillcc",
  "checked": "2026-11-03"
 },
 {
  "name": "금강CC",
  "aliases": [
   "금강CC",
   "금강",
   "KCC 금강컨트리클럽",
   "금강컨트리클럽"
  ],
  "region": "경기 여주",
  "nines": [
   {
    "label": "서",
    "pars": [
     5,
     4,
     4,
     3,
     4,
     5,
     4,
     3,
     4
    ]
   },
   {
    "label": "남",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "동",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     4,
     4,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 홀별 페이지(course01~03_N.php, 'PAR n / HDCP n') 27개 직접 판독. course01=서, 02=남, 03=동(공식 메뉴 기준).",
  "source": "https://www.kccgolf.co.kr/common/course/course01.php",
  "checked": "2026-11-03"
 },
 {
  "name": "남부CC",
  "aliases": [
   "남부CC",
   "남부",
   "남부컨트리클럽",
   "경기남부 컨트리클럽",
   "Nambu CC"
  ],
  "region": "경기 용인",
  "nines": [
   {
    "label": "OUT",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     3,
     5,
     4,
     4
    ]
   },
   {
    "label": "IN",
    "pars": [
     4,
     3,
     5,
     4,
     4,
     3,
     4,
     5,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 홀별 이미지(course/one, two hole1~9.png의 'PAR n HDCP n')를 직접 판독.",
  "source": "https://www.namboocc.co.kr/course/one/hole01.do",
  "checked": "2026-11-03"
 },
 {
  "name": "남춘천CC",
  "aliases": [
   "남춘천",
   "남춘천 컨트리클럽",
   "강원남춘천 컨트리클럽",
   "Nam Chun Cheon CC"
  ],
  "region": "강원 춘천",
  "nines": [
   {
    "label": "빅토리",
    "pars": [
     4,
     4,
     3,
     4,
     5,
     3,
     5,
     4,
     4
    ]
   },
   {
    "label": "챌린지",
    "pars": [
     5,
     4,
     4,
     3,
     4,
     4,
     4,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스소개 표(VICTORY/CHALLENGE COURSE, Par 열)를 Firecrawl로 원문 판독. 블로그 '빅토리 1번 파4'와도 일치.",
  "source": "https://www.namchuncheon.co.kr/course/intro",
  "checked": "2026-11-03"
 },
 {
  "name": "더스타휴 골프앤리조트",
  "aliases": [
   "더스타휴",
   "더스타휴CC",
   "더 스타 휴",
   "The Star Hue"
  ],
  "region": "경기 양평",
  "nines": [
   {
    "label": "STAR",
    "pars": [
     4,
     4,
     3,
     5,
     3,
     4,
     4,
     4,
     5
    ]
   },
   {
    "label": "HUE",
    "pars": [
     5,
     4,
     5,
     4,
     3,
     4,
     3,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스소개 스코어카드 표(STAR Out 36 / HUE In 36) 직접 판독.",
  "source": "https://www.thestarhue.com/scourse.asp",
  "checked": "2026-11-03"
 },
 {
  "name": "더시에나 서울CC",
  "aliases": [
   "더시에나 CC",
   "더시에나CC",
   "더 시에나 서울 컨트리클럽",
   "중부CC",
   "The Siena Seoul CC"
  ],
  "region": "경기 광주",
  "nines": [
   {
    "label": "동",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     5,
     3,
     4,
     4
    ]
   },
   {
    "label": "서",
    "pars": [
     4,
     4,
     5,
     3,
     4,
     4,
     5,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "더시에나벨루토CC와 별개 골프장(경기 광주 곤지암, 구 중부CC). 공식 동/서코스 페이지를 Firecrawl로 원문 판독. 주의: 같은 그룹에 '더 시에나 제주CC'(제주)도 있어 엑셀의 '더시에나 CC'가 제주CC를 뜻할 가능성은 배제 못 함 — 공식 사이트 메타 설명이 서울CC를 '더시에나 CC'로 지칭해 서울CC로 판단.",
  "source": "https://thesiena.co.kr/content/seoulcc_course_2",
  "checked": "2026-11-03"
 },
 {
  "name": "더시에나벨루토CC",
  "aliases": [
   "더시에나벨루토",
   "시에나벨루토",
   "벨루토",
   "더 시에나 벨루토",
   "세라지오",
   "세라지오CC",
   "The Siena Velluto"
  ],
  "region": "경기 여주",
  "nines": [
   {
    "label": "벨라 (OUT)",
    "pars": [
     4,
     5,
     4,
     4,
     4,
     3,
     5,
     3,
     4
    ]
   },
   {
    "label": "루체 (IN)",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     4,
     3,
     5,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스 제원표(텍스트 표) 원문 확인. 벨라 1~9번, 루체 10~18번. 각 36, 합 72(홈페이지 '18홀 파72' 표기와 일치).",
  "source": "https://thesiena.co.kr/content/velluto_course_1",
  "checked": "2026-11-03"
 },
 {
  "name": "더헤븐CC",
  "aliases": [
   "더헤븐CC",
   "더헤븐",
   "더헤븐컨트리클럽",
   "더헤븐리조트",
   "아일랜드CC",
   "아일랜드리조트",
   "The Heaven CC"
  ],
  "region": "경기 안산(대부도)",
  "nines": [
   {
    "label": "이스트",
    "pars": [
     4,
     4,
     5,
     3,
     4,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "사우스",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     3,
     4,
     4,
     5
    ]
   },
   {
    "label": "웨스트",
    "pars": [
     4,
     4,
     4,
     5,
     3,
     5,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홀 페이지(east_01/south_01/west_01) 하단 9홀 표 'n(Pn)' 원문 직접 확인(2026-11-03). 옛 이름 아일랜드CC.",
  "source": "https://www.theheavenresort.com/ISLANDRESORT/course_result_east_01.asp",
  "checked": "2026-11-03"
 },
 {
  "name": "동촌CC",
  "aliases": [
   "동촌",
   "동촌GC",
   "동촌골프클럽",
   "Dongchon"
  ],
  "region": "충북 충주",
  "nines": [
   {
    "label": "동코스",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     4,
     5,
     3,
     4
    ]
   },
   {
    "label": "서코스",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     3,
     4,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 동/서 코스 홀별 'Par n / 거리' 원문 확인(서코스는 원문 HTML로 재확인). 각 36. 전·후반 순서(동→서 또는 서→동)는 운영에 따라 바뀌므로 코스명으로 구분.",
  "source": "http://www.dongchongc.co.kr/Course/CourseEast",
  "checked": "2026-11-03"
 },
 {
  "name": "라데나GC",
  "aliases": [
   "라데나CC",
   "라데나",
   "라데나골프클럽",
   "두산리조트 춘천CC",
   "춘천CC",
   "Ladena Golf Club"
  ],
  "region": "강원 춘천",
  "nines": [
   {
    "label": "레이크",
    "pars": [
     4,
     3,
     4,
     5,
     4,
     3,
     5,
     4,
     4
    ]
   },
   {
    "label": "가든",
    "pars": [
     4,
     4,
     5,
     3,
     4,
     4,
     3,
     4,
     5
    ]
   },
   {
    "label": "네이처",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     5,
     3,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스 페이지(/course/lake·garden·nature)의 HOLE 1~9 탭을 렌더링해 각 홀 'PAR n' 원문 확인(2026-11-03). 레이크 2~6번은 후기 블로그와도 일치. 1990년 두산리조트 춘천CC로 개장, 2007년 라데나로 변경.",
  "source": "https://www.ladena.co.kr/course/lake",
  "checked": "2026-11-03"
 },
 {
  "name": "라비에벨 듄스",
  "aliases": [
   "라비에벨CC 듄스코스",
   "라비에벨 듄스코스",
   "듄스",
   "La Vie est Belle Dunes",
   "라비에벨 컨트리클럽 듄스코스"
  ],
  "region": "강원 춘천",
  "nines": [
   {
    "label": "듄스 OUT",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     5,
     4,
     3,
     4
    ]
   },
   {
    "label": "듄스 IN",
    "pars": [
     4,
     4,
     4,
     5,
     4,
     3,
     5,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 제원표 원문 확인. OUT 36 / IN 36 / 72 표기와 합계 일치.",
  "source": "https://www.lavieestbellegolfnresort.com/dunescourse/pagesite/course/intro.asp",
  "checked": "2026-11-03"
 },
 {
  "name": "라비에벨 올드코스",
  "aliases": [
   "라비에벨CC 올드코스",
   "라비에벨 올드",
   "라비에벨",
   "La Vie est Belle Old Course",
   "라비에벨 컨트리클럽 올드코스",
   "라베에벨올드"
  ],
  "region": "강원 춘천",
  "nines": [
   {
    "label": "올드 OUT",
    "pars": [
     5,
     4,
     4,
     3,
     5,
     4,
     3,
     4,
     4
    ]
   },
   {
    "label": "올드 IN",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     5,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 제원표 원문 확인. OUT 36 / IN 36 / Total 72 표기와 합계 일치.",
  "source": "https://www.lavieestbellegolfnresort.com/oldcourse/pagesite/course/intro.asp",
  "checked": "2026-11-03"
 },
 {
  "name": "라싸GC",
  "aliases": [
   "라싸CC",
   "라싸",
   "라싸골프클럽",
   "LASSA Golf Club"
  ],
  "region": "경기 포천(이동면)",
  "nines": [
   {
    "label": "마운틴",
    "pars": [
     4,
     4,
     5,
     4,
     3,
     4,
     3,
     4,
     5
    ]
   },
   {
    "label": "레이크",
    "pars": [
     4,
     4,
     3,
     5,
     3,
     5,
     4,
     3,
     5
    ]
   },
   {
    "label": "밸리",
    "pars": [
     4,
     3,
     4,
     5,
     3,
     4,
     4,
     5,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스 페이지 3개(mountain/lake/valley) PAR 표 원문 직접 확인(2026-11-03).",
  "source": "https://www.lassagc.com/course/mountain",
  "checked": "2026-11-03"
 },
 {
  "name": "레이크사이드CC",
  "aliases": [
   "레이크사이드",
   "레이크사이드 컨트리클럽",
   "Lakeside",
   "Lakeside CC"
  ],
  "region": "경기 용인",
  "nines": [
   {
    "label": "동 OUT",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     4,
     5,
     3,
     4
    ]
   },
   {
    "label": "동 IN",
    "pars": [
     4,
     4,
     3,
     4,
     5,
     4,
     3,
     4,
     5
    ]
   },
   {
    "label": "남 OUT",
    "pars": [
     4,
     4,
     3,
     4,
     4,
     5,
     3,
     4,
     5
    ]
   },
   {
    "label": "남 IN",
    "pars": [
     4,
     5,
     3,
     4,
     5,
     3,
     4,
     4,
     4
    ]
   },
   {
    "label": "서 OUT",
    "pars": [
     5,
     4,
     3,
     4,
     4,
     3,
     4,
     5,
     4
    ]
   },
   {
    "label": "서 IN",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     5,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 스코어카드 표 원문 확인. 동·남·서 각 18홀(OUT/IN). 1차 추출의 서 IN [4,5,3,4,4,5,4,5,4](38)은 오류 — 원문상 17번홀은 PAR 3(211yd), 서 IN 합 36. 모든 OUT/IN 36, 각 코스 72로 표 합계와 일치.",
  "source": "https://www.lakeside.kr/course/courseIntro.do",
  "checked": "2026-11-03"
 },
 {
  "name": "렉스필드CC",
  "aliases": [
   "렉스필드CC",
   "렉스필드",
   "렉스필드컨트리클럽",
   "Rexfield CC"
  ],
  "region": "경기 여주",
  "nines": [
   {
    "label": "레이크",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     5,
     3,
     4,
     4
    ]
   },
   {
    "label": "마운틴",
    "pars": [
     4,
     3,
     4,
     5,
     4,
     4,
     3,
     4,
     5
    ]
   },
   {
    "label": "밸리",
    "pars": [
     5,
     4,
     3,
     4,
     4,
     3,
     5,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스 페이지 3개(lake/mountain/valley) PAR 표 원문 직접 확인(2026-11-03). 회원제 18홀+대중제 9홀(어느 9홀이 대중제인지는 미확인).",
  "source": "https://www.rexfield.com/course/lake",
  "checked": "2026-11-03"
 },
 {
  "name": "루트52CC",
  "aliases": [
   "루트52",
   "루트52CC",
   "루트52컨트리클럽",
   "ROUTE52",
   "Route 52 CC"
  ],
  "region": "경기 여주",
  "nines": [
   {
    "label": "A",
    "pars": [
     4,
     4,
     4,
     5,
     3,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "B",
    "pars": [
     4,
     3,
     5,
     4,
     4,
     5,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스소개 표(A1~A9, B1~B9 Par 행) 원문 직접 확인(2026-11-03). 코스명 ROUTE A / ROUTE B.",
  "source": "https://www.route52cc.com/course/courseIntro.asp",
  "checked": "2026-11-03"
 },
 {
  "name": "리베라CC",
  "aliases": [
   "리베라CC",
   "리베라",
   "리베라컨트리클럽",
   "관악CC",
   "Riviera CC"
  ],
  "region": "경기 화성(동탄)",
  "nines": [
   {
    "label": "체리힐",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "파인힐",
    "pars": [
     5,
     4,
     3,
     4,
     4,
     3,
     4,
     4,
     5
    ]
   },
   {
    "label": "레이크",
    "pars": [
     4,
     3,
     4,
     5,
     4,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "밸리",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     3,
     5,
     4,
     4
    ]
   }
  ],
  "verified": false,
  "notes": "공식 사이트 접근 불가 — 2차 출처(렛츠그립·후기) 기준. 공식 사이트(shinangolf.com)는 '접근 차단'이라 미확인. 렛츠그립 코스제원(원문) 기준. 체리힐·레이크는 wakai99 블로그(홀별 파 명시)와 9홀 모두 일치, 파인힐은 ooyjk1 블로그(m.blog.naver.com/ooyjk1/223536486496)와 9홀 모두 일치. 밸리는 kaypen.tistory 코스소개와 1·2·3·6·7·9번 명시 일치, 4·5·8번은 공략 서술상 파4로 정합(명시 아님). 체리힐 4번은 kaypen 글이 '파4'로 적었으나 wakai99·렛츠그립 모두 파5(530~580m)라 파5 채택. 2024년 밸리코스 공사 휴장 언급 있음. 옛 이름 관악CC(1967 서울 신림동).",
  "source": "https://letsgrip.com/detail?clubCd=20",
  "checked": "2026-11-03"
 },
 {
  "name": "리앤리CC",
  "aliases": [
   "리앤리CC",
   "리앤리",
   "리앤리컨트리클럽",
   "Lee&Lee CC",
   "Lee and Lee Country Club"
  ],
  "region": "경기 가평",
  "nines": [
   {
    "label": "레이크",
    "pars": [
     4,
     4,
     4,
     3,
     5,
     3,
     5,
     4,
     4
    ]
   },
   {
    "label": "하이랜드",
    "pars": [
     4,
     4,
     4,
     3,
     5,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "스카이",
    "pars": [
     5,
     4,
     3,
     5,
     4,
     3,
     4,
     3,
     5
    ]
   }
  ],
  "verified": false,
  "notes": "공식 사이트(leenleecc.co.kr) 403 차단으로 미확인. 스카이·레이크는 9manual 후기(2025-03)와 kaypen 코스소개(설계 파 배열 '레이크 4-4-4-3-5-3-5-4-4 / 하이랜드 4-4-4-3-5-4-4-3-5 / 스카이 5-4-3-5-4-3-4-3-5')가 완전 일치하고 2026-04 후기(hammygo)와도 일치. 하이랜드는 kaypen 1개 출처만 전체 배열 제공(1·2·8·9번만 다른 후기와 일치) + 2026-04 기준 하이랜드 코스 공사 중이라 재개장 후 변경 가능성 있어 false.",
  "source": "https://9manual.com/entry/%EB%A6%AC%EC%95%A4%EB%A6%ACcc-%EC%8A%A4%EC%B9%B4%EC%9D%B4-%EB%A0%88%EC%9D%B4%ED%81%AC-%EC%BD%94%EC%8A%A4-%EC%82%AC%EC%A7%84-%EB%B0%8F-%EA%B3%B5%EB%9E%B5-%EB%B0%A9%EB%B2%95",
  "checked": "2026-11-03"
 },
 {
  "name": "몽베르CC",
  "aliases": [
   "몽베르",
   "몽베르CC",
   "대유몽베르CC",
   "대유몽베르",
   "몽베르컨트리클럽",
   "Montvert CC"
  ],
  "region": "경기 포천(영북면)",
  "nines": [
   {
    "label": "명성산 OUT",
    "pars": [
     4,
     4,
     5,
     3,
     4,
     5,
     4,
     3,
     4
    ]
   },
   {
    "label": "명성산 IN",
    "pars": [
     4,
     4,
     5,
     4,
     5,
     3,
     4,
     3,
     4
    ]
   },
   {
    "label": "망무봉 OUT",
    "pars": [
     4,
     4,
     5,
     3,
     4,
     3,
     4,
     4,
     5
    ]
   },
   {
    "label": "망무봉 IN",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     5,
     3,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스제원 표 원문 직접 확인(2026-11-03). 2023.11 동화그룹 인수, 2024.04 멤버십·2025.05 퍼블릭 코스 전면 리뉴얼 후 코스명 변경: 멤버십=명성산(구 북코스 쁘렝땅·에떼), 퍼블릭=망무봉(구 남코스 오똔·이베르). 구 9홀 이름과 OUT/IN의 1:1 대응은 미확인이라 label은 현재 이름 사용.",
  "source": "https://www.montvertcc.com/membership/swp/courseData",
  "checked": "2026-11-03"
 },
 {
  "name": "베어즈베스트 청라 골프클럽",
  "aliases": [
   "베어즈베스트청라",
   "베어즈베스트 청라",
   "베어즈베스트청라GC",
   "청라 베어즈베스트",
   "Bear's Best Cheongna Golf Club"
  ],
  "region": "인천 서구",
  "nines": [
   {
    "label": "아시아",
    "pars": [
     5,
     4,
     3,
     4,
     4,
     4,
     3,
     4,
     5
    ]
   },
   {
    "label": "유럽",
    "pars": [
     4,
     4,
     3,
     5,
     3,
     5,
     4,
     4,
     4
    ]
   },
   {
    "label": "미국",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     5,
     3,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스별 표(page=2 아시아, 3 유럽, 4 미국) 원문 직접 확인, TheGrint 스코어카드(Europe/USA, USA/Australia)와 3개 코스 모두 일치. 아시아=오스트랄아시아(Australasia), 미국=아메리카(USA). 27홀 파108.",
  "source": "https://www.bearsbestcheongnagc.com/Course/CourseInfo?page=2",
  "checked": "2026-11-03"
 },
 {
  "name": "베어크리크 춘천",
  "aliases": [
   "춘천베어크리크",
   "베어크리크춘천",
   "베어크리크 춘천GC",
   "베어크리크골프클럽 춘천",
   "Bear Creek Chuncheon",
   "Bearcreek Chuncheon"
  ],
  "region": "강원 춘천",
  "nines": [
   {
    "label": "OUT",
    "pars": [
     4,
     4,
     4,
     3,
     5,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "IN",
    "pars": [
     4,
     4,
     5,
     4,
     3,
     4,
     5,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스제원 표 직접 확인(OUT 36·IN 36, 72, 2026-11-03). 18홀 단일 코스(OUT/IN). 포천의 베어크리크(크리크/베어 36홀)와는 다른 골프장.",
  "source": "https://www.bearcreek.co.kr/AboutChunCheon/Course.aspx",
  "checked": "2026-11-03"
 },
 {
  "name": "벨라45 컨트리클럽 (마스터스클럽)",
  "aliases": [
   "벨라45",
   "벨라45CC",
   "벨라 45",
   "벨라45 마스터스",
   "BELLA 45 Country Club"
  ],
  "region": "강원 횡성",
  "nines": [
   {
    "label": "C",
    "pars": [
     4,
     4,
     4,
     5,
     3,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "D",
    "pars": [
     4,
     4,
     5,
     3,
     4,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "E",
    "pars": [
     4,
     4,
     3,
     3,
     5,
     4,
     4,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "총 45홀(회원제 오너스 18홀 A/B는 별도 항목, 대중제 마스터스 27홀 C/D/E). 공식 스코어카드 표(courseInfo, courseInfoC/D/E) 원문 직접 확인. C/D는 골프존과 일치, E는 블로그(blog.naver.com/aldalpang/223475441335) 홀별 파와 일치. 주의: 마스터스 메인페이지 홀 슬라이더의 E코스 데이터(4,5,3,5,4,4,4,4,3)는 스코어카드와 다름 — 구 데이터로 판단해 스코어카드 채택.",
  "source": "https://www.bella45.com/masters/swp/courseInfo",
  "checked": "2026-11-03"
 },
 {
  "name": "벨라45 컨트리클럽 (오너스클럽)",
  "aliases": [
   "벨라45 오너스",
   "벨라45CC 오너스",
   "벨라45 오너스클럽"
  ],
  "region": "강원 횡성",
  "nines": [
   {
    "label": "오너스A",
    "pars": [
     5,
     4,
     3,
     4,
     4,
     3,
     4,
     5,
     4
    ]
   },
   {
    "label": "오너스B",
    "pars": [
     4,
     4,
     4,
     5,
     4,
     3,
     4,
     3,
     5
    ]
   }
  ],
  "verified": false,
  "notes": "회원제 코스. 공식 오너스 페이지는 로그인 필요로 확인 불가. 라운드 후기 블로그 1건(홀별 파 원문)만 출처라 미검증. 엑셀 '벨라45'는 마스터스 항목에 매칭.",
  "source": "https://9manual.com/entry/%EB%B2%A8%EB%9D%BC45cc-%EC%98%A4%EB%84%88%EC%8A%A4-%EC%BD%94%EC%8A%A4%EC%82%AC%EC%A7%84-%EB%B0%8F-%EA%B3%B5%EB%9E%B5%EB%B0%A9%EB%B2%95",
  "checked": "2026-11-03"
 },
 {
  "name": "블랙스톤 골프클럽 이천",
  "aliases": [
   "블랙스톤CC",
   "블랙스톤",
   "블랙스톤 이천",
   "블랙스톤이천CC",
   "Black Stone Icheon"
  ],
  "region": "경기 이천",
  "nines": [
   {
    "label": "동",
    "pars": [
     5,
     4,
     4,
     3,
     4,
     4,
     3,
     4,
     5
    ]
   },
   {
    "label": "북",
    "pars": [
     5,
     4,
     3,
     4,
     5,
     4,
     3,
     4,
     4
    ]
   },
   {
    "label": "서",
    "pars": [
     4,
     4,
     4,
     3,
     4,
     5,
     3,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "엑셀 '블랙스톤CC'는 블랙스톤 제주·벨포레(증평)도 있으나 수도권 사용자 기준 이천으로 가정. 공식 홀별 페이지(course-east/north/west-01~09) 27개 원문 직접 확인, 공식 소개의 코스별 파36과 합계 일치. 동/북=회원제 18홀, 서=비회원제(대중형) 9홀.",
  "source": "https://www.blackstoneresort.com/ic/courseView?where=course-east-01",
  "checked": "2026-11-03"
 },
 {
  "name": "블루원 용인 컨트리클럽",
  "aliases": [
   "블루원용인CC",
   "블루원용인",
   "블루원 용인CC",
   "태영컨트리클럽",
   "Blue One Yongin Country Club"
  ],
  "region": "경기 용인",
  "nines": [
   {
    "label": "서",
    "pars": [
     5,
     4,
     3,
     4,
     4,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "중",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     3,
     4,
     4,
     5
    ]
   },
   {
    "label": "동",
    "pars": [
     5,
     4,
     3,
     4,
     5,
     3,
     4,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 사이트(yi.blueone.com) 코스안내 데이터(type 1=서코스(회원제), 2=중코스(회원제), 3=동코스(대중형)) 원문 직접 확인. 동/서는 골프존과 일치. 중코스는 공식 단일 출처(공식 원문이므로 verified). 옛 이름 태영CC.",
  "source": "https://yi.blueone.com/chunks/CourseInfo-D4C_I1UG.js",
  "checked": "2026-11-03"
 },
 {
  "name": "블루헤런CC",
  "aliases": [
   "블루헤런",
   "블루헤런GC",
   "블루헤런 골프클럽",
   "Blue Heron",
   "Blue Heron GC"
  ],
  "region": "경기 여주",
  "nines": [
   {
    "label": "서(West)",
    "pars": [
     5,
     3,
     4,
     4,
     4,
     4,
     3,
     4,
     5
    ]
   },
   {
    "label": "동(East)",
    "pars": [
     4,
     3,
     4,
     5,
     3,
     4,
     5,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 홀별 페이지 18개 원문 확인, 블로그와 일치. 공식 코스개요: West 36 / East 36 / 18홀 72. 2026-11-03 조회.",
  "source": "https://blueheron.co.kr/swp/course/west/hole01 (west/east hole01~09 공식 홀별 페이지)",
  "checked": "2026-11-03"
 },
 {
  "name": "사우스스프링스CC",
  "aliases": [
   "사우스스프링스",
   "사우스 스프링스",
   "South Springs",
   "South Springs CC"
  ],
  "region": "경기 이천",
  "nines": [
   {
    "label": "레이크(Lake)",
    "pars": [
     4,
     5,
     4,
     4,
     3,
     4,
     5,
     3,
     4
    ]
   },
   {
    "label": "마운틴(Mountain)",
    "pars": [
     4,
     4,
     5,
     4,
     3,
     5,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 스코어 표(야드(파)) 원문 확인. Lake PAR36, Mountain PAR36, Total 72 표기와 일치. 마운틴 9번은 507야드지만 표기상 파4. 2026-11-03 조회.",
  "source": "https://www.sscc.co.kr/course",
  "checked": "2026-11-03"
 },
 {
  "name": "서산수 골프앤리조트",
  "aliases": [
   "서산수",
   "서산수CC",
   "서산수골프앤리조트",
   "Seosansoo Golf & Resort"
  ],
  "region": "충남 서산",
  "nines": [
   {
    "label": "서산",
    "pars": [
     4,
     5,
     4,
     4,
     3,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "산수",
    "pars": [
     4,
     4,
     5,
     3,
     4,
     5,
     3,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "충남 서산시 대산읍 소재 확인(추정 맞음). 공식 홈페이지 코스개요 표 원문 직접 확인(각 9홀 파36, 18홀 파72).",
  "source": "https://www.seosansoo.com/course/intro",
  "checked": "2026-11-03"
 },
 {
  "name": "서서울 컨트리클럽",
  "aliases": [
   "서서울",
   "서서울CC",
   "서서울컨트리클럽",
   "Seo Seoul Country Club"
  ],
  "region": "경기 파주",
  "nines": [
   {
    "label": "Lake",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     5,
     4,
     3,
     4
    ]
   },
   {
    "label": "Hill",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     5,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홀별 페이지(Lake course_02_01~09, Hill course_03_01~09) 18개 원문 직접 확인. 두 코스 파 배열이 우연히 동일하나 홀별 거리·HDCP는 서로 다름(정상). Hill HDCP가 홀수라 Hill이 전반(OUT)일 가능성 있음 — 순서는 미확인.",
  "source": "https://www.seoseoul.co.kr/html/course/course_02_01.asp",
  "checked": "2026-11-03"
 },
 {
  "name": "서원밸리 컨트리클럽",
  "aliases": [
   "서월밸리CC",
   "서원밸리CC",
   "서원밸리",
   "서월밸리",
   "Seowon Valley Country Club"
  ],
  "region": "경기 파주",
  "nines": [
   {
    "label": "서원",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     4,
     5,
     3,
     4
    ]
   },
   {
    "label": "밸리",
    "pars": [
     4,
     3,
     5,
     4,
     4,
     4,
     5,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "엑셀 표기 '서월밸리CC'는 '서원밸리CC'의 오기로 판단(동일 명칭 골프장 검색 안 됨). 공식 홀별 정보(HOLE n PAR x) 원문 직접 확인. 서원코스 HDCP 홀수 → 전반, 밸리코스 HDCP 짝수 → 후반으로 추정.",
  "source": "https://www.seowongolf.co.kr/valley/course/seowon",
  "checked": "2026-11-03"
 },
 {
  "name": "서원힐스 컨트리클럽",
  "aliases": [
   "서원힐스",
   "서원힐스CC",
   "Seowon Hills Country Club"
  ],
  "region": "경기 파주",
  "nines": [
   {
    "label": "웨스트",
    "pars": [
     5,
     4,
     4,
     3,
     4,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "사우스",
    "pars": [
     4,
     5,
     4,
     4,
     3,
     5,
     3,
     4,
     4
    ]
   },
   {
    "label": "이스트",
    "pars": [
     4,
     3,
     4,
     4,
     5,
     4,
     4,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스제원 표 원문 직접 확인, 코스별 홀 페이지(east/south/west)와도 일치. 인터내셔널 코스=웨스트+사우스(18홀, LPGA 대회 코스), 퍼블릭=이스트 9홀. 홀 페이지 일부 영문 라벨이 다른 코스명으로 잘못 붙어 있으나 데이터는 코스제원 표와 일치. 서원밸리CC와 같은 단지(별개 골프장).",
  "source": "https://www.seowongolf.co.kr/hills/course/course-info",
  "checked": "2026-11-03"
 },
 {
  "name": "성문안 컨트리클럽",
  "aliases": [
   "성문안CC",
   "성문안",
   "성문안 CC",
   "Seongmunan Country Club"
  ],
  "region": "강원 원주",
  "nines": [
   {
    "label": "OUT",
    "pars": [
     4,
     4,
     4,
     5,
     4,
     3,
     4,
     3,
     5
    ]
   },
   {
    "label": "IN",
    "pars": [
     4,
     4,
     3,
     4,
     4,
     3,
     5,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "HDC(IPARK) 공식 골프 사이트 홀별(HOLE 1~18 PAR) 원문 직접 확인. 블로그의 시그니처홀(9번 파5, 12번 파3, 14번 파4) 언급과 일치. 오크밸리 리조트 단지 내 18홀 대중제.",
  "source": "https://ipark-golf.com/seongmunan/course",
  "checked": "2026-11-03"
 },
 {
  "name": "세레니티 강촌 컨트리클럽",
  "aliases": [
   "세레니티강촌CC",
   "세레니티강촌",
   "세레니티 강촌",
   "파가니카CC",
   "파가니카",
   "Serenity Gangchon Country Club"
  ],
  "region": "강원 춘천",
  "nines": [
   {
    "label": "파란",
    "pars": [
     4,
     3,
     4,
     5,
     3,
     4,
     4,
     4,
     5
    ]
   },
   {
    "label": "청춘",
    "pars": [
     4,
     4,
     5,
     4,
     3,
     5,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "옛 파가니카CC(춘천 남면). 충북 청주 '세레니티CC'와 다른 골프장. 공식 코스개요 스코어카드 표와 홀별 페이지(forest_01~09=파란, hill_01~09=청춘) 일치. 같은 페이지의 '홀별 난이도' 통계표는 6·9·16번 파가 달라(합계 35/37) 오류로 보고 배제.",
  "source": "https://www.serenitygangchon.com/course/intro.asp",
  "checked": "2026-11-03"
 },
 {
  "name": "세이지우드 홍천",
  "aliases": [
   "세이지우드홍천",
   "세이지우드CC 홍천",
   "세이지우드",
   "블루마운틴CC",
   "Sagewood Hongcheon"
  ],
  "region": "강원 홍천",
  "nines": [
   {
    "label": "드림",
    "pars": [
     4,
     5,
     4,
     3,
     5,
     4,
     4,
     3,
     4
    ]
   },
   {
    "label": "비전",
    "pars": [
     4,
     3,
     4,
     5,
     4,
     4,
     5,
     3,
     4
    ]
   },
   {
    "label": "챌린지",
    "pars": [
     5,
     3,
     4,
     3,
     4,
     4,
     5,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스별 홀 페이지(/hongcheon/golf/dream·vision·challenge) 원문 HTML에서 PAR/HDCP 직접 추출. 공식 총괄: 3코스 27홀 파108. 챌린지 코스 URL: https://www.sagewood.co.kr/hongcheon/golf/challenge. 옛 이름 블루마운틴CC(alias)는 기억 기반이며 이번 조사에서 원문 확인은 안 함.",
  "source": "https://www.sagewood.co.kr/hongcheon/golf/dream",
  "checked": "2026-11-03"
 },
 {
  "name": "소노펠리체CC 비발디파크",
  "aliases": [
   "소노펠리체",
   "소노펠리체CC",
   "소노펠리체 비발디파크",
   "비발디파크CC",
   "비발디CC",
   "Sono Felice CC Vivaldi Park"
  ],
  "region": "강원 홍천",
  "nines": [
   {
    "label": "EAST OUT",
    "pars": [
     4,
     4,
     5,
     4,
     3,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "EAST IN",
    "pars": [
     4,
     5,
     3,
     5,
     4,
     4,
     4,
     3,
     4
    ]
   },
   {
    "label": "WEST OUT",
    "pars": [
     4,
     3,
     4,
     4,
     4,
     5,
     4,
     3,
     5
    ]
   },
   {
    "label": "WEST IN",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     3,
     4,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "홍천 비발디파크 소노펠리체CC 기준(이스트 18홀 + 웨스트 18홀, 각각 별도 18홀 코스). 고성 '소노펠리체CC 델피노'와 비발디파크 9홀 마운틴(파3) 코스는 제외. 공식 스코어카드 표 원문(EAST on_flag=01/02, WEST vivaldiCC_CourseInfo on_flag=01/02)에서 추출. WEST IN 공식 표는 거리(Meters) 행이 OUT과 동일하게 복사된 오류가 있으나 PAR 행과 홀별 'HOLE ParX' 표기는 서로 일치. 엑셀 '소노펠리체'가 이스트/웨스트 중 어느 쪽인지 불명 → 둘 다 수록.",
  "source": "https://www.sonofelicecc.com/sn.course.sonoCourseInfo.dp/dmparse.dm?on_flag=01",
  "checked": "2026-11-03"
 },
 {
  "name": "솔라시도CC",
  "aliases": [
   "솔라시도",
   "솔라시도 컨트리클럽",
   "Solaseado",
   "Solaseado Country Club",
   "Solaseado CC"
  ],
  "region": "전남 해남",
  "nines": [
   {
    "label": "솔라",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     5,
     3,
     4,
     4
    ]
   },
   {
    "label": "시도",
    "pars": [
     5,
     4,
     3,
     4,
     4,
     4,
     3,
     5,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스 페이지의 홀별 공략도 이미지(solacourse/sola{n}_img.png, seadocourse/seado{n}_img.png)에 표기된 'PAR x'를 직접 판독(2026-11-03, 텍스트가 아닌 이미지). 각 코스 레이아웃 이미지의 '36Par' 합계와 일치. 코스명 표기: 솔라(SOLA)·시도(SEADO).",
  "source": "https://www.solaseadocc.com/mobile/sub/solaCourse.asp",
  "checked": "2026-11-03"
 },
 {
  "name": "솔모로CC",
  "aliases": [
   "솔모로",
   "솔모로 컨트리클럽",
   "Solmoro",
   "Solmoro CC",
   "한일CC",
   "한일컨트리클럽"
  ],
  "region": "경기 여주",
  "nines": [
   {
    "label": "체리(Cherry)",
    "pars": [
     4,
     4,
     4,
     3,
     4,
     4,
     5,
     4,
     3
    ]
   },
   {
    "label": "퍼시먼(Persimmon)",
    "pars": [
     3,
     4,
     4,
     4,
     3,
     5,
     4,
     4,
     5
    ]
   },
   {
    "label": "파인(Pine)",
    "pars": [
     5,
     4,
     3,
     4,
     5,
     4,
     4,
     3,
     4
    ]
   },
   {
    "label": "메이플(Maple)",
    "pars": [
     5,
     4,
     3,
     4,
     5,
     4,
     3,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 홀별 'N Hole Par X' 원문 확인. 체리 35, 나머지 36 → 36홀 합 143으로 관광공사 정보(36홀 파143)와 일치. 2006년 한일CC에서 개명. 2026-11-03 조회.",
  "source": "https://www.solmoro.com/Course/Course1 (Course1~4: 체리/퍼시먼/파인/메이플)",
  "checked": "2026-11-03"
 },
 {
  "name": "송추CC",
  "aliases": [
   "송추CC",
   "송추",
   "송추컨트리클럽",
   "Songchoo CC"
  ],
  "region": "경기 양주",
  "nines": [
   {
    "label": "WEST",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     5,
     3,
     4,
     4
    ]
   },
   {
    "label": "EAST",
    "pars": [
     5,
     3,
     4,
     4,
     3,
     4,
     5,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스특징 페이지 홀별 스코어카드 표(WEST/EAST 각 36, 합 72) 원문. EAST는 홀별 페이지와도 일치. 9홀 코스 2개(서/동).",
  "source": "https://www.songchoo.co.kr/course-introduction",
  "checked": "2026-11-03"
 },
 {
  "name": "수원CC",
  "aliases": [
   "수원cc",
   "수원CC",
   "수원",
   "수원컨트리클럽",
   "Suwon CC"
  ],
  "region": "경기 용인",
  "nines": [
   {
    "label": "신 OUT",
    "pars": [
     4,
     4,
     3,
     5,
     3,
     4,
     4,
     5,
     4
    ]
   },
   {
    "label": "신 IN",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "구 OUT",
    "pars": [
     5,
     4,
     3,
     4,
     3,
     4,
     5,
     4,
     4
    ]
   },
   {
    "label": "구 IN",
    "pars": [
     4,
     3,
     4,
     5,
     4,
     4,
     3,
     5,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "용인시 기흥구 소재(이름은 수원). 신(NEW)코스 18홀 + 구(OLD)코스 18홀. 공식 코스소개 표(NEW OUT/NEW IN/OLD OUT/OLD IN) 원문(JS 렌더링 후 Firecrawl로 읽음). 공식 표의 NEW OUT 2번 거리가 OLD OUT 2번과 동일(복사 오류 가능성)하나 PAR에는 영향 없음.",
  "source": "https://suwoncc.com/course/intro",
  "checked": "2026-11-03"
 },
 {
  "name": "스카이밸리CC",
  "aliases": [
   "스카이밸리",
   "스카이밸리CC",
   "스카이밸리 컨트리클럽",
   "Sky Valley CC"
  ],
  "region": "경기 여주",
  "nines": [
   {
    "label": "스카이",
    "pars": [
     4,
     5,
     4,
     3,
     5,
     4,
     3,
     4,
     4
    ]
   },
   {
    "label": "밸리",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "레이크",
    "pars": [
     4,
     4,
     3,
     4,
     4,
     5,
     3,
     4,
     5
    ]
   },
   {
    "label": "마운틴",
    "pars": [
     4,
     4,
     4,
     5,
     3,
     4,
     5,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스소개 페이지 원문 HTML의 코스별 PAR 표(각 36) 직접 추출. 스카이/밸리=회원제 18홀, 레이크/마운틴=퍼블릭 18홀.",
  "source": "https://www.skyvalley.co.kr/skyvalley/swp/course_intro",
  "checked": "2026-11-03"
 },
 {
  "name": "시그너스CC",
  "aliases": [
   "시그너스",
   "시그너스 컨트리클럽",
   "Cygnus",
   "Cygnus CC"
  ],
  "region": "충북 충주",
  "nines": [
   {
    "label": "실크(Silk)",
    "pars": [
     5,
     4,
     4,
     3,
     5,
     4,
     3,
     4,
     4
    ]
   },
   {
    "label": "라미(Ramie)",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     3,
     5,
     4,
     4
    ]
   },
   {
    "label": "코튼(Cotton)",
    "pars": [
     4,
     5,
     4,
     5,
     3,
     4,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지(도메인 접속 불가, IP 주소로 접속) 홀별 '거리, Par' 원문 확인. 실크·라미는 블로그와 완전 일치. 코튼 4번은 공식(470m Par 5)과 2025년 후기(430m 파5)가 일치하지만, 2019년 블로그는 파4로 적어 차이가 있음 → 공식값 파5 채택(코튼 36). 2026-11-03 조회.",
  "source": "http://210.122.45.226/sub/cotton.asp (공식 홈페이지 silk.asp / ramie.asp / cotton.asp)",
  "checked": "2026-11-03"
 },
 {
  "name": "써닝포인트CC",
  "aliases": [
   "써닝포인트CC",
   "써닝포인트",
   "써닝포인트 컨트리클럽",
   "Sunning Point CC"
  ],
  "region": "경기 용인",
  "nines": [
   {
    "label": "SUN",
    "pars": [
     4,
     3,
     5,
     4,
     3,
     4,
     4,
     4,
     6
    ]
   },
   {
    "label": "POINT",
    "pars": [
     4,
     4,
     3,
     4,
     5,
     4,
     3,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스정보 스코어카드 표와 코스별 홀 페이지(course-sun.asp, course-point.asp) 원문이 일치. SUN 9번 홀은 파6(637m) — 정상 데이터, SUN 37 + POINT 36 = 총 파73.",
  "source": "https://www.sunningpoint.com/course/course-info.asp",
  "checked": "2026-11-03"
 },
 {
  "name": "썬힐GC",
  "aliases": [
   "썬힐",
   "썬힐CC",
   "썬힐GC",
   "썬힐골프클럽",
   "Sunhill Golf Club"
  ],
  "region": "경기 가평",
  "nines": [
   {
    "label": "썬",
    "pars": [
     4,
     3,
     4,
     5,
     3,
     4,
     5,
     4,
     4
    ]
   },
   {
    "label": "밸리",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     5,
     3,
     4,
     4
    ]
   },
   {
    "label": "파인",
    "pars": [
     5,
     4,
     4,
     3,
     4,
     3,
     4,
     4,
     5
    ]
   },
   {
    "label": "힐",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     4,
     5,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스 페이지(views/course/sun·valley·pine·hill)는 홀 정보를 이미지로만 제공 → 공식 홀 이미지(images/course/{코스}/tabmap_{코스}_0N_img.jpg) 36장의 'HOLE N | PAR X' 표기를 직접 판독. 텍스트 표 아님(이미지 판독)이라는 점 참고. 4개 코스 모두 36.",
  "source": "https://www.sunhillgolf.co.kr/HomePage/views/course/sun",
  "checked": "2026-11-03"
 },
 {
  "name": "아시아나CC",
  "aliases": [
   "아시아나",
   "아시아나 컨트리클럽",
   "Asiana",
   "Asiana CC",
   "Asiana Country Club"
  ],
  "region": "경기 용인",
  "nines": [
   {
    "label": "동코스 OUT",
    "pars": [
     4,
     4,
     4,
     5,
     4,
     3,
     5,
     3,
     4
    ]
   },
   {
    "label": "동코스 IN",
    "pars": [
     5,
     3,
     4,
     4,
     4,
     5,
     3,
     4,
     4
    ]
   },
   {
    "label": "서코스 OUT",
    "pars": [
     5,
     4,
     4,
     4,
     3,
     5,
     4,
     3,
     4
    ]
   },
   {
    "label": "서코스 IN",
    "pars": [
     4,
     4,
     5,
     3,
     4,
     4,
     3,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 스코어카드 HTML 표(HOLE/PAR/코스레이팅/거리) 원문 확인. 표 제목 이미지로 첫 표=동코스, 둘째 표=서코스 확인. 각 9홀 36, 18홀 72. 2026-11-03 조회.",
  "source": "https://www.asianacc.co.kr/course/score.asp",
  "checked": "2026-11-03"
 },
 {
  "name": "안성베네스트GC",
  "aliases": [
   "안성베네스트",
   "안성베네스트CC",
   "안성 베네스트 골프클럽",
   "Ansung Benest Golf Club",
   "Anseong Benest"
  ],
  "region": "경기 안성",
  "nines": [
   {
    "label": "서",
    "pars": [
     4,
     3,
     4,
     5,
     3,
     4,
     4,
     4,
     5
    ]
   },
   {
    "label": "북",
    "pars": [
     5,
     3,
     4,
     4,
     3,
     4,
     4,
     5,
     4
    ]
   },
   {
    "label": "남",
    "pars": [
     5,
     3,
     4,
     4,
     4,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "동",
    "pars": [
     4,
     3,
     4,
     5,
     5,
     4,
     3,
     4,
     4
    ]
   }
  ],
  "verified": false,
  "notes": "공식 홈페이지(benestgolf.com)는 Incapsula 봇차단으로 열람 불가. 서·북·남은 Hole19와 GolfPass(서코스 38582, 남코스 38584, 북코스는 GolfPass에 'East Course'(38583)로 잘못 표기되어 있으나 5번홀 파3·192yd가 ktriptips의 '북코스 5번홀 파3 192야드'와 일치) 두 출처 일치. 동코스(퍼블릭 9홀, ktriptips 기준 PAR36)는 Hole19 단일 출처라 미검증. 코스명 공식 표기(서/북/남/동) 및 현재 운영명(클래식/챌린지 구분 여부) 공식 확인 필요.",
  "source": "https://www.hole19golf.com/courses/ansung-benest-golf-club-west-north",
  "checked": "2026-11-03"
 },
 {
  "name": "안성CC",
  "aliases": [
   "안성CC",
   "안성",
   "안성컨트리클럽",
   "Ansung CC"
  ],
  "region": "경기 안성",
  "nines": [
   {
    "label": "OUT",
    "pars": [
     4,
     4,
     3,
     4,
     5,
     5,
     3,
     4,
     4
    ]
   },
   {
    "label": "IN",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     3,
     5,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "안성시 죽산면 걸미로 487 소재 회원제 18홀 안성컨트리클럽. 공식 스코어카드 표 원문(OUT 36/IN 36/TOTAL 72). 안성베네스트·안성W(골프존카운티)·안성H 등 다른 '안성' 골프장과 혼동 주의.",
  "source": "https://www.ansungcc.co.kr/Course/ScoreCard.aspx",
  "checked": "2026-11-03"
 },
 {
  "name": "에덴블루CC",
  "aliases": [
   "에덴블루CC",
   "에덴블루",
   "에덴블루 컨트리클럽",
   "Eden Blue Country Club"
  ],
  "region": "경기 안성",
  "nines": [
   {
    "label": "레이크",
    "pars": [
     4,
     3,
     4,
     4,
     5,
     3,
     4,
     5,
     4
    ]
   },
   {
    "label": "밸리",
    "pars": [
     4,
     3,
     4,
     4,
     4,
     5,
     4,
     3,
     5
    ]
   },
   {
    "label": "마운틴",
    "pars": [
     4,
     4,
     4,
     3,
     4,
     4,
     5,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스공략도 페이지의 코스별 스코어카드 HTML 표(Par 행) 직접 확인. 주소 경기 안성시 죽산면. 보성에덴CC와 다른 골프장.",
  "source": "https://www.edenblue.co.kr/course/lake1.asp",
  "checked": "2026-11-03"
 },
 {
  "name": "우정힐스CC",
  "aliases": [
   "우정힐스CC",
   "우정힐스",
   "우정힐스 컨트리클럽",
   "Woo Jeong Hills Country Club"
  ],
  "region": "충남 천안",
  "nines": [
   {
    "label": "OUT",
    "pars": [
     4,
     4,
     4,
     3,
     5,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "IN",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     4,
     3,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지(코오롱) 코스소개 표 원문 직접 확인, 18birdies와도 일치. 정규 파72 기준(한국오픈 대회 시 파71 등 대회 세팅은 별도).",
  "source": "https://whcc.kolon.co.kr/pagesite/course/intro.asp",
  "checked": "2026-11-03"
 },
 {
  "name": "웰리힐리CC",
  "aliases": [
   "웰리힐리CC",
   "웰리힐리",
   "웰리힐리 컨트리클럽",
   "웰리힐리파크CC",
   "Welli Hilli Park Country Club"
  ],
  "region": "강원 횡성",
  "nines": [
   {
    "label": "남 OUT",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     3,
     4,
     6,
     5
    ]
   },
   {
    "label": "남 IN",
    "pars": [
     4,
     3,
     4,
     5,
     4,
     4,
     5,
     3,
     5
    ]
   },
   {
    "label": "북 OUT",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "북 IN",
    "pars": [
     4,
     4,
     4,
     5,
     3,
     5,
     3,
     4,
     4
    ]
   }
  ],
  "verified": false,
  "notes": "공식 사이트(wellihillipark.com/golf)는 스크립트 로드 실패로 코스 정보 열람 불가. 북코스(파72)는 Hole19와 Golfify 홀별 파 일치. 남코스는 Hole19 기준 파75(OUT 38/IN 37, 파5 5개·파6 1개)로, 2022년 방문 후기(v.daum.net/v/GDr2eX7ARs)의 '파75, 파5 5개·파6 1개'와 구성은 일치하나 홀별 확인 출처는 Hole19 하나뿐. Golfify는 남코스를 파72(8번 파5, 9번 파4, 16번 파4)로 표기해 충돌 — 남코스 8·9·16번 홀 파는 공식 확인 필요.",
  "source": "https://www.hole19golf.com/courses/welli-hill-park-country-club-south",
  "checked": "2026-11-03"
 },
 {
  "name": "유니아일랜드CC",
  "aliases": [
   "유니아일랜드",
   "유니아일랜드CC",
   "유니아일랜드 골프",
   "Uni Island"
  ],
  "region": "인천 강화",
  "nines": [
   {
    "label": "OUT",
    "pars": [
     4,
     4,
     3,
     5,
     3,
     4,
     4,
     5,
     4
    ]
   },
   {
    "label": "IN",
    "pars": [
     5,
     4,
     4,
     3,
     4,
     5,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스개요 표 원문 직접 확인, 홀별 공략 페이지(courseOut/courseIn)의 Par 표기와도 일치. 주소 인천 강화군 삼산면(석모도).",
  "source": "https://www.uniisland.com/course/main",
  "checked": "2026-11-03"
 },
 {
  "name": "이천마이다스CC",
  "aliases": [
   "이천마이다스",
   "마이다스레이크 이천",
   "마이다스레이크",
   "마이다스레이크 이천 골프앤리조트",
   "Midas Lake Icheon",
   "Icheon Midas"
  ],
  "region": "경기 이천",
  "nines": [
   {
    "label": "올림푸스(Olympus)",
    "pars": [
     5,
     4,
     3,
     4,
     4,
     3,
     5,
     4,
     4
    ]
   },
   {
    "label": "타이탄(Titan)",
    "pars": [
     4,
     4,
     4,
     5,
     3,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "마이다스(Midas)",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     3,
     5,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "마이다스 그룹 통합 홈페이지의 '마이다스레이크 이천 골프앤리조트'(IC) 코스별 'HOLEn PAR x' 원문 확인. 각 9홀 36. 같은 사이트의 CP(마이다스밸리 청평: 밸리/마이다스 코스)와 혼동하지 말 것. 2026-11-03 조회.",
  "source": "https://www.midasgolf.co.kr/IC/OlympusCourse (IC/OlympusCourse, IC/TitanCourse, IC/MidasCourse)",
  "checked": "2026-11-03"
 },
 {
  "name": "이포CC",
  "aliases": [
   "이포CC",
   "이포",
   "이포 컨트리클럽",
   "IPO Country Club"
  ],
  "region": "경기 여주",
  "nines": [
   {
    "label": "OUT",
    "pars": [
     4,
     3,
     5,
     4,
     5,
     4,
     3,
     4,
     4
    ]
   },
   {
    "label": "IN",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     5,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스개요 OUT/IN 표 원문(Firecrawl 렌더링 markdown) 직접 확인. 별도 '퍼블릭 6홀'은 제외.",
  "source": "https://www.ipocc.com/course/intro",
  "checked": "2026-11-03"
 },
 {
  "name": "일동레이크CC",
  "aliases": [
   "일동레이크",
   "일동레이크골프클럽",
   "일동레이크GC",
   "Ildong Lake",
   "Ildong Lake Golf Club"
  ],
  "region": "경기 포천",
  "nines": [
   {
    "label": "마운틴",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "힐",
    "pars": [
     4,
     4,
     5,
     3,
     4,
     5,
     4,
     4,
     3
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스제원 표 직접 확인(마운틴 36·힐 36, 72). 골프저널 기사도 마운틴·힐 각 파36, 18번(힐 9번) 파3로 일치. 2026-11-03 조회.",
  "source": "https://www.ildonglakes.co.kr/course",
  "checked": "2026-11-03"
 },
 {
  "name": "자유CC",
  "aliases": [
   "자유",
   "자유컨트리클럽",
   "Jayu",
   "Jayu CC",
   "Jayu Country Club"
  ],
  "region": "경기 여주",
  "nines": [
   {
    "label": "OUT",
    "pars": [
     4,
     4,
     3,
     4,
     5,
     4,
     5,
     3,
     4
    ]
   },
   {
    "label": "IN",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     5,
     3,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 표 직접 확인(2026-11-03). OUT 6·7·8번홀이 리뉴얼되어 2026년 11월부터 운영 — 신규 기준 7번 파5(Black 450m)·8번 파3(155m). 리뉴얼 전 후기(source2)는 OUT 7번 파3·8번 파5로 7·8번 순서가 반대였음. IN은 두 출처 일치.",
  "source": "https://www.jayucc.co.kr/course-guide/course-overview",
  "checked": "2026-11-03"
 },
 {
  "name": "진양밸리CC",
  "aliases": [
   "진양밸리",
   "진양밸리컨트리클럽",
   "Chinyang Valley",
   "Jinyang Valley",
   "Chinyang Valley CC"
  ],
  "region": "충북 음성",
  "nines": [
   {
    "label": "힐",
    "pars": [
     4,
     4,
     5,
     3,
     4,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "크리크",
    "pars": [
     5,
     4,
     3,
     4,
     4,
     3,
     4,
     4,
     5
    ]
   },
   {
    "label": "밸리",
    "pars": [
     5,
     3,
     4,
     4,
     4,
     5,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 모바일 홈페이지 코스안내 표 직접 확인(각 36, 2026-11-03). 힐·크리크는 블로그와 일치. 블로그는 밸리 5번을 '파5 339M'로 적었으나 공식 표는 파4(W 339m)라 블로그 오기로 판단, 공식값 채택.",
  "source": "http://m.chinyangvalley.co.kr/course/courseIntro.asp",
  "checked": "2026-11-03"
 },
 {
  "name": "천룡CC",
  "aliases": [
   "천룡",
   "천룡컨트리클럽",
   "Chunryong",
   "Chun Ryong",
   "Chun Ryong Country Club"
  ],
  "region": "충북 진천",
  "nines": [
   {
    "label": "황룡",
    "pars": [
     4,
     3,
     5,
     4,
     4,
     3,
     4,
     4,
     5
    ]
   },
   {
    "label": "청룡",
    "pars": [
     5,
     4,
     4,
     3,
     4,
     5,
     3,
     4,
     4
    ]
   },
   {
    "label": "흑룡",
    "pars": [
     4,
     4,
     5,
     3,
     4,
     5,
     4,
     3,
     4
    ]
   }
  ],
  "verified": false,
  "notes": "황룡 2~4번 파는 자동추출값(원문 미재확인) — 현장 스코어카드와 대조 필요. 공식 홈페이지 홀별 공략도 페이지(course_gold/blue/black01~09.asp) 27개를 개별 확인(2026-11-03). 각 36. 청룡(Blue Dragon)·흑룡(Black Dragon)은 GolfPass 스코어카드와 파 일치. 황룡은 공식 페이지만 확인(2번 파3 138yd는 CEO이코노미 기사 언급과 일치).",
  "source": "https://www.crcc.co.kr/course/course_gold01.asp",
  "checked": "2026-11-03"
 },
 {
  "name": "청평마이다스CC",
  "aliases": [
   "청평마이다스",
   "마이다스밸리 청평",
   "마이다스밸리청평GC",
   "마이다스밸리",
   "Midas Valley",
   "Midas Valley Cheongpyeong",
   "Cheongpyeong Midas",
   "쳥평마이다스"
  ],
  "region": "경기 가평",
  "nines": [
   {
    "label": "밸리",
    "pars": [
     4,
     3,
     4,
     4,
     5,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "마이다스",
    "pars": [
     4,
     5,
     3,
     4,
     5,
     4,
     3,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지(midasgolf.co.kr) 표는 미확인. 골프존 코스소개(밸리/마이다스 구분)와 GolfingRecord 스코어카드(Out/In) 파 값이 일치해 verified. GolfingRecord는 밸리 배열을 Out(1~9번)으로 표기. 각 36, 합 72.",
  "source": "https://www.golfzon.com/course/detail/100000972",
  "checked": "2026-11-03"
 },
 {
  "name": "카스카디아CC",
  "aliases": [
   "카스카디아",
   "카스카디아골프클럽",
   "Cascadia",
   "Cascadia Golf Club"
  ],
  "region": "강원 홍천",
  "nines": [
   {
    "label": "스톤",
    "pars": [
     4,
     4,
     5,
     3,
     4,
     3,
     4,
     4,
     5
    ]
   },
   {
    "label": "트리",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     5,
     4,
     3,
     4
    ]
   },
   {
    "label": "워터",
    "pars": [
     4,
     4,
     5,
     3,
     4,
     4,
     3,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 Golf Club 페이지 스코어카드 표(HTML 텍스트)를 원문 확인. Stone/Tree/Water 각 36, 야디지(파3 홀 110~236yd, 파5 홀 437~595yd)와도 정합.",
  "source": "https://cascadia.kr/swp/golfclub",
  "checked": "2026-11-03"
 },
 {
  "name": "클럽72",
  "aliases": [
   "스카이72",
   "클럽72CC",
   "클럽72",
   "스카이72골프앤리조트",
   "SKY72",
   "Sky72 Golf Club",
   "Club72"
  ],
  "region": "인천 중구 영종도",
  "nines": [
   {
    "label": "하늘 OUT",
    "pars": [
     4,
     4,
     5,
     3,
     4,
     5,
     4,
     3,
     4
    ]
   },
   {
    "label": "하늘 IN",
    "pars": [
     5,
     4,
     3,
     4,
     4,
     4,
     3,
     4,
     5
    ]
   },
   {
    "label": "오션 OUT",
    "pars": [
     4,
     4,
     3,
     4,
     5,
     4,
     5,
     3,
     4
    ]
   },
   {
    "label": "오션 IN",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "레이크 OUT",
    "pars": [
     4,
     4,
     5,
     3,
     4,
     5,
     3,
     4,
     4
    ]
   },
   {
    "label": "레이크 IN",
    "pars": [
     4,
     4,
     5,
     4,
     3,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "클래식 OUT",
    "pars": [
     5,
     3,
     4,
     4,
     4,
     3,
     5,
     4,
     4
    ]
   },
   {
    "label": "클래식 IN",
    "pars": [
     4,
     4,
     4,
     5,
     3,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "듄스 (숏코스)",
    "pars": [
     3,
     3,
     3,
     3,
     3,
     4,
     3,
     3,
     3
    ],
    "short": true
   }
  ],
  "verified": true,
  "notes": "2023년 운영사 변경(KX그룹/원더클럽)으로 스카이72 → 클럽72. 공식 사이트(onetheclub.com/club72) 코스 페이지별 데이터 JS(course_sky/_2, ocean/_2, lake/_2, classic/_2, dunes .js의 par_list)를 원문으로 읽음. 하늘·오션·레이크·클래식 각 18홀 파72. 오션은 GolfPass(검색 요약 경유) 홀별 파와 일치. '듄스'는 9홀 숏코스(파28)로 일반 9홀 합 범위(34~38) 밖 — 앱에서 필요 없으면 제외 가능. holes=81은 듄스 9홀 포함.",
  "source": "https://m.onetheclub.com/club72/course_sky",
  "checked": "2026-11-03"
 },
 {
  "name": "클럽디 더플레이어스",
  "aliases": [
   "더플레이어스",
   "더플레이어스GC",
   "더플레이어스CC",
   "클럽디더플레이어스",
   "CLUBD The Players",
   "The Players Golf Club"
  ],
  "region": "강원 춘천",
  "nines": [
   {
    "label": "밸리",
    "pars": [
     4,
     4,
     5,
     3,
     5,
     4,
     3,
     4,
     4
    ]
   },
   {
    "label": "레이크",
    "pars": [
     4,
     4,
     3,
     4,
     4,
     4,
     5,
     3,
     5
    ]
   },
   {
    "label": "마운틴",
    "pars": [
     4,
     3,
     5,
     4,
     3,
     4,
     5,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스안내 표(Par 행) 원문 직접 확인(2026-11-03). 옛 단독 사이트 playersgc.com.",
  "source": "https://www.clubd.com/theplayers/course/courseIntro.do",
  "checked": "2026-11-03"
 },
 {
  "name": "클럽모우CC",
  "aliases": [
   "클럽모우CC",
   "클럽모우",
   "Club MOW",
   "클럽모우 컨트리클럽"
  ],
  "region": "강원 홍천",
  "nines": [
   {
    "label": "마운틴",
    "pars": [
     5,
     4,
     4,
     3,
     4,
     4,
     3,
     4,
     5
    ]
   },
   {
    "label": "오아시스",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     3,
     4,
     4,
     5
    ]
   },
   {
    "label": "와일드",
    "pars": [
     5,
     4,
     4,
     4,
     3,
     5,
     3,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지(SPA) 코스소개 및 코스분석 화면 소스의 코스별 PAR 표 원문 직접 확인(두 화면 일치).",
  "source": "https://www.clubmow.com/course-info",
  "checked": "2026-11-03"
 },
 {
  "name": "킹스데일CC",
  "aliases": [
   "킹스데일",
   "킹스데일골프클럽",
   "킹스데일GC",
   "Kingsdale",
   "Kingsdale Golf Club"
  ],
  "region": "충북 충주",
  "nines": [
   {
    "label": "레이크",
    "pars": [
     4,
     4,
     3,
     4,
     4,
     5,
     4,
     3,
     5
    ]
   },
   {
    "label": "힐",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     3,
     4,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스소개 표(Lake course/Hill course, 홀별 Par) 원문 확인. 각 36, 합 72. 레이크/힐 중 어느 쪽이 OUT인지는 공식표에 명시 없음.",
  "source": "https://www.kingsdale.co.kr/course/intro",
  "checked": "2026-11-03"
 },
 {
  "name": "태광CC",
  "aliases": [
   "태광CC",
   "태광",
   "태광 컨트리클럽",
   "Taekwang Country Club"
  ],
  "region": "경기 용인",
  "nines": [
   {
    "label": "북",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     4,
     5,
     3,
     4
    ]
   },
   {
    "label": "남",
    "pars": [
     4,
     4,
     4,
     4,
     5,
     3,
     5,
     3,
     4
    ]
   },
   {
    "label": "서",
    "pars": [
     4,
     5,
     3,
     5,
     4,
     4,
     4,
     3,
     4
    ]
   },
   {
    "label": "동",
    "pars": [
     4,
     5,
     4,
     3,
     5,
     4,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스안내 페이지의 홀 데이터(number/par/hdcp) 원문 직접 확인. 주소 경기 용인시 기흥구 흥덕4로 77.",
  "source": "https://taekwangcc.co.kr/introduction/course",
  "checked": "2026-11-03"
 },
 {
  "name": "티클라우드CC",
  "aliases": [
   "티클라우드CC",
   "티클라우드",
   "티 클라우드 컨트리클럽",
   "다이너스티CC",
   "Tee Cloud CC"
  ],
  "region": "경기 동두천",
  "nines": [
   {
    "label": "해밀",
    "pars": [
     4,
     4,
     5,
     3,
     4,
     5,
     4,
     3,
     4
    ]
   },
   {
    "label": "빛채",
    "pars": [
     4,
     3,
     4,
     5,
     4,
     4,
     5,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 홀별 공략 페이지(HAEMIL/VICHE 1~9홀 PAR 표기) 원문 직접 확인. 옛 이름 다이너스티CC(1999 개장). 한경 기사(해밀1 파4·6 파5·8 파3, 빛채4 파5·8 파3)와도 일치.",
  "source": "https://www.teecloud.co.kr/new/course/course01.asp",
  "checked": "2026-11-03"
 },
 {
  "name": "파인비치CC",
  "aliases": [
   "파인비치",
   "파인비치 골프링크스",
   "파인비치골프링크스",
   "Pine Beach",
   "Pine Beach Golf Links"
  ],
  "region": "전남 해남",
  "nines": [
   {
    "label": "파인",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     5,
     4,
     3,
     4
    ]
   },
   {
    "label": "비치",
    "pars": [
     4,
     4,
     5,
     3,
     4,
     3,
     4,
     5,
     4
    ]
   },
   {
    "label": "오시아노",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     3,
     4,
     5,
     4
    ]
   }
  ],
  "verified": false,
  "notes": "홀별 파를 요약 도구 경유로 확인(원문 미대조) — 현장 스코어카드와 대조 필요. 공식 홈페이지 홀별 페이지 27개(course/p1~p9, b1~b9, o1~o9.asp)의 'HOLE n Par x / HDCP y' 원문을 직접 확인(2026-11-03). 홀별 COURSE TIP 설명(파3/파4/파5 언급)과도 일치. 각 9홀 합 36. 대중제 27홀(파인·비치·오시아노).",
  "source": "https://www.pinebeachcc.co.kr/course/p1.asp",
  "checked": "2026-11-03"
 },
 {
  "name": "파인스톤CC",
  "aliases": [
   "파인스톤CC",
   "파인스톤",
   "파인스톤 컨트리클럽",
   "Pinestone CC"
  ],
  "region": "충남 당진",
  "nines": [
   {
    "label": "파인",
    "pars": [
     4,
     3,
     4,
     5,
     4,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "스톤",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     4,
     4,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스소개 스코어카드 표(PINE COURSE/STONE COURSE, Par·Handicap·티별 거리) 원문 직접 확인(JS 렌더링이라 Firecrawl로 읽음). 충남 당진시 송산면.",
  "source": "https://www.pinestonecc.com/course/intro",
  "checked": "2026-11-03"
 },
 {
  "name": "페럼CC",
  "aliases": [
   "페럼클럽",
   "페럼",
   "페럼골프클럽",
   "Ferrum Club",
   "Ferrum"
  ],
  "region": "경기 여주",
  "nines": [
   {
    "label": "동",
    "pars": [
     4,
     4,
     3,
     4,
     5,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "서",
    "pars": [
     4,
     4,
     5,
     4,
     3,
     4,
     3,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 동코스(1~9번)/서코스(10~18번) 홀 이미지의 'HOLE n xxxYD / n PAR' 표기를 원문 확인. 동 36, 서 36, 합 72. 일부 후기 블로그는 서코스를 1~9번으로 표기(서 1번 파4 380m, 3번 파5 532m)하므로 출발 코스에 따라 번호가 바뀔 수 있음.",
  "source": "https://www.ferrumclub.com/course/east.asp",
  "checked": "2026-11-03"
 },
 {
  "name": "포레스트힐CC",
  "aliases": [
   "포레스트힐CC",
   "포레스트힐",
   "포레스트힐 컨트리클럽",
   "Forest Hill CC"
  ],
  "region": "경기 포천",
  "nines": [
   {
    "label": "락",
    "pars": [
     5,
     3,
     5,
     4,
     4,
     4,
     3,
     4,
     4
    ]
   },
   {
    "label": "힐",
    "pars": [
     4,
     4,
     3,
     4,
     4,
     5,
     4,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스제원표(ROCK/HILL) 원문 직접 확인, ROCK은 홀별 공략 페이지와도 일치. 18홀(락+힐) + 6홀 FOREST 코스(PAR 4,4,3,4,3,4 = 22) 총 24홀 — FOREST는 9홀이 아니라 nines에서 제외. 포천시 화현면. 포천힐스CC와 다른 골프장.",
  "source": "https://www.foresthill.kr/html/course01.asp",
  "checked": "2026-11-03"
 },
 {
  "name": "포천베어크리크",
  "aliases": [
   "베어크리크 포천",
   "베어크리크포천",
   "베어크리크",
   "베어크리크GC",
   "베어크리크골프클럽",
   "Bear Creek",
   "Bearcreek Pocheon"
  ],
  "region": "경기 포천",
  "nines": [
   {
    "label": "크리크 OUT",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     3,
     4,
     5,
     4
    ]
   },
   {
    "label": "크리크 IN",
    "pars": [
     5,
     4,
     3,
     4,
     4,
     3,
     4,
     4,
     5
    ]
   },
   {
    "label": "베어 OUT",
    "pars": [
     4,
     3,
     4,
     5,
     4,
     3,
     4,
     5,
     4
    ]
   },
   {
    "label": "베어 IN",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     5,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스제원 표(PAR 행) 원문 확인. 크리크·베어 각 18홀 Par72. 베어코스는 좌/우 투그린이며 두 그린 모두 홀별 파 동일. 베어크리크 춘천(별도 골프장)과 혼동 주의.",
  "source": "https://www.bearcreek.co.kr/About/Course.aspx",
  "checked": "2026-11-03"
 },
 {
  "name": "포천아도니스CC",
  "aliases": [
   "아도니스",
   "아도니스CC",
   "포천아도니스",
   "아도니스 컨트리클럽",
   "Adonis CC"
  ],
  "region": "경기 포천",
  "nines": [
   {
    "label": "서",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     5,
     3,
     4,
     4
    ]
   },
   {
    "label": "중",
    "pars": [
     4,
     4,
     3,
     4,
     5,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "동",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     5,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 스코어카드 페이지 원문 표(WEST/MIDDLE/EAST COURSE, 각 36). 블로그 후기 '동코스 1번홀 PAR4/핸디캡2'와 일치.",
  "source": "https://www.adoniscc.co.kr/course/score",
  "checked": "2026-11-03"
 },
 {
  "name": "포천힐스CC",
  "aliases": [
   "포천힐스CC",
   "포천힐스",
   "포천힐스 컨트리클럽",
   "Fortune Hills CC",
   "Pocheon Hills CC"
  ],
  "region": "경기 포천",
  "nines": [
   {
    "label": "가든",
    "pars": [
     5,
     4,
     5,
     3,
     4,
     3,
     4,
     4,
     4
    ]
   },
   {
    "label": "팰리스",
    "pars": [
     5,
     3,
     4,
     5,
     3,
     4,
     3,
     4,
     5
    ]
   },
   {
    "label": "캐슬",
    "pars": [
     5,
     4,
     3,
     4,
     4,
     4,
     3,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스개요 스코어카드 표(가든/팰리스/캐슬, 티별 거리+Par) 원문 직접 확인. 2026 KLPGA 챔피언십 기사(캐슬→팰리스 기준 2번 파4, 12번 파4, 13번 파5, 15번 파4, 16번 파3)와도 일치. 포천시 군내면.",
  "source": "https://www.fortunehills.co.kr/Course/Course.aspx",
  "checked": "2026-11-03"
 },
 {
  "name": "푸른솔GC 포천",
  "aliases": [
   "푸른솔CC",
   "푸른솔",
   "푸른솔GC",
   "푸른솔골프클럽 포천",
   "푸른솔 포천",
   "Purunsol GC Pocheon"
  ],
  "region": "경기 포천",
  "nines": [
   {
    "label": "마운틴",
    "pars": [
     5,
     4,
     4,
     4,
     3,
     5,
     4,
     3,
     4
    ]
   },
   {
    "label": "밸리",
    "pars": [
     5,
     4,
     4,
     3,
     5,
     3,
     4,
     4,
     4
    ]
   },
   {
    "label": "레이크",
    "pars": [
     5,
     4,
     4,
     3,
     4,
     4,
     4,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "엑셀의 '푸른솔CC'는 수도권 기준으로 푸른솔GC 포천(포천시 가산면, purunsol.co.kr)으로 간주. 동명의 푸른솔GC 장성(전남 장성, purunsolgc.co.kr)은 별개 골프장 — 사용자가 장성을 의미했다면 교체 필요. 공식 코스제원표와 홀별공략 페이지 두 곳 모두 원문 직접 확인, 일치.",
  "source": "https://www.purunsol.co.kr/Course/Info.aspx",
  "checked": "2026-11-03"
 },
 {
  "name": "프리스틴밸리CC",
  "aliases": [
   "프리스틴밸리CC",
   "프리스틴밸리",
   "프리스틴밸리GC",
   "프리스틴밸리 골프클럽",
   "Pristine Valley GC"
  ],
  "region": "경기 가평",
  "nines": [
   {
    "label": "프리스틴",
    "pars": [
     5,
     4,
     3,
     4,
     5,
     3,
     4,
     4,
     4
    ]
   },
   {
    "label": "밸리",
    "pars": [
     5,
     3,
     4,
     4,
     5,
     4,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스제원 표(1H~18H METER/PAR, OUT=프리스틴 코스, IN=밸리 코스) 원문 직접 확인(Firecrawl). 코스 설명(밸리 2번 파3 캐리 등)과도 정합.",
  "source": "https://www.pristinevalley.co.kr/course/courseInfo.asp",
  "checked": "2026-11-03"
 },
 {
  "name": "필로스CC",
  "aliases": [
   "필로스CC",
   "필로스",
   "필로스GC",
   "필로스 골프클럽",
   "Philos CC"
  ],
  "region": "경기 포천",
  "nines": [
   {
    "label": "EAST",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     3,
     4,
     5,
     4
    ]
   },
   {
    "label": "WEST",
    "pars": [
     4,
     3,
     5,
     4,
     3,
     4,
     5,
     4,
     4
    ]
   },
   {
    "label": "SOUTH",
    "pars": [
     4,
     4,
     5,
     3,
     4,
     5,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스제원표(EAST/WEST/SOUTH, Black/White/Lady·Par·Hdcp) 원문 직접 확인. 포천시 일동면.",
  "source": "https://www.philosgc.com/Course/Intro.aspx",
  "checked": "2026-11-03"
 },
 {
  "name": "한성CC",
  "aliases": [
   "한성",
   "한성컨트리클럽",
   "Hansung",
   "Hansung Country Club"
  ],
  "region": "경기 용인",
  "nines": [
   {
    "label": "오렌지",
    "pars": [
     4,
     4,
     5,
     4,
     3,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "블루",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "그린",
    "pars": [
     4,
     4,
     5,
     3,
     4,
     5,
     3,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스공략 페이지(Orange/Blue/Green 코스)의 홀 요약 목록과 홀별 상세페이지 'PAR n / HDCP n' 두 곳을 모두 원문 확인, 일치. 각 36.",
  "source": "https://www.hansung-cc.co.kr/hcc/cont_course/sub002_01_01.asp",
  "checked": "2026-11-03"
 },
 {
  "name": "화산CC",
  "aliases": [
   "화산",
   "화산컨트리클럽",
   "화산골프장",
   "Hwasan",
   "Hwasan Country Club"
  ],
  "region": "경기 용인",
  "nines": [
   {
    "label": "OUT",
    "pars": [
     5,
     4,
     4,
     4,
     3,
     4,
     3,
     4,
     5
    ]
   },
   {
    "label": "IN",
    "pars": [
     4,
     3,
     4,
     4,
     3,
     5,
     4,
     5,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스제원 표(Par 열, OUT 36/IN 36/TOTAL 72) 원문 확인. 후기(아웃 첫 홀 파5, 인코스 2번 파3 분화구 시그니처홀)와도 일치. 일부 블로그의 '아웃 1번 파4' 기술은 공식표와 불일치하여 배제.",
  "source": "https://www.hwasancc.com/course/spec",
  "checked": "2026-11-03"
 },
 {
  "name": "휘슬링락CC",
  "aliases": [
   "휘슬링락CC",
   "휘슬링락",
   "휘슬링락컨트리클럽",
   "Whistling Rock CC"
  ],
  "region": "강원 춘천",
  "nines": [
   {
    "label": "클라우드",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     4,
     5,
     3,
     4
    ]
   },
   {
    "label": "코쿤",
    "pars": [
     4,
     5,
     4,
     4,
     3,
     4,
     5,
     3,
     4
    ]
   },
   {
    "label": "템플",
    "pars": [
     4,
     5,
     4,
     4,
     4,
     3,
     5,
     4,
     3
    ]
   }
  ],
  "verified": false,
  "notes": "공식 홈페이지(whistlingrockcc.com)는 회원 로그인 전용이라 코스표 열람 불가. 클라우드(Cloud): golfify·hole19·GolfPass·AllSquare 일치. 코쿤(Cocoon): golfify·hole19(Cloud-Cocoon 조합) 일치. 템플(Temple): golfify 원문은 4,5,4,4,4,3,5,3,4(8번 파3 256yd, 9번 파4 406yd)이나, Golf Course Architecture 2017-07-13 기사(Renaissance Golf Design 리노베이션)에 '템플 8번 파3→파4, 9번 파4→파3 전환'이 명시돼 이를 반영해 8·9번 파를 맞바꾼 값 — 현행 확인 출처 없음. 템플은 실사용 전 반드시 확인 필요(클라우드·코쿤은 2개 이상 출처 일치이나 해외 DB라 리노베이션 반영 여부 미확인).",
  "source": "https://www.golfify.io/courses/whistling-rock-country-club-cloud",
  "checked": "2026-11-03"
 },
 {
  "name": "힐드로사이CC",
  "aliases": [
   "힐드로사이CC",
   "힐드로사이",
   "힐드로사이 컨트리클럽",
   "Hill de Loci CC"
  ],
  "region": "강원 홍천",
  "nines": [
   {
    "label": "버치",
    "pars": [
     4,
     5,
     4,
     4,
     3,
     4,
     3,
     4,
     5
    ]
   },
   {
    "label": "파인",
    "pars": [
     4,
     5,
     4,
     3,
     5,
     3,
     4,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지(SPA) 코스개요 표(Birch/Pine PAR 행, 총 Par72·7,423yds)와 홀별 페이지 데이터(Birch 1~9, Pine 10~18 par) 원문 직접 확인, 일치. 홍천군 남면.",
  "source": "https://www.hilldeloci.co.kr/course/introduction",
  "checked": "2026-11-03"
 },
 {
  "name": "힐마루골프앤리조트 창녕",
  "aliases": [
   "동훈힐마루CC",
   "동훈힐마루",
   "힐마루CC",
   "창녕힐마루CC",
   "동훈힐마루컨트리클럽",
   "Hillmaru"
  ],
  "region": "경남 창녕",
  "nines": [
   {
    "label": "동",
    "pars": [
     4,
     4,
     4,
     5,
     4,
     3,
     5,
     3,
     4
    ]
   },
   {
    "label": "서",
    "pars": [
     4,
     4,
     5,
     4,
     3,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "남",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     4,
     5,
     3,
     4
    ]
   },
   {
    "label": "북",
    "pars": [
     4,
     3,
     4,
     4,
     5,
     3,
     5,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홀별 페이지 36개(hill_01~18, maru_01~18) 'parN' 원문 직접 확인(2026-11-03). 공식 코스개요: 힐코스(대중제)=동1~9/서10~18, 마루코스(회원제)=남1~9/북10~18. 포천의 '힐마루골프앤리조트 포천'(구 다른 골프장)과 혼동 주의.",
  "source": "https://www.hillmaru.com/Mobile/Club/iframe/hill_01.html",
  "checked": "2026-11-03"
 },
 {
  "name": "힐마루골프앤리조트 포천",
  "aliases": [
   "포천 힐마루",
   "힐마루 포천",
   "포천힐마루",
   "포천힐마루CC",
   "힐마루포천",
   "힐마루CC 포천",
   "힐마루 포천CC",
   "Hillmaru Pocheon"
  ],
  "region": "경기 포천 영중면",
  "nines": [
   {
    "label": "시그니처 A",
    "pars": [
     4,
     4,
     3,
     4,
     5,
     3,
     4,
     5,
     4
    ]
   },
   {
    "label": "시그니처 B",
    "pars": [
     4,
     4,
     4,
     5,
     3,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "브리즈",
    "pars": [
     4,
     4,
     3,
     4,
     4,
     5,
     3,
     4,
     5
    ]
   },
   {
    "label": "선샤인",
    "pars": [
     5,
     4,
     3,
     4,
     5,
     3,
     4,
     3,
     5
    ]
   },
   {
    "label": "네스트",
    "pars": [
     4,
     3,
     4,
     5,
     4,
     4,
     5,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스안내 홀별 설명의 PAR 표기 원문 확인. 시그니처 A 1번만 공식 설명에 파 표기가 없어 골프저널(파4, 395m)·라운드 후기로 확인. 시그니처 A·B=18홀, 브리즈·선샤인·네스트=27홀. 창녕 힐마루와 별개.",
  "source": "https://pocheon.hillmaru.com/club-intro/courses",
  "checked": "2026-11-03"
 },
 {
  "name": "H1클럽",
  "aliases": [
   "H1CC",
   "H1",
   "H1 CLUB",
   "덕평CC",
   "덕평컨트리클럽"
  ],
  "region": "경기 이천",
  "nines": [
   {
    "label": "마운틴",
    "pars": [
     4,
     4,
     4,
     4,
     3,
     5,
     4,
     3,
     5
    ]
   },
   {
    "label": "레이크",
    "pars": [
     4,
     5,
     4,
     4,
     3,
     4,
     5,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 홀별 이미지(n_M1~9, n_L1~9.jpg)의 PAR 배지를 직접 판독. 블로그 후기에 일부 홀 파 변경(3↔4) 언급이 있어 현재 공식 이미지 기준. 전후반 순서(마운틴/레이크)는 공식 메뉴 순서.",
  "source": "https://www.h1club.co.kr/html/course_mountain.asp",
  "checked": "2026-11-03"
 },
 {
  "name": "YJC골프클럽",
  "aliases": [
   "여주CC",
   "여주",
   "여주컨트리클럽",
   "YJC GC",
   "Yeo Ju Classic Golf Club",
   "여주클래식"
  ],
  "region": "경기 여주",
  "nines": [
   {
    "label": "ACE",
    "pars": [
     5,
     3,
     4,
     4,
     4,
     4,
     5,
     3,
     4
    ]
   },
   {
    "label": "CHALLENGE",
    "pars": [
     4,
     3,
     5,
     3,
     5,
     4,
     4,
     4,
     4
    ]
   },
   {
    "label": "DREAM",
    "pars": [
     4,
     4,
     4,
     3,
     4,
     5,
     5,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 '코스소개 및 제원' 표 원문 직접 확인(각 코스 1번홀 파는 개별 홀 페이지와도 일치). 여주CC(1975년 개장)가 YJC골프클럽(Yeo Ju Classic)으로 개명. 주소 경기 여주시 월평로 78. 여주 소재 다른 골프장(자유CC 등)과 혼동 주의.",
  "source": "https://www.yeojoocc.co.kr/swp/course",
  "checked": "2026-11-03"
 }
];
