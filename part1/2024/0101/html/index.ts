let 제목 = document.querySelector("#title");

if (제목 != null) {
    제목.innerHTML = "반가워요";
}

if (제목 instanceof Element) {
    제목.innerHTML = "반가워요";
}

// let 제목 = document.querySelector("#title") as Element;
제목.innerHTML = "방가방가";

if (제목?.innerHTML != undefined) {
    제목.innerHTML = "진짜루 반가워어~";
}

let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.com";
}

let 버튼 = document.querySelector("#button");
버튼?.addEventListener("click", function () {
    console.log("안녕");
});

let 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
    이미지.src = "new.jpg";
}

let 숙제링크 = document.querySelectorAll(".naver");

for (let i = 0; i < 3; i++) {
    let a = 숙제링크[i];
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
}
