// fetch with upload progress support
// ref: https://github.com/jaydenseric/apollo-upload-client/issues/88

const parseHeaders = (rawHeaders: string): Headers => {
	const headers = new Headers();
	// Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
	// https://tools.ietf.org/html/rfc7230#section-3.2
	const preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
	preProcessedHeaders.split(/\r?\n/).forEach((line: string) => {
		const parts = line.split(":");
		const key = parts.shift()?.trim();
		if (key) {
			const value = parts.join(":").trim();
			headers.append(key, value);
		}
	});
	return headers;
};

type OnloadOptions = {
	status: number;
	statusText: string;
	headers: Headers;
} & Record<string, any>;

type AbortHandler = XMLHttpRequest["abort"];

type CustomFetchOptions = RequestInit & {
	useUpload: boolean;
	onProgress?: (ev: ProgressEvent) => void;
	onAbortPossible?: (abortHandler: AbortHandler) => void;
};

export const uploadFetch = (
	url: URL | RequestInfo,
	options: CustomFetchOptions,
): Promise<Response> =>
	new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.onload = () => {
			const opts: OnloadOptions = {
				status: xhr.status,
				statusText: xhr.statusText,
				headers: parseHeaders(xhr.getAllResponseHeaders() || ""),
			};
			opts.url =
				"responseURL" in xhr
					? xhr.responseURL
					: opts.headers.get("X-Request-URL");
			const body = "response" in xhr ? xhr.response : (xhr as any).responseText;
			resolve(new Response(body, opts));
		};
		xhr.onerror = () => {
			reject(new TypeError("Network request failed"));
		};
		xhr.ontimeout = () => {
			reject(new TypeError("Network request failed"));
		};
		xhr.open(options.method || "", url as string, true);

		Object.keys(options.headers as Headers).forEach((key) => {
			const headerValue = options.headers
				? (options.headers[key as keyof HeadersInit] as string)
				: "";
			xhr.setRequestHeader(key, headerValue);
		});

		if (xhr.upload && options.onProgress) {
			xhr.upload.onprogress = options.onProgress;
		}

		if (options.onAbortPossible) {
			options.onAbortPossible(() => xhr.abort());
		}

		xhr.send(options.body as XMLHttpRequestBodyInit);
	});

export const customFetch = (
	uri: URL | RequestInfo,
	options: CustomFetchOptions,
): Promise<Response> => {
	if (options.useUpload) {
		return uploadFetch(uri, options);
	}
	return fetch(uri, options);
};
