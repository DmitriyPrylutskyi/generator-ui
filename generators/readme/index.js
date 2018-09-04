var Generator = require('yeoman-generator');

module.exports = class Readme extends Generator {
    constructor(one, two) {
        super(one, two);
    }

    writing() {
        const name = this.config.get('name');

        this.fs.copyTpl(
            this.templatePath('generator.ejs'),
            this.destinationPath('README.md'),
            {
                title: 'Генератор UI-проекта от Lectrum',
                faviconUrl: './static/favicon/favicon-woodsmoke.svg',
                name,
            },
        );
    }
};