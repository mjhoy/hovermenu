.PHONY: all docs clean

all: docs

docs: docs/jquery.hovermenu.js docs/hovermenu.css docs/sample.css docs/hovermenu.scss

docs/jquery.hovermenu.js: js/jquery.hovermenu.js
	cp js/jquery.hovermenu.js docs/jquery.hovermenu.js

docs/hovermenu.scss: sass/hovermenu.scss
	cp sass/hovermenu.scss docs/hovermenu.scss

docs/hovermenu.css: css/hovermenu.css
	cp css/hovermenu.css docs/hovermenu.css

docs/sample.css: css/sample.css
	cp css/sample.css docs/sample.css

css/sample.css: sass/sample.scss
	compass compile .

css/hovermenu.css: sass/hovermenu.scss
	compass compile .

clean:
	rm -f docs/jquery.hovermenu.js
	rm -f docs/hovermenu.css
	rm -f docs/sample.css
	rm -f css/hovermenu.css
	rm -f css/sample.css
