function toggleByClass(className) {
    $("." + className).toggle(400);
    if (className == 'UN') {
        $(".TCC").hide(400);
    }
    else {
        $(".UN").hide(400);
    }
}
