const useThisTemplate = new Proxy({"src":"/assets/use-this-template.D0A0Aons.png","width":1206,"height":394,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/use-this-template.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/use-this-template.png");
							return target[name];
						}
					});

export { useThisTemplate as default };
