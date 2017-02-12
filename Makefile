env:
	git clean -xdf
	npm install

app:
	rm -rf build
	mkdir build
	node_modules/.bin/webpack
	cp static/index.html build/
	mkdir build/styles
	sass static/styles/index.scss build/styles/index.css
	mkdir build/vendor
	cp node_modules/react/dist/react.js build/vendor/react.js
	cp node_modules/react-dom/dist/react-dom.js build/vendor/react-dom.js

localhost:
	node_modules/.bin/serve build
