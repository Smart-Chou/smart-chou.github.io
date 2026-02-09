const allowNodeJsAccessFs = new Proxy({"src":"/assets/allow-node-js-access-fs.8xn21CY9.png","width":1384,"height":1184,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/allow-node-js-access-fs.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/allow-node-js-access-fs.png");
							return target[name];
						}
					});

export { allowNodeJsAccessFs as default };
