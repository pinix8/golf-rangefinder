'use strict';
// 골프장별 코스·홀 파 내장 데이터 (tools/build-par-db.js로 생성 — 직접 수정 시 형식 유지)
// verified=false 항목은 앱에서 「확인 필요」로 표시됨
window.GOLF_PAR_DB = [
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
 }
];
