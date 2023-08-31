//interview 파트
$(document).ready(function(){
    $(".inbox li a").click(function(e){
        e.preventDefault(); // 기본 클릭 동작 방지

        var answer = $(this).closest("li").find(".answer"); // 클릭한 링크의 가까운 .answer 요소 찾기

        // 클릭한 .answer 요소를 제외한 다른 형제 .answer 요소의 .on 클래스 제거
        answer.toggleClass("on").siblings(".answer").removeClass("on");
    });
});

// $(document).ready(function(){
//     $(".inbox li a").click(function(e){
//         e.preventDefault();

//         $(this).closest("li").find(".answer").addClass("on")
//             .siblings().removeClass("on");
//     });
// });