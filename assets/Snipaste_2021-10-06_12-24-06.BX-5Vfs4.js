const Snipaste_20211006_122406 = new Proxy({"src":"/assets/Snipaste_2021-10-06_12-24-06.CwkeOpUH.png","width":485,"height":127,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-10-06_12-24-06.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-10-06_12-24-06.png");
							return target[name];
						}
					});

export { Snipaste_20211006_122406 as default };
