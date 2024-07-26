import { icon } from "../../assets/svgIcon";

const svgIcon = (
	size = 14,
	color = '#000',
	name: string,
	viewBox = '0 0 20 20',
	fillColor: string
): string =>
	`<svg width="${size}" height="${size}" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox='${viewBox}' fill='${
		fillColor ?? 'none'
	}' xmlns="http://www.w3.org/2000/svg">
        ${icon(fillColor)[name]}
</svg>`;

export default svgIcon;

export const svgWithCustomHeightWidth = (
	height = 16,
	width = 14,
	color = '#000',
	name: string,
	viewBox = '0 0 16 14',
	fillColor: string,
	strokeWidth = '1.5'
): string =>
	`<svg width="${width}" height="${height}"  stroke-width="${strokeWidth}"  viewBox='${viewBox}' fill="none" xmlns="http://www.w3.org/2000/svg">
        ${icon(fillColor)[name]}
</svg>`;
export const svgIconNoStroke = (
	size = 14,
	color = '#000',
	name: string,
	viewBox = '0 0 20 20',
	fillColor: string
): string =>
	`<svg width="${size}" height="${size}" viewBox='${viewBox}' fill="none" xmlns="http://www.w3.org/2000/svg">
        ${icon(fillColor)[name]}
</svg>`;
