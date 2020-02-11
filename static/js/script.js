const BIRTHDAY_YEAR = 2000;

function __init() {
    // years(); disabled
    _works();
    _activities();
    _awards();
    _educations();
    _skills();
    _projects();
}

// setup information years
function years() {
    let date = new Date();
    let currentYear = date.getFullYear() + 1; // Korea Years +1
    let year = currentYear - BIRTHDAY_YEAR + ' Years old';

    $('#information-years').html(year);
}

// setup works
function _works() {
    let html = '';

    $.getJSON('storage/works.json', function (works) {
        works.forEach(function (work, i) {
            if (i >= works.length - 1) html += '<div class="career ">\n';
            else html += '<div class="career content-block">\n';

            html +=
            '                <span class="sub-title">' + work.type + '</span>\n' +
            '                <span class="career-name">' + work.company + '</span>\n' +
            '                <span class="sub-gray">' + work.period + '</span>\n' +
            '                <span class="sub-gray">' + work.location + '</span>\n' +
            '            </div>';
        });

        $('.works-wrapper').html(html);
    });
}

// setup activities
function _activities() {
    let html = '';

    $.getJSON('storage/activities.json', function (activities) {
        activities.forEach(function (activity, i) {
            if (i >= activities.length - 1) html += '<div class="career ">\n';
            else html += '<div class="career content-block">\n';

            html +=
            '                <span class="sub-title">' + activity.title + '</span>\n' +
            '                <span class="sub-description">' + activity.description + '</span>\n' +
            '                <span class="career-name">' + activity.which + '</span>\n' +
            '                <span class="sub-gray">' + activity.period + '</span>\n' +
            '                <span class="sub-gray">' + activity.location + '</span>\n' +
            '            </div>';
        });

        $('.activities-wrapper').html(html);
    });
}

// setup awards
function _awards() {
    let html = '';

    $.getJSON('storage/awards.json', function (awards) {
        awards.forEach(function (award, i) {
            if (i >= awards.length - 1) html += '<div class="career ">\n';
            else html += '<div class="career content-block">\n';

            html +=
                '                <span class="sub-title">' + award.title + '</span>\n' +
                '                <span class="sub-description">' + award.description + '</span>\n' +
                '                <span class="sub-gray">' + award.period + '</span>\n' +
                '                <span class="sub-gray">' + award.location + '</span>\n' +
                '            </div>';
        });

        $('.awards-wrapper').html(html);
    });
}

// setup education
function _educations() {
    let html = '';

    $.getJSON('storage/educations.json', function (educations) {
        educations.forEach(function (education, i) {
            if (i >= educations.length - 1) html += '<div class="career ">\n';
            else html += '<div class="career content-block">\n';

            html +=
                '                <span class="sub-title">' + education.school + '</span>\n' +
                '                <span class="career-name">' + education.type + '</span>\n' +
                '                <span class="sub-gray">' + education.period + '</span>\n' +
                '                <span class="sub-gray">' + education.location + '</span>\n' +
                '            </div>';
        });

        $('.educations-wrapper').html(html);
    });
}

// setup skills
function _skills() {
    let html = '';

    $.getJSON('storage/skills.json', function (skills) {
        skills.forEach(function (skill) {
            html +=
            '<div class="skill-card content-block">\n' +
            '            <img alt="skill image" class="skill-image" src="static/images/skills/' + skill.title.toLowerCase() + '.png" />\n' +
            '            <div class="skill-content">\n' +
            '                <span class="skill-title">' + skill.title + '</span>\n' +
            '                <span class="sub-description">' + skill.description + '</span>\n' +
            '            </div>\n' +
            '        </div>';
        });

        $('.skills-wrapper').html(html);
    });
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
