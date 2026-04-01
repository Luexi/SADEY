export function withBase(path: string, basePath = '/SADEY') {
	if (!path) {
		return basePath;
	}

	if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('mailto:') || path.startsWith('tel:')) {
		return path;
	}

	const normalizedBase = basePath === '/' ? '' : basePath.replace(/\/$/, '');

	if (path.startsWith('#')) {
		return `${normalizedBase}/${path}`;
	}

	return `${normalizedBase}${path.startsWith('/') ? path : `/${path}`}`;
}
