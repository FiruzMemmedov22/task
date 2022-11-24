// const mainDiv=document.getElementById("main");
// const addInp=document.getElementById("addinp");
// const myBtn=document.getElementById("btn");

// myBtn.addEventListener("click", Add);

// // click ile ul li yaratmaq funsiyasi
// function Add(){
//     inputValue=addInp.value;
//     const ul=document.createElement("ul");
//     const li=document.createElement("li");
//      li.innerText=inputValue;

//     const writeButton=document.createElement("button");
//           writeButton.classList.add("btn-write");
//           writeButton.innerHTML=`<i class="fa-solid fa-pen"></i>`;
//     const deletButton=document.createElement("button");
//     deletButton.classList.add("btn-delete")
//           deletButton.innerHTML=`<i class="fa-solid fa-trash-can"></i>`;
//           addInp.value=""

//           li.appendChild(writeButton);
//           li.appendChild(deletButton);
//           ul.appendChild(li);
//           mainDiv.appendChild(ul);
// }

// ============================================
// son yazdigim
// const main = document.getElementById("main");
// const input = document.getElementById("inp");
// const addList = document.querySelector(".add-list");
// const addIcon = document.querySelector(".add-icon");

//      Enter(KeyboardEvent) iventi
// input.addEventListener("keydown", (e) =>{
//   if( e.keyCode===13 ){
//       toDoList();

//   }
// })

//  click iventi ucun
// addIcon.addEventListener("click", toDoList);

//   elave edilen hisse ucun funksiya
// function toDoList() {
// inputValue = input.value;
// const newDiv = document.createElement("div");
// newDiv.classList.add("adds");
// const newInput = document.createElement("input");
// newInput.setAttribute("id", "inps");
// newInput.value = inputValue;

// const changeBtn = document.createElement("button");
// changeBtn.classList.add("change-btn");
// changeBtn.innerHTML = `<i class=" fa-solid fa-pen"></i>`;

// const deleteBtn = document.createElement("button");
// deleteBtn.classList.add("delete-btn");
// deleteBtn.innerHTML = ` <i class=" fa-solid fa-trash-can"></i>`;

// input.value = "";
// newDiv.appendChild(newInput);
// newDiv.appendChild(changeBtn);
// newDiv.appendChild(deleteBtn);
// main.appendChild(newDiv);
//   delete butonu ucn
// deleteBtn.onclick = function () {
//   deleteBtn.parentElement.remove("div");
// };
//  cahange - deyismek butonu ucun
//   changeBtn.onclick = function () {
//     const changeInput = document.createElement("input");
//     changeInput.setAttribute("id", "change-inp");
//     main.appendChild(changeInput)

//     changeInput.onkeydown = function (e) {
//       if (e.keyCode === 13) {
//         newInput.value = changeInput.value;
//         changeInput.value = "";
//         changeInput.remove();
//       }
//     }
//   };
// }

//==============  scroll event  ===================

window.onscroll = function () {
  const aTop = document.getElementById("top");
  if (window.scrollY > 250) {
    aTop.classList.add("show");
  } else {
    aTop.classList.remove("show");
  }
};

// ==========     API START =================

// const getDataBtn = document.getElementById("btn");
// const apiDiv = document.querySelector(".apiDiv");

// getDataBtn.addEventListener("click", () => {
//   fetch("https://picsum.photos/v2/list")
//     .then((postsJson) => postsJson.json())
//     .then((postsArry) =>
//       postsArry.map((item) => {
//         const newDiv = document.createElement("div");
//         newDiv.classList.add("cart");
//         const image = document.createElement("img");
//         image.setAttribute("src", item.download_url);
//         const info = document.createElement("p");
//         info.innerHTML = `${item.author} ${item.id}`;

//         newDiv.appendChild(image);
//         newDiv.appendChild(info);
//         apiDiv.appendChild(newDiv);
//       })
//     );
// });

// ==========================  API startda yazdigim kodun qisa yaziliwi  (fetch ile)   ===================

// const getDataBtn = document.getElementById("btn");
// const apiDiv = document.querySelector(".apiDiv");

// getDataBtn.addEventListener("click", () => {
//   fetch("https://picsum.photos/v2/list")
//     .then((postsJson) => postsJson.json())
//     .then((postsArry) =>
//       postsArry.map((item) => {
//         apiDiv.innerHTML += ` <div class="cart">
//                               <img src=${item.download_url}>
//                               <p>${item.author} ${item.id}</p> </div>`;
//       })
//     );
// });
// ============================ AXIOS  ======================= ===============

const name = document.getElementById("name");
const surname = document.getElementById("surname");
const age = document.getElementById("age");
const sendButton = document.getElementById("sendData");
const getButton = document.getElementById("getData");

// http://localhost:9000//create-data >>>>>>  datani gondermek ucun URL(API)
// http://localhost:9000/get-data    >>>>>>  datani goturmek ucun URL(API)
    
  //  datani API ye gondermek  ucun funcsiya
sendButton.addEventListener("click", function sendData() {
  const user = {
    name: name.value,
    surname: surname.value,
    age: age.value,
  };
  name.value = "";
  surname.value = "";
  age.value = "";
  axios
    .post("http://localhost:9000/create-data", user)
    .then((sendDatas) => {
      console.log(sendDatas);
    })
    .catch((err) => {
      console.log(err);
    });
    location.reload()
});

//  datani API den  kecmek ucun funcsiya
getButton.addEventListener("click", function () {
  const getdata = async () => {
    netice = await axios.get("http://localhost:9000/get-data");
    return netice;
  };
  getdata().then((getDatas) => {
    console.log(getDatas.data);
    getDatas.data.data.map((item) => {
  document.querySelector("div table").innerHTML += 
      ` <table>
 <tr>
    <td>${item.name}</td>
    <td>${item.surname}</td>
    <td>${item.age}</td>
  </tr>
</table>`;
    });
  });
});


