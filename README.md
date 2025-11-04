
## 🏆 Riot LCGV(League of Legends Custom Game View) - Front

리그오브레전드의 커스텀 게임 전적 View 사이트

<br/>

## 📖 LCG 프로젝트 : LCGV-FE 소개

LCG 프로젝트는 기존 리그오브레전드 전적 사이트에서 커스텀 게임에 대한 기록 확인이 불가하기에 직접 내가 했던 커스텀 게임들을 기록으로 남기고 전적 사이트처럼 구성하고자 시작하게 되었습니다.

LCG 프로젝트 중 LCGV-FE는 LCGS 동작 완료 후 SUPABASE에 INSERT 된 데이터들을 View 형태로 보여주는 실사용 웹사이트 입니다.
초기엔 간단하게 커스텀 게임마다의 표면적인 전적만 다른 전적 사이트의 UI를 참고하여 보여주는 형태로만 계획을 하고 개발했었지만 틀이 완성된 후 다양한 기능을 넣어 현재까지도 꾸준히 작업을 하고 있습니다.

커스텀 게임은 대게 고정된 소수의 인원으로만 이루어져 게임을 진행하기에 각 플레이어별 데이터를 기반으로 통계를 볼 수 있는 페이지를 구성하였습니다.
해당 페이지에선 플레이어별로 전체 승률, KDA, 상대전적, 챔피언별 승률, 라인별 승률 등을 확인할 수 있습니다.

이외에도 팀을 섞어서 결과 값을 보여주는 기능을 제공하는 페이지, 집계된 데이터를 기반으로 랭킹 시스템, 표면적인 전적 데이터 외에 추가 데이터로 구성된 페이지 등을 구현하였습니다.
또한, 반응형으로 구성하여 모바일에서도 UI가 깨지지 않고 잘 구성되게 작업하였고 AI와 접목하여 플레이어별로 분석 및 평가를 할 수 있는 서비스도 구현하였습니다.

<br/>

## 📅 개발 기간

+ `2024. 12. 15. ~ ing`

<br/>

## 📋 구현 목록

+ SUPABASE 통신 및 데이터 추출 ✅ <br/>
+ League of Legend ddragon API 통신 테스트 ✅ <br/>
+ API 통신을 통한 JSON 데이터 추출 및 분리 작업 ✅ <br/>
+ SUPABASE 데이터와 API 통신 결과 JSON 데이터를 기반으로 전적 UI 구성 ✅ <br/>
+ League of Legend 이미지 CDN 테스트 ✅ <br/>
+ 플레이어 데이터 집계 후 항목별 랭킹 시스템 구성 ✅ <br/>
+ 플레이어 데이터 집계 후 플레이어별 상세 데이터 View 구성 ✅ <br/>
+ 팀 섞기 페이지 추가 구성 ✅ <br/>
+ 사이트 전체 UI 재구성 및 반응형 도입 ✅ <br/>
+ 최신 전적 View와 오래된 전적 리스트 분리 View 도입 ✅ <br/>
+ 기본 데이터외 멀티킬, DPM, GPM 등 데이터 그래프 추가 ✅ <br/>
+ 팀 섞기 항목에 플레이어 자동 입력 추가 ✅ <br/>

<br/>

## 🛠️ 사용 툴, 언어

+ Visual Studio Code
+ NextJS
+ TypeScript
+ SUPABASE
+ Vercel (배포)

<br/>

## 🔗 참고 사이트

+ Vercel - [Vercel Deploy](https://vercel.com/)
+ SUPABASE - [SUPABASE Docs](https://supabase.com/docs/reference/javascript/introduction)
+ DDRAGON - [Riot Data Dragon](https://developer.riotgames.com/docs/lol)
