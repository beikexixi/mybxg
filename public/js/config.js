require.config({
    baseUrl: '/public/assets',
    paths: {
        jquery: 'jquery/jquery',
        cookie: 'jquery-cookie/jquery.cookie',
        common: '../js/common',
        login: '../js/login',
        util: '../js/util',
        template: 'artTemplate/template-web',
        teacherlist: '../js/teacher_list',
        teacherAdd: '../js/teacher_add',
        bootstrap: 'bootstrap/js/bootstrap',
        datepicker: 'bootstrap-datepicker/js/bootstrap-datepicker',
        language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        validate: 'validate/jquery-validate',
        form: 'jquery-form/jquery.form',
        uploadify: 'uploadify/jquery.uploadify',
        settings: '../js/settings',
        region: 'jquery-region/jquery.region'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        language: {
            deps: ['jquery','datepicker']
        },
        validate: {
            deps: ['jquery']
        },
        uploadify: {
            deps: ['jquery']
        }
    }
});