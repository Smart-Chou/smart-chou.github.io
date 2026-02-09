const repositorySetting = new Proxy({"src":"/assets/repository-setting.Mjgw3Msj.png","width":1222,"height":718,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/repository-setting.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/repository-setting.png");
							return target[name];
						}
					});

export { repositorySetting as default };
