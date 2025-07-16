import type { StaticImageData } from "next/image";

export interface MediaItem {
	sourceUrl?: string | null;
	mediaItemUrl?: string | null;
	mediaDetails?: {
		width?: number | null;
		height?: number | null;
	} | null;
}

export function mediaItemToImageData(
	mediaItem: MediaItem | undefined,
): StaticImageData | undefined {
	if (!mediaItem) {
		return;
	}

	const { mediaItemUrl, sourceUrl, mediaDetails } = mediaItem;

	if (!mediaDetails) {
		return;
	}

	const url = mediaItemUrl || sourceUrl;
	const { width, height } = mediaDetails;

	if (url && width && height) {
		return {
			src: url,
			width,
			height,
		};
	}
}
