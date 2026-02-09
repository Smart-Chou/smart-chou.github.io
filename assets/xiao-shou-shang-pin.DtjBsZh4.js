const xiaoShouShangPin = new Proxy({"src":"/assets/xiao-shou-shang-pin.CPF45YfE.png","width":821,"height":321,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/xiao-shou-shang-pin.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/xiao-shou-shang-pin.png");
							return target[name];
						}
					});

export { xiaoShouShangPin as default };
