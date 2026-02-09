const Snipaste_20211204_211814 = new Proxy({"src":"/assets/Snipaste_2021-12-04_21-18-14.QWTtAH2a.png","width":1029,"height":136,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-12-04_21-18-14.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-12-04_21-18-14.png");
							return target[name];
						}
					});

export { Snipaste_20211204_211814 as default };
