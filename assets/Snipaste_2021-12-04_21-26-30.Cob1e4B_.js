const Snipaste_20211204_212630 = new Proxy({"src":"/assets/Snipaste_2021-12-04_21-26-30.DjU7LiPM.png","width":1022,"height":490,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-12-04_21-26-30.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-12-04_21-26-30.png");
							return target[name];
						}
					});

export { Snipaste_20211204_212630 as default };
