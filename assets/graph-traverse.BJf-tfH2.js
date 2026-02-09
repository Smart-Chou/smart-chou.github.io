const graphTraverse = new Proxy({"src":"/assets/graph-traverse.q7wfptlk.png","width":1862,"height":1614,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/graph-traverse.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/graph-traverse.png");
							return target[name];
						}
					});

export { graphTraverse as default };
