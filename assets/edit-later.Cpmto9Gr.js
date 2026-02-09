const editLater = new Proxy({"src":"/assets/edit-later.CW6weBJi.png","width":782,"height":434,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/edit-later.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/edit-later.png");
							return target[name];
						}
					});

export { editLater as default };
