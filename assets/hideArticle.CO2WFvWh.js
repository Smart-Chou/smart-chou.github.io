const hideArticle = new Proxy({"src":"/assets/hideArticle.CdUgOCIt.png","width":1909,"height":736,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/hideArticle.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/hideArticle.png");
							return target[name];
						}
					});

export { hideArticle as default };
