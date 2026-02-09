const Snipaste_20211204_211644 = new Proxy({"src":"/assets/Snipaste_2021-12-04_21-16-44.DwQI_I53.png","width":1039,"height":316,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-12-04_21-16-44.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-12-04_21-16-44.png");
							return target[name];
						}
					});

export { Snipaste_20211204_211644 as default };
