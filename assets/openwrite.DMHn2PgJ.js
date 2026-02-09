const openwrite = new Proxy({"src":"/assets/openwrite.BJK0LuOl.png","width":1480,"height":806,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/openwrite.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/openwrite.png");
							return target[name];
						}
					});

export { openwrite as default };
