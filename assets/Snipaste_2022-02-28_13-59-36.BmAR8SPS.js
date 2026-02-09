const Snipaste_20220228_135936 = new Proxy({"src":"/assets/Snipaste_2022-02-28_13-59-36.CEvzM1Hd.png","width":1299,"height":700,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2022-02-28_13-59-36.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2022-02-28_13-59-36.png");
							return target[name];
						}
					});

export { Snipaste_20220228_135936 as default };
