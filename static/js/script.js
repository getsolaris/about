const BIRTHDAY_YEAR = 2000;
const GITHUB_REPO_API = 'http://api.github.com/repos/getsolaris/about';

function __init() {
    // years(); disabled
    _works();
    _activities();
    _awards();
    _educations();
    _skills();
    _projects();
    _footer();
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
    let important = 0;
    let placeholder =
    '            <div id="project-ph" class="project">\n' +
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
            '<div class="project" id="project_' + i + '" onclick="project(' + i + ')"';

            if (project.hasOwnProperty('important')) {
                important++;
                html += 'style="flex-basis: 46.1% !important"';
            }

            html +=
            '>\n' +
            '                <div class="project-item">\n' +
            '                    <div class="project-col-12">\n' +
            '                        <div class="project-picture" id="project-picture_' + i + '">\n' +
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

        if ((projectJSON.length + important) % 2 === 1) {
            html += placeholder;
        }

        $('.project-wrapper').html(html);
    });
}

// get project information (detail)
function project(idx) {
    if ($('#project-overlay_' + idx).length) {
        $('#project-overlay_' + idx).remove();
    } else {
        let project = projectJSON[idx];
        if (! project.description) return;

        let overlay =
        '<div class="project-overlay" id="project-overlay_' + idx + '">' +
        '<span class="project-overlay-content">' + project.description + '</span>';

        // link
        if (project.github.length) {
            overlay += '<a class="information-link" target="_blank" style="color: white" href="' + project.github + '"><svg style="width: 17px; margin-bottom: -.2rem;" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-square" class="svg-inline--fa fa-github-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path></svg> Github</a>';
        }
        overlay += '</div>';

        $('#project-picture_' + idx).append(overlay);
    }
}

function projectPlaceholder() {
    if ($('#project-ph').length) {
        if ($(window).width() <= 950) {
            $('#project-ph').css('display', 'none');
        } else {
            $('#project-ph').css('display', 'inherit');
        }
    }
}

// setup footer
function _footer() {
    let date = new Date();
    let year = date.getFullYear();

    let html = '<span class="sub-title">Copyright &#169; ' + year + ' by Mingeun Kim</span>';

    $('#footer').html(html);

    $.getJSON(GITHUB_REPO_API, function (data) {
        let updatedAt = new Date(data.updated_at);
        updatedAt = moment(updatedAt).format('DD. MMM. YYYY');
        $('#footer').append('<span class="sub-gray">Curriculum Vitae Last Updated on ' + updatedAt + '</span>');
    });
}

$(window).on('resize', function () {
    projectPlaceholder();
});

$(window).on('load', function () {
    projectPlaceholder();
});

$(document).ready(function () {
    __init();
});
