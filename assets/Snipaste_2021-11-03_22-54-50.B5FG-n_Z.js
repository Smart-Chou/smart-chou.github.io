const Snipaste_20211103_225450 = new Proxy({"src":"/assets/Snipaste_2021-11-03_22-54-50.DpPTfSnj.png","width":540,"height":578,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-11-03_22-54-50.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-11-03_22-54-50.png");
							return target[name];
						}
					});

export { Snipaste_20211103_225450 as default };
