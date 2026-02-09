const zaiXianPeiXun = new Proxy({"src":"/assets/zai-xian-pei-xun.DutpXVHA.png","width":821,"height":321,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/zai-xian-pei-xun.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/zai-xian-pei-xun.png");
							return target[name];
						}
					});

export { zaiXianPeiXun as default };
