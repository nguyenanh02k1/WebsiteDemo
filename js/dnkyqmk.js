function wait() {
    Swal.fire({
        title: "Super Sneaker",
        text: "Chức năng này đang đc xây dựng, vui lòng quay lại sau.",
        icon: "info"
    });
}
function login() {
    var an = document.getElementById("hidemb");
    var ann = document.getElementById("hidembb");
    an.style.display = "none";
    ann.style.display = "none";
    var show = document.getElementById("dangnhap");
    var andk = document.getElementById("dangky");
    var hide = document.getElementById("hidepage");
    var tile = document.getElementById("tl");
    var qmkhauu = document.getElementById("qmk");
    qmkhauu.style.display = "none";
    andk.style.display = "none";
    show.style.display = "block";
    hide.style.display = "none";
    tile.text = "SuperSneaker | Đăng nhập"



}
function register() {
    var an = document.getElementById("hidemb");
    var ann = document.getElementById("hidembb");
    an.style.display = "none";
    ann.style.display = "none";
    var show = document.getElementById("dangky");
    var andn = document.getElementById("dangnhap")
    var hide = document.getElementById("hidepage");
    var tile = document.getElementById("tl");
    var qmkhauu = document.getElementById("qmk");
    qmkhauu.style.display = "none";
    andn.style.display = "none";
    show.style.display = "block";
    hide.style.display = "none";

    tile.text = "SuperSneaker | Đăng ký"
}
function quenmatkhauu() {
    var an = document.getElementById("hidemb");
    var ann = document.getElementById("hidembb");
    an.style.display = "none";
    ann.style.display = "none";
    var show = document.getElementById("dangky");
    var andn = document.getElementById("dangnhap")
    var hide = document.getElementById("hidepage");
    var tile = document.getElementById("tl");
    var qmkhauu = document.getElementById("qmk");
    qmkhauu.style.display = "block";
    andn.style.display = "none";
    show.style.display = "none";
    hide.style.display = "none";
    tile.text = "SuperSneaker | Quên mật khẩu"
}
function show() {
    var hien = document.getElementById("hidemb");
    var hienn = document.getElementById("hidembb");
    hien.style.display = "block";
    hienn.style.display = "block";

}
function dieukhoan() {
    Swal.fire({
        title: "Super Sneaker",
        html: "<p style='text-align: justify;'> 1. Giới thiệu <br> Chào mừng quý khách hàng đến với website chúng tôi. <br> Khi quý khách hàng truy cập vào trang website của chúng tôi có nghĩa là quý khách đồng ý với các điều khoản này. Trang web có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần nào trong Điều khoản mua bán hàng hóa này, vào bất cứ lúc nào. Các thay đổi có hiệu lực ngay khi được đăng trên trang web mà không cần thông báo trước. Và khi quý khách tiếp tục sử dụng trang web, sau khi các thay đổi về Điều khoản này được đăng tải, có nghĩa là quý khách chấp nhận với những thay đổi đó. <br> Quý khách hàng vui lòng kiểm tra thường xuyên để cập nhật những thay đổi của chúng tôi. <br> 2. Hướng dẫn sử dụng website <br> Khi vào web của chúng tôi, khách hàng phải đảm bảo đủ 18 tuổi, hoặc truy cập dưới sự giám sát của cha mẹ hay người giám hộ hợp pháp. Khách hàng đảm bảo có đầy đủ hành vi dân sự để thực hiện các giao dịch mua bán hàng hóa theo quy định hiện hành của pháp luật Việt Nam. <br> Trong suốt quá trình đăng ký, quý khách đồng ý nhận email quảng cáo từ website. Nếu không muốn tiếp tục nhận mail, quý khách có thể từ chối bằng cách nhấp vào đường link ở dưới cùng trong mọi email quảng cáo. <br> 3. Thanh toán an toàn và tiện lợi <br> Người mua có thể tham khảo các phương thức thanh toán sau đây và lựa chọn áp dụng phương thức phù hợp: <br> Cách 1: Thanh toán trực tiếp (người mua nhận hàng tại địa chỉ người bán) <br> Cách 2: Thanh toán sau (COD – giao hàng và thu tiền tận nơi) <br> Cách 3: Thanh toán online qua chuyển khoản. </p>",
        icon: "info",
        showDenyButton: true,
        confirmButtonText: "OK",
    }).then((result) => {
        if (result.isConfirmed) {
            register()
        }
    });
}
function dn() {
    var tk = document.getElementById("taikhoan").value;
    var mk = document.getElementById("matkhau").value;

    if (tk == "admin" && mk == "123456") {
        Swal.fire({
            title: "Super Sneaker",
            text: "Đăng nhập thành công",
            icon: "info",
            showDenyButton: true,
            confirmButtonText: "OK",
        }).then((result) => {
            if (result.isConfirmed) {
                location = "/admin/index.html";

            }
        });
    }
    else if (tk == "user" && mk == "123456") {
        Swal.fire({
            title: "Super Sneaker",
            text: "Đăng nhập thành công",
            icon: "info",
            showDenyButton: true,
            confirmButtonText: "OK",
        }).then((result) => {
            if (result.isConfirmed) {
                location = "/user/index.html";

            }
        });
    }
    else {
        Swal.fire({
            title: "Super Sneaker",
            text: "Tên tài khoản hoặc mật khẩu không chính xác",
            icon: "error",
            showDenyButton: true,
            confirmButtonText: "OK",
        }).then((result) => {
            if (result.isConfirmed) {
               tk.textContent.remove();
            }
        });

    }
}

