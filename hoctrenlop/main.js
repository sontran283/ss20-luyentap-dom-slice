let thead = [
    {
        id: 1,
        name: "li",
    },
    {
        id: 2,
        name: "li",
    },
    {
        id: 3,
        name: "li",
    },
    {
        id: 4,
        name: "li",
    },
    {
        id: 5,
        name: "li",
    },
    {
        id: 6,
        name: "li"
    }
]


//  thay đổi bảng trong html, hiển thị ra giao diện  (READ)
//  thay đổi bảng trong html, hiển thị ra giao diện  (READ)
function changeTable() {
    let string = "";
    for (i = 0; i < thead.length; i++) {
        string = string + ` <tr>
                <td>${i + 1}</td>
                <td>${thead[i].name}</td>
                <td>
                    <button>edit</button>
                </td>
                <td>
                    <button onclick="deletecatagory(${thead[i].id})">delete</button>
                </td>
            </tr>`
    }
    document.getElementById("tbody").innerHTML = string;  // chèn vào trang html 
}
changeTable()


//  logic id tự tăng
//  logic id tự tăng
function idtutang() {
    let idmax = 0;  // gán cho giá trị ban đầu bằng 0
    for (i = 0; i < thead.length; i++) {
        if (idmax < thead[i]) {
            thead[i] = idmax;
        }
    }
    return idmax++;
}


// chức năng thêm mới một sản phẩm   (Create)
// chức năng thêm mới một sản phẩm   (Create)
function addProduct() {
    let newtext = document.getElementById("text").value;
    let newid = idtutang();
    let newaddProduct = {
        id: newid,
        name: newtext
    }
    thead.push(newaddProduct);
    document.getElementById("text").value = "";  // sau khi thêm xong, thì để lại khoảng trắng trong ô add
    changeTable();  // sau khi thêm mới thì cập nhật được lại giao diện
}


// chức năng xóa   (Delete)
// chức năng xóa   (Delete)
function deletecatagory(iddelete) {
    if (confirm("bạn có chăc chắn muốn xóa không ?")) {
        let indexDelete = thead.findIndex((deleteproduct) => deleteproduct.id = iddelete)  // lay ra duoc id can xoa
        thead.splice(indexDelete, 1); // xóa theo splice
        changeTable();  // cập nhật giao diện
    }
}


// chức năng sửa và cập nhật lại
// chức năng sửa và cập nhật lại
// phần 1: lấy toàn bộ thông tin của danh mục cần sửa
function getCategoryByid(id) { // lấy ra id 
    let indexEdit = categories.findIndex((cat) => cat.id == id);
    // lấy đối tượng cần sửa
    let categoryEdit = categories[indexEdit];
    // đổ dũ liệu cuar đối tượng cần sửa ra form
    document.getElementById("category_id").value = categoryEdit.id;
    document.getElementById("category_name_edit").value = categoryEdit.name;
    document.getElementById("description_edit").value = categoryEdit.descriptions;
    document.getElementById("createdDate").value = categoryEdit.createdDate;
}

// phần 2  : cập nhật lại thông tin sau khi chỉnh sửa .
function updateCategory() {
    // lấy được nội dung ô input 
    let updateName = document.getElementById("category_name_edit").value;
    let updateDescriptions = document.getElementById("description_edit").value;
    let idEdit = document.getElementById("category_id").value;
    let createdDate = new Date().toLocaleDateString();
    //  lấy ra vị trí cần sửa
    let updateIndex = categories.findIndex((cat) => cat.id == idEdit);
    // tiến hành sửa
    categories[updateIndex] = {
        id: idEdit,
        name: updateName,
        descriptions: updateDescriptions,
        createdDate: createdDate
    }
    // cập nhật lại giao diện
    changeTable();
}

