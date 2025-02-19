<template>
  <div class="page-header">
    <div class="page-header-wrapper">
      <div class="page-header-title">
        <h1>About us</h1>
        <span
          >평안건설은 건설 기획, 설계, 시공, 사후관리까지<br />
          믿고 맡길 수 있는 종합건설회사입니다.
        </span>
      </div>
    </div>
  </div>

  <nav class="lnb">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <h1 class="visually-hidden">About us 메뉴</h1>
          <ul class="lnb-list">
            <li class="lnb-item" @click="currentTab = 0" :class="{ active: currentTab == 0 }">
              <a @click="step = 0">회사소개</a>
            </li>
            <li class="lnb-item" @click="currentTab = 1" :class="{ active: currentTab == 1 }">
              <a @click="step = 1">인사말</a>
            </li>
            <li class="lnb-item" @click="currentTab = 2" :class="{ active: currentTab == 2 }">
              <a @click="step = 2">보유면허 현황</a>
            </li>
            <li class="lnb-item" @click="currentTab = 3" :class="{ active: currentTab == 3 }">
              <a @click="step = 3">CI/BI</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <!-- <div v-if="step == 0">회사소개 내용</div>
  <div v-if="step == 1">인사말 내용</div>
  <div v-if="step == 2">보유면허 현황 내용</div>
  <div v-if="step == 3">CI/BI 내용</div> -->

  <main class="company" v-if="step == 0">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="company-image">
            <img src="../assets/images/sources/company_image.png" />
          </div>
          <h2>" 건축은 생명입니다. "</h2>
          <p>
            신축, 리모델링, 개인 건축, 기업 건축, 공공 건축 등 <br />
            모든 건축은 우리가 살아갈 터전을 특성과 목적에 맞게 설계하여,
            <br />
            하나의 생명처럼 탄생시키는 일입니다.<br /><br />

            평안건설은 건축주와 설계사, 시공사가 하나되어 <br />
            최선의 터전을 만들기 위해, 듣는 마음을 잃지 않겠습니다. <br />
            또, 저희의 소임이 끝난 후에도 생명이 잘 자라고 있는지<br />
            관심을 놓지 않겠습니다.<br /><br />

            이 땅에 더 많은 생명을 품고 탄생시키는 일을 위해, <br />
            '한 영혼이 천하 보다 귀하다' 말씀하시는 하나님을 알고, <br />
            늘 온전한 마음과 기쁜 뜻으로 섬기겠습니다.
          </p>
        </div>
      </div>
    </div>
  </main>

  <main class="greeting" v-if="step == 1">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="greeting-content">
            <p>
              정보화, 세계화, 대기업화로 빠르게 변해가는 21세기 기업환경!<br /><br />
              어제의 최고 기업이 반드시 오늘의 최고 기업이 되는 것이 아니며,<br />
              어제의 획기적인 아이디어가 오늘의 감동으로 이루어지는 것은 아닙니다.<br />
              고객을 감동시키는 새로운 발상으로 더 큰 미래에 끊임없이 도전하고,<br />
              새로운 아이디어를 내놓지 못한다면 도태되고 마는 것이 기업의 현실입니다.<br /><br />
              오늘, 저희 평안건설이 도약할 수 있었던 발판은<br />
              기업이 성장할 수 있는 창조적인 가치에 묵묵히 밑거름을 주고,<br />
              미래에 대비하는 기반을 구축해온 저력에 있다고 생각합니다.<br /><br />
              그동안 평안건설은 진정한 품질경영 시대를 열었으며,<br />
              건설 기획에서 설계, 시공, 사후관리에 이르기까지 종합적으로 수행할 수 있는<br />
              건설서비스 회사로 성장해 나가고 있습니다.<br /><br />
              이제 대한민국의 주목받는 기업으로의 도약과 함께,<br />
              신뢰와 믿음을 드리기 위한 성실하고 튼튼한 기업으로 더 큰 미래를 향해 나가겠습니다.
            </p>

            <div class="greeting-signiture-wrapper">
              <span>평안건설(주) 사장</span>
              <img class="greeting-signiture" src="../assets/images/sources/greeting_signature.png" />
            </div>
          </div>
        </div>

        <!-- <div class="col-sm-4 col-md-5 col-lg-5">
          <img class="greeting-image" src="../assets/images/sources/sample.jpg" />
        </div> -->
      </div>
    </div>
  </main>

  <main class="licenses" v-if="step == 2">
    <div class="container">
      <div class="row">
        <div class="col-sm-2 col-md-3 col-lg-3">
          <div class="licenses-frame">
            <h6>사업자등록증</h6>
            <img src="../assets/images/sources/certifications_cert1.jpg" />
          </div>
        </div>
        <div class="col-sm-2 col-md-3 col-lg-3">
          <div class="licenses-frame">
            <h6>건설업등록증(앞)</h6>
            <img src="../assets/images/sources/certifications_cert2.jpg" />
          </div>
        </div>
        <div class="col-sm-2 col-md-3 col-lg-3">
          <div class="licenses-frame">
            <h6>건설업등록증(뒤)</h6>
            <img src="../assets/images/sources/certifications_cert3.jpg" />
          </div>
        </div>
        <div class="col-sm-2 col-md-3 col-lg-3">
          <div class="licenses-frame">
            <h6>건설업등록수첩</h6>
            <img src="../assets/images/sources/certifications_cert4.jpg" />
          </div>
        </div>
      </div>
    </div>
  </main>

  <main class="cibi" v-if="step == 3">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <h1>브랜드 가이드라인</h1>

          <div class="cibi-text">
            <h3>디자인 소개</h3>
            <p>
              평안건설의 심볼은 하나님의 손과 빌딩 실루엣을 형상화한 것이며, 하나님의 손으로 세워지는 건축을 의미합니다.
            </p>
          </div>

          <div class="cibi-concept">
            <img class="cibi-concept-image" src="../assets/images/sources/ci_introduce.png" />
            <span
              >내게 주신 하나님의 은혜에 따라 내가 지혜로운 건축자와 같이 터를 닦아두매<br />
              다른 이가 그 위에 세우나 그러나 각각 어떻게 그 위에 세울까를 조심할지니라<br />
              이 닦아 둔 것 외에 능히 다른 터를 닦아 둘 자가 없으니 이 터는 곧 예수 그리스도라<br />
              - 고린도전서 3:10-11</span
            >
          </div>

          <div class="cibi-text">
            <h3>가로형 조합 / 세로형 조합</h3>
            <p>
              가로형 조합 사용을 기본 원칙으로 하며, 가로형을 쓰기에 부적절한 조건일 경우에 한하여 세로형 조합을 사용할
              수 있습니다.
            </p>
          </div>

          <div class="cibi-images">
            <img src="../assets/images/sources/ci_horizontal.jpg" />
            <img src="../assets/images/sources/ci_vertical.jpg" />
          </div>

          <div class="cibi-text">
            <h3>배경에 따른 로고 선택</h3>
            <p>
              배경이 밝은 경우는 기본 로고를 사용하고. 어두운 배경에는 아이콘의 Black을 Dark Grey로 대체하고, 텍스트는
              White를 사용합니다.
            </p>
          </div>

          <div class="cibi-images">
            <img src="../assets/images/sources/ci_dark.jpg" />
            <img src="../assets/images/sources/ci_light.jpg" />
          </div>

          <div class="cibi-text">
            <h3>최소 여백 영역</h3>
            <p>
              최소 여백 영역의 폭은 아이콘 가로 너비의 절반(x로 표기됨)입니다. 해당 영역 안으로 다른 개체가 침범하지
              않도록 합니다.
            </p>
          </div>

          <div class="cibi-image">
            <img src="../assets/images/sources/ci_spacing.jpg" />
          </div>

          <div class="cibi-text">
            <h3>브랜드 컬러</h3>
            <p>로고에는 아래의 색상들만 사용 가능합니다.</p>
          </div>

          <div class="cibi-color">
            <div class="cibi-color-card">
              <div class="color-gold"></div>
              <h4>Pyung-An Gold</h4>
              <span
                >HEX: #C2AB92<br />
                RGB: 194, 171, 146<br />
                CMYK: 0, 12, 25, 24</span
              >
            </div>

            <div class="cibi-color-card">
              <div class="color-black"></div>
              <h4>Black</h4>
              <span
                >HEX: #191919<br />
                RGB: 25, 25, 25<br />
                CMYK: 60, 40, 40, 100</span
              >
            </div>

            <div class="cibi-color-card">
              <div class="color-darkgrey"></div>
              <h4>Dark Grey</h4>
              <span
                >HEX: #545454<br />
                RGB: 84, 84, 84<br />
                CMYK: 72, 65, 62, 17</span
              >
            </div>

            <div class="cibi-color-card">
              <div class="color-white"></div>
              <h4>White</h4>
              <span
                >HEX: #FFFFFF<br />
                RGB: 255, 255, 255<br />
                CMYK: 0, 0, 0, 0</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      step: 0,
      currentTab: 0,
    };
  },
};
</script>

<style></style>
