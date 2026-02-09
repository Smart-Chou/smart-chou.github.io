const copySsh = new Proxy({"src":"/assets/copy-ssh.Dz4E3FZC.png","width":1010,"height":482,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/copy-ssh.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/copy-ssh.png");
							return target[name];
						}
					});

export { copySsh as default };
