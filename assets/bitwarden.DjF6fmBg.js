const bitwarden = new Proxy({"src":"/assets/bitwarden.CgIzzXac.png","width":1920,"height":600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/coverimage/bitwarden.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/coverimage/bitwarden.png");
							return target[name];
						}
					});

export { bitwarden as default };
