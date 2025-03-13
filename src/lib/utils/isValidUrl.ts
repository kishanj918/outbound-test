export function isValidUrl(url: string) {
	const pattern = new RegExp(
		'^(https?:\\/\\/)?' + // protocol
			'((([a-z0-9](?:[a-z0-9-]*[a-z0-9])?)\\.)+[a-z]{2,}|' + // domain name
			'localhost|' + // localhost
			'\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|' + // IP address
			'\\[?[a-f0-9]*:[a-f0-9:]+\\]?)' + // IPv6
			'(:\\d+)?(\\/[-a-z0-9+&@#\\/%?=~_|!:,.;]*)*' + // port and path
			'$',
		'i'
	); // fragment locator
	return !!pattern.test(url);
}
