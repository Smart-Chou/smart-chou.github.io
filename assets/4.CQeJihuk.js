const _4 = new Proxy({"src":"/assets/4.Bi_Y_KgJ.png","width":985,"height":673,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/4.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/4.png");
							return target[name];
						}
					});

export { _4 as default };
