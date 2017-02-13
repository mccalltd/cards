env:
	git clean -xdf
	npm install

app:
	node_modules/.bin/webpack --watch

app-once:
	node_modules/.bin/webpack

localhost:
	node_modules/.bin/serve build
