// let listImageUrl = ["./image/anh1.jpg", "./image/anh2.jpg", "./image/anh3.jpg", "./image/anh4.jpg", "./image/anh5.jpg"];
// let index = 0; // phần tử đang được chọn


// // đổ danh sách sảnh ra
// // lấy ra thẻ chứa danh sách
// let str = "";
// // for i
// for (let i = 0; i < listImageUrl.length; i++) {
//     str = str + `<img src="${listImageUrl[i]}" alt="item">`
// }

// // listImageUrl.forEach((image)=> {
// //     str += `<img src="${image}" alt="item">`
// // });

// // let str = listImageUrl.reduce((string,value)=>string+`<img src="${value}" alt="item">`,"");
// document.querySelector(".list-image").innerHTML = str;
// function showSlider() {
//     let firstImage = listImageUrl[index];
//     // lấy ra thẻ img chính
//     let mainImage = document.getElementById("main-image");
//     mainImage.src = firstImage;

//     // document.getElementById("main-image")= listImageUrl[index];

//     let listImage = document.querySelectorAll(".list-image img");
//     // giảm độ sáng của tất cả phần tử
//     listImage.forEach((img) => {
//         img.style.filter = "brightness(50%)";
//     })
//     // console.log(listImage);
//     listImage[index].style.filter = "brightness(120%)";
// }


// showSlider();

// // chức năng next ảnh
// function changeNextImage() {
//     // thay đổi index thêm 1 đơn vị, nếu nó = length-1 thì quay trỏ về 0
//     // index++;
//     // if(index==listImageUrl.length){
//     //     index=0;
//     // }

//     // cách 2
//     if (index == listImageUrl.length - 1) {
//         index = 0;
//     } else {
//         index++;
//     }
//     showSlider();
// }
// // chức năng lùi ảnh
// function changePrevImage() {
//     // index  từ 1, nếu nó =0 thì gán = length -1
//     if (index == 0) {
//         index = listImageUrl.length - 1;
//     } else {
//         index--
//     }
//     showSlider();
// }

// // trượt mỗi ảnh sau 3s
// let id = setInterval(changeNextImage, 3000);

// // xóa vòng lặp vô hạn
// clearInterval(id);
// // chỉ gọi 1 lần sau 1 khoảng thời gian
// // setTimeout(changePrevImage,5000);


let imgFeature = document.querySelector(".img-feature")
let listImg = document.querySelectorAll(".list-image img")
let prevbtn = document.querySelector(".prev")
let nextbtn = document.querySelector(".next")
let currentIndex = 0;

function updateImageByIndex(index) {
    document.querySelectorAll('.list-image div').forEach(item => {
        item.classList.remove('active')
    })
    currentIndex = index
    imgFeature.src = listImg[index].getAttribute('src');
    listImg[index].parentElement.classList.add('active')
}
listImg.forEach((imgElement, index) => {
    imgElement.addEventListener('click', e => {
        updateImageByIndex(index)

    })
});


nextbtn.addEventListener('click', e => {
    if (currentIndex == 0) {
        currentIndex = listImg.length - 1
    } else {
        currentIndex--
    }
    updateImageByIndex(currentIndex)
})

prevbtn.addEventListener('click', e => {
    if (currentIndex == listImg.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }
    updateImageByIndex(currentIndex)
})


// setInterval(() => {
//     if (currentIndex == listImg.length - 1) {
//         currentIndex = 0
//     } else {
//         currentIndex++
//     }
//     updateImageByIndex(currentIndex)
// }, 2000)
