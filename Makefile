.PHONY: build print print-docker

build:
	yarn build

print: build
	yarn print

print-docker: build
	docker container run -it --rm \
  -v $(CURDIR):/usr/src/app \
  -v $(CURDIR)/fonts:/home/chrome/.fonts:ro \
  zenika/alpine-chrome --no-sandbox --print-to-pdf --hide-scrollbars --print-to-pdf=cv-docker.pdf cv.html
