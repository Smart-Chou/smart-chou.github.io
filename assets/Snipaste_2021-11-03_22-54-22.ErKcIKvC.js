const Snipaste_20211103_225422 = new Proxy({"src":"/assets/Snipaste_2021-11-03_22-54-22.CvczZ_eZ.png","width":718,"height":344,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-11-03_22-54-22.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-11-03_22-54-22.png");
							return target[name];
						}
					});

export { Snipaste_20211103_225422 as default };
