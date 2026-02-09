const useSshRepo = new Proxy({"src":"/assets/use-ssh-repo.ByV3HkoL.png","width":1352,"height":728,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/use-ssh-repo.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/use-ssh-repo.png");
							return target[name];
						}
					});

export { useSshRepo as default };
