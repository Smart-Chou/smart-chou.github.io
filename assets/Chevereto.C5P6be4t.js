const Chevereto = new Proxy({"src":"/assets/Chevereto.gun31uKa.png","width":541,"height":369,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/Chevereto.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/Chevereto.png");
							return target[name];
						}
					});

export { Chevereto as default };
