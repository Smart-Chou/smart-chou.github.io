const Snipaste_20211204_211802 = new Proxy({"src":"/assets/Snipaste_2021-12-04_21-18-02.B5_ywpBk.png","width":1028,"height":258,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-12-04_21-18-02.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/Snipaste_2021-12-04_21-18-02.png");
							return target[name];
						}
					});

export { Snipaste_20211204_211802 as default };
