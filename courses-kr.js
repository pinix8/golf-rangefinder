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
  "name": "88CC",
  "aliases": [
   "88CC",
   "88",
   "88컨트리클럽",
   "팔팔CC",
   "88 Country Club"
  ],
  "region": "경기 용인",
  "nines": [
   {
    "label": "동 OUT",
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
    "label": "동 IN",
    "pars": [
     5,
     4,
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
    "label": "서 OUT",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "서 IN",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 36개 홀 페이지의 홀 안내 이미지(images/course/a1~a18, b1~b18.png) 상단 'Par n' 표기를 직접 확인(텍스트 표 없음, 이미지 판독). 각 18홀 72. 동·서 각 18홀 코스.",
  "source": "https://www.88countryclub.co.kr/Course/ca_01.aspx (동 ca_01~ca_18, 서 cb_01~cb_18 홀별 이미지 'Par n')",
  "checked": "2026-11-04"
 },
 {
  "name": "가야CC",
  "aliases": [
   "가야",
   "가야컨트리클럽",
   "가야 컨트리클럽",
   "Gaya CC"
  ],
  "region": "경남 김해",
  "nines": [
   {
    "label": "신어",
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
    "label": "낙동",
    "pars": [
     5,
     4,
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
    "label": "김해",
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
   },
   {
    "label": "수로",
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
    "label": "가락",
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
   },
   {
    "label": "퍼블릭",
    "pars": [
     4,
     4,
     5,
     4,
     4,
     3,
     3,
     4,
     3
    ]
   }
  ],
  "verified": true,
  "notes": "공식 스코어카드 HTML 표 원문 직접 확인. 회원제 45홀(신어·낙동·김해·수로·가락) + 퍼블릭 9홀(파34, 전장 2,259m). SBS골프 홀영상(신어1 PAR4, 낙동1 PAR5)·블로그(신어5·8 PAR4)와 일치. 김해 동명이 골프장 없음(김해시 소재).",
  "source": "https://www.gayacc.com/sub_contents/sub2_8_new.html (공식 스코어카드, course.php?location=56)",
  "checked": "2026-11-04"
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
  "name": "강동디아너스CC",
  "aliases": [
   "강동디아너스",
   "강동 디아너스",
   "강동디아너스 컨트리클럽",
   "디아너스CC",
   "블루원디아너스",
   "블루원 디아너스CC",
   "Kangdong The Honors"
  ],
  "region": "경북 경주",
  "nines": [
   {
    "label": "레이크",
    "pars": [
     4,
     5,
     4,
     3,
     5,
     3,
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
     4,
     5,
     4,
     5,
     4,
     3,
     4
    ]
   },
   {
    "label": "힐스",
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
  "notes": "공식 스코어카드 HTML 표 원문 직접 확인(전장과도 정합). 홀별 페이지(레이크1 Par4, 2 Par5)와 일치. 구 블루원 디아너스, 회원제 27홀(PAR 108).",
  "source": "https://gj.kangdongcnl.com/content/02course/05_01.jsp (공식 스코어카드)",
  "checked": "2026-11-04"
 },
 {
  "name": "거제뷰CC",
  "aliases": [
   "거제뷰",
   "거제뷰컨트리클럽",
   "거제뷰 컨트리클럽",
   "Geoje View CC"
  ],
  "region": "경남 거제",
  "nines": [
   {
    "label": "해돋이",
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
    "label": "해넘이",
    "pars": [
     4,
     4,
     3,
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
  "notes": "공식 홈페이지 코스 페이지 스코어카드 HTML 표 원문 직접 확인(Back 전장과 파 정합). 해돋이(OUT)+해넘이(IN) 18홀 파72.",
  "source": "https://www.geojeview.co.kr/course",
  "checked": "2026-11-04"
 },
 {
  "name": "경주 이스트힐 컨트리클럽",
  "aliases": [
   "이스트힐",
   "이스트힐CC",
   "경주 이스트힐CC",
   "Easthill Country Club"
  ],
  "region": "경북 경주",
  "nines": [
   {
    "label": "레이크",
    "pars": [
     4,
     3,
     5,
     4,
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스소개 표(Lake/Valley Course PAR·METER) 원문 직접 확인. 경북 경주시 양남면(토함산 줄기), 진주CC 계열.",
  "source": "https://www.easthills.co.kr/Course/Intro.aspx",
  "checked": "2026-11-04"
 },
 {
  "name": "경주신라CC",
  "aliases": [
   "경주신라",
   "경주신라컨트리클럽",
   "경주신라 컨트리클럽",
   "신라CC",
   "Gyeongju Silla CC"
  ],
  "region": "경북 경주",
  "nines": [
   {
    "label": "천마 OUT",
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
    "label": "천마 IN",
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
    "label": "화랑 OUT",
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
    "label": "화랑 IN",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스공략 페이지 HTML 원문에서 '코스 N홀 PAR n' 36개 홀 직접 확인(전장과 정합). 천마·화랑 각 18홀 파72(코스소개 페이지 표기와 일치).",
  "source": "https://sillacc.co.kr/swp/cheonma_course , https://sillacc.co.kr/swp/hwarang_course (홀별 PAR·전장)",
  "checked": "2026-11-04"
 },
 {
  "name": "경주CC",
  "aliases": [
   "경주",
   "경주컨트리클럽",
   "경주 컨트리클럽",
   "Gyeongju CC",
   "Kyongju CC"
  ],
  "region": "경북 경주",
  "nines": [
   {
    "label": "선(SUN)",
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
    "label": "씨(SEA)",
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
    "label": "문(MOON)",
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
  "notes": "공식 홈페이지 코스소개 스코어카드 HTML 표 원문 직접 확인(전장과 정합). 경주 보문로 182-98 대중제 27홀(보문개발). Sea 8번 파5 462m(HCP2)가 다음카페 글과 일치. '경주신라CC'와 별개.",
  "source": "https://www.kyongjugolf.co.kr/html/Course/CourseIntro.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "고성노벨CC",
  "aliases": [
   "고성노벨",
   "노벨CC",
   "노벨컨트리클럽",
   "고성노벨컨트리클럽",
   "Goseong Nobel CC"
  ],
  "region": "경남 고성",
  "nines": [
   {
    "label": "가야",
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
    "label": "충무",
    "pars": [
     4,
     3,
     5,
     4,
     4,
     5,
     3,
     4,
     4
    ]
   },
   {
    "label": "공룡",
    "pars": [
     5,
     4,
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
  "notes": "공식 홈페이지 스코어카드 HTML 표 원문 직접 확인. 충무코스는 golfingrecord 스코어카드와 일치, 가야1번 파4는 블로그와 일치. 밀양노벨CC와 별개.",
  "source": "https://www.nobelcc.co.kr/html/course/course_01.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "고창CC",
  "aliases": [
   "고창",
   "고창컨트리클럽",
   "고창 컨트리클럽",
   "Gochang CC"
  ],
  "region": "전북 고창",
  "nines": [
   {
    "label": "비치",
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
    "label": "블루",
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
  "notes": "공식 홈페이지 코스안내 HTML 원문에서 홀별 PAR 직접 확인(좌/우 그린 전장과 정합). 정규 18홀(비치+블루, 옛 블로그의 '바다·푸른' 코스) 외에 3홀짜리 'Sky' 코스(PAR 5,3,4 = 12)가 별도로 있으나 9홀 단위가 아니어서 nines에 넣지 않음.",
  "source": "https://www.gochangcc.co.kr/html/course.asp (홀별 'Beach/Blue NHole PAR n' + 스코어카드 표)",
  "checked": "2026-11-04"
 },
 {
  "name": "곤지암골프클럽",
  "aliases": [
   "곤지암골프클럽",
   "곤지암",
   "곤지암GC",
   "곤지암CC",
   "곤지암 골프클럽",
   "Konjiam Golf Club"
  ],
  "region": "경기 광주",
  "nines": [
   {
    "label": "마운틴",
    "pars": [
     5,
     4,
     4,
     4,
     4,
     3,
     4,
     3,
     5
    ]
   },
   {
    "label": "레이크",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스정보 HTML 표 원문 직접 확인(Tournament 야드와 정합). 홀 공략 페이지 마운틴1번 PAR5(490yd) 일치. TheGrint(10번 579yd 파5, 12번 180yd 파3, 파3 4개·파5 4개)와 레이크=IN 기준 일치. 마운틴(OUT)+레이크(IN) 18홀 파72. 경기 광주 곤지암읍 소재(로제비앙GC 곤지암과 별개).",
  "source": "https://www.konjiamgolfclub.co.kr/course/info.dev (마운틴·레이크 스코어카드 표)",
  "checked": "2026-11-04"
 },
 {
  "name": "골드나인CC",
  "aliases": [
   "골드나인",
   "골드나인컨트리클럽",
   "골드나인 컨트리클럽",
   "청주골드나인",
   "Goldnine CC"
  ],
  "region": "충북 청주",
  "nines": [
   {
    "label": "9홀",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 스코어카드 표 원문과 홀별 공략 페이지 9개 모두 직접 확인, 일치. 9홀 파36 퍼블릭(2회전 18홀 운영). 청주시 상당구 낭성면.",
  "source": "https://www.gold-9.co.kr/course/course.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "골드레이크CC",
  "aliases": [
   "골프레이크",
   "골드레이크",
   "골드레이크컨트리클럽",
   "골드레이크 컨트리클럽",
   "Gold Lake CC"
  ],
  "region": "전남 나주",
  "nines": [
   {
    "label": "골드",
    "pars": [
     5,
     4,
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
    "label": "레이크",
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
    "label": "힐",
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
    "label": "밸리",
    "pars": [
     4,
     3,
     4,
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
  "notes": "이름 추정: 엑셀 표기 '골프레이크'라는 골프장은 검색되지 않음. 철자 유사(드↔프) + 언론 기사에서도 '골프레이크CC'로 오기된 사례가 있어 골드레이크CC(나주)로 해석 — 사용자 확인 권장. 파 값 자체는 공식 홈페이지 스코어카드 HTML 원문 직접 확인(전장과 정합), 홀별 공략글의 파 표기와도 일치. 골드·레이크=회원제 18홀, 힐·밸리=대중제 18홀.",
  "source": "https://www.goldlake.co.kr/course/intro (코스별 스코어카드 표)",
  "checked": "2026-11-04"
 },
 {
  "name": "골프존카운티 감포",
  "aliases": [
   "골프존카운티 감포",
   "골프존카운티감포",
   "골프존카운티감포CC",
   "골프존 카운티 감포",
   "Golfzon County Gampo"
  ],
  "region": "경북 경주시",
  "nines": [
   {
    "label": "OUT",
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
   },
   {
    "label": "IN",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 홀별 코스소개 HTML 원문(PAR 표기, 2026-11-04 조회)에서 직접 추출; 코스 합계 Par는 공식 intro/course 페이지 규모 표기와 일치",
  "source": "https://www.golfzoncounty.com/golfclub/courseDtl?golfclubSeq=1&courseSeq=1",
  "checked": "2026-11-04"
 },
 {
  "name": "골프존카운티 경남",
  "aliases": [
   "골프존카운티 경남",
   "골프존카운티경남",
   "골프존카운티경남CC",
   "골프존 카운티 경남",
   "레이크힐스 경남",
   "Golfzon County Gyeongnam"
  ],
  "region": "경남 함안군",
  "nines": [
   {
    "label": "페리돗",
    "pars": [
     4,
     3,
     4,
     5,
     4,
     5,
     3,
     4,
     4
    ]
   },
   {
    "label": "제이드",
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
  "notes": "공식 홈페이지 홀별 코스소개 HTML 원문(PAR 표기, 2026-11-04 조회)에서 직접 추출; 코스 합계 Par는 공식 intro/course 페이지 규모 표기와 일치",
  "source": "https://www.golfzoncounty.com/golfclub/courseDtl?golfclubSeq=49&courseSeq=21",
  "checked": "2026-11-04"
 },
 {
  "name": "골프존카운티 구미",
  "aliases": [
   "골프존카운티 구미",
   "골프존카운티구미",
   "골프존카운티구미CC",
   "골프존 카운티 구미",
   "Golfzon County Gumi"
  ],
  "region": "경북 구미시",
  "nines": [
   {
    "label": "OUT",
    "pars": [
     5,
     4,
     3,
     5,
     4,
     3,
     4,
     5,
     3
    ]
   },
   {
    "label": "IN",
    "pars": [
     4,
     3,
     5,
     3,
     4,
     3,
     5,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 홀별 코스소개 HTML 원문(PAR 표기, 2026-11-04 조회)에서 직접 추출; 코스 합계 Par는 공식 intro/course 페이지 규모 표기와 일치",
  "source": "https://www.golfzoncounty.com/golfclub/courseDtl?golfclubSeq=50&courseSeq=23",
  "checked": "2026-11-04"
 },
 {
  "name": "골프존카운티 드래곤",
  "aliases": [
   "골프존카운티 드래곤",
   "골프존카운티드래곤",
   "골프존카운티드래곤CC",
   "골프존 카운티 드래곤",
   "드래곤레이크",
   "드래곤레이크CC",
   "Golfzon County Dragon"
  ],
  "region": "전북 남원시",
  "nines": [
   {
    "label": "드래곤",
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
    "label": "레이크",
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
    "label": "스카이",
    "pars": [
     4,
     3,
     4,
     4,
     5,
     3,
     4,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 홀별 코스소개 HTML 원문(PAR 표기, 2026-11-04 조회)에서 직접 추출; 코스 합계 Par는 공식 intro/course 페이지 규모 표기와 일치",
  "source": "https://www.golfzoncounty.com/golfclub/courseDtl?golfclubSeq=55&courseSeq=32",
  "checked": "2026-11-04"
 },
 {
  "name": "골프존카운티 무주",
  "aliases": [
   "골프존카운티 무주",
   "골프존카운티무주",
   "골프존카운티무주CC",
   "골프존 카운티 무주",
   "Golfzon County Muju"
  ],
  "region": "전북 무주군",
  "nines": [
   {
    "label": "레이크",
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
    "label": "마운틴",
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
  "verified": true,
  "notes": "공식 홈페이지 홀별 코스소개 HTML 원문(PAR 표기, 2026-11-04 조회)에서 직접 추출; 코스 합계 Par는 공식 intro/course 페이지 규모 표기와 일치. 공식 코스명 LAKE/MOUNTAIN 를 한글 라벨로 표기",
  "source": "https://www.golfzoncounty.com/golfclub/courseDtl?golfclubSeq=54&courseSeq=30",
  "checked": "2026-11-04"
 },
 {
  "name": "골프존카운티 사천",
  "aliases": [
   "골프존카운티 사천",
   "골프존카운티사천",
   "골프존카운티사천CC",
   "골프존 카운티 사천",
   "사천CC",
   "사천컨트리클럽",
   "Golfzon County Sacheon"
  ],
  "region": "경남 사천시",
  "nines": [
   {
    "label": "다솔",
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
    "label": "비토",
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
    "label": "비룡",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 홀별 코스소개 HTML 원문(PAR 표기, 2026-11-04 조회)에서 직접 추출; 코스 합계 Par는 공식 intro/course 페이지 규모 표기와 일치",
  "source": "https://www.golfzoncounty.com/golfclub/courseDtl?golfclubSeq=56&courseSeq=35",
  "checked": "2026-11-04"
 },
 {
  "name": "골프존카운티 선산",
  "aliases": [
   "골프존카운티 선산",
   "골프존카운티선산",
   "골프존카운티선산CC",
   "골프존 카운티 선산",
   "선산CC",
   "Golfzon County Seonsan"
  ],
  "region": "경북 구미시",
  "nines": [
   {
    "label": "OUT",
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
    "label": "IN",
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
  "notes": "공식 홈페이지 홀별 코스소개 HTML 원문(PAR 표기, 2026-11-04 조회)에서 직접 추출; 코스 합계 Par는 공식 intro/course 페이지 규모 표기와 일치",
  "source": "https://www.golfzoncounty.com/golfclub/courseDtl?golfclubSeq=28&courseSeq=14",
  "checked": "2026-11-04"
 },
 {
  "name": "골프존카운티 선운",
  "aliases": [
   "골프존카운티 선운",
   "골프존카운티선운",
   "골프존카운티선운CC",
   "골프존 카운티 선운",
   "선운사CC",
   "Golfzon County Seonun"
  ],
  "region": "전북 고창군",
  "nines": [
   {
    "label": "선운",
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
    "label": "화시",
    "pars": [
     4,
     3,
     5,
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
  "notes": "공식 홈페이지 홀별 코스소개 HTML 원문(PAR 표기, 2026-11-04 조회)에서 직접 추출; 코스 합계 Par는 공식 intro/course 페이지 규모 표기와 일치",
  "source": "https://www.golfzoncounty.com/golfclub/courseDtl?golfclubSeq=5&courseSeq=12",
  "checked": "2026-11-04"
 },
 {
  "name": "골프존카운티 송도",
  "aliases": [
   "골프존카운티 송도",
   "골프존카운티송도",
   "골프존카운티송도CC",
   "골프존 카운티 송도",
   "오렌지듄스",
   "오렌지듄스GC",
   "오렌지듄스 송도",
   "Golfzon County Songdo"
  ],
  "region": "인천 연수구",
  "nines": [
   {
    "label": "이스트",
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
    "label": "웨스트",
    "pars": [
     4,
     4,
     5,
     3,
     4,
     4,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 홀별 코스소개 HTML 원문(PAR 표기, 2026-11-04 조회)에서 직접 추출; 코스 합계 Par는 공식 intro/course 페이지 규모 표기와 일치. 18홀 71파(WEST 35) — 공식 표기도 71Par. 공식 코스명 EAST/WEST 를 한글 라벨로 표기",
  "source": "https://www.golfzoncounty.com/golfclub/courseDtl?golfclubSeq=68&courseSeq=54",
  "checked": "2026-11-04"
 },
 {
  "name": "골프존카운티 순천",
  "aliases": [
   "골프존카운티 순천",
   "골프존카운티순천",
   "골프존카운티순천CC",
   "골프존 카운티 순천",
   "레이크힐스 순천",
   "레이크힐스순천",
   "Golfzon County Suncheon"
  ],
  "region": "전남 순천시",
  "nines": [
   {
    "label": "루비",
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
    "label": "에메랄드",
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
    "label": "다이아몬드",
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
    "label": "토파즈",
    "pars": [
     5,
     4,
     4,
     4,
     3,
     4,
     4,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 홀별 코스소개 HTML 원문(PAR 표기, 2026-11-04 조회)에서 직접 추출; 코스 합계 Par는 공식 intro/course 페이지 규모 표기와 일치",
  "source": "https://www.golfzoncounty.com/golfclub/courseDtl?golfclubSeq=57&courseSeq=38",
  "checked": "2026-11-04"
 },
 {
  "name": "골프존카운티 안성H",
  "aliases": [
   "골프존카운티 안성 H",
   "골프존카운티안성H",
   "골프존카운티안성HCC",
   "골프존 카운티 안성 H",
   "Golfzon County Anseong H"
  ],
  "region": "경기 안성시",
  "nines": [
   {
    "label": "힐",
    "pars": [
     4,
     4,
     4,
     3,
     4,
     5,
     3,
     5,
     4
    ]
   },
   {
    "label": "레이크",
    "pars": [
     4,
     5,
     3,
     4,
     3,
     5,
     4,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 홀별 코스소개 HTML 원문(PAR 표기, 2026-11-04 조회)에서 직접 추출; 코스 합계 Par는 공식 intro/course 페이지 규모 표기와 일치. 공식 코스명 HILL/LAKE 를 한글 라벨로 표기",
  "source": "https://www.golfzoncounty.com/golfclub/courseDtl?golfclubSeq=53&courseSeq=28",
  "checked": "2026-11-04"
 },
 {
  "name": "골프존카운티 안성W",
  "aliases": [
   "골프존카운티 안성 W",
   "골프존카운티안성W",
   "골프존카운티안성WCC",
   "골프존 카운티 안성 W",
   "웨스트파인CC",
   "웨스트파인",
   "Golfzon County Anseong W"
  ],
  "region": "경기 안성시",
  "nines": [
   {
    "label": "OUT",
    "pars": [
     4,
     4,
     5,
     4,
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
     5,
     3,
     4,
     4,
     4,
     4,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 홀별 코스소개 HTML 원문(PAR 표기, 2026-11-04 조회)에서 직접 추출; 코스 합계 Par는 공식 intro/course 페이지 규모 표기와 일치",
  "source": "https://www.golfzoncounty.com/golfclub/courseDtl?golfclubSeq=2&courseSeq=3",
  "checked": "2026-11-04"
 },
 {
  "name": "골프존카운티 영암45",
  "aliases": [
   "골프존카운티 영암45",
   "골프존카운티영암45",
   "영암45",
   "골프존카운티 영암",
   "사우스링스 영암",
   "사우스링스영암CC",
   "사우스링스 영암 CC",
   "Golfzon County Yeongam45"
  ],
  "region": "전남 영암",
  "nines": [
   {
    "label": "짐앵A",
    "pars": [
     5,
     4,
     4,
     4,
     3,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "짐앵B",
    "pars": [
     4,
     3,
     4,
     5,
     3,
     5,
     5,
     3,
     4
    ]
   },
   {
    "label": "짐앵C",
    "pars": [
     5,
     4,
     4,
     4,
     5,
     3,
     4,
     3,
     4
    ]
   },
   {
    "label": "카일필립스A",
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
   },
   {
    "label": "카일필립스B",
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
   }
  ],
  "verified": true,
  "notes": "골프존카운티 공식 홈페이지 코스상세 페이지 원문 HTML에 내장된 courseList(코스별 holeList의 par, coursePar) 직접 추출, 화면 표시 PAR 값과 일치. 2026-11-04 조회. 공식 45홀(180Par)과 일치. 구 사우스링스 영암CC. 짐앵 27홀 + 카일필립스 18홀(A=OUT, B=IN).",
  "source": "https://golfzoncounty.com/golfclub/courseDtl?golfclubSeq=59&courseSeq=44",
  "checked": "2026-11-04"
 },
 {
  "name": "골프존카운티 오라",
  "aliases": [
   "오라",
   "오라CC",
   "오라컨트리클럽",
   "골프존카운티오라",
   "Ora Country Club"
  ],
  "region": "제주 제주시",
  "nines": [
   {
    "label": "동",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     5,
     4,
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
     4,
     4,
     5,
     4,
     3,
     4
    ]
   },
   {
    "label": "남A",
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
    "label": "남B",
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
  "notes": "운영사 골프존카운티 공식 홀공략 페이지(동/서/남A/남B 탭, data-hole_no별 PAR) 원문 직접 확인. 36홀 144파 표기와 일치. 옛 명칭 오라CC(제주시 오라남로).",
  "source": "https://www.golfzoncounty.com/golfclub/courseDtl?golfclubSeq=3&courseSeq=1",
  "checked": "2026-11-04"
 },
 {
  "name": "골프존카운티 이든",
  "aliases": [
   "골프존카운티 이든",
   "골프존카운티이든",
   "이든",
   "에덴밸리",
   "에덴밸리CC",
   "에덴벨리",
   "Golfzon County Eden"
  ],
  "region": "경남 양산",
  "nines": [
   {
    "label": "이든",
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
    "label": "밸리",
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
  "notes": "골프존카운티 공식 홈페이지 코스상세 페이지 원문 HTML에 내장된 courseList(코스별 holeList의 par, coursePar) 직접 추출, 화면 표시 PAR 값과 일치. 2026-11-04 조회. 공식 18홀(72Par). 2026년 5월 구 에덴밸리CC(양산시 어실로 910)를 임차해 골프존카운티 이든으로 리뉴얼(다음뉴스 2026-04-23). 리뉴얼 전 에덴밸리 시절 코스명·홀 순서와 다를 수 있음.",
  "source": "https://golfzoncounty.com/golfclub/courseDtl?golfclubSeq=70&courseSeq=56",
  "checked": "2026-11-04"
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
  "name": "골프존카운티 천안",
  "aliases": [
   "골프존카운티 천안",
   "골프존카운티천안",
   "골프존카운티 천안CC",
   "버드우드",
   "버드우드CC",
   "Golfzon County Cheonan"
  ],
  "region": "충남 천안",
  "nines": [
   {
    "label": "OUT",
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
    "label": "IN",
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
  "notes": "골프존카운티 공식 홈페이지 코스상세 페이지 원문 HTML에 내장된 courseList(코스별 holeList의 par, coursePar) 직접 추출, 화면 표시 PAR 값과 일치. 2026-11-04 조회. 공식 18홀(72Par), 천안시 동남구 병천면. 구 버드우드CC(카카오골프 표기).",
  "source": "https://golfzoncounty.com/golfclub/courseDtl?golfclubSeq=47&courseSeq=16",
  "checked": "2026-11-04"
 },
 {
  "name": "골프존카운티 청통",
  "aliases": [
   "골프존카운티 청통",
   "골프존카운티청통",
   "청통",
   "골프존카운티 청통CC",
   "Golfzon County Cheongtong"
  ],
  "region": "경북 영천",
  "nines": [
   {
    "label": "청통",
    "pars": [
     4,
     5,
     5,
     3,
     4,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "팔공",
    "pars": [
     4,
     4,
     3,
     4,
     3,
     5,
     4,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "골프존카운티 공식 홈페이지 코스상세 페이지 원문 HTML에 내장된 courseList(코스별 holeList의 par, coursePar) 직접 추출, 화면 표시 PAR 값과 일치. 2026-11-04 조회. 청통 coursePar 37, 팔공 coursePar 35로 9홀 합이 비대칭이나 공식값이며 18홀 합 72(공식 18홀 72Par)와 일치. 골프존카운티 직접 설계·시공(옛 이름 없음).",
  "source": "https://golfzoncounty.com/golfclub/courseDtl?golfclubSeq=58&courseSeq=42",
  "checked": "2026-11-04"
 },
 {
  "name": "골프존카운티 화랑",
  "aliases": [
   "골프존카운티 화랑",
   "골프존카운티화랑",
   "화랑",
   "크리스탈카운티",
   "크리스탈카운티CC",
   "Golfzon County Hwarang"
  ],
  "region": "충북 진천",
  "nines": [
   {
    "label": "원화랑",
    "pars": [
     4,
     3,
     5,
     4,
     5,
     4,
     4,
     3,
     4
    ]
   },
   {
    "label": "원낭자",
    "pars": [
     5,
     3,
     4,
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
  "notes": "골프존카운티 공식 홈페이지 코스상세 페이지 원문 HTML에 내장된 courseList(코스별 holeList의 par, coursePar) 직접 추출, 화면 표시 PAR 값과 일치. 2026-11-04 조회. 공식 18홀(72Par), 진천군 문백면. 구 크리스탈카운티CC(티스캐너·네이버 블로그).",
  "source": "https://golfzoncounty.com/golfclub/courseDtl?golfclubSeq=52&courseSeq=26",
  "checked": "2026-11-04"
 },
 {
  "name": "골프클럽Q",
  "aliases": [
   "골프클럽 Q",
   "골프클럽Q",
   "골프클럽Q 안성",
   "골프클럽 안성Q",
   "골프존카운티 안성Q",
   "안성Q",
   "안성QCC",
   "Golf Club Q"
  ],
  "region": "경기 안성",
  "nines": [
   {
    "label": "팜파스",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 홀별 코스공략 페이지(팜파스 /course/p1~p9.asp, 밸리 /course/v1~v9.asp) 원문의 'HOLE PAR' 값 직접 추출. 전체코스 표의 PAMPAS 36·VALLEY 36과 합계 일치. 구 골프존카운티 안성Q. 2026-11-04 조회.",
  "source": "https://www.golfclubq.com/course/p1.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "광주컨트리클럽",
  "aliases": [
   "광주",
   "광주CC",
   "광주컨트리클럽",
   "광주 컨트리 클럽",
   "Kwangju Country Club",
   "Gwangju CC"
  ],
  "region": "전남 곡성",
  "nines": [
   {
    "label": "동악",
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
   },
   {
    "label": "섬진",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     5,
     4,
     3,
     4
    ]
   },
   {
    "label": "설산",
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
  "notes": "엑셀 '광주' = 전남 곡성군 옥과면 광주CC(27홀, 광주관광개발). 공식 코스개요 제원표(course01.asp)와 코스별 홀 공략 페이지(course02·02_02·02_03.asp) 두 곳의 PAR가 모두 일치. 광주광역시 내 빛고을CC(9홀)와 다름. 2026-11-04 조회.",
  "source": "https://www.kjcc.co.kr/html/course01.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "구니CC",
  "aliases": [
   "구니",
   "구니CC",
   "구니컨트리클럽",
   "꽃담",
   "꽃담CC",
   "꽃담컨트리클럽",
   "Guni CC"
  ],
  "region": "대구 군위",
  "nines": [
   {
    "label": "웨스트",
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
    "label": "이스트",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스 제원표(West/East HOLE·PAR·HDCP) 원문 직접 추출, 각 36. 군위군 군위읍 도군로 2450(2023년 대구 편입). 구 꽃담CC. 후기와도 일치(웨스트 1번 파4, 이스트 4번 파5). 2026-11-04 조회.",
  "source": "https://www.gunicc.co.kr/pagesite/course/intro.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "구미컨트리클럽",
  "aliases": [
   "구미컨트리클럽",
   "구미CC",
   "구미 컨트리클럽",
   "구미",
   "Gumi Country Club"
  ],
  "region": "경북 구미",
  "nines": [
   {
    "label": "거북",
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
   },
   {
    "label": "백호",
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
    "label": "청룡",
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
  "notes": "구미시 장천면 송백로 229 구미CC(27홀). 골프존카운티 구미와는 다른 골프장. 공식 모바일 코스소개 표(Info.aspx)와 코스공략 페이지(Guide.aspx) 두 곳 PAR 일치(공략 페이지 일부 거리 표기 오류 있으나 PAR는 동일). 2026-11-04 조회.",
  "source": "https://www.gumicc.com/Mobile/Course/Info.aspx",
  "checked": "2026-11-04"
 },
 {
  "name": "군산컨트리클럽",
  "aliases": [
   "군산CC",
   "군산컨트리클럽",
   "군산 컨트리클럽",
   "군산골프&리조트",
   "군산 골프&리조트",
   "군산",
   "Gunsan CC",
   "Gunsan Country Club"
  ],
  "region": "전북 군산",
  "nines": [
   {
    "label": "토너먼트 OUT",
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
    "label": "토너먼트 IN",
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
    "label": "전주",
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
    "label": "익산",
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
    "label": "김제",
    "pars": [
     6,
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
    "label": "정읍",
    "pars": [
     4,
     3,
     7,
     4,
     4,
     3,
     4,
     3,
     4
    ]
   },
   {
    "label": "부안",
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
   },
   {
    "label": "남원",
    "pars": [
     5,
     4,
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
    "label": "순창",
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
  "verified": false,
  "notes": "81홀(토너먼트 18 + 레귤러 7코스 63). 공식 신규 홈페이지(gunsancc.net, JS 렌더링이라 Firecrawl로 코스별 Tee거리 표 확인)와 kaypen.tistory 코스공략 시리즈(1~3편) 대조. ▶일치(검증됨): 익산·김제·정읍·부안·남원은 공식표와 블로그 PAR 완전 일치. 토너먼트 IN도 공식 Par행과 블로그 일치. ▶토너먼트 OUT: 공식 Par행이 8번 '2'로 오기(합 35, 같은 페이지 설명은 Par 36), 블로그는 8번 파3 → 파3 채택, 나머지 8홀은 공식·블로그 일치. 토너먼트 코스 공식 표는 거리열과 Par가 어긋나(예: 420m 파3) 데이터 품질 문제 있음. OUT=구 리드(Reed), IN=구 레이크(Lake) 회원제 코스로 추정(유튜브 '리드코스 5번 파3' 설명이 OUT 5번과 일치). ▶전주: 공식표는 8번 파4(340m)·9번 파5(526m)로 나오나, 네이버 블로그 홀 안내판 사진(2020, 8번 파5 478m HDCP9·9번 파4 342m HDCP3)·kaypen 블로그·Threads 2025-09 라운드 후기('후반 전주 8번홀 파5')가 모두 8번 파5/9번 파4 → 3개 출처 일치값 채택(공식 표는 6~9번 열이 섞여 있는 것으로 보임). ▶순창: 공식 신규 사이트 코스 페이지에 순창 탭이 없어(홈 메뉴에만 이름 존재) kaypen 블로그 단일 출처 → 미검증. ▶정읍 3번은 1,004m 파7(국내 최장홀, 뉴스 다수) — 검증규칙 3~6 범위 밖이지만 실제값. 김제 9홀 합 37(1번 661m 파6). 이 골프장 entry 전체를 verified=false로 둔 이유: 순창 단일출처 + 공식 데이터 오류. 순창 외 8코스는 두 출처 이상 일치. 2026-11-04 조회. / 정읍: 파 값 이상",
  "source": "https://www.gunsancc.net/main/golf?tab=019c287d-3657-742f-837b-a06e6dff1f00",
  "checked": "2026-11-04"
 },
 {
  "name": "군위오펠골프클럽",
  "aliases": [
   "군위오펠",
   "군위오펠CC",
   "군위오펠GC",
   "군위 오펠골프클럽",
   "오펠GC 군위",
   "Gunwi O'phel Golf Club"
  ],
  "region": "대구 군위",
  "nines": [
   {
    "label": "산울",
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
   },
   {
    "label": "여울",
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
  "notes": "공식 홈페이지(ophelgc.com/_Gunwi) 코스공략 iframe 홀별 페이지(course_san-01~09 = 산울 OUT 1~9번, course_yu-01~09 = 여울 IN 10~18번) 원문의 'Hole Par' 값 직접 추출, 각 36·합 72(공식 파72 일치). 거리(Blue/White/Red)도 PAR와 정합. 군위군 산성면(2023 대구 편입). 영천오펠·고령오펠과 다른 골프장. 2026-11-04 조회.",
  "source": "https://www.ophelgc.com/_Gunwi/course/course_san-01.html",
  "checked": "2026-11-04"
 },
 {
  "name": "그랜드컨트리클럽",
  "aliases": [
   "청주그랜드",
   "청주그랜드CC",
   "그랜드CC",
   "청주 그랜드CC",
   "그랜드 컨트리클럽",
   "Grand Country Club"
  ],
  "region": "충북 청주시",
  "nines": [
   {
    "label": "동",
    "pars": [
     5,
     4,
     4,
     3,
     4,
     3,
     5,
     4,
     4
    ]
   },
   {
    "label": "남",
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
    "label": "서",
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
  "notes": "공식 스코어카드 페이지(동/남/서 코스 Par 행) 원문 직접 확인, Golfify 3개 코스와 일치. 주소 청주시 청원구 오창읍. 인천그랜드CC·여주그랜드CC와 다른 곳.",
  "source": "https://www.grandgolf.co.kr/html/course/course_03.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "그린필드CC",
  "aliases": [
   "그린필드",
   "그린필드CC",
   "그린필드 컨트리클럽",
   "그린필드GC",
   "제피로스",
   "제피로스CC",
   "Greenfield CC"
  ],
  "region": "제주 제주시",
  "nines": [
   {
    "label": "마운틴",
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
    "label": "씨",
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
  "notes": "엑셀 '그린필드' = 제주 조천읍 그린필드CC(18홀, 구 제피로스, 2007 개장 — 네이버 블로그). 국내에 같은 이름 다른 정규 골프장은 확인되지 않음(필리핀 아얄라 그린필드와 무관). 공식 홈페이지 코스 페이지가 로드하는 공개 스크립트(course.mountain.js / course.sea.js)의 par_list·yard_list에서 추출, 페이지 표시 1번·10번 PAR 및 홀 설명문의 Par와 일치, 거리와도 정합. 마운틴=1~9번, 씨=10~18번. 2026-11-04 조회.",
  "source": "https://greenfieldcc.co.kr/swp/course_mountain",
  "checked": "2026-11-04"
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
  "name": "기장동원로얄CC",
  "aliases": [
   "기장동원로얄",
   "기장 동원로얄",
   "기장동원로얄컨트리클럽",
   "동원로얄CC 기장",
   "Gijang Dongwon Royal CC"
  ],
  "region": "부산 기장군 기장읍",
  "nines": [
   {
    "label": "9홀",
    "pars": [
     4,
     4,
     5,
     3,
     5,
     3,
     4,
     5,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 모바일 코스공략 페이지 홀 목록(1HoleㆍPar 4 … 9HoleㆍPar 4) 원문 확인. 부산일보 기사(3·5·8번 파5)와 일치. 9홀 대중제, 전후반 좌/우 2그린 사용. 기사상 8번홀(파5)은 전후반 파4·파3로 변형 운영 가능. 양산·통영 동원로얄과 별개.",
  "source": "https://dongwongolf.co.kr/_mobile/PageSite/course/one/hole03.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "기흥CC",
  "aliases": [
   "기흥",
   "기흥컨트리클럽",
   "기흥 컨트리클럽",
   "Giheung CC",
   "Giheung Country Club"
  ],
  "region": "경기 화성시",
  "nines": [
   {
    "label": "동",
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
   },
   {
    "label": "남",
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
    "label": "북",
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
    "label": "서",
    "pars": [
     4,
     3,
     5,
     3,
     4,
     5,
     4,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 홀별 코스소개 36개 페이지(course_{east|south|north|west}01~09.asp)의 Course/Hole/Par 표 원문 직접 확인. 동+남, 북+서 18홀씩 운영. 용인 기흥 지명이지만 소재지는 화성시 풀무골로.",
  "source": "https://www.ghcc.kr/course/course_east01.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "김해상록GC",
  "aliases": [
   "김해상록",
   "김해상록골프장",
   "김해상록골프클럽",
   "김해 상록 골프클럽",
   "김해상록G.C",
   "Gimhae Sangnok GC"
  ],
  "region": "경남 김해시 한림면",
  "nines": [
   {
    "label": "황세",
    "pars": [
     4,
     4,
     3,
     4,
     5,
     3,
     4,
     6,
     4
    ]
   },
   {
    "label": "여의",
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
   }
  ],
  "verified": true,
  "notes": "상록골프앤리조트(공무원연금공단 계열) 공식 코스공략도 홀별 PAR 표 원문 확인(황세 Total 37/3,175m, 여의 Total 36/3,135m). 공무원연금공단 페이지(황세 par37 3,175m·여의 par36 3,135m)·후기(황세 8번 파6)와 일치. 18홀 파73. 공식 코스소개(M070601) 페이지의 Par 36(3,222m) 문구는 템플릿 오기로 보임.",
  "source": "https://www.sangnokresort.co.kr/M070602",
  "checked": "2026-11-04"
 },
 {
  "name": "나주힐스CC",
  "aliases": [
   "나주힐스",
   "나주힐스 CC",
   "나주힐스컨트리클럽",
   "Naju Hills CC"
  ],
  "region": "전남 나주시 세지면",
  "nines": [
   {
    "label": "9홀",
    "pars": [
     5,
     4,
     3,
     4,
     3,
     5,
     4,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 스코어카드 표(HOLE 1~9, PAR 합 36, 챔피언티 2,968m) 원문 직접 확인. 9홀 대중제(2바퀴로 18홀). 인근 나주CC(별개 골프장)와 혼동 주의.",
  "source": "https://najuhills.com/course-score/",
  "checked": "2026-11-04"
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
  "name": "남서울CC",
  "aliases": [
   "남서울CC",
   "남서울",
   "남서울컨트리클럽",
   "남서울 컨트리클럽",
   "Namseoul CC",
   "Nam Seoul Country Club"
  ],
  "region": "경기 성남시 분당구",
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
     4,
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
     5,
     4,
     5,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 홀별 공략법 페이지가 사용하는 데이터 스크립트(/static/pc/js/custom/course_text.js) par_list 18개 원문 확인, 1번홀 HTML(PAR 4, Blue 368m)과도 일치. 거리 대조(파5 488·471·441·510m, 파3 171·215·177·209m) 정합. 별도 파3 연습코스(제2연습장)는 미포함.",
  "source": "https://nscc.co.kr/swp/course?num=1",
  "checked": "2026-11-04"
 },
 {
  "name": "남여주골프클럽",
  "aliases": [
   "남여주",
   "남여주GC",
   "남여주CC",
   "남여주 골프클럽",
   "Namyeoju GC",
   "Namyeoju Golf Club"
  ],
  "region": "경기 여주시",
  "nines": [
   {
    "label": "가람",
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
    "label": "마루",
    "pars": [
     4,
     4,
     5,
     4,
     4,
     3,
     5,
     3,
     4
    ]
   },
   {
    "label": "누리",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 홀별 코스소개 27개 페이지(CourseIntro.aspx?ID=g1~g9 가람, m1~m9 마루, n1~n9 누리)의 \"Par N / HDCP\" 원문 직접 확인. 마루 9홀은 storygolf 블로그와도 일치. 주소 여주시 가여로 532, 27홀 파108 대중제.",
  "source": "https://www.namyeoju.co.kr/Course/CourseIntro.aspx?ID=g1",
  "checked": "2026-11-04"
 },
 {
  "name": "남원상록GC",
  "aliases": [
   "남원상록",
   "남원상록골프장",
   "남원상록골프클럽",
   "남원상록G.C",
   "Namwon Sangnok GC"
  ],
  "region": "전북 남원시",
  "nines": [
   {
    "label": "몽룡",
    "pars": [
     4,
     3,
     4,
     4,
     5,
     3,
     4,
     4,
     5
    ]
   },
   {
    "label": "춘향",
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
  "notes": "상록골프앤리조트 공식 코스공략도 홀별 PAR 표 원문 확인(몽룡 Total 36/3,360m, 춘향 Total 36/3,306m, 블루티 기준). 공식 코스소개 페이지의 3,222m 문구는 템플릿 오기로 보임.",
  "source": "https://www.sangnokresort.co.kr/M060602",
  "checked": "2026-11-04"
 },
 {
  "name": "남일밸리골프클럽",
  "aliases": [
   "남일밸리",
   "남일밸리GC",
   "남일밸리CC",
   "남일밸리 골프클럽",
   "남일밸리 파3",
   "Namil Valley GC"
  ],
  "region": "충남 아산시 배방읍",
  "nines": [
   {
    "label": "9홀",
    "pars": [
     3,
     3,
     3,
     3,
     3,
     3,
     3,
     3,
     3
    ],
    "short": true
   }
  ],
  "verified": true,
  "notes": "9홀 전홀 파3 연습형 골프장(합 27, 숏코스). 홀별 후기(2024) 거리 1번140·2번96·3번118·4번75·5번60·6번98·7번165·8번99·9번117m로 전홀 파3 거리이며, 네이버 프리미엄콘텐츠도 퍼블릭 9홀 파3 골프장으로 기술. 공식 홈페이지 스코어카드 원문은 미확인. 휴대길 194, 골프연습장 병설.",
  "source": "https://m.blog.naver.com/joohe80644/223428724064",
  "checked": "2026-11-04"
 },
 {
  "name": "남촌GC",
  "aliases": [
   "남촌",
   "남촌CC",
   "남촌GC",
   "남촌 컨트리클럽",
   "남촌골프클럽",
   "Namchon GC",
   "Namchon CC"
  ],
  "region": "경기 광주시 곤지암읍",
  "nines": [
   {
    "label": "동",
    "pars": [
     5,
     4,
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
    "label": "서",
    "pars": [
     4,
     4,
     3,
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
  "notes": "공식 홈페이지 EAST/WEST 코스 홀별 공략 페이지(CourseE, CourseW)의 \"N Par X\" 원문 직접 확인(동·서 각 36). 야디지 대조(파5 553·519yd, 파3 216·217yd 등) 정합. 경기 광주시 곤지암읍 부항길 135-38. 사이트 표기 남촌GC.",
  "source": "https://www.namchoncc.co.kr/Course/CourseE?no=1",
  "checked": "2026-11-04"
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
  "name": "내장산CC",
  "aliases": [
   "내장산",
   "내장산컨트리클럽",
   "내장산 골프장",
   "Naejangsan CC"
  ],
  "region": "전북 정읍",
  "nines": [
   {
    "label": "홍단풍",
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
   },
   {
    "label": "청단풍",
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
  "notes": "공식 코스안내 스코어카드 표(Par 행) 원문 직접 확인. 홍단풍 36(3,355m)·청단풍 36(3,355m).",
  "source": "https://www.naejangsancc.com/course/intro",
  "checked": "2026-11-04"
 },
 {
  "name": "노스팜CC",
  "aliases": [
   "노스팜",
   "노스팜컨트리클럽",
   "North Palm CC",
   "파주 노스팜"
  ],
  "region": "경기 파주 광탄면",
  "nines": [
   {
    "label": "동",
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
    "label": "서",
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
  "notes": "공식 코스소개 EAST/WEST COURSE 표 PAR 행 원문 직접 확인. 각 36.",
  "source": "https://www.npcc.co.kr/mobile/course/courseIntro.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "뉴서울CC",
  "aliases": [
   "뉴서울",
   "뉴서울컨트리클럽",
   "New Seoul CC",
   "광주 뉴서울"
  ],
  "region": "경기 광주 오포읍",
  "nines": [
   {
    "label": "문화 OUT",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     5,
     4,
     3,
     4
    ]
   },
   {
    "label": "문화 IN",
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
    "label": "예술 OUT",
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
    "label": "예술 IN",
    "pars": [
     5,
     4,
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
  "notes": "공식 홀별 안내 페이지 36개(culture_out_01~art_in_18)의 PAR 원문 직접 확인. 홀별 Meter 합계가 공식 총연장(문화 6,471m, 예술 6,221m)과 정확히 일치. 북코스→문화, 남코스→예술로 명칭 변경(옛 이름 북/남).",
  "source": "https://www.newseoulgolf.co.kr/mobile/course/culture_out_01.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "뉴스프링빌CC",
  "aliases": [
   "뉴스프링빌",
   "뉴스프링빌 컨트리클럽",
   "이천 뉴스프링빌",
   "New Springville CC",
   "동진CC"
  ],
  "region": "경기 이천 모가면",
  "nines": [
   {
    "label": "록키",
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
    "label": "올림프스",
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
    "label": "알프스",
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
    "label": "몽블랑",
    "pars": [
     4,
     3,
     4,
     5,
     4,
     3,
     4,
     4,
     5
    ]
   },
   {
    "label": "와이트혼",
    "pars": [
     3,
     4,
     3,
     4,
     4,
     4,
     5,
     5,
     4
    ]
   },
   {
    "label": "빅토리아파크",
    "pars": [
     3,
     3,
     3,
     3,
     3,
     3,
     3,
     3,
     3
    ],
    "short": true
   }
  ],
  "verified": false,
  "notes": "회원제 36홀(록키·올림프스·알프스·몽블랑)+대중제 9홀(와이트혼)+파3 9홀(빅토리아파크). 공식 코스안내는 코스별 PAR36과 홀별 거리·설명만 있고 일부 홀만 파 명시(록키3 PAR5·6 파3·7 파5·9 파4, 올림프스6 파3·8 파5, 알프스1 파4·3 파5·6 파4·8 파5, 몽블랑2·6 파3) → 홀별 거리와 일관. 록키는 2024-05 후기(m.blog.naver.com/k-holic-/223449064005) 홀별 파 일치(3번 파4→파5, 9번 파5→파4로 재설계됨; 2020년 후기는 옛 파). 알프스·몽블랑은 2023-05 후기(kin1584) 홀별 파 일치. 올림프스는 2020-06 후기(pedident/221997688855)와 공식 거리 일치(최근 변경 여부는 2차 확인 못함). 와이트혼·빅토리아파크는 공식 대중제 페이지 홀별 파/스코어카드 원문 확인(빅토리아파크 716yd PAR27). / 올림프스 2020 후기 기준",
  "source": "https://icheon.newspring.co.kr/Course/MemberShip",
  "checked": "2026-11-04"
 },
 {
  "name": "뉴코리아CC",
  "aliases": [
   "뉴코리아",
   "뉴코리아컨트리클럽",
   "고양 뉴코리아",
   "New Korea CC"
  ],
  "region": "경기 고양 덕양구",
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
     3,
     4,
     5,
     4,
     3,
     4,
     5,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 모바일 홀별 안내 18페이지(course_out01~course_in18)의 'PAR n, HDCP n' 원문 직접 확인. 공식 클럽소개 OUT Par36(3,534yd)/IN Par36(3,378yd)과 합 일치.",
  "source": "https://www.newkoreacc.co.kr/mobile/course/course_out01.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "다산베아채 골프앤리조트",
  "aliases": [
   "다산베아채",
   "다산베아채CC",
   "강진 다산베아채",
   "다산베아채 컨트리클럽",
   "Dasan Beachae"
  ],
  "region": "전남 강진 도암면",
  "nines": [
   {
    "label": "다산",
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
    "label": "베아채",
    "pars": [
     5,
     4,
     3,
     4,
     4,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "장보고",
    "pars": [
     4,
     5,
     4,
     3,
     5,
     3,
     4,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 URL 확인 못함. KLPGA 점프투어 핀위치 페이지(2026 다산OUT+베아채IN, 2025 베아채OUT+장보고IN) 홀별 PAR와 여행사 코스공략 글(1night2day.tistory.com, 2021, 홀별 'nnnM PARn' 표기) 독립 2출처 일치. 베아채 5번은 여행사 글에 파 표기 없으나 KLPGA PAR4. 장보고는 파3·4·5 각 3개 구성(블로그 서술과 일치).",
  "source": "https://klpga.co.kr/web/tourInfo/pinPlacement?gameCode=2026050013",
  "checked": "2026-11-04"
 },
 {
  "name": "다이아몬드CC",
  "aliases": [
   "다이아몬드",
   "다이아몬드컨트리클럽",
   "양산 다이아몬드",
   "Diamond CC"
  ],
  "region": "경남 양산 상북면",
  "nines": [
   {
    "label": "North Cape",
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
    "label": "South Cape",
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
  "notes": "공식 코스소개 스코어카드 표 PAR 행과 공식 코스공략도 홀별 par 표기 원문 모두 일치. North/South 각 36. 양산 소재(동명 다른 골프장 없음 확인 수준).",
  "source": "https://www.diamondcc.co.kr/Mobile/Course/CourseIntro.aspx",
  "checked": "2026-11-04"
 },
 {
  "name": "담양레이나CC",
  "aliases": [
   "담양레이나",
   "레이나CC",
   "담양 레이나 컨트리클럽",
   "Reina CC"
  ],
  "region": "전남 담양 담양읍",
  "nines": [
   {
    "label": "임페리얼",
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
    "label": "마제스티",
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
  "notes": "공식 홈페이지(reinacc.co.kr)는 자동 접근 403/빈 응답으로 원문 확인 못함. 2024-05 라운드 후기(babara501, 임페리얼 223437254937·마제스티 223441599400 홀별 PAR 표기)와 코스공략 글(kaypen.tistory, 홀별 'nnnm 파n') 독립 2출처 일치. 임페리얼=전반.",
  "source": "https://m.blog.naver.com/babara501/223437254937",
  "checked": "2026-11-04"
 },
 {
  "name": "대구CC",
  "aliases": [
   "대구CC",
   "대구",
   "대구컨트리클럽",
   "경산 대구CC",
   "Daegu CC"
  ],
  "region": "경북 경산 진량읍",
  "nines": [
   {
    "label": "동",
    "pars": [
     4,
     3,
     4,
     5,
     3,
     5,
     4,
     4,
     4
    ]
   },
   {
    "label": "중",
    "pars": [
     4,
     3,
     4,
     4,
     3,
     4,
     5,
     5,
     4
    ]
   },
   {
    "label": "서",
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
   }
  ],
  "verified": true,
  "notes": "공식 스코어카드(EAST/CENTER/WEST) PAR 행과 공식 코스공략도 홀별 'PAR n / HDCP n' 원문 모두 일치. 27홀 108파. 중코스=CENTER. 별도 파3골프장은 정규코스 아님(미포함). 대구 시내가 아니라 경산 소재.",
  "source": "https://daegucc.co.kr/Course/CourseInfo3",
  "checked": "2026-11-04"
 },
 {
  "name": "대영베이스CC",
  "aliases": [
   "대영베이스",
   "대영베이스 컨트리클럽",
   "충주 대영베이스",
   "Daeyoung Base CC",
   "베이스CC"
  ],
  "region": "충북 충주 대소원면",
  "nines": [
   {
    "label": "봄",
    "pars": [
     5,
     4,
     3,
     4,
     4,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "여름",
    "pars": [
     4,
     5,
     3,
     5,
     4,
     4,
     3,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스공략 iframe 18페이지(out_1h~out_18h) 홀별 PAR 원문 확인: 봄=1~9H(구 OUT), 여름=10~18H(구 IN). 코스공략 블로그(storygolf, 구 OUT/IN 표기) 홀별 PAR 일치. 여름 5번(14H)은 공식 표에 PAR4인데 거리 518/461/485(단위 표기 혼재 의심) — '가장 긴 파4홀'로 설명돼 파4 유지. 2026-10-01 9홀 증설로 27홀이 됐으나 신설 '가을' 코스는 공식 페이지에 '업데이트예정'으로 홀별 파 미공개 → 미포함(추후 추가 필요). / 2026-10 신설 가을코스 9홀 미포함",
  "source": "https://basecc.co.kr/course/iframe/out_1h.html",
  "checked": "2026-11-04"
 },
 {
  "name": "대영힐스CC",
  "aliases": [
   "대영힐스",
   "대영힐스 컨트리클럽",
   "충주 대영힐스",
   "Daeyoung Hills CC"
  ],
  "region": "충북 충주 대소원면",
  "nines": [
   {
    "label": "力",
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
    "label": "美",
    "pars": [
     4,
     4,
     4,
     3,
     4,
     5,
     3,
     5,
     4
    ]
   },
   {
    "label": "靑",
    "pars": [
     5,
     3,
     4,
     5,
     4,
     4,
     3,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스안내 코스 제원표 Par 행(力: 6·8번 좌/우 그린, 靑: 9번 좌/우 그린 — 좌우 파 동일)과 공식 코스공략 iframe 27페이지(c_=力, g_=美, p_=靑) 홀별 PAR 원문 모두 일치. 코스명은 공식 표기가 한자(力·美·靑)뿐이라 그대로 사용. 대영베이스CC와 같은 단지(이웃 골프장).",
  "source": "http://dyhills.basecc.co.kr/Course/CourseInfo.aspx",
  "checked": "2026-11-04"
 },
 {
  "name": "대호단양CC",
  "aliases": [
   "대호단양",
   "대호단양 컨트리클럽",
   "대호단양골프클럽",
   "단양 대호",
   "Daeho Danyang CC"
  ],
  "region": "충북 단양 매포읍",
  "nines": [
   {
    "label": "마운틴",
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
   },
   {
    "label": "레이크",
    "pars": [
     5,
     4,
     4,
     4,
     3,
     4,
     4,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홀별 안내 18페이지(course/one=마운틴, course/two=레이크)의 'Par n' 원문 직접 확인. 공식 코스소개 PAR72(마운틴 3,545yd, 레이크 3,683yd). 마운틴=OUT. 유튜브 후기에 '구 오스타' 언급 있으나 옛 이름은 미확인이라 aliases 미포함.",
  "source": "https://www.daehocc.co.kr/pagesite/course/one/hole01.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "더 시에나 제주 컨트리클럽",
  "aliases": [
   "제주",
   "제주CC",
   "제주컨트리클럽",
   "더시에나제주",
   "더시에나 제주CC",
   "더 시에나 컨트리클럽 제주",
   "The Siena Country Club Jeju",
   "Jeju Country Club"
  ],
  "region": "제주 제주시",
  "nines": [
   {
    "label": "서",
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
    "label": "동",
    "pars": [
     4,
     4,
     4,
     5,
     3,
     5,
     4,
     4,
     3
    ]
   }
  ],
  "verified": false,
  "notes": "엑셀 \"제주\" = 1966년 개장 제주컨트리클럽(제주시 516로 2695, 현 더 시에나 컨트리클럽). 공식(thesiena.co.kr)은 403 차단, 옛 도메인 불통. 홀별 파 전체는 Hole19 단일 출처. 골프다이제스트코리아 기사(약 2년 전)의 서 3,267m·동 3,092m가 Hole19 OUT/IN 거리 합과 정확히 일치해 OUT=서, IN=동으로 판정, 기사·golfsaver의 부분 언급(서2 파4, 서6 파5, 서7 파3, 동14 파3, 동17 파4)도 모두 일치. 전체 18홀 독립 2출처는 아니어서 false. 롯데스카이힐이 자사 사이트에서 '제주CC'로 부르는 서귀포 36홀(롯데스카이힐 제주)과 혼동 주의.",
  "source": "https://www.hole19golf.com/courses/the-siena-country-club",
  "checked": "2026-11-04"
 },
 {
  "name": "더 클럽 앳 나인브릿지",
  "aliases": [
   "나인브릿지-제주",
   "나인브릿지 제주",
   "클럽나인브릿지",
   "클럽 나인브릿지",
   "나인브릿지",
   "제주 나인브릿지",
   "The Club at Nine Bridges",
   "Club Nine Bridges",
   "Nine Bridges"
  ],
  "region": "제주 서귀포시 안덕면",
  "nines": [
   {
    "label": "크릭",
    "pars": [
     4,
     3,
     5,
     4,
     4,
     4,
     3,
     4,
     5
    ]
   },
   {
    "label": "하이랜드",
    "pars": [
     4,
     4,
     5,
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
  "notes": "GolfPass 스코어카드(Out 36/In 36)와 PGA투어 더CJ컵 홀별 Par 표가 18홀 모두 일치(독립 2출처). 공식 홈페이지는 코스 정보가 이미지뿐이라 표 원문 확인 불가. Out=크릭·In=하이랜드 배정은 골프다이제스트코리아(크릭 4번 고난도 파4·7번 파3, 하이랜드 9번 아일랜드그린)와 CJ컵 18번 파5 아일랜드그린 근거. 여주 해슬리 나인브릿지와 별개.",
  "source": "https://www.golfpass.com/courses/39267-nine-bridges-golf-club/scorecard-and-layout",
  "checked": "2026-11-04"
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
  "name": "더크로스비골프클럽",
  "aliases": [
   "더크로스비",
   "더크로스비CC",
   "더크로스비GC",
   "크로스비",
   "The Crosby Golf Club",
   "The Crosby GC"
  ],
  "region": "경기 이천",
  "nines": [
   {
    "label": "아리아",
    "pars": [
     4,
     3,
     4,
     5,
     4,
     5,
     3,
     4,
     4
    ]
   },
   {
    "label": "빌리",
    "pars": [
     5,
     4,
     5,
     3,
     4,
     4,
     3,
     4,
     4
    ]
   },
   {
    "label": "샬롯",
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
  "notes": "공식 홈페이지 홀별 공략 원문 직접 확인(27홀, 각 36). 이천시 호법면, 반도그룹 인수(2020).",
  "source": "https://www.thecrosbygc.co.kr/Mobile/Course/CourseAttack.aspx (iframe/a1~a9=아리아, b1~b9=빌리, c1~c9=샬롯 홀별 'Pro TIP' 원문 '파N홀')",
  "checked": "2026-11-04"
 },
 {
  "name": "더클래식골프앤리조트",
  "aliases": [
   "더클래식",
   "더클래식CC",
   "더클래식컨트리클럽",
   "더클래식GC",
   "더 클래식 골프&리조트",
   "The Classic Golf & Resort",
   "The Classic CC"
  ],
  "region": "제주 서귀포",
  "nines": [
   {
    "label": "밸리",
    "pars": [
     4,
     5,
     4,
     4,
     3,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "포레스트",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     5,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "엑셀 '더클래식'은 지역 미표기 — 국내에서 '더클래식CC' 명칭으로 가장 알려진 제주 더클래식(잭니클라우스 디자인 18홀, 72파)으로 판단. 공식 홀별 페이지 직접 확인. 타 지역 동명 골프장이면 재확인 필요.",
  "source": "http://www.theclassicresort.com/pagesite/course/one/hole01~09.asp (밸리), /two/hole01~09.asp (포레스트) 홀별 'Par N' 원문",
  "checked": "2026-11-04"
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
  "name": "도고CC",
  "aliases": [
   "도고",
   "도고컨트리클럽",
   "도고칸트리구락부",
   "도고 CC",
   "Dogo CC",
   "Dogo Country Club"
  ],
  "region": "충남 아산",
  "nines": [
   {
    "label": "OUT",
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
    "label": "IN",
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
   }
  ],
  "verified": true,
  "notes": "공식 스코어카드 원문 직접 확인(OUT 36/IN 36). 아산시 선장면.",
  "source": "https://www.dogocc.co.kr/Course/ScoreCard (공식 스코어카드 표)",
  "checked": "2026-11-04"
 },
 {
  "name": "동래베네스트골프클럽",
  "aliases": [
   "동래베네스트",
   "동래베네스트CC",
   "동래베네스트GC",
   "동래CC",
   "동래컨트리클럽",
   "Dongrae Benest",
   "Benest Dongrae"
  ],
  "region": "부산 금정",
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
     4,
     5
    ]
   },
   {
    "label": "IN",
    "pars": [
     4,
     4,
     4,
     3,
     4,
     5,
     4,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 스코어카드 + 홀별 페이지 18개 모두 일치. 삼성 베네스트 계열.",
  "source": "https://www.benestgolf.com/reve/pc/dr-course/main.do (스코어카드 표)",
  "checked": "2026-11-04"
 },
 {
  "name": "동부산컨트리클럽",
  "aliases": [
   "동부산",
   "동부산CC",
   "동부산 CC",
   "동부산골프장",
   "Dongbusan CC",
   "Dong Busan Country Club"
  ],
  "region": "경남 양산",
  "nines": [
   {
    "label": "힐",
    "pars": [
     4,
     5,
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
    "label": "레이크",
    "pars": [
     4,
     3,
     5,
     3,
     4,
     4,
     4,
     5,
     4
    ]
   },
   {
    "label": "밸리",
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
  "notes": "공식 홈페이지 코스안내가 Flash(swf)라 텍스트 미확인 → 블로그 게재 공식 공략도 이미지 판독 + 독립 후기 대조. 밸리 3·5·9번은 공략도 이미지 단일 출처. 양산시 매곡동.",
  "source": "https://glassjane.com/324 (동부산CC 제공 공식 홀별 공략도 이미지 27장, 'nHOLE PAR n' 헤더 판독)",
  "checked": "2026-11-04"
 },
 {
  "name": "동원로얄CC 통영",
  "aliases": [
   "통영동원로얄",
   "통영 동원로얄",
   "동원로얄 통영"
  ],
  "region": "경남 통영시",
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
  "notes": "OUT=한려코스, IN=미륵코스. 공식 코스 스펙표와 티픽 일치. 양산의 '동원로얄CC'(dongwonroyalcc.co.kr)와 다른 골프장이므로 '동원로얄' 단독 alias는 넣지 않음.",
  "source": "https://dongwonresort.co.kr/pagesite/golf/course/intro.asp",
  "checked": "2026-11-04"
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
  "name": "드림파크CC",
  "aliases": [
   "드림파크",
   "드림파크컨트리클럽",
   "드림파크골프장",
   "Dream Park CC",
   "Dreampark Country Club"
  ],
  "region": "인천 검단(구 서구)",
  "nines": [
   {
    "label": "드림 OUT",
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
    "label": "드림 IN",
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
   },
   {
    "label": "파크 OUT",
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
   },
   {
    "label": "파크 IN",
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
  "verified": true,
  "notes": "공식 홈페이지 표 원문 직접 확인. 수도권매립지관리공사 운영 퍼블릭 36홀(드림·파크 각 18홀 72파).",
  "source": "https://www.dreamparkcc.or.kr/03course/course01.asp (공식 코스정보 표: Dream out/in, PARK out/in)",
  "checked": "2026-11-04"
 },
 {
  "name": "드비치골프클럽",
  "aliases": [
   "드비치",
   "드비치CC",
   "드비치GC",
   "거제 드비치",
   "De Beach Golf Club",
   "Debeach GC"
  ],
  "region": "경남 거제",
  "nines": [
   {
    "label": "OUT",
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
    "label": "IN",
    "pars": [
     4,
     4,
     5,
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
  "notes": "공식 스코어 표 + 홀별 페이지 18개 일치. 7,442yd 파72. 거제시 장목면.",
  "source": "https://www.debeach.co.kr/course (공식 Out/In Course Hole·Yard·Par 표)",
  "checked": "2026-11-04"
 },
 {
  "name": "디오션CC",
  "aliases": [
   "디오션",
   "디오션컨트리클럽",
   "여수 디오션",
   "디오션리조트",
   "The Ocean CC",
   "The Ocean Resort"
  ],
  "region": "전남 여수",
  "nines": [
   {
    "label": "웨스트",
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
    "label": "이스트",
    "pars": [
     4,
     4,
     5,
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
  "notes": "공식 홈페이지(theoceanresort.co.kr)는 웹방화벽 차단으로 미확인 → 독립 2출처 대조. 이스트 7·8번은 출처1 단일이나 9홀 합 36 및 '파3 4개(웨스트3·6, 이스트5·7)' 연합뉴스 기사 내용과 정합. 엑셀 '디오션'=여수 디오션CC(웨스트/이스트 오션).",
  "source": "https://1night2day.tistory.com/entry/디오션CC-골프코스-특징-및-공략-TIP (웨스트·이스트 18홀 홀별 'nnnm PAR n' 전부)",
  "checked": "2026-11-04"
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
  "name": "라온골프클럽",
  "aliases": [
   "라온",
   "라온CC",
   "라온GC",
   "제주 라온",
   "라온골프클럽 제주",
   "Raon Golf Club",
   "Raon CC"
  ],
  "region": "제주 제주시 한경면",
  "nines": [
   {
    "label": "스톤",
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
    "label": "레이크",
    "pars": [
     5,
     4,
     4,
     3,
     4,
     3,
     5,
     4,
     4
    ]
   },
   {
    "label": "파인",
    "pars": [
     5,
     3,
     4,
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
  "notes": "공식 홈페이지 홀별 공략 원문 직접 확인(레이크 8번은 '평온한 파4홀…파5홀이라는 느낌' 문맥상 파4). 엑셀 '라온'은 지역 미표기 — 국내 '라온' 골프장 중 가장 알려진 제주 라온GC(27홀)로 판단.",
  "source": "https://www.raon.co.kr/html/course/course02.asp(스톤)·course03.asp(레이크)·course04.asp(파인) 및 _02~_09 홀별 공략 원문 '파N홀'",
  "checked": "2026-11-04"
 },
 {
  "name": "라헨느CC",
  "aliases": [
   "라헨느",
   "라헨느컨트리클럽",
   "라헨느 골프&리조트",
   "라헨느골프리조트",
   "La Reine CC",
   "La Reine Resort"
  ],
  "region": "제주 제주시 봉개동",
  "nines": [
   {
    "label": "레이크",
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
    "label": "오션",
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
  "verified": true,
  "notes": "공식 홈페이지 홀별 이미지(텍스트 아님) 판독 + 후기 일부 대조. 공식 페이지에 'Mountain Course 인허가중' 표기 — 마운틴 이미지(m1~m9)는 모두 '1/4/17' 자리표시라 제외. 현재 운영은 레이크·오션 18홀.",
  "source": "http://lareine.co.kr/test/02course/l1~l9.asp, o1~o9.asp (공식 홀별 안내 이미지 /test/images/l1~9.png, o1~9.png 의 HOLE·PAR·HDCP 표 판독)",
  "checked": "2026-11-04"
 },
 {
  "name": "레이캐슬 골프앤리조트",
  "aliases": [
   "레이캐슬",
   "레이캐슬CC",
   "세종레이캐슬",
   "세종 레이캐슬CC",
   "성원레이캐슬",
   "Raycastle CC",
   "Sejong Raycastle"
  ],
  "region": "세종 전의면",
  "nines": [
   {
    "label": "세종",
    "pars": [
     4,
     5,
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
    "label": "레이",
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
   },
   {
    "label": "캐슬",
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
  "notes": "공식 홈페이지(sjraycastle.com) 코스 페이지는 사진만 있고 홀별 파 텍스트 없음 → 독립 후기 2곳 이상씩 전 홀 일치로 검증. 캐슬 3번 파3(공중 티) 다수 출처 일치.",
  "source": "https://m.blog.naver.com/kusada/221943834614 (캐슬·세종 18홀 홀별 'Par n (HP n) yard' 전부)",
  "checked": "2026-11-04"
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
  "name": "레이크우드CC",
  "aliases": [
   "레이크우드CC",
   "레이크우드",
   "레이크우드 컨트리클럽",
   "Lakewood CC"
  ],
  "region": "경기 양주",
  "nines": [
   {
    "label": "물길",
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
    "label": "꽃길",
    "pars": [
     4,
     4,
     3,
     4,
     4,
     5,
     3,
     5,
     4
    ]
   },
   {
    "label": "산길",
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
   },
   {
    "label": "숲길",
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
  "notes": "공식 홈페이지 코스소개(lake_course/wood_course) 페이지가 쓰는 JS의 ParHole 배열 원문 직접 확인. 레이크코스=물길(1~9)+꽃길(10~18), 우드코스=산길(1~9)+숲길(10~18), 각 PAR 72. 꽃길 6번 파5(시그니처홀) 블로그 서술과 일치.",
  "source": "https://lakewood.co.kr/static/pc/js/custom/lake_course.js",
  "checked": "2026-11-04"
 },
 {
  "name": "레인보우힐스CC",
  "aliases": [
   "레인보우힐스",
   "레인보우힐스CC",
   "레인보우힐스 컨트리클럽",
   "Rainbow Hills CC"
  ],
  "region": "충북 음성",
  "nines": [
   {
    "label": "동",
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
    "label": "남",
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
    "label": "서",
    "pars": [
     4,
     3,
     4,
     4,
     5,
     3,
     4,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 홀별 페이지(course/one|two|three/holeNN.asp)의 홀 정보 이미지(Par·거리표) 27장을 직접 확인. 남코스 4번은 이미지 alt 텍스트가 'Par 3'로 잘못돼 있으나 이미지 본문은 'Par 4'(214m), 블로그(source2)도 파4. 블로그는 서코스 2번을 파4로 적어 서코스 합 37이 되는 오기 — 공식 이미지는 파3(104m).",
  "source": "https://www.rainbowhills.co.kr/pagesite/course/one/hole01.asp",
  "checked": "2026-11-04"
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
  "name": "로드힐스 골프&리조트",
  "aliases": [
   "로드힐스",
   "로드힐스CC",
   "로드힐스 골프앤리조트",
   "Lordhills Golf & Resort"
  ],
  "region": "강원 춘천",
  "nines": [
   {
    "label": "레이크",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     5,
     4,
     3,
     4
    ]
   },
   {
    "label": "로드",
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
   },
   {
    "label": "힐스",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 모바일 코스소개(lake_course/lord_course/hills_course.asp) 홀별 'NN Hole PAR X' 원문 직접 확인. 코스 메뉴는 레이크·로드·힐스 3개(27홀). 남춘천IC 인근.",
  "source": "https://lordhills.co.kr/_mobile/subContents/course/lake_course.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "로얄링스CC",
  "aliases": [
   "로열링스CC",
   "로열링스",
   "로얄링스",
   "로얄링스 컨트리클럽",
   "Royal Links CC"
  ],
  "region": "충남 태안",
  "nines": [
   {
    "label": "퀸즈 OUT",
    "pars": [
     5,
     4,
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
    "label": "퀸즈 IN",
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
    "label": "킹즈 OUT",
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
    "label": "킹즈 IN",
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
  "notes": "공식 홈페이지 코스소개 스코어카드 표(Queens/Kings Course, 각 Par 72) 원문 직접 확인. 엑셀 표기 '로열링스'는 공식 '로얄링스'의 표기 변형. 블로그 킹즈 OUT 1번 파4·2번 파5 일치.",
  "source": "https://royallinks.co.kr/mobile/course/courseIntro.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "로제비앙 골프클럽 곤지암",
  "aliases": [
   "로제비앙",
   "로제비앙CC",
   "로제비앙GC",
   "로제비앙 곤지암",
   "큐로CC",
   "큐로컨트리클럽",
   "블루버드CC"
  ],
  "region": "경기 광주",
  "nines": [
   {
    "label": "로제",
    "pars": [
     4,
     4,
     3,
     4,
     5,
     3,
     4,
     4,
     5
    ]
   },
   {
    "label": "비앙",
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
    "label": "네오",
    "pars": [
     4,
     5,
     3,
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
  "notes": "공식 홈페이지 코스소개 스코어카드 표(로제/비앙/네오, 각 Par 36) 원문 직접 확인, 코스공략 페이지 로제 홀별 Par도 일치. 구 큐로CC·블루버드CC(블로그·유튜브 표기). 네오 코스는 2019 신설.",
  "source": "https://www.logebiengc.com/html/course/course_01.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "롯데스카이힐 부여CC",
  "aliases": [
   "롯데스카이힐 부여",
   "롯데스카이힐부여CC",
   "롯데스카이힐CC 부여",
   "Lotte Skyhill Buyeo CC"
  ],
  "region": "충남 부여",
  "nines": [
   {
    "label": "스카이",
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
    "label": "힐",
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
  "notes": "공식 홈페이지(롯데스카이힐CC) 부여 코스소개 원문의 홀별 'PAR X' 직접 확인. SKY(계백장군)·HILL(의자왕) 2개 9홀 코스(18홀), 각 36. 페이지 일부 탭 제목에 SKY(의자왕)/HILL(계백장군) 혼기가 있으나 홀 데이터는 SKY/HILL 각각 일관.",
  "source": "https://www.lotteskyhill.com/club/course/club-course-buyeo",
  "checked": "2026-11-04"
 },
 {
  "name": "롯데스카이힐 제주CC",
  "aliases": [
   "롯데스카이힐 제주",
   "롯데스카이힐제주CC",
   "롯데스카이힐CC 제주",
   "Lotte Skyhill Jeju CC"
  ],
  "region": "제주 서귀포",
  "nines": [
   {
    "label": "스카이",
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
    "label": "오션",
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
    "label": "힐",
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
    "label": "포레스트",
    "pars": [
     5,
     4,
     4,
     3,
     4,
     5,
     4,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 제주 코스소개 원문의 홀별 'PAR X' 직접 확인(SKY/HILL/OCEAN/FOREST, 36홀; 스카이·오션=회원제, 힐·포레스트=대중제). 렛츠그립 오션 9홀 파 일치, 2022 블로그(kin1584) 포레스트 2~9번 파 일치. 주의: 포레스트 합이 37(파5 3개) — 공식 설명에 '포레스트 9번은 계절에 따라 파4로도 활용'이라 명시되어 있어 운영상 파4(합 36)일 수 있음.",
  "source": "https://www.lotteskyhill.com/club/course/club-course-jeju",
  "checked": "2026-11-04"
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
  "name": "리더스CC",
  "aliases": [
   "리더스",
   "리더스CC",
   "리더스 컨트리클럽",
   "밀양 리더스CC",
   "Leaders CC"
  ],
  "region": "경남 밀양",
  "nines": [
   {
    "label": "힐",
    "pars": [
     5,
     4,
     4,
     4,
     3,
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
     5,
     4,
     4,
     5,
     3
    ]
   },
   {
    "label": "파인",
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
   }
  ],
  "verified": true,
  "notes": "약칭 '리더스'는 국내 유일·대표 골프장인 밀양 리더스CC(힐·레이크·파인 27홀)로 판단. 공식 홈페이지 코스 페이지(/course/hill|lake|pine)의 홀별 공략도 이미지(/images/course/{코스}/{코스}-N.png) 27장의 'PAR X / HDCP Y' 표기를 직접 확인.",
  "source": "https://www.leaderscc.com/course/hill",
  "checked": "2026-11-04"
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
  "name": "마론CC",
  "aliases": [
   "마론뉴데이",
   "마론뉴데이CC",
   "마론컨트리클럽",
   "마론뉴데이 컨트리클럽",
   "Maron CC"
  ],
  "region": "충남 천안",
  "nines": [
   {
    "label": "드림",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     3,
     4,
     5,
     4
    ]
   },
   {
    "label": "비전",
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
  "notes": "구 마론뉴데이CC → 현재 '마론컨트리클럽'(홈페이지 타이틀·2025 블로그 '마론CC(구.마론뉴데이CC)'). 공식 홈페이지 코스 페이지 홀별 'NHole ParX | 거리' 원문 직접 확인. 드림(1~9) PAR 36, 비전(10~18) PAR 36 — 코스소개 요약표와도 일치.",
  "source": "http://www.maronnewday.com/html/course02.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "마에스트로CC",
  "aliases": [
   "마에스트로",
   "마에스트로CC",
   "마에스트로 컨트리클럽",
   "안성 마에스트로CC",
   "Maestro CC"
  ],
  "region": "경기 안성",
  "nines": [
   {
    "label": "레이크",
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
    "label": "밸리",
    "pars": [
     5,
     3,
     4,
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
  "notes": "약칭 '마에스트로'는 안성 마에스트로CC(레이크·밸리 18홀)로 판단. 공식 홈페이지 홀별 페이지(course/one=레이크 1~9, two=밸리 10~18) 'PAR X' 원문 직접 확인 — 홀 상세 영역 라벨이 일부 'Valley Course'로 잘못 표기된 템플릿 오류 있음(페이지 제목·메뉴는 Lake). 2025 블로그(9manual) 레이크·밸리 홀별 파와 일치(레이크 7·8번은 블로그 미기재). 밸리 7번(16번홀) 거리가 190m로 표기돼 있으나 파4.",
  "source": "https://www.maestrocc.co.kr/pagesite/course/one/hole01.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "마우나오션CC",
  "aliases": [
   "마우나오션",
   "마우나오션CC",
   "마우나오션 컨트리클럽",
   "마우나 오션",
   "Mauna Ocean CC"
  ],
  "region": "경북 경주",
  "nines": [
   {
    "label": "마우나",
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
    "label": "오션",
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
    "label": "블루",
    "pars": [
     4,
     3,
     4,
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
  "notes": "공식 홈페이지 코스소개가 쓰는 JS(course.mauna.js / course.ocean.js / course.blue.js)의 par_list 원문 직접 확인, 스코어카드 표의 코스별 PAR 36(합 108)과 일치. 마우나·오션=회원제 18홀, 블루=대중제 9홀(증설).",
  "source": "https://mauna.co.kr/field/swp/course",
  "checked": "2026-11-04"
 },
 {
  "name": "메이플비치 골프앤리조트",
  "aliases": [
   "메이플비치",
   "메이플비치CC",
   "메이플비치GC",
   "메이플비치 골프&리조트",
   "Maple Beach Golf & Resort"
  ],
  "region": "강원 강릉",
  "nines": [
   {
    "label": "비치",
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
   },
   {
    "label": "메이플",
    "pars": [
     4,
     5,
     4,
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
  "notes": "공식 홈페이지 코스소개(SPA) 페이지의 홀 데이터(hole/par/hdcp/length) 원문 확인. 홀 길이와 파 일관(파3 155~185m, 파5 500~590m).",
  "source": "https://www.maplebeach.co.kr/golf/course-introduction/maple-course",
  "checked": "2026-11-04"
 },
 {
  "name": "모카CC",
  "aliases": [
   "세일",
   "세일CC",
   "세일컨트리클럽",
   "모카컨트리클럽",
   "Moka CC",
   "Seil CC"
  ],
  "region": "충북 충주",
  "nines": [
   {
    "label": "산길",
    "pars": [
     4,
     5,
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
    "label": "들길",
    "pars": [
     5,
     4,
     4,
     4,
     4,
     3,
     4,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "엑셀 '세일' = 충주 신니면 동락길 207 세일CC. 옛 도메인 seilcc.co.kr의 코스 페이지가 mokacc.co.kr로 리다이렉트되고 주소·전화(043-841-6000) 동일 → 현재 이름 모카CC로 변경된 것으로 판단. 공식 코스안내 표(산길/들길 각 par 36) 직접 확인.",
  "source": "https://www.mokacc.co.kr/Course/CourseInfo.aspx",
  "checked": "2026-11-04"
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
  "name": "무등산CC",
  "aliases": [
   "무등산",
   "무등산 컨트리클럽",
   "무등산컨트리클럽",
   "Mudeungsan Country Club"
  ],
  "region": "전남 화순",
  "nines": [
   {
    "label": "천왕봉",
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
    "label": "지왕봉",
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
    "label": "인왕봉",
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
  "notes": "공식 홈페이지 코스별 홀 소개(nHole|ParN|HDCP) 원문 직접 확인(지왕봉은 v2_course02_2.asp). 주소 화순군 화순읍 오성로 292-90.",
  "source": "https://www.mudeungsancc.com/html/v2_course02.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "무안클린밸리CC",
  "aliases": [
   "무안클린밸리",
   "무안 클린밸리CC",
   "클린밸리CC",
   "무안클린밸리 컨트리클럽",
   "Muan Clean Valley CC"
  ],
  "region": "전남 무안 청계면",
  "nines": [
   {
    "label": "클린",
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
    "label": "밸리",
    "pars": [
     4,
     5,
     3,
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
  "notes": "공식 홈페이지 코스소개 스코어카드 표(PAR 행) 원문 직접 확인. 클린=1~9번, 밸리=10~18번. 홀 길이와 파 일관. 무안CC(청계면 서호로)와는 별개 골프장.",
  "source": "https://muancleanvalley.com/03course/course01.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "무안CC",
  "aliases": [
   "무안",
   "무안컨트리클럽",
   "무안 컨트리클럽",
   "Muan Country Club"
  ],
  "region": "전남 무안 청계면",
  "nines": [
   {
    "label": "동A",
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
    "label": "동B",
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
    "label": "남A",
    "pars": [
     4,
     4,
     4,
     5,
     4,
     3,
     4,
     4,
     5
    ]
   },
   {
    "label": "남B",
    "pars": [
     4,
     3,
     4,
     4,
     3,
     4,
     5,
     4,
     5
    ]
   },
   {
    "label": "서A",
    "pars": [
     5,
     4,
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
    "label": "서B",
    "pars": [
     4,
     3,
     4,
     4,
     5,
     3,
     4,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 54개 홀 페이지의 pro tip 원문('파N홀')에서 추출, 각 코스 헤더의 코스 파(동A·동B·남B·서A·서B 36PAR, 남A 37PAR)와 합계 일치. 서B 6번은 본문에 파 표기가 없어 공식 홀 이미지(PAR 3, HDCP 7)로 확인. 남A는 파3이 1개뿐인 37파 코스(공식 표기). 무안클린밸리CC와는 별개 골프장.",
  "source": "http://www.muangc.co.kr/course/course.php",
  "checked": "2026-11-04"
 },
 {
  "name": "밀양노벨CC",
  "aliases": [
   "밀양노벨",
   "밀양노벨컨트리클럽",
   "밀양 노벨CC",
   "노벨CC",
   "Miryang Nobel CC"
  ],
  "region": "경남 밀양 단장면",
  "nines": [
   {
    "label": "레이크",
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
    "label": "힐",
    "pars": [
     4,
     4,
     5,
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
  "notes": "공식 홈페이지 모바일 코스소개(LAKE/HILL 탭별 'n HOLE Par N, 거리') 원문 직접 확인. 거리와 파 일관.",
  "source": "https://www.miryangnobelcc.co.kr/Miryang_nobel/mobile/course.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "밀양에스파크CC",
  "aliases": [
   "에스파크",
   "에스파크CC",
   "밀양에스파크",
   "밀양 에스파크 골프리조트",
   "S-Park Resort Country Club Miryang"
  ],
  "region": "경남 밀양시",
  "nines": [
   {
    "label": "S",
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
    "label": "R",
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
  "verified": false,
  "notes": "공식(my.s-parkcc.kr)은 봇 차단(JS 챌린지/406)으로 확인 불가. Hole19 단일 출처: OUT 3298·IN 3237 거리 합계가 기사상 S코스 3,298·R코스 3,237과 일치해 OUT=S, IN=R로 매핑. 독립 2차 출처 미확보. 대안 후보: 2026년 4월 개장 원주 '남한강에스파크CC'(27홀 P·K·A) — 엑셀 목록 시점상 밀양(2023 개장)으로 판단.",
  "source": "https://www.hole19golf.com/courses/s-park-resort-country-club-miryang",
  "checked": "2026-11-04"
 },
 {
  "name": "발리오스CC",
  "aliases": [
   "발리오스",
   "발리오스 컨트리클럽",
   "발안CC",
   "Balios CC"
  ],
  "region": "경기 화성 팔탄면",
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
     4,
     3,
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
     4,
     5,
     3
    ]
   },
   {
    "label": "남",
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
  "verified": false,
  "notes": "공식 홈페이지(balioscc.com)가 자동요청 차단(400 Request Blocked)이라 라운드 후기로 대체. 동: hnk7(2024) 9홀 전부 + sobasic1227 7홀·sidelinenow(2021) 2·6·8번 일치. 남: hnk7(2024) 단일 출처(남코스는 리모델링으로 파34→36 변경 이력, 골프저널). 서: sobasic1227(1,2,4,5,7,9)·nicefama(2024, 4~9)·sidelinenow(1=파4,8=파5,9=파3) 조합. 서3은 명시 표기가 없어 nicefama의 '긴 코스 아님, 세컨샷으로 그린 공략' 서술로 파4 판단(추론). 공식 스코어카드 확인 필요.",
  "source": "https://m.blog.naver.com/hnk7/223481949549",
  "checked": "2026-11-04"
 },
 {
  "name": "백제CC",
  "aliases": [
   "백제",
   "백제컨트리클럽",
   "백제 컨트리클럽",
   "Baekje CC"
  ],
  "region": "충남 부여",
  "nines": [
   {
    "label": "사비",
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
    "label": "웅진",
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
    "label": "한성",
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
  "notes": "공식 홈페이지 홀별 공식 이미지(각 홀 'Par N · 거리m' 표기) 27장 직접 판독. 사비=course/one, 웅진=two, 한성=three(2016년 추가 9홀). 거리와 파 일관. 부여의 롯데스카이힐CC 부여와는 별개.",
  "source": "https://www.baekjecc.com/pagesite/course/one/hole01.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "버치힐CC",
  "aliases": [
   "버치힐",
   "버치힐컨트리클럽",
   "버치힐 골프클럽",
   "용평 버치힐",
   "모나용평 버치힐CC",
   "Birch Hill CC"
  ],
  "region": "강원 평창 대관령면(모나용평)",
  "nines": [
   {
    "label": "버치",
    "pars": [
     5,
     4,
     3,
     4,
     4,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "힐",
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
  "notes": "모나용평 공식 홈페이지 코스별 홀 소개(Hole N PAR N) 원문 직접 확인, 홀 설명의 'ParN 홀입니다'와도 일치. 공식 18홀 파72.",
  "source": "https://www.yongpyong.co.kr/kor/golf/course/birchhillClub/birch.do",
  "checked": "2026-11-04"
 },
 {
  "name": "베뉴지CC",
  "aliases": [
   "베뉴지",
   "베뉴지컨트리클럽",
   "베뉴지 컨트리클럽",
   "Venue G CC"
  ],
  "region": "경기 가평 가평읍",
  "nines": [
   {
    "label": "G",
    "pars": [
     4,
     4,
     4,
     3,
     4,
     5,
     4,
     3,
     5
    ]
   },
   {
    "label": "HILL",
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
    "label": "NEW",
    "pars": [
     4,
     3,
     4,
     4,
     3,
     4,
     5,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스분석(홀별 Par·핸디캡·페어웨이 안착률) 표 원문 직접 확인. G·HILL은 elim1011 후기와도 일치. NEW 코스는 기존 휴(HUE) 코스의 현재 명칭(공식 소개문의 3,165m·7번 시그니처홀 설명이 동일) — aliases 성격으로 '휴/HUE' 병기 필요 시 참고. 골프웨더 블로그의 홀 정보는 AI 생성 추정·불일치로 배제.",
  "source": "https://www.venuegcc.com/Web/course/courseAssay.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "베르힐CC 영종",
  "aliases": [
   "베르힐 영종",
   "베르힐영종",
   "베르힐CC영종",
   "베르힐 컨트리클럽 영종",
   "Verthill CC Yeongjong"
  ],
  "region": "인천 중구 영종",
  "nines": [
   {
    "label": "베르힐",
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
    "label": "스카이",
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
   },
   {
    "label": "오션",
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
    "label": "레이크",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스소개·코스공략 두 페이지의 코스별 par 표 원문 직접 확인(일치). 주소 인천 중구 한상중앙로 66. 함평 베르힐CC와 별개.",
  "source": "https://www.verthillccyj.com/course/courseInfo.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "베르힐CC 함평",
  "aliases": [
   "베르힐",
   "베르힐CC",
   "베르힐컨트리클럽",
   "베르힐 컨트리클럽 함평",
   "Verthill CC"
  ],
  "region": "전남 함평",
  "nines": [
   {
    "label": "레이크",
    "pars": [
     4,
     5,
     4,
     4,
     3,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "스카이",
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
    "label": "베르힐",
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
  "notes": "공식 홈페이지 코스별 COURSE INFO 표(PAR/BLACK/WHITE…) 원문 직접 확인. 엑셀의 '베르힐'은 베르힐 영종(인천, 별도 36홀)과 구분되는 원조 베르힐CC(함평)로 판단 — 같은 운영사가 영종을 별도 표기. 스카이 sky.asp.",
  "source": "https://www.verthillcc.co.kr/mobile/course/lake.asp",
  "checked": "2026-11-04"
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
  "name": "베이사이드CC",
  "aliases": [
   "베이사이드",
   "베이사이드 골프클럽",
   "베이사이드GC",
   "베이사이드컨트리클럽",
   "Bayside Golf Club"
  ],
  "region": "부산 기장 일광",
  "nines": [
   {
    "label": "파크",
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
     5,
     3,
     4,
     4,
     3,
     5,
     4,
     4,
     4
    ]
   },
   {
    "label": "캐니언",
    "pars": [
     4,
     3,
     4,
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
  "notes": "공식 홈페이지 코스 페이지(1번홀 HTML)와 홀 전환용 공식 스크립트(park/lake/canyon_course.js의 PAR·HDCP·거리 목록) 원문 확인. 거리와 파 일관. 부산역사문화대전의 코스별 Par 36과 합계 일치.",
  "source": "https://bayside.co.kr/swp/park_course",
  "checked": "2026-11-04"
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
  "name": "보문골프클럽",
  "aliases": [
   "보문",
   "보문CC",
   "보문GC",
   "경주보문골프클럽",
   "Bomun Golf Club"
  ],
  "region": "경북 경주",
  "nines": [
   {
    "label": "OUT",
    "pars": [
     4,
     4,
     5,
     4,
     4,
     4,
     3,
     5,
     3
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
  "notes": "경상북도문화관광공사 운영 공식 홈페이지 코스안내 표 직접 확인. IN 코스는 2023 후기(10~18번 거리·파)와도 일치",
  "source": "https://golf.gtc.co.kr/content/course-info.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "보성컨트리클럽",
  "aliases": [
   "보성",
   "보성CC",
   "보성컨트리클럽",
   "Bosung CC"
  ],
  "region": "전남 보성",
  "nines": [
   {
    "label": "레이크",
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
    "label": "마운틴",
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
  "notes": "공식 홈페이지 코스소개 표(레이크/마운틴 홀별 PAR) 직접 확인. 레이크 1번 PAR5 홀별 페이지와도 일치",
  "source": "https://www.bosungcc.co.kr/html/course/course01.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "볼카노골프앤리조트",
  "aliases": [
   "레이크힐스 제주",
   "레이크힐스제주CC",
   "레이크힐스 제주CC",
   "볼카노CC",
   "볼카노 골프 앤 리조트",
   "클럽엘제주",
   "Volcano Golf & Resort"
  ],
  "region": "제주 서귀포",
  "nines": [
   {
    "label": "아쿠아마린",
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
    "label": "에메랄드",
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
    "label": "토파즈",
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
   }
  ],
  "verified": false,
  "notes": "구 레이크힐스 제주CC(2002 개장) → 2023년 매각 후 볼카노골프앤리조트로 재개장(중간에 '클럽엘제주' 명칭도 사용). 공식 www.volcanocc.co.kr 은 403 차단. TheGrint 3개 조합(아쿠아마린/에메랄드, 아쿠아마린/토파즈, 에메랄드/토파즈) 스코어카드가 서로 일치. 공식 홈페이지 코스설명을 옮긴 블로그(source2)의 홀 서술(아쿠아마린 2번 파5·3번 파3·7번 파3, 토파즈 4번 파5·5번 파4·7번 파3·9번 파5, 에메랄드 1번 파5·2번 파3)과 모순 없음, 에메랄드 6번 파4·7번 파5는 2024 후기와도 일치. 다만 27홀 전체를 두 번째 독립 출처로 확인하지 못해 false. 주의: 2024년 리조트 공사로 토파즈 9번(파5)을 그린을 당겨 임시 파4로 운영한 기록 있음(blog.naver.com/kolf12/223405554230) — 현재 상태 미확인.",
  "source": "https://thegrint.com/golf-courses/rest-of-world/south-korea/volcano-golf-and-resort/aquamarine-emerald",
  "checked": "2026-11-04"
 },
 {
  "name": "부곡컨트리클럽",
  "aliases": [
   "부곡",
   "부곡CC",
   "부곡컨트리클럽",
   "Bugok CC"
  ],
  "region": "경남 창녕",
  "nines": [
   {
    "label": "서",
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
    "label": "동",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 전체코스 표 + 코스공략 홀별 PAR 직접 확인, 일치",
  "source": "https://www.bkcc.co.kr/sub2_1",
  "checked": "2026-11-04"
 },
 {
  "name": "부산컨트리클럽",
  "aliases": [
   "부산",
   "부산CC",
   "부산컨트리클럽",
   "Busan CC"
  ],
  "region": "부산 금정",
  "nines": [
   {
    "label": "금정",
    "pars": [
     4,
     3,
     5,
     4,
     3,
     4,
     4,
     5,
     4
    ]
   },
   {
    "label": "동백",
    "pars": [
     5,
     4,
     3,
     4,
     4,
     4,
     4,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스공략도 홀별 PAR 직접 확인. 금정코스=1~9번(OUT), 동백코스=10~18번(IN). 금정구 노포동 회원제",
  "source": "https://www.bscc.co.kr/course/course01",
  "checked": "2026-11-04"
 },
 {
  "name": "부영컨트리클럽",
  "aliases": [
   "부영",
   "부영CC",
   "부영컨트리클럽",
   "제주부영CC",
   "제주부영컨트리클럽",
   "Booyoung CC"
  ],
  "region": "제주 서귀포",
  "nines": [
   {
    "label": "원앙",
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
    "label": "사랑",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     3,
     5,
     3,
     5
    ]
   },
   {
    "label": "우정",
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
   }
  ],
  "verified": true,
  "notes": "부영그룹 계열 중 순천부영CC는 별도 목록, 나주부영CC는 지명 붙은 이름이라 도메인·사이트명이 '부영컨트리클럽'(booyoungcc.co.kr)인 제주 서귀포 남원읍 27홀을 선택. 공식 홈페이지 홀별 공략 페이지(course0N_H.asp) 27홀 텍스트의 'xxxM ParN' 직접 확인. 사랑 1번은 '410M 4Par' 표기. 엑셀의 '부영'이 나주부영CC를 뜻할 가능성은 남음",
  "source": "http://booyoungcc.co.kr/course/course01.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "블랙밸리컨트리클럽",
  "aliases": [
   "블랙밸리",
   "블랙밸리CC",
   "블랙밸리컨트리클럽",
   "Black Valley CC"
  ],
  "region": "강원 삼척",
  "nines": [
   {
    "label": "블랙",
    "pars": [
     5,
     4,
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
    "label": "밸리",
    "pars": [
     4,
     4,
     4,
     3,
     4,
     5,
     4,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스소개 스코어표 + 블랙/밸리 홀별 공략 페이지 PAR 직접 확인, 일치. 블랙=1~9번, 밸리=10~18번. 삼척 도계읍 대중제",
  "source": "https://www.blackcc.co.kr/course/intro",
  "checked": "2026-11-04"
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
  "name": "블랙스톤 제주",
  "aliases": [
   "블랙스톤 제주",
   "블랙스톤제주",
   "블랙스톤제주CC",
   "블랙스톤 골프앤리조트 제주",
   "Blackstone Jeju"
  ],
  "region": "제주 제주시(한림)",
  "nines": [
   {
    "label": "북",
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
   },
   {
    "label": "남",
    "pars": [
     4,
     4,
     4,
     3,
     5,
     4,
     3,
     4,
     5
    ]
   },
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
     5,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 제주(/jj/) 홀별 페이지 27개(course-north/south/east-01~09)의 \"n HOLE PAR p\" 원문 직접 확인. 공식 개요: North 3,340m·South 3,429m·East 3,349m 각 Par36. DB의 블랙스톤 이천(/ic/)과 별개.",
  "source": "http://www.blackstoneresort.com/jj/courseView?where=course-north-01",
  "checked": "2026-11-04"
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
  "name": "블루원상주컨트리클럽",
  "aliases": [
   "블루원상주",
   "블루원상주CC",
   "블루원 상주",
   "블루원상주골프리조트",
   "BlueOne Sangju CC",
   "Blue One Sangju Golf Resort"
  ],
  "region": "경북 상주",
  "nines": [
   {
    "label": "동",
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
    "label": "서",
    "pars": [
     4,
     5,
     4,
     4,
     5,
     3,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지(sj.blueone.com)는 JS 앱이라 원문 확인 불가. GolfPass 스코어카드와 Hole19 스코어카드(레드티 거리·SI 별도 데이터) 두 출처 18홀 파 일치. 코스명은 East/West(GolfPass 'East/West Course' 표기 순서상 1~9번=East로 판단, 동/서 매핑은 미검증)",
  "source": "https://www.golfpass.com/courses/38650-blue-one-sangju-golf-resort-east-west-course/scorecard-and-layout",
  "checked": "2026-11-04"
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
  "name": "비에이비스타컨트리클럽",
  "aliases": [
   "비에이비스타",
   "비에이비스타CC",
   "비에이비스타컨트리클럽",
   "BA Vista CC",
   "BA Vista Country Club"
  ],
  "region": "경기 이천",
  "nines": [
   {
    "label": "몬티",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     5,
     4,
     4,
     3
    ]
   },
   {
    "label": "벨라",
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
    "label": "라고",
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
    "label": "비스타",
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
    "label": "부오나",
    "pars": [
     5,
     4,
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
    "label": "호팍",
    "pars": [
     5,
     4,
     3,
     4,
     4,
     3,
     5,
     3,
     5
    ]
   }
  ],
  "verified": false,
  "notes": "회원제 36홀(몬티·벨라·라고·비스타, /Member/Course/Info~Info4) + 대중제 18홀(부오나·호팍, /Public/Course/Info, Info2). 공식 홈페이지 몬티·벨라·라고의 홀별 'Par' 표기가 거리·설명과 어긋나게 뒤섞여 있음(예: 몬티 6번 560 'Par 3'인데 설명은 '파 5홀', 벨라 7번 200 'Par 4'). 그래서 공식 거리(yd)·홀 설명 기준으로 파를 정함: 벨라는 GolfPass 'Bella/Buona' 스코어카드(같은 거리) 파와 일치, 라고는 Hole19 IN(거리 m 환산 일치) 파와 일치, 몬티 1~7번은 Hole19 OUT과 일치하나 8·9번은 Hole19가 3·4 순서(공식 설명은 9번 '짧은 파3홀')로 상충 → 공식 설명 채택. 비스타·부오나·호팍은 공식 페이지 단일 출처(거리와 정합). 부오나·호팍은 전장이 짧은 편(파5 360~444yd). 2022년 후기상 '누보' 코스 신설 등 코스 재편 이력 있어 현재 라우팅 재확인 필요",
  "source": "https://www.bavista.co.kr/Member/Course/Info",
  "checked": "2026-11-04"
 },
 {
  "name": "비전힐스컨트리클럽",
  "aliases": [
   "비전힐스",
   "비전힐스CC",
   "비전힐스컨트리클럽",
   "Vision Hills CC"
  ],
  "region": "경기 남양주",
  "nines": [
   {
    "label": "동",
    "pars": [
     5,
     4,
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
    "label": "서",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스공략법 홀별 페이지(동/서 각 9홀) Handicap·Par·티별 거리 표 직접 확인, 거리와 파 정합. 화도읍 회원제. 부설 골프연습장 PAR3홀은 제외",
  "source": "http://www.visionhillscc.co.kr/course/east_course01.asp",
  "checked": "2026-11-04"
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
  "name": "사우스케이프오너스클럽",
  "aliases": [
   "사우스케이프오너스",
   "사우스케이프오너스클럽",
   "사우스케이프",
   "사우스케이프CC",
   "South Cape Owners Club"
  ],
  "region": "경남 남해",
  "nines": [
   {
    "label": "OUT",
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
   },
   {
    "label": "IN",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 HOLE INFORMATION(1~18번 거리 M / PAR) 텍스트 직접 확인, 거리와 정합. 16번은 'S 210M / PAR 3' 표기. 남해 창선면 회원제",
  "source": "https://www.southcape.co.kr/golf_course_view.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "사이프러스골프앤리조트",
  "aliases": [
   "사이프러스",
   "사이프러스CC",
   "사이프러스골프앤리조트",
   "사이프러스 골프&리조트",
   "Cypress Golf & Resort"
  ],
  "region": "제주 서귀포",
  "nines": [
   {
    "label": "동",
    "pars": [
     4,
     4,
     3,
     5,
     4,
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
    "label": "남",
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
   },
   {
    "label": "북",
    "pars": [
     4,
     4,
     3,
     4,
     5,
     4,
     3,
     5,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스제원 표(4코스 홀별 par·hdcp·티별 yd) 직접 확인. 동코스는 9홀 합 35(파72 아님): 공식 제원표 6번 'par 5' 표기는 오기로 판단 — 같은 표 SUB Total 35, 공식 홀 설명('긴 파 4홀'), GolfPass East/South 및 Hole19(동35+남36=71) 모두 6번 PAR4로 일치. 서코스는 GolfPass West와, 남코스는 Hole19 IN과 일치. 북코스는 공식 제원표·홀별 페이지만 확인(합 36). 표선면",
  "source": "http://cypress.co.kr/swp/course",
  "checked": "2026-11-04"
 },
 {
  "name": "샌드파인골프클럽",
  "aliases": [
   "샌드파인",
   "샌드파인GC",
   "샌드파인CC",
   "샌드파인골프클럽",
   "라카이샌드파인",
   "Sandpine Golf Club"
  ],
  "region": "강원 강릉",
  "nines": [
   {
    "label": "OUT",
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
  "notes": "공식 홈페이지(라카이샌드파인 리조트) 코스가이드 스코어표 OUT/IN 홀별 Par·HDCP 직접 확인. 골프 메인 페이지의 시그니처홀 설명(1번 par5, 13번 par5)과도 일치. 강릉 저동 대중제, 구 sandpine.co.kr은 lakaisandpine.co.kr로 연결",
  "source": "https://www.lakaisandpine.co.kr/golf/course_guide",
  "checked": "2026-11-04"
 },
 {
  "name": "샤인데일 골프앤리조트",
  "aliases": [
   "샤인데일",
   "샤인데일CC",
   "샤인데일GC",
   "샤인데일골프앤리조트",
   "Shinedale Golf & Resort"
  ],
  "region": "강원 홍천",
  "nines": [
   {
    "label": "샤인",
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
    "label": "레이크",
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
    "label": "데일",
    "pars": [
     5,
     4,
     3,
     5,
     4,
     3,
     4,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스별 홀 공략 페이지(Shine/Lake/DaleCourse.aspx) 원문에서 홀별 Par·거리 직접 확인. 데일코스는 2015년 9월 추가 개장 9홀. 블로그(샤인 7번 파5)와도 일치",
  "source": "https://www.shinedale.com/Course/ShineCourse.aspx",
  "checked": "2026-11-04"
 },
 {
  "name": "샤인빌파크CC",
  "aliases": [
   "샤인빌파크",
   "샤인빌파크CC",
   "샤인빌파크 컨트리클럽",
   "샤인빌CC",
   "Shineville Park CC"
  ],
  "region": "제주 서귀포",
  "nines": [
   {
    "label": "리버",
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
    "label": "팜",
    "pars": [
     4,
     4,
     4,
     4,
     3,
     5,
     4,
     5,
     3
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스소개 스코어카드 표(RIVER/PALM, HDCP·B/R/L티 거리·PAR) 원문 직접 확인. 블로그 기준 전반 PALM·후반 RIVER로 도는 경우도 있음",
  "source": "https://www.shinevilleparkcc.com/02course/01intro.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "샴발라CC",
  "aliases": [
   "샴발라",
   "샴발라CC",
   "샴발라 컨트리클럽",
   "Shambhala CC"
  ],
  "region": "경기 포천",
  "nines": [
   {
    "label": "마운틴",
    "pars": [
     4,
     4,
     5,
     4,
     4,
     3,
     4,
     3,
     5
    ]
   },
   {
    "label": "레이크",
    "pars": [
     4,
     3,
     5,
     3,
     4,
     4,
     5,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스공략 홀별 페이지(m1~m9, l1~l9) 원문에서 홀별 PAR 직접 확인. 코스소개 페이지 소스 내 주석처리된 구 스코어카드 표(마운틴 1~9, 레이크 10~18, 파72)와도 홀별 파 일치",
  "source": "https://shambhalacc.co.kr/course/m1.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "서경타니CC",
  "aliases": [
   "서경타니",
   "서경타니CC",
   "서경타니컨트리클럽",
   "타니CC",
   "타니컨트리클럽",
   "Tani Country Club"
  ],
  "region": "경남 사천",
  "nines": [
   {
    "label": "청룡",
    "pars": [
     4,
     5,
     4,
     4,
     5,
     3,
     4,
     3,
     4
    ]
   },
   {
    "label": "백호",
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
    "label": "주작",
    "pars": [
     5,
     4,
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
    "label": "현무",
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
   }
  ],
  "verified": false,
  "notes": "공식 홈페이지 홀 정보는 JS로 로드되어 원문 표 확보 불가(청룡 1번 Par4 315m만 렌더링으로 확인, 청룡 2번 파5는 공식 모바일 페이지 검색 스니펫). 홀별 파는 GolfingRecord 코스DB(Blue Dragon=청룡, Backhoe=백호, Xuanwu=현무, Agonists=주작 — 주작은 소거법 추정) 기준. 부분 대조: 백호 3번 파4·6/8번 파3(2021 블로그), 주작 9번 파5(2025 블로그) 일치. 독립 2출처 전체 일치 미확인으로 false",
  "source": "https://www.golfingrecord.com/golf-scorecard/de8d253c-d11c-4ce7-8637-26da87e98d38",
  "checked": "2026-11-04"
 },
 {
  "name": "서귀포팬텀골프앤리조트",
  "aliases": [
   "우리들",
   "우리들CC",
   "우리들골프리조트",
   "서귀포팬텀CC",
   "팬텀CC",
   "Seogwipo Phantom Golf & Resort"
  ],
  "region": "제주 서귀포",
  "nines": [
   {
    "label": "북",
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
    "label": "남",
    "pars": [
     3,
     4,
     4,
     5,
     4,
     3,
     4,
     5,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "엑셀 \"우리들\"=날씨i 제주 그룹의 우리들CC → 현재 서귀포팬텀CC(구 우리들CC, 블로그 \"제주 팬텀cc(구.우리들cc)\" 근거). 공식 홈페이지 North(1~9)/South(10~18) 홀별 PAR 원문 직접 확인. 제주 서귀포시 산록남로 2914.",
  "source": "https://spgr.co.kr/swp/north_hole_01",
  "checked": "2026-11-04"
 },
 {
  "name": "서라벌 골프클럽",
  "aliases": [
   "서라벌",
   "서라벌CC",
   "서라벌GC",
   "서라벌골프클럽",
   "Seorabol Golf Club"
  ],
  "region": "경북 경주",
  "nines": [
   {
    "label": "힐",
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
    "label": "레이크",
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
    "label": "마운틴",
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
    "label": "밸리",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     5,
     4,
     3,
     4
    ]
   },
   {
    "label": "파인",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스제원 표(코스별 1H~9H PAR, 각 36) 원문 직접 확인, 코스공략도 홀별 PAR와도 45홀 전부 일치. 공식 소개상 대중제 45홀 파180(경주 외동읍). 경주신라CC와 다른 골프장",
  "source": "https://www.seorabolgc.com/course/data",
  "checked": "2026-11-04"
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
  "name": "서울한양CC",
  "aliases": [
   "서울한양",
   "서울한양CC",
   "서울한양컨트리클럽",
   "서울·한양CC",
   "The Seoul Hanyang Country Club"
  ],
  "region": "경기 고양",
  "nines": [
   {
    "label": "신코스 OUT",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "신코스 IN",
    "pars": [
     3,
     5,
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
    "label": "구코스 OUT",
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
    "label": "구코스 IN",
    "pars": [
     5,
     4,
     5,
     4,
     3,
     4,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 스코어보드(New/Old Course 각 18홀 파72) 원문 직접 확인, 국문 코스공략 홀별 페이지와도 일치. 영문 페이지(/en/course)는 신코스 홀 순서가 다른 구 라우팅(신코스 OUT=4,4,4,3,5,3,5,4,4)이라 국문 스코어보드(현행) 기준 채택. 부설 9홀 퍼블릭 '한양파인CC'는 별도 골프장이라 미포함",
  "source": "https://hanyangcc.com/course/score.asp",
  "checked": "2026-11-04"
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
  "name": "석정힐CC",
  "aliases": [
   "석정힐",
   "석정힐CC",
   "석정힐컨트리클럽",
   "석정힐 골프앤호텔",
   "Seokjeong Hill CC"
  ],
  "region": "전북 고창",
  "nines": [
   {
    "label": "마운틴",
    "pars": [
     4,
     5,
     4,
     5,
     3,
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
     4,
     5,
     3,
     4,
     4,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스소개 스코어카드 표(Mountain 1~9 OUT 36, Lake 10~18 IN 36, 파72, 6,132m) 원문 직접 확인. 코스공략 페이지 1번(마운틴)·10번(레이크) PAR4도 일치",
  "source": "http://www.hillcc.com/swp/course_info",
  "checked": "2026-11-04"
 },
 {
  "name": "선리치 골프클럽",
  "aliases": [
   "선리치",
   "선리치CC",
   "선리치GC",
   "선리치골프클럽",
   "Sunrich Golf Club"
  ],
  "region": "경북 경주",
  "nines": [
   {
    "label": "9홀",
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
  "notes": "경주 안강읍 9홀 대중제(엑셀 경북 목록상 위치 일치). 공식 홈페이지 코스 페이지 거리표(465/125/394/305/295/505/385/155/431m)와 홀별 공략 페이지 1~9번 PAR 원문 직접 확인, 거리와 파 정합",
  "source": "https://www.sunrichgc.com/course",
  "checked": "2026-11-04"
 },
 {
  "name": "설악썬밸리CC",
  "aliases": [
   "설악썬밸리",
   "설악썬밸리CC",
   "설악썬밸리GC",
   "설악썬밸리 골프리조트",
   "Seorak Sun Valley Golf Club"
  ],
  "region": "강원 고성",
  "nines": [
   {
    "label": "설악",
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
    "label": "썬",
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
    "label": "밸리",
    "pars": [
     4,
     4,
     4,
     3,
     5,
     3,
     4,
     5,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "썬밸리그룹 공식 홈페이지 설악썬밸리 코스소개 스코어카드 표(설악/썬/밸리 각 PAR 36, 티별 거리) 원문 직접 확인. GolfingRecord 코스DB(Sorak/Sun/Valley) 홀별 파·블루티 거리와도 3개 코스 전부 일치",
  "source": "https://www.sunvalley.co.kr/seorak/golf/course_intro",
  "checked": "2026-11-04"
 },
 {
  "name": "설해원",
  "aliases": [
   "설해원",
   "설해원CC",
   "설해원 골프",
   "골든비치",
   "골든비치CC",
   "골든비치 골프리조트",
   "Seolhaeone",
   "Golden Beach Golf Resort"
  ],
  "region": "강원 양양",
  "nines": [
   {
    "label": "샐몬",
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
    "label": "씨뷰",
    "pars": [
     4,
     4,
     3,
     4,
     5,
     3,
     4,
     4,
     5
    ]
   },
   {
    "label": "파인",
    "pars": [
     5,
     4,
     5,
     3,
     4,
     4,
     3,
     5,
     4
    ]
   }
  ],
  "verified": false,
  "notes": "공식 홈페이지(seolhaeone.com/golf)는 코스 소개문만 있고 홀별 파 표 없음(파인 Par 37·파인 4번 아일랜드홀만 확인). 씨뷰·파인은 GolfPass(옛 이름 Golden Beach) 스코어카드와 GolfingRecord(Yangyang Pine Beach=골든비치 등록명) 홀별 파 일치. 샐몬은 GolfingRecord 단일 출처(2019 레전드매치 '샐먼·시뷰 파72'로 합계만 정합)라 false. 2020년대 신설 18홀 '더 레전드 코스'는 홀별 파 출처를 찾지 못해 nines에서 제외(holes 45는 기존 27+레전드 18 기준)",
  "source": "https://www.golfpass.com/courses/39593-golden-beach-golf-pine-course/scorecard-and-layout",
  "checked": "2026-11-04"
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
  "name": "세레니티 청주CC",
  "aliases": [
   "실크리버CC",
   "실크리버",
   "실크리버컨트리클럽",
   "세레니티CC",
   "세레니티 청주",
   "Serenity Cheongju",
   "Silk River CC"
  ],
  "region": "충북 청주",
  "nines": [
   {
    "label": "실크",
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
    "label": "리버",
    "pars": [
     5,
     4,
     4,
     4,
     4,
     3,
     4,
     3,
     5
    ]
   },
   {
    "label": "블루",
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
  "notes": "실크리버CC(청주 남이면)가 세레니티 청주CC로 명칭 변경(조인성공 \"세레니티CC(구 실크리버CC)\"). 공식 코스페이지 홀별 Par·Blue 거리 및 블루코스 스코어카드 직접 판독, 27홀 파108. 블루(챌린지) 9홀은 2022년 대중제 증설.",
  "source": "https://serenitygolfresort.com/cheongju/silk/ (river/, blue/ 동일 구조)",
  "checked": "2026-11-04"
 },
 {
  "name": "세븐밸리CC",
  "aliases": [
   "세븐밸리",
   "세븐밸리CC",
   "세븐밸리컨트리클럽",
   "세븐밸리컨트리클럽&리조트",
   "Seven Valley Country Club"
  ],
  "region": "경북 칠곡",
  "nines": [
   {
    "label": "세븐",
    "pars": [
     4,
     4,
     4,
     3,
     5,
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
  "verified": false,
  "notes": "공식 홈페이지(sevenvalley.co.kr)는 AWS WAF 챌린지·403으로 접근 불가. GolfPass·Golfify(동일 iGolf 계열 DB 가능성) 홀별 파 기준. 세븐코스는 골프존 코스정보(검색 스니펫)·블로그(1번 파4 410m)·기사(세븐 7번 파5 504m)와 일치. 밸리코스는 옛 다음블로그 후기(10~18번 4,4,3,5,4,4,4,3,5)와 일치하나, 골프존 2018 이용후기에 '밸리 1번·4번 파 설정이 바뀌었다'는 제보와 골프존 코스정보에 밸리 1번 파5(430m) 표기 스니펫이 있어 밸리 1번(현 파4)·4번(현 파5)이 서로 바뀌었을 가능성. 두 홀 블루티 거리가 497yd로 같음. 9홀 합 36은 어느 쪽이든 동일. 현장 확인 필요",
  "source": "https://www.golfpass.com/courses/39370-seven-valley-country-club/scorecard-and-layout",
  "checked": "2026-11-04"
 },
 {
  "name": "세이지우드 여수경도",
  "aliases": [
   "세이지우드 여수경도",
   "세이지우드여수경도",
   "세이지우드CC 여수",
   "Sagewood Yeosu"
  ],
  "region": "전남 여수",
  "nines": [
   {
    "label": "돌산도",
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
   },
   {
    "label": "금오도",
    "pars": [
     4,
     4,
     3,
     4,
     5,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "오동도",
    "pars": [
     4,
     3,
     5,
     4,
     4,
     5,
     4,
     4,
     3
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스 페이지 3개(dolsando/geumodo/odongdo)의 \"hole n PAR p\" 원문 직접 확인. 각 36. 옛 경도리조트(전남개발공사) 시절 명칭은 미확인이라 aliases 미포함. DB의 세이지우드 홍천과 별개.",
  "source": "https://www.sagewood.co.kr/yeosu/golf/dolsando",
  "checked": "2026-11-04"
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
  "name": "세종에머슨CC",
  "aliases": [
   "세종에머슨",
   "세종에머슨컨트리클럽",
   "에머슨CC",
   "Sejong Emerson CC"
  ],
  "region": "세종 전의면",
  "nines": [
   {
    "label": "레이크",
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
    "label": "밸리",
    "pars": [
     5,
     3,
     4,
     4,
     3,
     4,
     4,
     4,
     5
    ]
   },
   {
    "label": "마운틴",
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
  "notes": "공식 홈페이지 홀별 페이지(course_lake/valley/mountain.asp, 'Par N / Handicap N') 27개 직접 확인.",
  "source": "http://www.sejongemerson.co.kr/golf/course_lake.asp?formname=Lake&hole=1",
  "checked": "2026-11-04"
 },
 {
  "name": "세종필드GC",
  "aliases": [
   "세종필드",
   "세종필드골프클럽",
   "세종필드CC",
   "Sejong Field GC"
  ],
  "region": "세종",
  "nines": [
   {
    "label": "세종",
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
   },
   {
    "label": "행복",
    "pars": [
     4,
     5,
     4,
     4,
     5,
     3,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스개요 표(세종 1~9, 행복 10~18, 각 36) 직접 확인.",
  "source": "https://www.sejongcc.com/course/intro",
  "checked": "2026-11-04"
 },
 {
  "name": "세현CC",
  "aliases": [
   "세현CC",
   "세현",
   "세현컨트리클럽",
   "Sehyeon CC"
  ],
  "region": "경기 용인",
  "nines": [
   {
    "label": "밸리",
    "pars": [
     4,
     4,
     4,
     3,
     4,
     3,
     5,
     4,
     5
    ]
   },
   {
    "label": "레이크",
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
  "notes": "공식 홈페이지 홀별 페이지(v1~v9, l1~l9) PAR 값 직접 확인. 용인 처인구 이동읍.",
  "source": "https://www.sehyeoncc.com/course/v1.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "센추리21CC",
  "aliases": [
   "센추리21",
   "센추리21CC",
   "센추리21컨트리클럽",
   "Century21 CC"
  ],
  "region": "강원 원주",
  "nines": [
   {
    "label": "파인",
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
    "label": "레이크",
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
    "label": "마운틴",
    "pars": [
     3,
     4,
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
    "label": "밸리",
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
    "label": "필드",
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
   }
  ],
  "verified": true,
  "notes": "원주 문막읍 궁말길 193. 공식 코스개요(5코스 45홀 PAR180) 및 코스별 홀 페이지(course_pine/lake/mountain/valley/field, 'Hole N PAR N HDCP') 45개 직접 확인. 파인·레이크=회원제, 밸리·필드·마운틴=대중제.",
  "source": "https://www.century21cc.co.kr/course_intro",
  "checked": "2026-11-04"
 },
 {
  "name": "센테리움CC",
  "aliases": [
   "센트리움CC",
   "센트리움",
   "센테리움",
   "센테리움컨트리클럽",
   "Centerium CC"
  ],
  "region": "충북 충주",
  "nines": [
   {
    "label": "잉글랜드",
    "pars": [
     4,
     5,
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
    "label": "스코틀랜드",
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
   },
   {
    "label": "웨일즈",
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
   }
  ],
  "verified": true,
  "notes": "엑셀 '센트리움CC'는 표기 오류로 판단 — 공식명 센테리움CC(충주 노은면 솔고개로 750, centeriumcc.com). 공식 코스 페이지 england/scotland/wales.asp의 holeView1~9 순서별 'PAR HDCP' 표 27개 직접 확인(각 36).",
  "source": "https://www.centeriumcc.com/course/england.asp",
  "checked": "2026-11-04"
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
  "name": "소피아그린CC",
  "aliases": [
   "소피아그린",
   "소피아그린CC",
   "소피아그린컨트리클럽",
   "Sophia Green CC"
  ],
  "region": "경기 여주",
  "nines": [
   {
    "label": "세종",
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
    "label": "여강",
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
    "label": "황학",
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
  "notes": "여주 점동면 소피아그린길 84. 공식 사이트는 curl 자동접근 차단(410)이라 WebFetch(요약모델)로 코스소개 스코어카드 PAR행 확인(블루티 거리와 정합, 각 코스 1번홀 페이지 PAR4 일치). 두 번째 출처 블로그 코스공략도(홀명별 'PAR N') 원문 HTML 직접 확인 — 27홀 전부 일치.",
  "source": "https://www.sophiagreen.co.kr/swp/course",
  "checked": "2026-11-04"
 },
 {
  "name": "속리산CC",
  "aliases": [
   "클럽디속리산",
   "클럽디 속리산",
   "클럽디속리산CC",
   "아리솔CC",
   "아리솔 컨트리클럽",
   "속리산 컨트리클럽",
   "ClubD Songnisan",
   "Arisol Country Club"
  ],
  "region": "충북 보은군",
  "nines": [
   {
    "label": "이스트",
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
    "label": "웨스트",
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
  "notes": "엑셀 '클럽디속리산' = 보은군 탄부면 구 아리솔CC → 클럽디 속리산(2023) → 2024 라미드그룹 인수 후 현재 '속리산CC'(CLUB LONGE, 구 songnisancc.co.kr 리다이렉트). 이스트: 공식 코스소개 PAR 행 원문 + Hole19 IN(야디지 일치) 일치. 웨스트: 공식 표의 PAR 행이 이스트와 똑같이 복사된 오류(블루 400/445/130/420m 등과 모순)라 사용 불가 — Hole19 OUT·Golfify(Arisol OUT) 두 출처가 일치하고 공식 웨스트 블루 거리(400,445,130,420,345,370,200,485,400m)와 홀별로 정합해 채택.",
  "source": "https://www.clublonge.com/Club/songnisan/Course",
  "checked": "2026-11-04"
 },
 {
  "name": "솔라고CC",
  "aliases": [
   "솔라고",
   "솔라고CC",
   "솔라고컨트리클럽",
   "현대솔라고CC",
   "Sollago CC"
  ],
  "region": "충남 태안",
  "nines": [
   {
    "label": "솔 OUT",
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
    "label": "솔 IN",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "라고 OUT",
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
    "label": "라고 IN",
    "pars": [
     4,
     4,
     3,
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
  "notes": "태안읍 기업도시9길 176(일진레져). 공식 코스공략도 홀 페이지 36개(course/one=Sol-In 1~9·Sol-Out 1~9, two=Lago-In·Lago-Out, 'N HOLE PAR N') 원문 직접 확인, 각 36. 공식 사이트는 IN 코스를 먼저 표기하며 홀번호를 코스별 1~9로 매김. 옛 이름 현대솔라고CC.",
  "source": "http://www.sollago.co.kr/pagesite/course/one/hole01.asp",
  "checked": "2026-11-04"
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
  "name": "솔트베이GC",
  "aliases": [
   "솔프베이",
   "솔트베이",
   "솔트베이골프클럽",
   "솔트베이CC",
   "Saltbay GC"
  ],
  "region": "경기 시흥",
  "nines": [
   {
    "label": "OUT",
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
    "label": "IN",
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
   }
  ],
  "verified": true,
  "notes": "엑셀 '솔프베이'는 '솔트베이' 오타로 판단(ㅌ→ㅍ 한 글자 차이, '솔프베이' 이름 골프장은 검색되지 않음). 시흥 마유로 987 솔트베이GC 공식 코스소개 스코어카드(OUT/IN PAR·거리) 원문 직접 확인, 각 36.",
  "source": "https://www.saltbay.co.kr/Course/CourseInfo",
  "checked": "2026-11-04"
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
  "name": "순천부영CC",
  "aliases": [
   "순천부영",
   "순천부영CC",
   "순천부영컨트리클럽",
   "Suncheon Booyoung CC"
  ],
  "region": "전남 순천",
  "nines": [
   {
    "label": "우정",
    "pars": [
     5,
     4,
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
    "label": "사랑",
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
   }
  ],
  "verified": true,
  "notes": "순천 해룡면 신대로 188. 공식 코스소개 이미지 스코어카드(우정 1~9, 사랑 10~18, 각 36) 직접 판독, 우정 1번 홀 페이지(493m Par5)와 일치. 제주 부영CC(booyoungcc.co.kr, 원앙/사랑/우정 27홀)와 혼동 주의.",
  "source": "https://www.scbooyoungcc.co.kr/course/intro.asp",
  "checked": "2026-11-04"
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
  "name": "스카이뷰CC",
  "aliases": [
   "스카이뷰",
   "스카이뷰CC",
   "스카이뷰컨트리클럽",
   "스카이뷰GC",
   "Skyview CC"
  ],
  "region": "경남 함양",
  "nines": [
   {
    "label": "OUT",
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
   },
   {
    "label": "IN",
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
   }
  ],
  "verified": true,
  "notes": "함양 서상면 소로길 226. 공식 코스개요 스코어카드 표(1~18 PAR/거리) 직접 확인, 거리와 파 정합. 동명 골프장은 확인되지 않아 함양 스카이뷰CC로 판단.",
  "source": "https://www.skyviewcc.co.kr/Course/Intro.aspx",
  "checked": "2026-11-04"
 },
 {
  "name": "스타 컨트리클럽 (충주)",
  "aliases": [
   "스타",
   "스타CC",
   "스타컨트리클럽",
   "스타 컨트리클럽",
   "Star Country Club"
  ],
  "region": "충북 충주",
  "nines": [
   {
    "label": "레이크",
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
    "label": "힐",
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
  "notes": "엑셀 \"스타\" = 스타컨트리클럽(충주 앙성면 상대촌1길 198) 판단: 티픽 \"스타\" 슬러그가 스타CC(충주)로 연결되고 공식명도 일치. DB의 더스타휴(양평)와 별개. 공식 코스안내 레이크·힐 PAR 행 원문 직접 확인(각 36). 티픽은 같은 주소의 옛 상떼힐CC(구 장호원CC) 기록을 연결하나 명칭 변경 경위 미확인이라 aliases 미포함. 힐 8번 파3 C.P 246m로 긴 편.",
  "source": "https://www.starcc.net/View?ID=course01",
  "checked": "2026-11-04"
 },
 {
  "name": "스톤게이트CC",
  "aliases": [
   "스톤게이트",
   "스톤게이트CC",
   "스톤게이트컨트리클럽",
   "Stone Gate CC"
  ],
  "region": "부산 기장",
  "nines": [
   {
    "label": "스톤",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     3,
     4,
     5,
     4
    ]
   }
  ],
  "verified": false,
  "notes": "부산 기장군 일광읍 곡천길 317, 2018 개장 18홀 PAR72. 공식 사이트 스코어카드 이미지에는 거리만 있고 PAR 행이 없음. 스톤 코스는 BlueTees 홀별 PAR(1개 출처)이며 공식 거리(334/469/312/219/397/193/403/511/348m)와 정합하나 독립 2출처 아님 → false. 게이트 코스는 홀별 PAR 출처 미발견으로 제외 — 공식 거리(167/361/304/538/200/353/506/373/441m)상 3,4,4,5,3,4,5,4,4(=36)로 보이며 7번 파5는 국제신문 기사로 확인되나 나머지는 추정이라 미기재. Firecrawl 크레딧 소진으로 추가 탐색 제한. / 게이트 코스 미포함(스톤 9홀만)",
  "source": "https://pregame.blueteesgolf.com/asia/south-korea/busan-gwang'yeogsi/stone-stone-gate-country-club",
  "checked": "2026-11-04"
 },
 {
  "name": "스톤비치CC",
  "aliases": [
   "태안비치",
   "태안비치CC",
   "태안비치 컨트리클럽",
   "스톤비치",
   "스톤비치 골프앤리조트",
   "Taeanbeach Country Club",
   "Stone Beach CC"
  ],
  "region": "충남 태안군",
  "nines": [
   {
    "label": "OUT",
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
    "label": "IN",
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
  "notes": "엑셀 \"태안비치\"는 현재 스톤비치CC로 판단 — Golfify의 Taeanbeach CC와 티픽 스톤비치가 주소(태안군 근흥면)·전화(041-670-7000) 동일, 블로그 태그에도 \"태안비치 CC\" 병기. OUT=옛 리버(River)코스, IN=비치(Beach)코스. Golfify와 티픽 18홀 전부 일치, 2026 후기(hwny2k) 부분 확인. 공식 홈페이지(stonebeachcc.com)는 내부 API로만 코스정보를 불러와 원문 확인 안 함.",
  "source": "https://www.golfify.io/courses/taeanbeach-country-club-river-beach",
  "checked": "2026-11-04"
 },
 {
  "name": "스프링데일CC",
  "aliases": [
   "스프링데일",
   "스프링데일 골프&리조트",
   "스프링데일컨트리클럽",
   "Springdale CC"
  ],
  "region": "제주 서귀포",
  "nines": [
   {
    "label": "스프링",
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
    "label": "데일",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     4,
     4,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "\"스프링데일\" 명칭 골프장은 제주 서귀포 남원읍 스프링데일CC 1곳(공식 주소 확인). 공식 홀별 페이지 PAR 직접 판독, 티픽(아웃/인) 일치.",
  "source": "https://www.springdale.co.kr/html/course/course_02_01.asp (course_02_01~09 스프링, course_03_01~09 데일)",
  "checked": "2026-11-04"
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
  "name": "시티파크골프앤리조트",
  "aliases": [
   "여수시티파크",
   "여수시티파크CC",
   "시티파크CC",
   "여수 시티파크",
   "City Park Golf & Resort"
  ],
  "region": "전남 여수시",
  "nines": [
   {
    "label": "시티",
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
    "label": "파크",
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
   }
  ],
  "verified": false,
  "notes": "시티 9홀은 공식·Hole19 일치. 파크 8번홀: 공식 JS par_list에는 4로 되어 있으나 같은 홀 거리 528m(챔피언)이고 공략설명에 \"Long Hitter는 2-On이 가능\"이라 파5로 보이며, 8번홀 그린·티·벙커 수치가 1번홀과 동일하게 복사돼 있어 공식 데이터 입력오류로 판단. Hole19는 파5(IN 36, 총 72). 공식 원문과 상충하므로 verified=false.",
  "source": "http://www.citypark.co.kr/field/swp/course_city (홀별 데이터 /static/pc/js/custom/course.city.js, course.park.js)",
  "checked": "2026-11-04"
 },
 {
  "name": "신라CC",
  "aliases": [
   "여주신라",
   "여주신라CC",
   "신라컨트리클럽",
   "원더클럽 신라CC",
   "Shilla Country Club"
  ],
  "region": "경기 여주시",
  "nines": [
   {
    "label": "동",
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
    "label": "서",
    "pars": [
     5,
     4,
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
    "label": "남",
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
  "notes": "공식(원더클럽 onetheclub.com/shilla) 동·서·남 코스 페이지의 par_list 원문 직접 확인. Hole19 East-West 조합과 동·서 일치(남은 Hole19에 없음). 경주신라CC(천마·화랑)와 다른 곳(여주 북내면 신라그린길 84).",
  "source": "https://www.onetheclub.com/shilla/course_east (홀별 데이터 /static/pc/@company/shilla/js/course_east.js·course_west.js·course_south.js)",
  "checked": "2026-11-04"
 },
 {
  "name": "신안CC",
  "aliases": [
   "신안",
   "신안컨트리클럽",
   "Shinan CC",
   "Shinan Country Club"
  ],
  "region": "경기 안성",
  "nines": [
   {
    "label": "토마토",
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
   },
   {
    "label": "애플",
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
   },
   {
    "label": "오렌지",
    "pars": [
     4,
     5,
     4,
     3,
     4,
     4,
     4,
     5,
     3
    ]
   }
  ],
  "verified": true,
  "notes": "신안그룹 공식 코스소개 페이지 원문의 홀별 'n HOLE PAR p' 직접 판독(tomato/apple/orange-hole 블록 순서). golfingrecord의 'Shinan Country Club'(18홀) 데이터는 공식과 불일치하여 미사용.",
  "source": "https://www.shinangolf.com/club/course/shinancc",
  "checked": "2026-11-04"
 },
 {
  "name": "신원CC",
  "aliases": [
   "신원CC",
   "신원",
   "신원컨트리클럽",
   "Sinwon CC",
   "Shinwon CC"
  ],
  "region": "경기 용인",
  "nines": [
   {
    "label": "에벤에셀",
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
    "label": "데이비드",
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
    "label": "솔로몬",
    "pars": [
     4,
     4,
     3,
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
  "notes": "공식 홈페이지 코스페이지 스크립트의 par_list 직접 확인, 티픽골프와 3개 코스 모두 일치. golfingrecord는 솔로몬 5번을 파5(합37)로 표기했으나 공식은 파4(블루 324m).",
  "source": "https://www.swcc.co.kr/swp/course_solomon (course_david, course_ebenezer 동일; par_list는 /static/pc/js/custom/course_*.js)",
  "checked": "2026-11-04"
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
  "name": "썬밸리CC",
  "aliases": [
   "썬밸리",
   "썬밸리컨트리클럽",
   "음성 썬밸리",
   "Sun Valley CC"
  ],
  "region": "충북 음성",
  "nines": [
   {
    "label": "썬",
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
   },
   {
    "label": "밸리",
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
   }
  ],
  "verified": true,
  "notes": "썬밸리그룹 패밀리 중 접두어 없는 \"썬밸리cc\"(충북 음성 삼성면, 18홀 파72)로 판단 — 동원썬밸리(횡성)·설악썬밸리(고성)·여주썬밸리와 별개. 공식 코스안내 스코어표(par 행) 직접 판독. 티픽 \"썬밸리\" 페이지는 횡성(동원썬밸리)으로 표기되어 있어 혼동 주의.",
  "source": "https://www.sunvalley.co.kr/iljuk/golf/course_intro",
  "checked": "2026-11-04"
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
  "name": "아난티 남해",
  "aliases": [
   "아난티남해",
   "아난티 남해CC",
   "아난티남해CC",
   "남해 아난티",
   "힐튼남해",
   "힐튼 남해 골프&스파 리조트",
   "Ananti Namhae"
  ],
  "region": "경남 남해",
  "nines": [
   {
    "label": "OUT",
    "pars": [
     4,
     5,
     4,
     3,
     5,
     4,
     3,
     4,
     5
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
     4,
     3,
     5,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스소개 원문 홀별 PAR·HDCP 직접 판독. 파73(OUT 37, IN 36) — 블로그(poou0070 '아웃 37 인 36 합계 73', mhee07 홀별)와 일치. 일부 소개글의 '파72'는 오기. 14번은 494yd 파4(HDCP 1).",
  "source": "https://ananti.kr/ko/namhae/golf-course",
  "checked": "2026-11-04"
 },
 {
  "name": "아난티 클럽 서울",
  "aliases": [
   "아난티",
   "아난티클럽서울",
   "아난티 서울",
   "아난티CC",
   "Ananti Club Seoul"
  ],
  "region": "경기 가평",
  "nines": [
   {
    "label": "자작나무",
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
    "label": "느티나무",
    "pars": [
     4,
     5,
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
    "label": "잣나무",
    "pars": [
     5,
     3,
     4,
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
  "notes": "엑셀 '아난티'는 아난티남해와 별도 항목이므로 아난티 계열 유일한 다른 골프장인 아난티 클럽 서울(가평 설악면, 27홀)로 판단. 공식 코스소개 원문 'HOLE n PAR p' 직접 판독. golfingrecord는 자작나무·잣나무 일치, 느티나무 2번만 파4로 표기(공식은 파5, 468yd).",
  "source": "https://ananti.kr/ko/chord/golf-course",
  "checked": "2026-11-04"
 },
 {
  "name": "아난티 클럽 제주",
  "aliases": [
   "세인트포",
   "세인트포CC",
   "세인트포 골프앤리조트",
   "아난티제주",
   "아난티제주CC",
   "아난티 제주 골프클럽",
   "Ananti Club Jeju",
   "St.Four CC"
  ],
  "region": "제주 제주시",
  "nines": [
   {
    "label": "김녕 OUT",
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
    "label": "김녕 IN",
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
    "label": "한라 OUT",
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
    "label": "한라 IN",
    "pars": [
     5,
     4,
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
  "notes": "엑셀 '세인트포'=제주 구좌읍 김녕리 세인트포CC. 한라그룹→아난티 인수 후 '아난티 클럽 제주'로 개명(딜사이트 보도). 아난티 공식 홈페이지 김녕코스(JJ0105, 18홀 7,503YD)·한라코스(JJ0106, 18홀 7,466YD) 홀별 HOLE/PAR 원문 직접 확인, 각 파72. 옛 세인트포 시절 코스명(세인트포/세인트프레드, 대중제 시에로/보스코 18홀 — 2023.2 공사 휴장)은 현행 코스와의 대응 미확인",
  "source": "https://ananti.kr/ko/jeju/JJ0105",
  "checked": "2026-11-04"
 },
 {
  "name": "아덴힐CC",
  "aliases": [
   "아덴힐",
   "아덴힐 골프클럽",
   "아덴힐 리조트&골프클럽",
   "ArdenHill G.C"
  ],
  "region": "제주 제주시",
  "nines": [
   {
    "label": "왕이메",
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
    "label": "새별",
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
   }
  ],
  "verified": true,
  "notes": "\"아덴힐\"은 제주 아덴힐 G.C(18홀 파72, 왕이메·새별 코스)로 판단(티픽 제주 제주시). 공식 코스개요 스코어표 Par 행 직접 판독.",
  "source": "https://ardenhill.co.kr/swp/course",
  "checked": "2026-11-04"
 },
 {
  "name": "아델스코트CC",
  "aliases": [
   "아델스코트",
   "아델스코트컨트리클럽",
   "Adelscott CC"
  ],
  "region": "경남 합천",
  "nines": [
   {
    "label": "마운틴",
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
    "label": "힐",
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
    "label": "레이크",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지(adelscott.co.kr) 코스 페이지는 공사중 이미지·404로 표 없음. golfingrecord(4개 티)와 티픽골프 3개 코스 전부 일치, 27홀 파108(블로그). 힐은 2026 블로그(cyarooobi, jar704) 홀별과 일치, 마운틴 1~4번·레이크 1/2/3/6/8/9번 블로그 일치(일부 블로그 홀번호 오기 있음).",
  "source": "https://www.golfingrecord.com/golf-scorecard/eff2b794-d86b-400b-ac13-55ee4e0e9bba",
  "checked": "2026-11-04"
 },
 {
  "name": "아리지CC",
  "aliases": [
   "아리지",
   "아리지컨트리클럽",
   "Ariji CC"
  ],
  "region": "경기 여주",
  "nines": [
   {
    "label": "햇님",
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
    "label": "달님",
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
    "label": "별님",
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
   }
  ],
  "verified": true,
  "notes": "공식 ariji.co.kr은 SPA로 홀별 par 표기 없음(코스 스크립트의 티별 거리만: 햇님1 524m·3 166m·9 478m 등 티픽 파와 정합). 티픽 스코어카드와 2025~26 블로그 홀별(달님·별님 전 홀, 햇님 2~9번) 일치.",
  "source": "https://teepickgolf.com/course/%EC%95%84%EB%A6%AC%EC%A7%80",
  "checked": "2026-11-04"
 },
 {
  "name": "아벨CC",
  "aliases": [
   "칼레이트",
   "칼레이트CC",
   "군위칼레이트",
   "군위 칼레이트CC",
   "칼레이트 컨트리클럽",
   "아벨 컨트리클럽",
   "Callaite Country Club"
  ],
  "region": "대구 군위군",
  "nines": [
   {
    "label": "OUT",
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
    "label": "IN",
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
  "verified": false,
  "notes": "엑셀 '칼레이트' = 대구 군위군 소보면 칼레이트CC(2022 개장, 루비·사파이어 코스 18홀). 2026년 회생절차로 인수, 카카오골프·골프존은 '아벨CC(구.칼레이트)'로 표기. 공식 홈페이지(callaitecc.com) 접속 불가, 골프존·카카오골프는 JS/차단으로 원문 확인 불가. Hole19 18홀 카드 단일 출처이며 OUT/IN이 루비/사파이어 중 어느 코스인지 미확인.",
  "source": "https://www.hole19golf.com/courses/callaite-country-club",
  "checked": "2026-11-04"
 },
 {
  "name": "아산CC",
  "aliases": [
   "나인스타",
   "나인스타CC",
   "나인스타 CC",
   "아산컨트리클럽",
   "하늘빛골프클럽",
   "하늘빛CC",
   "Asan CC",
   "Ninestar CC"
  ],
  "region": "충남 아산시 음봉면",
  "nines": [
   {
    "label": "9홀",
    "pars": [
     4,
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
  "notes": "9홀 파3형 숏코스(합 29). 라운드 후기 2건(2021·2022)이 1·6번 파4, 나머지 파3로 일치. 공식 홈페이지(asancc.com)는 홀별 정보가 이미지라 표 원문 미확인. 현재 명칭 아산CC(구 나인스타CC, 구 하늘빛골프클럽), 음봉로 52-38. 18홀은 9홀 2회.",
  "source": "https://m.blog.naver.com/bandaid22/222726991786",
  "checked": "2026-11-04"
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
  "name": "아시아드컨트리클럽",
  "aliases": [
   "아시아드",
   "아시아드CC",
   "아시아드컨트리클럽",
   "Asiad Country Club"
  ],
  "region": "부산 기장군",
  "nines": [
   {
    "label": "레이크",
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
    "label": "파인",
    "pars": [
     4,
     4,
     3,
     4,
     5,
     3,
     4,
     4,
     5
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
     3,
     4,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "golfingrecord 3개 코스 스코어카드 전체 + 공식 홈페이지 홀별 페이지(WebFetch) 10개 홀(레이크1·2·4·6, 파인3·4·5·6·9, 밸리4·9) 일치. 공식 코스개요 Lake 36PAR.",
  "source": "https://www.asiadcc.co.kr/html/course/course_02_01.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "아크로컨트리클럽",
  "aliases": [
   "아크로",
   "아크로CC",
   "아크로컨트리클럽",
   "Acro Country Club"
  ],
  "region": "전남 영암군",
  "nines": [
   {
    "label": "챌린지",
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
    "label": "스카이",
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
    "label": "마스터",
    "pars": [
     4,
     3,
     5,
     4,
     3,
     4,
     4,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 스코어카드 표 원문(curl) 직접 확인, golfingrecord 3개 코스 일치. 소재지 영암(화순 아님).",
  "source": "https://www.acrogolf.co.kr/html/course/course_02.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "안강레전드골프클럽",
  "aliases": [
   "안강레전드",
   "안강레전드GC",
   "안강레전드CC",
   "경주레전드골프클럽",
   "Angang Legend Golf Club"
  ],
  "region": "경북 경주시 안강읍",
  "nines": [
   {
    "label": "킹",
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
    "label": "퀸",
    "pars": [
     4,
     5,
     3,
     4,
     3,
     4,
     5,
     4,
     4
    ]
   }
  ],
  "verified": false,
  "notes": "물리적 9홀을 2-way 2-green(리버시블)으로 양방향 플레이해 킹/퀸 코스로 18홀 운영(2009 개장 기사). 킹은 golfingrecord+Hole19 일치(야드도 동일), 퀸은 golfingrecord 단독(킹의 정확한 역순이라 양방향 구조와 정합). 공식 홈페이지(legendgolf.co.kr)는 403/응답없음으로 미확인.",
  "source": "https://www.golfingrecord.com/golf-scorecard/01bb2b6f-6cda-44a2-873b-be4f76b5aad5",
  "checked": "2026-11-04"
 },
 {
  "name": "안동레이크골프클럽",
  "aliases": [
   "안동레이크",
   "안동레이크CC",
   "안동레이크GC",
   "Andong Lake Golf Club"
  ],
  "region": "경북 안동시",
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
     3,
     5,
     4
    ]
   },
   {
    "label": "IN",
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
   }
  ],
  "verified": false,
  "notes": "경북문화관광공사 운영. 공식 사이트(golf.gtc.co.kr)는 접속 차단 메시지로 미확인. Hole19 스코어카드(back 티 야드 포함) 단독 출처, 두 번째 출처 못 찾음. 코스명(9홀별 명칭) 미확인이라 OUT/IN.",
  "source": "https://www.hole19golf.com/courses/andong-lake-golf-club",
  "checked": "2026-11-04"
 },
 {
  "name": "안동리버힐컨트리클럽",
  "aliases": [
   "안동리버힐",
   "안동리버힐CC",
   "안동리버힐컨트리클럽",
   "RiverHill Country Club"
  ],
  "region": "경북 안동시 풍천면",
  "nines": [
   {
    "label": "OUT",
    "pars": [
     4,
     3,
     5,
     4,
     5,
     3,
     4,
     4,
     4
    ]
   },
   {
    "label": "IN",
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
   }
  ],
  "verified": true,
  "notes": "공식 홀별 페이지 18개 curl 직접 확인(아웃/인 코스), Hole19 일치(블랙 m 동일). 공식 12번 홀 거리표에 PAR 4 오기가 있으나 홀 제목·설명은 파3(184m)이라 3 채택. 주소 풍천면 풍일로 1572 — 예약사이트(kimcaddie) 슬러그상 옛 탑블리스CC 자리로 보이나 개명 여부는 단정 못함.",
  "source": "https://www.xn--2q1bm4ioscnwnx4w.com/html/course/course_02_01_01.asp",
  "checked": "2026-11-04"
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
  "name": "안양컨트리클럽",
  "aliases": [
   "안양CC",
   "안양컨트리클럽",
   "안양베네스트골프클럽",
   "안양베네스트GC",
   "Anyang Country Club"
  ],
  "region": "경기 군포시",
  "nines": [
   {
    "label": "OUT",
    "pars": [
     4,
     4,
     4,
     3,
     4,
     5,
     4,
     3,
     5
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
     4,
     5,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지(benestgolf.com)는 봇차단으로 미확인. kimigolf 게재 실물 스코어카드 이미지(2015~2017 라운드) + golfingrecord 스코어카드 일치(파72).",
  "source": "https://www.kimigolf.com/Korea/Anyang/scorecard.jpg",
  "checked": "2026-11-04"
 },
 {
  "name": "알펜시아 700 골프클럽",
  "aliases": [
   "알펜시아700",
   "알펜시아700GC",
   "알펜시아 700GC",
   "Alpensia 700 Golf Club"
  ],
  "region": "강원 평창군",
  "nines": [
   {
    "label": "알프스",
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
   },
   {
    "label": "아시아",
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
   }
  ],
  "verified": true,
  "notes": "공식 홀별 페이지 18개 curl 직접 확인(알프스 1~9, 아시아 10~18), golfingrecord 일치. 파72.",
  "source": "https://www.alpensia.com/golf/gc700/course-alps-hole1.do",
  "checked": "2026-11-04"
 },
 {
  "name": "알펜시아 트룬 컨트리클럽",
  "aliases": [
   "알펜시아",
   "알펜시아CC",
   "알펜시아 트룬CC",
   "알펜시아트룬CC",
   "트룬CC",
   "Alpensia Troon Golf & Country Club"
  ],
  "region": "강원 평창군",
  "nines": [
   {
    "label": "포레스트",
    "pars": [
     4,
     3,
     4,
     4,
     5,
     3,
     5,
     5,
     4
    ]
   },
   {
    "label": "레이크",
    "pars": [
     4,
     3,
     5,
     4,
     3,
     4,
     5,
     3,
     5
    ]
   },
   {
    "label": "메도우",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     4,
     3,
     5,
     4
    ]
   }
  ],
  "verified": false,
  "notes": "공식 홀별 페이지 27개 curl 직접 확인. 단 포레스트 8번: 공식은 Par 5(499yds/457m, 제원표도 5) → 포레스트 합 37, golfpass 스코어카드는 Par 4(합 36)로 상충. 공식값 채택. 레이크는 golfpass와 일치. 메도우는 단일 출처(공식). 엑셀 '알펜시아' = 회원제 27홀 트룬CC로 판단(알펜시아700과 별개).",
  "source": "https://www.alpensia.com/golf/trooncc/course-forest-hole1.do",
  "checked": "2026-11-04"
 },
 {
  "name": "양산동원로얄컨트리클럽",
  "aliases": [
   "양산동원로얄",
   "양산동원로얄CC",
   "동원로얄CC 양산",
   "Yangsan Dongwon Royal Country Club"
  ],
  "region": "경남 양산시 어곡동",
  "nines": [
   {
    "label": "비스타",
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
    "label": "듀크",
    "pars": [
     4,
     4,
     3,
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
  "notes": "공식 코스소개 스코어카드 표(VISTA OUT / DUKE IN) 원문 직접 확인, Hole19 일치(블랙 6,640). 통영·기장 동원로얄과 별개(2018 개장, 7,262야드).",
  "source": "https://www.dongwonroyalcc.co.kr/pagesite/course/intro.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "양주컨트리클럽",
  "aliases": [
   "양주CC",
   "양주컨트리클럽",
   "Yangju Country Club"
  ],
  "region": "경기 남양주시 화도읍",
  "nines": [
   {
    "label": "서",
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
    "label": "동",
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
  "notes": "공식 홈페이지 홀별 안내 이미지 18장(Par·HDCP·야드) 직접 판독. 서코스=OUT, 동코스=IN. 이름은 양주지만 소재지는 남양주 화도읍(북한강로 1525-52).",
  "source": "https://www.yangjucc.co.kr/course/one/hole01.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "양평TPC골프클럽",
  "aliases": [
   "양평TPC",
   "양평TPC GC",
   "양평TPC골프클럽",
   "TPC골프클럽",
   "Yangpyeong TPC Golf Club"
  ],
  "region": "경기 양평군 지평면",
  "nines": [
   {
    "label": "루나",
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
    "label": "솔라",
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
    "label": "스텔라",
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
  "notes": "옛 도메인 tpcgolf.co.kr → clublonge.com 리다이렉트, 공식 코스소개 스코어카드 표(LUNAR/SOLAR/STELLA) 원문 직접 확인. 총 27홀 Par 108.",
  "source": "https://www.clublonge.com/Club/yangpyeong/Course",
  "checked": "2026-11-04"
 },
 {
  "name": "어등산컨트리클럽",
  "aliases": [
   "어등산컨트리클럽",
   "어등산CC",
   "어등산 컨트리클럽",
   "Eodeungsan Country Club"
  ],
  "region": "광주 광산구",
  "nines": [
   {
    "label": "송정",
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
    "label": "어등",
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
    "label": "하남",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스소개(송정/어등/하남 각 9홀 PAR·HDCP)와 Golfify 스코어카드 3개 nine 모두 일치.",
  "source": "https://www.eodeungsancc.com/course-introduction (공식 SPA, 코스별 청크 SjCourse/EdCourse/HnCourse JS에 홀별 PAR·HDCP)",
  "checked": "2026-11-04"
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
  "name": "에딘버러컨트리클럽",
  "aliases": [
   "에딘버러",
   "에딘버러CC",
   "에딘버러 컨트리클럽",
   "금산 에딘버러",
   "Edinburgh Country Club"
  ],
  "region": "충남 금산군",
  "nines": [
   {
    "label": "밸리",
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
    "label": "마운틴",
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
  "notes": "공식 홈페이지 홀별 코스안내 원문 직접 확인(밸리·마운틴 각 9홀). 마운틴 홀 페이지 템플릿에 'valley Course'로 오기돼 있으나 거리(m)가 달라 마운틴 코스 데이터로 판단. 엑셀의 '에딘버러'는 별도 항목 '오창 에딘버러'와 구분되는 충남 금산 진산면 에딘버러CC(1998 개장)로 선택.",
  "source": "https://www.edinburgh.co.kr/Course/Course1 (홀별 iframe /Content/web/html/v_h1~9.html, m_h1~9.html)",
  "checked": "2026-11-04"
 },
 {
  "name": "에머슨 진천",
  "aliases": [
   "진천에머슨",
   "진천에머슨CC",
   "에머슨진천",
   "에머슨골프클럽",
   "아난티중앙",
   "아난티중앙GC",
   "아난티 중앙CC",
   "Emerson Golf Club",
   "Ananti Joongang Golf Club",
   "Jungang Country Clubs"
  ],
  "region": "충북 진천군",
  "nines": [
   {
    "label": "레이크",
    "pars": [
     5,
     3,
     5,
     4,
     3,
     4,
     4,
     4,
     4
    ]
   },
   {
    "label": "스카이",
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
    "label": "마운틴",
    "pars": [
     4,
     5,
     3,
     4,
     3,
     5,
     4,
     4,
     3
    ]
   }
  ],
  "verified": false,
  "notes": "진천군 백곡면 배티로 818-105, 27홀/107파. 1992 중앙CC→2011 에머슨골프클럽→아난티중앙GC→현 '에머슨 진천'(김캐디 2025 표기). 공식 홈페이지(emersongolfclub.co.kr) 불통. 마운틴: Golfify·GolfPass 일치(합35). 스카이: Golfify 단일(GolfPass 스카이 페이지는 마운틴 값 중복 오류). 레이크: Golfify 5,3,5,4,3,4,4,4,4 vs GolfPass 5,3,5,4,3,4,4,3,5(8번 파3·9번 파5, 거리도 상이) 상충 — Golfify 채택(3개 코스 합 107 일치), 현장 확인 필요.",
  "source": "https://www.golfify.io/courses/jungang-country-clubs-sky",
  "checked": "2026-11-04"
 },
 {
  "name": "에버리스골프리조트",
  "aliases": [
   "에버리스",
   "에버리스CC",
   "에버리스 골프리조트",
   "Everis Golf Resort"
  ],
  "region": "제주 제주시",
  "nines": [
   {
    "label": "새별",
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
    "label": "레이크",
    "pars": [
     4,
     3,
     4,
     4,
     5,
     5,
     3,
     4,
     4
    ]
   },
   {
    "label": "파인",
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
   }
  ],
  "verified": true,
  "notes": "공식(신안그룹 shinangolf.com) 코스페이지의 홀별 가이드와 하단 스코어카드 표 원문 직접 확인, 두 곳 일치. everis.co.kr은 shinangolf.com으로 리다이렉트.",
  "source": "https://www.shinangolf.com/club/course/everis",
  "checked": "2026-11-04"
 },
 {
  "name": "에버힐GC",
  "aliases": [
   "에버힐",
   "에버힐골프클럽",
   "에버힐 GOLF CLUB",
   "청원GC",
   "Ever Hill Golf Club"
  ],
  "region": "충북 청주시",
  "nines": [
   {
    "label": "OUT",
    "pars": [
     3,
     3,
     3,
     3,
     3,
     3,
     3,
     3,
     3
    ],
    "short": true
   },
   {
    "label": "IN",
    "pars": [
     3,
     3,
     3,
     3,
     3,
     3,
     3,
     4,
     4
    ],
    "short": true
   }
  ],
  "verified": false,
  "notes": "청주 현도면 파3 18홀 워킹(숏) 골프장, 2020년 청원GC에서 에버힐GC로 변경. 공식 홈페이지는 \"파3 18홀, 홀거리 80~350Yard\"만 표기하고 홀별 파 미공개. 홀별 파는 Hole19 단일 출처(1~16번 파3, 17·18번 파4, 합계 56; 거리 35~210m)인데 공식 홀거리 80~350yd와 맞지 않아 데이터 시점·정확성 불확실. 공식 표기대로라면 18홀 전부 파3(54)일 가능성도 있음.",
  "source": "https://www.hole19golf.com/courses/ever-hill-golf-club",
  "checked": "2026-11-04"
 },
 {
  "name": "에이원컨트리클럽",
  "aliases": [
   "에이원",
   "에이원CC",
   "에이원 컨트리클럽",
   "A-One Country Club"
  ],
  "region": "경남 양산시",
  "nines": [
   {
    "label": "동",
    "pars": [
     4,
     3,
     4,
     4,
     5,
     4,
     5,
     4,
     3
    ]
   },
   {
    "label": "남",
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
    "label": "서",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 스코어카드 표(동/남/서 탭) 원문 직접 확인. KPGA선수권은 파71로 세팅해 개최(대회 세팅).",
  "source": "https://www.a-onecc.co.kr/course_score.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "엘리시안강촌CC",
  "aliases": [
   "엘리시안강촌",
   "엘리시안 강촌",
   "엘리시안강촌컨트리클럽",
   "Elysian Gangchon Country Club"
  ],
  "region": "강원 춘천시",
  "nines": [
   {
    "label": "밸리",
    "pars": [
     4,
     3,
     5,
     4,
     4,
     5,
     3,
     4,
     4
    ]
   },
   {
    "label": "레이크",
    "pars": [
     4,
     5,
     3,
     4,
     3,
     5,
     3,
     5,
     4
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
  "notes": "공식 홈페이지 코스소개(VALLEY/LAKE/HILL 각 1~9 HOLE PAR) 원문 직접 확인. 페이지 내 \"27홀 108파\" 표기와 합계 일치.",
  "source": "https://www.elysian.co.kr/about-gangchon/golf (공식 SPA, chunks/Golf-7d8cdc29.js에 홀별 PAR 하드코딩)",
  "checked": "2026-11-04"
 },
 {
  "name": "엘리시안제주CC",
  "aliases": [
   "엘리시안-제주",
   "엘리시안제주",
   "엘리시안 제주",
   "엘리시안제주컨트리클럽",
   "Elysian Jeju Country Club"
  ],
  "region": "제주 제주시",
  "nines": [
   {
    "label": "레이크",
    "pars": [
     5,
     4,
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
    "label": "캄포",
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
    "label": "파인",
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
    "label": "오션",
    "pars": [
     4,
     3,
     4,
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
  "notes": "공식 홈페이지 코스소개(LAKE/CAMPO/PINE/OCEAN 각 9홀 PAR·HDCP) 원문 직접 확인. 36홀(회원제 레이크↔파인, 오션↔캄포 / 퍼블릭 18홀), 회원제·퍼블릭 각 72파 표기와 일치.",
  "source": "https://www.elysian.co.kr/about-jeju/golf (공식 SPA, chunks/Golf-3a2913d9.js에 홀별 PAR·HDCP 하드코딩)",
  "checked": "2026-11-04"
 },
 {
  "name": "영천오펠GC",
  "aliases": [
   "영천오펠",
   "영천오펠골프클럽",
   "오펠GC 영천",
   "O'phel Golf Club Yeongcheon"
  ],
  "region": "경북 영천시",
  "nines": [
   {
    "label": "가람",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     4,
     5,
     3,
     4
    ]
   },
   {
    "label": "누리",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     4,
     5,
     3,
     4
    ]
   },
   {
    "label": "마루",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스공략 홀별 페이지(Par·Hdcp·거리) 원문 직접 확인. 가람·누리는 파 배열이 같지만 HDCP·거리가 달라 별개 코스 데이터임을 확인. 군위오펠GC(별도 엑셀 항목)와 다른 곳(영천 고경면).",
  "source": "https://www.ophelgc.com/_YeongCheon/Course/CourseAttack_11.aspx (홀별 iframe /_YeongCheon/course/course_ka-01~09, nu-01~09, ma-01~09.html)",
  "checked": "2026-11-04"
 },
 {
  "name": "오너스 골프클럽 (춘천)",
  "aliases": [
   "오너스",
   "오너스CC",
   "오너스GC",
   "오너스골프클럽",
   "Owners Golf Club"
  ],
  "region": "강원 춘천",
  "nines": [
   {
    "label": "힐",
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
    "label": "레이크",
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
  "notes": "단독 \"오너스\" = 춘천 남산면 오너스골프클럽(2012 개장, 대중제 18홀) 판단: 티픽 \"오너스\" 슬러그가 오너스cc(강원 춘천)로 연결. DB의 벨라45 오너스클럽(횡성)·사우스케이프오너스(남해)와 다른 골프장. 공식 제원표 Par 행 원문 직접 확인, 티픽 OUT/IN과 일치. 힐=1~9, 레이크=10~18.",
  "source": "http://www.ownersgc.co.kr/html/course/course_01.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "오렌지듄스 영종GC",
  "aliases": [
   "오렌지 듄스 영종",
   "오렌지듄스 영종",
   "오렌지듄스영종GC",
   "오렌지듄스 영종 골프클럽",
   "영종 오렌지듄스",
   "Orange Dunes Yeongjong Golf Club"
  ],
  "region": "인천 중구",
  "nines": [
   {
    "label": "이스트",
    "pars": [
     4,
     4,
     3,
     5,
     3,
     4,
     5,
     4,
     4
    ]
   },
   {
    "label": "웨스트",
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
  "notes": "영종도(인천공항 인근) 18홀 대중제 이스트/웨스트. 공식 홈페이지 미확인. 2026년 독립 블로그 2건이 18홀 파 완전 일치, 3번째 블로그(2026.10) 파3 위치도 일치. 송도의 오렌지듄스(현 골프존카운티 송도, 이미 DB)와는 별개 골프장.",
  "source": "https://blog.naver.com/pedident/224422426712 (East 1~9·West 10~18 홀별 파 전부)",
  "checked": "2026-11-04"
 },
 {
  "name": "오션비치 골프&리조트",
  "aliases": [
   "오션비치CC",
   "오션비치",
   "오션비치 CC",
   "영덕 오션비치",
   "오션비치골프앤리조트",
   "Ocean Beach Golf & Resort",
   "Ocean View Country Club"
  ],
  "region": "경북 영덕",
  "nines": [
   {
    "label": "오션",
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
    "label": "밸리",
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
    "label": "비치",
    "pars": [
     4,
     3,
     4,
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
  "notes": "공식 홈페이지 코스제원 표 원문 직접 확인(각 36, 27홀). Hole19 Beach-Ocean, Golfify View(=밸리)/Ocean, GolfPass Valley와 일치. Golfify Beach(445434354)는 공식과 달라 배제(오류 데이터). 경북 영덕군 강구면.",
  "source": "http://oceanbeachcc.com/Course/Intro.asp (공식 코스제원 표: OCEAN 1~9, VALLEY 10~18, BEACH 19~27 홀별 Par·거리)",
  "checked": "2026-11-04"
 },
 {
  "name": "오션힐스영천CC",
  "aliases": [
   "오션힐스 영천",
   "오션힐스영천CC",
   "오션힐스 영천CC",
   "오션힐스영천 컨트리클럽",
   "Ocean Hills Yeongcheon Country Club"
  ],
  "region": "경북 영천",
  "nines": [
   {
    "label": "해",
    "pars": [
     5,
     4,
     3,
     5,
     4,
     3,
     4,
     4,
     4
    ]
   },
   {
    "label": "달",
    "pars": [
     5,
     3,
     4,
     4,
     3,
     5,
     5,
     4,
     4
    ]
   },
   {
    "label": "별",
    "pars": [
     5,
     4,
     4,
     4,
     3,
     4,
     4,
     3,
     5
    ]
   }
  ],
  "verified": false,
  "notes": "공식(oceanhills.com)은 SPA·API 로드라 미확인. 현재 코스명 해·달·별(구 Red/Green/Blue 추정: 해=GolfPass Red와 일치, 별=Hole19·GolfPass Blue와 일치). 해=GolfPass Red+2026 블로그 9홀 일치. 별=Hole19+GolfPass+블로그(1·3·5·9) 일치. 주의: 달 7번은 최근 블로그 3건(2025~2026)이 모두 PAR 5라 달 합 37 — Hole19 Green(구 데이터)은 7번 PAR 4(합 36)로 상이. 다수·최신 출처 채택. GolfPass Green은 Blue를 복제한 오류 데이터라 배제. / 달 7번 파5/파4 출처 불일치",
  "source": "https://www.hole19golf.com/courses/ocean-hills-yeong-cheon-country-club (Blue-Green 18홀)",
  "checked": "2026-11-04"
 },
 {
  "name": "오창에딘버러CC",
  "aliases": [
   "오창 에딘버러",
   "오창에딘버러CC",
   "오창 에딘버러CC",
   "오창에딘버러 컨트리클럽",
   "Ochang Edinburgh Country Club"
  ],
  "region": "충북 청주",
  "nines": [
   {
    "label": "9홀",
    "pars": [
     4,
     3,
     5,
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
  "notes": "공식 홈페이지 코스정보 표와 코스공략도 원문 직접 확인(9홀 파36). 청주 청원구 오창읍. 충남 금산의 에딘버러CC(이미 DB)와는 별개.",
  "source": "http://www.ochangedincc.com/Course/CourseInfo (공식 코스정보 표 Hole/Par/M/Y/HDCP)",
  "checked": "2026-11-04"
 },
 {
  "name": "오크밸리CC",
  "aliases": [
   "오크밸리",
   "오크밸리CC",
   "오크밸리 컨트리클럽",
   "오크밸리컨트리클럽",
   "HDC 오크밸리",
   "Oak Valley Country Club"
  ],
  "region": "강원 원주",
  "nines": [
   {
    "label": "오크",
    "pars": [
     4,
     5,
     4,
     5,
     3,
     4,
     3,
     4,
     4
    ]
   },
   {
    "label": "메이플",
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
    "label": "파인",
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
    "label": "체리",
    "pars": [
     4,
     3,
     4,
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
  "notes": "공식(ipark-golf.com/oakvalley/course)은 SPA라 홀 데이터가 내부 API로만 로드되어 미확인. 오크·메이플=Golfify와 Hole19(Oak-Maple 18홀) 일치, 파인·체리=Golfify와 GolfPass 일치(kimigolf 2005 리뷰의 파인4~8·체리10·11·17번 파도 일치). 36홀(오크+메이플, 파인+체리), 각 9홀 36.",
  "source": "https://www.golfify.io/courses/oak-valley-country-club-oak (oak/maple/pine/cherry 각 페이지)",
  "checked": "2026-11-04"
 },
 {
  "name": "오크힐스CC",
  "aliases": [
   "오크힐스",
   "오크힐스CC",
   "오크힐스 컨트리클럽",
   "오크힐스컨트리클럽",
   "Oak Hills Country Club"
  ],
  "region": "강원 원주",
  "nines": [
   {
    "label": "OUT",
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
    "label": "IN",
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
   }
  ],
  "verified": true,
  "notes": "오크밸리 단지 내 잭 니클라우스 설계 18홀. Hole19·Golfify·GolfPass 3개 출처 18홀 파 일치(공식 ipark-golf.com은 SPA·내부 API라 미확인). Golfify는 전반/후반을 Bridge/Hill로 표기.",
  "source": "https://www.hole19golf.com/courses/oak-hills-country-club",
  "checked": "2026-11-04"
 },
 {
  "name": "올데이 골프&리조트",
  "aliases": [
   "올데이",
   "올데이골프앤리조트",
   "올데이 골프앤리조트",
   "올데이골프&리조트",
   "ALLDAY GOLF&RESORT"
  ],
  "region": "충북 충주",
  "nines": [
   {
    "label": "레이크",
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
    "label": "마운틴",
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
    "label": "밸리",
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
   }
  ],
  "verified": true,
  "notes": "올데이골프그룹 5개장(임페리얼레이크·로얄포레·골프&리조트·옥스필드·청주떼제베) 중 이름이 그냥 '올데이'인 곳은 충주 앙성면 올데이 골프&리조트(27H)라 이를 채택(청주떼제베는 이미 DB, 로얄포레·임페리얼레이크는 별도 항목). 대안 후보: 올데이 옥스필드(횡성, OX 453445434/Field 443544345, 공식 course_ox.asp). 공식 스코어카드 표와 홀별 페이지 일치, Hole19 Lake-Mountain 일치. 참고: 밸리 6번은 블루 395m인데 PAR 5로 표기(표·홀별 페이지 모두 동일)—짧은 파5.",
  "source": "https://alldaygolf.co.kr/course/course_re.asp (공식 스코어카드 표 Lake/Mountain/Valley 홀별 PAR·거리)",
  "checked": "2026-11-04"
 },
 {
  "name": "올데이 로얄포레",
  "aliases": [
   "올데이 로얄포레",
   "로얄포레",
   "로얄포레CC",
   "로얄포레 컨트리클럽",
   "올데이로얄포레",
   "ALLDAY ROYAL FORET"
  ],
  "region": "충북 충주",
  "nines": [
   {
    "label": "로얄",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "포레",
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
  "notes": "충주 신니면. 공식 스코어카드 표 원문 직접 확인(각 36), 로얄 홀별 페이지 9개 일치. 포레 홀별 페이지 9번은 1번 내용이 복제된 페이지 오류(358m PAR4)라 표(496m PAR5) 채택. 독립 2차 출처는 못 찾음.",
  "source": "https://alldaygolf.co.kr/course/course_ro.asp (공식 스코어카드 표 Royal/Foret)",
  "checked": "2026-11-04"
 },
 {
  "name": "올데이 임페리얼레이크",
  "aliases": [
   "올데이 임페리얼레이크",
   "임페리얼레이크",
   "임페리얼레이크CC",
   "임페리얼 레이크",
   "올데이임페리얼레이크",
   "ALLDAY IMPERIAL LAKE"
  ],
  "region": "충북 충주",
  "nines": [
   {
    "label": "레이크",
    "pars": [
     4,
     3,
     4,
     5,
     4,
     5,
     4,
     3,
     4
    ]
   },
   {
    "label": "파인",
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
   }
  ],
  "verified": true,
  "notes": "충주 금가면. 공식 스코어카드 표 원문 직접 확인(각 36, 거리와 파 정합). 표의 게재 순서는 Pine→Lake이나 홀별 페이지(l1=LAKE 1번)는 레이크가 첫 코스. 공식 홀별 페이지(l2~, p1~)는 내용 미노출. 독립 2차 출처 없음.",
  "source": "https://alldaygolf.co.kr/course/course_im.asp (공식 스코어카드 표 Pine/Lake)",
  "checked": "2026-11-04"
 },
 {
  "name": "올데이 청주떼제베CC",
  "aliases": [
   "뗴제베",
   "떼제베",
   "떼제베CC",
   "떼제베 CC",
   "청주떼제베",
   "청주떼제베CC",
   "올데이떼제베",
   "TGV CC",
   "Cheongju TGV CC"
  ],
  "region": "충북 청주",
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
     3,
     4,
     4,
     5,
     3,
     4,
     4,
     5
    ]
   },
   {
    "label": "남",
    "pars": [
     4,
     4,
     3,
     4,
     5,
     4,
     3,
     5,
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
     4,
     3,
     4,
     5,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "엑셀 '뗴제베'는 '떼제베' 오타. 공식 홀별 페이지에 오류 2건: 동6을 PAR4(실제 441~478 거리, 블로그 2곳·파골프 기사 '파5의 6번홀'), 남9를 PAR5(실제 324~380 거리, 블로그 2곳 파4)로 표기 → 다수 독립 출처로 교정. storygolf 북 8·9 'PAR 3' 표기는 오기(공식·9manual·otaru 모두 파5). 서코스는 공식+storygolf 일치.",
  "source": "https://www.adtgv.co.kr/course/tgv1~36.asp (공식 홀별 'n hole TGV PAR n'; tgv1=동, tgv10=서, tgv19=남, tgv28=북)",
  "checked": "2026-11-04"
 },
 {
  "name": "용원GC",
  "aliases": [
   "용원",
   "용원GC",
   "용원CC",
   "용원골프클럽",
   "용원컨트리클럽",
   "Yongwon Golf Club"
  ],
  "region": "경남 창원",
  "nines": [
   {
    "label": "백로",
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
    "label": "무학",
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
    "label": "백구",
    "pars": [
     5,
     4,
     5,
     4,
     4,
     3,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "창원 진해구 가주로 133. 공식 표 원문 직접 확인(각 36, 27홀), Golfify 3개 코스 완전 일치. 진해신항CC·용원파크골프장과 별개.",
  "source": "https://www.ywcc.co.kr/course/intro (공식 전체코스안내 표 백로/무학/백구 Hole·PAR·HDCP·거리)",
  "checked": "2026-11-04"
 },
 {
  "name": "용인 컨트리클럽",
  "aliases": [
   "용인CC",
   "용인컨트리클럽",
   "용인 컨트리클럽",
   "Yong In Country Club"
  ],
  "region": "경기 용인(처인구 백암면)",
  "nines": [
   {
    "label": "용인",
    "pars": [
     4,
     4,
     4,
     4,
     5,
     3,
     4,
     3,
     5
    ]
   },
   {
    "label": "석천",
    "pars": [
     4,
     6,
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
  "notes": "공식 코스안내 표 원문 직접 확인: Out Course(용인) Par36, In Course(석천) Par37, 총 Par73. 석천 2번 파6(B/T 650·G/T 580). Hole19 여성 카드도 석천 2번 파6로 일치. GolfPass(파72, 2번 파5 580)·티픽/Golfify(파5, 전후반 순서 반대)는 구 데이터로 판단. 블루원 용인과 별개(백암면 황새울로 255, 031-332-3323).",
  "source": "http://www.yongincc.com/Course/CourseInfo.aspx",
  "checked": "2026-11-04"
 },
 {
  "name": "용평CC",
  "aliases": [
   "용평",
   "용평CC",
   "용평컨트리클럽",
   "용평 골프클럽",
   "모나용평 용평CC",
   "Yongpyong Country Club"
  ],
  "region": "강원 평창",
  "nines": [
   {
    "label": "산마루",
    "pars": [
     4,
     3,
     5,
     4,
     4,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "강나루",
    "pars": [
     5,
     3,
     4,
     3,
     4,
     4,
     4,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "모나용평 공식 홈페이지 용평CC 코스 페이지의 'Hole N PAR N' 원문 직접 확인(산마루·강나루 각 36). 같은 단지의 버치힐CC(이미 DB), 용평9(9홀 퍼블릭)와는 별개.",
  "source": "https://www.yongpyong.co.kr/kor/golf/course/yongpyongClub/ridge.do",
  "checked": "2026-11-04"
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
  "name": "월송리컨트리클럽",
  "aliases": [
   "월송리",
   "월송리CC",
   "월송리 컨트리클럽",
   "오크크릭GC",
   "Wolsongri Country Club"
  ],
  "region": "강원 원주",
  "nines": [
   {
    "label": "OUT",
    "pars": [
     5,
     4,
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
    "label": "IN",
    "pars": [
     4,
     5,
     3,
     4,
     4,
     4,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 사이트(ipark-golf.com)는 SPA라 원문 확인 불가. OUT은 Hole19·2026-09 홀별후기(mr_happykim)·2026-05 후기(godeange)·2025-10 후기(shwimlove) 일치. IN 13번: Hole19·2025년 후기는 파5였으나 2026-05 후기(godeange)가 \"전에는 파5였는데 파4로 변신\", 2026-09 홀별후기도 미들홀로 기술 → 현재 파4 채택, 총 파71(IN 35). 강원 원주시 지정면, HDC 오크밸리 계열 노캐디 대중제(옛 오크크릭 9홀을 2023년 18홀 증설). 문체부 등록명 월송리컨트리클럽.",
  "source": "https://m.blog.naver.com/PostView.naver?blogId=mr_happykim&logNo=224405667525",
  "checked": "2026-11-04"
 },
 {
  "name": "웨스트오션컨트리클럽",
  "aliases": [
   "웨스트오션",
   "웨스트오션CC",
   "웨스트오션 컨트리클럽",
   "West Ocean Country Club"
  ],
  "region": "전남 영광",
  "nines": [
   {
    "label": "밸리",
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
    "label": "오션",
    "pars": [
     5,
     4,
     4,
     3,
     4,
     3,
     5,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스개요 표(Valley V1~V9, Ocean O1~O9) 원문 직접 확인. 전남 영광군 백수읍.",
  "source": "https://www.westoceancc.co.kr/html/course/course01.asp",
  "checked": "2026-11-04"
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
  "name": "웰링턴컨트리클럽",
  "aliases": [
   "웰링턴",
   "웰링턴CC",
   "웰링턴 컨트리클럽",
   "Wellington Country Club"
  ],
  "region": "경기 이천",
  "nines": [
   {
    "label": "그리핀",
    "pars": [
     4,
     5,
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
    "label": "피닉스",
    "pars": [
     4,
     4,
     3,
     4,
     5,
     3,
     4,
     4,
     5
    ]
   },
   {
    "label": "와이번",
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
  "notes": "공식 홈페이지 홀별 페이지(griffin=one, phoenix=two, wyvern=three, hole01~09) 27개 원문 직접 확인, 코스개요의 각 9홀 Par 36과 일치. 경기 이천시 모가면, 효성중공업 운영.",
  "source": "https://www.wellingtoncc.co.kr/golf/golf.do",
  "checked": "2026-11-04"
 },
 {
  "name": "윈체스트 골프클럽",
  "aliases": [
   "윈체스트",
   "윈체스트GC",
   "윈체스트CC",
   "Winchest Golf Club"
  ],
  "region": "경기 안성",
  "nines": [
   {
    "label": "로맨틱",
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
    "label": "클래식",
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
  "notes": "공식 홈페이지 코스소개 표(Romantic=화가 홀, Classic=작곡가 홀, 각 Par 36) 및 홀별 페이지 18개 원문 직접 확인·일치. 클래식 1번(비발디)은 인코스 첫 홀로 안내됨. 경기 안성시 서운면.",
  "source": "http://www.winchestgc.co.kr/swp/course/course",
  "checked": "2026-11-04"
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
  "name": "은화삼컨트리클럽",
  "aliases": [
   "은화삼CC",
   "은화삼",
   "은화삼 컨트리클럽",
   "Eunhwasam Country Club"
  ],
  "region": "경기 용인",
  "nines": [
   {
    "label": "웨스트",
    "pars": [
     5,
     4,
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
    "label": "이스트",
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
  "notes": "공식 홈페이지 스코어카드 원문 직접 확인(WEST/EAST 코스). 경기 용인시 처인구.",
  "source": "https://www.ehscc.co.kr/Course/ScoreCard",
  "checked": "2026-11-04"
 },
 {
  "name": "의령리온 컨트리클럽",
  "aliases": [
   "의령리온",
   "의령리온CC",
   "의령리온GC",
   "리온CC",
   "Rieon Country Club"
  ],
  "region": "경남 의령",
  "nines": [
   {
    "label": "길정",
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
    "label": "리온",
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
  "verified": false,
  "notes": "공식 홈페이지(rieoncc.co.kr)는 AWS WAF 챌린지(202/403)로 접근 불가. 길정: Hole19(Gillian-Lion OUT)와 2019 블로그 길정코스 홀별 파 일치. 리온: Hole19(IN)만 전체 확인, 1번 파5는 2026 블로그 2건과 일치. 마운틴 코스 홀별 파는 찾지 못해 nines에서 제외(Hole19상 Lion-Mountain·Mountain-Gillian 모두 Par 72 → 마운틴 9홀 합 36, 7번 파3[홀인원 글]만 확인). 경남 의령군 칠곡면 자굴산로 101-33, 2026-06 카카오VX 위탁운영.",
  "source": "https://www.hole19golf.com/courses/rieon-country-club",
  "checked": "2026-11-04"
 },
 {
  "name": "이글몬트 컨트리클럽",
  "aliases": [
   "이글몬트",
   "이글몬트CC",
   "골프존카운티 이글몬트",
   "Eaglemont Country Club"
  ],
  "region": "경기 안성",
  "nines": [
   {
    "label": "이글",
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
    "label": "몬트",
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
   },
   {
    "label": "히든",
    "pars": [
     4,
     3,
     5,
     4,
     3,
     5,
     3,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "운영사 골프존카운티 공식 코스상세 페이지 원문(홀별 PAR·HDCP·거리, 이글/몬트/히든 탭) 직접 확인. 골프장소개의 27홀(108Par)과 합계 일치. 경기 안성시 보개면 보삼로 106. 일부 블로그의 \"용인 18홀 회원제\" 설명은 AI 생성 오류.",
  "source": "https://www.golfzoncounty.com/golfclub/courseDtl?golfclubSeq=64&courseSeq=51",
  "checked": "2026-11-04"
 },
 {
  "name": "이븐데일 골프앤리조트",
  "aliases": [
   "이븐데일",
   "이븐데일CC",
   "이븐데일GC",
   "Evendale Golf & Resort"
  ],
  "region": "충북 청주",
  "nines": [
   {
    "label": "이븐",
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
    "label": "데일",
    "pars": [
     4,
     4,
     5,
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
  "notes": "공식 홈페이지 코스소개 표(EVEN 1~9, DALE 10~18, 총 Par 72) 원문 직접 확인. 충북 청주시 상당구 미원면, 대중제.",
  "source": "http://www.evendale.co.kr/course/courseInfo.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "이스턴컨트리클럽",
  "aliases": [
   "이스턴컨트리",
   "이스턴CC",
   "이스턴",
   "이스턴 컨트리클럽",
   "Eastern Country Club"
  ],
  "region": "경북 포항",
  "nines": [
   {
    "label": "9홀",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     5,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스제원 표 원문 직접 확인(PAR 4 4 3 5 4 5 4 3 4). 단일 9홀(WHITE_OUT/WHITE_IN 티로 2회전). 경북 포항시 북구 청하면.",
  "source": "http://www.easterncc.co.kr/course/intro.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "이스트밸리컨트리클럽",
  "aliases": [
   "이스트밸리",
   "이스트밸리CC",
   "이스트밸리 컨트리클럽",
   "East Valley Country Club"
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
    "label": "남",
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
    "label": "서",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 홀별 공략 페이지(동=one, 남=two, 서=three, hole01~09) 27개 원문 직접 확인. 경기 광주시 곤지암읍. 남코스 2번 파5는 한경 기사와도 일치.",
  "source": "https://www.eastvalley.co.kr/pagesite/course/one/hole01.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "이지스카이GC",
  "aliases": [
   "이지스카이",
   "이지스카이CC",
   "이지스카이GC",
   "이지스카이컨트리클럽",
   "Easy Sky Country Club"
  ],
  "region": "경북 군위",
  "nines": [
   {
    "label": "이지",
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
    "label": "스카이",
    "pars": [
     4,
     4,
     3,
     4,
     3,
     5,
     4,
     5,
     4
    ]
   }
  ],
  "verified": false,
  "notes": "2022년 개장, 2025.1 카카오VX 위탁운영으로 이지스카이CC→이지스카이GC 개명(대구 군위 소재). 공식 홈페이지(easyskycc.co.kr)는 봇 차단(202/403)으로 원문 확인 불가. 18홀 전체는 Hole19 스코어카드(OUT/IN, 코스명 없음) 1개 출처. 이지/스카이 매칭과 일부 홀은 골프저널 기사 2건(2022.8·2024.6: 이지 2·6번 파5, 7번 파3, 9번 파4 / 스카이 3번 파3, 7번 파4, 8번 파5)과 골프존 코스소개 요약(이지 1~9 동일, 스카이 2·7번 파4·8번 파5)으로 교차 일치하나, 스카이 1·4·5·6·9번 등은 독립 두 번째 출처 미확인이라 false. 공식 18H 파72와 합계는 일치.",
  "source": "https://www.hole19golf.com/courses/easy-sky-country-club",
  "checked": "2026-11-04"
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
  "name": "인서울27골프클럽",
  "aliases": [
   "인서울26",
   "인서울27",
   "인서울27GC",
   "인서울27골프클럽",
   "Inseoul27 Golf Club"
  ],
  "region": "서울 강서구",
  "nines": [
   {
    "label": "이스트",
    "pars": [
     4,
     5,
     4,
     4,
     4,
     3,
     4,
     3,
     5
    ]
   },
   {
    "label": "웨스트",
    "pars": [
     4,
     5,
     3,
     4,
     3,
     4,
     4,
     5,
     4
    ]
   },
   {
    "label": "사우스",
    "pars": [
     4,
     3,
     4,
     3,
     5,
     5,
     4,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "엑셀 표기 \"인서울26\"은 존재하지 않는 이름으로, 서울 강서구 오쇠동의 서울시 유일 대중골프장 인서울27골프클럽(27홀)의 오기로 판단. 공식 홈페이지 홀별 상세(m21/m22/m23_view.php?hole=1~9)의 PAR 표 원문 직접 확인.",
  "source": "https://inseoul27.co.kr/m21.php",
  "checked": "2026-11-04"
 },
 {
  "name": "인천국제컨트리클럽",
  "aliases": [
   "인천국제CC",
   "인천국제",
   "Incheon International Country Club"
  ],
  "region": "인천 서구",
  "nines": [
   {
    "label": "OUT",
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
   },
   {
    "label": "IN",
    "pars": [
     4,
     4,
     4,
     3,
     5,
     4,
     3,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스제원 표 원문 확인(인천 서구 도요지로 37). GolfPass·GolfingRecord 동일.",
  "source": "https://www.incheoncc.com:1436/pagesite/course/intro.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "인천그랜드컨트리클럽",
  "aliases": [
   "인천그랜드CC",
   "인천그랜드",
   "Incheon Grand Country Club"
  ],
  "region": "인천 서구",
  "nines": [
   {
    "label": "OUT",
    "pars": [
     5,
     4,
     4,
     3,
     4,
     4,
     5,
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
     3,
     4,
     3,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스제원 표 원문 확인(OUT 37·IN 35, 합 72). GolfPass 동일.",
  "source": "https://www.incheongrand.cc/pagesite/course/intro.asp",
  "checked": "2026-11-04"
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
  "name": "일라이트골프앤리조트",
  "aliases": [
   "일라이트",
   "일라이트CC",
   "일라이트컨트리클럽",
   "Illite Golf & Resort"
  ],
  "region": "충북 영동",
  "nines": [
   {
    "label": "G",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     4,
     3,
     4,
     5
    ]
   },
   {
    "label": "S",
    "pars": [
     4,
     5,
     3,
     4,
     5,
     4,
     5,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스 거리표 원문 직접 확인(G 1~9번 소계 36, S 10~18번 소계 37, 합계 73 — 파73 정상). 블로그 후기(G 3번·S 12번 파3)와도 일치.",
  "source": "https://illitegolfnresort.co.kr/golf/swp/course",
  "checked": "2026-11-04"
 },
 {
  "name": "일레븐컨트리클럽",
  "aliases": [
   "일레븐",
   "일레븐CC",
   "Eleven CC"
  ],
  "region": "충북 충주",
  "nines": [
   {
    "label": "마운틴",
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
    "label": "파크",
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
  "notes": "충주 앙성면 일레븐CC. 공식 홈페이지 마운틴(1~9)·파크(10~18) 홀별 Par 원문 직접 확인.",
  "source": "http://www.elevencc.co.kr/swp/out_course",
  "checked": "2026-11-04"
 },
 {
  "name": "자유로컨트리클럽",
  "aliases": [
   "자유로CC",
   "자유로",
   "Jayuro CC"
  ],
  "region": "경기 연천",
  "nines": [
   {
    "label": "대한",
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
    "label": "민국",
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
    "label": "통일",
    "pars": [
     5,
     4,
     3,
     5,
     4,
     4,
     3,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "연천군 백학면 자유로CC(27홀). 공식 홈페이지 코스소개 PAR·LENGTH 표 원문 직접 확인(각 36, 홀 길이와 파 정합). 여주 신세계 자유CC와 다른 곳.",
  "source": "https://jayurocc.com/View?ID=course01",
  "checked": "2026-11-04"
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
  "name": "잭니클라우스 골프클럽 코리아",
  "aliases": [
   "잭니클라우스",
   "잭니클라우스GC",
   "잭니클라우스골프클럽",
   "Jack Nicklaus Golf Club Korea"
  ],
  "region": "인천 연수구",
  "nines": [
   {
    "label": "OUT",
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
   },
   {
    "label": "IN",
    "pars": [
     4,
     4,
     4,
     3,
     4,
     5,
     4,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "인천 송도 잭니클라우스GC 코리아. 공식 홈페이지는 JS 렌더링이라 원문 확인 불가. 설계사 Nicklaus Design 홀별 설명(1~18번 파 명시)과 GolfingRecord 스코어카드(5개 티) 일치.",
  "source": "https://nicklausdesign.com/2010/09/08/hole-by-hole-4/",
  "checked": "2026-11-04"
 },
 {
  "name": "전주샹그릴라컨트리클럽",
  "aliases": [
   "전주샹그릴라",
   "전주샹그릴라CC",
   "샹그릴라CC",
   "전주상그릴라CC",
   "Jeonju Shangri-La Country Club"
  ],
  "region": "전북 임실",
  "nines": [
   {
    "label": "레이크",
    "pars": [
     4,
     3,
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
    "label": "드림",
    "pars": [
     4,
     5,
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
    "label": "엔젤",
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
  "notes": "공식 홈페이지 코스안내 표 원문 확인(레이크 1~9, 드림 10~18, 엔젤 19~27번 홀 번호 사용). GolfingRecord Lake/Dream/Angel 동일.",
  "source": "https://jeonjucc.co.kr/html/course/course01.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "정남진골프클럽",
  "aliases": [
   "정남진",
   "정남진CC",
   "정남진골프리조트",
   "JNJ골프리조트",
   "JNJ Golf Resort"
  ],
  "region": "전남 장흥",
  "nines": [
   {
    "label": "정",
    "pars": [
     4,
     4,
     3,
     5,
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
     5,
     3,
     4,
     5,
     4,
     4,
     3,
     4,
     4
    ]
   },
   {
    "label": "진",
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
   }
  ],
  "verified": true,
  "notes": "장흥군 장평면 정남진골프클럽(JNJ 골프리조트, 27홀 파108). 공식 홈페이지 코스제원 표 원문 직접 확인.",
  "source": "https://www.jnjgolfresort.co.kr/swp/course",
  "checked": "2026-11-04"
 },
 {
  "name": "정산컨트리클럽",
  "aliases": [
   "정산",
   "정산CC",
   "Jeongsan Country Club"
  ],
  "region": "경남 김해",
  "nines": [
   {
    "label": "해우",
    "pars": [
     4,
     5,
     3,
     5,
     4,
     3,
     4,
     4,
     4
    ]
   },
   {
    "label": "달우",
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
   },
   {
    "label": "별우",
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
  "notes": "김해 주촌면 정산CC(27홀). 공식 홈페이지 코스소개 해우(SUN)·달우(MOON)·별우(STAR) 홀별 PAR 표 원문 직접 확인. 달우와 별우의 파 배열이 동일하나 각 홀 전장(달우 545/205/420…, 별우 500/180/370…)과 파가 정합해 오기 아님.",
  "source": "https://www.jeongsancc.co.kr/course/courseIntro.do",
  "checked": "2026-11-04"
 },
 {
  "name": "제이드팰리스골프클럽",
  "aliases": [
   "제이드팰리스",
   "제이드팰리스GC",
   "제이드팰리스CC",
   "제이드팰리스골프클럽",
   "Jade Palace Golf Club"
  ],
  "region": "강원 춘천시",
  "nines": [
   {
    "label": "이스트",
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
    "label": "웨스트",
    "pars": [
     5,
     4,
     4,
     5,
     3,
     4,
     3,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스소개 홀별 PAR/HDCP/거리 원문(curl) 직접 확인(East 1~9, West 10~18), golfingrecord 5개 티 일치. 파72. 소재지 춘천시 남산면.",
  "source": "https://www.jadepalacegc.com/kr/course/course.do",
  "checked": "2026-11-04"
 },
 {
  "name": "제일컨트리클럽",
  "aliases": [
   "안산제일",
   "안산제일CC",
   "제일CC",
   "제일컨트리클럽",
   "Jaeil Country Club"
  ],
  "region": "경기 안산시",
  "nines": [
   {
    "label": "남",
    "pars": [
     4,
     3,
     5,
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
    "label": "동",
    "pars": [
     4,
     4,
     4,
     5,
     3,
     4,
     3,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스소개 스코어카드 표(SOUTH/CENTER/EAST) 원문 직접 확인. 엑셀 '안산제일' = 안산 상록구 제일CC. 별도 파3 골프코스는 제외.",
  "source": "https://www.jaeil-cc.co.kr/jaeil/course/intro.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "젠스필드컨트리클럽",
  "aliases": [
   "젠스필드",
   "젠스필드CC",
   "젠스필드컨트리클럽",
   "Zensfield Country Club",
   "Jensfield Country Club"
  ],
  "region": "충북 음성군",
  "nines": [
   {
    "label": "드래곤",
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
   },
   {
    "label": "힐",
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
   }
  ],
  "verified": true,
  "notes": "공식 홀별 페이지 18개(드래곤 one/hole01~09, 힐 two/hole01~09) curl 직접 확인, golfingrecord 일치. 파72. 소재지 음성군 삼성면.",
  "source": "https://www.zensfield.com/pagesite/course/one/hole01.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "중문골프클럽",
  "aliases": [
   "중문",
   "중문CC",
   "중문골프클럽",
   "중문GC",
   "Jungmun Golf Club",
   "Jungmun Beach Golf Club"
  ],
  "region": "제주 서귀포시",
  "nines": [
   {
    "label": "한라",
    "pars": [
     4,
     3,
     5,
     3,
     3,
     4,
     5,
     4,
     5
    ]
   },
   {
    "label": "해안",
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
  "verified": false,
  "notes": "공식(한국관광공사 중문골프클럽) 코스제원 표 + 홀별 페이지 par_list·공략팁(4번 '파 3홀', 5번 '파 3홀', 9번 '도그렉 파 5홀') 원문 직접 확인, Hole19 일치. 단 golfingrecord 최신·GolfPass·Golfify는 한라 4번 파4(430)·9번 파4로 한라 4,3,5,4,3,4,5,4,4 → 상충(HDCP 배정도 달라 코스 개편 전후 데이터로 추정). 공식값 채택. 해안은 모든 출처 일치. 공식 9번 거리 420m가 전 티 동일한 점 등 공식 표에도 오기 의심 있음. / 출처 간 한라 4·9번 파 불일치",
  "source": "https://jungmungolf.visitkorea.or.kr/swp/courseInfo",
  "checked": "2026-11-04"
 },
 {
  "name": "중원골프클럽",
  "aliases": [
   "중원",
   "중원CC",
   "중원골프클럽",
   "중원GC",
   "Joongwon Golf Club",
   "Jungwon Country Club"
  ],
  "region": "충북 충주시",
  "nines": [
   {
    "label": "고구려",
    "pars": [
     3,
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
    "label": "백제",
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
    "label": "신라",
    "pars": [
     5,
     4,
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
  "notes": "공식 홈페이지(joongwongolf.co.kr)는 JS 앱이라 원문 확인 불가. GolfPass 3개 코스 + Golfify(a=신라, b=고구려, c=백제; 전장으로 매칭) 일치, Hole19 백제-신라 조합·코스별 파(고구려35/백제36/신라37) 일치. 고구려 9홀 합 35, 신라 37(27홀 합 108). 소재지 충주시 산척면.",
  "source": "https://www.golfpass.com/travel-advisor/courses/38970-joongwon-golf-club-goguryeo-course/scorecard-and-layout",
  "checked": "2026-11-04"
 },
 {
  "name": "지산컨트리클럽",
  "aliases": [
   "지산CC",
   "지산컨트리클럽",
   "Jisan Country Club"
  ],
  "region": "경기 용인시",
  "nines": [
   {
    "label": "동",
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
    "label": "남",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     4,
     3,
     5,
     4
    ]
   },
   {
    "label": "서",
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
    "label": "퍼블릭",
    "pars": [
     4,
     5,
     4,
     5,
     3,
     4,
     4,
     4,
     3
    ]
   }
  ],
  "verified": true,
  "notes": "회원제 27홀(동/남/서) + 퍼블릭 9홀(Executive). 공식(jisanresort.co.kr 회원제·퍼블릭 코스안내, WebFetch 요약) 값이 GolfPass 동/남/서/Executive·Hole19·golfingrecord(\"진산골프클럽\"로 오표기·좌표 오류이나 거리·구성 동일) 모두 일치. 소재지 용인시 처인구 원삼면(스키장 지산포레스트리조트는 이천). 퍼블릭은 파36이나 전장 약 2,345~2,466야드의 이그제큐티브 코스.",
  "source": "https://www.jisanresort.co.kr/w/golf/member/info.asp",
  "checked": "2026-11-04"
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
  "name": "진주컨트리클럽",
  "aliases": [
   "진주",
   "진주CC",
   "진주컨트리클럽",
   "Chinju Country Club",
   "Jinju Country Club"
  ],
  "region": "경남 진주시",
  "nines": [
   {
    "label": "남강",
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
    "label": "촉석",
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
  "notes": "공식 스코어카드 표 원문(curl) 직접 확인(Front Nine 남강 / Back Nine 촉석), golfingrecord 일치. 파72. 소재지 진주시 진성면.",
  "source": "https://www.chinjucc.co.kr/Course/ScoreCard.aspx",
  "checked": "2026-11-04"
 },
 {
  "name": "진해신항컨트리클럽",
  "aliases": [
   "진해신항",
   "진해신항CC",
   "진해신항컨트리클럽",
   "아라미르",
   "아라미르CC",
   "아라미르골프앤리조트",
   "Aramir Golf Resort",
   "Jinhae Shinhang Country Club"
  ],
  "region": "경남 창원시",
  "nines": [
   {
    "label": "진해 OUT",
    "pars": [
     4,
     4,
     5,
     3,
     4,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "진해 IN",
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
    "label": "신항 OUT",
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
    "label": "신항 IN",
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
  "notes": "공식 코스소개 스코어카드 표(진해 OUT/IN, 신항 OUT/IN) 원문(curl) 직접 확인, Hole19 진해·신항 18홀 일치. 2026-04-01 경남개발공사 직영 전환하며 옛 아라미르 골프앤리조트에서 개명(서울신문 2026-03-31). 소재지 창원시 진해구 제덕동(웅동1지구). 진해 코스 거리는 좌그린 기준.",
  "source": "https://www.jhnpcc.co.kr/Course/Intro.aspx",
  "checked": "2026-11-04"
 },
 {
  "name": "창원컨트리클럽",
  "aliases": [
   "창원",
   "창원CC",
   "창원컨트리클럽",
   "Changwon Country Club"
  ],
  "region": "경남 창원시",
  "nines": [
   {
    "label": "서",
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
     4,
     5,
     3,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스소개 스코어카드 표(서코스/동코스) 원문 직접 확인, golfingrecord(OUT/IN) 일치. 파72. 소재지 창원시 의창구 봉림동.",
  "source": "https://www.changwoncountryclub.co.kr/Course/Course.aspx",
  "checked": "2026-11-04"
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
  "name": "천안상록골프장",
  "aliases": [
   "천안상록",
   "천안상록CC",
   "천안상록GC",
   "천안 상록골프장",
   "상록리조트 골프장",
   "Cheonan Sangnok Country Club",
   "Cheonan Sangnok Golf Course"
  ],
  "region": "충남 천안시",
  "nines": [
   {
    "label": "남",
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
   },
   {
    "label": "동",
    "pars": [
     4,
     4,
     4,
     3,
     5,
     3,
     4,
     5,
     4
    ]
   },
   {
    "label": "중",
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
  "verified": true,
  "notes": "공식 홈페이지(sangnokresort.co.kr)는 접속 차단 페이지가 떠 직접 확인 불가. 남: Golfify+GolfPass 일치, 동: Golfify+Hole19(East-Middle 조합) 일치, 중: Golfify+GolfPass+Hole19 일치(curl 원문 직접 파싱). 공무원연금공단 운영 27홀(Hole19는 36홀로 표기하나 3개 nine만 존재).",
  "source": "https://www.golfify.io/courses/cheonan-sangnok-golf-course-south (남/동/중 각 코스 페이지)",
  "checked": "2026-11-04"
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
  "name": "캐슬렉스제주",
  "aliases": [
   "캐슬렉스 제주",
   "캐슬렉스제주CC",
   "캐슬렉스 제주CC",
   "캐슬렉스제주 골프클럽",
   "Castlex Jeju Golf Club",
   "Castlex Golf Club Jeju"
  ],
  "region": "제주 서귀포시",
  "nines": [
   {
    "label": "사우스",
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
    "label": "이스트",
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
  "notes": "공식 홈페이지 홀별 페이지 PAR 원문 직접 확인(South·East), Golfify·GolfPass·Hole19(East)와 일치. 27홀(회원제 18+대중제 9)로 알려졌으나 공식 코스공략 탭엔 South·East만 노출되고 North 탭은 주석 처리됨. North 9홀은 GolfPass 단일 출처(4,3,5,4,3,4,4,4,4=35)뿐이라 nines에서 제외.",
  "source": "https://www.castlexjj.com/html/course/course02.asp (South 1H~9H: course02.asp, course02_02~09.asp; East: course03.asp, course03_02~09.asp)",
  "checked": "2026-11-04"
 },
 {
  "name": "캐슬파인GC",
  "aliases": [
   "캐슬파인",
   "캐슬파인골프클럽",
   "캐슬파인 골프클럽",
   "캐슬파인CC",
   "Castle Pine Golf Club"
  ],
  "region": "경기 여주시",
  "nines": [
   {
    "label": "레이크",
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
    "label": "밸리",
    "pars": [
     4,
     4,
     4,
     3,
     5,
     5,
     4,
     3,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지(castlepine.co.kr) 403 차단으로 직접 확인 불가. 두 nine의 홀별 파는 GolfPass(Lake/Valley)·Hole19(18홀 OUT/IN)·Golfify(OUT) 일치. 레이크/밸리 라벨 매핑은 GolfPass 표기 순서와 홀별 후기 블로그 2건(9manual.com 레이크·밸리 1~9번 파, ingin100.com 레이크 1~9번 파)으로 확인. 여주시 강천면 부평리.",
  "source": "https://www.golfpass.com/courses/38662-castle-pine-golf-club-lake-valley-course/scorecard-and-layout",
  "checked": "2026-11-04"
 },
 {
  "name": "코리아CC",
  "aliases": [
   "코리아CC",
   "코리아컨트리클럽",
   "코리아 컨트리클럽",
   "용인 코리아CC",
   "Korea Country Club"
  ],
  "region": "경기 용인시",
  "nines": [
   {
    "label": "레이크",
    "pars": [
     5,
     4,
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
    "label": "챌린지",
    "pars": [
     4,
     3,
     5,
     4,
     5,
     3,
     4,
     4,
     4
    ]
   },
   {
    "label": "크리크",
    "pars": [
     5,
     4,
     4,
     3,
     4,
     3,
     5,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스정보 페이지(GA KOREA 그룹 사이트) 3개 코스 스코어카드 PAR 행 원문 직접 확인. 챌린지는 GolfPass·Golfify·Hole19와 일치, 크리크는 Hole19와 일치(Golfify 'Creek' 페이지는 순서가 다른 오류값이라 배제). 레이크는 공식 단일 원문. 같은 단지의 코리아퍼블릭(별도 골프장)과 구분. 용인시 처인구 이동읍.",
  "source": "https://www.gakorea.com/korea/course/courseInfo.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "코브스윙골프클럽",
  "aliases": [
   "참밸리",
   "참밸리CC",
   "참밸리컨트리클럽",
   "코브스윙",
   "코브스윙GC",
   "코브스윙골프클럽",
   "Cove Swing Golf Club",
   "Charm Valley Country Club"
  ],
  "region": "경기 포천시",
  "nines": [
   {
    "label": "코브",
    "pars": [
     4,
     4,
     4,
     4,
     3,
     4,
     5,
     3,
     5
    ]
   },
   {
    "label": "스윙",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     4,
     3,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "엑셀 \"참밸리\" = 포천 설운동 참밸리CC, 현 코브스윙골프클럽(공식 사이트 주석에 옛 메뉴 '참밸리소개'·charmvalley 잔존, Hole19 slug charm-valley·국문명 코브스윙). 공식 코스개요 표(코브/스윙) + 홀별 공략 페이지 원문 직접 확인, Hole19(Queens/Valley 옛 명칭) 18홀 일치. 파72.",
  "source": "https://coveswing.com/course/courseIntro_new.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "코스카CC",
  "aliases": [
   "코스카",
   "코스카CC",
   "코스카컨트리클럽",
   "코스카 컨트리클럽",
   "Kosca Country Club",
   "Koska Country Club"
  ],
  "region": "충북 음성군",
  "nines": [
   {
    "label": "메이플",
    "pars": [
     4,
     5,
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
    "label": "릴리",
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
    "label": "파인",
    "pars": [
     4,
     4,
     5,
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
  "notes": "공식 홈페이지 27홀 홀별 페이지 Par 원문 직접 확인. 메이플·릴리는(GolfPass 옛 명칭 Happiness·Love로 표기) GolfPass·Hole19·Golfify와 일치, 파인은 Golfify C와 일치. 음성군 음성읍 동음리.",
  "source": "https://www.koscacc.kr/pagesite/course/one/hole01.asp (메이플=one, 릴리=two, 파인=three, hole01~09 이미지 alt 'Par N')",
  "checked": "2026-11-04"
 },
 {
  "name": "크라운CC",
  "aliases": [
   "크라운",
   "크라운CC",
   "제주 크라운CC",
   "크라운컨트리클럽",
   "크라운 컨트리클럽",
   "Crown Country Club"
  ],
  "region": "제주 제주시",
  "nines": [
   {
    "label": "동",
    "pars": [
     4,
     3,
     5,
     5,
     4,
     4,
     3,
     4,
     4
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
     5,
     4,
     3,
     4
    ]
   },
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
     4,
     5
    ]
   }
  ],
  "verified": false,
  "notes": "엑셀 '크라운'(2회 표기) 조사 결과 국내 운영 중인 '크라운' 골프장은 제주 조천읍 크라운CC 1곳뿐이라 중복 표기로 판단(다른 지역 동명 골프장 미발견). 공식 스코어카드 3개 표(27홀 합계 파108): 1표 머리 이미지 'EAST COURSE(東)'=동, 3표 'SOUTH COURSE(南)'=남, 2표 머리 이미지는 'COURSE LAYOUT'으로 잘못 붙어 있어 소거법으로 서. 동은 Hole19 East와 일치, 남은 Golfify·Golfingrecord 'South'(야디지까지 동일)와 일치. 그러나 공식 코스소개(시설현황) 표는 5,4,3,4,4,4,3,4,5를 '남코스 1~9', 4,5,3,4,4,5,4,3,4를 '서코스 10~18'로 적어 남/서 명칭이 스코어카드와 반대이고, 동코스도 구 자료(파35, 5번 217m 파3)라 공식 자료끼리 모순 → 남·서 라벨 현장 확인 필요. Golfingrecord East/West 값은 공식과 전혀 달라 배제.",
  "source": "https://jejucrowncc.com/sub/sub02_03_01.html (공식 스코어카드)",
  "checked": "2026-11-04"
 },
 {
  "name": "크리스탈밸리CC",
  "aliases": [
   "크리스탈밸리",
   "크리스탈밸리CC",
   "크리스탈밸리 컨트리클럽",
   "크리스탈 밸리 CC",
   "Crystal Valley Country Club"
  ],
  "region": "경기 가평군",
  "nines": [
   {
    "label": "크리스탈",
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
    "label": "밸리",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스 제원표(CRYSTAL/VALLEY 탭) HOLE·PAR 원문 직접 확인(S/T 36·36). 엑셀 '크리스탈밸리'(2회 표기)는 가평 상면 1곳뿐으로 중복 표기로 판단. 안성 '크리스밸리CC'(Creas Valley)·매각된 자매 골프장 '크리스탈카운티'와 다른 곳.",
  "source": "https://www.crystalvalley.co.kr/html/course/course01.asp",
  "checked": "2026-11-04"
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
  "name": "클럽디 거창",
  "aliases": [
   "클럽디 거창",
   "클럽디거창",
   "클럽디 거창CC",
   "CLUBD 거창",
   "ClubD Geochang"
  ],
  "region": "경남 거창군",
  "nines": [
   {
    "label": "남",
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
    "label": "동",
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
    "label": "서",
    "pars": [
     4,
     3,
     4,
     4,
     4,
     5,
     3,
     5,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스안내 남/동/서 스코어카드 Par 행 원문 직접 확인(동코스는 홀별 공략 페이지 PAR와도 일치). 동·서는 Hole19(East-West 18홀)와 일치, 남은 공식 단일 원문. 거창군 신원면.",
  "source": "https://www.clubd.com/geochang/course/courseIntro.do",
  "checked": "2026-11-04"
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
  "name": "클럽디 보은",
  "aliases": [
   "클럽디보은",
   "클럽디 보은",
   "클럽디 보은CC",
   "CLUBD 보은",
   "ClubD Boeun"
  ],
  "region": "충북 보은군",
  "nines": [
   {
    "label": "동",
    "pars": [
     5,
     4,
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
    "label": "서",
    "pars": [
     4,
     4,
     3,
     4,
     5,
     4,
     3,
     5,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스안내 동(EAST)/서(WEST) Par 행 원문 직접 확인, Hole19 East-West 카드(야디지 포함)와 일치. 보은군 보은읍. 탄부면의 속리산CC(구 클럽디 속리산)와 다른 곳.",
  "source": "https://www.clubd.com/boeun/course/courseIntro.do",
  "checked": "2026-11-04"
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
  "name": "킹즈락CC",
  "aliases": [
   "킹즈락",
   "킹즈락 컨트리클럽",
   "Kings Rock CC"
  ],
  "region": "충북 제천시",
  "nines": [
   {
    "label": "이스트",
    "pars": [
     4,
     5,
     3,
     5,
     3,
     4,
     4,
     4,
     4
    ]
   },
   {
    "label": "웨스트",
    "pars": [
     5,
     4,
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
    "label": "사우스",
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
  "notes": "공식 홈페이지(kingsrockcc.com)는 SPA라 원문 표 확인 불가. 티픽 스코어카드와 2025년 네이버 후기(홀별 파 명시) 3건이 27홀 전부 일치. elwon2782 블로그(2026)는 다른 파 배열을 적었으나 AI 생성으로 보이는 글이고 다른 출처와 모두 어긋나 배제. / 음성 힐데스하임CC와 별개(주소 다름, 2026-11-04 티픽 확인)",
  "source": "https://teepickgolf.com/course/%ED%82%B9%EC%A6%88%EB%9D%BD",
  "checked": "2026-11-04"
 },
 {
  "name": "타미우스CC",
  "aliases": [
   "타미우드",
   "타미우스",
   "타미우스 골프앤빌리지",
   "Tameus CC"
  ],
  "region": "제주 제주시",
  "nines": [
   {
    "label": "마운틴",
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
    "label": "우드",
    "pars": [
     4,
     4,
     3,
     5,
     4,
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
  "notes": "엑셀 표기 '타미우드'는 '타미우스'의 오기로 판단(제주 애월 27홀, 코스명에 Woods 포함, '타미우드'라는 골프장은 검색되지 않음). 공식 JS와 티픽 스코어카드 일치.",
  "source": "http://tameuscc.co.kr/static/pc/js/custom/mountain_course.js (+woods_course.js, lake_course.js — 공식 코스페이지 정적 JS의 홀별 Par 목록)",
  "checked": "2026-11-04"
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
  "name": "태릉CC",
  "aliases": [
   "태릉체력단련장",
   "태릉 체력단련장",
   "태릉골프장",
   "태릉 골프장"
  ],
  "region": "서울 노원구",
  "nines": [
   {
    "label": "화랑",
    "pars": [
     4,
     5,
     5,
     4,
     3,
     4,
     3,
     4,
     4
    ]
   },
   {
    "label": "을지",
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
   }
  ],
  "verified": true,
  "notes": "군 체력단련장이라 공식 공개 스코어카드 없음. 화랑(1~9번)·을지(10~18번) 코스. 독립 후기 3건(2018·2024·2025)이 18홀 전부 일치. forevercobra17 후기만 을지 15번(전체 15번)을 PAR 5로 적어 합 37 — 다른 3건과 어긋나 오기로 판단(파4 채택).",
  "source": "https://blog.naver.com/breezzyday/224032066566 (18홀 전부, 2025)",
  "checked": "2026-11-04"
 },
 {
  "name": "테디밸리CC",
  "aliases": [
   "테디밸리",
   "테디밸리 골프앤리조트",
   "Teddy Valley"
  ],
  "region": "제주 서귀포시",
  "nines": [
   {
    "label": "OUT",
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
   },
   {
    "label": "IN",
    "pars": [
     4,
     4,
     3,
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
  "notes": "18홀 단일(OUT=테디코스, IN=밸리코스). 공식 홀별 페이지와 티픽 일치.",
  "source": "http://www.teddyvalley.com/html/course/teddy_01.asp ~ teddy_09.asp, valley_01.asp ~ valley_09.asp (공식 홀별 페이지)",
  "checked": "2026-11-04"
 },
 {
  "name": "통도 파인이스트CC",
  "aliases": [
   "통도 파인이스트",
   "통도파인이스트",
   "통도파인이스트CC",
   "통도CC",
   "Tongdo Pine East CC"
  ],
  "region": "경남 양산시",
  "nines": [
   {
    "label": "남 OUT",
    "pars": [
     4,
     4,
     3,
     5,
     4,
     4,
     5,
     3,
     4
    ]
   },
   {
    "label": "남 IN",
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
   },
   {
    "label": "북 OUT",
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
    "label": "북 IN",
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
  "notes": "남코스 18홀 + 북코스 18홀(각 72). 공식 스코어카드 표와 티픽 일치.",
  "source": "http://www.tongdocc.co.kr/course/course1.asp (남코스), http://www.tongdocc.co.kr/course/course1-2.asp (북코스)",
  "checked": "2026-11-04"
 },
 {
  "name": "트리니티클럽",
  "aliases": [
   "트리니티",
   "트리니티CC",
   "트리니티 클럽",
   "Trinity Club"
  ],
  "region": "경기 여주시",
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
     4,
     3
    ]
   },
   {
    "label": "IN",
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
  "verified": false,
  "notes": "신세계 회원제(여주 가남읍). 공식 홈페이지는 회원 로그인 필요, 티픽에도 스코어카드 없음. 독립 후기 2건이 16홀 이상 일치(나머지 4번·12번·16번도 다른 후기·9홀 합으로 일치), 공식 원문 미확인. / 공식 원문 미확인, 후기만",
  "source": "https://blog.naver.com/flying0480/223887725850 (18홀 전부, 2025)",
  "checked": "2026-11-04"
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
  "name": "파나시아GC",
  "aliases": [
   "파나시아",
   "파나시아CC",
   "파나시아 골프클럽",
   "Panacea GC"
  ],
  "region": "충남 당진시",
  "nines": [
   {
    "label": "레드",
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
    "label": "화이트",
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
   }
  ],
  "verified": true,
  "notes": "실제 9개 홀에 좌(Red)/우(White) 두 세트의 티·그린을 두어 18홀(72)로 운영 — 두 9홀 파 배열 동일(HDCP·거리만 다름). 같은 9개 홀을 두 번 도는 구조라 GPS상 홀 위치는 거의 겹침.",
  "source": "https://panaceagc.com/images/course/course_main.jpg (공식 '코스소개 및 제원' 페이지 이미지 직접 판독)",
  "checked": "2026-11-04"
 },
 {
  "name": "파미힐스CC",
  "aliases": [
   "파미힐스",
   "파미힐스 컨트리클럽",
   "Palmy Hills Country Club"
  ],
  "region": "경북 칠곡군",
  "nines": [
   {
    "label": "동 OUT",
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
   },
   {
    "label": "동 IN",
    "pars": [
     4,
     4,
     3,
     5,
     4,
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
    "label": "남 IN",
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
   }
  ],
  "verified": false,
  "notes": "동·남 각 18홀(36홀). 공식 홈페이지 접속 불가(도메인 미확인). Hole19 스코어카드 + 후기: 남코스는 후기가 16홀 명시·나머지는 9홀 합으로 일치. 동코스는 후기로 11홀(1·2·3·5·6·7·8, 11·12·13·16) 확인, 4·9·10·14·15·17·18번은 Hole19 단독(9홀 합은 일치). 옛 이름 경북골프장. / 동코스 일부 홀 Hole19 단독",
  "source": "https://www.hole19golf.com/courses/palmy-hills-country-club-east , https://www.hole19golf.com/courses/palmy-hills-country-club-south",
  "checked": "2026-11-04"
 },
 {
  "name": "파인리즈CC",
  "aliases": [
   "파인리즈",
   "파인리즈 리조트",
   "파인리즈 컨트리클럽",
   "Pine Ridge CC"
  ],
  "region": "강원 고성군",
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
     4,
     3,
     4,
     5,
     3,
     4,
     5
    ]
   },
   {
    "label": "리즈",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스소개는 이미지·설명만(레이크 630m 파5, 리즈 223m 파3·610m 파5 언급 — 티픽 거리와 부합). 티픽 스코어카드와 독립 후기 2건이 27홀 일치(일부 홀은 9홀 합으로 보완). 공식 블로그(pineridge1011) 레이크 코스 글은 6번 201m 파3·8번 540m 파5로 적어 리즈 코스 수치와 섞인 것으로 보여 배제.",
  "source": "https://teepickgolf.com/course/%ED%8C%8C%EC%9D%B8%EB%A6%AC%EC%A6%88",
  "checked": "2026-11-04"
 },
 {
  "name": "파인밸리CC",
  "aliases": [
   "파인밸리",
   "파인밸리 컨트리클럽",
   "삼척 파인밸리",
   "Pine Valley CC"
  ],
  "region": "강원 삼척시",
  "nines": [
   {
    "label": "파인",
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
    "label": "밸리",
    "pars": [
     3,
     6,
     3,
     4,
     4,
     4,
     5,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스정보 표 직접 확인(총 73파: 파인 36, 밸리 37 — 밸리 2번(전체 11번) 718yd 국내 최초 파6 홀). 동명 골프장 중 가장 알려진 강원 삼척 파인밸리(동양레저) 선택.",
  "source": "https://www.tyleisure.co.kr/html_valley/course01.asp",
  "checked": "2026-11-04"
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
  "name": "파인크리크컨트리클럽",
  "aliases": [
   "파인크리크",
   "파인크리크CC",
   "파인크리크컨트리클럽",
   "Pine Creek Country Club"
  ],
  "region": "경기 안성시",
  "nines": [
   {
    "label": "파인",
    "pars": [
     4,
     5,
     3,
     4,
     5,
     3,
     5,
     3,
     4
    ]
   },
   {
    "label": "크리크",
    "pars": [
     4,
     4,
     3,
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
  "notes": "공식(동양레저) 코스소개 코스정보 표 3개(파인/크리크/밸리 HOLE·METER·YARD·PAR·HDCP) curl 직접 확인, 파인코스는 코스공략도 페이지 홀별 Par 설명과도 일치. 파인코스는 파5·파4·파3 각 3개 배열(공식 설명). 각 36. 소재지 안성시 양성면.",
  "source": "https://www.pinecreek.co.kr/html_creek/course01.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "파인힐스컨트리클럽",
  "aliases": [
   "파인힐스",
   "파인힐스CC",
   "파인힐스컨트리클럽",
   "Pine Hills Country Club"
  ],
  "region": "전남 순천시",
  "nines": [
   {
    "label": "파인",
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
    "label": "레이크",
    "pars": [
     4,
     5,
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
    "label": "힐스",
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
  "notes": "BS그룹 공식 코스소개 페이지(EUC-KR) curl 직접 확인 — 파인/레이크/힐스 각 HOLE·M·YD·Par 표, 각 Total 36. 소재지 순천시 주암면 송광사길 99. 동명 해외 골프장과 혼동 없음(지역 확인).",
  "source": "https://www.pinehills.co.kr/pinehills/pagesite/course/intro.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "파주컨트리클럽",
  "aliases": [
   "파주CC",
   "파주",
   "파주컨트리클럽",
   "원더클럽 파주CC",
   "Paju Country Club"
  ],
  "region": "경기 파주시",
  "nines": [
   {
    "label": "동",
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
    "label": "서",
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
   }
  ],
  "verified": true,
  "notes": "원더클럽(KX그룹) 공식 사이트 파주CC 코스전경 및 제원 표(동/서 PAR·HDCP·티별 거리) curl 직접 확인, 각 36. 챔피언티 동 3,190m·서 3,285m가 후기 수치와도 일치. 소재지 파주시 법원읍 화합로 306((주)파주컨트리클럽).",
  "source": "https://www.onetheclub.com/paju/course",
  "checked": "2026-11-04"
 },
 {
  "name": "파크밸리골프클럽",
  "aliases": [
   "파크밸리",
   "파크밸리CC",
   "파크밸리GC",
   "파크밸리골프클럽",
   "Park Valley Golf Club"
  ],
  "region": "강원 원주시",
  "nines": [
   {
    "label": "파크",
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
   },
   {
    "label": "밸리",
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
  "notes": "공식 코스소개 스코어 표 curl 직접 확인 — 파크코스 1~9(OUT 36), 밸리코스 10~18(IN 36), 파72. 소재지 원주시 소초면 바우실길 281(강원레저개발).",
  "source": "https://www.parkvalley.co.kr/Course/View.aspx",
  "checked": "2026-11-04"
 },
 {
  "name": "팔공컨트리클럽",
  "aliases": [
   "팔공",
   "팔공CC",
   "팔공컨트리클럽",
   "Palgong Country Club"
  ],
  "region": "대구 동구",
  "nines": [
   {
    "label": "동봉",
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
   },
   {
    "label": "서봉",
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
   }
  ],
  "verified": true,
  "notes": "엑셀 \"팔공\"=대구 동구 도학동 팔공CC(우경개발, 팔공산로 237길 186)로 판단. 공식 코스안내 홀별 헤더 이미지(hole_01st~18st.gif \"Par/HDCP\") 직접 확인 + 같은 페이지 코스공략법 본문 PAR 표기와 일치. 동봉 1~9(36)·서봉 10~18(36), 파72(공식 코스개요).",
  "source": "https://www.palgong-cc.co.kr/html/course_out.asp",
  "checked": "2026-11-04"
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
  "name": "포도컨트리클럽",
  "aliases": [
   "포도",
   "포도CC",
   "포도컨트리클럽",
   "PODO Country Club"
  ],
  "region": "경북 김천시",
  "nines": [
   {
    "label": "샤인",
    "pars": [
     5,
     4,
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
    "label": "포도",
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
    "label": "자두",
    "pars": [
     5,
     4,
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
  "notes": "공식 코스소개 스코어 표(샤인/포도/자두 각 HOLE·PAR·티별 거리·HDCP) curl 직접 확인, 각 36·27홀 108. 소재지 김천시 구성면 남김천대로 2532.",
  "source": "https://www.podocc.com/course/intro.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "포라이즌CC",
  "aliases": [
   "승주",
   "승주CC",
   "승주컨트리클럽",
   "포라이즌",
   "Fourizon",
   "Seungju Country Club"
  ],
  "region": "전남 순천",
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
    "label": "베이",
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
    "label": "가든",
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
  "notes": "승주CC가 포라이즌(Fourizon, POSCO 계열)으로 브랜드·코스명 변경(뉴스 확인). 공식 fourizon.co.kr은 SPA라 표 원문 미확인. 티픽골프 스코어카드와 golfingrecord(옛 코스명 East/Center/South) 3개 9홀 전부 일치: 스카이=옛 동(East), 가든=옛 중(Center), 베이=옛 남(South).",
  "source": "https://teepickgolf.com/course/%ED%8F%AC%EB%9D%BC%EC%9D%B4%EC%A6%8C(%EA%B5%AC%20%EC%8A%B9%EC%A3%BC)",
  "checked": "2026-11-04"
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
  "name": "포웰CC 김해",
  "aliases": [
   "포웰 김해",
   "포웰CC 김해",
   "롯데스카이힐 김해CC",
   "김해CC",
   "4Well CC Gimhae"
  ],
  "region": "경남 김해시",
  "nines": [
   {
    "label": "스카이",
    "pars": [
     4,
     4,
     3,
     5,
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
     4,
     3,
     5,
     4,
     4,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식(4wellcc.com, (주)메가비엠씨, 김해시 진례면 고모로134번길) 코스공략도 홀별 \"N Hole parX SKY/HILL COURSE\" 원문 curl 직접 확인, 각 36·회원제 18홀. 메가비엠씨가 롯데스카이힐 김해CC 인수 후 포웰CC로 개명(인사이트 기사). 홈페이지 공식명은 \"포웰CC\"(안성과 구분 위해 \"포웰CC 김해\"). 단독 \"포웰CC\"는 안성·프린세스(공주)도 같은 브랜드라 aliases에서 제외.",
  "source": "https://www.4wellcc.com/course/course.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "포웰CC 안성",
  "aliases": [
   "포웰 안성",
   "포웰CC 안성",
   "루나힐스안성",
   "루나힐스 안성CC",
   "Luna Hills Anseong Country Club"
  ],
  "region": "경기 안성시",
  "nines": [
   {
    "label": "오크힐",
    "pars": [
     4,
     5,
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
    "label": "버치힐",
    "pars": [
     4,
     4,
     4,
     4,
     5,
     3,
     4,
     3,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 as.4wellcc.com은 AWS WAF 챌린지로 접근 불가(우회 안 함). golf4holland(루나힐스안성 스코어카드, Oak Hill 1~9·Birch Hill 10~18, WebFetch 요약)와 2024-06 포웰CC 안성 홀별 라운드 후기(9manual, curl 원문 \"Birch Hill 코스 N 파X\")가 18홀 모두 일치. 각 36. 아덴힐CC→루나힐스안성→포웰CC 안성 개명(후기 언급), 제주 아덴힐과 혼동 방지 위해 \"아덴힐\"은 aliases 제외. 소재지 안성시 양성면 약산길 67-6.",
  "source": "https://golf4holland.nl/en/golf-locations/luna-hills-anseong-country-club-2f78558b",
  "checked": "2026-11-04"
 },
 {
  "name": "포웰CC 프린세스",
  "aliases": [
   "프린세스",
   "프린세스CC",
   "프린세스컨트리클럽",
   "프린세스골프클럽",
   "포웰CC 프린세스",
   "Princess Golf Club"
  ],
  "region": "충남 공주시",
  "nines": [
   {
    "label": "이스트",
    "pars": [
     4,
     4,
     4,
     3,
     5,
     4,
     5,
     3,
     4
    ]
   },
   {
    "label": "웨스트",
    "pars": [
     5,
     3,
     4,
     3,
     5,
     4,
     3,
     5,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 princessgc.co.kr(사이트 타이틀 \"포웰CC 프린세스\", 공주시 정안면 방자들길 81-50) /course/intro 페이지 Nuxt 청크의 EAST/WEST 코스 PAR·HDCP·티별 거리 표 curl 원문 확인, Hole19 Pine-Valley 카드(OUT/IN)와 18홀 일치. 각 36. EAST=파인, WEST=밸리(구 코스명). 주의: 같은 사이트 /course/east·west·south 홀공략 청크는 다른 골프장 템플릿 데이터(\"스완 코스\" 언급, 파 배열 불일치)로 보여 무시. 웨스트 파3·파5 각 3개.",
  "source": "https://www.princessgc.co.kr/_nuxt/index.DMu-fD-R.js",
  "checked": "2026-11-04"
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
  "name": "포항컨트리클럽",
  "aliases": [
   "포항CC",
   "포항컨트리클럽",
   "Pohang Country Club"
  ],
  "region": "경북 포항시",
  "nines": [
   {
    "label": "동해",
    "pars": [
     4,
     4,
     5,
     4,
     4,
     3,
     5,
     3,
     4
    ]
   },
   {
    "label": "태백",
    "pars": [
     4,
     3,
     4,
     4,
     3,
     5,
     4,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스소개(/swp/courseSea 동해 1~9, /swp/courseMountain 태백 10~18)가 부르는 공개 정적 JS의 parList·meterList·handiList 원문 curl 직접 확인(HTML 초기 렌더 1번·10번 홀 Par도 일치). 각 36. 태백 2번(11번) 240m 파3. 소재지 포항시 북구 송라면 동해대로2751번길 126((주)홍익레저산업).",
  "source": "http://www.pohangcc.com/static/pc/js/custom/course.sea.js?ver=2",
  "checked": "2026-11-04"
 },
 {
  "name": "푸른솔GC 장성",
  "aliases": [
   "푸른솔 장성",
   "푸른솔장성",
   "푸른솔GC 장성",
   "푸른솔골프클럽 장성",
   "Purunsol Golf Club Jangseong"
  ],
  "region": "전남 장성",
  "nines": [
   {
    "label": "레이크",
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
    "label": "마운틴",
    "pars": [
     5,
     4,
     3,
     4,
     4,
     4,
     4,
     3,
     5
    ]
   },
   {
    "label": "힐",
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
  "notes": "공식 코스개요(purunsolgc.co.kr, 장성군 동화면 임정로 155) 코스별 PAR 행 원문 직접 확인, 티픽 3개 조합표와 일치. DB의 푸른솔GC 포천(purunsol.co.kr)과 별개.",
  "source": "https://www.purunsolgc.co.kr/Course/Info.aspx",
  "checked": "2026-11-04"
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
  "name": "플라밍고컨트리클럽",
  "aliases": [
   "플라맹고",
   "플라밍고",
   "플라밍고CC",
   "플라밍고컨트리클럽",
   "Flamingo Country Club"
  ],
  "region": "충남 당진시",
  "nines": [
   {
    "label": "링크스",
    "pars": [
     4,
     6,
     4,
     3,
     4,
     4,
     4,
     3,
     4
    ]
   },
   {
    "label": "파크",
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
   },
   {
    "label": "듄스",
    "pars": [
     4,
     3,
     4,
     3,
     4,
     5,
     4,
     5,
     4
    ]
   },
   {
    "label": "리버",
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
  "notes": "엑셀 \"플라맹고\"=플라밍고CC 표기 오류로 판단. 공식(CLUB LONGE 통합 사이트, flamingocc.co.kr 리다이렉트) 코스안내 표 4개(HOLE·PAR·LENGTH) curl 직접 확인, 각 36·36홀. 링크스 2번 705m 파6(공식 \"국내 최초/최장 Par 6\"), 링크스 4번 251m 파3. 서해 간척지·송악IC/당진IC 접근 → 당진시.",
  "source": "https://www.clublonge.com/Club/flamingo/Course",
  "checked": "2026-11-04"
 },
 {
  "name": "플라자CC 설악",
  "aliases": [
   "플라자 설악",
   "플라자CC 설악",
   "플라자설악",
   "설악프라자CC",
   "Plaza Country Club Seorak"
  ],
  "region": "강원 속초시",
  "nines": [
   {
    "label": "선라이즈",
    "pars": [
     4,
     4,
     4,
     3,
     5,
     4,
     3,
     4,
     5
    ]
   },
   {
    "label": "마운틴뷰",
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
  "notes": "한화 공식 홀별 페이지 18개(sunriseCourse_hole1~9, mountainCourse_hole10~18) curl 확인 + Hole19 Sunrise-Mountainview 카드 일치. 단 공식 14번(마운틴뷰 5번) 표기가 \"Par 3 / 358m\"인데 티별 358/340/303m·페어웨이 OB 설명상 파4가 명백하고 Hole19도 파4(레드 303 일치) → 파4 채택(공식 표기 오류). 각 36·파72. 구 명칭 정아 설악CC→설악프라자CC(1987, 공식 연혁). 소재지 속초시 미시령로2983번길 111.",
  "source": "https://www.plazacc.co.kr/plzcc/irsweb/golf2/course/seorak/sunriseCourse_hole1.do?ccg_hole=1&brch_cd=0100&cors_cd=",
  "checked": "2026-11-04"
 },
 {
  "name": "플라자CC 용인",
  "aliases": [
   "플라자CC",
   "플라자CC 용인",
   "플라자CC용인",
   "플라자 용인",
   "플라자컨트리클럽 용인",
   "Plaza CC Yongin"
  ],
  "region": "경기 용인시 처인구",
  "nines": [
   {
    "label": "타이거 OUT",
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
    "label": "타이거 IN",
    "pars": [
     4,
     4,
     4,
     3,
     4,
     5,
     3,
     5,
     4
    ]
   },
   {
    "label": "라이온 OUT",
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
    "label": "라이온 IN",
    "pars": [
     5,
     4,
     3,
     5,
     4,
     4,
     3,
     4,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "엑셀 \"플라자CC\"는 플라자 설악(별도 조사) 제외 시 한화 플라자CC 중 가장 큰 용인(타이거 18홀+라이온 18홀=36홀)으로 판단. 공식 홈페이지(plazacc.co.kr) 홀별 페이지 36개(ccg_hole=1~18, 타이거 cors_cd=01·라이온 02)의 제목 이미지 alt \"HOLE n Par p\" curl 원문 확인, 본문 설명의 Par 언급(타이거 1·3·6·7번, 라이온 12번)과도 일치. 각 nine 36. 플라자CC 제주(9홀)는 별도 항목.",
  "source": "https://www.plazacc.co.kr/plzcc/irsweb/golf2/course/yongin/tigerCourse_hole1.do?ccg_hole=1&brch_cd=0400&cors_cd=01",
  "checked": "2026-11-04"
 },
 {
  "name": "플라자CC 제주",
  "aliases": [
   "플라자CC 제주",
   "플라자CC제주",
   "플라자 제주",
   "Plaza CC Jeju"
  ],
  "region": "제주",
  "nines": [
   {
    "label": "9홀",
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
  "notes": "공식 클럽소개: 9홀 코스를 TWO-TEE·ONE-FAIRWAY·TWO-GREEN으로 조성해 18홀처럼 운영. 공식 홀별 페이지 1~18 alt Par가 1~9(4,5,4,3,4,4,3,4,5)와 10~18 동일(17번 페이지 alt는 \"HOLE 14 Par 4\" 오기). 후반 9홀은 티·그린 위치만 달라 GPS 좌표는 별도 필요. 엑셀 \"플라자CC\"는 용인으로 매핑했으므로 이 항목엔 그 별칭 미부여.",
  "source": "https://www.plazacc.co.kr/plzcc/irsweb/golf2/course/jeju/jeju_club.do",
  "checked": "2026-11-04"
 },
 {
  "name": "핀크스 골프클럽",
  "aliases": [
   "핀크스",
   "핀크스GC",
   "핀크스골프클럽",
   "Pinx Golf Club",
   "The Pinx"
  ],
  "region": "제주 서귀포시 안덕면",
  "nines": [
   {
    "label": "동",
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
    "label": "서",
    "pars": [
     5,
     4,
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
    "label": "북",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지(thepinx.co.kr)는 Vue SPA로 정적 JS에 코스 Par 없음. golfingrecord East/West·West/North 18홀 스코어카드(curl 원문 JSON)와 Golfify East/West/North 9홀 홀정보(curl 원문 JSON)가 27홀 모두 일치. 27홀(3개 코스) 규모는 경북매일 2019 기사로 확인. 한글 라벨 동/서/북은 영문 East/West/North 직역(공식 한글 명칭 미확인). 두 출처가 같은 데이터 공급원을 쓸 가능성은 배제 못 함.",
  "source": "https://www.golfingrecord.com/golf-scorecard/3a112421-4dae-d633-45f6-db330dbb6ccc",
  "checked": "2026-11-04"
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
  "name": "하이스트컨트리클럽",
  "aliases": [
   "하이스트",
   "하이스트CC",
   "하이스트컨트리클럽",
   "Highest CC"
  ],
  "region": "부산 강서구",
  "nines": [
   {
    "label": "9홀",
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
  "notes": "공식 홈페이지 코스안내 페이지 1~9 HOLE 표(BLUE/WHITE/YELLOW/RED·PAR·HDCP) curl 원문 직접 확인, 합 36. 부산 최초 민간 퍼블릭 9홀(앱스토어 소개).",
  "source": "https://www.highestcc.co.kr/course",
  "checked": "2026-11-04"
 },
 {
  "name": "하이원CC",
  "aliases": [
   "하이원",
   "하이원CC",
   "하이원컨트리클럽",
   "High1 CC",
   "High1 Country Club"
  ],
  "region": "강원 정선군",
  "nines": [
   {
    "label": "마운틴",
    "pars": [
     4,
     4,
     4,
     5,
     5,
     3,
     4,
     3,
     4
    ]
   },
   {
    "label": "밸리",
    "pars": [
     4,
     5,
     4,
     4,
     3,
     5,
     3,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 '일반 영업코스' 스코어 표(밸리코스 In Course 37, 마운틴코스 Out Course 36, 총 73) 원문 확인, 홀별 상세 페이지(key=920~928 밸리, 930~938 마운틴)의 PAR와도 일치. 마운틴=OUT(전반), 밸리=IN(후반). 18홀 파73.",
  "source": "https://www.high1.com/golf/contents.do?key=2109",
  "checked": "2026-11-04"
 },
 {
  "name": "한라산컨트리클럽",
  "aliases": [
   "한라산",
   "한라산CC",
   "한라산컨트리클럽",
   "Hallasan CC"
  ],
  "region": "제주 제주시 오등동",
  "nines": [
   {
    "label": "오션",
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
   },
   {
    "label": "마운틴",
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
  "notes": "공식 홈페이지 코스공략 페이지의 홀별 이미지(images/01~18.jpg, 'Ocean Course 1st~9th Hole', 'Mountain Course 10th~18th Hole' Par 표기)를 직접 판독. 각 36. 홈페이지가 오래된 정적 사이트라 현행 운영과 차이 가능성은 있음. 오션=1~9번, 마운틴=10~18번.",
  "source": "http://hallasancc.co.kr/s3.html",
  "checked": "2026-11-04"
 },
 {
  "name": "한림용인컨트리클럽",
  "aliases": [
   "한림용인CC",
   "한림용인",
   "한림용인컨트리클럽",
   "Hanlim Yongin Country Club"
  ],
  "region": "경기 용인시 처인구",
  "nines": [
   {
    "label": "사파이어",
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
    "label": "루비",
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
    "label": "다이아몬드",
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
  "notes": "공식 홈페이지 코스공략 페이지(course02/02_02/02_03.asp) '○○ 코스 HOLE n PAR p HDCP' 원문 curl 직접 확인. 각 36.",
  "source": "https://yongin.hanlimgolf.co.kr/html/course02.asp",
  "checked": "2026-11-04"
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
  "name": "한원컨트리클럽",
  "aliases": [
   "한원CC",
   "한원",
   "한원컨트리클럽",
   "Hanwon Country Club"
  ],
  "region": "경기 용인시 처인구",
  "nines": [
   {
    "label": "고구려",
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
    "label": "백제",
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
    "label": "신라",
    "pars": [
     4,
     5,
     4,
     4,
     4,
     5,
     3,
     4,
     3
    ]
   }
  ],
  "verified": true,
  "notes": "공식 코스소개 Par 표(고구려·백제·신라 각 36) curl 원문 확인 + 코스공략 페이지 홀별 이미지(g_/b_/s_01~09.jpg \"○○ n PAR p\") 27홀 전부 판독 일치. 공략 페이지 HTML 주석에 남은 옛 문구(고구려 8번 Par5)는 현행 표·이미지(8번 Par4, 9번 Par5)와 달라 무시. 소재지 용인시 처인구 남사읍.",
  "source": "http://www.hanwoncc.co.kr/course/course_info.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "한탄강컨트리클럽",
  "aliases": [
   "한탄강",
   "한탄강CC",
   "한탄강컨트리클럽",
   "Hantan River Country Club",
   "Hantan River CC"
  ],
  "region": "강원 철원군 갈말읍",
  "nines": [
   {
    "label": "마운틴",
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
    "label": "밸리",
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
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스정보 VALLEY(m23.php)·MOUNTAIN(m24.php) 홀별 PAR 원문 curl 확인, golfingrecord Mountain-Valley 18홀 스코어카드(전반 마운틴·후반 밸리)와 일치. 귀뚜라미 계열 퍼블릭, 각 36.",
  "source": "https://hantancc.co.kr/m24.php?hole=1",
  "checked": "2026-11-04"
 },
 {
  "name": "함평엘리체컨트리클럽",
  "aliases": [
   "함평 엘리체",
   "함평엘리체",
   "함평엘리체CC",
   "함평 엘리체CC",
   "함평엘리체컨트리클럽",
   "함평다이너스티CC",
   "함평다이너스티",
   "HamPyeong Eliche Country Club"
  ],
  "region": "전남 함평군 학교면",
  "nines": [
   {
    "label": "임페리얼",
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
    "label": "마제스티",
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
    "label": "팰리스",
    "pars": [
     4,
     3,
     5,
     4,
     3,
     4,
     4,
     5,
     4
    ]
   }
  ],
  "verified": true,
  "notes": "공식 홈페이지 코스공략법 페이지 27홀 설명문의 홀별 Par(courseWrap1~3) curl 원문 확인, 코스명은 선택 탭 이미지(Imperial/Majesty/Palace Course) 판독. Golfify Hampyeong Dynasty CC Imperial/Majesty/Palace 홀정보와 27홀 모두 일치. 옛 이름 함평다이너스티(세이브투어·회사소개 연혁: 2005 함평다이너스티 개장 후 9홀 증설). 화순 엘리체CC와 별개. 한글 라벨은 영문 코스명 음역.",
  "source": "http://hpelichecc.co.kr/hampyeong/html/course/course01.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "해내다컨트리클럽",
  "aliases": [
   "인터불고경산",
   "인터불고경산CC",
   "인터불고CC",
   "인터불고 경산",
   "해내다CC",
   "Haenaeda Country Club",
   "Interburgo Gyeongsan CC"
  ],
  "region": "경북 경산",
  "nines": [
   {
    "label": "스카이",
    "pars": [
     4,
     5,
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
    "label": "마운틴",
    "pars": [
     5,
     4,
     3,
     4,
     4,
     4,
     3,
     4,
     6
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
     4,
     4,
     5
    ]
   }
  ],
  "verified": true,
  "notes": "옛 인터불고 경산CC → 현재 해내다CC(같은 주소 경산시 삼성현로 614-26, 공식 도메인 interburgocc.com). 공식 코스제원 표 원문 확인. 마운틴 9번 파6(블랙 790m)로 마운틴 합 37 — 언론·후기(파6 시그니처홀)로 교차확인. 코스별 블랙티 전장(스카이 3,417m/밸리 3,345m)이 기사와 일치해 표-코스 매칭 확인. 원주 인터불고GC(퍼블릭)와 다른 곳.",
  "source": "https://www.interburgocc.com/View/CourseInfo",
  "checked": "2026-11-04"
 },
 {
  "name": "해비치 컨트리클럽 제주",
  "aliases": [
   "해비치 제주",
   "해비치제주",
   "해비치CC 제주",
   "해비치CC제주",
   "해비치 컨트리클럽 제주",
   "Haevichi Country Club Jeju"
  ],
  "region": "제주 서귀포시 남원읍",
  "nines": [
   {
    "label": "레이크",
    "pars": [
     4,
     3,
     5,
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
   },
   {
    "label": "스카이",
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
    "label": "팜",
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
   }
  ],
  "verified": true,
  "notes": "공식 코스가이드(haevichi.com/ccjeju)는 내부 AJAX(pageList.do)로 데이터를 불러와 정적 원문에 Par 없음(우회 미시도). Golfify Lake/Valley/Sky/Palm 홀정보 JSON과 18Birdies 클럽 페이지 내장 데이터(Sky·Palm·Valley·Lake 각 9홀 menPar)가 36홀 모두 일치, 레이크는 GolfPass 스코어카드와도 일치. 36홀 규모는 2026 헤럴드경제 기사, 레이크·밸리 코스명은 스마트투데이 9홀 셀프라운드 기사로 확인. 스카이·팜 한글 표기는 영문 음역. 남양주 해비치CC 서울과 별개.",
  "source": "https://www.golfify.io/courses/haevichi-country-club-jeju-lake",
  "checked": "2026-11-04"
 },
 {
  "name": "해비치CC 서울",
  "aliases": [
   "남양주 해비치",
   "남양주해비치",
   "해비치CC서울",
   "해비치 컨트리클럽 서울",
   "해비치CC 남양주",
   "남양주 해비치CC",
   "Haevichi CC Seoul"
  ],
  "region": "경기 남양주시 화도읍",
  "nines": [
   {
    "label": "OUT",
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
    "label": "IN",
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
   }
  ],
  "verified": true,
  "notes": "공식 코스가이드 OUT/IN COURSE Par 표 원문 직접 확인. 제주 해비치(27홀)와 별개.",
  "source": "https://www.haevichi.com/ccseoul/ko/course-guide/course-map",
  "checked": "2026-11-04"
 },
 {
  "name": "해슬리 나인브릿지",
  "aliases": [
   "해슬리나인브릿지",
   "해슬리 나인브릿지",
   "해슬리나인브릿지CC",
   "해슬리",
   "Haesley Nine Bridges",
   "Haesley Nine Bridges Golf Club"
  ],
  "region": "경기 여주시",
  "nines": [
   {
    "label": "해슬리",
    "pars": [
     4,
     3,
     5,
     4,
     5,
     3,
     4,
     4,
     4
    ]
   },
   {
    "label": "PGA",
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
  "notes": "공식 홈페이지(haesley.com)는 회원 로그인 필요. GolfPass Haesley/PGA 18홀 스코어카드(curl 원문)와 18Birdies 내장 데이터(Haesley 9홀·PGA 9홀 menPar)가 일치. 부분 교차: GOLF.com 2024 Bridges Cup 기사(6번 파3, 15·18번 파4), 2021 후기(해슬리 코스 4·7번 파4), GCI 기사(9번 파4)와도 일치. 해슬리=전반(1~9), PGA=후반(10~18). 제주 클럽 나인브릿지와 별개.",
  "source": "https://www.golfpass.com/courses/38829-haesley-nine-bridges-golf-club-haesley-pga-course/scorecard-and-layout",
  "checked": "2026-11-04"
 },
 {
  "name": "해운대비치 골프앤리조트",
  "aliases": [
   "해운대비치",
   "해운대비치CC",
   "해운대비치골프앤리조트",
   "해운대비치 골프&리조트",
   "Haeundae Beach Golf & Resort"
  ],
  "region": "부산 기장군 기장읍",
  "nines": [
   {
    "label": "마운틴",
    "pars": [
     5,
     4,
     3,
     5,
     4,
     4,
     3,
     4,
     4
    ]
   },
   {
    "label": "오션",
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
  "notes": "공식 홈페이지 코스소개 표(MOUNTAIN COURSE 1~9 OUT 36, OCEAN COURSE 10~18 IN 36, TOTAL 72) curl 원문 직접 확인. 마운틴=OUT, 오션=IN.",
  "source": "http://www.haeundaebeachcc.co.kr/course/course.do",
  "checked": "2026-11-04"
 },
 {
  "name": "해피니스 컨트리클럽 (나주)",
  "aliases": [
   "해피니스",
   "해피니스CC",
   "해피니스 컨트리클럽",
   "Happiness Country Club"
  ],
  "region": "전남 나주",
  "nines": [
   {
    "label": "휴먼",
    "pars": [
     5,
     4,
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
    "label": "해피",
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
    "label": "하트",
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
    "label": "힐링",
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
    "label": "히든",
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
  "notes": "공식 홈페이지 코스소개(course02~course02_05.asp) 홀별 'HOLE n PAR p' 원문 직접 확인. 회원제 18홀(휴먼·해피) + 대중제 27홀(하트·힐링·히든). 히든·힐링은 티픽 표와도 일치.",
  "source": "https://www.happinesscc.com/html/course02.asp",
  "checked": "2026-11-04"
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
  "name": "화성상록 골프클럽",
  "aliases": [
   "화성상록",
   "화성상록CC",
   "화성상록GC",
   "화성상록골프장",
   "Hwaseong Sangnok Golf Club"
  ],
  "region": "경기 화성",
  "nines": [
   {
    "label": "남",
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
    "label": "동",
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
    "label": "서",
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
  "verified": true,
  "notes": "공식(sangnokresort.co.kr M050601)은 남·동·서 각 Par36만 표기, 홀별은 JS 로딩이라 미확인. 남: Golfify 18홀 전반(야드 437/607/164/410=블로그 남코스 400/555/150/375m) + GolfPass South(4 5 3 4 4 3 5 4 4) + zeblee71 블로그 1~4번 일치. 동: Golfify 후반 + Hole19 East 일치. 서: zeblee71 블로그(2020) 9홀 + Hole19 West(야드 372/506/154/337 일치). 남·서 파 배열이 동일함에 주의.",
  "source": "https://www.golfify.io/courses/hwaseong-sangnok-golf-club",
  "checked": "2026-11-04"
 },
 {
  "name": "화순 엘리체 컨트리클럽",
  "aliases": [
   "화순 엘리체",
   "화순엘리체",
   "화순엘리체CC",
   "엘리체CC",
   "남광주CC",
   "남광주컨트리클럽",
   "Hwasun Eliche Country Club"
  ],
  "region": "전남 화순",
  "nines": [
   {
    "label": "남",
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
     4,
     4,
     3,
     4,
     5,
     4,
     3
    ]
   }
  ],
  "verified": true,
  "notes": "공식 전체코스안내(남코스 3,080m·동코스 3,096m) 홀별 거리표 + 코스공략법(course02.asp) PAR 표기가 티픽 OUT/IN 파와 일치. 공식 표에는 파 행이 없어 거리·공략 원문으로 대조. 옛 이름 남광주CC(티픽 '구.남광주').",
  "source": "https://www.elichecc.co.kr/hwasun/html/course/course01.asp",
  "checked": "2026-11-04"
 },
 {
  "name": "휘닉스 컨트리클럽 (평창)",
  "aliases": [
   "휘닉스",
   "휘닉스CC",
   "휘닉스파크CC",
   "휘닉스파크 컨트리클럽",
   "Phoenix Country Club"
  ],
  "region": "강원 평창",
  "nines": [
   {
    "label": "마운틴",
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
    "label": "레이크",
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
   }
  ],
  "verified": true,
  "notes": "후보 중 가장 유명한 평창 휘닉스CC(잭 니클라우스 설계, 회원제 18홀) 선택. 1~9번 마운틴, 10~18번 레이크(티픽 연혁). 티픽 표와 Hole19 Mountain-Lake 카드 홀별 파 일치. 휘닉스 제주 등은 대상 아님. Hole19의 Phoenix Country Club Public(9홀 대중제)은 별도.",
  "source": "https://teepickgolf.com/course/%ED%9C%98%EB%8B%89%EC%8A%A4",
  "checked": "2026-11-04"
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
  "name": "히든밸리 골프클럽 (진천)",
  "aliases": [
   "히든밸리",
   "히든밸리CC",
   "히든밸리GC",
   "히든밸리 골프클럽",
   "Hidden Valley Golf Club"
  ],
  "region": "충북 진천",
  "nines": [
   {
    "label": "히든",
    "pars": [
     4,
     4,
     5,
     4,
     3,
     5,
     3,
     4,
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
     4,
     3,
     5,
     4,
     4
    ]
   },
   {
    "label": "스카이",
    "pars": [
     4,
     4,
     4,
     3,
     5,
     3,
     4,
     5,
     4
    ]
   }
  ],
  "verified": false,
  "notes": "공식(hiddenvalley.co.kr) 403으로 미확인. 히든·밸리: Hole19 Hidden-Valley 카드와 Golfify 18홀(야드·SI 다른 데이터) 파 일치, GolfPass Hidden 9홀도 일치. 스카이: GolfPass Sky Course(Sky/Hidden 카드 전반, 3,371m) 단일 출처라 미검증. 히든 7번 파3가 블랙 226~266yd로 긴 편.",
  "source": "https://www.hole19golf.com/courses/hidden-valley-golf-club",
  "checked": "2026-11-04"
 },
 {
  "name": "힐데스하임 컨트리클럽",
  "aliases": [
   "힐데스하임",
   "힐데스하임CC",
   "힐데스하임 컨트리클럽",
   "Hildesheim Country Club"
  ],
  "region": "충북 음성",
  "nines": [
   {
    "label": "레이크",
    "pars": [
     4,
     3,
     5,
     4,
     3,
     5,
     4,
     4,
     4
    ]
   },
   {
    "label": "힐",
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
    "label": "밸리",
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
  "notes": "티픽 3개 조합표, GolfPass Lake/Hill·Hill/Valley·Valley/Lake 3개 카드, Hole19 Hill-Valley 카드가 모두 일치.",
  "source": "https://teepickgolf.com/course/%ED%9E%90%EB%8D%B0%EC%8A%A4%ED%95%98%EC%9E%84",
  "checked": "2026-11-04"
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
  "name": "SG아름다운 골프&리조트",
  "aliases": [
   "아름다운CC",
   "아름다운",
   "아름다운 골프&리조트",
   "아름다운컨트리클럽",
   "SG아름다운CC"
  ],
  "region": "충남 아산",
  "nines": [
   {
    "label": "힐",
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
    "label": "레이크",
    "pars": [
     4,
     4,
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
    "label": "락",
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
  "notes": "공식 코스개요 표(Par 열)와 홀별 상세 페이지(nHole Parp) 두 곳 모두 일치. 아산 영인면, 27홀 파108.",
  "source": "https://www.arumdaunresort.com/html/course01.asp",
  "checked": "2026-11-04"
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
