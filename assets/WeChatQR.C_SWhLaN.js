const WeChatQR = new Proxy({"src":"/assets/WeChatQR.CWx5LGxW.jpg","width":231,"height":231,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/image/WeChatQR.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/image/WeChatQR.jpg");
							return target[name];
						}
					});

export { WeChatQR as default };
