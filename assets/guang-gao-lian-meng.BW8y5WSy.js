const guangGaoLianMeng = new Proxy({"src":"/assets/guang-gao-lian-meng.C2nDpYFz.png","width":821,"height":321,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/guang-gao-lian-meng.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/guang-gao-lian-meng.png");
							return target[name];
						}
					});

export { guangGaoLianMeng as default };
