const bingBg = new Proxy({"src":"/assets/bing-bg.D9ZZO-1w.jpg","width":1920,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/bing-bg.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/bing-bg.jpg");
							return target[name];
						}
					});

export { bingBg as default };
