const webcatalogLocalhostApp = new Proxy({"src":"/assets/webcatalog-localhost-app.CA2cARVS.png","width":1284,"height":1284,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/webcatalog-localhost-app.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/webcatalog-localhost-app.png");
							return target[name];
						}
					});

export { webcatalogLocalhostApp as default };
