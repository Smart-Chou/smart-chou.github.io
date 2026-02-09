const lianMengYingXiao = new Proxy({"src":"/assets/lian-meng-ying-xiao.BZu5eNnf.png","width":821,"height":321,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/zcblog/zcblog/public/assets/note/lian-meng-ying-xiao.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/runner/work/zcblog/zcblog/public/assets/note/lian-meng-ying-xiao.png");
							return target[name];
						}
					});

export { lianMengYingXiao as default };
