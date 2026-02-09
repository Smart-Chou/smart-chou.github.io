const allowUacTiddlywikiChinese = new Proxy({"src":"/assets/allow-uac-tiddlywiki-chinese.BvNVoZXh.png","width":918,"height":642,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/allow-uac-tiddlywiki-chinese.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/allow-uac-tiddlywiki-chinese.png");
							return target[name];
						}
					});

export { allowUacTiddlywikiChinese as default };
