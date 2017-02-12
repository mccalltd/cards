env:
	git clean -xdf
	npm install

app:
	node_modules/.bin/webpack

web:
	node_modules/.bin/serve build

watch:
	node_modules/.bin/webpack --watch
