// slide

// const all = ele => document.querySelectorAll(ele)
// const one = ele => document.querySelector(ele)
// const slide = _ => {
//   const wrap = one('.slide') // .slide 선택
//   const target = wrap.children[0] // .slide ul 선택
//   const len = target.children.length // .slide li 갯수

//   // .slide ul의 너비 조정
//   target.style.cssText = `width:calc(100% * ${len});display:flex;transition:1s`

//   // .slide li의 너비 조정
//   Array.from(target.children)
//   .forEach(ele => ele.style.cssText = `width:calc(100% / ${len});`)

//   // 화면 전환 실행
//   let pos = 0
//   setInterval(() => {
//     pos = (pos + 1) % len // 장면 선택
//     target.style.marginLeft = `${-pos * 100}%`
//   }, 1500) // 1500 = 1500ms = 1.5sec. 즉, 1.5초 마다 실행
// }
// window.onload = function () {
//   slide()
// }

$(function(){
    $('#slider-div').slick({
        slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
        // infinite : true, 	//무한 반복 옵션	 
        // slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
        // slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
        speed : 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
        dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 5000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        // vertical : false,		// 세로 방향 슬라이드 옵션
        // prevArrow:true,
        // nextArrow: true,
        prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
        nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
        dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
        
        // responsive: [ // 반응형 웹 구현 옵션
        //     {  
        //         breakpoint: 960, //화면 사이즈 960px
        //         settings: {
        //             //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        //             slidesToShow:3 
        //         } 
        //     },
        //     { 
        //         breakpoint: 768, //화면 사이즈 768px
        //         settings: {	
        //             //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        //             slidesToShow:2 
        //         } 
        //     }
        // ]
        dots: true,
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: true

    });
  })