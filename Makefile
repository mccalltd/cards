env:
	git clean -xdf
	npm install

app:
	node_modules/.bin/webpack

http:
	node_modules/.bin/serve build
