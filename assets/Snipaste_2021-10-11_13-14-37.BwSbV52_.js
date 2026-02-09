const Snipaste_20211011_131437 = new Proxy({"src":"/assets/Snipaste_2021-10-11_13-14-37.DVvwQk1T.png","width":348,"height":427,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-10-11_13-14-37.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-10-11_13-14-37.png");
							return target[name];
						}
					});

export { Snipaste_20211011_131437 as default };