function cdk(){
   var c = document.getElementById("action");
   c.checked=true;
   if(c.checked==true){
    dk()
   }
}


function dk(){
    Swal.fire({
        title: "Super Sneaker",
        text: "Cảm ơn bạn đã tin tưởng các điều khoản và chính sách của chúng tôi",
        icon: "info",
        showDenyButton: true,
        confirmButtonText: "OK",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Super Sneaker",
                text: "Đăng ký thành công",
                icon: "info",
                showDenyButton: true,
                confirmButtonText: "OK",
            }).then((result) => {
                if (result.isConfirmed) {
                    let timerInterval;
                    Swal.fire({
                        title: "Super Sneaker",
                        html: "Bạn đang được điều hướng tới trang đăng nhập! \n Vui lòng chờ trong <b></b> giây.",
                        icon: "info",
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading();
                            const timer = Swal.getPopup().querySelector("b");
                            timerInterval = setInterval(() => {
                                timer.textContent = `${Swal.getTimerLeft()}`;
                            }, 100);
                        },
                        willClose: () => {
                            clearInterval(timerInterval);
                        }
                    }).then((result) => {
                        //chuyentrang
                        if (result.dismiss === Swal.DismissReason.timer) {

                           login();
                        }
                    });
                      
                }

                
            });
        }
    });    
}

function checkdk() {
    document.getElementById('dkhoan').onclick = function () {
        var check = document.getElementById("action");
        if (!check.checked) {
            Swal.fire({
                title: "Super Sneaker",
                text: "bạn chưa đồng ý với điều khoản & chính sách của chúng tôi",
                icon: "error",
                showDenyButton: true,
                confirmButtonText: "OK",
            }).then((result) => {
                if (result.isConfirmed) {
                    cdk()
                    
                }
            });
        }
    };

}




document.addEventListener('DOMContentLoaded', function () {
    Validator({
        form: '#form-1',
        formGroupSelector: '.form-group',
        errorSelector: '.form-message',
        rules: [
            Validator.isRequired('#fullname', 'Vui lòng nhập họ và tên'),
            Validator.isRequired('#tendn', 'Vui lòng nhập tên tài khoản'),
            Validator.isEmail('#email'),
            Validator.minLength('#password', 6),
            Validator.isRequired('#password_confirmation'),
            Validator.isConfirmed('#password_confirmation', function () {
                return document.querySelector('#form-1 #password').value;
            }, 'Mật khẩu không trùng khớp'),
           

        ],
        onSubmit: function dky () {
            // Call API
           checkdk()
            
        }
    });


    Validator({
        form: '#form-2',
        formGroupSelector: '.form-group',
        errorSelector: '.form-message',
        rules: [
            Validator.isRequired('#taikhoan', 'Vui lòng nhập tài khoản'),


            Validator.minLength('#matkhau', 6),
        ],
        onSubmit: function lgin() {
            dn()
        }
    });


    Validator({
        form: '#form-3',
        formGroupSelector: '.form-group',
        errorSelector: '.form-message',
        rules: [
            Validator.isEmail('#email'),
        ],
        onSubmit: function qmk() {
            wait()
        }
    });


});


// Đối tượng `Validator`
function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm
        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {
        // Khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rules và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Trường hợp submit với javascript
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {

                        switch (input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values;
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    }, {});
                    options.onSubmit(formValues);
                }
                // Trường hợp submit với hành vi mặc định
                else {
                    formElement.submit();
                }
            }
        }

        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function (rule) {

            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function (inputElement) {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            });
        });
    }

}



// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || 'Vui lòng nhập vào trường này'
        }
    };
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email';
        }
    };
}

Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    };
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}

