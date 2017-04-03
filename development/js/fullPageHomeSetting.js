$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['home', 'projects'],
        sectionsColor: ['#ccc', '#000', '#555', '#212121'],
        scrollingSpeed: 600
    });
    $('.scrool-down').click(function() {
        $.fn.fullpage.moveSectionDown();
    });
    $('.btn-projects').click(function() {
        $.fn.fullpage.moveSectionDown();
    });
});