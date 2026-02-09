const _44 = new Proxy({"src":"/assets/44.C1nAEGSA.jpg","width":5760,"height":3840,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/44.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/44.jpg");
							return target[name];
						}
					});

export { _44 as default };
