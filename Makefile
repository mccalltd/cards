env:
	git clean -xdf
	npm install

app:
	node_modules/.bin/webpack --watch

app-once:
	node_modules/.bin/webpack

sass:
	sass static/styles/index.scss:build/index.css --watch

localhost:
	node_modules/.bin/serve build
