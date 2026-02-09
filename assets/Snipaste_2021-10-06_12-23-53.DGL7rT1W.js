const Snipaste_20211006_122353 = new Proxy({"src":"/assets/Snipaste_2021-10-06_12-23-53.DRDnYFV4.png","width":445,"height":132,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-10-06_12-23-53.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-10-06_12-23-53.png");
							return target[name];
						}
					});

export { Snipaste_20211006_122353 as default };
