$(".btn").on("click", () => {
    if ($(".first-name-form").val() == "" && $(".last-name-form").val() == "" && $(".email-form").val() == "" && $(".password-form").val() == "") {
        $(".error-text").show();
    } else if ($(".first-name-form").val() == "") {
        $(".first-name-error").show();
    } else if ($(".last-name-form").val() == "") {
        $(".last-name-error").show();
    } else if ($(".email-form").val() == "") {
        $(".email-error").show();
    } else if ($(".password-form").val() == "") {
        $(".password-error").show();
    } else {
        alert("Free trial claimed!")
    }
})
