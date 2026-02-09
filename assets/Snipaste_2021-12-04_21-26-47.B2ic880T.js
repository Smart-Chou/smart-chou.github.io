const Snipaste_20211204_212647 = new Proxy({"src":"/assets/Snipaste_2021-12-04_21-26-47.DXoge9BV.png","width":1030,"height":621,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-12-04_21-26-47.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-12-04_21-26-47.png");
							return target[name];
						}
					});

export { Snipaste_20211204_212647 as default };
