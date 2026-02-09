const AliPayQR = new Proxy({"src":"/assets/AliPayQR.Cr2OjrzN.jpg","width":233,"height":234,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/image/AliPayQR.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/image/AliPayQR.jpg");
							return target[name];
						}
					});

export { AliPayQR as default };
