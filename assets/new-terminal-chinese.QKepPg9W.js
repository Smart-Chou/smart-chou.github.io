const newTerminalChinese = new Proxy({"src":"/assets/new-terminal-chinese.-yKtDvXh.png","width":2522,"height":886,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/new-terminal-chinese.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/new-terminal-chinese.png");
							return target[name];
						}
					});

export { newTerminalChinese as default };
