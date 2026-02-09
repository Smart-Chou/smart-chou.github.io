const useopenwrite = new Proxy({"src":"/assets/useopenwrite.HJGLsIyL.png","width":1492,"height":404,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/useopenwrite.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/useopenwrite.png");
							return target[name];
						}
					});

export { useopenwrite as default };
