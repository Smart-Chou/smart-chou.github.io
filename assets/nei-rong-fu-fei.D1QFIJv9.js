const neiRongFuFei = new Proxy({"src":"/assets/nei-rong-fu-fei.BvItxuG7.png","width":821,"height":321,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/nei-rong-fu-fei.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/nei-rong-fu-fei.png");
							return target[name];
						}
					});

export { neiRongFuFei as default };
