# portfolio_1

url: http://jeremiah91.dothome.co.kr/ypbooks/
<p> <strong>term :</strong> 2020. 07. 03 ~ 2020. 07. 22 </p>


### 1. introduction

- 영풍문고 메인 페이지 renewal


### 2. 선정 이유 :
<ul>
<li>메인 홈페이지의 header 와 main banner 부분 포함 주요 기능들을<br> flash player를 통해서만 확인 가능했음 (당시 2020.06.22 기준, 현재 해당 사이트는 리뉴얼됨 https://www.ypbooks.co.kr/kor_index.yp) </li>
<li>메인 메뉴바에서 카테고리를 한곳에 작은 글씨로 몰아넣고, 정작 메뉴바에는 분류 기능이 너무 적게 배치되어있음.<br>한정적인 공간을 효과적으로 사용하지 못하고 있다고 생각함. </li>
<li>contents 영역에서 각 div를 한눈에 보기 쉽게 나누는 contrast가 필요함. </li>
<li>전체적으로 톤앤 매너가 정해져있지 않으며, 내용물들의 배치가 답답하게 느껴짐. </li>
</ul>

![영풍문고_flash](https://user-images.githubusercontent.com/74491172/113983771-49227780-9885-11eb-9e08-e07f57e2300c.jpg)

### 3. 문제점 :
- 반복되는 HTML 요소들이 그대로 마크업에 반영되어 있음 (로딩 속도 저하)
- top 10 section에서 li 의 width가 책마다 다르며, hover 시 펼쳐지는 ui를 만들었는데, <br>navigation 버튼으로 넘길 때 width 값을 어떻게 측정해야할지?
