const Snipaste_20211103_225505 = new Proxy({"src":"/assets/Snipaste_2021-11-03_22-55-05.Dwf38DMO.png","width":1059,"height":499,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-11-03_22-55-05.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-11-03_22-55-05.png");
							return target[name];
						}
					});

export { Snipaste_20211103_225505 as default };
