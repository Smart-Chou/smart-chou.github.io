const Snipaste_20211103_225458 = new Proxy({"src":"/assets/Snipaste_2021-11-03_22-54-58.D4ozQKpq.png","width":694,"height":796,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-11-03_22-54-58.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-11-03_22-54-58.png");
							return target[name];
						}
					});

export { Snipaste_20211103_225458 as default };
