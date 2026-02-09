const bitwardenLogo = new Proxy({"src":"/assets/bitwarden-logo.DHGD-my8.png","width":200,"height":200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/bitwarden-logo.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/bitwarden-logo.png");
							return target[name];
						}
					});

export { bitwardenLogo as default };
