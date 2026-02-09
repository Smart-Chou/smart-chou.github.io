const githubDesktop = new Proxy({"src":"/assets/github-desktop.DQwlhQxa.png","width":1998,"height":1382,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/github-desktop.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/github-desktop.png");
							return target[name];
						}
					});

export { githubDesktop as default };
