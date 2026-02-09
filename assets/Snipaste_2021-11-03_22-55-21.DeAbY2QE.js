const Snipaste_20211103_225521 = new Proxy({"src":"/assets/Snipaste_2021-11-03_22-55-21.BOx2ptu1.png","width":901,"height":689,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-11-03_22-55-21.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-11-03_22-55-21.png");
							return target[name];
						}
					});

export { Snipaste_20211103_225521 as default };
