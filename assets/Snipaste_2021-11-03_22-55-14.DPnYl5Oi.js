const Snipaste_20211103_225514 = new Proxy({"src":"/assets/Snipaste_2021-11-03_22-55-14.Bud8cPHc.png","width":748,"height":482,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-11-03_22-55-14.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-11-03_22-55-14.png");
							return target[name];
						}
					});

export { Snipaste_20211103_225514 as default };
