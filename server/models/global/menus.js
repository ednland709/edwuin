var MongoHelper = require('../../models/core/mongoHelper');

var table = {};
var obj;

//Obtenemos todos los usuarios
table.get = async function (db, user, tenant) {
    // return MongoHelper.find(db, "menu",{ user: user });

    res = [
        {
            label: 'Datae',
            items: [{
                    label: 'Empresas',
                    icon: 'fa-plus',
                    routerLink: ['/core/dynamics', 'tenants']
                },
                {label: 'login', routerLink: ['/core/login']},
                {label: 'Quit'}
            ]
        },
        {
            label: 'Contabilidad',
            icon: 'fa-edit',
            items: [
                {label: 'Comprobantes', icon: 'fa-mail-forward'},
                {label: 'Lista comprobantes', icon: 'fa-mail-reply'}
            ]
        }
    ];

    return res;
}

module.exports = table;