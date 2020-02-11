const BIRTHDAY_YEAR = 2000;

function __init() {
    // years(); disabled
    _projects();
}

// setup information years
function years() {
    let date = new Date();
    let currentYear = date.getFullYear() + 1; // Korea Years +1
    let year = currentYear - BIRTHDAY_YEAR + ' Years old';

    $('#information-years').html(year);
}

// setup projects
let projectJSON;
function _projects() {
    let html = '';
    let placeholder =
    '            <div class="project">\n' +
    '                <div class="ph-item">\n' +
    '                    <div class="project-col-12">\n' +
    '                        <div class="project-ph-picture"></div>\n' +
    '                        <div class="project-row">\n' +
    '                            <div class="project-ph-type"></div>\n' +
    '                            <div class="project-col-8 empty"></div>\n' +
    '                            <div class="project-ph-title"></div>\n' +
    '                            <div class="project-ph-sub project-col-6"></div>\n' +
    '                            <div class="project-col-6 empty"></div>\n' +
    '                            <div class="project-ph-sub project-ph-type"></div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>';

    $.getJSON('storage/projects.json', function (projects) {
        projectJSON = projects;
        projects.forEach(function (project, i) {
            html +=
            '<div class="project" id="project_' + i + '" onclick="project(' + i + ')">\n' +
            '                <div class="project-item">\n' +
            '                    <div class="project-col-12">\n' +
            '                        <div class="project-picture">\n' +
            '                            <div style="\n' +
            '                            width: 100%;\n' +
            '                            height: 100%;\n' +
            '                            min-width: 100%;\n' +
            '                            background-size: cover;\n' +
            '                            position: relative;\n' +
            '                            background-image: url(' + '\/static/\images\/projects\/' + project.image + ');\n' +
            '                            background-position: center center;\n' +
            '                            border: none"></div>\n' +
            '                        </div>\n' +
            '                        <div class="project-content">\n' +
            '                            <span class="project-type">' + project.type + '</span>\n' +
            '                            <span class="project-title">' + project.title + '</span>\n' +
            '                            <span class="sub-gray">' + project.which + '</span>\n' +
            '                            <span class="sub-gray">' + project.period + '</span>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>';
        });

        if (projectJSON.length % 2 === 1) {
            html += placeholder;
        }

        $('.project-wrapper').html(html);
    });
}

// get project information (detail)
function project(idx) {
    console.log(projectJSON[idx])
}

$(document).ready(function () {
    __init();
});
