const Snipaste_20211103_225531 = new Proxy({"src":"/assets/Snipaste_2021-11-03_22-55-31.BOssry_A.png","width":952,"height":728,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-11-03_22-55-31.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-11-03_22-55-31.png");
							return target[name];
						}
					});

export { Snipaste_20211103_225531 as default };
