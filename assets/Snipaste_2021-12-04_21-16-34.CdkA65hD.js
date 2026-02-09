const Snipaste_20211204_211634 = new Proxy({"src":"/assets/Snipaste_2021-12-04_21-16-34.C86DsGo8.png","width":1019,"height":343,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-12-04_21-16-34.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-12-04_21-16-34.png");
							return target[name];
						}
					});

export { Snipaste_20211204_211634 as default };
